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
        "Laravel 12 API with JWT, Scout/Elasticsearch search, Razorpay, Twilio, and AWS S3.",
        "React 19 customer web and ecosystem admin (Vite) for booking, profiles, and onboarding.",
        "Split provider and facility PostgreSQL databases with cross-database reads and writes.",
        "Redis search manager for categorized provider/facility cards and geo queries.",
      ],
      featured: true,
      caseStudy: true,
      architecture: [
        { from: "Customer web (React 19)", to: "Laravel 12 API" },
        { from: "Ecosystem admin (React 19)", to: "Laravel 12 API" },
        { from: "Laravel 12", to: "PostgreSQL (provider / facility)" },
        { from: "Laravel 12", to: "Elasticsearch · Redis · Razorpay · Twilio" },
      ],
      outcomes: [
        "One API serving patient booking and facility/provider operations.",
        "Search and listing across split databases without collapsing ownership of provider vs facility data.",
        "Payments, communications, and geo search wired as first-class integrations.",
      ],
    },
    {
      slug: "bharatemart",
      title: "BharatEmart",
      tagline: "Magento marketplace",
      domain: "Marketplace",
      summary:
        "Seller and buyer flows on Magento 2.4 — GraphQL, logistics, payments, and a custom OMS bridge.",
      stack: [
        "Magento 2.4",
        "GraphQL",
        "ShipRocket",
        "Razorpay",
        "Custom modules",
      ],
      highlights: [
        "GraphQL surface for catalog, checkout, vendors, RFQ, and returns.",
        "Custom OMS API, ShipRocket shipping, and payment refund paths.",
        "Performance work: homepage cache, GraphQL timing, and production-sensitive catalog queries.",
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
      outcomes: [
        "Marketplace behavior (sellers, buyers, clusters, KYC) without forking Magento’s core checkout blindly.",
        "Order split, logistics, and refunds handled as explicit modules instead of one-off patches.",
        "A performance module aimed at GraphQL and homepage paths that actually get hit in production.",
      ],
    },
    {
      slug: "bharatemart-oms",
      title: "BharatEmart OMS",
      tagline: "Order management",
      domain: "OMS",
      summary:
        "Order lifecycle, invoices, and queue-backed processing for the marketplace.",
      stack: ["Laravel 10", "SQS", "PDF", "Barcode"],
      highlights: [
        "Laravel 10 service for order operations, PDF invoices, and barcodes.",
        "SQS FIFO queues for reliable async work.",
        "Payment verification states from pending through approval and rejection.",
      ],
      featured: false,
      caseStudy: true,
      architecture: [
        { from: "Magento marketplace", to: "OMS API (Laravel 10)" },
        { from: "Laravel 10", to: "SQS FIFO queues" },
        { from: "Laravel 10", to: "PDF invoices · barcodes · MySQL" },
      ],
      outcomes: [
        "Order work sits in a dedicated service instead of bloating Magento admin.",
        "Async jobs survive spikes without losing verification state.",
        "Invoices and barcodes are generated as part of the same lifecycle.",
      ],
    },
    {
      slug: "alfa",
      title: "Alfa",
      tagline: "Magento 2 store",
      domain: "Commerce",
      summary:
        "Magento 2 commerce stack with a Docker local environment, Nginx, and MySQL.",
      stack: ["Magento 2", "Docker", "Nginx"],
      highlights: [
        "Docker Compose local stack with SSL, Elasticsearch, and Redis.",
        "Magento 2 customizations and operational deploy scripts.",
        "Repeatable local bring-up so Magento work does not depend on a shared laptop install.",
      ],
      featured: false,
      caseStudy: true,
      architecture: [
        { from: "Browser", to: "Nginx (SSL)" },
        { from: "Nginx", to: "Magento 2 PHP" },
        { from: "Magento 2", to: "MySQL · Redis · Elasticsearch" },
      ],
      outcomes: [
        "A Dockerized Magento store that new engineers can actually boot.",
        "Deploy scripts and env samples instead of tribal knowledge.",
      ],
    },
    {
      slug: "tennishub",
      title: "TennisHub",
      tagline: "Specialty retail",
      domain: "Commerce",
      summary:
        "Magento 2 upgrade and commerce work for a specialty tennis retail catalog.",
      stack: ["Magento 2", "PHP", "MySQL"],
      highlights: [
        "Magento 2 platform work spanning catalog, checkout-adjacent modules, and payments.",
        "Upgrade path from an older Magento 2 line without throwing away catalog data.",
        "Retail-specific modules for a racket / tennis catalog, not a generic fashion theme.",
      ],
      featured: false,
      caseStudy: true,
      architecture: [
        { from: "Storefront", to: "Magento 2" },
        { from: "Magento 2", to: "Catalog · checkout · payments" },
        { from: "Magento 2", to: "MySQL" },
      ],
      outcomes: [
        "Specialty retail catalog stays on Magento 2 instead of a one-off CMS.",
        "Upgrade work is treated as platform work, not a weekend theme swap.",
      ],
    },
    {
      slug: "alessa-kuwait",
      title: "Alessa Kuwait",
      tagline: "Magento Enterprise",
      domain: "GCC retail",
      summary:
        "Adobe Commerce (Enterprise) storefront work for a GCC retail catalog.",
      stack: ["Magento EE", "PHP", "MySQL"],
      highlights: [
        "Enterprise Edition Magento for a Kuwait retail operation.",
        "Catalog, checkout, and operational Magento customizations.",
        "EE features used where Community Edition would not hold a GCC catalog.",
      ],
      featured: false,
      caseStudy: true,
      architecture: [
        { from: "Storefront", to: "Adobe Commerce EE" },
        { from: "Magento EE", to: "Catalog · checkout customizations" },
        { from: "Magento EE", to: "MySQL" },
      ],
      outcomes: [
        "A GCC retail catalog on Enterprise Magento rather than a CE stretch.",
        "Operational Magento work (attributes, checkout, deploys) stays in the EE tree.",
      ],
    },
    {
      slug: "khiara",
      title: "Khiara",
      tagline: "Magento multi-store",
      domain: "Commerce",
      summary:
        "Magento Community Edition multi-store setup with deploy and database operations.",
      stack: ["Magento 2", "MySQL", "Nginx"],
      highlights: [
        "Community Edition Magento stores with local deploy tooling.",
        "Multi-store Magento rather than a single website clone.",
        "MySQL and deploy scripts so stores can be reproduced locally.",
      ],
      featured: false,
      caseStudy: true,
      architecture: [
        { from: "Storefronts", to: "Magento 2 multi-store" },
        { from: "Magento 2", to: "Shared MySQL" },
        { from: "Ops", to: "Nginx · deploy scripts" },
      ],
      outcomes: [
        "More than one storefront on one Magento CE install.",
        "Deploy and database steps written down instead of living in chat history.",
      ],
    },
    {
      slug: "talypay",
      title: "TalyPay",
      tagline: "Buy now, pay later",
      domain: "Payments",
      summary:
        "Magento 2 payment module for TalyPay BNPL — checkout, webhooks, and Magento payment APIs.",
      stack: ["Magento 2", "PHP", "Webhooks"],
      highlights: [
        "Custom Magento 2 payment method: checkout, observers, and Web API.",
        "Buy-now-pay-later integration rather than a hosted redirect-only plugin.",
        "Logging and Magento payment APIs so failed authorizations can be traced.",
      ],
      featured: false,
      caseStudy: true,
      architecture: [
        { from: "Checkout", to: "TalyPay Magento module" },
        { from: "Magento 2", to: "TalyPay API" },
        { from: "TalyPay", to: "Webhooks · Magento order state" },
      ],
      outcomes: [
        "BNPL sits in Magento as a real payment method, not a CMS block.",
        "Webhook and observer paths keep Magento order status in line with TalyPay.",
      ],
    },
    {
      slug: "travelsync",
      title: "TravelSync",
      tagline: "Realtime group travel",
      domain: "Mobile",
      summary:
        "Android + Node.js stack for live group travel coordination — sockets, location, and queues.",
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
        "Kotlin Android app with Retrofit, Room, Socket.IO, and a location foreground service.",
        "Node backend with PostgreSQL, MongoDB, Redis, RabbitMQ, and Docker Compose.",
        "Realtime location and group state instead of polling a REST list.",
      ],
      featured: false,
      caseStudy: true,
      architecture: [
        { from: "Android (Kotlin)", to: "Node.js API · Socket.IO" },
        { from: "Node.js", to: "PostgreSQL · MongoDB · Redis" },
        { from: "Node.js", to: "RabbitMQ" },
      ],
      outcomes: [
        "Group travel coordination with live sockets, not a chat dump.",
        "A Docker Compose backend so the mobile app can talk to a full stack locally.",
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
      credential: "TYBSCIT — website development",
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
