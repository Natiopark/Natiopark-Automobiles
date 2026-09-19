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
  vin?: string;
  codeModele?: string;
  miseEnCirculation?: string;
  livraisonNeuf?: string;
  centreEntretien?: string;
  paintMap?: string;
  isDemo?: boolean;
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
    isDemo: true,
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
  {
    slug: "porsche-911-992-turbo-s-cabriolet-2020",
    marque: "Porsche",
    modele: "911 (992)",
    version: "Turbo S Cabriolet 3.8",
    annee: 2020,
    kilometrage: 61664,
    couleurExt:
      "Bleu nuit métallisé (Nachtblau Metallic) — code N5; capote bleue 7V",
    couleurInt:
      "Sellerie cuir Sport-Tex Square noir (TA), bandes centrales Sport-Tex Square noir",
    puissanceCh: 650,
    coupleNm: 800,
    boite: "PDK 8 rapports",
    transmission: "Traction intégrale (AWD)",
    carburant: "Essence",
    prixAffiche: "Sur demande",
    reference: "NP-992-TS-CAB-2020",
    vin: "WP0ZZZ99ZMS261465",
    codeModele: "992650",
    miseEnCirculation: "6 novembre 2020",
    livraisonNeuf: "11 novembre 2020",
    centreEntretien:
      "Porsche Zentrum Nürnberg — Auto-Scholz Sportwagen GmbH",
    paintMap: "/photos/fiche-992-turbo-s-cabrio-paint-map.png",
    isDemo: false,
    presentation:
      "Porsche 911 (992) Turbo S Cabriolet 3.8 livrée neuve le 11 novembre 2020 au Porsche Zentrum Nürnberg. Carrosserie Bleu nuit métallisé (Nachtblau Metallic, code N5) assortie d'une capote bleue (7V) et d'un habitacle Sport-Tex Square noir. Mécanique flat-6 biturbo 3,8 litres : 650 ch, 800 Nm, boîte PDK 8 rapports et traction intégrale. Au 8 avril 2026, le compteur affiche 61 664 km — suivi intégral réseau officiel Porsche Nuremberg depuis la livraison, avec douze passages atelier facturés et documentés. Configuration d'origine riche de 32 équipements sur commande. Contrôle technique allemand HU/AU (§29 StVZO) valide jusqu'en décembre 2027 ; mesures d'épaisseur de peinture homogènes à 150 µm sur les panneaux contrôlés, sans reprise visible. Dossier NatioPark Automobiles à Marseille — présentation confidentielle sur rendez-vous.",
    specs: [
      { label: "Année / MEC", value: "2020 · 6 nov. 2020" },
      { label: "Kilométrage", value: "61 664", unit: "km" },
      { label: "VIN", value: "…MS261465" },
      { label: "Code modèle", value: "992650" },
      { label: "Puissance", value: "650", unit: "ch" },
      { label: "Couple", value: "800", unit: "Nm" },
      { label: "0–100 km/h", value: "~2,8", unit: "s" },
      { label: "Vitesse max.", value: "~330", unit: "km/h" },
      { label: "Cylindrée", value: "3 745", unit: "cm³" },
      { label: "Architecture", value: "Flat-6 biturbo" },
      { label: "Boîte", value: "PDK 8 rapports" },
      { label: "Transmission", value: "AWD" },
      { label: "Capote", value: "Bleue (7V)" },
      { label: "CT HU/AU", value: "Valide 12/2027" },
    ],
    options: [
      {
        category: "Couleur & peinture",
        items: [
          { name: "Bleu nuit métallisé", detail: "N5 — Nachtblau Metallic" },
          { name: "Capote bleue", detail: "7V" },
          {
            name: "Sellerie cuir Sport-Tex Square noir",
            detail: "TA — bandes centrales Sport-Tex Square noir",
          },
        ],
      },
      {
        category: "Extérieur",
        items: [
          { name: "Pieds rétroviseurs couleur ext.", detail: "6FU" },
          { name: "Prises d'air latérales AR couleur ext.", detail: "VK1" },
          { name: "Projecteurs de porte LED « PORSCHE »", detail: "UD1" },
          { name: "Lettrage PORSCHE noir brillant", detail: "KQ2" },
          { name: "Lettrage 911 couleur ext.", detail: "AAK" },
        ],
      },
      {
        category: "Moteur / châssis",
        items: [
          { name: "Direction assistée Plus", detail: "1N3" },
          { name: "Système de levage essieu avant", detail: "2UH" },
        ],
      },
      {
        category: "Roues",
        items: [
          {
            name: "Jantes 20/21\" 911 Turbo S Exclusive Design",
            detail: "46U",
          },
        ],
      },
      {
        category: "Intérieur / confort",
        items: [
          { name: "Ioniseur", detail: "2V4" },
          { name: "Pack Light Design", detail: "QQ2" },
          { name: "Sièges avant chauffants", detail: "4A3" },
          { name: "Pack rangements", detail: "QE1" },
          { name: "Ceintures jaune racing", detail: "FZ4" },
          { name: "Chrono Sport Chrono jaune racing", detail: "VN1" },
          { name: "Compte-tours jaune racing", detail: "8PC" },
          { name: "Écusson Porsche appuie-têtes", detail: "3J7" },
          {
            name: "Habillage colonne direction cuir + Memory",
            detail: "2C8",
          },
          { name: "Tapis bordure cuir", detail: "AFM" },
          { name: "Dossier Sport Plus cuir + carbone mat", detail: "2TC" },
          { name: "Suppression matelassage", detail: "3HA" },
        ],
      },
      {
        category: "Race-Tex",
        items: [
          { name: "Pare-soleil Race-Tex", detail: "5XK" },
          {
            name: "Volant sport GT Race-Tex, carbone mat, chauffant",
            detail: "1XR",
          },
          { name: "Écusson Porsche boîte à gants Race-Tex", detail: "6E5" },
        ],
      },
      {
        category: "Carbone",
        items: [
          { name: "Seuils de porte carbone mat éclairés", detail: "7M8" },
        ],
      },
      {
        category: "Surpiqûres",
        items: [
          { name: "Choix coloris du fil", detail: "00480" },
          { name: "Pack intérieur surpiqûres contrastées", detail: "6RD" },
        ],
      },
      {
        category: "Assistance",
        items: [
          { name: "Assistant changement de voie", detail: "7Y1" },
          {
            name: "Assistant stationnement vision panoramique",
            detail: "KA6",
          },
          { name: "Porsche InnoDrive + ACC", detail: "3V1" },
        ],
      },
    ],
    historique: [
      {
        date: "11 nov. 2020",
        title: "Livraison neuf",
        text: "Livraison neuf — Porsche Zentrum Nürnberg (Auto-Scholz Sportwagen GmbH).",
      },
      {
        date: "3 nov. 2021",
        title: "Service huile constructeur",
        text: "14 152 km — Service huile constructeur — Fact. 210037967 — Porsche Zentrum Nürnberg Official.",
      },
      {
        date: "8 juin 2022",
        title: "Garantie — calculateur siège",
        text: "19 360 km — Garantie (calculateur siège, campagne WMJ2) — Porsche Zentrum Nürnberg Official.",
      },
      {
        date: "5 déc. 2022",
        title: "Inspection complète M.Y. 2020",
        text: "26 326 km — Inspection complète M.Y. 2020 — Fact. 210044461 — Porsche Zentrum Nürnberg Official.",
      },
      {
        date: "4 déc. 2023",
        title: "HU/AU + aspect / Bose",
        text: "38 720 km — HU/AU + aspect / Bose sous garantie — Fact. 210050950 — Porsche Zentrum Nürnberg Official.",
      },
      {
        date: "6 mai 2024",
        title: "Remplacement jante + console",
        text: "40 016 km — Remplacement jante + console sous garantie — Fact. 210052849 — Porsche Zentrum Nürnberg Official.",
      },
      {
        date: "22 mai 2024",
        title: "4 Pirelli P Zero neufs",
        text: "41 211 km — 4 Pirelli P Zero neufs — Fact. 210053027 — Porsche Zentrum Nürnberg Official.",
      },
      {
        date: "18 nov. 2024",
        title: "Inspection + bougies 60k",
        text: "49 230 km — Inspection + bougies 60k + liquide frein + capote — Fact. 210056433 — Porsche Zentrum Nürnberg Official.",
      },
      {
        date: "20 mai 2025",
        title: "Garantie haut-parleur porte AV",
        text: "53 407 km — Garantie haut-parleur porte AV — Porsche Zentrum Nürnberg Official.",
      },
      {
        date: "26 août 2025",
        title: "Pare-brise + géométrie / caméra",
        text: "60 124 km — Pare-brise origine + géométrie/caméra + frein stationnement — Fact. 210060837-838 — Porsche Zentrum Nürnberg Official.",
      },
      {
        date: "18 déc. 2025",
        title: "HU/AU + antipollution",
        text: "61 151 km — HU/AU + antipollution, validité 12/2027 — Fact. 210063008 — Porsche Zentrum Nürnberg Official.",
      },
      {
        date: "8 avr. 2026",
        title: "Préparation esthétique",
        text: "61 664 km — Préparation esthétique + capteur batterie sous garantie — Fact. 210064613 — Porsche Zentrum Nürnberg Official.",
      },
    ],
    documentation: [
      {
        label: "Carnet / suivi entretien réseau officiel",
        status: "disponible",
      },
      {
        label: "Factures atelier (12 passages documentés)",
        status: "disponible",
      },
      {
        label: "VIN WP0ZZZ99ZMS261465",
        status: "disponible",
      },
      {
        label: "Contrôle technique HU/AU §29 StVZO",
        status: "disponible",
        note: "Valide jusqu'en 12/2027",
      },
      {
        label: "Contrôle antipollution",
        status: "disponible",
        note: "Déc. 2025",
      },
      {
        label: "Mesures épaisseurs peinture (150 µm homogènes)",
        status: "disponible",
      },
      {
        label: "Certificat de conformité (COC)",
        status: "sur demande",
      },
      {
        label: "Doubles de clés",
        status: "sur demande",
      },
      {
        label: "Rapport d'expertise complémentaire",
        status: "sur demande",
      },
    ],
    photos: [
      "/photos/orbit-porsche-911-turbo.jpg",
      "/photos/bg-911-turbo-rear.jpg",
      "/photos/hero-porsche-spyder-rs-user.jpg",
      "/photos/ok-00454-mk3qQDLkr3c52vOa.jpg",
      "/photos/ok-00480-dOqaPnlO8ZtEv39B.jpg",
      "/photos/ok-00491-Aq2WpnbgwXfLEGkG.jpg",
      "/photos/ok-00571-siE8MtvpjG9vefTk.jpg",
      "/photos/ok-02294-AGB2e9yNp0UWe8M7.jpg",
      "/photos/ok-02343-Y4LDMWOjROukLjq6.jpg",
      "/photos/ok-02658-AoPW8gZweVf7knJl.jpg",
      "/photos/bg-718-spyder-natiopark.jpg",
    ],
    highlights: [
      "650 ch · Turbo S Cabriolet",
      "61 664 km · suivi Porsche Nuremberg",
      "32 équipements sur commande",
      "CT valide jusqu'en 12/2027",
      "Peinture homogène 150 µm",
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
