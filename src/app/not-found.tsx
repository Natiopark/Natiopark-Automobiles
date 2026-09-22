import Link from "next/link";
import { MagneticButton } from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <section className="section-pad relative flex min-h-[70svh] items-center pt-32 pb-24 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,90,69,0.22),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4">Erreur 404</p>
        <h1 className="display text-[clamp(2.5rem,7vw,5rem)] text-platinum">
          Page introuvable
        </h1>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-silver/90 md:text-base">
          La page demandée n&apos;existe pas ou a été déplacée. Revenez à
          l&apos;accueil ou contactez-nous pour votre projet automobile.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="/">Accueil</MagneticButton>
          <MagneticButton href="/contact" variant="ghost">
            Nous contacter
          </MagneticButton>
        </div>
        <p className="mt-8 text-xs text-muted">
          Ou parcourir{" "}
          <Link href="/vehicules" className="text-accent hover:underline">
            nos véhicules
          </Link>{" "}
          et{" "}
          <Link href="/services" className="text-accent hover:underline">
            nos services
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
