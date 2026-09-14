"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "./MagneticButton";
import { site } from "@/data/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/photos/hero-porsche-spyder-rs.jpg"
          alt="Porsche Spyder RS — NatioPark Automobiles"
          fill
          priority
          quality={90}
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-forest/20" />

      <motion.div
        style={{ opacity }}
        className="section-pad relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end pb-20 pt-32 md:justify-center md:pb-28"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex items-center gap-4"
        >
          <Image
            src="/brand/natiopark_logo_blanc_transparent-AVL769rD7WsrM2Gq.png"
            alt=""
            width={56}
            height={56}
            className="h-12 w-12 sm:h-14 sm:w-14"
          />
          <span className="eyebrow">Provence · Marseille & Aix</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="display max-w-4xl text-[clamp(2.75rem,8vw,6.5rem)] text-platinum"
        >
          NatioPark
          <span className="block text-metallic">Automobiles</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-silver/90 md:text-lg"
        >
          {site.tagline}. Une maison dédiée aux véhicules singuliers, au rachat
          exigeant et à une conciergerie totale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton href="/vehicules">Découvrir les véhicules</MagneticButton>
          <MagneticButton href="/contact" variant="ghost">
            Prendre rendez-vous
          </MagneticButton>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2 text-[0.6rem] tracking-[0.3em] text-muted uppercase">
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="h-8 w-px bg-gradient-to-b from-silver to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
