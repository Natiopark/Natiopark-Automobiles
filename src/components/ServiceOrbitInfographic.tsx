"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const services = [
  { id: "achat", label: "Achat" },
  { id: "vente", label: "Vente" },
  { id: "detailing", label: "Detailing" },
  { id: "transport", label: "Transport" },
  { id: "siv", label: "SIV" },
  { id: "financement", label: "Financement" },
];

export function ServiceOrbitInfographic() {
  const reduce = useReducedMotion();
  const cx = 220;
  const cy = 220;
  const R = 148;

  return (
    <section className="section-pad section-luxury relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">Écosystème</p>
          <h2 className="display text-4xl text-platinum md:text-5xl">
            Une orbite de services
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted md:text-base">
            Autour de chaque projet, les métiers gravitent : acquisition, cession,
            detailing, transport, formalités SIV et financement — coordonnés depuis
            Marseille et Aix-en-Provence.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {services.map((s) => (
              <li
                key={s.id}
                className="glass flex items-center gap-2 rounded-sm px-3 py-2 text-sm text-silver"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {s.label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="flex justify-center">
          <svg
            viewBox="0 0 440 440"
            className="h-auto w-full max-w-md"
            role="img"
            aria-label="Orbite des services NatioPark : achat, vente, detailing, transport, SIV, financement"
          >
            <defs>
              <radialGradient id="orbitGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2d5a45" stopOpacity="0.4" />
                <stop offset="70%" stopColor="#1a3a2f" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#07080a" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="orbitStroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#a8b5a0" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#e8e6e3" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#a8b5a0" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            <circle cx={cx} cy={cy} r={R + 55} fill="url(#orbitGlow)" />

            <motion.g
              animate={reduce ? undefined : { rotate: 360 }}
              style={{ originX: `${cx}px`, originY: `${cy}px` }}
              transition={{ repeat: Infinity, duration: 48, ease: "linear" }}
            >
              <circle
                cx={cx}
                cy={cy}
                r={R + 22}
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
                r={R - 36}
                fill="none"
                stroke="rgba(168,181,160,0.25)"
                strokeWidth="0.8"
                strokeDasharray="1 8"
              />
            </motion.g>

            <circle
              cx={cx}
              cy={cy}
              r={R}
              fill="none"
              stroke="rgba(232,230,227,0.18)"
              strokeWidth="1.2"
            />

            <circle cx={cx} cy={cy} r={52} fill="#121318" stroke="#c8c5be" strokeWidth="1.4" />
            <circle cx={cx} cy={cy} r={42} fill="none" stroke="rgba(168,181,160,0.35)" strokeWidth="0.8" />
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
              const lx = cx + Math.cos(angle) * (R + 38);
              const ly = cy + Math.sin(angle) * (R + 38) + 4;
              return (
                <g key={s.id}>
                  <motion.line
                    x1={cx}
                    y1={cy}
                    x2={x}
                    y2={y}
                    stroke="rgba(200,197,190,0.22)"
                    strokeWidth="1"
                    initial={reduce ? false : { pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.7 }}
                  />
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={18}
                    fill="#121318"
                    stroke="#a8b5a0"
                    strokeWidth="1.2"
                    initial={reduce ? false : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.12 * i, type: "spring", stiffness: 220, damping: 16 }}
                  />
                  <circle cx={x} cy={y} r={4} fill="#a8b5a0" />
                  <text
                    x={lx}
                    y={ly}
                    textAnchor="middle"
                    fill="#c8c5be"
                    fontSize="11"
                    fontFamily="Verdana, Geneva, sans-serif"
                  >
                    {s.label}
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
