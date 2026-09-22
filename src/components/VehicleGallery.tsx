"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryVehicles, vehicles } from "@/data/site";

export function VehicleGallery() {
  const [active, setActive] = useState<number | null>(null);

  const flatIndex = useMemo(() => {
    const map = new Map<string, number>();
    vehicles.forEach((shot, i) => map.set(shot.src, i));
    return map;
  }, []);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => {
    setActive((i) => (i === null ? i : (i + vehicles.length - 1) % vehicles.length));
  }, []);
  const next = useCallback(() => {
    setActive((i) => (i === null ? i : (i + 1) % vehicles.length));
  }, []);

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

  return (
    <>
      {/* Pairs: rear | front, 2 cols */}
      <div className="mx-auto flex max-w-4xl flex-col gap-2">
        {galleryVehicles.map((vehicle) => {
          const shots = [vehicle.rear, vehicle.front];
          return (
            <div
              key={vehicle.id}
              className="grid grid-cols-2 gap-2"
              aria-label={vehicle.name}
            >
              {shots.map((shot) => {
                const index = flatIndex.get(shot.src) ?? 0;
                return (
                  <button
                    key={shot.src}
                    type="button"
                    onClick={() => setActive(index)}
                    className="group relative aspect-[4/3] w-full overflow-hidden rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    aria-label={`Agrandir : ${shot.alt}`}
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 transition group-hover:opacity-90" />
                    <span className="absolute bottom-3 right-3 text-[0.65rem] tracking-[0.2em] text-platinum/80 uppercase opacity-0 transition group-hover:opacity-100">
                      Voir
                    </span>
                  </button>
                );
              })}
            </div>
          );
        })}
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
            aria-label="Visionneuse véhicule"
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
                src={vehicles[active].src}
                alt={vehicles[active].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest text-muted">
              {active + 1} / {vehicles.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
