const projects = [
  {
    id: 10,
    slug: "bobbee",
    title: "Bobbee (SaaS comptabilité) – Isagri",
    titleEn: "Bobbee (accounting SaaS) – Isagri",
    description: "Identifier les frictions et améliorer l'expérience d'un SaaS comptable complexe.",
    descriptionEn: "Identifying friction and improving the user experience of a complex accounting SaaS.",
    image: "../images/BOBBEE/bobbee_carte.jpg",
    alt: "Aperçu du projet Bobbee",
    url: "projets/bobbee.html"
  },
  {
    id: 9,
    slug: "ademe",
    title: "Fabrique de la donnée – ADEME",
    titleEn: "Data Factory – ADEME",
    description: "Structurer et améliorer une offre de services data multi-acteurs à partir des usages terrain.",
    descriptionEn: "Structuring and improving a multi-stakeholder data service offering from real-world usage insights.",
    image: "images/ADEME/ademe-illustration.png",
    alt: "Aperçu du projet pour l'ADEME",
    url: "projets/ademe.html"
  },
  {
    id: 8,
    slug: "T-SRU",
    title: "SRU (outil métier logement) – Ministère de l'Écologie",
    titleEn: "SRU (housing tracking tool) – Ministry of Ecological Transition",
    description: "Concevoir une interface claire pour un outil public complexe de suivi des logements sociaux.",
    descriptionEn: "Designing a clear interface for a complex public tool for tracking social housing.",
    image: "images/TSRU/sru-carte.png",
    alt: "Aperçu du projet T-SRU",
    url: "projets/T-SRU.html"
  },
  {
    id: 4,
    slug: "THALES",
    title: "Portefeuille applicatif – Thales",
    titleEn: "Application portfolio – Thales",
    description: "Comprendre les usages pour aider à décider quelles applications conserver, transformer ou supprimer.",
    descriptionEn: "Understanding usage patterns to help decide which applications to keep, transform or retire.",
    image: "images/THALES/thales-carte.png",
    alt: "Aperçu du projet Thalès",
    url: "projets/thales.html"
  },
  {
    id: 6,
    slug: "OHC",
    title: "OHC (bien-être au travail) – OCTO Technology",
    titleEn: "OHC (workplace wellbeing) – OCTO Technology",
    description: "Transformer des données de bien-être en décisions concrètes à l'échelle de l'entreprise.",
    descriptionEn: "Transforming wellbeing data into concrete decisions at company scale.",
    image: "images/OHC/ohc-carte.png",
    alt: "Aperçu du projet OHC",
    url: "projets/ohc.html"
  },
  {
    id: 5,
    slug: "1J1Sdelivery",
    title: "1jeune1solution – Delivery produit",
    titleEn: "1jeune1solution – Product delivery",
    description: "Concevoir, tester et améliorer en continu un service public utilisé par des milliers de jeunes.",
    descriptionEn: "Designing, testing and continuously improving a public service used by thousands of young people.",
    image: "images/1J1Sdelivery/1J1Sdelivery-carte.png",
    alt: "Aperçu du projet 1J1Sdelivery",
    url: "projets/1J1Sdelivery.html"
  },
  {
    id: 3,
    slug: "1J1Scadrage",
    title: "1jeune1solution – Cadrage produit",
    titleEn: "1jeune1solution – Product scoping",
    description: "Comprendre les besoins, structurer les parcours et poser les bases d'un produit utile et accessible.",
    descriptionEn: "Understanding needs, structuring journeys and laying the foundations of a useful, accessible product.",
    image: "images/1J1Scadrage/1J1Scadrage-carte.png",
    alt: "Aperçu du projet 1J1S cadrage",
    url: "projets/1J1Scadrage.html"
  },
  {
    id: 7,
    slug: "TRM",
    title: "TRM (transport routier de marchandises) – Ministère de l'Écologie",
    titleEn: "TRM (road freight transport) – Ministry of Ecological Transition",
    description: "Améliorer la collecte et la fiabilité de données métier dans un produit public complexe.",
    descriptionEn: "Improving the collection and reliability of business data in a complex public product.",
    image: "images/TRM/trm-carte.png",
    alt: "Aperçu du projet TRM",
    url: "projets/trm.html"
  },
  {
    id: 2,
    slug: "STREETCO",
    title: "StreetCo (mobilité inclusive) – mécénat de compétences",
    titleEn: "StreetCo (inclusive mobility) – skills sponsorship",
    description: "Concevoir une application mobile accessible en intégrant collaboration, navigation et gamification.",
    descriptionEn: "Designing an accessible mobile application integrating collaboration, navigation and gamification.",
    image: "images/STREETCO/streetco-carte.png",
    alt: "Aperçu du projet STREETCO",
    url: "projets/streetco.html"
  },
  {
    id: 1,
    slug: "MUSEUM",
    title: "Refonte UI - Leopold Museum (Vienne)",
    titleEn: "UI Redesign - Leopold Museum (Vienna)",
    description: "Projet personnel - Concevoir une expérience web immersive en travaillant identité visuelle, UI et prototypage interactif.",
    descriptionEn: "Personal project — Designing an immersive web experience through visual identity, UI and interactive prototyping.",
    image: "images/MUSEUM/museum-carte.png",
    alt: "Aperçu du projet Leopold Museum",
    url: "projets/leopold-museum.html"
  },
];

function createProjectCard(project) {
  var lang = (typeof localStorage !== 'undefined' && localStorage.getItem('uxcog_lang')) || 'fr';
  var title = (lang === 'en' && project.titleEn) ? project.titleEn : project.title;
  var desc  = (lang === 'en' && project.descriptionEn) ? project.descriptionEn : project.description;
  var link  = lang === 'en' ? 'View case study' : 'Voir l\'étude de cas';
  return [
    '<article class="project-card">',
    '  <div class="project-image">',
    '    <img src="' + project.image + '" alt="' + project.alt + '" loading="lazy">',
    '  </div>',
    '  <div class="project-content">',
    '    <h3>' + title + '</h3>',
    '    <p>' + desc + '</p>',
    '    <a href="' + project.url + '">' + link + '</a>',
    '  </div>',
    '</article>'
  ].join('\n');
}

function renderProjects(containerId, options) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var projectsToRender = projects;
  if (options && Array.isArray(options.ids)) {
    projectsToRender = options.ids
      .map(function (id) { return projects.find(function (p) { return p.id === id; }); })
      .filter(Boolean);
  }

  container.innerHTML = projectsToRender.map(createProjectCard).join('');
}
