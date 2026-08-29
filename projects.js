const CATEGORY_LABELS = {
  product: { fr: 'Product Design — UX/UI', en: 'Product Design — UX/UI' },
  service: { fr: 'Service Design & Audit', en: 'Service Design & Audit' },
  research: { fr: 'Recherche appliquée', en: 'Applied research' }
};

const CATEGORY_ORDER = ['product', 'service', 'research'];

const projects = [
  {
    id: 12,
    slug: "waxshelf",
    category: "product",
    client: "Projet personnel",
    clientEn: "Personal project",
    title: "WaxShelf",
    titleEn: "WaxShelf",
    role: "Design produit, UI et développement full-stack",
    roleEn: "Product design, UI and full-stack development",
    description: "Projet personnel - Concevoir et développer une plateforme de gestion et de découverte de collection vinyles connectée à Discogs.",
    descriptionEn: "Personal project — Designing and developing a vinyl-collection management and discovery platform connected to Discogs.",
    url: "projets/waxshelf.html",
    endDate: "2026-08"
  },
  {
    id: 11,
    slug: "boussole-sante",
    category: "product",
    client: "Croix-Rouge française",
    clientEn: "French Red Cross",
    title: "Boussole Santé – Croix-Rouge française",
    titleEn: "Boussole Santé – French Red Cross",
    role: "Identité visuelle et prototypage d'une plateforme d'éducation à la santé",
    roleEn: "Visual identity and prototyping for a health-education platform",
    description: "Créer l'identité visuelle et les prototypes d'une plateforme de ressources en éducation à la santé pour les enseignants.",
    descriptionEn: "Creating the visual identity and prototypes for a health-education resource platform for teachers.",
    url: "projets/boussole-sante.html",
    endDate: "2026-06"
  },
  {
    id: 10,
    slug: "bobbee",
    category: "service",
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
    category: "service",
    client: "ADEME",
    clientEn: "ADEME",
    title: "Fabrique de la donnée – ADEME",
    titleEn: "Data Factory – ADEME",
    role: "Cadrage et structuration d'une offre de service data multi-acteurs",
    roleEn: "Framing and structuring a multi-stakeholder data service offering",
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
    title: "SRU – Ministère de l'Écologie",
    titleEn: "SRU – Ministry of Ecological Transition",
    role: "Conception UI d'un outil métier de suivi des logements sociaux",
    roleEn: "UI design for a business tool tracking social housing",
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
    role: "Recherche utilisateur et arbitrage d'un portefeuille applicatif",
    roleEn: "User research and arbitration of an application portfolio",
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
    title: "OHC – OCTO Technology",
    titleEn: "OHC – OCTO Technology",
    role: "Analyse de données et recommandations pour le bien-être au travail",
    roleEn: "Data analysis and recommendations for workplace wellbeing",
    description: "Transformer des données de bien-être en décisions concrètes à l'échelle de l'entreprise.",
    descriptionEn: "Transforming wellbeing data into concrete decisions at company scale.",
    url: "projets/ohc.html",
    endDate: "2025-12",
    extraTag: "Data analyses",
    extraTagEn: "Data analysis"
  },
  {
    id: 5,
    slug: "1J1Sdelivery",
    category: "product",
    client: "Ministère du Travail",
    clientEn: "Ministry of Labour",
    title: "1jeune1solution (Delivery) – Ministère du Travail",
    titleEn: "1jeune1solution (Delivery) – Ministry of Labour",
    role: "Conception et amélioration continue d'un service public",
    roleEn: "Continuous design and improvement of a public service",
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
    title: "1jeune1solution (Cadrage) – Ministère du Travail",
    titleEn: "1jeune1solution (Framing) – Ministry of Labour",
    role: "Recherche utilisateur et structuration des parcours",
    roleEn: "User research and journey structuring",
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
    title: "TRM – Ministère de l'Écologie",
    titleEn: "TRM – Ministry of Ecological Transition",
    role: "Conception d'un outil de collecte de données pour le transport routier de marchandises",
    roleEn: "Design of a data-collection tool for road freight transport",
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
    category: "product",
    client: "Leopold Museum",
    clientEn: "Leopold Museum",
    title: "Refonte UI - Leopold Museum (Vienne)",
    titleEn: "UI Redesign - Leopold Museum (Vienna)",
    role: "Identité visuelle et prototypage d'une expérience web immersive",
    roleEn: "Visual identity and prototyping for an immersive web experience",
    description: "Projet personnel - Concevoir une expérience web immersive en travaillant identité visuelle, UI et prototypage interactif.",
    descriptionEn: "Personal project — Designing an immersive web experience through visual identity, UI and interactive prototyping.",
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
      var catDiff = CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
      return catDiff !== 0 ? catDiff : compareByDate(a, b);
    });
  }
  return projects;
}

function createProjectCard(project) {
  var lang = (typeof localStorage !== 'undefined' && localStorage.getItem('uxcog_lang')) || 'fr';
  var title = (lang === 'en' && project.titleEn) ? project.titleEn : project.title;
  var role = (lang === 'en' && project.roleEn) ? project.roleEn : project.role;
  var categoryLabel = CATEGORY_LABELS[project.category][lang] || CATEGORY_LABELS[project.category].fr;
  var extraTag = (lang === 'en' && project.extraTagEn) ? project.extraTagEn : project.extraTag;
  var roleLabel = lang === 'en' ? 'My role: ' : 'Mon rôle : ';
  var link  = lang === 'en' ? 'Discover the project →' : 'Découvrir le projet →';
  return [
    '<a class="project-card" href="' + project.url + '">',
    '  <div class="project-content">',
    '    <div class="project-label-row">',
    '      <span class="project-label cat-' + project.category + '">' + categoryLabel + '</span>',
    extraTag ? '      <span class="project-label-extra">' + extraTag + '</span>' : '',
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
