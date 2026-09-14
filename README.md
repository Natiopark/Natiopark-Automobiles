# NatioPark Automobiles

Site vitrine ultra-premium pour **NatioPark Automobiles** — accompagnateur de projets automobiles (Marseille & Aix-en-Provence).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion
- React Three Fiber / Drei / Three.js (emblème 3D métallique)

## Démarrage

```bash
cd natiopark-automobiles
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm start
```

## Routes

| Route | Page |
|-------|------|
| `/` | Accueil — hero cinématique, positionnement, parcours 360°, conciergerie, 3D, centres, témoignages |
| `/services` | Services — cartes détaillées, schéma de process, témoignage Jean |
| `/vehicules` | Galerie photos clients + lightbox |
| `/contact` | Formulaire, coordonnées, cartes OSM |

## Identité

- **Tagline** : Accompagnateur de projets automobiles
- **Couleurs** : charcoal `#2D2E36`, noir profond, argent / platine, touches vert forêt (inspirées du hero)
- **Typo** : Montserrat + Cormorant Garamond
- **Logo** : `public/brand/logo-natiopark.png` (fourni) + `logo-natiopark.svg` (N géométrique dans un cercle)
- **Hero** : `public/photos/hero-porsche-spyder-rs.jpg` (photo fournie)

## Notes

- Réception **uniquement sur rendez-vous**.
- La scène 3D est désactivée sur mobile / `prefers-reduced-motion` (fallback SVG).
- Le formulaire contact valide côté client puis ouvre un `mailto:` vers `contact@natiopark.fr`.
- Photos : uniquement assets clients (pas de stock).

## Contact

- contact@natiopark.fr
- 04.88.22.30.23 · 06.22.52.92.52
- Marseille — 93 Boulevard National, 13003
- Aix-en-Provence — 18 chemin de la pâquerette, 13090
