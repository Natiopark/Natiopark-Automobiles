import { Reveal } from "./Reveal";
import { site } from "@/data/site";

type Props = {
  page?: "home" | "services";
};

export function Testimonials({ page = "home" }: Props) {
  const items = site.testimonials.filter((t) => t.page === page);

  return (
    <section className="section-pad py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-4">Témoignages</p>
          <h2 className="display text-4xl text-platinum md:text-5xl">
            La confiance de nos clients
          </h2>
        </Reveal>

        <div className={`mt-14 grid gap-6 ${items.length > 1 ? "md:grid-cols-2" : "max-w-3xl"}`}>
          {items.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <blockquote className="glass relative h-full rounded-sm p-8 md:p-10">
                <span className="display absolute top-4 left-6 text-6xl text-forest-light/40" aria-hidden>
                  “
                </span>
                <p className="relative mt-6 text-base leading-relaxed text-silver md:text-lg">
                  {t.quote}
                </p>
                <footer className="relative mt-8 flex items-center gap-3">
                  <span className="h-px w-8 bg-accent" />
                  <cite className="not-italic text-sm font-medium tracking-wide text-platinum">
                    {t.name}
                  </cite>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
