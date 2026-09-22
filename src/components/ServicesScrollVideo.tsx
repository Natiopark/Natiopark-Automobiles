"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";

type Props = {
  src?: string;
  children?: ReactNode;
};

/**
 * Hero bandeau: tall scroll track with sticky full-bleed video scrubbed by
 * scroll progress. Children render as the title block over light overlays.
 * Falls back to a mid-frame still when prefers-reduced-motion.
 */
export function ServicesScrollVideo({
  src = "/videos/services-scroll.mp4",
  children,
}: Props) {
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

  // Safari unlock + rAF scroll backup for reliable seeking
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
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const total = container.offsetHeight - window.innerHeight;
        if (total <= 0) return;
        const p = Math.min(Math.max(-rect.top / total, 0), 1);
        progressRef.current = p;
        scrubTo(p);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      video.removeEventListener("loadedmetadata", unlock);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduce]);

  const onLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;
    video.muted = true;
    void video
      .play()
      .then(() => {
        video.pause();
      })
      .catch(() => {});
    if (reduce) {
      video.currentTime = video.duration * 0.45;
    } else {
      video.currentTime = 0;
      scrubTo(progressRef.current);
    }
  };

  return (
    <section
      ref={containerRef}
      className={
        reduce
          ? "relative min-h-[100svh] w-full bg-[#07080a]"
          : "relative h-[220svh] w-full bg-[#07080a]"
      }
      aria-label="Services NatioPark Automobiles"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={onLoadedMetadata}
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden
        />

        {/* Light overlays — same stack as SectionPhotoBg `light` */}
        <div className="hero-scrim pointer-events-none absolute inset-0" />
        <div className="hero-vignette pointer-events-none absolute inset-0" />
        <div className="hero-aurora pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,8,10,0.35) 0%, rgba(7,8,10,0.18) 42%, rgba(7,8,10,0.45) 100%)",
          }}
        />

        {children ? (
          <div className="relative z-10 h-full w-full">{children}</div>
        ) : null}
      </div>
    </section>
  );
}
