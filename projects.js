const TAG_LABELS = {
  product: { fr: 'Produit', en: 'Product' },
  data: { fr: 'Data', en: 'Data' },
  ai: { fr: 'IA', en: 'AI' },
  transformation: { fr: 'Transformation', en: 'Transformation' },
  audit: { fr: 'Audit', en: 'Audit' },
  dev: { fr: 'Développement', en: 'Development' }
};

const TAG_ORDER = ['product', 'data', 'ai', 'transformation', 'audit', 'dev'];

const projects = [
  {
    id: 12,
    slug: "waxshelf",
    tags: ['product', 'dev'],
    client: "Projet personnel",
    clientEn: "Personal project",
    title: "WaxShelf",
    titleEn: "WaxShelf",
    role: "Design produit, UI et développement full-stack",
    roleEn: "Product design, UI and full-stack development",
    description: "Projet personnel - Concevoir et développer une plateforme de gestion et de découverte de collection vinyles connectée à Discogs.",
    descriptionEn: "Personal project - Designing and developing a vinyl-collection management and discovery platform connected to Discogs.",
    url: "projets/waxshelf.html",
    endDate: "2026-08"
  },
  {
    id: 11,
    slug: "boussole-sante",
    tags: ['product', 'ai'],
    client: "Croix-Rouge française",
    clientEn: "French Red Cross",
    title: "Boussole Santé – Croix-Rouge française",
    titleEn: "Boussole Santé – French Red Cross",
    role: "Cadrage d'une plateforme IA pour les équipes éducatives",
    roleEn: "Framing an AI platform for education teams",
    description: "Créer l'identité visuelle et les prototypes d'une plateforme de ressources en éducation à la santé pour les enseignants.",
    descriptionEn: "Creating the visual identity and prototypes for a health-education resource platform for teachers.",
    url: "projets/boussole-sante.html",
    endDate: "2026-06"
  },
  {
    id: 10,
    slug: "bobbee",
    tags: ['audit', 'product'],
    client: "Isagri",
    clientEn: "Isagri",
    title: "Bobbee – Isagri",
    titleEn: "Bobbee – Isagri",
    role: "Audit UX et optimisation produit pour un SaaS de comptabilité",
    roleEn: "UX audit and product improvement for an accounting SaaS",
    description: "Identifier les frictions et améliorer l'expérience d'un SaaS comptable complexe.",
    descriptionEn: "Identifying friction and improving the user experience of a complex accounting SaaS.",
    url: "projets/bobbee.html",
    endDate: "2026-03"
  },
  {
    id: 9,
    slug: "ademe",
    tags: ['data', 'transformation'],
    client: "ADEME",
    clientEn: "ADEME",
    title: "Fabrique de la donnée – ADEME",
    titleEn: "Data Factory – ADEME",
    role: "Diagnostic des processus de gestion de la donnée",
    roleEn: "Diagnosing data management processes",
    description: "Structurer et améliorer une offre de services data multi-acteurs à partir des usages terrain.",
    descriptionEn: "Structuring and improving a multi-stakeholder data service offering from real-world usage insights.",
    url: "projets/ademe.html",
    endDate: "2025-04"
  },
  {
    id: 8,
    slug: "T-SRU",
    tags: ['product', 'data'],
    client: "Ministère de la Transition écologique",
    clientEn: "Ministry of Ecological Transition",
    title: "SRU – Ministère de l'Écologie",
    titleEn: "SRU – Ministry of Ecological Transition",
    role: "Conception d'un outil de collecte de données réglementaires",
    roleEn: "Designing a regulatory data-collection tool",
    description: "Concevoir une interface claire pour un outil public complexe de suivi des logements sociaux.",
    descriptionEn: "Designing a clear interface for a complex public tool for tracking social housing.",
    url: "projets/T-SRU.html",
    endDate: "2026-02"
  },
  {
    id: 4,
    slug: "THALES",
    tags: ['data', 'transformation'],
    client: "Thales",
    clientEn: "Thales",
    title: "Portefeuille applicatif – Thales",
    titleEn: "Application portfolio – Thales",
    role: "Rationalisation d'un portefeuille de 1 200 applications",
    roleEn: "Rationalising a portfolio of 1,200 applications",
    description: "Comprendre les usages pour aider à décider quelles applications conserver, transformer ou supprimer.",
    descriptionEn: "Understanding usage patterns to help decide which applications to keep, transform or retire.",
    url: "projets/thales.html",
    endDate: "2024-05"
  },
  {
    id: 6,
    slug: "OHC",
    tags: ['data'],
    client: "OCTO Technology",
    clientEn: "OCTO Technology",
    title: "OHC – OCTO Technology",
    titleEn: "OHC – OCTO Technology",
    role: "Conception et analyse d'un baromètre de bien-être au travail",
    roleEn: "Designing and analysing a workplace wellbeing barometer",
    description: "Transformer des données de bien-être en décisions concrètes à l'échelle de l'entreprise.",
    descriptionEn: "Transforming wellbeing data into concrete decisions at company scale.",
    url: "projets/ohc.html",
    endDate: "2025-12"
  },
  {
    id: 5,
    slug: "1J1Sdelivery",
    tags: ['product', 'transformation'],
    client: "Ministère du Travail",
    clientEn: "Ministry of Labour",
    title: "1jeune1solution (Delivery) – Ministère du Travail",
    titleEn: "1jeune1solution (Delivery) – Ministry of Labour",
    role: "Cadrage et delivery, coordination des équipes métier et tech",
    roleEn: "Framing and delivery, coordinating business and tech teams",
    description: "Concevoir, tester et améliorer en continu un service public utilisé par des milliers de jeunes.",
    descriptionEn: "Designing, testing and continuously improving a public service used by thousands of young people.",
    url: "projets/1J1Sdelivery.html",
    endDate: "2024-12"
  },
  {
    id: 3,
    slug: "1J1Scadrage",
    tags: ['product', 'transformation'],
    client: "Ministère du Travail",
    clientEn: "Ministry of Labour",
    title: "1jeune1solution (Cadrage) – Ministère du Travail",
    titleEn: "1jeune1solution (Framing) – Ministry of Labour",
    role: "Cadrage et delivery, coordination des équipes métier et tech",
    roleEn: "Framing and delivery, coordinating business and tech teams",
    description: "Comprendre les besoins, structurer les parcours et poser les bases d'un produit utile et accessible.",
    descriptionEn: "Understanding needs, structuring journeys and laying the foundations of a useful, accessible product.",
    url: "projets/1J1Scadrage.html",
    endDate: "2022-06"
  },
  {
    id: 7,
    slug: "TRM",
    tags: ['data', 'product'],
    client: "Ministère de la Transition écologique",
    clientEn: "Ministry of Ecological Transition",
    title: "TRM – Ministère de l'Écologie",
    titleEn: "TRM – Ministry of Ecological Transition",
    role: "Refonte d'une enquête nationale pour fiabiliser la donnée",
    roleEn: "Redesigning a national survey to make data more reliable",
    description: "Améliorer la collecte et la fiabilité de données métier dans un produit public complexe.",
    descriptionEn: "Improving the collection and reliability of business data in a complex public product.",
    url: "projets/trm.html",
    endDate: "2025-02"
  },
  {
    id: 2,
    slug: "STREETCO",
    tags: ['product'],
    client: "StreetCo",
    clientEn: "StreetCo",
    title: "StreetCo – mécénat de compétences",
    titleEn: "StreetCo – skills sponsorship",
    role: "Conception UX/UI d'une application mobile de mobilité inclusive",
    roleEn: "UX/UI design for an inclusive-mobility mobile app",
    description: "Concevoir une application mobile accessible en intégrant collaboration, navigation et gamification.",
    descriptionEn: "Designing an accessible mobile application integrating collaboration, navigation and gamification.",
    url: "projets/streetco.html",
    endDate: "2022-04"
  },
  {
    id: 1,
    slug: "MUSEUM",
    tags: ['product'],
    client: "Leopold Museum",
    clientEn: "Leopold Museum",
    title: "Refonte UI - Leopold Museum (Vienne)",
    titleEn: "UI Redesign - Leopold Museum (Vienna)",
    role: "Identité visuelle et prototypage d'une expérience web immersive",
    roleEn: "Visual identity and prototyping for an immersive web experience",
    description: "Projet personnel - Concevoir une expérience web immersive en travaillant identité visuelle, UI et prototypage interactif.",
    descriptionEn: "Personal project - Designing an immersive web experience through visual identity, UI and interactive prototyping.",
    url: "projets/leopold-museum.html",
    endDate: null
  },
];

