import { Hero } from "@/components/Hero";
import { Positioning } from "@/components/Positioning";
import { ParcoursInfographic } from "@/components/ParcoursInfographic";
import { ConciergerieWheel } from "@/components/ConciergerieWheel";
import { DualCenters } from "@/components/DualCenters";
import { RdvNotice } from "@/components/RdvNotice";
import { Testimonials } from "@/components/Testimonials";
import { Logo3D } from "@/components/Logo3D";

export default function AccueilPage() {
  return (
    <>
      <Hero />
      <Positioning />
      <ParcoursInfographic />
      <ConciergerieWheel />
      <Logo3D />
      <DualCenters />
      <RdvNotice />
      <Testimonials page="home" />
    </>
  );
}
