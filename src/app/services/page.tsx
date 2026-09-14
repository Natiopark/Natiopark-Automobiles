import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ServiceIcon } from "@/components/ServiceIcons";
import { Testimonials } from "@/components/Testimonials";
import { MagneticButton } from "@/components/MagneticButton";
import { StatsStrip } from "@/components/StatsStrip";
import { SectionPhotoBg } from "@/components/SectionPhotoBg";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Achat & vente, detailing, accompagnement projet, mécanique, administratif SIV et conciergerie 360° — NatioPark Automobiles.",
};

export default function ServicesPage() {
  return (
    <>
      <SectionPhotoBg
        src="/photos/bg-911-turbo-rear.jpg"
        alt="Porsche 911 Turbo S — vue arrière trois-quarts"
        priority
        objectPosition="center 40%"
        className="section-pad pt-32 pb-16 md:pt-40 md:pb-24"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow mb-4">Services</p>
            <h1 className="display max-w-4xl text-[clamp(2.5rem,6vw,5rem)] text-platinum">
              Une offre complète pour vos projets automobiles
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-silver/90">
              De l&apos;acquisition à l&apos;entretien, chaque mission est menée
              avec la discrétion et la précision d&apos;une maison de confiance.
            </p>
          </Reveal>
        </div>
      </SectionPhotoBg>

      <SectionPhotoBg
        src="/photos/bg-718-spyder-rear.jpg"
        alt="Porsche 718 Spyder — vue arrière"
        objectPosition="center 55%"
        heavy
        className="section-pad pb-16 pt-16 md:pt-24"
      >
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {site.services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.08}>
              <article className="glass card-lux group flex h-full flex-col rounded-sm p-8">
                <div className="text-accent transition duration-500 group-hover:text-forest-light">
                  <ServiceIcon name={s.icon} />
                </div>
                <h2 className="display mt-6 text-2xl text-platinum md:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {s.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </SectionPhotoBg>

      <StatsStrip />
      <Testimonials page="services" />

      <SectionPhotoBg
        src="/photos/bg-boxster-coast.jpg"
        alt="Porsche Boxster convertible — côte"
        objectPosition="center 45%"
        className="section-pad pb-24 pt-8"
      >
        <Reveal>
          <div className="sheen relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 overflow-hidden rounded-sm border border-white/10 bg-charcoal-deep/70 px-8 py-10 backdrop-blur-sm md:flex-row md:items-center md:px-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-forest-mid/25 blur-3xl" />
            <div>
              <h2 className="display text-3xl text-platinum">
                Parlons de votre projet
              </h2>
              <p className="mt-2 text-sm text-muted">
                Réception uniquement sur rendez-vous.
              </p>
            </div>
            <MagneticButton href="/contact">Nous contacter</MagneticButton>
          </div>
        </Reveal>
      </SectionPhotoBg>
    </>
  );
}
