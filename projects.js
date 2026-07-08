const CATEGORY_LABELS = {
  product: { fr: 'Product Design — UX/UI', en: 'Product Design — UX/UI' },
  service: { fr: 'Service Design & Audit', en: 'Service Design & Audit' },
  research: { fr: 'Recherche scientifique appliquée', en: 'Applied scientific research' }
};

const projects = [
  {
    id: 10,
    slug: "bobbee",
    category: "service",
    client: "Isagri",
    clientEn: "Isagri",
    title: "Bobbee (SaaS comptabilité) – Isagri",
    titleEn: "Bobbee (accounting SaaS) – Isagri",
    description: "Identifier les frictions et améliorer l'expérience d'un SaaS comptable complexe.",
    descriptionEn: "Identifying friction and improving the user experience of a complex accounting SaaS.",
    url: "projets/bobbee.html",
    endDate: "2026-03"
  },
  {
    id: 9,
    slug: "ademe",
    category: "service",
    client: "ADEME",
    clientEn: "ADEME",
    title: "Fabrique de la donnée – ADEME",
    titleEn: "Data Factory – ADEME",
    description: "Structurer et améliorer une offre de services data multi-acteurs à partir des usages terrain.",
    descriptionEn: "Structuring and improving a multi-stakeholder data service offering from real-world usage insights.",
    url: "projets/ademe.html",
    endDate: "2025-04"
  },
  {
    id: 8,
    slug: "T-SRU",
    category: "product",
    client: "Ministère de la Transition écologique",
    clientEn: "Ministry of Ecological Transition",
    title: "SRU (outil métier logement) – Ministère de l'Écologie",
    titleEn: "SRU (housing tracking tool) – Ministry of Ecological Transition",
    description: "Concevoir une interface claire pour un outil public complexe de suivi des logements sociaux.",
    descriptionEn: "Designing a clear interface for a complex public tool for tracking social housing.",
    url: "projets/T-SRU.html",
    endDate: "2026-02"
  },
  {
    id: 4,
    slug: "THALES",
    category: "service",
    client: "Thales",
    clientEn: "Thales",
    title: "Portefeuille applicatif – Thales",
    titleEn: "Application portfolio – Thales",
    description: "Comprendre les usages pour aider à décider quelles applications conserver, transformer ou supprimer.",
    descriptionEn: "Understanding usage patterns to help decide which applications to keep, transform or retire.",
    url: "projets/thales.html",
    endDate: "2024-05"
  },
  {
    id: 6,
    slug: "OHC",
    category: "research",
    client: "OCTO Technology",
    clientEn: "OCTO Technology",
    title: "OHC (bien-être au travail) – OCTO Technology",
    titleEn: "OHC (workplace wellbeing) – OCTO Technology",
    description: "Transformer des données de bien-être en décisions concrètes à l'échelle de l'entreprise.",
    descriptionEn: "Transforming wellbeing data into concrete decisions at company scale.",
    url: "projets/ohc.html",
    endDate: "2026-12",
    extraTag: "Data analyses",
    extraTagEn: "Data analysis"
  },
  {
    id: 5,
    slug: "1J1Sdelivery",
    category: "product",
    client: "Ministère du Travail",
    clientEn: "Ministry of Labour",
    title: "1jeune1solution – Delivery produit",
    titleEn: "1jeune1solution – Product delivery",
    description: "Concevoir, tester et améliorer en continu un service public utilisé par des milliers de jeunes.",
    descriptionEn: "Designing, testing and continuously improving a public service used by thousands of young people.",
    url: "projets/1J1Sdelivery.html",
    endDate: "2024-12"
  },
  {
    id: 3,
    slug: "1J1Scadrage",
    category: "product",
    client: "Ministère du Travail",
    clientEn: "Ministry of Labour",
    title: "1jeune1solution – Cadrage produit",
    titleEn: "1jeune1solution – Product scoping",
    description: "Comprendre les besoins, structurer les parcours et poser les bases d'un produit utile et accessible.",
    descriptionEn: "Understanding needs, structuring journeys and laying the foundations of a useful, accessible product.",
    url: "projets/1J1Scadrage.html",
    endDate: "2022-06"
  },
  {
    id: 7,
    slug: "TRM",
    category: "product",
    client: "Ministère de la Transition écologique",
    clientEn: "Ministry of Ecological Transition",
    title: "TRM (transport routier de marchandises) – Ministère de l'Écologie",
    titleEn: "TRM (road freight transport) – Ministry of Ecological Transition",
    description: "Améliorer la collecte et la fiabilité de données métier dans un produit public complexe.",
    descriptionEn: "Improving the collection and reliability of business data in a complex public product.",
    url: "projets/trm.html",
    endDate: "2025-02"
  },
  {
    id: 2,
    slug: "STREETCO",
    category: "product",
    client: "StreetCo",
    clientEn: "StreetCo",
    title: "StreetCo (mobilité inclusive) – mécénat de compétences",
    titleEn: "StreetCo (inclusive mobility) – skills sponsorship",
    description: "Concevoir une application mobile accessible en intégrant collaboration, navigation et gamification.",
    descriptionEn: "Designing an accessible mobile application integrating collaboration, navigation and gamification.",
    url: "projets/streetco.html",
    endDate: "2022-04"
  },
  {
    id: 1,
    slug: "MUSEUM",
    category: "product",
    client: "Leopold Museum",
    clientEn: "Leopold Museum",
    title: "Refonte UI - Leopold Museum (Vienne)",
    titleEn: "UI Redesign - Leopold Museum (Vienna)",
    description: "Projet personnel - Concevoir une expérience web immersive en travaillant identité visuelle, UI et prototypage interactif.",
    descriptionEn: "Personal project — Designing an immersive web experience through visual identity, UI and interactive prototyping.",
    url: "projets/leopold-museum.html",
    endDate: null
  },
];

// Trie du plus récent au plus ancien (endDate au format "YYYY-MM").
// Les projets sans date connue (endDate: null) sont placés en dernier.
projects.sort(function (a, b) {
  if (!a.endDate && !b.endDate) return 0;
  if (!a.endDate) return 1;
  if (!b.endDate) return -1;
  return b.endDate.localeCompare(a.endDate);
});

function createProjectCard(project) {
  var lang = (typeof localStorage !== 'undefined' && localStorage.getItem('uxcog_lang')) || 'fr';
  var title = (lang === 'en' && project.titleEn) ? project.titleEn : project.title;
  var desc  = (lang === 'en' && project.descriptionEn) ? project.descriptionEn : project.description;
  var client = (lang === 'en' && project.clientEn) ? project.clientEn : project.client;
  var categoryLabel = CATEGORY_LABELS[project.category][lang] || CATEGORY_LABELS[project.category].fr;
  var extraTag = (lang === 'en' && project.extraTagEn) ? project.extraTagEn : project.extraTag;
  var link  = lang === 'en' ? 'View case study' : 'Voir l\'étude de cas';
  return [
    '<article class="project-card">',
    '  <div class="project-image cat-' + project.category + '">',
    '    <div class="tag-row">',
    '      <span class="project-category">' + categoryLabel + '</span>',
    extraTag ? '      <span class="project-category">' + extraTag + '</span>' : '',
    '    </div>',
    '    <span class="client-name">' + client + '</span>',
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
