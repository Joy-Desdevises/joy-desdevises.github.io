const articles = [
  {
    i18nKey: "ia_generative",
    typeTag: "Résumé d'article scientifique",
    themes: ["IA et Data", "Innovation", "Cognition"],
    title: "IA générative et créativité : puissante pour générer mais biaisée et aveugle pour trier",
    description:
      "ChatGPT génère 4 fois plus d'idées que les humains et 3 fois plus d'idées originales. Mais il reproduit les mêmes biais cognitifs et ne distingue pas ses meilleures idées de ses idées banales. Ce que ça change pour les équipes qui innovent.",
    urlInternal: "articles/ia-generative-creativite-biais-cognitif-2025.html",
  },

  {
    i18nKey: "prototypage",
    typeTag: "Résumé d'article scientifique",
    themes: ["IA et Data", "Product Design"],
    title: "Outils IA pour le design d'interface : le problème n'est pas la qualité, c'est le contrôle",
    description:
      "Une étude récente montre que les outils de génération d'UI échouent sur l'itération : leurs outputs sont opaques, difficiles à affiner. PrototypeFlow propose des checkpoints éditables à chaque étape et réduit le nombre de révisions de moitié.",
    urlInternal: "articles/prototypage-ia-iteration-humain-2026.html",
  },

  {
    i18nKey: "competition",
    typeTag: "Résumé d'article scientifique",
    themes: ["Innovation", "Cognition"],
    title: "Comment la compétition influence-t-elle la génération d'idées dans la résolution créative de problèmes ?",
    description:
      "Rivaliser contre un groupe extérieur produit plus d'idées originales. Rivaliser contre ses propres collègues, non. Et ce n'est pas qu'une question de motivation.",
    urlInternal: "articles/competition-groupes-creativite.html",
  },

  {
    i18nKey: "dunning_kruger",
    typeTag: "Fun Fact",
    themes: ["Cognition"],
    title: "Le paradoxe de l'ignorance : pourquoi ceux qui en savent le moins pensent souvent en savoir le plus",
    description:
      "Qui n'a jamais rencontré quelqu'un convaincu de tout savoir sur un sujet, alors qu'en réalité, il en sait très peu ? C'est ce qu'on appelle le paradoxe de l'ignorance, ou l'effet Dunning-Kruger.",
    urlInternal: "articles/paradoxe-ignorance-dunning-kruger.html",
  },

  {
    i18nKey: "affordance",
    typeTag: "Article",
    themes: ["Cognition", "Product Design"],
    title: "La perception-action à travers l'affordance : ingéniosité ou illusion ? L'interaction intuitive est-elle réellement possible ?",
    description:
      "Les affordances révèlent la façon dont nous percevons les possibilités d'interaction avec notre environnement. Explorer la façon dont la perception influence nos actions, nos choix, permet de comprendre davantage les comportements/attitudes humains.",
    urlInternal: "articles/affordance-interaction-intuitive.html",
  },

  {
    i18nKey: "perception_auditive",
    typeTag: "Article",
    themes: ["Cognition", "Product Design"],
    title: "La perception auditive : comprendre et mettre en pratique ses principes",
    description:
      "La conception centrée utilisateur a accordé une importance prépondérante à la dimension visuelle. Mais l'environnement est également composé de sons, vibrations, significations auditives qui influencent nos expériences.",
    urlInternal: "articles/perception-auditive-principes-applications.html",
  },

  {
    i18nKey: "perception_gestalt",
    typeTag: "Article",
    themes: ["Cognition", "Product Design"],
    title: "La perception visuelle : 5 lois à appliquer absolument",
    description:
      "Proximité, similarité, bonne forme… découvrez 5 lois de perception visuelle issues de la psychologie cognitive et apprenez à les appliquer pour concevoir des interfaces plus efficaces.",
    urlInternal: "articles/perception-visuelle-5-lois-gestalt.html",
  },

  {
    i18nKey: "perception_cerveau",
    typeTag: "Article",
    themes: ["Cognition", "Product Design"],
    title: "La perception visuelle : comment notre cerveau forge-t-il notre vision du réel ?",
    description:
      "Pourquoi est-ce essentiel de considérer et d'appliquer ces connaissances dans vos pratiques ?",
    urlInternal: "articles/perception-visuelle-cerveau-vision-reel.html",
  },

  {
    i18nKey: "psychologie_cognitive",
    typeTag: "Article",
    themes: ["Cognition", "Product Design"],
    title: "La psychologie cognitive : une nécessité pour la conception centrée sur l'humain",
    description:
      "Pourquoi la psychologie cognitive est-elle essentielle à la conception centrée utilisateur ? Comprendre le fonctionnement humain pour concevoir des expériences plus efficaces et pertinentes.",
    urlInternal: "articles/psychologie-cognitive-conception-humain.html",
  }
];

