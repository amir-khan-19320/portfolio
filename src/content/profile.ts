export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBase(path: string) {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

export const profile = {
  name: "Amir Khan",
  shortName: "AK",
  role: "Team Lead",
  location: "Mumbai Metropolitan Region, India",
  email: "khanamir19320@gmail.com",
  phones: ["9004547289", "9967796255"] as const,
  photo: "/amir-khan-portrait.png",
  logo: "/ak-logo.png",
  resume: "/Amir_Khan_Resume.pdf",
  linkedin: "https://www.linkedin.com/in/amir-0319-khan",
  headline:
    "Team Lead · Magento 2.4 · Laravel · OMS · Adobe Commerce certified · Elasticsearch · Algolia",
  pitch:
    "I design and ship production commerce and healthcare systems — Magento 2.4, Laravel 12, OMS, search, logistics, and payments.",
  seo: {
    title:
      "Amir Khan | Team Lead — Magento 2.4, Laravel, OMS, Elasticsearch",
    description:
      "Amir Khan is a Team Lead and Senior Backend Engineer in Mumbai. Adobe Magento certified. Started as a fresher at TechSevin and now leads BharatEmart, OMS, Alfa, and TennisHub. Magento 2.4, Laravel 12, OMS architecture, Elasticsearch, Algolia, GraphQL, ShipRocket, Razorpay. Daily use of Cursor, Claude, Gemini, Copilot, and Codex.",
    keywords: [
      "Amir Khan",
      "Team Lead Mumbai",
      "Senior Backend Engineer Mumbai",
      "Magento 2.4 developer",
      "Adobe Commerce certified",
      "Laravel 12",
      "OMS architecture",
      "Elasticsearch",
      "Algolia",
      "GraphQL Magento",
      "ShipRocket integration",
      "Razorpay",
      "TechSevin",
      "eCommerce backend",
      "marketplace Magento",
      "healthcare Laravel",
      "Cursor AI",
      "Claude",
      "Gemini",
      "GitHub Copilot",
      "Codex",
      "AI-assisted Magento development",
    ],
  },
  accentLine: [
    "Magento 2.4",
    "Laravel 12",
    "OMS",
    "Elasticsearch",
    "Algolia",
  ],
  about: [
    "I have a foundation in website development from Mumbai University and an Adobe Magento Commerce certification. I joined TechSevin Solution LLP as a fresher and grew into a Team Lead — Magento 2.4, Laravel, Nginx, and MySQL on platforms that have to hold up in production.",
    "The work is systems, not demos: GraphQL and REST APIs, OMS architecture, search with Elasticsearch and Algolia, logistics, payment integrations, and the debugging that follows when traffic and catalogs get large.",
    "I now lead three live projects — BharatEmart, OMS, and Alfa — plus TennisHub. Marketplace, order management, and Magento store work from architecture through production.",
  ],
  skills: [
    {
      group: "Commerce",
      items: [
        "Magento 2.4",
        "Adobe Commerce",
        "Magento EE / CE",
        "GraphQL",
        "Marketplace modules",
      ],
    },
    {
      group: "Backend",
      items: [
        "PHP 8.2",
        "Laravel 12",
        "Laravel 10",
        "REST APIs",
        "JWT",
        "Queues / SQS",
        "Node.js",
      ],
    },
    {
      group: "Search & performance",
      items: [
        "Elasticsearch",
        "Algolia",
        "Redis search",
        "Nginx",
        "Production debugging",
        "Homepage / GraphQL caching",
      ],
    },
    {
      group: "Data",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ"],
    },
    {
      group: "Integrations",
      items: [
        "Razorpay",
        "ShipRocket",
        "TalyPay BNPL",
        "Twilio",
        "AWS S3",
        "AWS SQS",
        "OMS APIs",
      ],
    },
    {
      group: "Frontend & mobile",
      items: ["React 19", "Vite", "Redux", "Kotlin / Android", "Socket.IO"],
    },
    {
      group: "AI tools",
      items: [
        "Cursor",
        "ChatGPT",
        "Claude",
        "Gemini",
        "GitHub Copilot",
        "Codex",
      ],
    },
  ],
  aiTools: {
    intro:
      "AI is part of how I ship Magento and Laravel work — not a replacement for reading production traces. I use it to move faster on boilerplate, migrations, refactors, and first-pass debugging, then verify against real catalogs, queues, and logs.",
    items: [
      {
        name: "Cursor",
        use: "Day-to-day coding in Magento 2, Laravel 12, and React. Agents for multi-file refactors, migrations, and reviewing diffs before they hit staging.",
      },
      {
        name: "ChatGPT",
        use: "Architecture sketches, Magento GraphQL edge cases, and turning messy production symptoms into a short list of things to check.",
      },
      {
        name: "Claude",
        use: "Long Magento and Laravel refactors, module design, and reading a large diff with the production constraint still in mind.",
      },
      {
        name: "Gemini",
        use: "Docs, Magento internals, and a second opinion when a GraphQL or Elasticsearch path is not behaving.",
      },
      {
        name: "GitHub Copilot",
        use: "Inline completions in PHP, GraphQL schemas, and tests so the repetitive Magento boilerplate does not eat the hour.",
      },
      {
        name: "Codex",
        use: "First-pass implementations and CLI-driven code work, then I review it against Magento modules, queues, and real logs.",
      },
    ],
  },
  projects: [
    {
      slug: "swasthaone",
      title: "SwasthaOne",
      tagline: "Healthcare platform",
      domain: "Healthcare",
      summary:
        "Appointments, provider and facility onboarding, and split databases for a multi-sided healthcare product.",
      problem:
        "Patients, providers, and facilities had to live on one product — booking, onboarding, search, payments — without mixing who owns provider data versus facility data.",
      constraint:
        "Two PostgreSQL databases, not one schema. Cross-database reads and writes still had to work. Search and geo listings could not wait on a merge that was never going to happen.",
      result:
        "One Laravel 12 API now serves patient booking and provider/facility ops. Search and cards run across the split databases. Razorpay, Twilio, and geo queries are first-class, not afterthoughts.",
      stack: [
        "Laravel 12",
        "React 19",
        "PostgreSQL",
        "Elasticsearch",
        "Redis",
        "Razorpay",
        "Twilio",
      ],
      highlights: [
        "Kept provider and facility ownership split, then added cross-database reads and writes instead of collapsing the schema.",
        "Laravel 12 API with JWT for both customer web and ecosystem admin — booking, profiles, and onboarding on one contract.",
        "Elasticsearch plus a Redis search manager for categorized cards and geo queries across both databases.",
        "Razorpay, Twilio, and AWS S3 wired as production integrations, not demo stubs.",
      ],
      featured: true,
      caseStudy: true,
      architecture: [
        { from: "Customer web (React 19)", to: "Laravel 12 API" },
        { from: "Ecosystem admin (React 19)", to: "Laravel 12 API" },
        { from: "Laravel 12", to: "PostgreSQL (provider / facility)" },
        { from: "Laravel 12", to: "Elasticsearch · Redis · Razorpay · Twilio" },
      ],
    },
    {
      slug: "bharatemart",
      title: "BharatEmart",
      tagline: "Magento marketplace",
      domain: "Marketplace",
      summary:
        "Seller and buyer flows on Magento 2.4 — GraphQL, logistics, payments, and a custom OMS bridge.",
      problem:
        "Magento 2.4 had to behave like a marketplace — sellers, buyers, RFQ, split orders, refunds — while GraphQL and homepage paths were slowing down under catalog load.",
      constraint:
        "Could not fork Magento checkout. Marketplace behavior had to live in modules. Storefronts and apps talk GraphQL, not a one-off REST dump. Logistics and refunds had to stay on the order, not in admin notes.",
      result:
        "GraphQL covers catalog, checkout, vendors, RFQ, and returns. OMS, ShipRocket, split orders, OTP login, and Razorpay refunds are modules. Performance work targets the homepage and GraphQL queries that actually get hit in production.",
      stack: [
        "Magento 2.4",
        "GraphQL",
        "ShipRocket",
        "Razorpay",
        "Custom modules",
      ],
      highlights: [
        "Built marketplace behavior as Magento modules — buyers, clusters, split orders, OTP login — instead of patching core checkout.",
        "Exposed catalog, checkout, vendors, RFQ, and returns on GraphQL so apps did not need a parallel API.",
        "Bridged Magento to a dedicated OMS, ShipRocket shipping, and Razorpay refunds as explicit paths.",
        "Added a performance module for homepage cache and GraphQL timing on production-sensitive catalog queries.",
      ],
      modules: [
        "Performance",
        "OmsApi",
        "ShipRocketShipping",
        "CatalogGraphQl",
        "BuyerCluster",
        "Splitorder",
        "Otplogin",
        "RazorpayRefund",
      ],
      featured: true,
      caseStudy: true,
      architecture: [
        { from: "Storefront / apps", to: "Magento GraphQL" },
        {
          from: "Magento 2.4",
          to: "Custom modules (catalog, buyers, split orders)",
        },
        { from: "Magento 2.4", to: "OMS API" },
        { from: "Magento 2.4", to: "ShipRocket · Razorpay" },
      ],
    },
    {
      slug: "bharatemart-oms",
      title: "BharatEmart OMS",
      tagline: "Order management",
      domain: "OMS",
      summary:
        "Order lifecycle, invoices, and queue-backed processing for the marketplace.",
      problem:
        "Order lifecycle, invoices, barcodes, and payment verification were bloating Magento admin and competing with storefront work.",
      constraint:
        "Marketplace order spikes. Verification state (pending → approved / rejected) cannot be lost. Magento stays the storefront; it cannot become the back-office.",
      result:
        "A dedicated Laravel 10 service now owns order operations. SQS FIFO carries the async work. Invoices and barcodes generate in the same lifecycle Magento already started.",
      stack: ["Laravel 10", "SQS", "PDF", "Barcode"],
      highlights: [
        "Moved order work out of Magento admin into a Laravel 10 API Magento already calls.",
        "Used SQS FIFO so verification jobs survive spikes without dropping state.",
        "Generated PDF invoices and barcodes as part of the order lifecycle, not a later export.",
      ],
      featured: false,
      caseStudy: true,
      architecture: [
        { from: "Magento marketplace", to: "OMS API (Laravel 10)" },
        { from: "Laravel 10", to: "SQS FIFO queues" },
        { from: "Laravel 10", to: "PDF invoices · barcodes · MySQL" },
      ],
    },
    {
      slug: "alfa",
      title: "Alfa",
      tagline: "Magento 2 store",
      domain: "Commerce",
      summary:
        "Magento 2 commerce stack with a Docker local environment, Nginx, and MySQL.",
      problem:
        "Magento work depended on a shared laptop install. New engineers could not boot the store without someone else's machine.",
      constraint:
        "Magento 2 needs SSL, Elasticsearch, Redis, Nginx, and MySQL together. Bring-up had to be repeatable — scripts and env samples, not a chat dump.",
      result:
        "Docker Compose now stands up the store with SSL and the usual Magento services. Deploy scripts mean a new clone can actually run.",
      stack: ["Magento 2", "Docker", "Nginx"],
      highlights: [
        "Replaced the shared Magento laptop with a Docker Compose stack: SSL, Elasticsearch, Redis, Nginx, MySQL.",
        "Wrote deploy scripts and env samples so Magento bring-up is documented, not tribal.",
        "Kept Magento customizations inside that stack so local and staging stay close.",
      ],
      featured: false,
      caseStudy: true,
      architecture: [
        { from: "Browser", to: "Nginx (SSL)" },
        { from: "Nginx", to: "Magento 2 PHP" },
        { from: "Magento 2", to: "MySQL · Redis · Elasticsearch" },
      ],
    },
    {
      slug: "tennishub",
      title: "TennisHub",
      tagline: "Specialty retail",
      domain: "Commerce",
      summary:
        "Magento 2 upgrade and commerce work for a specialty tennis retail catalog.",
      problem:
        "A specialty tennis catalog sat on an older Magento 2 line. It needed an upgrade without throwing away catalog data or turning into a generic fashion theme.",
      constraint:
        "Racket / tennis attributes, checkout-adjacent modules, and payments had to survive. This is platform work, not a weekend theme swap.",
      result:
        "The catalog stays on Magento 2. Upgrade, catalog, checkout, and payments were treated as one platform path instead of a redesign.",
      stack: ["Magento 2", "PHP", "MySQL"],
      highlights: [
        "Upgraded Magento 2 without discarding the tennis catalog.",
        "Kept retail-specific modules for rackets and tennis SKUs instead of forcing a fashion theme.",
        "Carried catalog, checkout-adjacent work, and payments through the same upgrade path.",
      ],
      featured: false,
      caseStudy: true,
      architecture: [
        { from: "Storefront", to: "Magento 2" },
        { from: "Magento 2", to: "Catalog · checkout · payments" },
        { from: "Magento 2", to: "MySQL" },
      ],
    },
    {
      slug: "alessa-kuwait",
      title: "Alessa Kuwait",
      tagline: "Magento Enterprise",
      domain: "GCC retail",
      summary:
        "Adobe Commerce (Enterprise) storefront work for a GCC retail catalog.",
      problem:
        "A Kuwait retail catalog needed Magento features Community Edition would not hold — attributes, checkout, and operational EE paths.",
      constraint:
        "GCC retail ops. Customizations had to stay in the Enterprise tree, not a CE stretch with plugins piled on top.",
      result:
        "The storefront runs on Adobe Commerce EE. Catalog, checkout, and deploys stay in that tree instead of being backported to CE.",
      stack: ["Magento EE", "PHP", "MySQL"],
      highlights: [
        "Used Enterprise Edition where CE would not hold a GCC catalog.",
        "Customized catalog, checkout, and operational Magento paths inside EE.",
        "Kept attributes and deploys in the EE tree instead of a plugin pile on CE.",
      ],
      featured: false,
      caseStudy: true,
      architecture: [
        { from: "Storefront", to: "Adobe Commerce EE" },
        { from: "Magento EE", to: "Catalog · checkout customizations" },
        { from: "Magento EE", to: "MySQL" },
      ],
    },
    {
      slug: "khiara",
      title: "Khiara",
      tagline: "Magento multi-store",
      domain: "Commerce",
      summary:
        "Magento Community Edition multi-store setup with deploy and database operations.",
      problem:
        "More than one storefront needed to run on one Magento CE install. Bring-up and database steps lived in chat, not in scripts.",
      constraint:
        "Shared MySQL. Nginx in front. Each store had to be reproducible locally without cloning the whole machine.",
      result:
        "Multi-store Magento CE with deploy and database scripts written down. New storefronts are configuration, not a second install.",
      stack: ["Magento 2", "MySQL", "Nginx"],
      highlights: [
        "Set up Magento CE as multi-store instead of copying one website.",
        "Wrote MySQL and deploy scripts so stores can be reproduced locally.",
        "Put Nginx and local tooling in the same bring-up path.",
      ],
      featured: false,
      caseStudy: true,
      architecture: [
        { from: "Storefronts", to: "Magento 2 multi-store" },
        { from: "Magento 2", to: "Shared MySQL" },
        { from: "Ops", to: "Nginx · deploy scripts" },
      ],
    },
    {
      slug: "talypay",
      title: "TalyPay",
      tagline: "Buy now, pay later",
      domain: "Payments",
      summary:
        "Magento 2 payment module for TalyPay BNPL — checkout, webhooks, and Magento payment APIs.",
      problem:
        "Buy-now-pay-later had to sit in Magento checkout as a real payment method. A hosted redirect or a CMS block would not keep order status honest.",
      constraint:
        "Magento payment APIs, observers, and webhooks. When TalyPay authorizes or fails, Magento order state has to move with it — and failed auths have to be traceable.",
      result:
        "TalyPay is a Magento 2 payment method: checkout, observers, Web API, logging. Webhooks keep Magento in line with TalyPay instead of leaving orders stuck.",
      stack: ["Magento 2", "PHP", "Webhooks"],
      highlights: [
        "Implemented BNPL as a Magento payment method, not a redirect plugin.",
        "Used observers and Magento payment APIs so order status follows TalyPay.",
        "Added logging so failed authorizations can be traced instead of guessed.",
      ],
      featured: false,
      caseStudy: true,
      architecture: [
        { from: "Checkout", to: "TalyPay Magento module" },
        { from: "Magento 2", to: "TalyPay API" },
        { from: "TalyPay", to: "Webhooks · Magento order state" },
      ],
    },
    {
      slug: "travelsync",
      title: "TravelSync",
      tagline: "Realtime group travel",
      domain: "Mobile",
      summary:
        "Android + Node.js stack for live group travel coordination — sockets, location, and queues.",
      problem:
        "Group travel coordination needed live location and group state. Polling a REST list, or dumping it into chat, was too slow and too noisy.",
      constraint:
        "Kotlin on the phone, sockets on the backend, mixed stores (PostgreSQL, MongoDB, Redis), and queues. The mobile app had to talk to a full stack locally, not a mocked API.",
      result:
        "Android streams location over Socket.IO. Node owns group state with Postgres, Mongo, Redis, and RabbitMQ. Docker Compose boots the backend the app actually uses.",
      stack: [
        "Kotlin",
        "Node.js",
        "Socket.IO",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "RabbitMQ",
      ],
      highlights: [
        "Shipped a Kotlin app with Retrofit, Room, Socket.IO, and a location foreground service.",
        "Replaced REST polling with live sockets for location and group state.",
        "Ran PostgreSQL, MongoDB, Redis, and RabbitMQ behind Node in Docker Compose so local matches the stack.",
      ],
      featured: false,
      caseStudy: true,
      architecture: [
        { from: "Android (Kotlin)", to: "Node.js API · Socket.IO" },
        { from: "Node.js", to: "PostgreSQL · MongoDB · Redis" },
        { from: "Node.js", to: "RabbitMQ" },
      ],
    },
  ],
  experience: [
    {
      company: "TechSevin Solution LLP",
      role: "Team Lead",
      period: "Current",
      location: "Mumbai, India",
      points: [
        "Lead three live projects — BharatEmart, OMS, and Alfa — plus TennisHub, from architecture through production.",
        "Own Magento 2.4 marketplace, Laravel OMS, search, logistics, and payment integrations for those catalogs.",
        "Review Magento and Laravel delivery, set technical direction, and debug production issues on Nginx, MySQL, and GraphQL paths.",
      ],
    },
    {
      company: "TechSevin Solution LLP",
      role: "Magento Developer / Senior Backend Engineer",
      period: "Grew into the role",
      location: "Mumbai, India",
      points: [
        "Built and maintained Magento 2.4 and Laravel commerce systems for production catalogs and order flow.",
        "Took ownership of custom modules, GraphQL, ShipRocket, Razorpay, and OMS APIs.",
        "Debugged performance and production issues before moving into Team Lead.",
      ],
    },
    {
      company: "TechSevin Solution LLP",
      role: "Junior Magento Developer",
      period: "Started as a fresher",
      location: "Mumbai, India",
      points: [
        "Joined TechSevin as a fresher and learned Magento 2, PHP, MySQL, and how production commerce actually ships.",
        "Supported catalog, checkout, and backend tickets that became the foundation for leading store and OMS work.",
      ],
    },
  ],
  education: [
    {
      school: "Mumbai University",
      credential: "BSCIT — website development",
    },
  ],
  certifications: [
    {
      name: "Adobe Magento Commerce Certification",
      issuer: "Adobe",
    },
  ],
} as const;

export type Project = (typeof profile.projects)[number];
export type CaseStudy = Extract<Project, { caseStudy: true }>;

export function getProject(slug: string): Project | undefined {
  return profile.projects.find((project) => project.slug === slug);
}

export function getCaseStudies(): CaseStudy[] {
  return profile.projects.filter(
    (project): project is CaseStudy => project.caseStudy,
  );
}

export function getAdjacentProjects(slug: string) {
  const index = profile.projects.findIndex((project) => project.slug === slug);
  return {
    prev: index > 0 ? profile.projects[index - 1] : undefined,
    next:
      index >= 0 && index < profile.projects.length - 1
        ? profile.projects[index + 1]
        : undefined,
  };
}

export function telHref(phone: string) {
  return `tel:+91${phone}`;
}

export function formatPhone(phone: string) {
  return `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
}
