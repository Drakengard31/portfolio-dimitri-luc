# Plan — Refonte du portfolio développeur front-end

## Objectif

Refaire entièrement le portfolio du développeur front-end pour le présenter de manière plus professionnelle. Le site mettra en valeur sa formation **Intégrateur Web d’OpenClassrooms (développeur front-end)**, les projets réalisés pendant la formation et ses projets personnels, qui illustrent la poursuite de son apprentissage.

Les informations d’identité, les projets détaillés, les technologies réellement utilisées, les coordonnées et les liens seront ajoutés à partir des renseignements fournis par le propriétaire. Aucun nom, résultat, niveau de compétence, lien ou détail de projet ne sera inventé. En attendant, les emplacements incomplets resteront clairement identifiés comme tels et ne seront pas présentés comme des réalisations réelles.

## Direction visuelle

- **Mouvement de design :** design éditorial suisse contemporain, adapté à un portfolio numérique — typographie généreuse, grille typographique nette et composition asymétrique.
- **Principes centraux :** lisibilité avant l’ornement ; parcours rapide entre profil, projets et contact ; authenticité des réalisations ; accessibilité et sobriété.
- **Philosophie colorielle :** fond ivoire doux et texte bleu-noir pour une impression calme et professionnelle ; orange corail comme accent énergique et immédiatement reconnaissable, réservé aux actions, repères et détails.
- **Paradigme de mise en page :** composition éditoriale alignée à gauche, alternant grands titres, colonnes décalées et études de cas horizontales plutôt qu’une grille uniforme centrée.
- **Éléments signature :** repères de section numérotés (« 01 », « 02 ») ; filet orange fin qui guide la lecture ; petit motif de balises de code angulaires dans le logotype.
- **Philosophie d’interaction :** navigation par ancres directe, commandes visibles, états clavier clairement perceptibles et menu mobile utilisable sans souris.
- **Animation :** transitions courtes et discrètes (environ 180–240 ms) sur les liens et boutons ; aucun mouvement décoratif obligatoire ; respecter `prefers-reduced-motion`.
- **Système typographique :** sans-sérif « DM Sans » pour le texte et les titres, avec une sans-sérif système de repli ; « IBM Plex Mono » pour les étiquettes, technologies et repères. Grande échelle de titre sur écran large, réduite de façon fluide sur mobile.
- **Essence de marque :** un développeur front-end qui transforme des idées et des maquettes en interfaces lisibles, accessibles et soignées ; personnalité **curieuse, rigoureuse, concrète**.
- **Voix de marque :** première personne, directe et chaleureuse, axée sur les choix et l’apprentissage. Exemples : « Je transforme une idée claire en interface vivante. » ; « Mes projets, mes choix, ce que j’ai appris. » Ces formulations pourront être ajustées avec les mots du propriétaire.
- **Logotype :** nom du propriétaire en typographie éditoriale, accompagné d’un signe angulaire original inspiré de `</>` ; le nom ne sera renseigné qu’après réception de son identité.
- **Couleur de marque signature :** orange corail `#F26B3A`.
- **Visuels :** pas de portrait générique ni de fausses captures de projets. Les vignettes de projets seront ajoutées lorsqu’elles seront disponibles ; le motif d’accueil sera dessiné en CSS/SVG pour rester distinctif sans stock photo.

## Expérience et contenu

Une page d’accueil en français avec navigation ancrée, comprenant :

1. **Introduction / hero** : identité réelle, positionnement de développeur front-end, formation OpenClassrooms et appel à découvrir les projets.
2. **À propos** : parcours et motivation rédigés à partir des éléments fournis, sans inventer d’expérience professionnelle.
3. **Projets** : sections séparées pour les projets de formation et les projets personnels ; chaque étude de cas pourra présenter contexte, rôle, technologies effectivement utilisées, apprentissages, lien de démonstration et dépôt GitHub.
4. **Formation** : Intégrateur Web — OpenClassrooms, avec description et dates seulement si elles sont fournies.
5. **Contact** : courriel et profils professionnels lorsqu’ils sont connus ; liens non renseignés absents plutôt que factices.
6. **Pied de page** : navigation courte et année courante.

Le rendu sera responsive, utilisable au clavier, structuré avec des éléments HTML sémantiques et doté d’un contraste lisible. Le menu compact sur mobile restera accessible.

## Implémentation et architecture

Site statique monosite, sans compte utilisateur, base de données ni backend : ces services ne sont pas nécessaires pour présenter un portfolio. Stack légère **HTML sémantique, CSS et JavaScript natif**, servie et compilée avec **Vite**. Les contenus principaux resteront dans le HTML initial afin que le portfolio et ses métadonnées ne dépendent pas de l’exécution JavaScript pour être lisibles.

Structure prévue :

- `index.html` — contenu de la page, métadonnées initiales et sections accessibles.
- `src/styles.css` — variables visuelles, mise en page responsive, composants et préférences de mouvement.
- `src/main.js` — interactions légères de navigation mobile et petites améliorations progressives.
- `public/manus-routes.json` — déclaration de la route de page `/`.
- `public/favicon.svg` — signe graphique du portfolio.
- `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml` — dépendance Vite épinglée et politique explicite des scripts d’installation selon les recommandations du projet.

Le SEO de base comprendra un titre, une description, des métadonnées Open Graph et Twitter, ainsi qu’une structure de titres cohérente. Aucune URL canonique ni `og:url` ne sera devinée avant de connaître le domaine public réel. La publication n’est pas prévue dans cette étape : le résultat sera d’abord présenté en aperçu.

## Hypothèses à confirmer par le propriétaire

Le portfolio est en français et l’identité visuelle ci-dessus constitue une proposition de départ, pas une préférence déjà exprimée. Le propriétaire pourra envoyer son nom d’affichage, les détails/liens des projets, ses liens professionnels, son e-mail, son ancien portfolio, son CV ou des captures d’écran ; ces éléments remplaceront les emplacements temporaires avant la finition.