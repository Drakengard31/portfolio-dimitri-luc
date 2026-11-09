# Plan — Refonte du portfolio développeur front-end

## Objectif

Refaire entièrement le portfolio de **Dimitri Luc**, développeur front-end diplômé du parcours **Intégrateur Web d’OpenClassrooms (Bac+2)**. Le site présente sept projets réalisés pendant la formation et trois projets personnels qui illustrent la poursuite de son apprentissage. Sa présentation reprend aussi sa reconversion après six ans en restauration, son intérêt pour le code et son apprentissage actuel de Node.js et Express en vue d’évoluer vers le full-stack JavaScript.

Les noms, liens et informations des projets ont été transmis par Dimitri ; les descriptions et technologies sont vérifiées à partir des dépôts GitHub accessibles. Les détails non confirmés ne sont pas inventés. Les identifiants ArgentBank fournis sont présentés comme accès de démonstration dans un bloc repliable. Aucune clé d’API de projet n’est copiée dans le portfolio.

Le dépôt public `Drakengard31/portfolio-dimitri-luc` contient le code clonable, les dix visuels versionnés sous `public/assets/projects/`, les chemins relatifs compatibles avec GitHub Pages et Vercel, et un `README.md` en français. Cette tâche prolonge le site existant sans refaire l’export du dépôt.

## Direction visuelle

- **Mouvement de design :** design éditorial suisse contemporain, adapté à un portfolio numérique — typographie généreuse, grille typographique nette et composition asymétrique.
- **Principes centraux :** lisibilité avant l’ornement ; parcours rapide entre profil, projets et contact ; authenticité des réalisations ; accessibilité et sobriété.
- **Philosophie colorielle :** fond ivoire doux et texte bleu-noir pour une impression calme et professionnelle ; l’orange corail `#F26B3A` reste l’accent énergique des actions et repères, tandis que le bleu pétrole `#277B78` et son ton pâle `#DCE9E5` apportent une seconde couleur posée aux états de focus, métadonnées et détails de projet.
- **Paradigme de mise en page :** composition éditoriale alignée à gauche, alternant grands titres, colonnes décalées et études de cas horizontales plutôt qu’une grille uniforme centrée.
- **Éléments signature :** repères de section numérotés (« 01 », « 02 ») ; filet orange fin qui guide la lecture ; petit motif de balises de code angulaires dans le logotype.
- **Philosophie d’interaction :** navigation par ancres directe, commandes visibles, états clavier clairement perceptibles et menu mobile utilisable sans souris ; le corail reste réservé aux appels principaux et le pétrole souligne les états secondaires.
- **Animation :** entrée du hero en cascade de 420 à 550 ms ; révélation au défilement des blocs et projets par opacité et translation verticale de 20 px en 480 ms, une seule fois avec `IntersectionObserver` ; au survol, légère élévation de carte, liseré pétrole et zoom d’image limité à `1.035` en 460 ms ; les flèches glissent de 4 px en 180 ms. Les contenus restent visibles sans JavaScript et les mouvements sont neutralisés par `prefers-reduced-motion`.
- **Système typographique :** sans-sérif « DM Sans » pour le texte et les titres, avec une sans-sérif système de repli ; « IBM Plex Mono » pour les étiquettes, technologies et repères. Grande échelle de titre sur écran large, réduite de façon fluide sur mobile.
- **Essence de marque :** un développeur front-end qui transforme des idées et des maquettes en interfaces lisibles, accessibles et soignées ; personnalité **curieuse, rigoureuse, concrète**.
- **Voix de marque :** première personne, directe et chaleureuse, axée sur les choix et l’apprentissage. Exemples : « Je transforme une idée claire en interface vivante. » ; « Mes projets, mes choix, ce que j’ai appris. » Ces formulations pourront être ajustées avec les mots du propriétaire.
- **Logotype :** nom **Dimitri Luc** en typographie éditoriale, accompagné d’un signe angulaire original inspiré de `</>`.
- **Couleur de marque signature :** orange corail `#F26B3A`, équilibré par le bleu pétrole `#277B78` comme accent secondaire distinctif.
- **Visuels :** pas de portrait générique ni de fausses captures de projets. Les fiches utilisent les visuels reçus pour neuf projets et une capture fidèle de la démo DevShowcase ; chaque fichier sera versionné avec le site pour que le dépôt cloné ne dépende pas du stockage Manus.

## Expérience et contenu

Une page d’accueil en français avec navigation ancrée, comprenant :

