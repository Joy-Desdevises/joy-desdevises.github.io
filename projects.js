const projects = [
  {
    id: 1,
    slug: "bobbee",
    category: "Product Design | Data",
    title: "Audit UX-UI du SaaS Bobbee (Isagri)",
    description:
      "Réalisation d’un audit design pour identifier les points de friction d’un logiciel SaaS de comptabilité et proposer des améliorations de parcours, d’interface et d’intégration de fonctionnalités basées sur l’IA.",
    image: "images/Bobbee_Illustration.jpg",
    alt: "Illustration du projet Bobbee avec dashboard et analyse financière",
    url: "projets/bobbee.html"
  },
  {
    id: 2,
    slug: "ademe",
    category: "UX Research | Data",
    title: "Optimisation des services data de l’ADEME",
    description:
      "Service design et analyse de données pour la Fabrique de la donnée. 90+ retours utilisateurs, croisement de méthodes qualitatives et quantitatives, et formulation de recommandations pour améliorer l’accès et l’usage des services data.",
    image: "images/Ademe_Illustration.png",
    alt: "Aperçu du projet pour l'ADEME",
    url: "projets/ademe.html"
  },
  {
    id: 3,
    slug: "T-SRU",
    category: "UI Design | Mentoring | Data",
    title: "UI Design pour une plateforme publique de logement social",
    description:
      "Conception d’interfaces pour la plateforme Transparence SRU (Ministère de la Transition Ecologique) afin de centraliser les données et faciliter le suivi des quotas de logements sociaux.",
    image: "images/sru-proto.png",
    alt: "Aperçu du projet T-SRU",
    url: "projets/T-SRU.html"
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