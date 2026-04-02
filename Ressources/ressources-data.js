const articles = [
  {
    category: "Résumé d'article scientifique",
    title: "Outils IA pour le design d'interface : le problème n'est pas la qualité, c'est le contrôle",
    description:
      "Une étude récente montre que les outils de génération d'UI échouent sur l'itération : leurs outputs sont opaques, difficiles à affiner. PrototypeFlow propose des checkpoints éditables à chaque étape et réduit le nombre de révisions de moitié.",
    urlInternal: "articles/prototypage-ia-iteration-humain-2026.html",    
  },

  {
    category: "Résumé d'article scientifique",
    title: "IA générative et créativité : puissante pour générer, biaisée et aveugle pour trier",
    description:
      "ChatGPT génère 4 fois plus d'idées que les humains et 3 fois plus d'idées originales. Mais il reproduit les mêmes biais cognitifs et ne distingue pas ses meilleures idées de ses idées banales. Ce que ça change pour les équipes qui innovent.",
    urlInternal: "articles/ia-generative-creativite-biais-cognitif-2025.html",
    },

  {
    category: "Innovation & Sciences Cognitives",
    title: "Comment la compétition entre groupes et au sein d’un groupe influence-t-elle la génération d’idées dans la résolution créative de problèmes ?",
    description:
      "Un article scientifique résumé et vulgarisé.",
      urlEn: "https://medium.com/@joydesdevises/how-do-out-group-and-in-group-competitions-influence-idea-generation-in-creative-problem-solving-eefaa555b1b2",
  },
 
  {
    category: "Fun facts & cognitive biases",
 title: "Le paradoxe de l’ignorance : pourquoi ceux qui en savent le moins pensent souvent en savoir le plus",
    description:
      "Qui n'a jamais rencontré quelqu'un convaincu de tout savoir sur un sujet, alors qu'en réalité, il en sait très peu ? C'est ce qu'on appelle le paradoxe de l'ignorance, ou l'effet Dunning-Kruger.",
    urlEn: "https://medium.com/@joydesdevises/the-ignorance-paradox-why-those-who-know-the-least-often-think-they-know-the-most-238bb54cd5f6",
    linkLabel: "Lire l’article"
  },

  {
    category: "Cognition & product design",
    title: "La perception-action à travers l'affordance : ingéniosité ou illusion ? L'interaction intuitive est-elle réellement possible ? ",
    description:
      "Les affordances révèlent la façon dont nous percevons les possibilités d'interaction avec notre environnement. Explorer la façon dont la perception influence nos actions, nos choix, permet de comprendre davantage les comportements/attitudes humains.",
    urlEn: "https://medium.com/@joydesdevises/the-perception-action-through-affordance-ingenuity-or-illusion-e9eeac2612b4",
    urlFr: "https://blog.octo.com/la-perception-action--affordances-ingeniosite-ou-illusions-demystifions-le-mythe-de-l'interaction-intuitive-pc5",
    linkLabel: "Lire l’article"
  },

  {
    category: "Cognition & product design",
    title: "La perception auditive : comprendre et mettre en pratique ses principes",
    description:
      "La conception centrée utilisateur a accordé une importance prépondérante à la dimension visuelle. Mais l'environnement est également composé de sons, vibrations, significations auditives qui influencent nos expériences. ",
    urlEn: "https://medium.com/@joydesdevises/auditory-perception-understanding-and-applying-its-principles-09c3b2be58b8",
    urlFr: "https://blog.octo.com/la-perception-auditive--comprendre-et-mettre-en-pratique-ses-principes-pc4",
    linkLabel: "Lire l’article"
  },

  {
    category: "Cognition & product design",
    title: "La perception visuelle : 5 lois à appliquer absolument ",
    description:
      "Proximité, similarité, bonne forme… découvrez 5 lois de perception visuelle issues de la psychologie cognitive et apprenez à les appliquer pour concevoir des interfaces plus efficaces.",
    urlEn: "https://medium.com/@joydesdevises/visual-perception-5-laws-to-absolutely-apply-7550a2908334",
    urlFr: "https://blog.octo.com/la-perception-visuelle--les-5-lois-a-appliquer-absolument-!-pc3",
    linkLabel: "Lire l’article"
  },

  {
    category: "Cognition & product design",
    title: "La perception visuelle : comment notre cerveau forge-t-il notre vision du réel ?",
    description:
      "Pourquoi est-ce essentiel de considérer et d’appliquer ces connaissances dans vos pratiques ?",
    urlEn: "https://medium.com/@joydesdevises/visual-perception-how-does-our-brain-shape-our-perception-of-reality-c21e473919ee",
    urlFr: "https://blog.octo.com/la-perception-visuelle--comment-notre-cerveau-forge-t-il-notre-vision-du-reel-pc2",
    linkLabel: "Lire l’article"
  },

    {
    category: "Cognition & product design",
    title: "La psychologie cognitive : une nécessité pour la conception centrée sur l'humain",
    description:
      "Pourquoi la psychologie cognitive est-elle essentielle à la conception centrée utilisateur ? Comprendre le fonctionnement humain pour concevoir des expériences plus efficaces et pertinentes.",
    urlEn: "https://medium.com/@joydesdevises/cognitive-psychology-a-necessity-for-a-human-centred-design-b453487a5168",
    urlFr: "https://blog.octo.com/la-psychologie-cognitive--une-necessite-pour-la-conception-centree-sur-l'humain-pc1",
    linkLabel: "Lire l’article"
  }

  ];

