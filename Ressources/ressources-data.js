const articles = [
  {
    category: "Résumé d'article scientifique",
    typeTag: "Résumé d'article scientifique",
    themes: ["IA et Data", "Innovation", "Cognition"],
    title: "IA générative et créativité : puissante pour générer mais biaisée et aveugle pour trier",
    description:
      "ChatGPT génère 4 fois plus d'idées que les humains et 3 fois plus d'idées originales. Mais il reproduit les mêmes biais cognitifs et ne distingue pas ses meilleures idées de ses idées banales. Ce que ça change pour les équipes qui innovent.",
    urlInternal: "articles/ia-generative-creativite-biais-cognitif-2025.html",
  },

  {
    category: "Résumé d'article scientifique",
    typeTag: "Résumé d'article scientifique",
    themes: ["IA et Data", "Product Design"],
    title: "Outils IA pour le design d'interface : le problème n'est pas la qualité, c'est le contrôle",
    description:
      "Une étude récente montre que les outils de génération d'UI échouent sur l'itération : leurs outputs sont opaques, difficiles à affiner. PrototypeFlow propose des checkpoints éditables à chaque étape et réduit le nombre de révisions de moitié.",
    urlInternal: "articles/prototypage-ia-iteration-humain-2026.html",
  },

  {
    category: "Résumé d'article scientifique",
    typeTag: "Résumé d'article scientifique",
    themes: ["Innovation", "Cognition"],
    title: "Comment la compétition influence-t-elle la génération d'idées dans la résolution créative de problèmes ?",
    description:
      "Rivaliser contre un groupe extérieur produit plus d'idées originales. Rivaliser contre ses propres collègues, non. Et ce n'est pas qu'une question de motivation.",
    urlInternal: "articles/competition-groupes-creativite.html",
  },

  {
    category: "Fun fact & biais cognitif",
    typeTag: "Fun Fact",
    themes: ["Cognition"],
    title: "Le paradoxe de l'ignorance : pourquoi ceux qui en savent le moins pensent souvent en savoir le plus",
    description:
      "Qui n'a jamais rencontré quelqu'un convaincu de tout savoir sur un sujet, alors qu'en réalité, il en sait très peu ? C'est ce qu'on appelle le paradoxe de l'ignorance, ou l'effet Dunning-Kruger.",
    urlInternal: "articles/paradoxe-ignorance-dunning-kruger.html",
  },

  {
    category: "Article",
    typeTag: "Article",
    themes: ["Cognition", "Product Design"],
    title: "La perception-action à travers l'affordance : ingéniosité ou illusion ? L'interaction intuitive est-elle réellement possible ?",
    description:
      "Les affordances révèlent la façon dont nous percevons les possibilités d'interaction avec notre environnement. Explorer la façon dont la perception influence nos actions, nos choix, permet de comprendre davantage les comportements/attitudes humains.",
    urlFr: "https://blog.octo.com/la-perception-action--affordances-ingeniosite-ou-illusions-demystifions-le-mythe-de-l'interaction-intuitive-pc5",
  },

  {
    category: "Article",
    typeTag: "Article",
    themes: ["Cognition", "Product Design"],
    title: "La perception auditive : comprendre et mettre en pratique ses principes",
    description:
      "La conception centrée utilisateur a accordé une importance prépondérante à la dimension visuelle. Mais l'environnement est également composé de sons, vibrations, significations auditives qui influencent nos expériences.",
    urlFr: "https://blog.octo.com/la-perception-auditive--comprendre-et-mettre-en-pratique-ses-principes-pc4",
  },

  {
    category: "Article",
    typeTag: "Article",
    themes: ["Cognition", "Product Design"],
    title: "La perception visuelle : 5 lois à appliquer absolument",
    description:
      "Proximité, similarité, bonne forme… découvrez 5 lois de perception visuelle issues de la psychologie cognitive et apprenez à les appliquer pour concevoir des interfaces plus efficaces.",
    urlFr: "https://blog.octo.com/la-perception-visuelle--les-5-lois-a-appliquer-absolument-!-pc3",
  },

  {
    category: "Article",
    typeTag: "Article",
    themes: ["Cognition", "Product Design"],
    title: "La perception visuelle : comment notre cerveau forge-t-il notre vision du réel ?",
    description:
      "Pourquoi est-ce essentiel de considérer et d'appliquer ces connaissances dans vos pratiques ?",
    urlFr: "https://blog.octo.com/la-perception-visuelle--comment-notre-cerveau-forge-t-il-notre-vision-du-reel-pc2",
  },

  {
    category: "Article",
    typeTag: "Article",
    themes: ["Cognition", "Product Design"],
    title: "La psychologie cognitive : une nécessité pour la conception centrée sur l'humain",
    description:
      "Pourquoi la psychologie cognitive est-elle essentielle à la conception centrée utilisateur ? Comprendre le fonctionnement humain pour concevoir des expériences plus efficaces et pertinentes.",
    urlFr: "https://blog.octo.com/la-psychologie-cognitive--une-necessite-pour-la-conception-centree-sur-l'humain-pc1",
  }
];

