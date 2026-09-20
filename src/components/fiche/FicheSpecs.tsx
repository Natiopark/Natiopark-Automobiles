"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import type { VehicleDossier } from "@/data/vehicles";

type Props = {
  vehicle: VehicleDossier;
};

type SpecCard = {
  id: string;
  label: string;
  value: string;
  unit?: string;
  icon: "year" | "km" | "ext" | "int" | "power" | "gear" | "awd" | "fuel";
};

function SpecIcon({ kind }: { kind: SpecCard["icon"] }) {
  const common = {
    viewBox: "0 0 40 40",
    className: "h-9 w-9 text-accent",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
  } as const;

  switch (kind) {
    case "year":
      return (
        <svg {...common} aria-hidden>
          <rect x="8" y="10" width="24" height="22" rx="2" />
          <path d="M8 16h24M14 8v4M26 8v4" />
          <circle cx="20" cy="25" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "km":
      return (
        <svg {...common} aria-hidden>
          <circle cx="20" cy="22" r="12" />
          <path d="M20 22 L28 14" strokeLinecap="round" />
          <circle cx="20" cy="22" r="2" fill="currentColor" stroke="none" />
          <path d="M12 22h2M26 22h2M20 14v2" opacity="0.6" />
        </svg>
      );
    case "ext":
      return (
        <svg {...common} aria-hidden>
          <path d="M8 24c2-8 6-12 12-12s10 4 12 12" />
          <path d="M6 24h28" />
          <circle cx="12" cy="26" r="3" />
          <circle cx="28" cy="26" r="3" />
          <path d="M15 18h10" opacity="0.5" />
        </svg>
      );
    case "int":
      return (
        <svg {...common} aria-hidden>
          <path d="M10 28 V16c0-2 2-4 5-4h10c3 0 5 2 5 4v12" />
          <path d="M10 22h20" />
          <rect x="13" y="24" width="6" height="5" rx="1" />
          <rect x="21" y="24" width="6" height="5" rx="1" />
        </svg>
      );
    case "power":
      return (
        <svg {...common} aria-hidden>
          <path d="M22 8 L14 22h6l-2 10 10-14h-6l2-10z" strokeLinejoin="round" />
        </svg>
      );
    case "gear":
      return (
        <svg {...common} aria-hidden>
          <circle cx="20" cy="20" r="5" />
          <path d="M20 8v4M20 28v4M8 20h4M28 20h4M11 11l2.5 2.5M26.5 26.5L29 29M29 11l-2.5 2.5M11 29l2.5-2.5" />
        </svg>
      );
    case "awd":
      return (
        <svg {...common} aria-hidden>
          <circle cx="12" cy="20" r="5" />
          <circle cx="28" cy="20" r="5" />
          <path d="M17 20h6" />
          <path d="M12 15v-3M28 15v-3M12 25v3M28 25v3" opacity="0.5" />
        </svg>
      );
    case "fuel":
      return (
        <svg {...common} aria-hidden>
          <rect x="10" y="10" width="14" height="22" rx="2" />
          <path d="M24 14h4l3 4v10a2 2 0 0 1-2 2h-1" />
          <path d="M14 14h6" opacity="0.5" />
        </svg>
      );
  }
}

export function FicheSpecs({ vehicle }: Props) {
  const reduce = useReducedMotion();
  const km = new Intl.NumberFormat("fr-FR").format(vehicle.kilometrage);

  const cards: SpecCard[] = [
    { id: "annee", label: "Année", value: String(vehicle.annee), icon: "year" },
    { id: "km", label: "Kilométrage", value: km, unit: "km", icon: "km" },
    { id: "ext", label: "Extérieur", value: vehicle.couleurExt, icon: "ext" },
    { id: "int", label: "Intérieur", value: vehicle.couleurInt, icon: "int" },
    {
      id: "power",
      label: "Puissance",
      value: String(vehicle.puissanceCh),
      unit: "ch",
      icon: "power",
    },
    { id: "boite", label: "Boîte", value: vehicle.boite, icon: "gear" },
    { id: "tr", label: "Transmission", value: vehicle.transmission, icon: "awd" },
    { id: "fuel", label: "Carburant", value: vehicle.carburant, icon: "fuel" },
  ];

  return (
    <section className="section-pad section-aurora relative overflow-hidden py-16 md:py-24">
      <div className="divider-line absolute inset-x-0 top-0" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-3">Caractéristiques</p>
          <h2 className="display text-3xl text-platinum md:text-4xl">
            Infographie technique
          </h2>
        </Reveal>

        {/* Decorative SVG diagram — power curve hint */}
        <div className="mt-8 hidden md:block">
          <svg
            viewBox="0 0 960 64"
            className="w-full opacity-70"
            role="img"
            aria-label="Diagramme de performance"
          >
            <defs>
              <linearGradient id="ficheSpecLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2d5a45" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#a8b5a0" />
                <stop offset="100%" stopColor="#2d5a45" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0 48 C160 48 200 12 320 18 S480 52 560 28 S720 8 960 22"
              fill="none"
              stroke="url(#ficheSpecLine)"
              strokeWidth="1.5"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
            {[160, 320, 480, 640, 800].map((x, i) => (
              <motion.circle
                key={x}
                cx={x}
                cy={i % 2 === 0 ? 28 : 40}
                r="3"
                fill="#a8b5a0"
                initial={reduce ? false : { scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.85 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              />
            ))}
          </svg>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.id} delay={(i % 4) * 0.06}>
              <motion.article
                className="glass sheen card-lux group relative overflow-hidden rounded-sm p-5"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={
                  reduce
                    ? undefined
                    : { y: -4, rotateX: 2, rotateY: -2, transition: { type: "spring", stiffness: 320, damping: 22 } }
                }
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-forest-mid/20 blur-2xl transition group-hover:bg-forest-mid/35" />
                <SpecIcon kind={c.icon} />
                <p className="mt-4 text-[0.65rem] tracking-[0.22em] text-muted uppercase">
                  {c.label}
                </p>
                <p className="mt-2 display text-xl text-platinum md:text-2xl">
                  {c.value}
                  {c.unit ? (
                    <span className="ml-1 text-sm tracking-normal text-accent">{c.unit}</span>
                  ) : null}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
