import { Reveal } from "./Reveal";
import { site } from "@/data/site";

const icons = {
  vente: (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M8 28 L24 12 L40 28" />
      <path d="M14 24 V36 H34 V24" />
      <circle cx="24" cy="30" r="3" />
    </svg>
  ),
  rachat: (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M12 24 H36" />
      <path d="M28 16 L36 24 L28 32" />
      <path d="M20 16 L12 24 L20 32" />
    </svg>
  ),
  conciergerie: (
    <svg viewBox="0 0 48 48" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <circle cx="24" cy="24" r="14" />
      <circle cx="24" cy="24" r="4" />
      <path d="M24 10 V14 M24 34 V38 M10 24 H14 M34 24 H38" />
    </svg>
  ),
};

export function Positioning() {
  return (
    <section className="section-pad relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-4">Positionnement</p>
          <h2 className="display max-w-3xl text-4xl text-platinum md:text-6xl">
            Trois piliers pour un accompagnement d&apos;exception
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {site.positioning.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.12}>
              <article className="glass group relative h-full overflow-hidden rounded-sm p-8 transition duration-500 hover:border-white/20">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-forest/20 blur-3xl transition group-hover:bg-forest-mid/30" />
                <div className="relative text-accent">
                  {icons[item.id as keyof typeof icons]}
                </div>
                <h3 className="display relative mt-6 text-2xl text-platinum md:text-3xl">
                  {item.title}
                </h3>
                <p className="relative mt-4 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
