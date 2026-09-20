"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import type { VehicleDossier } from "@/data/vehicles";

type Props = {
  vehicle: VehicleDossier;
};

export function FicheTimeline({ vehicle }: Props) {
  const reduce = useReducedMotion();
  const entries = vehicle.historique;
  const step = 72;
  const h = Math.max(80, entries.length * step);

  return (
    <section className="section-pad section-aurora relative overflow-hidden py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-2">Pédigrée</p>
          <h2 className="display text-3xl text-platinum md:text-4xl">
            Historique &amp; provenance
          </h2>
        </Reveal>

        <div className="relative mt-8 grid gap-6 lg:grid-cols-[88px_1fr]">
          <div className="relative hidden lg:block" aria-hidden>
            <svg
              viewBox={`0 0 64 ${h}`}
              className="sticky top-28 h-auto w-14"
              preserveAspectRatio="xMidYMin meet"
            >
              <defs>
                <linearGradient id="ficheTimeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2d5a45" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#a8b5a0" />
                  <stop offset="100%" stopColor="#2d5a45" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <motion.line
                x1="32"
                y1="12"
                x2="32"
                y2={h - 12}
                stroke="url(#ficheTimeGrad)"
                strokeWidth="1.5"
                strokeDasharray="6 8"
                initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1 }}
              />
              {entries.map((_, i) => {
                const cy = 28 + i * step;
                return (
                  <motion.circle
                    key={i}
                    cx="32"
                    cy={cy}
                    r="5"
                    fill="#121318"
                    stroke="#a8b5a0"
                    strokeWidth="1.4"
                    initial={reduce ? false : { scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 + i * 0.05, type: "spring", stiffness: 240 }}
                  />
                );
              })}
            </svg>
          </div>

          <ol className="space-y-2.5">
            {entries.map((e, i) => (
              <Reveal key={`${e.date}-${e.title}`} delay={Math.min(i * 0.04, 0.35)}>
                <li className="glass relative overflow-hidden rounded-sm px-4 py-3.5 md:flex md:items-start md:gap-5 md:px-5 md:py-3.5">
                  <div className="mb-1.5 flex items-center gap-2 md:mb-0 md:w-36 md:shrink-0 md:flex-col md:items-start md:gap-0.5">
                    <span className="lg:hidden h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="display text-lg leading-tight text-accent md:text-xl">
                      {e.date}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-medium text-platinum md:text-base">
                      {e.title}
                    </h3>
                    <p className="mt-1 text-xs leading-snug text-muted md:text-[0.8125rem] md:leading-relaxed">
                      {e.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
