"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import type { VehicleDossier } from "@/data/vehicles";

type Props = {
  vehicle: VehicleDossier;
};

const categoryIcons: Record<string, ReactNode> = {
  Habitacle: (
    <svg viewBox="0 0 32 32" className="h-5 w-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
      <path d="M6 24V14c0-2 2-4 5-4h10c3 0 5 2 5 4v10" />
      <path d="M6 18h20M10 22h4M18 22h4" />
    </svg>
  ),
  Conduite: (
    <svg viewBox="0 0 32 32" className="h-5 w-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
      <circle cx="16" cy="16" r="10" />
      <circle cx="16" cy="16" r="3" />
      <path d="M16 6v4M16 22v4M6 16h4M22 16h4" />
    </svg>
  ),
  Esthétique: (
    <svg viewBox="0 0 32 32" className="h-5 w-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
      <path d="M16 6l2.5 7.5H26l-6 4.5 2.5 7.5L16 21l-6.5 4.5L12 18l-6-4.5h7.5z" />
    </svg>
  ),
  Sécurité: (
    <svg viewBox="0 0 32 32" className="h-5 w-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
      <path d="M16 5l10 4v7c0 6-4.5 10-10 11C10.5 26 6 22 6 16V9l10-4z" />
      <path d="M12 16l3 3 5-6" />
    </svg>
  ),
};

export function FicheOptions({ vehicle }: Props) {
  const reduce = useReducedMotion();

  return (
    <section className="section-pad section-mesh relative py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-2">Équipements</p>
          <h2 className="display text-3xl text-platinum md:text-4xl">
            Options détaillées
          </h2>
        </Reveal>

        <div
          className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: 1200 }}
        >
          {vehicle.options.map((group, i) => (
            <Reveal key={group.category} delay={Math.min(i * 0.05, 0.3)}>
              <motion.div
                className="glass sheen h-full rounded-sm px-4 py-4 md:px-5 md:py-4"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -4,
                        rotateX: 2,
                        rotateY: i % 2 === 0 ? -2 : 2,
                        transition: { type: "spring", stiffness: 300, damping: 22 },
                      }
                }
              >
                <div className="flex items-center gap-2.5">
                  {categoryIcons[group.category] ?? (
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  )}
                  <h3 className="display text-base text-platinum md:text-lg">
                    {group.category}
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-start gap-2 border-b border-white/[0.05] py-1.5 last:border-0 last:pb-0"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/80" />
                      <div className="min-w-0">
                        <p className="text-xs text-platinum md:text-[0.8125rem]">
                          {item.name}
                        </p>
                        {item.detail ? (
                          <p className="mt-0.5 text-[0.7rem] leading-snug text-muted">
                            {item.detail}
                          </p>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
