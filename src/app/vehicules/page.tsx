import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { VehicleGallery } from "@/components/VehicleGallery";
import { MagneticButton } from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Véhicules",
  description:
    "Galerie de véhicules singuliers sélectionnés par NatioPark Automobiles — Marseille & Aix-en-Provence.",
};

export default function VehiculesPage() {
  return (
    <>
      <section className="section-pad relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,90,69,0.2),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow mb-4">Sélection</p>
            <h1 className="display max-w-4xl text-[clamp(2.5rem,6vw,5rem)] text-platinum">
              Véhicules d&apos;exception
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              Une collection vivante d&apos;automobiles singulières, photographiées
              pour nos clients. Chaque projet est unique — contactez-nous pour
              orchestrer le vôtre.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad pb-16">
        <VehicleGallery />
      </section>

      <section className="section-pad pb-24">
        <Reveal>
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-forest/30 to-charcoal-deep px-8 py-12 md:flex-row md:items-center md:px-14">
            <div>
              <h2 className="display text-3xl text-platinum md:text-4xl">
                Un projet en tête ?
              </h2>
              <p className="mt-3 max-w-lg text-sm text-muted">
                Sourcing, inspection, transaction et aftercare — nous construisons
                votre projet automobile sur rendez-vous.
              </p>
            </div>
            <MagneticButton href="/contact">Lancer mon projet</MagneticButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
