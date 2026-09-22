import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation du site NatioPark Automobiles.",
};

export default function CguPage() {
  return (
    <section className="section-pad section-aurora relative overflow-hidden pt-32 pb-24 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,90,69,0.18),transparent_55%)]" />
      <article className="relative mx-auto max-w-3xl">
        <p className="eyebrow mb-4">Mentions légales</p>
        <h1 className="display text-[clamp(2rem,4.5vw,3.25rem)] text-platinum">
          Conditions générales d&apos;utilisation
        </h1>
        <p className="mt-4 text-sm text-muted">
          Dernière mise à jour : septembre 2026
        </p>

        <div className="mt-12 space-y-10 text-sm leading-relaxed text-silver/90">
          <section>
            <h2 className="display mb-3 text-2xl text-platinum">1. Objet</h2>
            <p>
              Les présentes CGU régissent l&apos;accès et l&apos;utilisation du site{" "}
              <strong className="text-platinum">{site.name}</strong> (
              <a className="text-accent hover:underline" href={site.url}>
                {site.url.replace("https://", "")}
              </a>
              ), édité à titre informatif et commercial pour présenter nos services et
              véhicules.
            </p>
          </section>

          <section>
            <h2 className="display mb-3 text-2xl text-platinum">2. Utilisation du site</h2>
            <p>
              L&apos;utilisateur s&apos;engage à utiliser le site de manière loyale, conforme
              à la législation française, et à ne pas porter atteinte à son bon
              fonctionnement (tentative d&apos;intrusion, spam, extraction abusive de
              contenus, etc.). La réception en centre se fait{" "}
              <strong className="text-platinum">uniquement sur rendez-vous</strong>.
            </p>
          </section>

          <section>
            <h2 className="display mb-3 text-2xl text-platinum">3. Propriété intellectuelle</h2>
            <p>
              Textes, photographies, logos, charte graphique et éléments du site sont
              protégés. Toute reproduction, représentation ou diffusion non autorisée est
              interdite, sauf accord écrit préalable de {site.name}.
            </p>
          </section>

          <section>
            <h2 className="display mb-3 text-2xl text-platinum">4. Responsabilité</h2>
            <p>
              Les informations publiées le sont de bonne foi et peuvent évoluer (disponibilité
              des véhicules, tarifs indicatifs, contenus de démonstration). {site.name} ne
              saurait être tenu responsable des dommages indirects liés à l&apos;usage du
              site, ni des interruptions techniques indépendantes de sa volonté.
            </p>
          </section>

          <section>
            <h2 className="display mb-3 text-2xl text-platinum">5. Liens externes</h2>
            <p>
              Le site peut contenir des liens vers des services tiers (notamment cartes
              Google). {site.name} n&apos;exerce aucun contrôle sur ces sites et décline
              toute responsabilité quant à leur contenu ou leur politique de
              confidentialité.
            </p>
          </section>

          <section>
            <h2 className="display mb-3 text-2xl text-platinum">6. Droit applicable</h2>
            <p>
              Les présentes CGU sont régies par le{" "}
              <strong className="text-platinum">droit français</strong>. En cas de litige,
              et à défaut de résolution amiable, les tribunaux français compétents seront
              saisis.
            </p>
          </section>

          <section>
            <h2 className="display mb-3 text-2xl text-platinum">7. Contact</h2>
            <p>
              Pour toute question relative aux CGU :{" "}
              <a className="text-accent hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              — {site.phones[0]?.label}.
            </p>
          </section>
        </div>

        <p className="mt-14 text-sm text-muted">
          Voir aussi la{" "}
          <Link href="/rgpd" className="text-accent hover:underline">
            politique de confidentialité (RGPD)
          </Link>
          .
        </p>
      </article>
    </section>
  );
}
