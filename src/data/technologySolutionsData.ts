import { BeforeAfterData } from "@/components/BeforeAfterSection";
import { UnifiedDetailItem, RelatedItemSummary } from "@/components/UnifiedDetailsView";

export interface TechnologySubCategorySummary {
  id: string;
  index: string;
  title: string;
  tagline: string;
  desc: string;
  sla: string;
  tags: string[];
  href: string;
  badge?: string;
  featured?: boolean;
  image: string;
}

export const technologySubCategories: TechnologySubCategorySummary[] = [
  {
    id: "web-development",
    index: "01",
    title: "Custom Web Development",
    tagline: "Next.js 15, React 19 & High-Performance Web Applications",
    desc: "Full-stack enterprise web platforms engineered with Next.js 15 App Router, React 19 Server Components, 90+ Core Web Vitals, and dynamic 60 FPS spatial micro-interactions.",
    sla: "99.99% UPTIME SLA",
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "REST/GraphQL"],
    href: "/technology-solution/web-development",
    badge: "MOST POPULAR // FEATURED SPEC",
    featured: true,
    image: "/images/service_webdev.jpg",
  },
  {
    id: "cloud-infrastructure-devops",
    index: "02",
    title: "Cloud Infrastructure & DevOps",
    tagline: "Kubernetes Orchestration, Multi-Region Mesh & Zero-Trust Cloud",
    desc: "Production-grade cloud architecture on AWS and GCP with automated CI/CD pipelines, blue/green deployments, Terraform IaC, and 24/7 telemetry monitoring.",
    sla: "<15m INCIDENT RESPONSE",
    tags: ["Docker", "Kubernetes", "Terraform", "AWS / GCP", "GitHub Actions"],
    href: "/services/cloud-infrastructure-devops",
    badge: "ENTERPRISE GRADE",
    image: "/images/service_cloud_color.jpg",
  },
  {
    id: "enterprise-software-solutions",
    index: "03",
    title: "Enterprise Software Solutions",
    tagline: "Custom SaaS Engines, Internal ERP & Mission-Critical Systems",
    desc: "Bespoke SaaS architectures, high-load distributed backends, internal operations software, and relational database partitioning engineered for long-term scalability.",
    sla: "100% IP OWNERSHIP",
    tags: ["Microservices", "PostgreSQL", "Node.js / Go", "SOC2 Compliant"],
    href: "/services/enterprise-software-solutions",
    badge: "SOC2 COMPLIANT",
    image: "/images/nebula_cloud_os_3d.jpg",
  },
  {
    id: "ecommerce-platform-engineering",
    index: "04",
    title: "E-Commerce Platform Engineering",
    tagline: "Headless Shopify Plus & High-Volume Transaction Engines",
    desc: "Headless commerce storefronts, custom checkout engines, and real-time inventory synchronization optimized for high-volume flash sales and compounding conversions.",
    sla: "1.2s CHECKOUT SPEED",
    tags: ["Headless Shopify", "Stripe API", "Next.js Edge", "Algolia Search"],
    href: "/services/ecommerce-platform-engineering",
    image: "/images/service_branding.jpg",
  },
  {
    id: "mobile-applications",
    index: "05",
    title: "Mobile Application Development",
    tagline: "Native iOS & Android Engineering with 60 FPS Fluidity",
    desc: "High-performance cross-platform and native mobile apps built with Flutter and React Native, featuring offline-first data sync and biometric security.",
    sla: "60 FPS NATIVE FLUIDITY",
    tags: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
    href: "/services/mobile-apps",
    image: "/images/service_webdev.jpg",
  },
  {
    id: "microservices-api-mesh",
    index: "06",
    title: "Distributed Microservices & APIs",
    tagline: "Event-Driven gRPC, Kafka Queues & High-Throughput APIs",
    desc: "Decoupled distributed services communicating via high-throughput gRPC and Kafka event streams, protected by rate-limited API gateways and Redis caching meshes.",
    sla: "10K+ QPS PER NODE",
    tags: ["Golang", "Node.js", "Apache Kafka", "gRPC", "Redis Cluster"],
    href: "/services/web-cloud",
    image: "/images/project_ai.jpg",
  },
];