const tools = [
  {
    type: "Lien externe",
    title: "Guide pratique : construire un questionnaire en 4 étapes",
    description:
      "Le questionnaire est un outil puissant... A condition bien le construire ! Découvrez comment le faire en 4 étapes détaillées dans cet article.",
    image: "../Ressources/Files/outil-questionnaire.png",
    url: "files/guide-exemple.pdf",
  }
];

// =========================
// Type → visual mapping
// =========================

const TYPE_META = {
  "Résumé d'article scientifique": { cls: "type-summary", short: "Résumé scientifique" },
  "Fun Fact": { cls: "type-funfact", short: "Fun fact" },
  "Article": { cls: "type-article", short: "Article" },
};

function typeMeta(typeTag) {
  return TYPE_META[typeTag] || TYPE_META["Article"];
}

function articleUrl(article) {
  return article.urlInternal || article.urlFr || "#";
}

const THEME_OPTIONS = ["Tous", "IA et Data", "Product Design", "Innovation", "Cognition"];

let activeTheme = "Tous";

const featuredArticle = articles[0];
const gridArticles = articles.slice(1);

// =========================
// Card builders
// =========================

function createFeaturedCard(article) {
  const meta = typeMeta(article.typeTag);
  const url = articleUrl(article);
  const target = url.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";

  return `
    <a class="featured ${meta.cls}" href="${url}"${target} data-themes="${(article.themes || []).join(",")}">
      <div class="featured-body">
        <div class="eyebrow-row">
          <span class="eyebrow ${meta.cls}">${article.category}</span>
          <span class="featured-label">À la une</span>
        </div>
        <h3>${article.title}</h3>
        <span class="read-link">Lire →</span>
      </div>
    </a>
  `;
}

function createArticleCard(article) {
  const meta = typeMeta(article.typeTag);
  const url = articleUrl(article);
  const target = url.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";

  const themeTags = (article.themes || [])
    .map(t => `<span class="theme-tag">${t}</span>`)
    .join("");

  return `
    <a class="article-card ${meta.cls}" href="${url}"${target}>
      <div class="eyebrow-row"><span class="eyebrow ${meta.cls}">${meta.short}</span></div>
      <h4>${article.title}</h4>
      ${themeTags ? `<div class="theme-tags">${themeTags}</div>` : ""}
      <span class="read-link">Lire →</span>
    </a>
  `;
}

function createToolCard(tool) {
  const isExternal = tool.url.startsWith("http");
  const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";

  return `
    <a class="tool-card" href="${tool.url}"${target}>
      <div class="tool-thumb">
        <img src="${tool.image}" alt="${tool.title}" loading="lazy" />
      </div>
      <div class="tool-content">
        <span class="eyebrow type-article">${tool.type}</span>
        <h4>${tool.title}</h4>
        <p>${tool.description}</p>
        <span class="read-link">Accéder →</span>
      </div>
    </a>
  `;
}

// =========================
// Filter UI
// =========================

function buildFilterUI() {
  const container = document.getElementById("articles-filters");
  if (!container) return;

  container.innerHTML = THEME_OPTIONS.map((t, i) =>
    `<button class="pill${i === 0 ? " active" : ""}" data-value="${t}">${t}</button>`
  ).join("");

  container.querySelectorAll(".pill").forEach(btn => {
    btn.addEventListener("click", () => {
      container.querySelectorAll(".pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeTheme = btn.dataset.value;
      renderArticles();
    });
  });
}

// =========================
// Articles render
// =========================

function renderArticles() {
  const listEl = document.getElementById("articles-list");
  const countEl = document.getElementById("articles-count");
  const featuredSlot = document.getElementById("featured-slot");
  if (!listEl) return;

  const featuredMatch = activeTheme === "Tous" || (featuredArticle.themes || []).includes(activeTheme);
  const filtered = gridArticles.filter(a =>
    activeTheme === "Tous" || (a.themes && a.themes.includes(activeTheme))
  );

  if (featuredSlot) featuredSlot.style.display = featuredMatch ? "" : "none";

  const total = filtered.length + (featuredMatch ? 1 : 0);
  if (countEl) {
    countEl.textContent = total === 0 ? "" : `${total} article${total > 1 ? "s" : ""}`;
  }

  listEl.innerHTML = total === 0
    ? `<p class="articles-empty">Aucun article ne correspond à cette thématique.</p>`
    : filtered.map(createArticleCard).join("");
}

// =========================
// Tools render
// =========================

function renderTools() {
  const container = document.getElementById("tools-grid");
  const note = document.getElementById("tools-note");
  if (!container) return;
  container.innerHTML = tools.map(createToolCard).join("");
  if (note) note.style.display = tools.length < 3 ? "" : "none";
}

// =========================
// Init
// =========================

document.getElementById("featured-slot").innerHTML = createFeaturedCard(featuredArticle);
buildFilterUI();
renderArticles();
renderTools();
