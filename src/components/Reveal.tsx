"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  /** Viewport margin for whileInView (gallery-friendly defaults can override). */
  margin?: string;
  amount?: number | "some" | "all";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 36,
  once = true,
  margin = "-80px",
  amount,
}: Props) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin, ...(amount !== undefined ? { amount } : {}) }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