// Trie du plus récent au plus ancien (endDate au format "YYYY-MM").
// Les projets sans date connue (endDate: null) sont placés en dernier.
function compareByDate(a, b) {
  if (!a.endDate && !b.endDate) return 0;
  if (!a.endDate) return 1;
  if (!b.endDate) return -1;
  return b.endDate.localeCompare(a.endDate);
}

projects.sort(compareByDate);

function sortProjectsBy(mode) {
  if (mode === 'category') {
    return projects.slice().sort(function (a, b) {
      var catDiff = TAG_ORDER.indexOf(a.tags[0]) - TAG_ORDER.indexOf(b.tags[0]);
      return catDiff !== 0 ? catDiff : compareByDate(a, b);
    });
  }
  return projects;
}

function createProjectCard(project) {
  var lang = (typeof localStorage !== 'undefined' && localStorage.getItem('uxcog_lang')) || 'fr';
  var title = (lang === 'en' && project.titleEn) ? project.titleEn : project.title;
  var role = (lang === 'en' && project.roleEn) ? project.roleEn : project.role;
  var tags = project.tags.map(function (tag) {
    return '      <span class="project-label tag-' + tag + '">' + TAG_LABELS[tag][lang === 'en' ? 'en' : 'fr'] + '</span>';
  }).join('\n');
  var roleLabel = lang === 'en' ? 'My role: ' : 'Mon rôle : ';
  var link  = lang === 'en' ? 'Discover the project →' : 'Découvrir le projet →';
  return [
    '<a class="project-card" href="' + project.url + '">',
    '  <div class="project-content">',
    '    <div class="project-label-row">',
    tags,
    '    </div>',
    '    <h3>' + title + '</h3>',
    '    <p class="project-role"><strong>' + roleLabel + '</strong>' + role + '</p>',
    '    <span class="project-link">' + link + '</span>',
    '  </div>',
    '</a>'
  ].join('\n');
}

function renderProjects(containerId, options) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var projectsToRender = (options && options.sort) ? sortProjectsBy(options.sort) : projects;
  if (options && Array.isArray(options.ids)) {
    projectsToRender = options.ids
      .map(function (id) { return projects.find(function (p) { return p.id === id; }); })
      .filter(Boolean);
  }

  container.innerHTML = projectsToRender.map(createProjectCard).join('');
}
