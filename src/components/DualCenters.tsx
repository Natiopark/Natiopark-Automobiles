"use client";

import { Reveal } from "./Reveal";
import { GoogleMapEmbed } from "./GoogleMapEmbed";
import { site } from "@/data/site";

export function DualCenters() {
  return (
    <section className="section-pad section-mesh relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center blur-3xl"
          style={{ backgroundImage: "url(/photos/ok-02343-Y4LDMWOjROukLjq6.jpg)" }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-background/80" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-4">Ancrage Provence</p>
          <h2 className="display max-w-3xl text-4xl text-platinum md:text-5xl">
            Deux centres, une exigence
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {site.centers.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.1}>
              <article className="glass card-lux overflow-hidden rounded-sm">
                <div className="relative min-h-[220px] overflow-hidden bg-charcoal-deep sm:h-56">
                  <GoogleMapEmbed
                    src={c.mapsEmbed}
                    title={`Carte Google — ${c.name}, ${c.city}`}
                    className="h-full min-h-[220px] sm:h-56"
                  />
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

        <Reveal className="mt-10">
          <p className="text-center text-[0.65rem] tracking-[0.32em] text-muted uppercase">
            Corridor Provence · ~30 min entre Marseille et Aix
          </p>
        </Reveal>
      </div>
    </section>
  );
}
