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
    <svg viewBox="0 0 32 32" className="h-7 w-7 text-accent" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
      <path d="M6 24V14c0-2 2-4 5-4h10c3 0 5 2 5 4v10" />
      <path d="M6 18h20M10 22h4M18 22h4" />
    </svg>
  ),
  Conduite: (
    <svg viewBox="0 0 32 32" className="h-7 w-7 text-accent" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
      <circle cx="16" cy="16" r="10" />
      <circle cx="16" cy="16" r="3" />
      <path d="M16 6v4M16 22v4M6 16h4M22 16h4" />
    </svg>
  ),
  Esthétique: (
    <svg viewBox="0 0 32 32" className="h-7 w-7 text-accent" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
      <path d="M16 6l2.5 7.5H26l-6 4.5 2.5 7.5L16 21l-6.5 4.5L12 18l-6-4.5h7.5z" />
    </svg>
  ),
  Sécurité: (
    <svg viewBox="0 0 32 32" className="h-7 w-7 text-accent" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
      <path d="M16 5l10 4v7c0 6-4.5 10-10 11C10.5 26 6 22 6 16V9l10-4z" />
      <path d="M12 16l3 3 5-6" />
    </svg>
  ),
};

export function FicheOptions({ vehicle }: Props) {
  const reduce = useReducedMotion();

  return (
    <section className="section-pad section-mesh relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-3">Équipements</p>
          <h2 className="display text-3xl text-platinum md:text-4xl">
            Options détaillées
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Configuration regroupée par univers — habitacle, conduite, esthétique
            et sécurité.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2" style={{ perspective: 1200 }}>
          {vehicle.options.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <motion.div
                className="glass sheen card-lux h-full rounded-sm p-6 md:p-7"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={
                  reduce
                    ? undefined
                    : {
                        y: -6,
                        rotateX: 3,
                        rotateY: i % 2 === 0 ? -3 : 3,
                        transition: { type: "spring", stiffness: 280, damping: 20 },
                      }
                }
              >
                <div className="flex items-center gap-3">
                  {categoryIcons[group.category] ?? null}
                  <h3 className="display text-xl text-platinum">{group.category}</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-start gap-3 border-b border-white/[0.06] pb-3 last:border-0 last:pb-0"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                      <div>
                        <p className="text-sm text-platinum">{item.name}</p>
                        {item.detail ? (
                          <p className="mt-0.5 text-xs text-muted">{item.detail}</p>
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
