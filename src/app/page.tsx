import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { Positioning } from "@/components/Positioning";
import { ServiceOrbitInfographic } from "@/components/ServiceOrbitInfographic";
import { ConciergerieWheel } from "@/components/ConciergerieWheel";
import { DualCenters } from "@/components/DualCenters";
import { RdvNotice } from "@/components/RdvNotice";
import { Testimonials } from "@/components/Testimonials";

export default function AccueilPage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Positioning />
      <ServiceOrbitInfographic />
      <ConciergerieWheel />
      <DualCenters />
      <RdvNotice />
      <Testimonials page="home" />
    </>
  );
}
