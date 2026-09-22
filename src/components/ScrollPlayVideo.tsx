"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Full-bleed muted showreel: autoplay/loop while ~40%+ visible (IntersectionObserver),
 * pause when leaving. Visible <video> (not canvas scrub). Respects reduced-motion.
 */
export function ScrollPlayVideo({
  src = "/videos/home-showreel.mp4",
  poster = "/videos/home-showreel-poster.jpg",
}: {
  src?: string;
  poster?: string;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inViewRef = useRef(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    if (reduce) {
      video.pause();
      video.removeAttribute("autoplay");
      return;
    }

    const tryPlay = () => {
      if (!inViewRef.current || reduce) return;
      video.muted = true;
      const p = video.play();
      if (p !== undefined) {
        p.catch(() => {
          /* Autoplay may be blocked until a gesture; retry on next intersection. */
        });
      }
    };

    const onLoadedData = () => {
      if (inViewRef.current) tryPlay();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        inViewRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          tryPlay();
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(section);

    if (video.readyState >= 2) {
      /* already have data */
    } else {
      video.addEventListener("loadeddata", onLoadedData);
    }

    return () => {
      observer.disconnect();
      video.removeEventListener("loadeddata", onLoadedData);
      video.pause();
    };
  }, [reduce, src]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] w-full overflow-hidden bg-[#07080a]"
      aria-label="Showreel NatioPark Automobiles"
    >
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          playsInline
          loop={!reduce}
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden={reduce ? undefined : true}
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

/** @deprecated Prefer ScrollPlayVideo — kept so page.tsx imports keep working. */
export const ScrollScrubVideo = ScrollPlayVideo;
