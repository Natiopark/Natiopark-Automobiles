"use client";

import { useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

const TRUNCATE_LEN = 160;

function Stars({ count = 5, size = 18 }: { count?: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${count} étoiles`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          aria-hidden
          className="shrink-0"
        >
          <path
            fill="#FBBC05"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </span>
  );
}

function GoogleWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-baseline gap-0 font-medium tracking-tight ${className}`}
      aria-label="Google"
    >
      <span style={{ color: "#4285F4" }}>G</span>
      <span style={{ color: "#EA4335" }}>o</span>
      <span style={{ color: "#FBBC05" }}>o</span>
      <span style={{ color: "#4285F4" }}>g</span>
      <span style={{ color: "#34A853" }}>l</span>
      <span style={{ color: "#EA4335" }}>e</span>
    </span>
  );
}

function GoogleG({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden
      className="shrink-0"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function ReviewCard({
  name,
  initial,
  quote,
}: {
  name: string;
  initial: string;
  quote: string;
}) {
  const needsTruncate = quote.length > TRUNCATE_LEN;
  const [expanded, setExpanded] = useState(false);
  const display = !needsTruncate || expanded ? quote : `${quote.slice(0, TRUNCATE_LEN).trimEnd()}…`;

  return (
    <article className="flex h-full min-w-[280px] max-w-[320px] shrink-0 flex-col rounded-xl bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.18)] md:min-w-0 md:max-w-none md:shrink">
      <header className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a3a2f] text-sm font-semibold text-white"
            aria-hidden
          >
            {initial}
          </span>
          <div>
            <p className="text-sm font-semibold text-[#202124]">{name}</p>
            <div className="mt-0.5 flex items-center gap-1.5">
              <Stars size={14} />
            </div>
          </div>
        </div>
        <GoogleG size={16} />
      </header>
      <blockquote className="mt-3 flex-1 text-[13px] leading-relaxed text-[#3c4043]">
        <p>{display}</p>
        {needsTruncate && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-1.5 text-[12px] font-medium text-[#1a73e8] hover:underline"
          >
            {expanded ? "Réduire" : "Lire la suite"}
          </button>
        )}
      </blockquote>
    </article>
  );
}

export function GoogleReviews() {
  const { googleReviews: data } = site;
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(320, el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <section
      className="section-pad section-luxury relative bg-charcoal-deep py-20 md:py-28"
      aria-label="Avis Google"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
          {/* Rating summary — left */}
          <Reveal className="shrink-0 text-center lg:w-[240px] lg:text-left">
            <p className="display text-3xl tracking-[0.08em] text-platinum md:text-4xl">
              {data.label}
            </p>
            <div className="mt-3 flex justify-center lg:justify-start">
              <Stars size={22} />
            </div>
            <p className="mt-3 text-sm text-silver/90">
              Basée sur <strong className="font-semibold text-platinum">{data.count}</strong> avis
            </p>
            <p className="mt-2 text-lg font-semibold text-platinum">{data.ratingDisplay}</p>
            <div className="mt-4 flex justify-center lg:justify-start">
              <GoogleWordmark className="text-xl" />
            </div>
          </Reveal>

          {/* Review cards — right */}
          <div className="relative min-w-0 flex-1">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="absolute top-1/2 left-0 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-charcoal-deep/90 text-platinum shadow-lg backdrop-blur-sm transition hover:bg-white/10 md:hidden"
              aria-label="Avis précédent"
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="absolute top-1/2 right-0 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-charcoal-deep/90 text-platinum shadow-lg backdrop-blur-sm transition hover:bg-white/10 md:hidden"
              aria-label="Avis suivant"
            >
              <Chevron dir="right" />
            </button>

            <div
              ref={scrollerRef}
              className="flex gap-4 overflow-x-auto scroll-smooth px-10 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-2 md:overflow-visible md:px-0 xl:grid-cols-4 [&::-webkit-scrollbar]:hidden"
            >
              {data.reviews.map((r, i) => (
                <Reveal key={r.name} delay={i * 0.08} className="h-full">
                  <ReviewCard name={r.name} initial={r.initial} quote={r.quote} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
