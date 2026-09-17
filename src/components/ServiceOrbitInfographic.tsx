"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const services = [
  { id: "achat-vente", label: "Achat & vente", short: "Achat/vente", icon: "handshake" as const },
  { id: "detailing", label: "Detailing", short: "Detailing", icon: "sparkle" as const },
  { id: "transport", label: "Transport", short: "Transport", icon: "truck" as const },
  { id: "siv", label: "SIV", short: "SIV", icon: "doc" as const },
  { id: "financement", label: "Financement", short: "Financement", icon: "coins" as const },
  { id: "entretien", label: "Entretien", short: "Entretien", icon: "wrench" as const },
  { id: "conciergerie", label: "Conciergerie", short: "Conciergerie", icon: "bell" as const },
  { id: "carrosserie", label: "Carrosserie", short: "Carrosserie", icon: "panel" as const },
];

type IconName = (typeof services)[number]["icon"];

function ServiceMiniIcon({ name }: { name: IconName }) {
  const props = {
    className: "h-8 w-8 text-accent",
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.35,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "handshake":
      return (
        <svg {...props}>
          {/* Key + handshake schema */}
          <circle cx="14" cy="22" r="6" />
          <path d="M19 22 H34 M34 22 V28 M29 22 V26" />
          <path d="M18 32 C20 28 24 28 26 30 C28 28 32 28 34 32" />
          <path d="M22 34 H30" opacity="0.55" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...props}>
          <path d="M24 8 L26 20 L38 24 L26 28 L24 40 L22 28 L10 24 L22 20 Z" />
          <path d="M36 10 L37 14 L41 15 L37 16 L36 20 L35 16 L31 15 L35 14 Z" />
          <path d="M12 34 L13 37 L16 38 L13 39 L12 42 L11 39 L8 38 L11 37 Z" opacity="0.7" />
        </svg>
      );
    case "truck":
      return (
        <svg {...props}>
          <path d="M8 30 V16 H28 V30" />
          <path d="M28 20 H36 L40 26 V30 H28" />
          <circle cx="14" cy="32" r="3.5" />
          <circle cx="34" cy="32" r="3.5" />
          <path d="M10 16 V12 H24 V16" opacity="0.5" />
        </svg>
      );
    case "doc":
      return (
        <svg {...props}>
          <path d="M14 8 H28 L36 16 V40 H14 Z" />
          <path d="M28 8 V16 H36" />
          <path d="M20 22 H30 M20 28 H28 M20 34 H26" />
          <circle cx="18" cy="22" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "coins":
      return (
        <svg {...props}>
          <ellipse cx="20" cy="18" rx="10" ry="6" />
          <path d="M10 18 V28 C10 31.3 14.5 34 20 34 S30 31.3 30 28 V18" />
          <path d="M10 23 C10 26.3 14.5 29 20 29 S30 26.3 30 23" />
          <ellipse cx="30" cy="22" rx="8" ry="5" opacity="0.75" />
          <path d="M22 22 V30 C22 32.8 25.6 35 30 35 S38 32.8 38 30 V22" opacity="0.75" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...props}>
          <path d="M30 12 A8 8 0 0 1 38 22 L28 32 L20 24 L30 14" />
          <path d="M16 28 L12 36 L20 32" />
          <circle cx="34" cy="16" r="2" />
          <path d="M14 18 H22 M18 14 V22" opacity="0.45" />
        </svg>
      );
    case "bell":
      return (
        <svg {...props}>
          <path d="M24 10 V13" />
          <path d="M16 20 C16 15 19 12 24 12 S32 15 32 20 V28 L36 32 H12 L16 28 Z" />
          <path d="M20 32 C20 35 22 37 24 37 S28 35 28 32" />
          <circle cx="34" cy="16" r="3" opacity="0.55" />
        </svg>
      );
    case "panel":
      return (
        <svg {...props}>
          {/* Car body / panel schema */}
          <path d="M8 28 C10 22 14 18 20 16 L30 16 C36 18 40 22 42 28" />
          <path d="M8 28 H42 V32 H8 Z" />
          <path d="M16 16 L18 22 H28 L30 16" opacity="0.65" />
          <circle cx="16" cy="32" r="3" />
          <circle cx="34" cy="32" r="3" />
          <path d="M22 24 H26" opacity="0.5" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="12" />
        </svg>
      );
  }
}

