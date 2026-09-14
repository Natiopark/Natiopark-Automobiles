"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

function VenteGraphic() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 120 72" className="h-16 w-28" aria-hidden>
      <defs>
        <linearGradient id="venteScan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a8b5a0" stopOpacity="0" />
          <stop offset="50%" stopColor="#a8b5a0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#a8b5a0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="104" height="56" rx="2" fill="none" stroke="rgba(168,181,160,0.25)" />
      <path
        d="M18 48 L28 36 H48 L58 28 H86 L102 40 V48 H18 Z"
        fill="none"
        stroke="#a8b5a0"
        strokeWidth="1.3"
      />
      <circle cx="36" cy="50" r="5" fill="none" stroke="#c8c5be" strokeWidth="1.2" />
      <circle cx="86" cy="50" r="5" fill="none" stroke="#c8c5be" strokeWidth="1.2" />
      {!reduce && (
        <motion.rect
          x="10"
          width="100"
          height="6"
          fill="url(#venteScan)"
          animate={{ y: [10, 52, 10] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <motion.circle
        cx="100"
        cy="18"
        r="3"
        fill="#e8e6e3"
        animate={reduce ? undefined : { opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
}

function RachatGraphic() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 120 72" className="h-16 w-28" aria-hidden>
      <motion.circle
        cx="60"
        cy="36"
        r="26"
        fill="none"
        stroke="rgba(168,181,160,0.25)"
        strokeWidth="1"
        animate={reduce ? undefined : { scale: [1, 1.12, 1], opacity: [0.4, 0.8, 0.4] }}
        style={{ originX: "60px", originY: "36px" }}
        transition={{ duration: 2.8, repeat: Infinity }}
      />
      <path d="M28 36 H92" stroke="#a8b5a0" strokeWidth="1.2" />
      <path d="M80 26 L92 36 L80 46" fill="none" stroke="#c8c5be" strokeWidth="1.3" />
      <path d="M40 26 L28 36 L40 46" fill="none" stroke="#c8c5be" strokeWidth="1.3" />
      <motion.circle
        cx="60"
        cy="36"
        r="4"
        fill="#a8b5a0"
        animate={reduce ? undefined : { scale: [1, 1.35, 1] }}
        style={{ originX: "60px", originY: "36px" }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
    </svg>
  );
}

function ConciergerieGraphic() {
  const reduce = useReducedMotion();
  const dots = 6;
  return (
    <svg viewBox="0 0 120 72" className="h-16 w-28" aria-hidden>
      <circle cx="60" cy="36" r="10" fill="none" stroke="#c8c5be" strokeWidth="1.2" />
      <text
        x="60"
        y="39"
        textAnchor="middle"
        fill="#a8b5a0"
        fontSize="7"
        fontFamily="Verdana, Geneva, sans-serif"
      >
        360
      </text>
      <motion.g
        animate={reduce ? undefined : { rotate: 360 }}
        style={{ originX: "60px", originY: "36px" }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: dots }).map((_, i) => {
          const a = (i / dots) * Math.PI * 2;
          const x = 60 + Math.cos(a) * 24;
          const y = 36 + Math.sin(a) * 24;
          return <circle key={i} cx={x} cy={y} r="2.4" fill="#a8b5a0" />;
        })}
      </motion.g>
      <circle cx="60" cy="36" r="24" fill="none" stroke="rgba(168,181,160,0.3)" strokeDasharray="2 4" />
    </svg>
  );
}

const graphics = {
  vente: VenteGraphic,
  rachat: RachatGraphic,
  conciergerie: ConciergerieGraphic,
};

export function Positioning() {
  return (
    <section className="section-pad section-luxury relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-4">Positionnement</p>
          <h2 className="display max-w-3xl text-4xl text-platinum md:text-6xl">
            Un accompagnement sur mesure
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {site.positioning.map((item, i) => {
            const Graphic = graphics[item.id as keyof typeof graphics];
            return (
              <Reveal key={item.id} delay={i * 0.12}>
                <article className="glass card-lux sheen group relative h-full overflow-hidden rounded-sm p-8">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-forest/25 blur-3xl transition duration-700 group-hover:bg-forest-mid/45" />
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="text-accent">
                      <Graphic />
                    </div>
                    <span className="text-[0.65rem] tracking-[0.28em] text-muted">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="display relative mt-6 text-2xl text-platinum md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="relative mt-4 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
