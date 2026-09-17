"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

/** Union of orbit + conciergerie services, deduped (case-insensitive). */
const orbitCore = [
  { id: "achat", label: "Achat", short: "Achat" },
  { id: "vente", label: "Vente", short: "Vente" },
  { id: "detailing", label: "Detailing", short: "Detailing" },
  { id: "transport", label: "Transport", short: "Transport" },
  { id: "siv", label: "SIV", short: "SIV" },
  { id: "financement", label: "Financement", short: "Financement" },
];

function buildServices() {
  const seen = new Set(orbitCore.map((s) => s.label.toLowerCase()));
  const extras = site.conciergerieServices
    .filter((label) => !seen.has(label.toLowerCase()))
    .map((label) => {
      const short =
        label === "Plein d'essence"
          ? "Plein"
          : label.length > 12
            ? label.slice(0, 11) + "…"
            : label;
      return {
        id: label
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, ""),
        label,
        short,
      };
    });
  return [...orbitCore, ...extras];
}

const services = buildServices();

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

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">Un interlocuteur unique</p>
          <h2 className="display text-4xl text-platinum md:text-5xl">
            Un accompagnement sur mesure à 360°
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-silver/85 md:text-base">
            Chaque projet bénéficie d&apos;un accompagnement sur mesure, avec
            l&apos;ensemble des services réunis au sein d&apos;un même écosystème :
            acquisition et cession, detailing, transport, immatriculation,
            financement, entretien, lavage et conciergerie. Un interlocuteur
            unique pour une coordination fluide.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {services.map((s) => (
              <li
                key={s.id}
                className="glass flex items-center gap-2 rounded-sm px-3 py-2 text-sm text-silver"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {s.label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="flex justify-center">
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
    </section>
  );
}
