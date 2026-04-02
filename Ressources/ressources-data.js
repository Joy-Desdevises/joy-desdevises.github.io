const articles = [
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
    themes: ["IA et Data", "Innovation", "Cognition"],
    title: "IA générative et créativité : puissante pour générer, biaisée et aveugle pour trier",
    description:
      "ChatGPT génère 4 fois plus d'idées que les humains et 3 fois plus d'idées originales. Mais il reproduit les mêmes biais cognitifs et ne distingue pas ses meilleures idées de ses idées banales. Ce que ça change pour les équipes qui innovent.",
    urlInternal: "articles/ia-generative-creativite-biais-cognitif-2025.html",
  },

  {
    category: "Résumé d'article scientifique",
    typeTag: "Résumé d'article scientifique",
    themes: ["Innovation", "Cognition"],
    title: "Comment la compétition entre groupes et au sein d'un groupe influence-t-elle la génération d'idées dans la résolution créative de problèmes ?",
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
      internalLabel: "Lire l'article",
  },

  {
    category: "Article",
    typeTag: "Article",
    themes: ["Cognition", "Product Design"],
    title: "La perception-action à travers l'affordance : ingéniosité ou illusion ? L'interaction intuitive est-elle réellement possible ?",
    description:
      "Les affordances révèlent la façon dont nous percevons les possibilités d'interaction avec notre environnement. Explorer la façon dont la perception influence nos actions, nos choix, permet de comprendre davantage les comportements/attitudes humains.",
    urlEn: "https://medium.com/@joydesdevises/the-perception-action-through-affordance-ingenuity-or-illusion-e9eeac2612b4",
    urlFr: "https://blog.octo.com/la-perception-action--affordances-ingeniosite-ou-illusions-demystifions-le-mythe-de-l'interaction-intuitive-pc5",
    linkLabel: "Lire l'article"
  },

  {
    category: "Article",
    typeTag: "Article",
    themes: ["Cognition", "Product Design"],
    title: "La perception auditive : comprendre et mettre en pratique ses principes",
    description:
      "La conception centrée utilisateur a accordé une importance prépondérante à la dimension visuelle. Mais l'environnement est également composé de sons, vibrations, significations auditives qui influencent nos expériences.",
    urlEn: "https://medium.com/@joydesdevises/auditory-perception-understanding-and-applying-its-principles-09c3b2be58b8",
    urlFr: "https://blog.octo.com/la-perception-auditive--comprendre-et-mettre-en-pratique-ses-principes-pc4",
    linkLabel: "Lire l'article"
  },

  {
    category: "Article",
    typeTag: "Article",
    themes: ["Cognition", "Product Design"],
    title: "La perception visuelle : 5 lois à appliquer absolument",
    description:
      "Proximité, similarité, bonne forme… découvrez 5 lois de perception visuelle issues de la psychologie cognitive et apprenez à les appliquer pour concevoir des interfaces plus efficaces.",
    urlEn: "https://medium.com/@joydesdevises/visual-perception-5-laws-to-absolutely-apply-7550a2908334",
    urlFr: "https://blog.octo.com/la-perception-visuelle--les-5-lois-a-appliquer-absolument-!-pc3",
    linkLabel: "Lire l'article"
  },

  {
    category: "Article",
    typeTag: "Article",
    themes: ["Cognition", "Product Design"],
    title: "La perception visuelle : comment notre cerveau forge-t-il notre vision du réel ?",
    description:
      "Pourquoi est-ce essentiel de considérer et d'appliquer ces connaissances dans vos pratiques ?",
    urlEn: "https://medium.com/@joydesdevises/visual-perception-how-does-our-brain-shape-our-perception-of-reality-c21e473919ee",
    urlFr: "https://blog.octo.com/la-perception-visuelle--comment-notre-cerveau-forge-t-il-notre-vision-du-reel-pc2",
    linkLabel: "Lire l'article"
  },

  {
    category: "Article",
    typeTag: "Article",
    themes: ["Cognition", "Product Design"],
    title: "La psychologie cognitive : une nécessité pour la conception centrée sur l'humain",
    description:
      "Pourquoi la psychologie cognitive est-elle essentielle à la conception centrée utilisateur ? Comprendre le fonctionnement humain pour concevoir des expériences plus efficaces et pertinentes.",
    urlEn: "https://medium.com/@joydesdevises/cognitive-psychology-a-necessity-for-a-human-centred-design-b453487a5168",
    urlFr: "https://blog.octo.com/la-psychologie-cognitive--une-necessite-pour-la-conception-centree-sur-l'humain-pc1",
    linkLabel: "Lire l'article"
  }
];

const tools = [
  {
    type: "Lien externe",
    title: "Guide pratique : construire un questionnaire en 4 étapes",
    description:
      "Le questionnaire est un outil puissant... A conditionien le construire ! Découvrez comment le faire en 4 étapes détaillées dans cet article.",
    image: "../Ressources/Files/outil-questionnaire.png",
    url: "files/guide-exemple.pdf",
    actionLabel: "Voir la ressource"
  }
];

// =========================
// Filter & pagination options
// =========================

const TYPE_OPTIONS  = ["Tous", "Résumé d'article scientifique", "Article", "Fun Fact"];
const THEME_OPTIONS = ["Tous", "IA et Data", "Product Design", "Innovation", "Cognition"];
const ARTICLES_PER_PAGE = 5;

