"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

export function ConciergerieWheel() {
  const reduce = useReducedMotion();
  const items = site.conciergerieServices;
  const R = 150;
  const cx = 200;
  const cy = 200;

  return (
    <section className="section-pad section-mesh relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">Conciergerie</p>
          <h2 className="display text-4xl text-platinum md:text-5xl">
            La roue des services 360°
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">
            Un écosystème complet autour de votre véhicule : chaque rayon de la
            roue répond à un besoin concret, coordonné par un seul interlocuteur.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3">
            {items.map((label) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm text-silver"
              >
                <span className="h-1 w-1 rounded-full bg-accent" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="flex justify-center">
          <svg
            viewBox="0 0 400 400"
            className="h-auto w-full max-w-md"
            role="img"
            aria-label="Diagramme conciergerie 360 degrés"
          >
            <defs>
              <radialGradient id="wheelGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#2d5a45" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0a0b0d" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx={cx} cy={cy} r={R + 40} fill="url(#wheelGlow)" />
            <motion.circle
              cx={cx}
              cy={cy}
              r={R}
              fill="none"
              stroke="rgba(168,181,160,0.35)"
              strokeWidth="1"
              strokeDasharray="4 6"
              animate={reduce ? undefined : { rotate: 360 }}
              style={{ originX: "200px", originY: "200px" }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            />
            <circle cx={cx} cy={cy} r={48} fill="#16171c" stroke="#c8c5be" strokeWidth="1.5" />
            <text
              x={cx}
              y={cy - 4}
              textAnchor="middle"
              fill="#e8e6e3"
              fontSize="11"
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
              fontSize="9"
              fontFamily="Verdana, Geneva, sans-serif"
              letterSpacing="1"
            >
              NATIOPARK
            </text>
            {items.map((label, i) => {
              const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
              const x = cx + Math.cos(angle) * R;
              const y = cy + Math.sin(angle) * R;
              return (
                <g key={label}>
                  <motion.line
                    x1={cx}
                    y1={cy}
                    x2={x}
                    y2={y}
                    stroke="rgba(200,197,190,0.2)"
                    strokeWidth="1"
                    initial={reduce ? false : { pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.6 }}
                  />
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={6}
                    fill="#2d5a45"
                    stroke="#a8b5a0"
                    strokeWidth="1"
                    initial={reduce ? false : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 * i, type: "spring" }}
                  />
                  <text
                    x={cx + Math.cos(angle) * (R + 28)}
                    y={cy + Math.sin(angle) * (R + 28) + 4}
                    textAnchor="middle"
                    fill="#c8c5be"
                    fontSize="10"
                    fontFamily="Verdana, Geneva, sans-serif"
                  >
                    {label}
                  </text>
                </g>
              );
            })}
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
