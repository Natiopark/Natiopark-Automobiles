"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { VehicleDossier } from "@/data/vehicles";

type Props = {
  vehicle: VehicleDossier;
};

export function FichePaintMap({ vehicle }: Props) {
  if (!vehicle.paintMap) return null;

  return (
    <section className="section-pad section-luxury relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-3">Contrôle carrosserie</p>
          <h2 className="display text-3xl text-platinum md:text-4xl">
            Mesure des épaisseurs de peinture
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Cartographie des lectures d&apos;épaisseur — cohérence usine /
            absence de reprise visible sur les panneaux mesurés.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <figure className="glass sheen overflow-hidden rounded-sm border border-white/10 p-3 md:p-5">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-charcoal-deep/80">
              <Image
                src={vehicle.paintMap}
                alt={`Mesures d'épaisseur de peinture — ${vehicle.marque} ${vehicle.modele} ${vehicle.version}`}
                fill
                className="object-contain p-2 md:p-4"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
            <figcaption className="mt-4 px-1 pb-1 text-center text-xs leading-relaxed text-silver/80 md:text-sm">
              Tous les panneaux mesurés affichent{" "}
              <span className="font-medium text-accent">150&nbsp;µm</span> —
              cohérence usine, absence de reprise visible.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
