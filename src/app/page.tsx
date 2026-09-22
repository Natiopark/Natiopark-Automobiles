import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { ServiceOrbitInfographic } from "@/components/ServiceOrbitInfographic";
import { ScrollPlayVideo } from "@/components/ScrollPlayVideo";
import { DualCenters } from "@/components/DualCenters";
import { RdvNotice } from "@/components/RdvNotice";
import { GoogleReviews } from "@/components/GoogleReviews";

export default function AccueilPage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServiceOrbitInfographic />
      <ScrollPlayVideo />
      <DualCenters />
      <RdvNotice />
      <GoogleReviews />
    </>
  );
}
