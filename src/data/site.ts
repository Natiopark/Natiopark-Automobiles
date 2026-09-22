export const site = {
  name: "NatioPark Automobiles",
  tagline: "Accompagnateur de projets automobiles",
  email: "contact@natiopark.fr",
  phones: [
    { label: "04.88.22.30.23", href: "tel:+33488223023" },
  ],
  reception:
    "Réception uniquement sur rendez-vous — sécurité, confidentialité et qualité de service.",
  url: "https://natiopark-automobiles.fr",
  // Paste GA4 Measurement ID (G-XXXXXXXX) when ready — empty = analytics disabled
  gaMeasurementId: "",
  centers: [
    {
      id: "marseille",
      city: "Marseille",
      name: "Gare TGV St Charles",
      address: "93 Boulevard National",
      postal: "13003 Marseille",
      mapQuery: "93 Boulevard National, 13003 Marseille",
      mapsEmbed:
        "https://www.google.com/maps?q=93%20Boulevard%20National%2C%2013003%20Marseille&output=embed",
    },
    {
      id: "aix",
      city: "Aix-en-Provence",
      name: "Aix-en-Provence Centre",
      address: "18 chemin de la pâquerette",
      postal: "13090 Aix en Provence",
      mapQuery: "18 chemin de la pâquerette, 13090 Aix-en-Provence",
      mapsEmbed:
        "https://www.google.com/maps?q=18%20chemin%20de%20la%20p%C3%A2querette%2C%2013090%20Aix-en-Provence&output=embed",
    },
  ],
  nav: [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/vehicules", label: "Véhicules" },
    { href: "/contact", label: "Contact" },
  ],
  testimonials: [
    {
      name: "Jean",
      quote:
        "Natiopark Automobiles a transformé mon expérience d'achat. Leur service personnalisé et leur sélection de véhicules sont parfaits. Je recommande vivement !",
      page: "services" as const,
    },
  ],
  googleReviews: {
    label: "EXCELLENT",
    rating: 4.8,
    ratingDisplay: "4,8 / 5",
    count: 223,
    countLabel: "Basée sur 223 avis",
    reviews: [
      {
        name: "Marc L.",
        initial: "M",
        quote:
          "Une expérience vraiment exceptionnelle. Un service très premium, une réactivité remarquable et surtout un accompagnement parfaitement maîtrisé à chaque étape du projet. L'auto correspondait exactement à mes attentes, avec un niveau de qualité irréprochable. On sent immédiatement le sérieux, l'expertise et le souci du détail.",
      },
      {
        name: "Sophie D.",
        initial: "S",
        quote:
          "Un vrai plaisir d'avoir été accompagné de cette manière, avec une équipe disponible, professionnelle et à l'écoute. Je recommande à 100 % et je reviendrai sans hésiter pour mon prochain projet automobile !",
      },
      {
        name: "Julien R.",
        initial: "J",
        quote:
          "Équipe très pro, très passionnés avec un service sur mesure et une réactivité exceptionnelle",
      },
      {
        name: "Claire B.",
        initial: "C",
        quote:
          "Tout a été simple et fluide, avec une équipe disponible, efficace et vraiment à l'écoute. Le véhicule était parfaitement conforme à mes attentes. Un grand merci pour la qualité du service et le sérieux de l'accompagnement.",
      },
    ],
  },
  positioning: [
    {
      id: "vente",
      title: "Vente d'autos singulières",
      text: "Une sélection exigeante de véhicules d'exception, choisis pour leur caractère, leur historique et leur aptitude à durer. Chaque automobile est inspectée, documentée et présentée avec transparence.",
    },
    {
      id: "rachat",
      title: "Rachat de véhicules",
      text: "Estimation précise, discrétion absolue et transaction fluide. Nous rachètons vos automobiles singulières dans le respect de leur valeur et de vos délais.",
    },
    {
      id: "conciergerie",
      title: "Conciergerie 360°",
      text: "Révision, transport, lavage, plein d'essence, achat, vente et financement — un accompagnement complet pour libérer votre temps et préserver votre véhicule.",
    },
  ],
  parcours: [
    { id: "brief", label: "Brief", desc: "Écoute de vos ambitions et contraintes" },
    { id: "sourcing", label: "Sourcing", desc: "Recherche ciblée en Europe" },
    { id: "inspection", label: "Inspection", desc: "Contrôle technique & esthétique" },
    { id: "transaction", label: "Transaction", desc: "Négociation & sécurisation" },
    { id: "aftercare", label: "Aftercare", desc: "Suivi, entretien & conciergerie" },
  ],
  conciergerieServices: [
    "Révision",
    "Transport",
    "Lavage",
    "Plein d'essence",
    "Achat",
    "Vente",
    "Financement",
    "Gardiennage",
  ],
  services: [
    {
      id: "achat-vente",
      title: "Achat & vente",
      icon: "key",
      text: "Accompagnement sur-mesure pour acquérir ou céder une automobile d'exception. Nous orchestrons sourcing, négociation, expertise et livraison — avec la discrétion d'une maison privée.",
    },
    {
      id: "detailing",
      title: "Entretien esthétique / detailing",
      icon: "sparkle",
      text: "Soins de carrosserie, protection céramique, rénovation d'intérieur : un detailing de haute précision pour sublimer chaque ligne et préserver la patine du temps.",
    },
    {
      id: "accompagnement",
      title: "Accompagnement projet",
      icon: "compass",
      text: "De l'idée à la clé : définition du cahier des charges, shortlist, essais et stratégie d'acquisition. Un interlocuteur unique pour chaque étape de votre projet.",
    },
    {
      id: "mecanique",
      title: "Entretien mécanique & carrosserie",
      icon: "wrench",
      text: "Réseau de partenaires sélectionnés en Europe pour la mécanique fine et la carrosserie. Interventions suivies, traçabilité complète, pièces d'origine privilégiées.",
    },
    {
      id: "administratif",
      title: "Administratif SIV / immatriculation",
      icon: "doc",
      text: "Gestion complète des formalités SIV, cartes grises, dossiers d'importation et immatriculation. Nous simplifions l'administratif pour que vous restiez au volant.",
    },
    {
      id: "conciergerie360",
      title: "Conciergerie 360",
      icon: "orbit",
      text: "Un service omnicanal : dépôt, lavage, plein, transport inter-sites, financement et gardiennage sécurisé. Votre véhicule, traité comme un actif précieux.",
    },
  ],
  processSteps: [
    { n: "01", title: "Écoute", text: "Rendez-vous confidentiel pour cerner votre projet." },
    { n: "02", title: "Proposition", text: "Shortlist argumentée et scénarios budgétaires." },
    { n: "03", title: "Exécution", text: "Inspection, transaction et livraison orchestrées." },
    { n: "04", title: "Suivi", text: "Aftercare et conciergerie pour la durée." },
  ],
};

