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
          className="object-cover object-[center_40%] scale-105"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark luxury stack: photo blur-adjacent overlays, mesh, vignette, aurora, sweep, film grain */}
      <div className="hero-scrim pointer-events-none absolute inset-0" />
      <div className="hero-vignette pointer-events-none absolute inset-0" />
      <div className="hero-aurora pointer-events-none absolute inset-0" />
      <div className="hero-diagonal pointer-events-none absolute inset-0" />
      <div className="hero-sweep pointer-events-none absolute inset-0" />
      <div className="hero-film pointer-events-none absolute inset-0" />

      <motion.div
        style={{ opacity }}
        className="section-pad relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end pb-20 pt-32 md:justify-center md:pb-28"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="display max-w-4xl text-[clamp(2.75rem,8vw,6.5rem)] text-platinum"
        >
          NatioPark
          <span className="block text-metallic">Automobiles</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-silver/90 md:text-lg"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <MagneticButton href="/services">Découvrir les services</MagneticButton>
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
