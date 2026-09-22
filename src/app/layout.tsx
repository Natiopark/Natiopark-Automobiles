import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import { CookieBanner } from "@/components/CookieBanner";
import { Analytics } from "@/components/Analytics";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description:
    "NatioPark Automobiles : vente d'autos singulières, rachat de véhicules et conciergerie 360° à Marseille et Aix-en-Provence. Réception uniquement sur rendez-vous.",
  keywords: [
    "NatioPark",
    "automobiles de luxe",
    "Marseille",
    "Aix-en-Provence",
    "conciergerie automobile",
    "rachat véhicule",
    "vente auto prestige",
  ],
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description:
      "Accompagnateur de projets automobiles. Sélection exigeante, rachat et conciergerie 360° en Provence.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "NatioPark Automobiles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description:
      "Vente d'autos singulières, rachat et conciergerie 360° à Marseille et Aix-en-Provence.",
    images: ["/og-default.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="grain min-h-full flex flex-col bg-background text-foreground">
        <GrainOverlay />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
