export interface ServicePillar {
  title: string;
  desc: string;
  iconName: string;
  metrics: string;
  tech: string[];
}

export interface ServiceProcessStep {
  phase: string;
  title: string;
  duration: string;
  deliverables: string[];
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  index: string;
  title: string;
  highlightText: string;
  tagline: string;
  category: string;
  image: string;
  sla: string;
  avatarIcon: string;
  badge: string;
  tall?: boolean;
  heroStats: {
    label: string;
    value: string;
    desc: string;
  }[];
  overview: string[];
  specs: string[];
  architecturePillars: ServicePillar[];
  techStack: {
    name: string;
    role: string;
    badge: string;
  }[];
  processSteps: ServiceProcessStep[];
  deliverables: {
    item: string;
    detail: string;
    standard: string;
  }[];
  caseStudy: {
    client: string;
    metric: string;
    desc: string;
    tag: string;
  };
  faqs: ServiceFaq[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "web-cloud",
    index: "[01]",
    title: "WEB & ENTERPRISE",
    highlightText: "CLOUD ARCHITECTURE",
    tagline: "Ultra-scalable Next.js 15, distributed microservices, multi-region database meshes, and zero-trust cloud infrastructure.",
    category: "Web & Cloud",
    image: "/images/service_webdev.jpg",
    sla: "99.99% SLA",
    avatarIcon: "⚡",
    badge: "FULL STACK // CLOUD NATIVE 2026",
    tall: true,
    heroStats: [
      { value: "99.99%", label: "Uptime SLA", desc: "Multi-region AWS & Cloudflare edge failover" },
      { value: "<600ms", label: "Global TTI", desc: "Edge SSR with automated distributed caching" },
      { value: "10M+", label: "Req / Minute", desc: "Benchmarked load under high concurrency" },
      { value: "100%", label: "Source Code IP", desc: "Full repository ownership & CI/CD control" },
    ],
    overview: [
      "Modern enterprises cannot afford monolithic downtime or slow time-to-market. Our Web & Cloud Engineering discipline designs, builds, and maintains mission-critical cloud web applications engineered for millions of concurrent users.",
      "From event-driven microservices to real-time WebSockets and high-throughput PostgreSQL / Redis clusters, we architect resilient digital backbones that scale effortlessly under unpredictable demand while strictly adhering to SOC2 and ISO27001 compliance standards.",
    ],
    specs: [
      "Headless Next.js 15 App Router & React 19 Server Components",
      "Event-driven microservices with Kafka, RabbitMQ, and gRPC",
      "Multi-tenant PostgreSQL with Prisma ORM & Redis caching layers",
      "Zero-downtime blue/green deployment pipelines via Docker & Kubernetes",
    ],
    architecturePillars: [
      {
        title: "Edge-First Next.js Web Platforms",
        desc: "Full-stack SSR web portals engineered with atomic design systems, dynamic localized caching, and sub-second Largest Contentful Paint (LCP).",
        iconName: "Globe",
        metrics: "Sub-0.4s First Paint",
        tech: ["Next.js 15", "React 19", "Tailwind CSS", "TypeScript"],
      },
      {
        title: "Distributed Microservices & APIs",
        desc: "Modular RESTful and gRPC APIs designed with rate limiting, JWT token rotation, and autonomous horizontal auto-scaling pods.",
        iconName: "Server",
        metrics: "10k+ QPS per Node",
        tech: ["Node.js", "Go", "Docker", "Kubernetes"],
      },
      {
        title: "High-Concurrency Data Meshes",
        desc: "Automated read-write replicas, Redis cluster caching, and streaming change-data-capture pipelines for real-time analytics.",
        iconName: "Database",
        metrics: "Zero Data Inconsistency",
        tech: ["PostgreSQL", "Redis", "Kafka", "Prisma"],
      },
      {
        title: "Zero-Trust Cloud DevOps & Security",
        desc: "Infrastructure as Code (IaC) via Terraform, automated secret vaults, DDoS mitigation, and continuous vulnerability scanning.",
        iconName: "Shield",
        metrics: "SOC2 Ready",
        tech: ["AWS", "Cloudflare", "Terraform", "GitHub Actions"],
      },
    ],
    techStack: [
      { name: "Next.js 15", role: "Framework", badge: "Core" },
      { name: "React 19", role: "UI Library", badge: "Frontend" },
      { name: "TypeScript", role: "Type Safety", badge: "Language" },
      { name: "PostgreSQL", role: "Primary DB", badge: "Database" },
      { name: "Redis", role: "In-Memory Cache", badge: "Cache" },
      { name: "AWS ECS / EKS", role: "Container Mesh", badge: "Cloud" },
      { name: "Docker", role: "Containerization", badge: "DevOps" },
      { name: "Terraform", role: "IaC Automation", badge: "Infra" },
      { name: "GraphQL / REST", role: "API Gateway", badge: "API" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Architecture & Security Discovery",
        duration: "Weeks 1 - 2",
        deliverables: [
          "System Architecture Blueprint (C4 Model)",
          "Data Schema & Entity Relationship Mapping",
          "Threat Modeling & Security Vector Analysis",
          "Detailed Sprint Estimation & Milestone Matrix",
        ],
      },
      {
        phase: "Phase 02",
        title: "Design System & Frontend Prototyping",
        duration: "Weeks 3 - 4",
        deliverables: [
          "Interactive Figma Token Design System",
          "Reusable atomic React component library",
          "Responsive breakpoint visual review",
          "Micro-interactions & UX motion specifications",
        ],
      },
      {
        phase: "Phase 03",
        title: "Full-Stack Agile Sprint Engineering",
        duration: "Weeks 5 - 10",
        deliverables: [
          "Bi-weekly sprint demos with working features",
          "Isolated staging environments with automated previews",
          "Unit test coverage exceeding 85%",
          "Complete API swagger documentation",
        ],
      },
      {
        phase: "Phase 04",
        title: "Stress Testing, Pentest & Go-Live",
        duration: "Weeks 11 - 12",
        deliverables: [
          "Simulated 50k concurrent user load testing",
          "Third-party penetration test audit remediation",
          "Zero-downtime DNS cutover orchestration",
          "24/7 hypercare warranty & monitoring telemetry",
        ],
      },
    ],
    deliverables: [
      { item: "Full Source Code Repository", detail: "Clean Git history with semantic commit conventions", standard: "100% Client IP" },
      { item: "Architecture Documentation", detail: "Architecture decision records (ADRs) & API schemas", standard: "OpenAPI 3.1" },
      { item: "Automated CI/CD Workflows", detail: "Automated linting, testing, and multi-stage deployments", standard: "Zero-Downtime" },
      { item: "Production SLA Support", detail: "Direct escalation matrix and incident response SLA", standard: "15-Min Response" },
    ],
    caseStudy: {
      client: "Aura FinTech Core",
      metric: "4.8M Active Users",
      desc: "Architected a headless multi-tenant cloud portal achieving 99.998% uptime during high-volume trading surges with zero latency degradation.",
      tag: "FINTECH CLOUD MIGRATION",
    },
    faqs: [
      {
        question: "Who owns the source code and infrastructure configurations?",
        answer: "You own 100% of all intellectual property, source code, Git repositories, and cloud configurations from day one. There is zero vendor lock-in.",
      },
      {
        question: "How do you handle zero-downtime updates during production releases?",
        answer: "We configure blue/green and canary deployments via Kubernetes and AWS Target Groups. New builds are spun up, health-checked, and traffic is incrementally switched with instant rollback triggers.",
      },
      {
        question: "Can our existing in-house technical team participate in the sprint cycles?",
        answer: "Absolutely. We operate transparent sprints via Jira and shared Slack/Teams channels. Your team can review PRs, join sprint ceremonies, and co-author code seamlessly.",
      },
    ],
  },
  {
    id: "seo-search",
    index: "[02]",
    title: "SEARCH DOMINANCE &",
    highlightText: "TECHNICAL SEO",
    tagline: "Programmatic keyword clusters, schema graph architecture, automated Core Web Vitals optimization, and high-authority link acquisition.",
    category: "Digital Marketing",
    image: "/images/service_marketing.jpg",
    sla: "#1 Rank Strategy",
    avatarIcon: "🎯",
    badge: "SEARCH OPS // ALGORITHMIC VISIBILITY",
    heroStats: [
      { value: "#1", label: "Rank Targets", desc: "Top 3 SERP positioning for high-intent keywords" },
      { value: "100/100", label: "Core Web Vitals", desc: "Lighthouse mobile performance scores" },
      { value: "310%", label: "Organic Growth", desc: "Average 12-month non-brand organic search uplift" },
      { value: "150k+", label: "Indexed Entities", desc: "Programmatic SEO landing page graphs" },
    ],
    overview: [
      "Modern search engines evaluate entities, semantics, page rendering performance, and deep architectural signals rather than simple keyword stuffing. Our Technical SEO discipline engineers an impregnable organic search moat.",
      "We fuse technical engineering (SSR rendering, edge caching, structured JSON-LD knowledge graphs) with deep qualitative content frameworks that establish undeniable topical authority across competitive enterprise verticals.",
    ],
    specs: [
      "Dynamic JSON-LD schema entity graphs compliant with Google Knowledge Vault",
      "Automated server-side rendering (SSR) indexation for JavaScript single-page apps",
      "International multi-region hreflang routing with geo-targeted edge CDN rules",
      "Programmatic SEO generation pipelines targeting thousands of long-tail queries",
    ],
    architecturePillars: [
      {
        title: "Technical Site Architecture & Crawl Efficiency",
        desc: "Eliminate crawl budget waste, orphaned URLs, and redirect chains with optimized XML sitemap meshes and automated robots.txt logic.",
        iconName: "Activity",
        metrics: "99.8% Crawl Efficiency",
        tech: ["Search Console", "Screaming Frog", "Next.js SSR"],
      },
      {
        title: "Core Web Vitals Performance Engineering",
        desc: "Sub-2.5s LCP, zero CLS (Cumulative Layout Shift), and sub-100ms INP (Interaction to Next Paint) enforced via automated Lighthouse CI checks.",
        iconName: "Zap",
        metrics: "100/100 Mobile Score",
        tech: ["Lighthouse CI", "Web Vitals API", "CDN Edge"],
      },
      {
        title: "Semantic Schema & Entity Graphs",
        desc: "Rich snippet integration including Organization, Product, Article, FAQ, and HowTo structured data linked directly to Wikidata entities.",
        iconName: "Layers",
        metrics: "4x Rich Snippet Rate",
        tech: ["Schema.org", "JSON-LD", "Google Knowledge Graph"],
      },
      {
        title: "High-Authority Digital PR & Backlink Meshes",
        desc: "Tier-1 editorial outreach, white-hat data journalism studies, and corporate resource citations that build unassailable domain authority.",
        iconName: "Award",
        metrics: "DR 70+ Placements",
        tech: ["Ahrefs", "Semrush", "Editorial Networks"],
      },
    ],
    techStack: [
      { name: "Schema.org", role: "Semantic Markup", badge: "Structured Data" },
      { name: "Next.js SSR", role: "Rendering", badge: "Framework" },
      { name: "Ahrefs API", role: "Competitive Intelligence", badge: "Analytics" },
      { name: "Google Search Console", role: "Index Telemetry", badge: "Monitoring" },
      { name: "Screaming Frog", role: "Crawl Engine", badge: "Audit" },
      { name: "Cloudflare Edge", role: "Edge Workers", badge: "CDN" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Deep Technical & Crawl Audit",
        duration: "Weeks 1 - 2",
        deliverables: [
          "200-point Technical SEO Audit & Issue Priority Tracker",
          "Competitor Keyword Gap & Content Cannibalization Matrix",
          "Core Web Vitals Bottleneck Diagnostics Report",
        ],
      },
      {
        phase: "Phase 02",
        title: "Schema & Architecture Overhaul",
        duration: "Weeks 3 - 5",
        deliverables: [
          "Complete JSON-LD Entity Graph Deployment",
          "Internal Linking Hub-and-Spoke Topology Setup",
          "Rendering Pipeline & Server Response Optimization",
        ],
      },
      {
        phase: "Phase 03",
        title: "Programmatic Content & Topical Clusters",
        duration: "Weeks 6 - 9",
        deliverables: [
          "Programmatic dynamic landing page deployment",
          "Cornerstone content guides with original research data",
          "Conversion-focused on-page CRO enhancements",
        ],
      },
      {
        phase: "Phase 04",
        title: "Authority Scaling & Rank Defense",
        duration: "Ongoing",
        deliverables: [
          "Monthly editorial tier-1 backlinks",
          "Real-time rank tracking telemetry dashboards",
          "Algorithmic update defense & continuous testing",
        ],
      },
    ],
    deliverables: [
      { item: "Technical Code PRs", detail: "Direct code changes into your Git repo fixing SEO issues", standard: "Production-Ready" },
      { item: "Live Telemetry Dashboard", detail: "Automated Looker Studio dashboard tracking rank & traffic", standard: "Real-Time" },
      { item: "Editorial Link Reports", detail: "Transparent audit log of every acquired backlink placement", standard: "White-Hat Only" },
      { item: "Monthly Strategy Sprints", detail: "Sprint planning sessions addressing new search opportunities", standard: "Monthly Cadence" },
    ],
    caseStudy: {
      client: "SaaS Enterprise Metrics",
      metric: "+420% Organic Leads",
      desc: "Re-engineered a technical search stack from scratch, driving organic enterprise pipeline value from $1.2M to $6.8M within 9 months.",
      tag: "B2B SEARCH ACCELERATION",
    },
    faqs: [
      {
        question: "How long before we see measurable search ranking gains?",
        answer: "Technical fixes (crawl errors, Core Web Vitals, schema) often reflect within 3 to 6 weeks. Significant organic keyword leaps and revenue impact typically mature within 90 to 120 days.",
      },
      {
        question: "Do you implement the code fixes directly in our codebase?",
        answer: "Yes. Our engineers do not just deliver PDF audits; we submit ready-to-merge pull requests into your GitHub/GitLab repository with full test suites.",
      },
    ],
  },
  {
    id: "mobile-apps",
    index: "[03]",
    title: "MOBILE APP DEVELOPMENT &",
    highlightText: "SPATIAL UI/UX",
    tagline: "High-performance iOS and Android applications engineered with React Native, Flutter, native Swift/Kotlin modules, and buttery 60fps micro-animations.",
    category: "Web & Cloud",
    image: "/images/service_mobile.jpg",
    sla: "Native 60fps",
    avatarIcon: "📱",
    badge: "MOBILE NATIVE // CROSS PLATFORM",
    heroStats: [
      { value: "60 FPS", label: "Animation Rate", desc: "Hardware-accelerated fluid UI motion" },
      { value: "4.9 ★", label: "Store Average", desc: "Consistently rated top-tier on App Store" },
      { value: "<25MB", label: "App Bundle Size", desc: "Optimized binary footprint with tree-shaking" },
      { value: "99.9%", label: "Crash-Free Rate", desc: "Monitored through Sentry & Firebase Crashlytics" },
    ],
    overview: [
      "A consumer's first impression of your enterprise is frequently in the palm of their hand. We engineer world-class mobile applications that combine native operating system capabilities with sleek cross-platform velocity.",
      "From biometric security and offline-first data sync to instant push notifications and Apple Pay integration, we craft mobile experiences that retain users and generate quantifiable engagement.",
    ],
    specs: [
      "Cross-platform React Native & Flutter codebases with 90%+ code sharing",
      "Native Swift (iOS) and Kotlin (Android) modules for hardware-level operations",
      "Offline-first architecture with SQLite / WatermelonDB background synchronization",
      "Automated App Store and Google Play CI/CD pipelines via Fastlane",
    ],
    architecturePillars: [
      {
        title: "Cross-Platform Framework Mastery",
        desc: "Single codebase, dual native performance. We leverage React Native TurboModules and Flutter rendering engines to maximize speed.",
        iconName: "Smartphone",
        metrics: "92% Code Reuse",
        tech: ["React Native", "Flutter", "TypeScript", "Dart"],
      },
      {
        title: "Offline-First Data Sync",
        desc: "Instant UI responsiveness even on spotty networks with optimistic UI updates and background synchronization queues.",
        iconName: "RefreshCw",
        metrics: "Zero Latency UI",
        tech: ["WatermelonDB", "SQLite", "GraphQL Subscriptions"],
      },
      {
        title: "Hardware & Sensor Integration",
        desc: "Deep integration with FaceID/Biometrics, BLE Bluetooth peripherals, camera pipelines, and geolocation geofencing.",
        iconName: "Cpu",
        metrics: "Native Performance",
        tech: ["Swift", "Kotlin", "CoreBluetooth", "Apple Pay"],
      },
      {
        title: "Automated Mobile CI/CD & Testing",
        desc: "Zero-touch continuous integration delivering automated TestFlight and Google Play Internal tracks on every merged PR.",
        iconName: "Terminal",
        metrics: "15-Min Build & Release",
        tech: ["Fastlane", "GitHub Actions", "Firebase Test Lab"],
      },
    ],
    techStack: [
      { name: "React Native", role: "Cross-Platform", badge: "Core" },
      { name: "Flutter", role: "High-Fidelity Engine", badge: "Framework" },
      { name: "Swift", role: "Native iOS", badge: "Native" },
      { name: "Kotlin", role: "Native Android", badge: "Native" },
      { name: "Firebase", role: "Auth & Analytics", badge: "Backend" },
      { name: "Fastlane", role: "Release Automation", badge: "DevOps" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Mobile UX Wireframes & Prototypes",
        duration: "Weeks 1 - 3",
        deliverables: [
          "Interactive Figma mobile prototype with gesture maps",
          "Human Interface Guidelines (HIG) & Material 3 compliance",
          "Component library & design token definition",
        ],
      },
      {
        phase: "Phase 02",
        title: "Core Architecture & State Management",
        duration: "Weeks 4 - 6",
        deliverables: [
          "Mobile project scaffold with TypeScript & navigation graph",
          "Offline persistence and state management setup",
          "Biometric authentication and token refresh logic",
        ],
      },
      {
        phase: "Phase 03",
        title: "Feature Sprints & Hardware Integration",
        duration: "Weeks 7 - 11",
        deliverables: [
          "Bi-weekly TestFlight and APK builds for client validation",
          "Push notification service & payment gateway integration",
          "Deep linking & universal link routing",
        ],
      },
      {
        phase: "Phase 04",
        title: "Store Submission & Launch Support",
        duration: "Weeks 12 - 13",
        deliverables: [
          "App Store & Google Play metadata, screenshots, and review passing",
          "Crashlytics and real-time performance telemetry setup",
          "30-day post-launch warranty and bugfix SLA",
        ],
      },
    ],
    deliverables: [
      { item: "Production App Store Submissions", detail: "Approved binaries live on iOS App Store & Google Play Store", standard: "100% Approved" },
      { item: "Mobile Source Code Repo", detail: "Full React Native / Flutter source code with test suites", standard: "100% Client IP" },
      { item: "Fastlane Build Scripts", detail: "One-click deployment pipelines for staging and production", standard: "Automated" },
    ],
    caseStudy: {
      client: "Pulse Health Mobility",
      metric: "1.2M Downloads",
      desc: "Built a HIPAA-compliant cross-platform medical telemetry app achieving 4.9 stars across 32,000 App Store reviews.",
      tag: "HEALTHCARE MOBILE SUITE",
    },
    faqs: [
      {
        question: "Should we build natively with Swift/Kotlin or use React Native?",
        answer: "For 95% of enterprise applications, React Native or Flutter delivers identical 60fps performance while reducing initial development and maintenance costs by nearly 40%. For specialized hardware drivers or deep ARKit integrations, we implement custom native modules.",
      },
      {
        question: "Do you assist with the strict Apple and Google store review guidelines?",
        answer: "Yes, our team manages the entire submission process, including metadata, privacy manifests, in-app purchase compliance, and direct communication with review teams.",
      },
    ],
  },
  {
    id: "ecommerce-platforms",
    index: "[04]",
    title: "E-COMMERCE & DIGITAL",
    highlightText: "STOREFRONTS",
    tagline: "Headless Shopify Plus, custom Next.js storefronts, dynamic 3D product configurators, and high-conversion checkout flows.",
    category: "Digital Marketing",
    image: "/images/service_ecommerce.jpg",
    sla: "340% Avg ROI",
    avatarIcon: "🛍️",
    badge: "HEADLESS COMMERCE // DTC & B2B",
    heroStats: [
      { value: "340%", label: "Average ROI", desc: "Proven revenue uplift post-storefront re-architecture" },
      { value: "<1.2s", label: "Checkout Load", desc: "Instant checkout reducing cart abandonment" },
      { value: "+38%", label: "Conversion Lift", desc: "Engineered UX optimizing multi-step checkouts" },
      { value: "99.99%", label: "Flash Sale Uptime", desc: "Architected for extreme peak holiday traffic" },
    ],
    overview: [
      "In digital commerce, every 100 milliseconds of latency decreases conversions by up to 7%. We build ultra-fast, headless e-commerce platforms that combine the backend reliability of Shopify Plus or BigCommerce with custom Next.js frontend flexibility.",
      "From dynamic multi-currency checkouts to interactive 3D product configurators and custom ERP / CRM inventory synchronization, our systems turn casual browsers into loyal repeat buyers.",
    ],
    specs: [
      "Headless Shopify Plus & Hydrogen with Next.js 15 Commerce frontend",
      "Dynamic 3D product configurators powered by Three.js & WebGL",
      "One-click accelerated checkout with Apple Pay, Google Pay, and Klarna",
      "Real-time bidirectional ERP / NetSuite / SAP inventory integration",
    ],
    architecturePillars: [
      {
        title: "Headless Architecture & Edge Speed",
        desc: "Decouple your frontend from monolithic constraints. Sub-second page loads across thousands of product SKUs.",
        iconName: "Zap",
        metrics: "<0.8s Product Page Load",
        tech: ["Shopify Storefront API", "Next.js 15", "Vercel Edge"],
      },
      {
        title: "Interactive 3D Product Customization",
        desc: "Enable customers to inspect fabrics, textures, and colorways in real-time 3D, drastically reducing return rates.",
        iconName: "Layers",
        metrics: "-28% Product Returns",
        tech: ["Three.js", "WebGL", "GLTF Optimization"],
      },
      {
        title: "Conversion-Engineered Checkout",
        desc: "Frictionless checkout funnels with automatic address completion, dynamic shipping rate calculation, and multi-currency support.",
        iconName: "ShoppingCart",
        metrics: "+14% Checkout Completion",
        tech: ["Stripe", "Shopify Checkout Extensibility"],
      },
      {
        title: "Automated Omnichannel ERP Sync",
        desc: "Seamless synchronization between warehouse inventory, accounting software, and third-party logistics (3PL) providers.",
        iconName: "RefreshCw",
        metrics: "Zero Inventory Drift",
        tech: ["NetSuite", "SAP", "Custom Webhook Meshes"],
      },
    ],
    techStack: [
      { name: "Shopify Plus", role: "Commerce Backend", badge: "Commerce" },
      { name: "Next.js Commerce", role: "Storefront", badge: "Frontend" },
      { name: "Three.js", role: "3D Customizer", badge: "3D Web" },
      { name: "Stripe / Shop Pay", role: "Payments", badge: "Billing" },
      { name: "Algolia", role: "Search & Discovery", badge: "Search" },
      { name: "Klaviyo API", role: "Retention", badge: "Marketing" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "E-Commerce CRO & Data Audit",
        duration: "Weeks 1 - 2",
        deliverables: [
          "Current Cart Abandonment & Drop-off Funnel Analysis",
          "Catalog Information Architecture & Taxonomy Model",
          "Third-Party App & Script Bloat Reduction Plan",
        ],
      },
      {
        phase: "Phase 02",
        title: "Custom Storefront UI/UX Design",
        duration: "Weeks 3 - 5",
        deliverables: [
          "High-Conversion Mobile-First Product Detail Pages (PDP)",
          "Cart Drawer & Cross-Sell Recommendation Wireframes",
          "Brand Design Tokens & Responsive Typography Guides",
        ],
      },
      {
        phase: "Phase 03",
        title: "Headless Development & 3D Integration",
        duration: "Weeks 6 - 9",
        deliverables: [
          "Next.js headless frontend integration with Shopify Storefront API",
          "Interactive WebGL 3D model configurator implementation",
          "Algolia instant search and facet filtering setup",
        ],
      },
      {
        phase: "Phase 04",
        title: "Load Testing, Migration & Cutover",
        duration: "Weeks 10 - 11",
        deliverables: [
          "Customer and historical order data migration validation",
          "Payment gateway stress testing and fraud rule calibration",
          "Zero-downtime DNS transition with SEO redirect integrity",
        ],
      },
    ],
    deliverables: [
      { item: "Custom Headless Storefront", detail: "Turnkey Next.js e-commerce application with Shopify backend", standard: "Production" },
      { item: "Interactive 3D Configurator", detail: "WebGL interactive product model module", standard: "High-FPS" },
      { item: "ERP / 3PL Integration Webhooks", detail: "Automated webhook synchronization service", standard: "Zero Loss" },
    ],
    caseStudy: {
      client: "Nordic Luxury Goods",
      metric: "$14.2M First-Year GMV",
      desc: "Replaced a sluggish legacy store with a custom headless Next.js storefront, cutting page load from 4.8s to 0.7s and lifting checkout conversions by 41%.",
      tag: "HEADLESS COMMERCE OVERHAUL",
    },
    faqs: [
      {
        question: "Why should we choose headless commerce over a standard Shopify theme?",
        answer: "Standard themes are often slowed down by dozens of third-party plugins and app scripts. A headless Next.js frontend gives you total visual freedom, sub-second global speed, and unlimited custom functionality while retaining Shopify's battle-tested checkout and payment compliance.",
      },
      {
        question: "Will our historical orders and customer accounts be migrated safely?",
        answer: "Yes. We execute automated zero-loss migration scripts that preserve customer records, order histories, loyalty points, and SEO redirects without disruption.",
      },
    ],
  },
  {
    id: "brand-identity",
    index: "[05]",
    title: "BRAND STRATEGY &",
    highlightText: "DESIGN SYSTEMS",
    tagline: "Comprehensive brand identities, typography guidelines, interactive Figma design systems, motion graphics, and corporate design tokens.",
    category: "Design",
    image: "/images/service_branding.jpg",
    sla: "Zero Design Debt",
    avatarIcon: "✨",
    badge: "CREATIVE DIRECTION // DESIGN TOKENS",
    heroStats: [
      { value: "100%", label: "Vector Geometry", desc: "Mathematically balanced responsive logo marks" },
      { value: "500+", label: "Figma Components", desc: "Production-ready tokenized design libraries" },
      { value: "AAA", label: "WCAG 2.2 Compliant", desc: "Rigorous accessibility contrast standards" },
      { value: "120+", label: "Design Guidelines", desc: "Full corporate identity guidelines manual" },
    ],
    overview: [
      "In a crowded digital marketplace, iconic branding creates immediate emotional resonance and perceived market value. Our Brand Strategy & Design Systems discipline bridges the gap between artistic vision and engineering execution.",
      "We build living design systems that align marketing, product design, and software engineering teams. Every color token, typography scale, and layout grid is meticulously architected to scale across web, mobile, print, and physical environments.",
    ],
    specs: [
      "Comprehensive Figma design system with automated design token exports to CSS/Tailwind",
      "Responsive vector logo marks, monograms, and animated SVG iconography",
      "Curated typography pairings with licensed enterprise font hierarchies",
      "WCAG 2.2 AAA accessibility compliance across all digital color palettes",
    ],
    architecturePillars: [
      {
        title: "Visual Identity & Logo Engineering",
        desc: "Constructed on mathematical grid foundations to ensure perfection from 16px favicons to billboard projections.",
        iconName: "Sparkles",
        metrics: "Infinite Resolution",
        tech: ["Vector Geometry", "SVG", "Figma", "Illustrator"],
      },
      {
        title: "Atomic Figma Design Systems",
        desc: "Tokenized color palettes, typography scales, spacing units, and component variants that map 1:1 with frontend code.",
        iconName: "Layers",
        metrics: "1:1 Code Alignment",
        tech: ["Design Tokens", "Figma Variables", "Tailwind CSS"],
      },
      {
        title: "Motion Guidelines & Micro-Animations",
        desc: "Define physics-based easing curves, hover behaviors, and page transitions for digital product consistency.",
        iconName: "Zap",
        metrics: "Spring Physics Spec",
        tech: ["GSAP Motion", "Lottie", "After Effects"],
      },
      {
        title: "Corporate Guidelines & Brand Bible",
        desc: "Exhaustive documentation specifying clear-space rules, incorrect usages, voice and tone, and packaging guidelines.",
        iconName: "Award",
        metrics: "120-Page Manual",
        tech: ["Interactive Brand Portal", "PDF Manual"],
      },
    ],
    techStack: [
      { name: "Figma", role: "Design System", badge: "Core" },
      { name: "Design Tokens", role: "Design/Code Bridge", badge: "Tokens" },
      { name: "Adobe Illustrator", role: "Vector Drafting", badge: "Vector" },
      { name: "After Effects", role: "Motion Spec", badge: "Animation" },
      { name: "Tailwind CSS", role: "Code Implementation", badge: "CSS" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Brand Archetype & Market Positioning",
        duration: "Weeks 1 - 2",
        deliverables: [
          "Competitive Landscape Audit & Visual Moodboards",
          "Brand Personality, Core Values & Tone-of-Voice Manifesto",
          "Customer Persona Emotional Alignment Matrix",
        ],
      },
      {
        phase: "Phase 02",
        title: "Logo Exploration & Geometric System",
        duration: "Weeks 3 - 4",
        deliverables: [
          "3 Distinct Creative Direction Concept Presentations",
          "Vector Geometry Construction & Clear Space Ratios",
          "Monochrome, Dark Mode & Favicon Adaptations",
        ],
      },
      {
        phase: "Phase 03",
        title: "Digital Design System & Tokens",
        duration: "Weeks 5 - 7",
        deliverables: [
          "Tokenized Figma library with auto-layout variants",
          "Exportable JSON design tokens for frontend engineers",
          "Accessibility contrast compliance validation report",
        ],
      },
      {
        phase: "Phase 04",
        title: "Brand Guidelines & Asset Delivery",
        duration: "Weeks 8 - 9",
        deliverables: [
          "Comprehensive Digital Brand Portal & PDF Brand Bible",
          "Corporate stationery, slide deck & business card templates",
          "Complete vector asset export package (SVG, EPS, PNG)",
        ],
      },
    ],
    deliverables: [
      { item: "Figma Component Library", detail: "Organized Figma file with auto-layout and variant states", standard: "Production" },
      { item: "Design Tokens JSON", detail: "Tokens ready to be imported into Tailwind or CSS-in-JS", standard: "W3C Spec" },
      { item: "Brand Identity Manual", detail: "Detailed brand guidelines covering digital, physical, and print", standard: "Complete" },
    ],
    caseStudy: {
      client: "Quantum Robotics OS",
      metric: "Series B $28M Raised",
      desc: "Created a futuristic identity and unified design system that aligned hardware robotics documentation with a cutting-edge web presence.",
      tag: "DEEPTECH REBRANDING",
    },
    faqs: [
      {
        question: "How do your design tokens connect with our development team?",
        answer: "We export design tokens in standard W3C JSON format that syncs directly with Tailwind CSS, CSS Variables, or React Native styling tokens, eliminating manual handoff discrepancies.",
      },
      {
        question: "Do you supply production-ready vector assets for all screen densities?",
        answer: "Yes, every mark, icon, and asset is delivered in responsive SVG, high-res PNG, print-ready PDF/EPS with full Pantone color specifications.",
      },
    ],
  },
  {
    id: "social-media",
    index: "[06]",
    title: "SOCIAL MEDIA &",
    highlightText: "COMMUNITY BUILDING",
    tagline: "High-virality organic video production, executive LinkedIn branding, influencer campaigns, and 24/7 engagement retainers.",
    category: "Social Media",
    image: "/images/service_social.jpg",
    sla: "24/7 Monitoring",
    avatarIcon: "🌐",
    badge: "OMNICHANNEL GROWTH // CREATOR LABS",
    heroStats: [
      { value: "48M+", label: "Viral Views", desc: "Generated across client TikTok & Instagram Reels" },
      { value: "3.8x", label: "Engagement Rate", desc: "Above standard B2B / B2C industry benchmarks" },
      { value: "24/7", label: "Community Ops", desc: "Real-time comment and DM sentiment response" },
      { value: "120+", label: "Assets / Month", desc: "Custom produced reels, carousels & infographics" },
    ],
    overview: [
      "Building a commanding social media footprint is no longer about generic scheduled posts. It requires high-velocity short-form video production, algorithmically tuned storytelling, and genuine conversational community management.",
      "Our Social Media & Community Building practice turns passive followers into passionate brand advocates. We handle scripting, filming, editing, distribution, and community moderation across TikTok, Instagram, YouTube, and LinkedIn.",
    ],
    specs: [
      "Custom 9:16 short-form video production with dynamic kinetic typography",
      "Executive LinkedIn thought leadership ghostwriting and carousels",
      "24/7 sentiment analysis, comment moderation, and crisis response",
      "Vetted creator and influencer partnership negotiation and execution",
    ],
    architecturePillars: [
      {
        title: "Short-Form Video Production Engine",
        desc: "Scripted, shot, and edited by native creators with trend-jacking pacing, audio hooks, and visual sound design.",
        iconName: "Zap",
        metrics: "Weekly Deliveries",
        tech: ["Premiere Pro", "CapCut", "After Effects"],
      },
      {
        title: "Executive LinkedIn Thought Leadership",
        desc: "Build founder and C-suite authority with data-driven perspectives, personal anecdotes, and high-engagement carousels.",
        iconName: "Users",
        metrics: "+280% Profile Views",
        tech: ["LinkedIn Creator Analytics", "Shield App"],
      },
      {
        title: "24/7 Social Telemetry & Community Ops",
        desc: "Continuous brand sentiment monitoring, rapid customer support escalation, and engaging comment section management.",
        iconName: "Activity",
        metrics: "<15 Min Response",
        tech: ["Brand24", "Sprout Social", "Zendesk"],
      },
      {
        title: "Targeted Paid Amplification",
        desc: "Boosting organic top-performing creative with precision retargeting ads to maximize ROAS and follower conversion.",
        iconName: "BarChart3",
        metrics: "4.2x ROAS Average",
        tech: ["Meta Ads Manager", "TikTok Spark Ads"],
      },
    ],
    techStack: [
      { name: "Adobe Premiere", role: "Video Editing", badge: "Video" },
      { name: "After Effects", role: "Motion Design", badge: "Motion" },
      { name: "Brand24", role: "Social Listening", badge: "Analytics" },
      { name: "Sprout Social", role: "Distribution", badge: "SaaS" },
      { name: "Meta Ads Manager", role: "Paid Boost", badge: "Ads" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Social Audit & Creative Strategy",
        duration: "Weeks 1 - 2",
        deliverables: [
          "Competitor Content Strategy & Gap Analysis",
          "Creative Pillar Framework & Content Buckets",
          "Visual Asset Template Kit & Tone of Voice Guidelines",
        ],
      },
      {
        phase: "Phase 02",
        title: "Batch Production & Creator Sprints",
        duration: "Weeks 3 - 4",
        deliverables: [
          "Batch filming of 20+ short-form vertical reels",
          "Kinetic typography, sound effects, and color grading",
          "30-day comprehensive content calendar approval",
        ],
      },
      {
        phase: "Phase 03",
        title: "Omnichannel Publishing & Moderation",
        duration: "Ongoing",
        deliverables: [
          "Multi-platform scheduled publishing at peak audience hours",
          "Active community engagement in comment threads and DMs",
          "Real-time trend-jacking content deployment",
        ],
      },
      {
        phase: "Phase 04",
        title: "Analytics Review & Strategy Iteration",
        duration: "Monthly",
        deliverables: [
          "Monthly comprehensive performance and ROI reports",
          "Creative iteration roadmap based on top-performing hooks",
          "Audience demographic and conversion tracking",
        ],
      },
    ],
    deliverables: [
      { item: "Monthly Content Package", detail: "20-30 high-definition edited short-form videos and graphics", standard: "Monthly" },
      { item: "Active Community Moderation", detail: "Daily comment and direct message monitoring", standard: "24/7" },
      { item: "Performance Analytics Dashboard", detail: "Live dashboard tracking reach, engagement, and follower growth", standard: "Real-Time" },
    ],
    caseStudy: {
      client: "AeroBeverage Co.",
      metric: "12M Views in 60 Days",
      desc: "Produced an organic short-form viral campaign that scaled TikTok presence from 0 to 180k followers with zero paid ad spend.",
      tag: "DTC VIRAL CAMPAIGN",
    },
    faqs: [
      {
        question: "Do you handle filming or do we need to supply footage?",
        answer: "We offer both: our studio team can handle end-to-end concepting, studio shoots, and editing, or we can transform raw footage provided by your internal team into viral-ready assets.",
      },
      {
        question: "How do you ensure our brand's technical accuracy in posts?",
        answer: "Every piece of content undergoes a strict two-stage review process before entering your approval queue. Nothing is published without your final authorization.",
      },
    ],
  },
  {
    id: "commercial-media",
    index: "[07]",
    title: "COMMERCIAL FILM &",
    highlightText: "STUDIO PHOTOGRAPHY",
    tagline: "High-end 8K commercial video production, industrial cinematography, studio photography, color grading, and CGI product reveals.",
    category: "Media",
    image: "/images/service_media.jpg",
    sla: "8K Cinema Spec",
    avatarIcon: "🎬",
    badge: "CINEMATOGRAPHY // 8K PRODUCTION",
    heroStats: [
      { value: "8K RAW", label: "Capture Quality", desc: "Cinema-grade RED & ARRI digital cinema sensors" },
      { value: "100%", label: "In-House Set", desc: "Sound stages, studio lighting and grip packages" },
      { value: "Dolby", label: "Mastering Spec", desc: "Dolby Atmos sound design & HDR color grading" },
      { value: "Multi", label: "Format Delivery", desc: "Simultaneous 16:9 widescreen and 9:16 vertical cuts" },
    ],
    overview: [
      "Nothing commands immediate market authority like premium cinematic visuals. Our Commercial Film & Media Production arm delivers broadcast-grade commercials, corporate documentaries, and luxury studio product photography.",
      "From initial scriptwriting and storyboard conception to set design, drone cinematography, and DaVinci Resolve color mastering, we create compelling visual assets that elevate your brand narrative into high art.",
    ],
    specs: [
      "RED V-Raptor and ARRI Alexa cinema cameras with anamorphic lenses",
      "Full studio lighting rigs (Aputure, ARRI SkyPanels, Profoto strobes)",
      "DaVinci Resolve Studio color grading calibrated to ACES standards",
      "Original score composition and 5.1 surround / Dolby Atmos sound mix",
    ],
    architecturePillars: [
      {
        title: "Commercial Film Direction",
        desc: "Scriptwriting, casting, location scouting, and multi-camera production for national broadcast and digital ad campaigns.",
        iconName: "Award",
        metrics: "Broadcast Spec",
        tech: ["ARRI Alexa", "RED V-Raptor", "Anamorphic"],
      },
      {
        title: "High-End Studio Product Photography",
        desc: "Macro optical captures, tabletop motorized motion control, and high-fashion model shoots with flawless retouching.",
        iconName: "Sparkles",
        metrics: "100MP Resolution",
        tech: ["Hasselblad", "Profoto", "Capture One"],
      },
      {
        title: "DaVinci Color & Visual Effects (VFX)",
        desc: "Precision color grading on calibrated OLED master monitors with seamless CGI extensions and clean-up.",
        iconName: "Layers",
        metrics: "ACES Color Pipeline",
        tech: ["DaVinci Resolve", "Blender 3D", "Nuke"],
      },
      {
        title: "Sound Design & Audio Engineering",
        desc: "Commercial sound design, foley recording, voiceover casting, and master audio mixing for pristine immersion.",
        iconName: "Zap",
        metrics: "Dolby Mastered",
        tech: ["Pro Tools", "Dolby Atmos", "Custom Scoring"],
      },
    ],
    techStack: [
      { name: "RED / ARRI", role: "Cinema Cameras", badge: "Hardware" },
      { name: "DaVinci Resolve", role: "Color Grading", badge: "Post" },
      { name: "Capture One Pro", role: "Studio Tethering", badge: "Photo" },
      { name: "Pro Tools", role: "Audio Mixing", badge: "Audio" },
      { name: "Blender 3D", role: "CGI & Motion", badge: "VFX" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Concept Development & Pre-Production",
        duration: "Weeks 1 - 2",
        deliverables: [
          "Director's Treatment, Script & Visual Storyboards",
          "Location Scouting, Permits & Talent Casting",
          "Production Design & Prop Sourcing Plan",
        ],
      },
      {
        phase: "Phase 02",
        title: "Principal Photography & Studio Shoot",
        duration: "Week 3",
        deliverables: [
          "On-location or in-studio multi-camera film shoot",
          "Live wireless client video monitoring feeds",
          "Daily secure backup verification (3-2-1 rule)",
        ],
      },
      {
        phase: "Phase 03",
        title: "Editorial Post-Production & Color",
        duration: "Weeks 4 - 5",
        deliverables: [
          "Offline narrative rough cut and pacing review",
          "ACES-compliant DaVinci Resolve color master",
          "Visual effects, motion graphics, and title cards",
        ],
      },
      {
        phase: "Phase 04",
        title: "Sound Design & Master Delivery",
        duration: "Week 6",
        deliverables: [
          "Dolby Atmos audio master and sound effect foley",
          "Multi-aspect ratio exports (16:9, 9:16, 1:1, 4:5)",
          "Archival ProRes 4444 and high-bitrate Web masters",
        ],
      },
    ],
    deliverables: [
      { item: "Broadcast Commercial Master", detail: "Full 8K / 4K ProRes 4444 master with clean audio stems", standard: "Broadcast Ready" },
      { item: "Social Cutdowns Package", detail: "Optimized vertical 9:16 cuts with burnt-in captions", standard: "All Formats" },
      { item: "Retouched Product Still Gallery", detail: "High-resolution RAW & TIFF product photography", standard: "Print Ready" },
    ],
    caseStudy: {
      client: "Solari Hypercars",
      metric: "Over 8.4M Views",
      desc: "Produced a cinematic 8K reveal film shot in the Swiss Alps, resulting in full vehicle allocation pre-orders within 48 hours of premiere.",
      tag: "LUXURY COMMERCIAL FILM",
    },
    faqs: [
      {
        question: "Can we review the shoot live if our executives cannot travel to the set?",
        answer: "Yes, we set up encrypted real-time video streaming with low-latency client monitors so your team can approve shots in real-time from anywhere in the world.",
      },
      {
        question: "Do you handle commercial music licensing and voiceover talent contracts?",
        answer: "We handle 100% of talent releases, music synchronization licenses, and SAG-AFTRA or non-union contracts, ensuring complete commercial indemnity.",
      },
    ],
  },
  {
    id: "dedicated-squads",
    index: "[08]",
    title: "DEDICATED AGENCY SQUADS &",
    highlightText: "ENTERPRISE RETAINERS",
    tagline: "Dedicated cross-functional teams of principal engineers, UI/UX designers, and technical product managers embedded directly into your organization.",
    category: "Web & Cloud",
    image: "/images/agency_team_studio.jpg",
    sla: "Guaranteed SLA",
    avatarIcon: "👥",
    badge: "TEAM EMBEDDING // AGILE VELOCITY",
    heroStats: [
      { value: "2 Weeks", label: "Sprint Cycles", desc: "Transparent bi-weekly sprint demos and deployments" },
      { value: "100%", label: "IP Ownership", desc: "All created code, docs, and assets belong to you" },
      { value: "0 HR", label: "Recruiting Overhead", desc: "Pre-vetted senior engineers ready to deploy in 5 days" },
      { value: "<2 Hours", label: "Direct Support SLA", desc: "Direct Slack channel connection to tech leads" },
    ],
    overview: [
      "Scaling internal engineering and design capacity can take months of expensive recruiting, interviewing, and onboarding. Our Dedicated Squads model provides turnkey, high-velocity engineering pods that integrate seamlessly into your existing workflows.",
      "Whether you need an entire team to build a new SaaS product from scratch or specialized senior engineers to accelerate your core roadmap, we provide transparent, battle-tested talent with guaranteed sprint velocity.",
    ],
    specs: [
      "Senior full-stack developers (Next.js, React, Node.js, Python, Go, Rust)",
      "Lead UI/UX designers, design system engineers, and product strategists",
      "Dedicated Scrum Master / Agile Project Manager providing weekly burndown metrics",
      "Direct Slack/Teams integration with synchronized working timezones",
    ],
    architecturePillars: [
      {
        title: "Turnkey Cross-Functional Pods",
        desc: "Complete pods consisting of 1 Product Manager, 2-4 Full-Stack Engineers, 1 UI/UX Designer, and 1 QA Automation Lead.",
        iconName: "Users",
        metrics: "Ready in 5 Days",
        tech: ["Agile Pods", "Jira", "GitHub"],
      },
      {
        title: "Transparent Velocity & Burndown",
        desc: "Full visibility into sprint boards, committed story points, cycle times, and bi-weekly release milestones.",
        iconName: "BarChart3",
        metrics: "94% Sprint Completion",
        tech: ["Jira Software", "Linear", "Confluence"],
      },
      {
        title: "Direct Real-Time Collaboration",
        desc: "No intermediaries. Your technical leaders collaborate directly with our engineers via shared Slack channels and daily standups.",
        iconName: "Terminal",
        metrics: "Shared Channels",
        tech: ["Slack Connect", "Microsoft Teams", "Zoom"],
      },
      {
        title: "Elastic Team Scaling",
        desc: "Ramp up or ramp down squad size flexibly as your roadmap demands evolve without hiring or severance friction.",
        iconName: "RefreshCw",
        metrics: "Flexible Retainers",
        tech: ["Monthly Cadence", "Transparent Invoicing"],
      },
    ],
    techStack: [
      { name: "Jira / Linear", role: "Agile Project Mgmt", badge: "Agile" },
      { name: "GitHub Enterprise", role: "Version Control", badge: "DevOps" },
      { name: "Slack Connect", role: "Real-time Comms", badge: "Collab" },
      { name: "Figma", role: "Design Collaboration", badge: "Design" },
      { name: "Notion / Confluence", role: "Documentation", badge: "Docs" },
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Roadmap Alignment & Squad Tailoring",
        duration: "Week 1",
        deliverables: [
          "Technical Stack & Development Environment Assessment",
          "Pod Member Selection & Role Matching",
          "Access Provisioning (GitHub, Jira, AWS, Slack)",
        ],
      },
      {
        phase: "Phase 02",
        title: "Backlog Refinement & Sprint 0 Setup",
        duration: "Week 2",
        deliverables: [
          "User Story Mapping & Backlog Grooming Session",
          "CI/CD Pipeline Setup & Local Dev Environment Config",
          "Definition of Done (DoD) Agreement & Branching Strategy",
        ],
      },
      {
        phase: "Phase 03",
        title: "Continuous Agile Sprint Execution",
        duration: "Ongoing (2-Week Sprints)",
        deliverables: [
          "Daily async/sync standups and Jira board updates",
          "Bi-weekly live demo of completed production features",
          "Sprint retrospective and continuous velocity improvement",
        ],
      },
      {
        phase: "Phase 04",
        title: "Quarterly Executive Review & Roadmap Planning",
        duration: "Quarterly",
        deliverables: [
          "Quarterly technical velocity and output retrospective",
          "Technical debt audit and refactoring recommendations",
          "Strategic roadmap alignment for upcoming quarters",
        ],
      },
    ],
    deliverables: [
      { item: "Dedicated Engineering Pod", detail: "Full-time senior engineers and designers dedicated exclusively to your product", standard: "Full-Time" },
      { item: "Continuous Code Releases", detail: "Tested, documented, and reviewed PRs merged directly to your repository", standard: "Bi-Weekly" },
      { item: "Sprint Reporting & Metrics", detail: "Clear burndown charts, velocity tracking, and roadmap forecasts", standard: "Transparent" },
    ],
    caseStudy: {
      client: "FinGrid Cloud Solutions",
      metric: "14-Month Retainer Partnership",
      desc: "Embedded a 6-person dedicated engineering and design squad, accelerating their roadmap by 9 months and shipping their v2.0 enterprise cloud product ahead of schedule.",
      tag: "LONG-TERM SQUAD EMBED",
    },
    faqs: [
      {
        question: "How quickly can a dedicated squad be onboarded and coding?",
        answer: "Our pre-vetted senior engineers can be onboarded, access-provisioned, and actively pushing pull requests into your codebase within 5 to 7 business days.",
      },
      {
        question: "Can we adjust the squad size or skill mix as priorities change?",
        answer: "Yes. Our retainer agreements offer monthly flexibility to add specialized talent (such as security specialists, 3D WebGL artists, or mobile engineers) as your roadmap demands evolve.",
      },
    ],
  },
];

export function getServiceById(id: string): ServiceDetail | undefined {
  return servicesData.find((s) => s.id === id);
}
