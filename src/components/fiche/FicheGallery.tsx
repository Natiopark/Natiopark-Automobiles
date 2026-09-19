"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

type Props = {
  photos: string[];
  title: string;
};

export function FicheGallery({ photos, title }: Props) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((i) => (i === null ? i : (i + photos.length - 1) % photos.length));
  }, [photos.length]);
  const next = useCallback(() => {
    setActive((i) => (i === null ? i : (i + 1) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, prev, next]);

  if (!photos.length) return null;

  return (
    <section className="section-pad section-luxury relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-3">Book photo</p>
          <h2 className="display text-3xl text-platinum md:text-4xl">
            Galerie
          </h2>
          <p className="mt-4 max-w-xl text-sm text-muted">
            Sélection visuelle du dossier — {photos.length} clichés.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((src, i) => {
            const wide = i === 0 || i === 5;
            return (
              <Reveal
                key={src}
                delay={(i % 3) * 0.06}
                className={wide ? "sm:col-span-2 lg:col-span-2" : undefined}
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`group relative w-full overflow-hidden rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    wide ? "aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                  aria-label={`Agrandir photo ${i + 1} — ${title}`}
                >
                  <Image
                    src={src}
                    alt={`${title} — photo ${i + 1}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes={
                      wide
                        ? "(max-width: 1024px) 100vw, 66vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-55 transition group-hover:opacity-80" />
                  <span className="absolute bottom-4 left-4 text-[0.65rem] tracking-[0.2em] text-platinum/80 uppercase opacity-0 transition group-hover:opacity-100">
                    Voir
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Visionneuse fiche véhicule"
            onClick={close}
          >
            <button
              type="button"
              className="absolute top-5 right-5 z-10 border border-white/20 px-3 py-2 text-xs tracking-widest text-platinum uppercase hover:bg-white/10"
              onClick={close}
              aria-label="Fermer"
            >
              Fermer
            </button>
            <button
              type="button"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 border border-white/20 px-3 py-4 text-platinum hover:bg-white/10 md:left-6"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Précédent"
            >
              ←
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 border border-white/20 px-3 py-4 text-platinum hover:bg-white/10 md:right-6"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Suivant"
            >
              →
            </button>
            <motion.div
              key={active}
              className="relative h-[70vh] w-full max-w-5xl"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[active]}
                alt={`${title} — photo ${active + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest text-muted">
              {active + 1} / {photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