1. **Introduction / hero** : Dimitri Luc, positionnement front-end, diplôme OpenClassrooms Bac+2, pratique React/Redux/JavaScript, apprentissage Node.js/Express et appel à découvrir les projets.
2. **À propos** : reconversion après six ans en restauration, intérêt antérieur pour HTML/JavaScript et progression vers le full-stack JavaScript, à partir du portfolio existant fourni par Dimitri.
3. **Projets de formation** : sept fiches pour Riding Cities, Booki, OhMyFood, Kasa, 724events, Print it et ArgentBank. Chaque fiche comprend une description factuelle, les technologies confirmées et les liens fournis vers le dépôt et la démo.
4. **Projets personnels** : trois fiches séparées pour AppMétéo, Site vitrine — Boulangerie et DevShowcase, avec leurs descriptions vérifiées et leurs liens GitHub/démo.
5. **Accès de démonstration ArgentBank** : afficher l’e-mail `tony@stark.com` et le mot de passe `password123` dans un bloc repliable clairement étiqueté comme compte de démo, conformément aux informations fournies par Dimitri.
6. **Formation** : Intégrateur Web — OpenClassrooms ; dates seulement si elles sont fournies.
7. **Contact** : e-mail `lucdimitri31@gmail.com`, LinkedIn `https://www.linkedin.com/in/dimitri-luc-03909b3a2/` et profil GitHub `https://github.com/Drakengard31`, avec liens directs.
8. **CV** : intégrer le PDF fourni `CV_Dimitri_Luc.pdf` sans modifier son contenu, dans `public/documents/CV_Dimitri_Luc.pdf`, avec un bouton visible « Télécharger mon CV » dans le hero et un attribut `download` conservant le nom du fichier.
9. **Pied de page** : navigation courte et année courante.

Le rendu sera responsive, utilisable au clavier, structuré avec des éléments HTML sémantiques et doté d’un contraste lisible. Le menu compact sur mobile restera accessible.

## Implémentation et architecture

Site statique monosite, sans compte utilisateur, base de données ni backend : ces services ne sont pas nécessaires pour présenter un portfolio. Stack légère **HTML sémantique, CSS et JavaScript natif**, servie et compilée avec **Vite**. Les contenus principaux resteront dans le HTML initial afin que le portfolio et ses métadonnées ne dépendent pas de l’exécution JavaScript pour être lisibles.

Structure prévue :

- `index.html` — contenu de la page, métadonnées initiales, dix fiches de projet et sections accessibles.
- `src/styles.css` — variables visuelles, mise en page responsive, composants et préférences de mouvement.
- `src/main.js` — navigation mobile, année courante et révélation progressive accessible via `IntersectionObserver`.
- `public/manus-routes.json` — déclaration de la route de page `/`.
- `public/favicon.svg` — signe graphique du portfolio.
- `public/assets/projects/` — dix visuels locaux et versionnés avec le dépôt.
- `public/documents/CV_Dimitri_Luc.pdf` — CV d’une page fourni par Dimitri, accessible au téléchargement.
- `vite.config.js` — base relative `./` pour le service sous un sous-chemin GitHub Pages.
- `README.md` — présentation et instructions de lancement/compilation.
- `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml` — dépendance Vite épinglée et politique explicite des scripts d’installation selon les recommandations du projet.

Le SEO de base comprend un titre, une description et des métadonnées Open Graph et Twitter dans le HTML initial. Aucune URL canonique ni `og:url` ne sera devinée. Les pushes sur `main` déclenchent actuellement le workflow GitHub Actions de compilation et de publication sur GitHub Pages (`https://drakengard31.github.io/portfolio-dimitri-luc/`). Dimitri demande aussi que la nouvelle version soit intégrée à son portfolio Vercel, à l’URL fournie `https://portfolio-7p4v.vercel.app/` ; cette URL affiche encore l’ancien site et sa liaison au dépôt n’est pas confirmée. Un déploiement GitHub Pages ne constitue pas une preuve de mise à jour de Vercel : cette dernière ne sera annoncée qu’après vérification de l’URL cible.

## Hypothèses et éléments restants

Le portfolio est en français ; la direction éditoriale et la palette corail/bleu pétrole sont approuvées. Les dix projets, l’identité, le parcours résumé, les coordonnées, les visuels et le CV fourni sont renseignés. Les dates de formation restent facultatives. La mention « disponible immédiatement » présente sur l’ancien portfolio n’est pas reprise, car elle peut dater. Le dépôt GitHub `Drakengard31/portfolio-dimitri-luc` est public. Le site GitHub Pages est déjà déployé ; la mise à jour de l’URL Vercel reste à confirmer après push.
