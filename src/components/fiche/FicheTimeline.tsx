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
  const h = Math.max(120, entries.length * 110);

  return (
    <section className="section-pad section-aurora relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-3">Pédigrée</p>
          <h2 className="display text-3xl text-platinum md:text-4xl">
            Historique &amp; provenance
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Jalons documentés du cycle de vie — démonstration de traçabilité
            NatioPark.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-10 lg:grid-cols-[120px_1fr]">
          {/* SVG connector (desktop) */}
          <div className="relative hidden lg:block" aria-hidden>
            <svg
              viewBox={`0 0 80 ${h}`}
              className="sticky top-32 h-auto w-20"
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
                x1="40"
                y1="20"
                x2="40"
                y2={h - 20}
                stroke="url(#ficheTimeGrad)"
                strokeWidth="1.5"
                strokeDasharray="6 8"
                initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4 }}
              />
              {entries.map((_, i) => {
                const cy = 40 + i * 110;
                return (
                  <motion.circle
                    key={i}
                    cx="40"
                    cy={cy}
                    r="7"
                    fill="#121318"
                    stroke="#a8b5a0"
                    strokeWidth="1.5"
                    initial={reduce ? false : { scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.12, type: "spring", stiffness: 220 }}
                  />
                );
              })}
            </svg>
          </div>

          <ol className="space-y-6">
            {entries.map((e, i) => (
              <Reveal key={`${e.date}-${e.title}`} delay={i * 0.08}>
                <li className="glass relative overflow-hidden rounded-sm p-6 md:flex md:gap-8 md:p-7">
                  <div className="mb-3 flex items-center gap-3 md:mb-0 md:w-28 md:shrink-0 md:flex-col md:items-start md:gap-1">
                    <span className="lg:hidden h-2 w-2 rounded-full bg-accent" />
                    <span className="display text-2xl text-accent">{e.date}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-platinum">{e.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{e.text}</p>
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
