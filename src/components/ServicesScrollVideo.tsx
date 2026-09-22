"use client";

import { useRef } from "react";
import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";

type Props = {
  src?: string;
};

/**
 * Tall scroll section: sticky full-bleed video scrubbed by scroll progress.
 * Falls back to a mid-frame still when prefers-reduced-motion.
 */
export function ServicesScrollVideo({
  src = "/videos/services-scroll.mp4",
}: Props) {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reduce) return;
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;
    const t = Math.min(Math.max(progress, 0), 1) * video.duration;
    if (Math.abs(video.currentTime - t) > 0.01) {
      video.currentTime = t;
    }
  });

  // Mid-frame still for reduced motion
  const onLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;
    if (reduce) {
      video.pause();
      video.currentTime = video.duration * 0.45;
    } else {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section
      ref={containerRef}
      className={
        reduce
          ? "relative h-[100svh] min-h-[420px] w-full bg-[#07080a]"
          : "relative h-[240svh] w-full bg-[#07080a]"
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
          onLoadedMetadata={onLoadedMetadata}
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden
        />

        <div className="hero-scrim pointer-events-none absolute inset-0 opacity-40" />
        <div className="hero-vignette pointer-events-none absolute inset-0" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,8,10,0.5) 0%, transparent 28%, transparent 72%, rgba(7,8,10,0.65) 100%)",
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
