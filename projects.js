const projects = [
  {
    id: 1,
    slug: "bobbee",
    category: "Audit | UX Research | Data IA",
    title: "Audit UX-UI du SaaS Bobbee (Isagri)",
    description:
      "Analyse de l’expérience utilisateur et de l’ergonomie d’un outil comptable complexe afin d’identifier les frictions et structurer des pistes d’amélioration produit, dont l’intégration de fonctionnalités IA.",
    image: "images/Bobbee_Illustration.jpg",
    alt: "Illustration du projet Bobbee avec dashboard et analyse financière",
    url: "projets/bobbee.html"
  },
  {
    id: 2,
    slug: "ademe",
    category: "UX Research | Data | Pulic sector",
    title: "Design de service pour l’ADEME (Fabrique de la donnée)",
    description:
      "Recherche utilisateurs et analyse de données pour comprendre les usages des services data publics et formuler des recommandations d’amélioration à partir de plus de 90 retours utilisateurs.",
    image: "images/Ademe_Illustration.png",
    alt: "Aperçu du projet pour l'ADEME",
    url: "projets/ademe.html"
  },
  {
    id: 3,
    slug: "T-SRU",
    category: "UX-UI | DSFR | GovTech | Data Viz",
    title: "UI Design de la plateforme Transparence SRU - logements sociaux (Ministère Écologie)",
    description:
      "Conception d’interfaces pour un outil métier destiné aux collectivités, visant à centraliser les données et simplifier le suivi des obligations de logements sociaux.",
    image: "images/sru-proto.png",
    alt: "Aperçu du projet T-SRU",
    url: "projets/T-SRU.html"
  },

  {
    id: 4,
    slug: "TRM",
    category: "Strategie | UX-UI | Data | GovTech",
    title: "Refonte du produit data Transport Routier de Marchandises (Ministère Écologie)",
    description: "Cadrage produit, recherche utilisateurs et conception de nouveaux parcours pour améliorer la collecte et la fiabilité des données sur le transport routier de marchandises.",
    image: "images/trm-research.png",
    alt: "Aperçu du projet TRM",
    url: "projets/trm.html"
  },

  {
    id: 5,
    slug: "OHC",
    category: "Data analyses | Questionnaire | Automatisation",
    title: "Transformer des données de bien-être en leviers d’action (OCTO Technology)",
    description: "Passer de questionnaires peu exploitables à un outil fiable permettant de comprendre le bien-être des collaborateurs et d’orienter des décisions concrètes à l’échelle de l’entreprise.",
    image: "images/ohc-illustration.png",
    alt: "Aperçu du projet OHC",
    url: "projets/ohc.html"
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