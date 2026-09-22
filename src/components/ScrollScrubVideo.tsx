"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const FRAME_COUNT = 124;
const FRAME_PAD = 3;
const FRAMES_BASE = "/videos/home-showreel-frames";
const DEFAULT_POSTER = "/videos/home-showreel-poster.jpg";

function frameSrc(index: number, frameCount: number = FRAME_COUNT) {
  const n = String(
    Math.max(0, Math.min(frameCount - 1, index)),
  ).padStart(FRAME_PAD, "0");
  return `${FRAMES_BASE}/frame-${n}.jpg`;
}

/**
 * Tall scroll track + sticky full-bleed canvas scrubbed via JPEG image sequence.
 * No HTML video — reliable on Safari/Mac. Preloads frames progressively; only
 * scrubs within the contiguous loaded prefix until all frames are ready.
 *
 * API:
 * - poster?: string — CSS fallback until first frame paints (default home-showreel-poster.jpg)
 * - frameCount?: number — sequence length (default 124: frame-000 … frame-123)
 * - heightSvh?: number — scroll track height in svh (default 220; sticky viewport 100svh)
 */
export function ScrollScrubVideo({
  poster = DEFAULT_POSTER,
  frameCount = FRAME_COUNT,
  heightSvh = 220,
}: {
  poster?: string;
  frameCount?: number;
  heightSvh?: number;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let cancelled = false;
    let raf = 0;
    const frames: (HTMLImageElement | null)[] = new Array(frameCount).fill(
      null,
    );
    let loadedCount = 0;
    let drawnIndex = -1;

    const drawImageCover = (img: HTMLImageElement) => {
      const sticky = canvas.parentElement;
      const w = sticky?.clientWidth || section.clientWidth || window.innerWidth;
      const h =
        sticky?.clientHeight ||
        Math.round(window.innerHeight) ||
        section.clientHeight;
      if (w <= 0 || h <= 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = Math.round(w * dpr);
      const ch = Math.round(h * dpr);
      if (canvas.width !== cw || canvas.height !== ch) {
        canvas.width = cw;
        canvas.height = ch;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
      }

      const iw = img.naturalWidth || img.width;
      const ih = img.naturalHeight || img.height;
      if (!iw || !ih) return;

      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      ctx.fillStyle = "#07080a";
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    const drawFrame = (index: number) => {
      if (loadedCount <= 0) return;
      const clamped = Math.max(
        0,
        Math.min(index, loadedCount - 1, frameCount - 1),
      );
      const img = frames[clamped];
      if (!img || !img.complete || img.naturalWidth === 0) return;
      if (clamped === drawnIndex && canvas.width > 0) return;
      drawImageCover(img);
      drawnIndex = clamped;
    };

    const scrollProgress = () => {
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) return 0;
      const p = -rect.top / total;
      return Math.min(1, Math.max(0, p));
    };

    const syncFromScroll = () => {
      if (cancelled) return;
      if (reduce) {
        drawFrame(Math.floor(frameCount * 0.45));
        return;
      }
      const p = scrollProgress();
      drawFrame(Math.round(p * (frameCount - 1)));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(syncFromScroll);
    };

    const onResize = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        drawnIndex = -1;
        syncFromScroll();
      });
    };

    const loadOne = (index: number): Promise<void> =>
      new Promise((resolve) => {
        if (cancelled) {
          resolve();
          return;
        }
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          if (cancelled) {
            resolve();
            return;
          }
          frames[index] = img;
          let n = 0;
          while (n < frameCount && frames[n]) n += 1;
          loadedCount = n;
          syncFromScroll();
          resolve();
        };
        img.onerror = () => resolve();
        img.src = frameSrc(index, frameCount);
      });

    const boot = async () => {
      await loadOne(0);
      if (cancelled) return;
      syncFromScroll();

      if (reduce) {
        const mid = Math.floor(frameCount * 0.45);
        if (mid !== 0) await loadOne(mid);
        syncFromScroll();
        return;
      }

      const concurrency = 6;
      let next = 1;
      const workers = Array.from({ length: concurrency }, async () => {
        while (!cancelled) {
          const i = next;
          next += 1;
          if (i >= frameCount) return;
          await loadOne(i);
        }
      });
      await Promise.all(workers);
      if (!cancelled) {
        drawnIndex = -1;
        syncFromScroll();
      }
    };

    void boot();

    if (!reduce) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [frameCount, reduce]);

  return (
    <section
      ref={sectionRef}
      className={
        reduce
          ? "relative h-[100svh] w-full overflow-hidden bg-[#07080a]"
          : "relative w-full bg-[#07080a]"
      }
      style={reduce ? undefined : { height: `${heightSvh}svh` }}
      aria-label="Showreel NatioPark Automobiles"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden bg-[#07080a]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
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
