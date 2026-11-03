# Portfolio — Dimitri Luc

Portfolio personnel de **Dimitri Luc**, développeur front-end diplômé du parcours Intégrateur Web d’OpenClassrooms. Le site présente sept projets de formation et trois projets personnels, ainsi que son parcours et ses coordonnées professionnelles.

## Technologies

- HTML sémantique
- CSS responsive
- JavaScript natif
- Vite pour le serveur de développement et la compilation
- pnpm pour la gestion des dépendances

Le portfolio lui-même est un site statique, sans backend ni clé d’API. Les images des projets sont versionnées dans `public/assets/projects/` afin que le site reste complet après clonage.

## Démarrer en local

Prérequis : Node.js 22 ou supérieur et pnpm 11.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Le serveur de développement est disponible à l’adresse affichée par Vite (port 3000 dans la configuration du projet).

## Compiler

```sh
pnpm build
```

Les fichiers optimisés sont générés dans `dist/`. La configuration Vite utilise une base relative pour permettre de servir le site à la racine ou sous un sous-chemin. Le dépôt contient le code source et le build statique, mais aucun déploiement GitHub Pages/Vercel/Netlify n’est configuré par défaut.

## Structure

```text
.
├── index.html                 # Contenu, métadonnées et fiches projet
├── src/
│   ├── main.js                # Menu mobile et année du pied de page
│   └── styles.css             # Styles et règles responsive
├── public/
│   ├── assets/projects/       # Visuels des dix projets
│   ├── favicon.svg
│   └── manus-routes.json      # Déclaration de route utilisée par l’aperçu Manus
├── vite.config.js             # Base relative pour le déploiement statique
├── package.json
└── pnpm-lock.yaml
```

Les projets externes, leurs dépôts et leurs démos sont accessibles depuis les fiches du portfolio. La capture DevShowcase présente l’interface de sa démo publique.

## Contact

- E-mail : [lucdimitri31@gmail.com](mailto:lucdimitri31@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/dimitri-luc-03909b3a2/)
- [GitHub](https://github.com/Drakengard31)