function ServiceChip({
  service,
  index,
  reduce,
}: {
  service: (typeof services)[number];
  index: number;
  reduce: boolean | null;
}) {
  return (
    <motion.button
      type="button"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 * index, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        reduce
          ? { scale: 1.02 }
          : {
              scale: 1.04,
              rotateX: -6,
              rotateY: 4,
              z: 24,
              boxShadow:
                "0 18px 40px rgba(0,0,0,0.45), 0 0 28px rgba(168,181,160,0.22)",
            }
      }
      whileTap={{ scale: 0.98 }}
      style={{ transformStyle: "preserve-3d", transformPerspective: 900 }}
      className="glass sheen group relative flex w-full flex-col items-start gap-3 overflow-hidden rounded-sm border border-white/8 px-4 py-4 text-left shadow-[0_8px_28px_rgba(0,0,0,0.28)] transition-[border-color,background] duration-300 hover:border-accent/35 hover:bg-white/[0.04]"
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-forest-mid/20 blur-2xl transition-opacity group-hover:opacity-100" />
      <div
        className="flex h-11 w-11 items-center justify-center rounded-sm border border-white/10 bg-charcoal-deep/60"
        style={{ transform: "translateZ(16px)" }}
      >
        <ServiceMiniIcon name={service.icon} />
      </div>
      <span
        className="text-sm font-medium tracking-wide text-platinum"
        style={{ transform: "translateZ(12px)" }}
      >
        {service.label}
      </span>
      {/* Mini schema accent line */}
      <span
        className="mt-auto h-px w-8 bg-gradient-to-r from-accent/70 to-transparent"
        style={{ transform: "translateZ(8px)" }}
        aria-hidden
      />
    </motion.button>
  );
}

