import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-charcoal-deep">
      <div className="divider-line absolute inset-x-0 top-0" />
      <div className="section-pad mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="mb-5 flex items-center gap-3">
            <Image
              src="/brand/natiopark_logo_blanc_transparent-AVL769rD7WsrM2Gq.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <div>
              <div className="text-sm font-semibold tracking-[0.2em] uppercase">
                NatioPark
              </div>
              <div className="text-[0.65rem] tracking-[0.16em] text-muted uppercase">
                Automobiles
              </div>
            </div>
          </div>
          <p className="display text-2xl text-platinum/90 md:text-3xl">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Sélection exigeante, rachat discret et conciergerie 360° — Marseille
            & Aix-en-Provence.
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="eyebrow mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-silver">
            <li>
              <a className="hover:text-platinum transition" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            {site.phones.map((p) => (
              <li key={p.href}>
                <a className="hover:text-platinum transition" href={p.href}>
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-muted">{site.reception}</p>
        </div>

        <div className="md:col-span-5">
          <h3 className="eyebrow mb-4">Nos centres</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {site.centers.map((c) => (
              <div key={c.id} className="glass rounded-sm p-4">
                <div className="text-sm font-medium text-platinum">{c.city}</div>
                <div className="mt-1 text-xs text-accent">{c.name}</div>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {c.address}
                  <br />
                  {c.postal}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section-pad mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-white/5 py-6 text-xs text-muted sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
        <nav className="flex flex-wrap gap-5" aria-label="Pied de page">
          {site.nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-platinum transition">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
