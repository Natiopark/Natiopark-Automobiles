"use client";

import { useEffect, useRef } from "react";
import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";

/**
 * Tall scroll track + sticky full-bleed video scrubbed by scroll progress.
 * Never autoplays/loops — only seeks via currentTime. Safari unlock on metadata.
 * Falls back to a mid-frame still when prefers-reduced-motion.
 */
export function ScrollScrubVideo({
  src = "/videos/home-showreel.mp4",
}: {
  src?: string;
}) {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef(0);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrubTo = (progress: number) => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;
    const t = Math.min(Math.max(progress, 0), 1) * video.duration;
    if (Math.abs(video.currentTime - t) > 0.01) {
      try {
        video.currentTime = t;
      } catch {
        /* seek may fail before enough data */
      }
    }
  };

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    progressRef.current = progress;
    if (reduce) return;
    scrubTo(progress);
  });

  // Safari unlock on loadedmetadata + rAF backup while section in view
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const unlock = () => {
      video.muted = true;
      void video
        .play()
        .then(() => {
          video.pause();
        })
        .catch(() => {});
      if (reduce) {
        if (Number.isFinite(video.duration) && video.duration > 0) {
          video.currentTime = video.duration * 0.45;
        }
      } else {
        video.currentTime = 0;
        scrubTo(progressRef.current);
      }
    };

    if (video.readyState >= 1) unlock();
    else video.addEventListener("loadedmetadata", unlock, { once: true });

    if (reduce) {
      return () => video.removeEventListener("loadedmetadata", unlock);
    }

    let raf = 0;
    let alive = true;
    const tick = () => {
      if (!alive) return;
      const rect = container.getBoundingClientRect();
      const inView = rect.bottom > 0 && rect.top < window.innerHeight;
      if (inView) {
        const p = scrollYProgress.get();
        progressRef.current = p;
        scrubTo(p);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      alive = false;
      video.removeEventListener("loadedmetadata", unlock);
      cancelAnimationFrame(raf);
    };
  }, [reduce, scrollYProgress]);

  return (
    <section
      ref={containerRef}
      className={
        reduce
          ? "relative h-[100svh] w-full overflow-hidden bg-[#07080a]"
          : "relative h-[220svh] w-full bg-[#07080a]"
      }
      aria-label="Showreel NatioPark Automobiles"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden
        />

        <div className="hero-scrim pointer-events-none absolute inset-0 opacity-45" />
        <div className="hero-vignette pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,8,10,0.55) 0%, transparent 30%, transparent 70%, rgba(7,8,10,0.7) 100%)",
          }}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-10 z-10 flex justify-center px-6">
          <p
            className="eyebrow tracking-[0.28em] text-platinum/55"
            style={{ fontFamily: "Verdana, Geneva, sans-serif" }}
          >
            NatioPark
          </p>
        </div>
      </div>
    </section>
  );
}
