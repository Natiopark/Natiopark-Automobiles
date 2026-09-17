"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion, useScroll } from "framer-motion";

/**
 * Apple-style scroll-scrubbed showreel.
 * Tall section (~240vh) + sticky viewport; video.currentTime tracks scroll progress.
 * Never plays() — only seeks. Respects prefers-reduced-motion.
 */
export function ScrollScrubVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const pendingProgress = useRef(0);
  const [ready, setReady] = useState(false);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scrub = useCallback(
    (progress: number) => {
      const video = videoRef.current;
      if (!video || !ready || !Number.isFinite(video.duration) || video.duration <= 0) {
        return;
      }
      const clamped = Math.min(Math.max(progress, 0), 1);
      const next = clamped * video.duration;
      if (Math.abs(video.currentTime - next) > 0.008) {
        video.currentTime = next;
      }
    },
    [ready],
  );

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
  }, []);

  useEffect(() => {
    if (!ready || !videoRef.current) return;
    const video = videoRef.current;
    video.pause();
    if (reduce) {
      // Static middle frame — no scrub motion
      video.currentTime = video.duration * 0.5;
    } else {
      scrub(scrollYProgress.get());
    }
  }, [ready, reduce, scrub, scrollYProgress]);

  useEffect(() => {
    if (reduce) return;

    const unsub = scrollYProgress.on("change", (value) => {
      pendingProgress.current = value;
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        scrub(pendingProgress.current);
      });
    });

    return () => {
      unsub();
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [scrollYProgress, scrub, reduce]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[240vh] bg-[#07080a]"
      aria-label="Showreel NatioPark Automobiles"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/scroll-showreel.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center"
          onLoadedMetadata={(e) => {
            const v = e.currentTarget;
            v.pause();
            setReady(true);
          }}
          aria-hidden
        />

        {/* Dark luxury overlays — consistent with hero / orbit sections */}
        <div className="hero-scrim pointer-events-none absolute inset-0 opacity-50" />
        <div className="hero-vignette pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,8,10,0.5) 0%, transparent 28%, transparent 72%, rgba(7,8,10,0.62) 100%)",
          }}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-12 z-10 flex justify-center px-6">
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
