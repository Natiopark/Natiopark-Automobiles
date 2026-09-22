"use client";

export function ServicesOrbit360() {
  return (
    <section
      className="bg-[#07080a] h-[70svh] min-h-[480px] w-full"
      aria-label="NatioPark — un service 360°"
    >
      <iframe
        src="/animations/service-360.html"
        title="NatioPark — un service 360°"
        className="h-full w-full border-0"
        loading="lazy"
      />
    </section>
  );
}
