import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  allVehicleSlugs,
  getVehicle,
} from "@/data/vehicles";
import { FicheHero } from "@/components/fiche/FicheHero";
import { FicheSpecs } from "@/components/fiche/FicheSpecs";
import { FichePresentation } from "@/components/fiche/FichePresentation";
import { FicheOptions } from "@/components/fiche/FicheOptions";
import { FicheTimeline } from "@/components/fiche/FicheTimeline";
import { FicheDocs } from "@/components/fiche/FicheDocs";
import { FicheGallery } from "@/components/fiche/FicheGallery";
import { FicheCta } from "@/components/fiche/FicheCta";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return allVehicleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicle(slug);
  if (!vehicle) {
    return { title: "Fiche véhicule" };
  }
  const title = `${vehicle.marque} ${vehicle.modele} ${vehicle.version} — Fiche confidentielle`;
  const description = `${vehicle.annee} · ${vehicle.kilometrage.toLocaleString("fr-FR")} km · ${vehicle.prixAffiche}. Dossier véhicule NatioPark Automobiles.`;
  const ogImage = vehicle.photos[0];

  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: {
      title,
      description,
      images: ogImage
        ? [{ url: ogImage, width: 1920, height: 1080, alt: title }]
        : undefined,
    },
  };
}

export default async function FicheVehiclePage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = getVehicle(slug);
  if (!vehicle) notFound();

  const fullName = `${vehicle.marque} ${vehicle.modele} ${vehicle.version}`;

  return (
    <>
      <FicheHero vehicle={vehicle} />
      <FicheSpecs vehicle={vehicle} />
      <FichePresentation vehicle={vehicle} />
      <FicheOptions vehicle={vehicle} />
      <FicheTimeline vehicle={vehicle} />
      <FicheDocs vehicle={vehicle} />
      <FicheGallery photos={vehicle.photos} title={fullName} />
      <FicheCta
        marque={vehicle.marque}
        modele={vehicle.modele}
        version={vehicle.version}
      />
    </>
  );
}