export function ServiceOrbitInfographic() {
  const reduce = useReducedMotion();
  const cx = 240;
  const cy = 240;
  const R = 155;

  return (
    <section className="section-pad relative overflow-hidden py-24 md:py-32">
      {/* Full-bleed photo background */}
      <div className="absolute inset-0">
        <Image
          src="/photos/orbit-porsche-911-turbo.jpg"
          alt=""
          fill
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden
        />
      </div>
      {/* Dark overlays — hero-scrim intensity for readable text */}
      <div className="hero-scrim pointer-events-none absolute inset-0" />
      <div className="hero-vignette pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,8,10,0.72) 0%, rgba(7,8,10,0.55) 45%, rgba(7,8,10,0.78) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-4">Un interlocuteur unique</p>
          <h2 className="display max-w-3xl text-4xl text-platinum md:text-5xl">
            Un accompagnement sur mesure à 360°
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-silver/85 md:text-base">
            Chaque projet bénéficie d&apos;un accompagnement sur mesure, avec
            l&apos;ensemble des services réunis au sein d&apos;un même écosystème :
            achat &amp; vente, detailing, transport, immatriculation (SIV),
            financement, entretien, conciergerie et carrosserie. Un interlocuteur
            unique pour une coordination fluide.
          </p>
        </Reveal>

        {/* Buttons + orbit: orbit vertically centered on the button grid */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div
            className="grid grid-cols-2 gap-3 md:gap-4"
            style={{ perspective: reduce ? undefined : 1000 }}
          >
            {services.map((s, i) => (
              <ServiceChip key={s.id} service={s} index={i} reduce={reduce} />
            ))}
          </div>

          <Reveal delay={0.12} className="flex items-center justify-center">
          <svg
            viewBox="0 0 480 480"
            className="h-auto w-full max-w-lg drop-shadow-2xl"
            role="img"
            aria-label={`Orbite des services NatioPark 360° : ${services.map((s) => s.label).join(", ")}`}
          >
            <defs>
              <radialGradient id="orbitGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2d5a45" stopOpacity="0.45" />
                <stop offset="70%" stopColor="#1a3a2f" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#07080a" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="orbitStroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a8b5a0" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#e8e6e3" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#a8b5a0" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            <circle cx={cx} cy={cy} r={R + 60} fill="url(#orbitGlow)" />

            <motion.g
              animate={reduce ? undefined : { rotate: 360 }}
              style={{ originX: `${cx}px`, originY: `${cy}px` }}
              transition={{ repeat: Infinity, duration: 48, ease: "linear" }}
            >
              <circle
                cx={cx}
                cy={cy}
                r={R + 28}
                fill="none"
                stroke="url(#orbitStroke)"
                strokeWidth="1"
                strokeDasharray="3 10"
              />
            </motion.g>

            <motion.g
              animate={reduce ? undefined : { rotate: -360 }}
              style={{ originX: `${cx}px`, originY: `${cy}px` }}
              transition={{ repeat: Infinity, duration: 36, ease: "linear" }}
            >
              <circle
                cx={cx}
                cy={cy}
                r={R - 40}
                fill="none"
                stroke="rgba(168,181,160,0.28)"
                strokeWidth="0.8"
                strokeDasharray="1 8"
              />
            </motion.g>

            <circle
              cx={cx}
              cy={cy}
              r={R}
              fill="none"
              stroke="rgba(232,230,227,0.22)"
              strokeWidth="1.2"
            />

            <circle
              cx={cx}
              cy={cy}
              r={52}
              fill="#121318"
              stroke="#c8c5be"
              strokeWidth="1.4"
            />
            <circle
              cx={cx}
              cy={cy}
              r={42}
              fill="none"
              stroke="rgba(168,181,160,0.35)"
              strokeWidth="0.8"
            />
            <text
              x={cx}
              y={cy - 6}
              textAnchor="middle"
              fill="#e8e6e3"
              fontSize="13"
              fontFamily="Verdana, Geneva, sans-serif"
              letterSpacing="2"
            >
              360°
            </text>
            <text
              x={cx}
              y={cy + 12}
              textAnchor="middle"
              fill="#a8b5a0"
              fontSize="8"
              fontFamily="Verdana, Geneva, sans-serif"
              letterSpacing="1.6"
            >
              NATIOPARK
            </text>

            {services.map((s, i) => {
              const angle = (i / services.length) * Math.PI * 2 - Math.PI / 2;
              const x = cx + Math.cos(angle) * R;
              const y = cy + Math.sin(angle) * R;
              const lx = cx + Math.cos(angle) * (R + 42);
              const ly = cy + Math.sin(angle) * (R + 42) + 4;
              return (
                <g key={s.id}>
                  <motion.line
                    x1={cx}
                    y1={cy}
                    x2={x}
                    y2={y}
                    stroke="rgba(200,197,190,0.25)"
                    strokeWidth="1"
                    initial={reduce ? false : { pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.06 * i, duration: 0.7 }}
                  />
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={14}
                    fill="#121318"
                    stroke="#a8b5a0"
                    strokeWidth="1.2"
                    initial={reduce ? false : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.08 * i,
                      type: "spring",
                      stiffness: 220,
                      damping: 16,
                    }}
                  />
                  <circle cx={x} cy={y} r={3.5} fill="#a8b5a0" />
                  <text
                    x={lx}
                    y={ly}
                    textAnchor="middle"
                    fill="#e8e6e3"
                    fontSize="10"
                    fontFamily="Verdana, Geneva, sans-serif"
                  >
                    {s.short}
                  </text>
                </g>
              );
            })}

            {!reduce && (
              <motion.circle
                cx={cx + R}
                cy={cy}
                r={3.5}
                fill="#e8e6e3"
                animate={{ rotate: 360 }}
                style={{ originX: `${cx}px`, originY: `${cy}px` }}
                transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
              />
            )}
          </svg>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
