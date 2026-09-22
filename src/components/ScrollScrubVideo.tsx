"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Sticky full-bleed video scrubbed by scroll. Uses canvas draw after seek
 * (more reliable than bare currentTime on Safari) + getBoundingClientRect progress.
 */
export function ScrollScrubVideo({
  src = "/videos/home-showreel.mp4",
  poster = "/videos/home-showreel-poster.jpg",
}: {
  src?: string;
  poster?: string;
}) {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const readyRef = useRef(false);
  const seekingRef = useRef(false);
  const targetRef = useRef(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!container || !video || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = container.clientWidth;
      const h = window.innerHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      draw();
    };

    const draw = () => {
      if (!ctx || video.readyState < 2) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const vw = video.videoWidth || 1;
      const vh = video.videoHeight || 1;
      const scale = Math.max(cw / vw, ch / vh);
      const dw = vw * scale;
      const dh = vh * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;
      ctx.fillStyle = "#07080a";
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(video, dx, dy, dw, dh);
    };

    const progressFromScroll = () => {
      const rect = container.getBoundingClientRect();
      const total = container.offsetHeight - window.innerHeight;
      if (total <= 0) return 0;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      return scrolled / total;
    };

    const applySeek = () => {
      if (reduce || !readyRef.current || seekingRef.current) return;
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      const t = targetRef.current * Math.max(video.duration - 0.05, 0);
      if (Math.abs(video.currentTime - t) < 0.04) {
        draw();
        return;
      }
      seekingRef.current = true;
      const onSeeked = () => {
        seekingRef.current = false;
        draw();
        // catch up if scroll moved during seek
        const again = targetRef.current * Math.max(video.duration - 0.05, 0);
        if (Math.abs(video.currentTime - again) > 0.05) applySeek();
      };
      video.addEventListener("seeked", onSeeked, { once: true });
      try {
        video.currentTime = t;
      } catch {
        seekingRef.current = false;
      }
    };

    const onScroll = () => {
      targetRef.current = progressFromScroll();
      applySeek();
    };

    const unlock = async () => {
      video.muted = true;
      video.playsInline = true;
      try {
        await video.play();
        video.pause();
      } catch {
        /* ignore */
      }
      readyRef.current = true;
      if (reduce) {
        video.currentTime = video.duration * 0.45;
        video.addEventListener("seeked", () => draw(), { once: true });
      } else {
        targetRef.current = progressFromScroll();
        applySeek();
      }
    };

    if (video.readyState >= 1) void unlock();
    else video.addEventListener("loadedmetadata", () => void unlock(), { once: true });

    video.addEventListener("loadeddata", draw);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      video.removeEventListener("loadeddata", draw);
    };
  }, [reduce, src]);

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
          poster={poster}
          muted
          playsInline
          preload="auto"
          className="pointer-events-none absolute opacity-0"
          aria-hidden
        />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
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
