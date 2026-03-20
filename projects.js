const projects = [
  {
    id: 10,
    slug: "bobbee",
    category: "Audit | UX Research | Data IA",
    title: "Bobbee (SaaS comptabilité) – Isagri",
    description:
      "Identifier les frictions et améliorer l’expérience d’un SaaS comptable complexe.",
    image: "../images/BOBBEE/bobbee_carte.jpg",
    alt: "Aperçu du projet Bobbee",
    url: "projets/bobbee.html"
  },
  {
    id: 9,
    slug: "ademe",
    category: "UX Research | Data | Secteur public",
    title: "Fabrique de la donnée – ADEME",
    description:
      "Structurer et améliorer une offre de services data multi-acteurs à partir des usages terrain.",
    image: "images/ADEME/ademe-illustration.png",
    alt: "Aperçu du projet pour l'ADEME",
    url: "projets/ademe.html"
  },
  {
    id: 8,
    slug: "T-SRU",
    category: "UX-UI | DSFR | GovTech | Data Viz",
    title: "SRU (outil métier logement) – Ministère de l’Écologie",
    description:
      "Concevoir une interface claire pour un outil public complexe de suivi des logements sociaux.",
    image: "images/TSRU/sru-carte.png",
    alt: "Aperçu du projet T-SRU",
    url: "projets/T-SRU.html"
  },
  {
    id: 4,
    slug: "THALES",
    category: "UX Research | Product Design | Stratégie",
    title: "Portefeuille applicatif – Thales",
    description:
      "Comprendre les usages pour aider à décider quelles applications conserver, transformer ou supprimer.",
    image: "images/THALES/thales-carte.png",
    alt: "Aperçu du projet Thalès",
    url: "projets/thales.html"
  },
  {
    id: 6,
    slug: "OHC",
    category: "Data analyses | Questionnaire | Automatisation",
    title: "OHC (bien-être au travail) – OCTO Technology",
    description:
      "Transformer des données de bien-être en décisions concrètes à l’échelle de l’entreprise.",
    image: "images/OHC/ohc-carte.png",
    alt: "Aperçu du projet OHC",
    url: "projets/ohc.html"
  },
  {
    id: 5,
    slug: "1J1Sdelivery",
    category: "Product Design | Analytics | Secteur public",
    title: "1jeune1solution – Delivery produit",
    description:
      "Concevoir, tester et améliorer en continu un service public utilisé par des milliers de jeunes.",
    image: "images/1J1Sdelivery/1J1Sdelivery-carte.png",
    alt: "Aperçu du projet 1J1Sdelivery",
    url: "projets/1J1Sdelivery.html"
  },
  {
    id: 3,
    slug: "1J1Scadrage",
    category: "UX Research | UX-UI | Stratégie",
    title: "1jeune1solution – Cadrage produit",
    description:
      "Comprendre les besoins, structurer les parcours et poser les bases d’un produit utile et accessible.",
    image: "images/1J1Scadrage/1J1Scadrage-carte.png",
    alt: "Aperçu du projet 1J1S cadrage",
    url: "projets/1J1Scadrage.html"
  },
  {
    id: 7,
    slug: "TRM",
    category: "Strategie | UX-UI | Data | GovTech",
    title: "TRM (transport routier de marchandises) – Ministère de l’Écologie",
    description:
      "Améliorer la collecte et la fiabilité de données métier dans un produit public complexe.",
    image: "images/TRM/trm-carte.png",
    alt: "Aperçu du projet TRM",
    url: "projets/trm.html"
  },
  {
    id: 2,
    slug: "STREETCO",
    category: "UX-UI | Accessibilité | Mécénat",
    title: "StreetCo (mobilité inclusive) – mécénat de compétences",
    description:
      "Concevoir une application mobile accessible en intégrant collaboration, navigation et gamification.",
    image: "images/STREETCO/streetco-carte.png",
    alt: "Aperçu du projet STREETCO",
    url: "projets/streetco.html"
  },
  {
    id: 1,
    slug: "MUSEUM",
    category: "UI Design | Prototypes | Figma",
    title: "Refonte UI - Leopold Museum (Vienne)",
    description:
      "Projet personnel - Concevoir une expérience web immersive en travaillant identité visuelle, UI et prototypage interactif.",
    image: "images/MUSEUM/museum-carte.png",
    alt: "Aperçu du projet Leopold Museum",
    url: "projets/leopold-museum.html"
  },
];

function createProjectCard(project) {
  return `
    <article class="project-card">
      <div class="project-image">
        <img src="${project.image}" alt="${project.alt}" loading="lazy">
      </div>
      <div class="project-content">
        <span class="project-category">${project.category}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.url}">Voir l'étude de cas</a>
      </div>
    </article>
  `;
}

function renderProjects(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let projectsToRender = projects;

  if (Array.isArray(options.ids)) {
    projectsToRender = options.ids
      .map((id) => projects.find((project) => project.id === id))
      .filter(Boolean);
  }

  container.innerHTML = projectsToRender
    .map((project) => createProjectCard(project))
    .join("");
}