export type GalleryShot = { src: string; alt: string };
export type GalleryVehicle = {
  id: string;
  name: string;
  rear: GalleryShot;
  front: GalleryShot;
  interior?: GalleryShot;
};

export const galleryVehicles: GalleryVehicle[] = [
  {
    id: "911-turbo-cabriolet",
    name: "Porsche 911 Turbo Cabriolet",
    rear: { src: "/photos/gallery/dos-02.jpg", alt: "Porsche 911 Turbo Cabriolet — vue arrière, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-09.jpg", alt: "Porsche 911 Turbo Cabriolet — trois-quarts avant, sélection NatioPark" },
  },
  {
    id: "718-spyder-rs",
    name: "Porsche 718 Spyder RS",
    rear: { src: "/photos/gallery/dos-06.jpg", alt: "Porsche 718 Spyder RS — vue arrière, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-04.jpg", alt: "Porsche 718 Spyder RS — trois-quarts avant, sélection NatioPark" },
  },
  {
    id: "911-turbo-s",
    name: "Porsche 911 Turbo S",
    rear: { src: "/photos/gallery/dos-991-turbo-s.jpg", alt: "Porsche 911 Turbo S — vue arrière, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-991-turbo-s.jpg", alt: "Porsche 911 Turbo S — trois-quarts avant, sélection NatioPark" },
  },
  {
    id: "911-noire",
    name: "Porsche 911 noire",
    rear: { src: "/photos/gallery/dos-911-noir.jpg", alt: "Porsche 911 noire — vue arrière, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-911-noir.jpg", alt: "Porsche 911 noire — trois-quarts avant, sélection NatioPark" },
    interior: { src: "/photos/gallery/int-911-noir.jpg", alt: "Porsche 911 noire — habitacle, sélection NatioPark" },
  },
  {
    id: "718-spyder-bleu",
    name: "Porsche 718 Spyder bleu",
    rear: { src: "/photos/gallery/dos-04.jpg", alt: "Porsche 718 Spyder — vue arrière, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-spyder-bleu.jpg", alt: "Porsche 718 Spyder — trois-quarts avant, sélection NatioPark" },
  },
  {
    id: "boxster-toit-rouge",
    name: "Porsche Boxster toit rouge",
    rear: { src: "/photos/gallery/dos-boxster-rouge.jpg", alt: "Porsche Boxster — vue arrière toit rouge, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-boxster-rouge.jpg", alt: "Porsche Boxster — trois-quarts avant intérieur rouge, sélection NatioPark" },
  },
  {
    id: "caterham-seven-7",
    name: "Caterham Seven 7",
    rear: { src: "/photos/gallery/dos-caterham-7.jpg", alt: "Caterham Seven 7 — vue arrière, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-caterham-7.jpg", alt: "Caterham Seven 7 — trois-quarts avant, sélection NatioPark" },
    interior: { src: "/photos/gallery/int-caterham-7.jpg", alt: "Caterham Seven 7 — habitacle, sélection NatioPark" },
  },
  {
    id: "alpine-a110",
    name: "Alpine A110",
    rear: { src: "/photos/gallery/dos-10.jpg", alt: "Alpine A110 — vue arrière, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-10.jpg", alt: "Alpine A110 — trois-quarts avant, sélection NatioPark" },
  },
  {
    id: "boxster-gts",
    name: "Porsche Boxster GTS",
    rear: { src: "/photos/gallery/dos-03.jpg", alt: "Porsche Boxster GTS — vue arrière, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-02.jpg", alt: "Porsche Boxster GTS — trois-quarts avant, sélection NatioPark" },
  },
  {
    id: "alfa-stelvio",
    name: "Alfa Romeo Stelvio",
    rear: { src: "/photos/gallery/dos-07.jpg", alt: "Alfa Romeo Stelvio — vue arrière, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-05.jpg", alt: "Alfa Romeo Stelvio — trois-quarts avant, sélection NatioPark" },
  },
  {
    id: "renault-21-turbo",
    name: "Renault 21 Turbo",
    rear: { src: "/photos/gallery/dos-r21.jpg", alt: "Renault 21 Turbo — vue arrière, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-r21.jpg", alt: "Renault 21 Turbo — trois-quarts avant, sélection NatioPark" },
  },
  {
    id: "aston-martin-db9",
    name: "Aston Martin DB9",
    rear: { src: "/photos/gallery/dos-db9.jpg", alt: "Aston Martin DB9 — vue arrière, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-db9.jpg", alt: "Aston Martin DB9 — trois-quarts avant, sélection NatioPark" },
    // intentionally no interior
  },
  {
    id: "bmw-x3-m",
    name: "BMW X3 M",
    rear: { src: "/photos/gallery/dos-x3m.jpg", alt: "BMW X3 M Competition — vue arrière, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-x3m.jpg", alt: "BMW X3 M Competition — trois-quarts avant, sélection NatioPark" },
  },
  {
    id: "993-carrera-4s",
    name: "Porsche 993 Carrera 4S",
    rear: { src: "/photos/gallery/dos-993-c4s.jpg", alt: "Porsche 993 Carrera 4S — vue arrière, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-993-c4s.jpg", alt: "Porsche 993 Carrera 4S — trois-quarts avant, sélection NatioPark" },
    // intentionally no interior
  },
  {
    id: "996-turbo",
    name: "Porsche 996 Turbo",
    rear: { src: "/photos/gallery/dos-996-turbo.jpg", alt: "Porsche 996 Turbo — face avant, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-996-turbo.jpg", alt: "Porsche 996 Turbo — trois-quarts avant, sélection NatioPark" },
    interior: { src: "/photos/gallery/int-996-turbo.jpg", alt: "Porsche 996 Turbo — habitacle cuir vert, sélection NatioPark" },
  },
  {
    id: "911-carrera-s",
    name: "Porsche 911 Carrera S",
    rear: { src: "/photos/gallery/dos-carrera-s.jpg", alt: "Porsche 911 Carrera S — vue arrière, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-carrera-s.jpg", alt: "Porsche 911 Carrera S — profil / trois-quarts avant, sélection NatioPark" },
  },
  {
    id: "cayenne-coupe-ehybrid",
    name: "Porsche Cayenne Coupe e-hybrid",
    rear: { src: "/photos/gallery/dos-cayenne-ehybrid.jpg", alt: "Porsche Cayenne Coupe e-hybrid — vue arrière, sélection NatioPark" },
    front: { src: "/photos/gallery/avant-cayenne-ehybrid.jpg", alt: "Porsche Cayenne Coupe e-hybrid — trois-quarts avant, sélection NatioPark" },
  },
];

/** Flat list of gallery shots for lightbox (rear + front only) */
export const vehicles = galleryVehicles.flatMap((v) => [v.rear, v.front]);