const tools = [
  {
    i18nKey: "guide_questionnaire",
    typeTag: "Lien externe",
    title: "Comment construire un questionnaire en 4 étapes ?",
    description:
      "Le questionnaire est un outil puissant... A condition bien le construire ! Découvrez comment le faire en 4 étapes détaillées dans cet article.",
    image: "../Ressources/Files/outil-questionnaire.png",
    url: "articles/guide-questionnaire-4-etapes.html",
  }
];

// =========================
// i18n helpers
// =========================

function getLang() {
  return (typeof localStorage !== "undefined" && localStorage.getItem("uxcog_lang")) || "fr";
}

// =========================
// Type → visual + i18n mapping
// =========================

const TYPE_META = {
  "Résumé d'article scientifique": { cls: "type-summary", catKey: "resources.category_summary", shortKey: "resources.type_summary" },
  "Fun Fact": { cls: "type-funfact", catKey: "resources.category_funfact", shortKey: "resources.type_funfact" },
  "Article": { cls: "type-article", catKey: "resources.category_article", shortKey: "resources.type_article" },
};

function typeMeta(typeTag) {
  return TYPE_META[typeTag] || TYPE_META["Article"];
}

function articleUrl(article) {
  return article.urlInternal || article.urlFr || "#";
}

const THEME_OPTIONS = ["Tous", "IA et Data", "Product Design", "Innovation", "Cognition"];
const THEME_I18N_KEY = {
  "Tous": "resources.theme_all",
  "IA et Data": "resources.theme_ia_data",
  "Product Design": "resources.theme_product_design",
  "Innovation": "resources.theme_innovation",
  "Cognition": "resources.theme_cognition",
};

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
          <span class="eyebrow ${meta.cls}" data-i18n="${meta.catKey}">${article.typeTag}</span>
          <span class="featured-label" data-i18n="resources.featured_label">À la une</span>
        </div>
        <h3 data-i18n="resources.articles.${article.i18nKey}.title">${article.title}</h3>
        <span class="read-link" data-i18n="resources.read_more">Lire →</span>
      </div>
    </a>
  `;
}

function createArticleCard(article) {
  const meta = typeMeta(article.typeTag);
  const url = articleUrl(article);
  const target = url.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";

  const themeTags = (article.themes || [])
    .map(t => `<span class="theme-tag" data-i18n="${THEME_I18N_KEY[t] || ''}">${t}</span>`)
    .join("");

  return `
    <a class="article-card ${meta.cls}" href="${url}"${target}>
      <div class="eyebrow-row"><span class="eyebrow ${meta.cls}" data-i18n="${meta.shortKey}">${article.typeTag}</span></div>
      <h4 data-i18n="resources.articles.${article.i18nKey}.title">${article.title}</h4>
      ${themeTags ? `<div class="theme-tags">${themeTags}</div>` : ""}
      <span class="read-link" data-i18n="resources.read_more">Lire →</span>
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
        <span class="eyebrow type-article" data-i18n="resources.type_external_link">${tool.typeTag}</span>
        <h4 data-i18n="resources.tools.${tool.i18nKey}.title">${tool.title}</h4>
        <span class="read-link" data-i18n="resources.access_more">Accéder →</span>
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
    `<button class="pill${i === 0 ? " active" : ""}" data-value="${t}" data-i18n="${THEME_I18N_KEY[t]}">${t}</button>`
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
    ? `<p class="articles-empty" data-i18n="resources.empty_state">Aucun article ne correspond à cette thématique.</p>`
    : filtered.map(createArticleCard).join("");

  applyResourcesI18n();
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
  applyResourcesI18n();
}

// =========================
// Re-apply translations to freshly injected HTML
// =========================

let _resourcesDecoderEl = null;
function decodeEntities(text) {
  if (!_resourcesDecoderEl) _resourcesDecoderEl = document.createElement("textarea");
  _resourcesDecoderEl.innerHTML = text;
  return _resourcesDecoderEl.value;
}

function applyResourcesI18n() {
  if (typeof translations === "undefined") return;
  const lang = getLang();
  document.querySelectorAll("#featured-slot [data-i18n], #articles-list [data-i18n], #tools-grid [data-i18n], #articles-filters [data-i18n]").forEach(el => {
    const val = el.dataset.i18n.split(".").reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : undefined), translations[lang]);
    if (val !== undefined) el.textContent = decodeEntities(val);
  });
}

// =========================
// Init
// =========================

document.getElementById("featured-slot").innerHTML = createFeaturedCard(featuredArticle);
buildFilterUI();
renderArticles();
renderTools();

var _previousOnLanguageChange = window.onLanguageChange;
window.onLanguageChange = function (lang) {
  if (typeof _previousOnLanguageChange === "function") _previousOnLanguageChange(lang);
  applyResourcesI18n();
};
