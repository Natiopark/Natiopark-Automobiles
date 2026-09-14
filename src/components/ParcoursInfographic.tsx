"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

export function ParcoursInfographic() {
  const reduce = useReducedMotion();
  const steps = site.parcours;

  return (
    <section className="section-pad relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,58,47,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-4">Parcours client</p>
          <h2 className="display max-w-3xl text-4xl text-platinum md:text-6xl">
            Un accompagnement 360°
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            De la première conversation au suivi long terme, chaque étape est
            orchestrée avec la rigueur d&apos;une maison privée.
          </p>
        </Reveal>

        {/* Desktop SVG flow */}
        <div className="mt-16 hidden lg:block">
          <svg viewBox="0 0 1100 220" className="w-full" role="img" aria-label="Parcours client 360 degrés">
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2d5a45" />
                <stop offset="50%" stopColor="#c8c5be" />
                <stop offset="100%" stopColor="#2d5a45" />
              </linearGradient>
            </defs>
            <motion.path
              d="M60 110 H1040"
              stroke="url(#lineGrad)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="8 6"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
            {steps.map((s, i) => {
              const x = 60 + i * 245;
              return (
                <g key={s.id}>
                  <motion.circle
                    cx={x}
                    cy={110}
                    r={28}
                    fill="#16171c"
                    stroke="#a8b5a0"
                    strokeWidth="1.5"
                    initial={reduce ? false : { scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 200 }}
                  />
                  <text
                    x={x}
                    y={114}
                    textAnchor="middle"
                    fill="#e8e6e3"
                    fontSize="13"
                    fontFamily="var(--font-montserrat), sans-serif"
                    fontWeight="600"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </text>
                  <text
                    x={x}
                    y={168}
                    textAnchor="middle"
                    fill="#e8e6e3"
                    fontSize="16"
                    fontFamily="var(--font-cormorant), serif"
                  >
                    {s.label}
                  </text>
                  <text
                    x={x}
                    y={190}
                    textAnchor="middle"
                    fill="#8a8880"
                    fontSize="11"
                    fontFamily="var(--font-montserrat), sans-serif"
                  >
                    {s.desc}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Mobile / tablet cards */}
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
          {steps.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08}>
              <li className="glass flex gap-4 rounded-sm p-5">
                <span className="display text-3xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg text-platinum">{s.label}</h3>
                  <p className="mt-1 text-sm text-muted">{s.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
