"use client";

import { Reveal } from "@/components/Reveal";
import type { VehicleDossier } from "@/data/vehicles";

type Props = {
  vehicle: VehicleDossier;
};

export function FichePresentation({ vehicle }: Props) {
  const isDemo = vehicle.isDemo === true;

  return (
    <section className="section-pad section-luxury relative py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-3">Présentation</p>
            <h2 className="display text-3xl text-platinum md:text-4xl">
              Une automobile singulière
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-silver/90 md:text-base md:leading-relaxed">
              {vehicle.presentation}
            </p>
            {isDemo ? (
              <p className="mt-4 text-xs tracking-[0.14em] text-muted uppercase">
                Contenu démonstratif — modèle de dossier client
              </p>
            ) : null}
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.12}>
            <aside className="glass sheen overflow-hidden rounded-sm border border-white/10 p-6 md:p-8">
              <p className="text-[0.65rem] tracking-[0.28em] text-accent uppercase">
                Carte d&apos;identité
              </p>
              <h3 className="display mt-3 text-2xl text-platinum">
                {vehicle.marque} {vehicle.modele}
              </h3>
              <p className="mt-1 text-sm text-muted">{vehicle.version}</p>

              <dl className="mt-8 space-y-4">
                <div className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-3">
                  <dt className="text-[0.7rem] tracking-[0.18em] text-muted uppercase">
                    Réf. dossier
                  </dt>
                  <dd className="font-medium text-platinum">{vehicle.reference}</dd>
                </div>
                {vehicle.vin ? (
                  <div className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-3">
                    <dt className="text-[0.7rem] tracking-[0.18em] text-muted uppercase">
                      VIN
                    </dt>
                    <dd className="font-mono text-xs font-medium text-platinum sm:text-sm">
                      {vehicle.vin}
                    </dd>
                  </div>
                ) : null}
                {vehicle.codeModele ? (
                  <div className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-3">
                    <dt className="text-[0.7rem] tracking-[0.18em] text-muted uppercase">
                      Code modèle
                    </dt>
                    <dd className="font-medium text-platinum">{vehicle.codeModele}</dd>
                  </div>
                ) : null}
                {vehicle.miseEnCirculation ? (
                  <div className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-3">
                    <dt className="text-[0.7rem] tracking-[0.18em] text-muted uppercase">
                      1re MEC
                    </dt>
                    <dd className="text-right text-sm font-medium text-platinum">
                      {vehicle.miseEnCirculation}
                    </dd>
                  </div>
                ) : null}
                {vehicle.livraisonNeuf ? (
                  <div className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-3">
                    <dt className="text-[0.7rem] tracking-[0.18em] text-muted uppercase">
                      Livraison neuf
                    </dt>
                    <dd className="text-right text-sm font-medium text-platinum">
                      {vehicle.livraisonNeuf}
                    </dd>
                  </div>
                ) : null}
                {vehicle.centreEntretien ? (
                  <div className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-3">
                    <dt className="text-[0.7rem] tracking-[0.18em] text-muted uppercase">
                      Centre entretien
                    </dt>
                    <dd className="max-w-[60%] text-right text-sm text-silver">
                      {vehicle.centreEntretien}
                    </dd>
                  </div>
                ) : null}
                <div className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-3">
                  <dt className="text-[0.7rem] tracking-[0.18em] text-muted uppercase">
                    Prix
                  </dt>
                  <dd className="font-medium text-platinum">{vehicle.prixAffiche}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4 border-b border-white/8 pb-3">
                  <dt className="text-[0.7rem] tracking-[0.18em] text-muted uppercase">
                    Disponibilité
                  </dt>
                  <dd className="font-medium text-accent">Sur rendez-vous</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-[0.7rem] tracking-[0.18em] text-muted uppercase">
                    Centres
                  </dt>
                  <dd className="text-right text-sm text-silver">
                    Marseille · Aix-en-Provence
                  </dd>
                </div>
              </dl>

              <div className="mt-8 rounded-sm bg-forest/25 px-4 py-3 text-xs leading-relaxed text-silver/80">
                Réception uniquement sur rendez-vous — sécurité, confidentialité
                et qualité de service.
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
