const articles = [
  {
    category: "Article",
    title: "Exemple d’article sur la recherche utilisateur",
    description:
      "Un article externe autour de la recherche utilisateur, de la prise de décision et des méthodes de conception.",
    url: "https://example.com/article-1",
    linkLabel: "Lire l’article"
  },
  {
    category: "Article",
    title: "Exemple d’article sur le product design",
    description:
      "Un contenu pour approfondir des sujets liés au product design, aux parcours utilisateurs et à l’amélioration continue.",
    url: "https://example.com/article-2",
    linkLabel: "Lire l’article"
  }
];

const tools = [
  {
    type: "Téléchargement",
    title: "Guide pratique UX",
    description:
      "Un guide PDF à télécharger pour structurer une démarche de recherche ou de conception.",
    image: "../images/resources/resource-guide.jpg",
    url: "files/guide-exemple.pdf",
    actionLabel: "Télécharger"
  },
  {
    type: "Ressource",
    title: "Checklist de cadrage produit",
    description:
      "Une checklist simple pour cadrer un projet avant de passer à la conception.",
    image: "../images/resources/resource-checklist.jpg",
    url: "files/checklist-exemple.pdf",
    actionLabel: "Télécharger"
  },
  {
    type: "Lien externe",
    title: "Boîte à outils design",
    description:
      "Une sélection de ressources externes utiles pour le design, la recherche et la facilitation.",
    image: "../images/resources/resource-tools.jpg",
    url: "https://example.com/tools",
    actionLabel: "Voir la ressource"
  }
];

function createArticleCard(article) {
  return `
    <a class="resource-article-card" href="${article.url}" target="_blank" rel="noopener noreferrer">
      <div class="resource-article-meta">
        <span class="resource-badge">${article.category}</span>
      </div>
      <div class="resource-article-content">
        <h3 class="resource-article-title">${article.title}</h3>
        <p class="resource-article-description">${article.description}</p>
        <span class="resource-article-link">${article.linkLabel}</span>
      </div>
    </a>
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