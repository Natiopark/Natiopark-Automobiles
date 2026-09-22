import { Reveal } from "./Reveal";
import { site } from "@/data/site";
import { MagneticButton } from "./MagneticButton";

export function RdvNotice() {
  return (
    <section className="section-pad py-16">
      <Reveal>
        <div className="sheen relative mx-auto max-w-7xl overflow-hidden rounded-sm border border-forest-light/30 bg-gradient-to-br from-forest/40 via-charcoal-deep to-charcoal-deep px-8 py-12 md:px-14 md:py-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-forest-mid/30 blur-3xl" />
          <p className="eyebrow mb-3">Accueil</p>
          <h2 className="display max-w-2xl text-3xl text-platinum md:text-4xl">
            Réception uniquement sur rendez-vous
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-silver/90 md:text-base">
            {site.reception} Nous privilégions des échanges préparés, dans un
            cadre confidentiel et sécurisé.
          </p>
          <div className="mt-8">
            <MagneticButton href="/contact">Nous contacter</MagneticButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
