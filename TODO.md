# Suivi — Portfolio développeur front-end

## 1. Présenter le parcours et la formation

- Le portfolio est en français, présente son propriétaire **Dimitri Luc** comme développeur front-end diplômé de la formation **Intégrateur Web d’OpenClassrooms (Bac+2)**.
- La présentation « À propos » indique sa reconversion après six ans en restauration, son intérêt pour HTML et JavaScript avant sa formation, sa pratique front-end avec React/Redux/JavaScript, son apprentissage de Node.js/Express et son objectif full-stack JavaScript ; elle ne lui attribue aucune autre expérience ou date non fournie.
- La mention de disponibilité immédiate affichée sur l’ancien portfolio n’est pas reprise, car elle peut être obsolète.

## 2. Mettre en valeur les dix projets

- Le portfolio distingue les **sept projets de formation OpenClassrooms** des **trois projets personnels**.
- Pour chaque projet, le titre, les liens et les descriptions s’appuient sur les informations fournies par Dimitri et les faits vérifiés dans le dépôt. Les fonctionnalités ou technologies non confirmées ne sont pas inventées.

### Projets de formation — ordre fourni

| Projet | Dépôt GitHub | Démo |
|---|---|---|
| Riding Cities | https://github.com/Drakengard31/projet-2-openclassroom | https://venerable-torte-ad29d9.netlify.app/ |
| Booki | https://github.com/Drakengard31/Projet3-openclassroom | https://tourmaline-peony-f00cfc.netlify.app/ |
| OhMyFood | https://github.com/Drakengard31/openclassroomprojet-4 | https://neon-croquembouche-40c1eb.netlify.app/ |
| Kasa | https://github.com/Drakengard31/p7-kasa | https://leafy-arithmetic-d8a037.netlify.app/ |
| 724events | https://github.com/Drakengard31/p9 | https://beamish-nasturtium-d23c09.netlify.app/ |
| Print it | https://github.com/Drakengard31/openClassRoomprojet-5 | https://graceful-medovik-ce092a.netlify.app/ |
| ArgentBank | https://github.com/Drakengard31/ArgentBank-Frontend | https://argentbanque.netlify.app/ |

- La fiche ArgentBank précise que les identifiants transmis sont ceux d’un compte de démonstration et les garde dans un bloc repliable : e-mail `tony@stark.com`, mot de passe `password123`.

### Projets personnels — ordre fourni

| Projet | Dépôt GitHub | Démo |
|---|---|---|
| AppMétéo | https://github.com/Drakengard31/AppMeteo | https://meteoappl.netlify.app/ |
| Site vitrine — Boulangerie | https://github.com/Drakengard31/site-vitrine | https://site-vitrine-boulangerie.netlify.app/ |
| DevShowcase | https://github.com/Drakengard31/Devshowcase | https://devshowcase-rosy.vercel.app/ |

- Aucune clé d’API trouvée dans un dépôt n’est recopiée dans le portfolio ou ses métadonnées.
- Les visuels Riding Cities, Booki, OhMyFood, Kasa, 724events, Print it, ArgentBank, AppMétéo et Boulangerie fournis par Dimitri sont affichés sur leurs fiches ; DevShowcase est illustré par une capture de sa démo publique.

## 3. Donner accès au contact professionnel

- Le portfolio permet d’écrire à Dimitri à `lucdimitri31@gmail.com` via un lien `mailto:`.
- Le portfolio lie le profil LinkedIn fourni : https://www.linkedin.com/in/dimitri-luc-03909b3a2/.
- Le portfolio lie le profil GitHub confirmé par les dépôts fournis : https://github.com/Drakengard31.
- Aucune autre coordonnée ou aucun autre profil inconnu n’est inventé.

## 4. Réaliser l’expérience visuelle et responsive approuvée

- Le site utilise la direction éditoriale suisse contemporaine approuvée : fond ivoire doux, texte bleu-noir, orange corail signature `#F26B3A`, bleu pétrole secondaire `#277B78` avec un ton pâle `#DCE9E5`, typographie lisible et composition asymétrique.
- La navigation relie l’introduction, la présentation, les projets, la formation et le contact ; le menu compact mobile est accessible.
- Le hero entre en cascade sur 420–550 ms ; les blocs et les fiches projets apparaissent au défilement par translation verticale de 20 px et opacité, en 480 ms, une seule fois via `IntersectionObserver`.
- Au survol, les fiches projet s’élèvent légèrement, prennent un liseré bleu pétrole et zooment l’image à `1.035` en 460 ms ; les flèches glissent de 4 px en 180 ms.
- La mise en page s’adapte aux écrans mobiles et larges, les interactions fonctionnent au clavier, les repères de focus restent visibles, le contenu reste lisible sans JavaScript et `prefers-reduced-motion` désactive les mouvements.

## 5. Fournir une page web prête à prévisualiser

- Le contenu principal est présent dans le HTML initial et structuré avec des éléments sémantiques ; il ne dépend pas de JavaScript pour être lisible.
- Le site statique comprend les métadonnées de base et la déclaration `/manus-routes.json` correspondant à sa route réelle.
- Le site statique est publié sur GitHub Pages et permet aux recruteurs de consulter la page et de télécharger le PDF.

## 6. Préparer un dépôt GitHub professionnel et clonable

- Le projet est connecté à `https://github.com/Drakengard31/portfolio-dimitri-luc`, dépôt public rendu public après autorisation explicite du propriétaire.
- Les dix images de projet sont présentes et versionnées dans `public/assets/projects/` ; les pages ne dépendent plus des chemins `/manus-storage/`.
- Les images et le favicon utilisent des chemins compatibles avec la racine et un sous-chemin de publication ; la compilation Vite utilise `base: './'`.
- `README.md`, en français, présente le portfolio, sa structure, les technologies et les commandes d’installation, de développement et de compilation.
- `.gitignore` exclut notamment `node_modules`, `dist`, les fichiers `.env` et secrets ; les dépendances sont reproductibles avec `pnpm-lock.yaml` et `pnpm install --frozen-lockfile`.
- Le dépôt public contient le code source ; le workflow GitHub Actions héberge séparément le site sur GitHub Pages. Une publication GitHub Pages ne prouve pas qu’un déploiement Vercel a abouti.

## 7. Rendre le CV téléchargeable par les recruteurs

- Le fichier fourni par Dimitri `CV_Dimitri_Luc.pdf` est conservé sans modification à `public/documents/CV_Dimitri_Luc.pdf` et inclus dans le dépôt GitHub public.
- Le hero affiche un bouton visible « Télécharger mon CV » lié au chemin relatif `./documents/CV_Dimitri_Luc.pdf` ; son attribut `download` propose le nom `CV_Dimitri_Luc.pdf`.
- Le PDF est un fichier valide d’une page, non chiffré, servi comme document téléchargeable et accessible sans dépendre du stockage Manus.
- Le README indique où se trouve le CV dans le dépôt ; le contenu du PDF n’est ni réécrit ni altéré.

## 8. Déployer le portfolio pour les recruteurs

- Dimitri demande que les changements approuvés apparaissent sur son site Vercel existant à `https://portfolio-7p4v.vercel.app/` ; cette URL doit présenter la palette et les animations mises à jour ainsi que l’accès au CV.
- Le dépôt `Drakengard31/portfolio-dimitri-luc` a un workflow GitHub Actions qui publie GitHub Pages à chaque push sur `main` ; cette publication séparée ne compte pas comme preuve de déploiement Vercel.
- Ne considérer Vercel comme mis à jour qu’après avoir vérifié l’URL cible et constaté les nouveaux marqueurs de la version, avec le PDF toujours accessible.
