"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Full-bleed looping muted background showreel (before orbit section).
 * Autoplay + loop; falls back to a static frame when prefers-reduced-motion.
 */
export function ScrollScrubVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reduce) {
      video.pause();
      const onMeta = () => {
        if (Number.isFinite(video.duration) && video.duration > 0) {
          video.currentTime = video.duration * 0.45;
        }
      };
      if (video.readyState >= 1) onMeta();
      else video.addEventListener("loadedmetadata", onMeta, { once: true });
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.loop = true;
    const tryPlay = () => {
      void video.play().catch(() => {
        /* Autoplay may be blocked until user gesture — keep muted for retry */
      });
    };
    if (video.readyState >= 2) tryPlay();
    else video.addEventListener("loadeddata", tryPlay, { once: true });

    const onVis = () => {
      if (document.hidden) video.pause();
      else tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [reduce]);

  return (
    <section
      className="relative h-[70svh] min-h-[420px] w-full overflow-hidden bg-[#07080a] md:h-[80svh]"
      aria-label="Showreel NatioPark Automobiles"
    >
      <video
        ref={videoRef}
        src="/videos/scroll-showreel.mp4"
        muted
        playsInline
        loop
        autoPlay
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
    </section>
  );
}
