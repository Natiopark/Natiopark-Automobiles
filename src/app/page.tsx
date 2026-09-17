import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { ServiceOrbitInfographic } from "@/components/ServiceOrbitInfographic";
import { Positioning } from "@/components/Positioning";
import { ScrollScrubVideo } from "@/components/ScrollScrubVideo";
import { DualCenters } from "@/components/DualCenters";
import { RdvNotice } from "@/components/RdvNotice";
import { Testimonials } from "@/components/Testimonials";

export default function AccueilPage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServiceOrbitInfographic />
      <Positioning />
      <ScrollScrubVideo />
      <DualCenters />
      <RdvNotice />
      <Testimonials page="home" />
    </>
  );
}