export const webDevelopmentBeforeAfter: BeforeAfterData = {
  badge: "ENTERPRISE WEB BENCHMARK 2026",
  title: "Modern Next.js 15 Web Platform",
  highlightText: "vs. Legacy Architecture",
  description: "Direct comparative evaluation between a legacy single-server monolithic application and our modern Next.js 15 edge-rendered reactive web platform.",
  beforeLabel: "Legacy Monolith (Pre-Transformation)",
  afterLabel: "RnD Next.js 15 Platform (Post-Transformation)",
  beforeImage: "/images/about_blank_screen.jpg",
  afterImage: "/images/service_webdev.jpg",
  beforeTagline: "3.8s TTFB, single-server crash risk, 38 Lighthouse",
  afterTagline: "Sub-380ms Edge SSR, 99.99% SLA, 99 Lighthouse Score",
  metrics: [
    {
      label: "Time to First Byte (TTFB)",
      before: "3.82s",
      after: "0.38s",
      improvement: "90% Faster",
      subtext: "Global Cloudflare Edge SSR cache",
      icon: "zap",
    },
    {
      label: "Mobile Lighthouse Score",
      before: "38 / 100",
      after: "99 / 100",
      improvement: "+161% Score",
      subtext: "Zero layout shift & sub-100ms hydration",
      icon: "gauge",
    },
    {
      label: "E-Commerce / Conversion Rate",
      before: "1.2%",
      after: "4.8%",
      improvement: "+300% Lift",
      subtext: "Fast checkout & tactile micro-interactions",
      icon: "trending",
    },
    {
      label: "Max Concurrency Load",
      before: "250 Req/sec",
      after: "10M+ Req/min",
      improvement: "Enterprise Grade",
      subtext: "PostgreSQL read-replicas & Redis mesh",
      icon: "shield",
    },
  ],
  legacyPoints: [
    "Monolithic single-point-of-failure server crashing during flash marketing traffic",
    "Sluggish 3.8s TTFB causing massive mobile abandonment before initial render",
    "Cumulative Layout Shift (CLS > 0.35) frustrating users with jumping UI elements",
    "Opaque manual deployments requiring midnight maintenance downtime windows",
  ],
  modernPoints: [
    "Distributed Next.js 15 edge serverless architecture with auto-healing pods",
    "Sub-380ms worldwide Time to First Byte with intelligent stale-while-revalidate",
    "Zero layout shift (CLS 0.00) with rock-solid responsive typography tokens",
    "Zero-downtime blue/green deployments backed by our 99.99% enterprise SLA",
  ],
};

