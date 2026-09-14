"use client";

import Link from "next/link";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 22 });
  const springY = useSpring(y, { stiffness: 280, damping: 22 });

  function onMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * 0.22);
    y.set(dy * 0.22);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  const cls = variant === "primary" ? "btn-primary" : "btn-ghost";

  return (
    <motion.div style={{ x: springX, y: springY }} className="inline-block">
      <Link
        ref={ref}
        href={href}
        className={`${cls} ${className}`}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </Link>
    </motion.div>
  );
}
