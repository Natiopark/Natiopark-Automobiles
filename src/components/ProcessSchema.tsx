"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

export function ProcessSchema() {
  const reduce = useReducedMotion();
  const steps = site.processSteps;

  return (
    <section className="section-pad py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow mb-4">Méthode</p>
          <h2 className="display text-4xl text-platinum md:text-5xl">
            Processus clair, exécution impeccable
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute top-8 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent md:block" />
          <ol className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <li className="relative">
                  <motion.div
                    className="glass rounded-sm p-6"
                    whileHover={reduce ? undefined : { y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="display text-4xl text-accent">{s.n}</span>
                    <h3 className="mt-4 text-lg font-medium text-platinum">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                  </motion.div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
