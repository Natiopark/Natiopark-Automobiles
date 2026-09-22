import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité (RGPD)",
  description:
    "Politique de confidentialité et protection des données personnelles — NatioPark Automobiles.",
};

export default function RgpdPage() {
  return (
    <section className="section-pad section-aurora relative overflow-hidden pt-32 pb-24 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,90,69,0.18),transparent_55%)]" />
      <article className="relative mx-auto max-w-3xl">
        <p className="eyebrow mb-4">Mentions légales</p>
        <h1 className="display text-[clamp(2rem,4.5vw,3.25rem)] text-platinum">
          Politique de confidentialité
        </h1>
        <p className="mt-4 text-sm text-muted">
          Dernière mise à jour : septembre 2026
        </p>

        <div className="prose-legal mt-12 space-y-10 text-sm leading-relaxed text-silver/90">
          <section>
            <h2 className="display mb-3 text-2xl text-platinum">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles collectées via le site{" "}
              <strong className="text-platinum">{site.name}</strong> (
              <a className="text-accent hover:underline" href={site.url}>
                {site.url.replace("https://", "")}
              </a>
              ) est :
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
              <li>
                <span className="text-silver">{site.name}</span>
              </li>
              <li>
                E-mail :{" "}
                <a className="text-accent hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>
                Téléphone :{" "}
                {site.phones.map((p) => (
                  <a key={p.href} className="text-accent hover:underline" href={p.href}>
                    {p.label}
                  </a>
                ))}
              </li>
              <li>Centres : Marseille &amp; Aix-en-Provence</li>
            </ul>
          </section>

          <section>
            <h2 className="display mb-3 text-2xl text-platinum">2. Données collectées</h2>
            <p>
              Via le formulaire de contact (envoi par messagerie mailto, sans stockage serveur
              côté site), nous pouvons recevoir :
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-muted">
              <li>Nom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone</li>
              <li>Objet et contenu du message</li>
            </ul>
          </section>

          <section>
            <h2 className="display mb-3 text-2xl text-platinum">3. Finalités</h2>
            <p>
              Les données sont utilisées exclusivement pour{" "}
              <strong className="text-platinum">répondre à vos demandes</strong> (prise de
              contact, rendez-vous, projets automobiles) et assurer le suivi commercial
              correspondant.
            </p>
          </section>

          <section>
            <h2 className="display mb-3 text-2xl text-platinum">4. Bases légales</h2>
            <p>
              Le traitement repose sur l&apos;
              <strong className="text-platinum">intérêt légitime</strong> de NatioPark
              Automobiles à répondre aux sollicitations, et, le cas échéant, sur des{" "}
              <strong className="text-platinum">mesures précontractuelles</strong> prises à
              votre demande (art. 6 du RGPD).
            </p>
          </section>

          <section>
            <h2 className="display mb-3 text-2xl text-platinum">5. Durée de conservation</h2>
            <p>
              Les échanges sont conservés pendant la durée nécessaire au traitement de votre
              demande, puis au plus tard <strong className="text-platinum">3 ans</strong> après
              le dernier contact, sauf obligation légale contraire.
            </p>
          </section>

          <section>
            <h2 className="display mb-3 text-2xl text-platinum">6. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits d&apos;
              <strong className="text-platinum">accès</strong>, de{" "}
              <strong className="text-platinum">rectification</strong>, d&apos;
              <strong className="text-platinum">effacement</strong> et d&apos;
              <strong className="text-platinum">opposition</strong>. Pour les exercer,
              contactez-nous à{" "}
              <a className="text-accent hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="display mb-3 text-2xl text-platinum">7. Cookies</h2>
            <p>
              Le site utilise des cookies essentiels au fonctionnement et, uniquement avec
              votre consentement, des cookies d&apos;analyse d&apos;audience. Vous pouvez
              gérer votre choix via la{" "}
              <strong className="text-platinum">bannière cookies</strong> affichée lors de
              votre première visite (stockage local de la préférence{" "}
              <code className="text-xs text-accent">np-cookie-consent</code>).
            </p>
          </section>

          <section>
            <h2 className="display mb-3 text-2xl text-platinum">8. Destinataires &amp; revente</h2>
            <p>
              Nous ne vendons pas vos données personnelles. Elles ne sont transmises qu&apos;aux
              prestataires strictement nécessaires à l&apos;hébergement et, le cas échéant, à
              l&apos;analyse d&apos;audience (après consentement).
            </p>
          </section>

          <section>
            <h2 className="display mb-3 text-2xl text-platinum">9. Hébergement</h2>
            <p>
              Le site est hébergé par <strong className="text-platinum">Hostinger</strong>. Les
              données techniques de connexion (logs) peuvent être traitées par l&apos;hébergeur
              dans le cadre de la sécurité et de la disponibilité du service.
            </p>
          </section>
        </div>

        <p className="mt-14 text-sm text-muted">
          Voir aussi les{" "}
          <Link href="/cgu" className="text-accent hover:underline">
            conditions générales d&apos;utilisation
          </Link>
          .
        </p>
      </article>
    </section>
  );
}