let activeType    = "Tous";
let activeTheme   = "Tous";
let currentPage   = 1;

// =========================
// Card builders
// =========================

function createArticleCard(article) {
  const internalLink = article.urlInternal
    ? `<a class="resource-article-link" href="${article.urlInternal}">🇫🇷 ${article.internalLabel || "Lire le résumé"}</a>`
    : "";

  const enLink = article.urlEn
    ? `<a class="resource-article-link" href="${article.urlEn}" target="_blank" rel="noopener noreferrer">🇬🇧 Read the article</a>`
    : "";

  const frLink = article.urlFr
    ? `<a class="resource-article-link" href="${article.urlFr}" target="_blank" rel="noopener noreferrer">🇫🇷 Lire l'article</a>`
    : "";

  const themePills = (article.themes || [])
    .map(t => `<span class="resource-theme-pill">${t}</span>`)
    .join("");

  return `
    <article class="resource-article-card">
      <div class="resource-article-meta">
        <span class="resource-badge">${article.category}</span>
      </div>
      <div class="resource-article-content">
        <h3 class="resource-article-title">${article.title}</h3>
        ${themePills ? `<div class="resource-theme-pills">${themePills}</div>` : ""}
        <p class="resource-article-description">${article.description}</p>
        <div class="resource-article-links">
          ${internalLink}${enLink}${frLink}
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

// =========================
// Filter UI
// =========================

function buildFilterUI() {
  const container = document.getElementById("articles-filters");
  if (!container) return;

  container.innerHTML = `
    <div class="filter-group">
      <span class="filter-label">Type</span>
      <div class="filter-pills" data-filter="type">
        ${TYPE_OPTIONS.map((t, i) =>
          `<button class="filter-pill${i === 0 ? " active" : ""}" data-value="${t}">${t}</button>`
        ).join("")}
      </div>
    </div>
    <div class="filter-group">
      <span class="filter-label">Thématique</span>
      <div class="filter-pills" data-filter="theme">
        ${THEME_OPTIONS.map((t, i) =>
          `<button class="filter-pill${i === 0 ? " active" : ""}" data-value="${t}">${t}</button>`
        ).join("")}
      </div>
    </div>
  `;

  container.querySelectorAll(".filter-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const group = btn.closest("[data-filter]");
      const filterType = group.dataset.filter;

      group.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      if (filterType === "type") {
        activeType = btn.dataset.value;
      } else {
        activeTheme = btn.dataset.value;
      }

      currentPage = 1;
      renderArticles();
    });
  });
}

// =========================
// Articles render + pagination
// =========================

function renderArticles() {
  const listEl       = document.getElementById("articles-list");
  const countEl      = document.getElementById("articles-count");
  const paginationEl = document.getElementById("articles-pagination");
  if (!listEl) return;

  // Filter
  const filtered = articles.filter(a => {
    const typeMatch  = activeType  === "Tous" || a.typeTag === activeType;
    const themeMatch = activeTheme === "Tous" || (a.themes && a.themes.includes(activeTheme));
    return typeMatch && themeMatch;
  });

  // Count label
  if (countEl) {
    if (filtered.length === 0) {
      countEl.textContent = "";
    } else {
      countEl.textContent = `${filtered.length} article${filtered.length > 1 ? "s" : ""}`;
    }
  }

  // Empty state
  if (filtered.length === 0) {
    listEl.innerHTML = `<p class="articles-empty">Aucun article ne correspond à ces filtres.</p>`;
    if (paginationEl) paginationEl.innerHTML = "";
    return;
  }

  // Pagination slice
  const totalPages = Math.ceil(filtered.length / ARTICLES_PER_PAGE);
  if (currentPage > totalPages) currentPage = totalPages;
  const start    = (currentPage - 1) * ARTICLES_PER_PAGE;
  const paginated = filtered.slice(start, start + ARTICLES_PER_PAGE);

  listEl.innerHTML = paginated.map(createArticleCard).join("");

  // Pagination controls
  if (paginationEl) {
    if (totalPages <= 1) {
      paginationEl.innerHTML = "";
    } else {
      const prevDisabled = currentPage === 1;
      const nextDisabled = currentPage === totalPages;

      let html = `<div class="pagination-inner">`;
      html += `<button class="pagination-btn${prevDisabled ? " disabled" : ""}" data-page="${currentPage - 1}" ${prevDisabled ? "disabled" : ""} aria-label="Page précédente">←</button>`;

      for (let i = 1; i <= totalPages; i++) {
        html += `<button class="pagination-btn${i === currentPage ? " active" : ""}" data-page="${i}" aria-label="Page ${i}">${i}</button>`;
      }

      html += `<button class="pagination-btn${nextDisabled ? " disabled" : ""}" data-page="${currentPage + 1}" ${nextDisabled ? "disabled" : ""} aria-label="Page suivante">→</button>`;
      html += `</div>`;

      paginationEl.innerHTML = html;

      paginationEl.querySelectorAll(".pagination-btn:not([disabled])").forEach(btn => {
        btn.addEventListener("click", () => {
          currentPage = parseInt(btn.dataset.page);
          renderArticles();
          document.getElementById("articles").scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    }
  }
}

// =========================
// Tools render
// =========================

function renderTools() {
  const container = document.getElementById("tools-grid");
  if (!container) return;
  container.innerHTML = tools.map(createToolCard).join("");
}

// =========================
// Init
// =========================

buildFilterUI();
renderArticles();
renderTools();