const tools = [
  {
    type: "Lien externe",
    title: "Guide pratique : construire un questionnaire en 4 étapes",
    description:
      "Le questionnaire est un outil puissant... A conditionien le construire ! Découvrez comment le faire en 4 étapes détaillées dans cet article.  ",
    image: "../Ressources/Files/outil-questionnaire.png",
    url: "files/guide-exemple.pdf",
    actionLabel: "Voir la ressource"
  }

  /*{
    type: "Ressource",
    title: "Checklist de cadrage produit",
    description:
      "Une checklist simple pour cadrer un projet avant de passer à la conception.",
    image: "../images/resources/resource-checklist.jpg",
    url: "files/checklist-exemple.pdf",
    actionLabel: "Télécharger"
  },

  {
    type: "<Téléchargement>",
    title: "Boîte à outils design",
    description:
      "Une sélection de ressources externes utiles pour le design, la recherche et la facilitation.",
    image: "../images/resources/resource-tools.jpg",
    url: "https://example.com/tools",
    actionLabel: "Télécharger"
  } */

];

function createArticleCard(article) {

  const internalLink = article.urlInternal
    ? `<a class="resource-article-link" href="${article.urlInternal}">
         🇫🇷 Lire le résumé
       </a>`
    : "";

  const enLink = article.urlEn
    ? `<a class="resource-article-link" href="${article.urlEn}" target="_blank" rel="noopener noreferrer">
         🇬🇧 Read the article
       </a>`
    : "";

  const frLink = article.urlFr
    ? `<a class="resource-article-link" href="${article.urlFr}" target="_blank" rel="noopener noreferrer">
         🇫🇷 Lire l’article
       </a>`
    : "";

  return `
    <article class="resource-article-card">
      <div class="resource-article-meta">
        <span class="resource-badge">${article.category}</span>
      </div>

      <div class="resource-article-content">
        <h3 class="resource-article-title">${article.title}</h3>
        <p class="resource-article-description">${article.description}</p>

        <div class="resource-article-links">
          ${internalLink}
          ${enLink}
          ${frLink}
        </div>
      </div>
    </article>
  `;
}

function createToolCard(tool) {
  const isExternal = tool.url.startsWith("http");
  const target = isExternal ? 'target="_blank" rel="noopener noreferrer"' : "";

  return `
    <a class="resource-tool-card" href="${tool.url}" ${target}>
      <div class="resource-tool-image">
        <img src="${tool.image}" alt="${tool.title}" loading="lazy" />
      </div>
      <div class="resource-tool-content">
        <span class="resource-tool-tag">${tool.type}</span>
        <h3 class="resource-tool-title">${tool.title}</h3>
        <p class="resource-tool-description">${tool.description}</p>
        <span class="resource-tool-action">${tool.actionLabel}</span>
      </div>
    </a>
  `;
}

function renderArticles() {
  const container = document.getElementById("articles-list");
  if (!container) return;
  container.innerHTML = articles.map(createArticleCard).join("");
}

function renderTools() {
  const container = document.getElementById("tools-grid");
  if (!container) return;
  container.innerHTML = tools.map(createToolCard).join("");
}

renderArticles();
renderTools();