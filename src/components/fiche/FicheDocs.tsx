"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import type { DocStatus, VehicleDossier } from "@/data/vehicles";

type Props = {
  vehicle: VehicleDossier;
};

const statusLabel: Record<DocStatus, string> = {
  disponible: "Disponible",
  "sur demande": "Sur demande",
  archive: "Archive",
};

const statusClass: Record<DocStatus, string> = {
  disponible: "border-forest-light/50 bg-forest/30 text-accent",
  "sur demande": "border-silver/30 bg-white/[0.04] text-silver",
  archive: "border-white/10 bg-charcoal-deep/60 text-muted",
};

function DocGlyph({ status }: { status: DocStatus }) {
  if (status === "disponible") {
    return (
      <svg viewBox="0 0 40 48" className="h-10 w-8 text-accent" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <path d="M8 4h16l8 8v32H8z" />
        <path d="M24 4v8h8" />
        <path d="M14 26l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (status === "sur demande") {
    return (
      <svg viewBox="0 0 40 48" className="h-10 w-8 text-silver" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
        <path d="M8 4h16l8 8v32H8z" />
        <path d="M24 4v8h8" />
        <circle cx="20" cy="28" r="1.5" fill="currentColor" stroke="none" />
        <path d="M20 18v6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 48" className="h-10 w-8 text-muted" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
      <path d="M8 4h16l8 8v32H8z" />
      <path d="M24 4v8h8" />
      <path d="M14 24h12M14 30h8" opacity="0.6" />
    </svg>
  );
}

export function FicheDocs({ vehicle }: Props) {
  const reduce = useReducedMotion();

  return (
    <section className="section-pad relative py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-3">Dossier acheteur</p>
          <h2 className="display text-3xl text-platinum md:text-4xl">
            Documentation
          </h2>
        </Reveal>

        {/* Schema strip */}
        <div className="mt-10 hidden overflow-x-auto md:block">
          <svg
            viewBox="0 0 900 70"
            className="mx-auto w-full max-w-4xl"
            role="img"
            aria-label="Schéma de documentation acheteur"
          >
            <defs>
              <linearGradient id="ficheDocLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2d5a45" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#c8c5be" />
                <stop offset="100%" stopColor="#2d5a45" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <motion.path
              d="M40 35 H860"
              stroke="url(#ficheDocLine)"
              strokeWidth="1.25"
              fill="none"
              strokeDasharray="5 7"
              initial={reduce ? false : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            {["Carnet", "Factures", "COC", "CT"].map(
              (label, i) => {
                const x = 110 + i * 220;
                return (
                  <g key={label}>
                    <motion.rect
                      x={x - 28}
                      y={18}
                      width="56"
                      height="34"
                      rx="2"
                      fill="#121318"
                      stroke="#a8b5a0"
                      strokeWidth="1"
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                    />
                    <text
                      x={x}
                      y={39}
                      textAnchor="middle"
                      fill="#e8e6e3"
                      fontSize="9"
                      fontFamily="Verdana, Geneva, sans-serif"
                      letterSpacing="0.06em"
                    >
                      {label}
                    </text>
                  </g>
                );
              },
            )}
          </svg>
        </div>

        <div className="mt-8 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {vehicle.documentation.map((doc, i) => (
            <Reveal key={doc.label} delay={(i % 4) * 0.05}>
              <article className="glass flex h-full flex-col rounded-sm p-5">
                <div className="flex items-start justify-between gap-3">
                  <DocGlyph status={doc.status} />
                  <span
                    className={`rounded-sm border px-2 py-0.5 text-[0.6rem] tracking-[0.14em] uppercase ${statusClass[doc.status]}`}
                  >
                    {statusLabel[doc.status]}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-medium text-platinum">{doc.label}</h3>
                {doc.note ? (
                  <p className="mt-2 text-xs text-muted">{doc.note}</p>
                ) : (
                  <p className="mt-2 text-xs text-muted/50">—</p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
