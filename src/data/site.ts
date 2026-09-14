export const site = {
  name: "NatioPark Automobiles",
  tagline: "Accompagnateur de projets automobiles",
  email: "contact@natiopark.fr",
  phones: [
    { label: "04.88.22.30.23", href: "tel:+33488223023" },
  ],
  reception:
    "Réception uniquement sur rendez-vous — sécurité, confidentialité et qualité de service.",
  url: "https://natiopark.fr",
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
      name: "Pascal D.",
      quote:
        "Un service exceptionnel et des véhicules de qualité. Natiopark a parfaitement répondu à mes attentes !",
      page: "home" as const,
    },
    {
      name: "Patrick F.",
      quote: "Un gardiennage très sécurisé, une réactivité au top",
      page: "home" as const,
    },
    {
      name: "Jean",
      quote:
        "Natiopark Automobiles a transformé mon expérience d'achat. Leur service personnalisé et leur sélection de véhicules sont parfaits. Je recommande vivement !",
      page: "services" as const,
    },
  ],
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

export const vehicles = [
  { src: "/photos/ok-00454-mk3qQDLkr3c52vOa.jpg", alt: "Automobile sélectionnée — vue avant" },
  { src: "/photos/ok-00480-dOqaPnlO8ZtEv39B.jpg", alt: "Automobile sélectionnée — profil" },
  { src: "/photos/ok-00491-Aq2WpnbgwXfLEGkG.jpg", alt: "Automobile sélectionnée — détail" },
  { src: "/photos/ok-00571-siE8MtvpjG9vefTk.jpg", alt: "Automobile sélectionnée — vue trois-quarts" },
  { src: "/photos/ok-02294-AGB2e9yNp0UWe8M7.jpg", alt: "Automobile sélectionnée — carrosserie" },
  { src: "/photos/ok-02343-Y4LDMWOjROukLjq6.jpg", alt: "Automobile sélectionnée — ligne" },
  { src: "/photos/ok-02658-AoPW8gZweVf7knJl.jpg", alt: "Automobile sélectionnée — intérieur" },
  { src: "/photos/ok-02782-YKb3XG1gyBIvrxwv.jpg", alt: "Automobile sélectionnée — signature" },
  { src: "/photos/ok-03487-A85e1Q2Lk9UVQn9B.jpg", alt: "Automobile sélectionnée — lumière" },
  { src: "/photos/ok-03550-Yyv9OgX6BXc0zvGr.jpg", alt: "Automobile sélectionnée — élégance" },
  { src: "/photos/ok-05308-mjE7XgPoboupx0pr.jpg", alt: "Automobile sélectionnée — caractère" },
  { src: "/photos/ok-06334-mxB4aojanBC7Lnwl.jpg", alt: "Automobile sélectionnée — performance" },
  { src: "/photos/ok-06336-AQEx2P82nkHwaZnN.jpg", alt: "Automobile sélectionnée — exclusivité" },
  { src: "/photos/simongosselinphotography_dsc_3507-edit-dOqaPnlgljcPlV7r.jpg", alt: "Automobile sélectionnée — photographie Simon Gosselin" },
  { src: "/photos/img_0128-Awv4pZwE41UJgEKo.JPG", alt: "Automobile sélectionnée — collection" },
  { src: "/photos/img_2140-Yg2jJ6LZZrh2NGM5.jpeg", alt: "Automobile sélectionnée — atelier" },
  { src: "/photos/bg-911-turbo-rear.jpg", alt: "Porsche 911 Turbo S — vue arrière" },
  { src: "/photos/bg-bmw-x3m.jpg", alt: "BMW X3 M" },
  { src: "/photos/bg-718-spyder-rear.jpg", alt: "Porsche 718 Spyder — vue arrière" },
];
