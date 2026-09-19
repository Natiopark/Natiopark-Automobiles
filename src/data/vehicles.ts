export type DocStatus = "disponible" | "sur demande" | "archive";

export type VehicleSpec = {
  label: string;
  value: string;
  unit?: string;
};

export type VehicleOptionItem = {
  name: string;
  detail?: string;
};

export type VehicleOptionGroup = {
  category: string;
  items: VehicleOptionItem[];
};

export type VehicleHistoryEntry = {
  date: string;
  title: string;
  text: string;
};

export type VehicleDoc = {
  label: string;
  status: DocStatus;
  note?: string;
};

export type VehicleDossier = {
  slug: string;
  marque: string;
  modele: string;
  version: string;
  annee: number;
  kilometrage: number;
  couleurExt: string;
  couleurInt: string;
  puissanceCh: number;
  coupleNm?: number;
  boite: string;
  transmission: string;
  carburant: string;
  prixAffiche: string;
  reference: string;
  presentation: string;
  specs: VehicleSpec[];
  options: VehicleOptionGroup[];
  historique: VehicleHistoryEntry[];
  documentation: VehicleDoc[];
  photos: string[];
  highlights: string[];
};

const dossiers: VehicleDossier[] = [
  {
    slug: "porsche-911-turbo-s-2019",
    marque: "Porsche",
    modele: "911",
    version: "Turbo S",
    annee: 2019,
    kilometrage: 28400,
    couleurExt: "Noir Intense métallisé",
    couleurInt: "Cuir noir / Alcantara",
    puissanceCh: 580,
    coupleNm: 750,
    boite: "PDK 8 rapports",
    transmission: "Propulsion intégrale (AWD)",
    carburant: "Essence",
    prixAffiche: "Sur demande",
    reference: "NP-DEMO-911TS-19",
    presentation:
      "Ce dossier présente un modèle de démonstration — Porsche 911 Turbo S (991.2) — tel qu'il pourrait être proposé à un client privilégié. La 991.2 Turbo S conjugue la pureté de la lignée 911 à une mécanique biturbo d'une densité rare : 580 ch, couple immédiat, traction intégrale et boîte PDK. Carrosserie Noir Intense, habitacle cuir/Alcantara, équipements Sport Chrono et freinage PCCB : une configuration cohérente pour un usage route exigeant. Chez NatioPark Automobiles, chaque automobile est inspectée, documentée et présentée avec la transparence d'une maison privée. Ce véhicule de démonstration illustre le format de fiche confidentielle que nous adressons en lien privé.",
    specs: [
      { label: "Année", value: "2019" },
      { label: "Kilométrage", value: "28 400", unit: "km" },
      { label: "Puissance", value: "580", unit: "ch" },
      { label: "Couple", value: "750", unit: "Nm" },
      { label: "0–100 km/h", value: "2,7", unit: "s" },
      { label: "Vitesse max.", value: "330", unit: "km/h" },
      { label: "Cylindrée", value: "3 800", unit: "cm³" },
      { label: "Architecture", value: "6 cylindres à plat biturbo" },
      { label: "Boîte", value: "PDK 8 rapports" },
      { label: "Transmission", value: "AWD" },
      { label: "Carburant", value: "Essence" },
      { label: "Émissions CO₂", value: "212", unit: "g/km" },
    ],
    options: [
      {
        category: "Habitacle",
        items: [
          { name: "Sellerie cuir noir / Alcantara", detail: "Sièges Sport Plus" },
          { name: "Pack Interior Carbon", detail: "Inserts carbone mat" },
          { name: "Volant GT Sport", detail: "Palettes PDK, chauffant" },
          { name: "PCM Navigation Plus", detail: "Apple CarPlay" },
          { name: "Système audio Bose Surround" },
          { name: "Éclairage d'ambiance", detail: "7 couleurs" },
        ],
      },
      {
        category: "Conduite",
        items: [
          { name: "Pack Sport Chrono", detail: "Mode Sport Plus, chronographe" },
          { name: "PASM Sport", detail: "Suspension active" },
          { name: "PDCC", detail: "Barres anti-roulis actives" },
          { name: "Direction assistée Power Steering Plus" },
          { name: "PCCB", detail: "Freins céramique carbone" },
          { name: "Échappement Sport", detail: "Volets actifs" },
        ],
      },
      {
        category: "Esthétique",
        items: [
          { name: "Teinte Noir Intense métallisé" },
          { name: "Jantes Turbo S 20/21\"", detail: "Finition noir satiné" },
          { name: "Éléments noirs SportDesign" },
          { name: "Rétroviseurs carbone" },
          { name: "Bandes latérales Turbo" },
        ],
      },
      {
        category: "Sécurité",
        items: [
          { name: "Porsche Stability Management (PSM)" },
          { name: "Aide au stationnement avant / arrière", detail: "Caméra de recul" },
          { name: "Régulateur adaptatif ACC" },
          { name: "Alarme volumétrique Porsche" },
          { name: "Airbags multi-niveaux" },
        ],
      },
    ],
    historique: [
      {
        date: "2019",
        title: "Mise en service",
        text: "Livraison constructeur — configuration Turbo S complète (modèle de démonstration).",
      },
      {
        date: "2021",
        title: "Entretien majeurs",
        text: "Révision Porsche Centre — distribution, fluides, contrôle PCCB. Carnet à jour.",
      },
      {
        date: "2023",
        title: "Contrôle technique & expertise",
        text: "CT favorable sans réserve majeure. Expertise carrosserie / mécanique documentée.",
      },
      {
        date: "2025",
        title: "Entrée dossier NatioPark",
        text: "Inspection maison, photos studio, constitution du dossier confidentiel (démonstration).",
      },
    ],
    documentation: [
      { label: "Carnet d'entretien", status: "disponible", note: "Tampons Porsche Centre" },
      { label: "Factures d'entretien", status: "disponible" },
      { label: "Certificat de conformité (COC)", status: "disponible" },
      { label: "Contrôle technique", status: "disponible", note: "Valide" },
      { label: "Rapport d'expertise", status: "sur demande" },
      { label: "Garantie constructeur / extension", status: "archive", note: "Hors période — options sur devis" },
      { label: "Historique kilométrage", status: "disponible" },
      { label: "Doubles de clés", status: "disponible", note: "2 jeux" },
    ],
    photos: [
      "/photos/orbit-porsche-911-turbo.jpg",
      "/photos/bg-911-turbo-rear.jpg",
      "/photos/hero-porsche-spyder-rs.jpg",
      "/photos/ok-00454-mk3qQDLkr3c52vOa.jpg",
      "/photos/ok-00480-dOqaPnlO8ZtEv39B.jpg",
      "/photos/ok-00491-Aq2WpnbgwXfLEGkG.jpg",
      "/photos/ok-00571-siE8MtvpjG9vefTk.jpg",
      "/photos/ok-02294-AGB2e9yNp0UWe8M7.jpg",
      "/photos/ok-02343-Y4LDMWOjROukLjq6.jpg",
      "/photos/ok-02658-AoPW8gZweVf7knJl.jpg",
      "/photos/bg-718-spyder-natiopark.jpg",
      "/photos/simongosselinphotography_dsc_3507-edit-dOqaPnlgljcPlV7r.jpg",
    ],
    highlights: [
      "991.2 Turbo S — 580 ch",
      "28 400 km — carnet Porsche",
      "PCCB + Sport Chrono",
      "Dossier confidentiel sur RDV",
    ],
  },
];

export function allVehicleSlugs(): string[] {
  return dossiers.map((d) => d.slug);
}

export function getVehicle(slug: string): VehicleDossier | undefined {
  return dossiers.find((d) => d.slug === slug);
}

export function getAllVehicles(): VehicleDossier[] {
  return dossiers;
}