export const webDevelopmentUnifiedDetail: UnifiedDetailItem = {
  id: "web-development",
  index: "01",
  title: "CUSTOM WEB DEVELOPMENT",
  highlightText: "& REACT 19 ARCHITECTURE",
  tagline: "High-performance full-stack web platforms, edge-rendered Next.js 15 architectures, dynamic 3D web experiences, and micro-interactive enterprise portals built for maximum conversion and sub-second speed.",
  category: "Technology Solutions",
  image: "/images/service_webdev.jpg",
  galleryImages: [
    "/images/service_webdev.jpg",
    "/images/nebula_cloud_os_3d.jpg",
    "/images/service_cloud_color.jpg",
  ],
  sla: "99.99% UPTIME SLA",
  badge: "NEXT.JS 15 // EDGE NATIVE 2026",
  overview: [
    "In an era where every 100 milliseconds of latency directly drains conversion rates and brand trust, modern enterprises cannot afford monolithic downtime, bloated client-side bundles, or sluggish time-to-first-byte. Our Custom Web Development discipline engineers mission-critical, edge-rendered web platforms designed to process millions of concurrent transactions with unwavering reliability.",
    "We fuse the cutting-edge capabilities of Next.js 15 App Router, React 19 Server Components, and TypeScript with atomic design systems, GPU-accelerated spatial micro-interactions, and multi-region database caching. The result is a web application that feels instantaneous to the user, scores 95+ across all Core Web Vitals, and scales effortlessly under viral traffic surges.",
    "Every line of code is authored with strict contract safety, zero-trust security headers, and comprehensive automated test suites. We deliver 100% intellectual property ownership from day one, backed by dedicated architectural support and transparent sprint telemetry.",
  ],
  quote: {
    text: "RnD transformed our legacy web portal into a sub-second Next.js 15 platform. Our mobile conversion shot up by 300% and we handled Black Friday peak concurrency with zero degradation.",
    author: "VP of Digital Engineering • FinTech Scaleup",
  },
  deliverables: [
    {
      item: "Full Git Source Code Repository",
      detail: "Clean Git history with semantic commit conventions, strict TypeScript contracts, and modular architecture.",
      standard: "100% Client IP",
    },
    {
      item: "Next.js 15 App Router Architecture",
      detail: "Server Components (RSC), dynamic edge streaming, and automated stale-while-revalidate caching layers.",
      standard: "Sub-400ms TTFB",
    },
    {
      item: "Atomic Design System & Component Library",
      detail: "Tailwind CSS design tokens, responsive breakpoints, accessible ARIA primitives, and dark-mode optimization.",
      standard: "Figma to Code",
    },
    {
      item: "Automated CI/CD Workflows",
      detail: "Automated linting, Jest unit tests, Cypress E2E pipelines, and zero-downtime blue/green deployments.",
      standard: "Zero Downtime",
    },
    {
      item: "Production SLA Support & Telemetry",
      detail: "Real-time error monitoring via Sentry, Datadog performance dashboards, and direct engineer escalation.",
      standard: "99.99% SLA",
    },
  ],
  scope: [
    {
      number: "01",
      title: "Systems Architecture & Discovery",
      desc: "Deep analysis of system bottlenecks, user telemetry, schema design, and edge caching strategies tailored to your enterprise roadmap.",
      iconName: "Compass",
    },
    {
      number: "02",
      title: "Edge-First Next.js 15 Architecture",
      desc: "Full-stack SSR web portals engineered with React 19 Server Components, atomic component tokens, and sub-second Largest Contentful Paint (LCP).",
      iconName: "Globe",
    },
    {
      number: "03",
      title: "Spatial 3D & Micro-Interactions",
      desc: "Tactile web interactions, 60 FPS WebGL canvas animations via Three.js, and kinetic typography that dramatically elevates engagement.",
      iconName: "Layers",
    },
    {
      number: "04",
      title: "High-Concurrency APIs & Data Mesh",
      desc: "Decoupled RESTful and GraphQL endpoints, Prisma ORM data modeling, Redis caching clusters, and automated database read-replicas.",
      iconName: "Database",
    },
    {
      number: "05",
      title: "Continuous Delivery & GitOps Pipeline",
      desc: "Multi-stage automated pipelines via GitHub Actions, Docker containerization, blue/green production rollouts, and instant rollbacks.",
      iconName: "Server",
    },
    {
      number: "06",
      title: "Zero-Trust Security & Compliance Hardening",
      desc: "Bank-grade OWASP Top 10 mitigation, strict Content Security Policies (CSP), rate limiting, and SOC2-compliant access governance.",
      iconName: "Shield",
    },
  ],
  techStack: [
    { name: "Next.js 15", role: "Framework", badge: "Core" },
    { name: "React 19", role: "UI Library", badge: "Frontend" },
    { name: "TypeScript", role: "Type Safety", badge: "Language" },
    { name: "Tailwind CSS", role: "Styling Engine", badge: "Design" },
    { name: "Node.js", role: "Backend Runtime", badge: "Runtime" },
    { name: "PostgreSQL", role: "Relational DB", badge: "Database" },
    { name: "Redis", role: "In-Memory Cache", badge: "Speed" },
    { name: "Docker", role: "Containerization", badge: "DevOps" },
    { name: "Cloudflare", role: "Global Edge CDN", badge: "Edge" },
    { name: "Three.js", role: "3D WebGL Engine", badge: "Visuals" },
    { name: "Prisma", role: "Type-Safe ORM", badge: "Data" },
    { name: "GraphQL / REST", role: "API Protocol", badge: "API" },
  ],
  faqs: [
    {
      question: "Why do you recommend Next.js 15 and React 19 for enterprise web applications?",
      answer: "Next.js 15 with React 19 Server Components offers the optimal balance between initial page render speed (sub-second TTFB) and rich interactive client capabilities. By rendering static and heavy data queries on the edge server, client bundle sizes drop by up to 70%, boosting mobile conversion rates and SEO rankings.",
    },
    {
      question: "Who owns the source code and deployment infrastructure?",
      answer: "You own 100% of all intellectual property, source code, Git repositories, and cloud deployment pipelines from day one. We configure everything within your organization's GitHub and cloud accounts with zero vendor lock-in.",
    },
    {
      question: "How do you ensure zero-downtime during major production releases?",
      answer: "We deploy using automated blue/green container environments with automated health checks. Traffic is shifted smoothly to the new version only after all integration tests pass, with instant one-click rollback capabilities in the event of an anomaly.",
    },
    {
      question: "Can you integrate with our existing backend microservices, ERP, or headless CMS?",
      answer: "Yes. Our team routinely integrates with legacy REST backends, GraphQL meshes, headless CMS platforms (such as Sanity, Strapi, Contentful), and enterprise ERPs (SAP, NetSuite, Salesforce) using type-safe API client wrappers.",
    },
    {
      question: "What is your typical project timeline from kickoff to production launch?",
      answer: "A standard enterprise web application MVP typically ships within 6 to 10 weeks across 4 iterative agile sprints, complete with bi-weekly staging demos, continuous user testing, and post-launch hypercare monitoring.",
    },
  ],
  beforeAfter: webDevelopmentBeforeAfter,
};

export const technologyRelatedSummaries: RelatedItemSummary[] = technologySubCategories.map((sub) => ({
  id: sub.id,
  index: sub.index,
  title: sub.title,
  category: "Technology Solutions",
  image: sub.image,
  tagline: sub.tagline,
}));
