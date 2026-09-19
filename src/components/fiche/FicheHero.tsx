"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { VehicleDossier } from "@/data/vehicles";

type Props = {
  vehicle: VehicleDossier;
};

function formatKm(n: number) {
  return new Intl.NumberFormat("fr-FR").format(n);
}

export function FicheHero({ vehicle }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.25]);
  const heroPhoto = vehicle.photos[0] ?? "/photos/orbit-porsche-911-turbo.jpg";
  const isDemo = vehicle.isDemo === true;

  return (
    <section ref={ref} className="relative min-h-[88svh] overflow-hidden md:min-h-[92svh]">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={heroPhoto}
          alt={`${vehicle.marque} ${vehicle.modele} ${vehicle.version}`}
          fill
          priority
          quality={90}
          className="object-cover object-[center_40%] scale-105"
          sizes="100vw"
        />
      </motion.div>

      <div className="hero-scrim pointer-events-none absolute inset-0" />
      <div className="hero-vignette pointer-events-none absolute inset-0" />
      <div className="hero-aurora pointer-events-none absolute inset-0" />
      <div className="hero-diagonal pointer-events-none absolute inset-0" />
      <div className="hero-sweep pointer-events-none absolute inset-0" />
      <div className="hero-film pointer-events-none absolute inset-0" />

      <motion.div
        style={{ opacity }}
        className="section-pad relative z-10 mx-auto flex min-h-[88svh] max-w-7xl flex-col justify-end pb-16 pt-32 md:min-h-[92svh] md:justify-end md:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 flex flex-wrap items-center gap-3"
        >
          <p className="eyebrow mb-0">
            Fiche véhicule · Dossier confidentiel
          </p>
          {!isDemo ? (
            <span className="glass rounded-sm border border-accent/30 px-2.5 py-1 text-[0.6rem] tracking-[0.18em] text-accent uppercase">
              Dossier NatioPark
            </span>
          ) : null}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="display max-w-5xl text-[clamp(2.2rem,6.5vw,5rem)] text-platinum"
        >
          {vehicle.marque}{" "}
          <span className="text-metallic">
            {vehicle.modele} {vehicle.version}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28 }}
          className="mt-5 text-base text-silver/90 md:text-lg"
        >
          {vehicle.annee} · {formatKm(vehicle.kilometrage)} km · {vehicle.prixAffiche}
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {vehicle.highlights.slice(0, 5).map((h) => (
            <li
              key={h}
              className="glass rounded-sm px-3 py-1.5 text-[0.65rem] tracking-[0.16em] text-accent uppercase"
            >
              {h}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
