import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { GoogleMapEmbed } from "@/components/GoogleMapEmbed";
import { SectionPhotoBg } from "@/components/SectionPhotoBg";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez NatioPark Automobiles à Marseille et Aix-en-Provence. Réception uniquement sur rendez-vous.",
};

export default function ContactPage() {
  return (
    <>
      <SectionPhotoBg
        src="/photos/bg-bmw-x3m.jpg"
        alt="BMW X3 M — NatioPark Automobiles"
        priority
        objectPosition="center 40%"
        className="section-pad pt-32 pb-12 md:pt-40 md:pb-16"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="eyebrow mb-4">Contact</p>
            <h1 className="display max-w-3xl text-[clamp(2.5rem,6vw,5rem)] text-platinum">
              Échangeons sur votre projet
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-silver/90">
              {site.reception}
            </p>
          </Reveal>
        </div>
      </SectionPhotoBg>

      <SectionPhotoBg
        src="/photos/bg-r21-turbo.jpg"
        alt="Renault 21 Turbo — NatioPark Automobiles"
        objectPosition="center 50%"
        heavy
        className="section-pad pb-20 pt-12 md:pt-16"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <Reveal delay={0.08}>
              <div className="glass rounded-sm p-6 md:p-8">
                <h2 className="eyebrow mb-4">Coordonnées</h2>
                <ul className="space-y-4 text-sm text-silver">
                  <li>
                    <span className="block text-xs tracking-widest text-muted uppercase">E-mail</span>
                    <a className="mt-1 inline-block hover:text-platinum" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs tracking-widest text-muted uppercase">Téléphone</span>
                    <div className="mt-1 flex flex-col gap-1">
                      {site.phones.map((p) => (
                        <a key={p.href} className="hover:text-platinum" href={p.href}>
                          {p.label}
                        </a>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            {site.centers.map((c, i) => (
              <Reveal key={c.id} delay={0.1 + i * 0.08}>
                <div className="glass card-lux overflow-hidden rounded-sm">
                  <div className="p-6 md:p-8">
                    <h3 className="display text-2xl text-platinum">{c.city}</h3>
                    <p className="mt-1 text-sm text-accent">{c.name}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {c.address}
                      <br />
                      {c.postal}
                    </p>
                  </div>
                  <div className="relative min-h-[220px] overflow-hidden border-t border-white/5 bg-charcoal-deep">
                    <GoogleMapEmbed
                      src={c.mapsEmbed}
                      title={`Carte Google — ${c.name}, ${c.city}`}
                      className="h-[220px]"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionPhotoBg>
    </>
  );
}
