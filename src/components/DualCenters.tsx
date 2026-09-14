"use client";

import { Reveal } from "./Reveal";
import { site } from "@/data/site";

export function DualCenters() {
  return (
    <section className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-4">Ancrage Provence</p>
          <h2 className="display max-w-3xl text-4xl text-platinum md:text-5xl">
            Deux centres, une exigence
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {site.centers.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.1}>
              <article className="glass overflow-hidden rounded-sm">
                <div className="relative h-48 bg-charcoal-deep sm:h-56">
                  <svg
                    viewBox="0 0 400 200"
                    className="h-full w-full"
                    aria-hidden
                  >
                    <defs>
                      <linearGradient id={`mapGrad-${c.id}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#1a3a2f" />
                        <stop offset="100%" stopColor="#16171c" />
                      </linearGradient>
                    </defs>
                    <rect width="400" height="200" fill={`url(#mapGrad-${c.id})`} />
                    {/* Schematic coastline / roads */}
                    <path
                      d="M0 140 Q100 100 200 120 T400 90"
                      fill="none"
                      stroke="rgba(168,181,160,0.25)"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M40 0 V200 M120 0 V200 M220 0 V200 M300 0 V200"
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth="1"
                    />
                    <path
                      d="M0 50 H400 M0 100 H400 M0 150 H400"
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth="1"
                    />
                    <circle cx={i === 0 ? 180 : 220} cy={i === 0 ? 110 : 95} r="8" fill="#a8b5a0" />
                    <circle cx={i === 0 ? 180 : 220} cy={i === 0 ? 110 : 95} r="18" fill="none" stroke="#a8b5a0" strokeWidth="1" opacity="0.5" />
                    <text
                      x={i === 0 ? 180 : 220}
                      y={i === 0 ? 145 : 130}
                      textAnchor="middle"
                      fill="#e8e6e3"
                      fontSize="12"
                      fontFamily="var(--font-montserrat), sans-serif"
                      letterSpacing="1"
                    >
                      {c.city.toUpperCase()}
                    </text>
                  </svg>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="display text-2xl text-platinum md:text-3xl">{c.city}</h3>
                  <p className="mt-1 text-sm text-accent">{c.name}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {c.address}
                    <br />
                    {c.postal}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Connecting schematic */}
        <Reveal className="mt-10 hidden justify-center md:flex">
          <svg viewBox="0 0 600 60" className="h-12 w-full max-w-xl" aria-hidden>
            <line x1="40" y1="30" x2="560" y2="30" stroke="rgba(168,181,160,0.35)" strokeDasharray="6 4" />
            <circle cx="40" cy="30" r="5" fill="#a8b5a0" />
            <circle cx="560" cy="30" r="5" fill="#a8b5a0" />
            <text x="300" y="20" textAnchor="middle" fill="#8a8880" fontSize="10" letterSpacing="2">
              CORRIDOR PROVENCE · ~30 MIN
            </text>
          </svg>
        </Reveal>
      </div>
    </section>
  );
}
