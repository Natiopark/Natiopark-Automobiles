"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Reveal } from "./Reveal";

const Logo3DScene = dynamic(
  () => import("./Logo3DScene").then((m) => m.Logo3DScene),
  {
    ssr: false,
    loading: () => <LogoFallback />,
  }
);

function LogoFallback() {
  return (
    <div className="flex h-[360px] items-center justify-center sm:h-[420px] md:h-[480px]">
      <Image
        src="/brand/logo-natiopark.svg"
        alt="Logo NatioPark"
        width={180}
        height={180}
        className="opacity-80 invert"
      />
    </div>
  );
}

export function Logo3D() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqMobile = window.matchMedia("(max-width: 768px)");
    const finePointer = window.matchMedia("(pointer: fine)");

    const update = () => {
      setEnabled(!mqReduce.matches && !mqMobile.matches && finePointer.matches);
    };
    update();
    mqReduce.addEventListener("change", update);
    mqMobile.addEventListener("change", update);
    return () => {
      mqReduce.removeEventListener("change", update);
      mqMobile.removeEventListener("change", update);
    };
  }, []);

  return (
    <section className="section-pad relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(45,90,69,0.15),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">Signature</p>
          <h2 className="display text-4xl text-platinum md:text-5xl">
            L&apos;emblème, en métal
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
            Un monogramme géométrique — le N de NatioPark — sculpté dans une
            matière argentée, symbole de précision et de discrétion.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          {enabled ? <Logo3DScene /> : <LogoFallback />}
        </Reveal>
      </div>
    </section>
  );
}
