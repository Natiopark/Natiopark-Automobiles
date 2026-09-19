"use client";

import { Reveal } from "@/components/Reveal";
import { MagneticButton } from "@/components/MagneticButton";

type Props = {
  marque: string;
  modele: string;
  version: string;
};

export function FicheCta({ marque, modele, version }: Props) {
  return (
    <section className="section-pad relative pb-24 pt-8 md:pb-32">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-forest/35 via-charcoal-deep to-charcoal-deep">
          <div className="sheen relative px-8 py-12 md:flex md:items-center md:justify-between md:gap-10 md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-forest-mid/30 blur-3xl" />
            <div className="relative max-w-xl">
              <p className="eyebrow mb-3">Confiance</p>
              <h2 className="display text-3xl text-platinum md:text-4xl">
                Discutons de ce {marque} {modele} {version}
              </h2>
              <ul className="mt-6 space-y-2 text-sm text-silver/85">
                <li className="flex gap-2">
                  <span className="text-accent">▸</span>
                  Inspection maison &amp; dossier documenté
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">▸</span>
                  Réception sur rendez-vous — Marseille &amp; Aix
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">▸</span>
                  Accompagnement transaction &amp; aftercare
                </li>
              </ul>
              <p className="mt-4 text-xs text-muted">
                Fiche de démonstration — aucun engagement client réel associé.
              </p>
            </div>
            <div className="relative mt-8 flex flex-col gap-3 md:mt-0 md:items-end">
              <MagneticButton href="/contact">Prendre rendez-vous</MagneticButton>
              <MagneticButton href="/vehicules" variant="ghost">
                Voir la sélection
              </MagneticButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
