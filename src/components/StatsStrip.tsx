"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const stats = [
  { value: 360, suffix: "°", label: "Service conciergerie", caption: "Un interlocuteur unique" },
  { value: 2, suffix: "", label: "Centres en Provence", caption: "Marseille & Aix" },
  { value: 1, suffix: "", label: "Rendez-vous uniquement", caption: "Confidentialité & exigence", display: "RDV" },
];

function CountUp({
  value,
  suffix,
  display,
  start,
}: {
  value: number;
  suffix: string;
  display?: string;
  start: boolean;
}) {
  const [n, setN] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!start) return;
    if (display || reduce) {
      setN(value);
      return;
    }
    const duration = 1100;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value, display, reduce]);

  if (display) {
    return (
      <span className="display text-4xl text-platinum md:text-5xl">
        {display}
      </span>
    );
  }

  return (
    <span className="display text-4xl text-platinum md:text-5xl">
      {n}
      {suffix}
    </span>
  );
}

export function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-pad section-aurora relative py-16 md:py-20">
      <div className="divider-line absolute inset-x-0 top-0" />
      <div ref={ref} className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {stats.map((s, i) => (
          <motion.article
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="glass sheen relative overflow-hidden rounded-sm px-6 py-8 text-center"
          >
            <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-forest-mid/25 blur-2xl" />
            <CountUp value={s.value} suffix={s.suffix} display={s.display} start={inView} />
            <p className="mt-3 text-[0.7rem] font-medium tracking-[0.22em] text-accent uppercase">
              {s.label}
            </p>
            <p className="mt-2 text-xs text-muted">{s.caption}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
