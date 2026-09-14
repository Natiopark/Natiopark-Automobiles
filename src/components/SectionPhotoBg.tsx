"use client";

import Image from "next/image";
import type { ReactNode } from "react";

type SectionPhotoBgProps = {
  src: string;
  alt: string;
  children: ReactNode;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
  /** Extra dark layer for form/glass-heavy sections */
  heavy?: boolean;
};

export function SectionPhotoBg({
  src,
  alt,
  children,
  className = "",
  priority = false,
  objectPosition = "center",
  heavy = false,
}: SectionPhotoBgProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={85}
          className="object-cover"
          style={{ objectPosition }}
          sizes="100vw"
        />
      </div>
      {/* Dark luxury stack — same intensity as orbit / hero */}
      <div className="hero-scrim pointer-events-none absolute inset-0" />
      <div className="hero-vignette pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: heavy
            ? "linear-gradient(180deg, rgba(7,8,10,0.78) 0%, rgba(7,8,10,0.62) 45%, rgba(7,8,10,0.85) 100%)"
            : "linear-gradient(180deg, rgba(7,8,10,0.72) 0%, rgba(7,8,10,0.55) 45%, rgba(7,8,10,0.78) 100%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
