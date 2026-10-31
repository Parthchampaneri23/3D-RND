import { BeforeAfterData } from "@/components/BeforeAfterSection";

export type PortfolioCategory =
  | "Website & Web Application Projects"
  | "Mobile App Projects"
  | "Digital Marketing Projects"
  | "Branding & Graphic Design"
  | "Videography & Photography";

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  "Website & Web Application Projects",
  "Mobile App Projects",
  "Digital Marketing Projects",
  "Branding & Graphic Design",
  "Videography & Photography",
];

export interface ProjectResult {
  metric: string;
  label: string;
  verifiedBy?: string;
}

export interface RelatedLink {
  name: string;
  href: string;
}

export interface PortfolioProjectDetail {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  summary: string;
  tagline: string;
  category: PortfolioCategory;
  projectType: string;
  industry: string;
  services: RelatedLink[];
  industries: RelatedLink[];
  image: string;
  galleryImages: string[];
  videoUrl?: string;
  client: string;
  clientApproved?: boolean;
  projectDate: string;
  year: string;
  duration: string;
  sla: string;
  badge: string;
  tags: string[];
  brief: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  results?: ProjectResult[];
  overview: string[];
  quote?: {
    text: string;
    author: string;
  };
  scope: {
    number: string;
    title: string;
    desc: string;
    iconName?: string;
  }[];
  techStack: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  beforeAfter?: BeforeAfterData;
  isFeatured?: boolean;
  published: boolean;
  order: number;
}

export const portfolioData: PortfolioProjectDetail[] = [
  // =========================================================================
  // CATEGORY 1: Website & Web Application Projects
  // =========================================================================
  {
    id: "kailua",
    index: "01",
    title: "Kailua Headless Flagship",
    subtitle: "Headless Shopify Plus & Next.js 15 Edge Storefront",
    summary:
      "A lightning-fast headless e-commerce ecosystem processing over 120,000 monthly transactions with sub-second page transitions, interactive 3D product viewports, and unified Algolia search indexing.",
    tagline:
      "Sub-second headless Shopify Plus architecture with dynamic 3D WebGL product customizer and automated inventory synchronization.",
    category: "Website & Web Application Projects",
    projectType: "Headless E-Commerce & Web App",
    industry: "Retail & E-Commerce",
    services: [
      { name: "Custom Web Development", href: "/services" },
      { name: "E-Commerce Engineering", href: "/technology-solution" },
      { name: "Cloud & DevOps", href: "/technology-solution" },
    ],
    industries: [
      { name: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
      { name: "Food & FMCG", href: "/industries/food-fmcg" },
    ],
    image: "/images/service_ecommerce_color.jpg",
    galleryImages: [
      "/images/service_ecommerce_color.jpg",
      "/images/project_ecommerce.jpg",
      "/images/project_it_spatial.jpg",
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    client: "Kailua Outerwear Co.",
    clientApproved: true,
    projectDate: "Q1 2026",
    year: "2026",
    duration: "10 Weeks",
    sla: "99.99% Uptime",
    badge: "HEADLESS NEXT.JS 15 // EDGE COMMERCE",
    tags: ["Next.js 15", "Headless Shopify", "Algolia", "Tailwind CSS"],
    brief:
      "Kailua wanted to liberate their luxury outerwear brand from monolithic e-commerce performance bottlenecks, elevating global mobile conversions with an instant, cinematic shopping experience.",
    challenge:
      "Monolithic store templates suffered from heavy layout shifts, 4.2s mobile load times, and slow international inventory synchronization during viral flash drops.",
    solution:
      "Engineered an ultra-fast headless Next.js 15 App Router storefront integrated with Shopify Plus GraphQL APIs, Cloudflare edge caching, and a Three.js interactive fabric inspect viewer.",
    deliverables: [
      "Custom Next.js 15 App Router edge storefront",
      "Interactive 3D Three.js product visualizer with texture zoom",
      "Sub-150ms instant Algolia search and faceted filter engine",
      "Bi-directional ERP & WMS inventory sync webhooks",
    ],
    results: [
      { metric: "+340%", label: "Mobile Conversion Rate Lift", verifiedBy: "Shopify Plus Telemetry" },
      { metric: "0.8s", label: "Largest Contentful Paint (LCP)", verifiedBy: "Google Lighthouse" },
      { metric: "$14.2M", label: "Flash Drop GMV Processed", verifiedBy: "Kailua Financials" },
      { metric: "99.99%", label: "Production Uptime SLA", verifiedBy: "Cloudflare Analytics" },
    ],
    overview: [
      "Kailua commissioned RnD Technosoft to engineer their global digital flagship, replacing an aging monolithic platform with a cutting-edge headless architecture.",
      "The result is an ultra-fluid browsing experience that increased mobile checkout completion rates by 340% within 90 days of deployment.",
    ],
    quote: {
      text: "RnD Technosoft turned our digital storefront into our most profitable sales channel overnight. The speed is completely unmatched.",
      author: "Elena Rostova • Chief Digital Officer, Kailua Co.",
    },
    scope: [
      { number: "01", title: "Headless Architecture & GraphQL Schema", desc: "Decoupled Shopify Plus backplane with edge-rendered Next.js 15 frontend." },
      { number: "02", title: "Interactive 3D Product Customizer", desc: "WebGL viewport with 60 FPS material and colorway transitions." },
      { number: "03", title: "Faceted Algolia Search Mesh", desc: "Instant predictive search with sub-50ms query latency." },
      { number: "04", title: "Enterprise WMS Webhook Pipeline", desc: "Real-time automated inventory reconciliation across 4 regional warehouses." },
    ],
    techStack: ["Next.js 15", "Shopify Plus", "Three.js", "TypeScript", "Algolia", "Tailwind CSS", "Cloudflare Workers"],
    faqs: [
      {
        question: "How does headless Shopify compare to standard themes in speed?",
        answer: "Headless architectures decouple the presentation layer, delivering sub-second edge responses and 90+ Lighthouse mobile performance scores.",
      },
    ],
    isFeatured: true,
    published: true,
    order: 1,
  },
  {
    id: "nebula-cloud",
    index: "02",
    title: "Nebula Distributed Cloud OS",
    subtitle: "Enterprise Kubernetes Mesh & Multi-Region Operations Plane",
    summary:
      "A high-availability enterprise cloud management console and real-time telemetry mesh orchestrating multi-region workloads with bank-grade security and zero-downtime deployments.",
    tagline:
      "Modern Next.js 15 enterprise platform featuring multi-tenant database partitioning, sub-millisecond WebSocket streaming, and automated DevOps pipelines.",
    category: "Website & Web Application Projects",
    projectType: "Enterprise Web Application",
    industry: "Startups & Professional Services",
    services: [
      { name: "Custom Web Development", href: "/services" },
      { name: "Cloud Infrastructure & DevOps", href: "/technology-solution" },
    ],
    industries: [
      { name: "Startups & Professional Services", href: "/industries/startups-professional-services" },
      { name: "Manufacturing & Robotics", href: "/industries/manufacturing" },
    ],
    image: "/images/nebula_cloud_os_3d.jpg",
    galleryImages: [
      "/images/nebula_cloud_os_3d.jpg",
      "/images/project_it_cloud.jpg",
      "/images/service_cloud_color.jpg",
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    client: "Nebula Systems Inc.",
    clientApproved: true,
    projectDate: "December 2025",
    year: "2025",
    duration: "14 Weeks",
    sla: "99.999% Resilience",
    badge: "ENTERPRISE SAAS // KUBERNETES",
    tags: ["React 19", "Next.js 15", "Kubernetes", "PostgreSQL", "Docker"],
    brief:
      "Nebula Systems required a centralized cloud operations cockpit capable of managing 10,000+ distributed microservice instances with real-time telemetry and strict role-based access control.",
    challenge:
      "Existing DevOps dashboards lacked live streaming telemetry and experienced significant memory leaks during high-throughput metric updates across multi-cloud regions.",
    solution:
      "Engineered a Next.js 15 App Router web platform backed by Go microservices, Kafka streaming pipelines, and a canvas-accelerated topology visualizer.",
    deliverables: [
      "Real-time distributed cluster topology visualization",
      "Granular RBAC with SAML, Okta, and hardware security key SSO",
      "Automated CI/CD blue/green deployment orchestration engine",
      "Audit logs with immutable cryptographic hash chains",
    ],
    results: [
      { metric: "0.00s", label: "Recovery Time Objective (RTO)", verifiedBy: "AWS Resilience Hub" },
      { metric: "10k+", label: "Concurrent Kubernetes Pods Monitored", verifiedBy: "Datadog" },
      { metric: "70%", label: "Reduction in Incident MTTR", verifiedBy: "Nebula DevOps Team" },
    ],
    overview: [
      "Nebula Cloud OS provides engineering organizations with total visibility into their distributed cloud footprint.",
      "The web application features sub-10ms UI interaction latency and handles high-frequency data streams seamlessly.",
    ],
    scope: [
      { number: "01", title: "Micro-Frontend Architecture", desc: "Modular Next.js 15 application structure with isolated domain pods." },
      { number: "02", title: "WebSocket Live Telemetry", desc: "Binary Protobuf streaming protocol for low-bandwidth cluster telemetry." },
      { number: "03", title: "Security & SOC2 Compliance", desc: "Hardened secrets vault integration and automated vulnerability audits." },
    ],
    techStack: ["Next.js 15", "React 19", "Go", "Kubernetes", "Kafka", "PostgreSQL", "Tailwind CSS"],
    faqs: [
      {
        question: "How does the system handle high-frequency telemetry without lag?",
        answer: "We utilize Web Workers and WebGL-accelerated canvas renderers to offload heavy charting computations from the main browser thread.",
      },
    ],
    isFeatured: true,
    published: true,
    order: 2,
  },
  {
    id: "synapse-digital",
    index: "03",
    title: "Synapse Digital Hub",
    subtitle: "High-Concurrency Distributed Microservices SaaS",
    summary:
      "An enterprise workflow automation and API orchestration platform built for global engineering teams, consolidating internal tools into an ultra-responsive web portal.",
    tagline:
      "Full-stack Next.js enterprise architecture with automated workflow builders, real-time collaboration canvas, and SOC2 compliance.",
    category: "Website & Web Application Projects",
    projectType: "Full-Stack Web Portal",
    industry: "Healthcare & Life Sciences",
    services: [
      { name: "Enterprise Software Solutions", href: "/technology-solution" },
      { name: "Custom Web Development", href: "/services" },
    ],
    industries: [
      { name: "Healthcare & Life Sciences", href: "/industries/healthcare" },
      { name: "Startups & Professional Services", href: "/industries/startups-professional-services" },
    ],
    image: "/images/service_webdev.jpg",
    galleryImages: [
      "/images/service_webdev.jpg",
      "/images/project_ai.jpg",
      "/images/agency_team_studio.jpg",
    ],
    client: "Synapse Health Technologies",
    clientApproved: true,
    projectDate: "November 2025",
    year: "2025",
    duration: "12 Weeks",
    sla: "100% IP Ownership",
    badge: "SOC2 COMPLIANT // HEALTHCARE MESH",
    tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Docker", "REST/GraphQL"],
    brief:
      "Synapse needed to replace disjointed legacy healthcare portal tools with a secure, unified digital workstation for cross-functional clinician squads.",
    challenge:
      "Complying with HIPAA and SOC2 regulations while enabling real-time collaborative medical records workflow with sub-second page transitions.",
    solution:
      "Architected a zero-trust Next.js 15 portal with end-to-end encrypted fields, audit logs, and instant reactive state management via TanStack Query.",
    deliverables: [
      "Unified enterprise healthcare dashboard with role-based clinical views",
      "Interactive medical workflow builder with drag-and-drop triggers",
      "HIPAA-compliant document management and automated audit logs",
      "Full source code and Infrastructure as Code (Terraform) scripts",
    ],
    results: [
      { metric: "100%", label: "HIPAA & SOC2 Audit Compliance", verifiedBy: "KPMG Security" },
      { metric: "4.8x", label: "Faster Patient Case Intake", verifiedBy: "Synapse Analytics" },
      { metric: "99.98%", label: "Uptime Across 12 Clinical Nodes", verifiedBy: "AWS CloudWatch" },
    ],
    overview: [
      "Synapse Digital Hub enables healthcare teams to orchestrate complex clinical pipelines with intuitive, modern software.",
    ],
    scope: [
      { number: "01", title: "Security Baseline & HIPAA Isolation", desc: "Private VPC subnets with KMS-managed encryption keys." },
      { number: "02", title: "Interactive Canvas Workflow", desc: "Custom node graph editor for procedural clinical protocols." },
      { number: "03", title: "IP Transfer & Staff Training", desc: "Complete code handoff and pair-programming onboarding sessions." },
    ],
    techStack: ["Next.js 15", "TypeScript", "PostgreSQL", "Terraform", "AWS Fargate", "Tailwind CSS"],
    faqs: [
      {
        question: "Is client patient data protected under bilateral agreements?",
        answer: "Yes, our team signs comprehensive enterprise BAAs and NDAs with full zero-knowledge credential management.",
      },
    ],
    isFeatured: false,
    published: true,
    order: 3,
  },

  // =========================================================================
  // CATEGORY 2: Mobile App Projects
  // =========================================================================
  {
    id: "quantum-mobile-os",
    index: "04",
    title: "Quantum Mobile Wealth",
    subtitle: "Cross-Platform iOS & Android Neo-Banking Suite",
    summary:
      "A next-generation mobile banking and institutional wealth application featuring hardware enclave biometric authentication, offline-first transaction queues, and 60 FPS haptic interactions.",
    tagline:
      "Institutional-grade cross-platform mobile suite with real-time biometric cryptography, offline WatermelonDB sync, and fluid Skia graphics.",
    category: "Mobile App Projects",
    projectType: "iOS & Android Cross-Platform Mobile",
    industry: "Fintech & Banking",
    services: [
      { name: "Custom Web Development", href: "/services" },
      { name: "UI/UX & Digital Product Design", href: "/services" },
    ],
    industries: [
      { name: "Fintech & Banking", href: "/industries/startups-professional-services" },
    ],
    image: "/images/service_mobile_color.jpg",
    galleryImages: [
      "/images/service_mobile_color.jpg",
      "/images/project_it_fintech.jpg",
      "/images/service_mobile.jpg",
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    client: "Quantum Capital AG",
    clientApproved: true,
    projectDate: "February 2026",
    year: "2026",
    duration: "16 Weeks",
    sla: "60 FPS Native",
    badge: "REACT NATIVE // HARDWARE ENCLAVE",
    tags: ["React Native", "TypeScript", "Skia 2D", "iOS", "Android", "WatermelonDB"],
    brief:
      "Quantum Capital wanted to engineer a private wealth management app that rivals Swiss private banking standards with modern fintech fluidity and real-time portfolio rebalancing.",
    challenge:
      "Managing complex real-time crypto and fiat pricing graphs at 60 FPS on mobile while guaranteeing hardware-backed biometric security on both iOS and Android.",
    solution:
      "Developed a custom React Native architecture utilizing Shopify Skia for hardware-accelerated 2D charts, WatermelonDB for local encryption, and FaceID / TouchID biometric keys.",
    deliverables: [
      "iOS and Android production builds released on App Store and Google Play",
      "Hardware-accelerated Skia portfolio visualization graph engine",
      "Instant multi-currency transfer with biometric authorization",
      "Offline-first synchronization with automated conflict resolution",
    ],
    results: [
      { metric: "60 FPS", label: "Consistent Interaction Frame Rate", verifiedBy: "Xcode Instruments" },
      { metric: "4.9/5", label: "App Store User Rating", verifiedBy: "Apple App Store" },
      { metric: "$850M+", label: "Total Assets Under Management (AUM)", verifiedBy: "Quantum AG" },
    ],
    overview: [
      "Quantum Mobile Wealth blends Swiss private banking security with consumer fintech elegance.",
    ],
    quote: {
      text: "The haptic micro-interactions and instant biometric execution set a new benchmark for private mobile banking.",
      author: "Marc Thorensen • Head of Product, Quantum AG",
    },
    scope: [
      { number: "01", title: "Fabric Native Architecture", desc: "Bridgeless React Native setup with direct C++ TurboModule invocations." },
      { number: "02", title: "Biometric Hardware Enclave", desc: "Private key encryption locked to device Secure Enclave and Android Keystore." },
      { number: "03", title: "Tactile Haptic Feedback", desc: "Fine-grained linear resonant actuator vibrations on key user actions." },
    ],
    techStack: ["React Native", "TypeScript", "Shopify Skia", "WatermelonDB", "Fastlane", "Node.js"],
    faqs: [
      {
        question: "Does the app support offline mode?",
        answer: "Yes, our local-first WatermelonDB sync mesh allows users to review portfolios and queue trades securely without an internet connection.",
      },
    ],
    isFeatured: true,
    published: true,
    order: 4,
  },
  {
    id: "nomadiq-health",
    index: "05",
    title: "Nomadiq Telehealth Mobile",
    subtitle: "Real-Time Biometric Sensor Sync & Teleconsultation",
    summary:
      "A HIPAA-compliant mobile telemedicine suite connecting patients directly with clinical specialists via HD WebRTC video, Apple HealthKit integration, and automated prescription routing.",
    tagline:
      "Native mobile healthcare application with Bluetooth medical sensor telemetry, WebRTC video consultation, and instant pharmacy integration.",
    category: "Mobile App Projects",
    projectType: "Native iOS & Android App",
    industry: "Healthcare & Life Sciences",
    services: [
      { name: "Custom Web Development", href: "/services" },
      { name: "Enterprise Software Solutions", href: "/technology-solution" },
    ],
    industries: [
      { name: "Healthcare & Life Sciences", href: "/industries/healthcare" },
    ],
    image: "/images/industry_medtech.jpg",
    galleryImages: [
      "/images/industry_medtech.jpg",
      "/images/service_mobile_color.jpg",
      "/images/nebula_cloud_os_3d.jpg",
    ],
    client: "Nomadiq Health Technologies",
    clientApproved: true,
    projectDate: "October 2025",
    year: "2025",
    duration: "14 Weeks",
    sla: "Zero Data Leakage",
    badge: "HEALTHKIT // WEBRTC HD",
    tags: ["iOS", "Android", "WebRTC", "HealthKit", "Bluetooth LE"],
    brief:
      "Nomadiq needed an accessible mobile application for remote patient monitoring that captures vitals from consumer wearables and transmits them directly to attending cardiologists.",
    challenge:
      "Unifying Bluetooth Low Energy (BLE) sensor telemetry across hundreds of Android device models while guaranteeing encrypted HD video on erratic 4G/5G connections.",
    solution:
      "Engineered an adaptive WebRTC video pipeline paired with background BLE services that buffer telemetry offline and synchronize upon connection stabilization.",
    deliverables: [
      "Native iOS and Android apps with Apple HealthKit & Google Health Connect sync",
      "End-to-end encrypted WebRTC audio/video consultation module",
      "Bluetooth LE automated glucose, pulse-ox, and blood pressure pairing",
      "Compliant electronic prescription fulfillment workflow",
    ],
    results: [
      { metric: "99.8%", label: "Video Call Connection Success Rate", verifiedBy: "Twilio Telemetry" },
      { metric: "450k+", label: "Remote Biometric Packets Processed", verifiedBy: "Nomadiq Ops" },
      { metric: "<200ms", label: "Bluetooth Pairing Latency", verifiedBy: "Hardware Benchmarks" },
    ],
    overview: [
      "Nomadiq Health bridges clinical oversight and everyday mobile convenience for thousands of chronically managed patients.",
    ],
    scope: [
      { number: "01", title: "BLE Peripheral Protocol", desc: "Automated background handshake with FDA-cleared biometric monitors." },
      { number: "02", title: "Encrypted Video Mesh", desc: "Adaptive bitrate WebRTC streaming with zero in-transit packet recording." },
      { number: "03", title: "Emergency Telemetry Alerts", desc: "High-priority push notifications triggered by anomalous vital signs." },
    ],
    techStack: ["Flutter", "Dart", "WebRTC", "Bluetooth LE", "HealthKit", "Firebase FCM", "Node.js"],
    faqs: [
      {
        question: "How are patient consultations kept confidential?",
        answer: "All video and audio streams are encrypted end-to-end with ephemeral DTLS-SRTP keys that expire immediately after the call terminates.",
      },
    ],
    isFeatured: false,
    published: true,
    order: 5,
  },
  {
    id: "tastecraft-delivery",
    index: "06",
    title: "TasteCraft On-Demand Delivery",
    subtitle: "Hyper-Local Real-Time Food Delivery & Courier Fleet App",
    summary:
      "A dynamic culinary marketplace and driver fleet orchestration app delivering sub-20-minute gourmet meals with live Mapbox GPS tracking and automated dispatch balancing.",
    tagline:
      "Real-time food delivery app with dynamic courier routing, 1-click Apple Pay checkout, and live temperature sensor telemetry.",
    category: "Mobile App Projects",
    projectType: "On-Demand Delivery Mobile Suite",
    industry: "Food & FMCG",
    services: [
      { name: "Custom Web Development", href: "/services" },
      { name: "Cloud Infrastructure & DevOps", href: "/technology-solution" },
    ],
    industries: [
      { name: "Food & FMCG", href: "/industries/food-fmcg" },
      { name: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
    ],
    image: "/images/project_lifestyle.jpg",
    galleryImages: [
      "/images/project_lifestyle.jpg",
      "/images/service_mobile.jpg",
      "/images/project_it_spatial.jpg",
    ],
    client: "TasteCraft Hospitality Group",
    clientApproved: true,
    projectDate: "January 2026",
    year: "2026",
    duration: "12 Weeks",
    sla: "<1.2s Order Dispatch",
    badge: "MAPBOX GL // FLEET MESH",
    tags: ["React Native", "Mapbox GL", "Stripe Terminal", "WebSockets", "Node.js"],
    brief:
      "TasteCraft wanted to disrupt high third-party delivery commissions by launching their own premium direct-to-consumer delivery app for their network of 40+ gourmet restaurants.",
    challenge:
      "Orchestrating live driver routing through congested metropolitan traffic while maintaining precise delivery time estimates within 60 seconds.",
    solution:
      "Built a custom React Native mobile app with Mapbox navigation, real-time WebSocket vehicle updates, and automated order batching algorithms.",
    deliverables: [
      "Customer ordering app with interactive menu carousels and instant payment",
      "Courier fleet mobile app with automated turn-by-turn navigation",
      "Kitchen display system (KDS) tablet app with live prep timers",
      "Central dispatch web console with live driver heatmaps",
    ],
    results: [
      { metric: "18.4 Min", label: "Average Order-to-Door Delivery Time", verifiedBy: "Fleet Telemetry" },
      { metric: "+82%", label: "Repeat Customer 30-Day Retention", verifiedBy: "TasteCraft Analytics" },
      { metric: "$3.8M", label: "Commissions Saved in Year 1", verifiedBy: "CFO Report" },
    ],
    overview: [
      "TasteCraft transformed culinary logistics, turning proprietary mobile apps into their highest margin revenue channel.",
    ],
    scope: [
      { number: "01", title: "Mapbox Vector Tile Engine", desc: "Smooth 60 FPS live driver GPS movement with predictive interpolation." },
      { number: "02", title: "Intelligent Dispatch Heuristics", desc: "Automated route optimization grouping nearby orders to reduce driver mileage." },
      { number: "03", title: "Instant Mobile Checkout", desc: "Zero-friction Apple Pay and Google Pay integration via Stripe." },
    ],
    techStack: ["React Native", "Mapbox GL", "WebSockets", "Node.js", "Redis", "PostgreSQL", "Stripe"],
    faqs: [
      {
        question: "Can restaurants update menus in real time during service?",
        answer: "Yes, 86-ing items or adjusting prep times reflects instantaneously on customer devices via WebSocket push events.",
      },
    ],
    isFeatured: false,
    published: true,
    order: 6,
  },

  // =========================================================================
  // CATEGORY 3: Digital Marketing Projects
  // =========================================================================
  {
    id: "omnigrowth-analytics",
    index: "07",
    title: "OmniGrowth Performance Engine",
    subtitle: "Programmatic SEO, Multi-Touch Attribution & PPC Scale",
    summary:
      "A comprehensive digital marketing acquisition engine that generated 4.2 million organic visits and scaled paid customer acquisition at a 420% return on ad spend (ROAS).",
    tagline:
      "High-intent performance marketing pipeline featuring server-side attribution modeling, programmatic SEO architecture, and automated ad creative testing.",
    category: "Digital Marketing Projects",
    projectType: "Full-Funnel Growth & Performance Engine",
    industry: "Retail & E-Commerce",
    services: [
      { name: "Digital Marketing & SEO", href: "/services" },
      { name: "Custom Web Development", href: "/services" },
    ],
    industries: [
      { name: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
      { name: "Startups & Professional Services", href: "/industries/startups-professional-services" },
    ],
    image: "/images/service_seo_color.jpg",
    galleryImages: [
      "/images/service_seo_color.jpg",
      "/images/service_marketing.jpg",
      "/images/Digi market.png",
    ],
    client: "OmniGrowth Global Direct",
    clientApproved: true,
    projectDate: "Q4 2025",
    year: "2025",
    duration: "Continuous (6 Mo Sprints)",
    sla: ">400% Target ROAS",
    badge: "PROGRAMMATIC SEO // ATTRIBUTION",
    tags: ["SEO", "Google Ads", "Meta Ads", "Server-Side Tracking", "Looker Studio"],
    brief:
      "OmniGrowth wanted to diversify away from expensive paid customer acquisition by scaling an evergreen programmatic organic search footprint while modernizing server-side attribution.",
    challenge:
      "Apple's iOS privacy updates severely impaired client ad tracking, causing CAC to spike by 65% while organic search traffic remained flat.",
    solution:
      "Deployed Meta Conversions API (CAPI) on Cloudflare Workers for 99.4% attribution accuracy, combined with a Next.js programmatic SEO matrix generating 1,200+ high-ranking long-tail landing pages.",
    deliverables: [
      "Server-side Meta and Google Ads Conversions API (CAPI) pipeline",
      "Programmatic SEO matrix covering 1,200+ transactional keywords",
      "Dynamic creative optimization (DCO) testing engine for Meta & TikTok",
      "Custom Looker Studio executive attribution and cohort dashboard",
    ],
    results: [
      { metric: "+420%", label: "Return on Ad Spend (ROAS)", verifiedBy: "Third-Party Attribution" },
      { metric: "4.2M", label: "Organic Search Visits Generated", verifiedBy: "Google Search Console" },
      { metric: "-48%", label: "Blended Customer Acquisition Cost (CAC)", verifiedBy: "OmniGrowth Analytics" },
      { metric: "#1-3", label: "Rankings for 340+ High-Intent Keywords", verifiedBy: "Ahrefs" },
    ],
    overview: [
      "OmniGrowth transformed digital marketing from an unpredictable cost center into a predictable, compound growth engine.",
    ],
    quote: {
      text: "RnD's programmatic SEO and server-side tracking gave us unprecedented visibility into our acquisition spend. Our ROAS quadrupled in six months.",
      author: "David Sterling • VP of Growth, OmniGrowth",
    },
    scope: [
      { number: "01", title: "CAPI Server-Side Data Layer", desc: "First-party cookie resolution bypassing ad-blockers and browser restrictions." },
      { number: "02", title: "Programmatic Landing Architecture", desc: "Sub-second static generated pages with itemized schema markups." },
      { number: "03", title: "Algorithmic Ad Budget Allocation", desc: "Automated scaling of winning ad creatives across Meta, Google, and YouTube." },
    ],
    techStack: ["Cloudflare Workers", "Google Tag Manager", "Meta CAPI", "Google Ads", "Looker Studio", "Next.js 15"],
    faqs: [
      {
        question: "How long before programmatic SEO generates measurable traffic?",
        answer: "With our optimized crawl budgets and edge Next.js indexing, initial indexing begins within 14 days with meaningful traffic compounding by month 3.",
      },
    ],
    isFeatured: true,
    published: true,
    order: 7,
  },
  {
    id: "zenith-social",
    index: "08",
    title: "Zenith Social Omnichannel Growth",
    subtitle: "Creator Network Seeding, Viral Video & TikTok Spark Ads",
    summary:
      "A high-velocity social media growth and creator partnership campaign driving 85M+ verified impressions, 1.4M community engagements, and unprecedented brand recognition.",
    tagline:
      "Algorithmic short-form video production, creator influencer seeding, and paid amplification engine generating exponential viral reach.",
    category: "Digital Marketing Projects",
    projectType: "Social Media & Creator Marketing",
    industry: "Startups & Professional Services",
    services: [
      { name: "Digital Marketing & Growth", href: "/services" },
      { name: "Commercial Media & Motion", href: "/services" },
    ],
    industries: [
      { name: "Food & FMCG", href: "/industries/food-fmcg" },
      { name: "Startups & Professional Services", href: "/industries/startups-professional-services" },
    ],
    image: "/images/service_social.jpg",
    galleryImages: [
      "/images/service_social.jpg",
      "/images/social.png",
      "/images/service_media.jpg",
    ],
    client: "Zenith Beverage Collective",
    clientApproved: true,
    projectDate: "December 2025",
    year: "2025",
    duration: "16 Weeks",
    sla: "Zero Fluff Reporting",
    badge: "CREATOR SEEDING // VIRAL REACH",
    tags: ["TikTok", "Instagram Reels", "YouTube Shorts", "Creator Partnerships", "Spark Ads"],
    brief:
      "Zenith needed to build immediate cultural cachet and retail shelf velocity for their sparkling adaptogenic tonic through authentic vertical video storytelling.",
    challenge:
      "Generic sponsored posts were experiencing declining consumer trust and low click-through rates among Gen-Z audiences.",
    solution:
      "Mobilized an organic cohort of 120+ micro-creators, paired with in-house studio-crafted comedic skits and whitelisted Spark Ads amplifying top-performing organic hooks.",
    deliverables: [
      "240+ bespoke vertical video assets for TikTok, Instagram Reels, and Shorts",
      "Negotiated contracts and rights management with 120+ vetted niche creators",
      "Automated community engagement engine responding to 100% of top comments",
      "Targeted Spark Ad amplification campaigns driving direct retail locator traffic",
    ],
    results: [
      { metric: "85M+", label: "Total Verified Video Views", verifiedBy: "TikTok & Meta Ads Manager" },
      { metric: "+310%", label: "Spike in Whole Foods Store Velocity", verifiedBy: "SPINS Retail Data" },
      { metric: "1.4M", label: "Direct Engagements & Shares", verifiedBy: "Zenith Analytics" },
    ],
    overview: [
      "Zenith Social turned digital culture into physical retail sales across 2,400+ nationwide grocery doors.",
    ],
    scope: [
      { number: "01", title: "Creative Hook Ideation", desc: "Scripting and producing 20+ viral concept variations per week." },
      { number: "02", title: "Creator Seeding Engine", desc: "Automated gifting and brief dissemination to high-affinity micro-influencers." },
      { number: "03", title: "Paid Whitelisting & Retargeting", desc: "Running paid ads directly through creator handles for maximum credibility." },
    ],
    techStack: ["TikTok Ads Manager", "Meta Business Suite", "CapCut Pro", "Grin Influencer CRM", "Looker Studio"],
    faqs: [
      {
        question: "Do clients retain ownership of creator content?",
        answer: "Yes, our bilateral creator contracts secure full digital ad usage and whitelisting rights for 12 months minimum.",
      },
    ],
    isFeatured: false,
    published: true,
    order: 8,
  },
  {
    id: "apex-fintech",
    index: "09",
    title: "Apex Enterprise ABM Acquisition",
    subtitle: "High-Ticket B2B Account-Based Marketing & Paid LinkedIn Ads",
    summary:
      "A laser-targeted enterprise pipeline engine that generated $28M in qualified B2B pipeline across Fortune 500 manufacturing and aerospace buying committees.",
    tagline:
      "Precision B2B Account-Based Marketing engine with IP-based intent targeting, custom thought-leadership content, and SDR pipeline orchestration.",
    category: "Digital Marketing Projects",
    projectType: "B2B Performance & Account-Based Marketing",
    industry: "Manufacturing & Robotics",
    services: [
      { name: "Digital Marketing & Growth", href: "/services" },
      { name: "Enterprise Software Solutions", href: "/technology-solution" },
    ],
    industries: [
      { name: "Manufacturing & Robotics", href: "/industries/manufacturing" },
    ],
    image: "/images/service_marketing.jpg",
    galleryImages: [
      "/images/service_marketing.jpg",
      "/images/project_it_cyber.jpg",
      "/images/agency_team_studio.jpg",
    ],
    client: "Apex Industrial Automation",
    clientApproved: true,
    projectDate: "Q3 2025",
    year: "2025",
    duration: "20 Weeks",
    sla: "Verified SQL Guarantee",
    badge: "ENTERPRISE ABM // LINKEDIN ADS",
    tags: ["LinkedIn Ads", "HubSpot ABM", "Demandbase", "Content Marketing", "Cold Email"],
    brief:
      "Apex Industrial wanted to close multi-million dollar automation contracts by targeting C-suite leaders and VPs of Engineering across 250 named enterprise accounts.",
    challenge:
      "Broad digital ads produced low-quality leads while decision-makers ignored cold outbound emails from standard SDR teams.",
    solution:
      "Orchestrated a multichannel ABM campaign combining Bombora intent data, personalized LinkedIn Thought Leader ads, bespoke executive whitepapers, and direct SDR outreach.",
    deliverables: [
      "Tier-1 list of 250 qualified enterprise accounts mapped to 2,000+ key stakeholders",
      "Executive whitepapers and ROI calculators tailored to manufacturing VPs",
      "Hyper-targeted LinkedIn InMail and dynamic feed ad campaigns",
      "Automated HubSpot lead scoring and SDR alert workflows",
    ],
    results: [
      { metric: "$28M", label: "Qualified Pipeline Generated", verifiedBy: "HubSpot CRM Data" },
      { metric: "68%", label: "Target Account Engagement Rate", verifiedBy: "Demandbase" },
      { metric: "14", label: "Closed Enterprise Deals ($1M+ ACV)", verifiedBy: "Apex Executive Board" },
    ],
    overview: [
      "Apex Performance proved how targeted account marketing drives outsized returns for high-ticket industrial technologies.",
    ],
    scope: [
      { number: "01", title: "Intent Signal Mapping", desc: "Scraping surge intent topics to identify accounts actively researching robotics." },
      { number: "02", title: "Custom Account Experiences", desc: "Deploying personalized landing pages displaying the prospect's company logo and ROI." },
      { number: "03", title: "Executive Sales Enablement", desc: "Arming internal sales teams with rich intelligence dossiers on active accounts." },
    ],
    techStack: ["HubSpot Enterprise", "LinkedIn Campaign Manager", "Demandbase", "Bombora", "Clearbit", "Next.js 15"],
    faqs: [
      {
        question: "How are accounts selected for ABM targeting?",
        answer: "We analyze firmographic size, tech stack compatibility, and third-party buyer intent signals to rank high-propensity accounts.",
      },
    ],
    isFeatured: false,
    published: true,
    order: 9,
  },

  // =========================================================================
  // CATEGORY 4: Branding & Graphic Design
  // =========================================================================
  {
    id: "lumen-sal",
    index: "10",
    title: "Lumen Sal Spatial Identity",
    subtitle: "European Architectural Atelier Brand & Interactive WebGL Showroom",
    summary:
      "An iconic luxury digital flagship translating the tactile materiality of European architecture into an interactive browser experience with 60 FPS Three.js rendering, dynamic lighting, and bespoke typography.",
    tagline:
      "End-to-end spatial 3D experience, architectural design tokens, and immersive WebGL showroom for bespoke luxury interiors.",
    category: "Branding & Graphic Design",
    projectType: "Brand Identity & Spatial 3D Experience",
    industry: "Real Estate & Architecture",
    services: [
      { name: "Branding & Graphic Design", href: "/services" },
      { name: "Spatial & 3D Experiences", href: "/services" },
      { name: "Custom Web Development", href: "/services" },
    ],
    industries: [
      { name: "Real Estate & Architecture", href: "/industries/real-estate" },
      { name: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
    ],
    image: "/images/project_lumen_sal.jpg",
    galleryImages: [
      "/images/project_lumen_sal.jpg",
      "/images/nebula_cloud_os_3d.jpg",
      "/images/service_branding.jpg",
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    client: "Lumen Architecture Atelier",
    clientApproved: true,
    projectDate: "January 2026",
    year: "2026",
    duration: "12 Weeks",
    sla: "60 FPS WebGL",
    badge: "SPATIAL WEB // 3D BRANDING",
    tags: ["Branding", "Three.js", "PBR Shaders", "Design System", "WebGL"],
    brief:
      "Lumen Sal required an iconic digital identity that translates the raw physicality of European stone, timber, and light into an unforgettable online presence.",
    challenge:
      "Capturing the subtle imperfections of natural materials inside a web browser while maintaining sub-2MB asset payloads and 60 FPS rendering on mobile devices.",
    solution:
      "Designed a complete brand typography and color token system, coupled with a custom Three.js PBR viewport featuring interactive time-of-day solar path lighting.",
    deliverables: [
      "Complete brand guidelines with bespoke typographic rules and logo system",
      "Interactive WebGL showroom running at 60 FPS on desktop and mobile",
      "Automated CAD-to-Web optimization pipeline reducing 3D models by 85%",
      "Comprehensive design token library exported to Figma and Tailwind CSS",
    ],
    results: [
      { metric: "60 FPS", label: "Smooth Real-Time WebGL Interaction", verifiedBy: "Chrome DevTools" },
      { metric: "+280%", label: "High-Net-Worth Inbound Inquiries", verifiedBy: "Lumen Atelier CRM" },
      { metric: "1.8MB", label: "Optimized 3D Model Payload", verifiedBy: "Draco Compression" },
    ],
    overview: [
      "Lumen Sal bridged tactile interior architecture and modern browser graphics with breathtaking precision.",
    ],
    quote: {
      text: "RnD Technosoft bridged the gap between tactile spatial design and web technology with surgical precision.",
      author: "Julian Vance • Creative Director, Lumen Atelier",
    },
    scope: [
      { number: "01", title: "3D CAD Topology & PBR Texture Baking", desc: "Poly-reduction and normal map generation for realistic stone and wood textures." },
      { number: "02", title: "Spatial Three.js Viewport Engine", desc: "Custom GLSL fragment shaders simulating atmospheric dust and sunlight." },
      { number: "03", title: "Comprehensive Design Token Library", desc: "Modular design tokens linking Figma components directly to production code." },
    ],
    techStack: ["Three.js", "WebGL 2.0", "GLSL Shaders", "Next.js 15", "Tailwind CSS", "Figma"],
    faqs: [
      {
        question: "Can clients explore 3D rooms on mobile phones without lag?",
        answer: "Yes, our adaptive shader pipelines automatically adjust shadow cascades and texture resolution to maintain 60 FPS on iOS and Android devices.",
      },
    ],
    isFeatured: true,
    published: true,
    order: 10,
  },
  {
    id: "toma-nota",
    index: "11",
    title: "Toma Nota Brand Architecture",
    subtitle: "Brand Identity, Typography & Micro-Interactive Design System",
    summary:
      "A complete brand revitalization for a Spanish creative agency and fintech incubator, featuring bespoke typography, dynamic logo animations, and a cohesive design system.",
    tagline:
      "Distinctive European brand identity with tactile typographic scales, fluid motion tokens, and high-conversion editorial layouts.",
    category: "Branding & Graphic Design",
    projectType: "Comprehensive Brand Identity & Design System",
    industry: "Startups & Professional Services",
    services: [
      { name: "Branding & Graphic Design", href: "/services" },
      { name: "UI/UX & Digital Product Design", href: "/services" },
    ],
    industries: [
      { name: "Startups & Professional Services", href: "/industries/startups-professional-services" },
    ],
    image: "/images/project_toma_nota.jpg",
    galleryImages: [
      "/images/project_toma_nota.jpg",
      "/images/service_branding.jpg",
      "/images/service_marketing.jpg",
    ],
    client: "Toma Nota Studios",
    clientApproved: true,
    projectDate: "November 2025",
    year: "2025",
    duration: "8 Weeks",
    sla: "Zero Ambiguity Guidelines",
    badge: "BRAND SYSTEM // TYPOGRAPHY",
    tags: ["Brand Identity", "Design Tokens", "Typography", "Figma", "Motion FX"],
    brief:
      "Toma Nota sought to establish a distinguished visual presence across Madrid and Barcelona, modernizing their agency identity to attract venture capital-backed scaleups.",
    challenge:
      "Overcoming brand fragmentation across disparate print, presentation, and web properties while crafting an identity that feels both editorial and technologically forward.",
    solution:
      "Developed a bespoke typographic hierarchy combining serif elegance with clean modernist sans, supported by a comprehensive Figma token system and motion guidelines.",
    deliverables: [
      "Primary, secondary, and sub-brand logotypes with dynamic responsive lockups",
      "220-page comprehensive Brand Bible and visual identity guidelines",
      "Complete Figma Design System with 150+ interactive UI components",
      "Executive stationery, editorial pitch decks, and digital asset templates",
    ],
    results: [
      { metric: "100%", label: "Cohesive Asset Deployment", verifiedBy: "Agency Audit" },
      { metric: "+190%", label: "Increase in Average Project Deal Size", verifiedBy: "Toma Nota Leadership" },
      { metric: "150+", label: "Figma UI Components Delivered", verifiedBy: "Design Repository" },
    ],
    overview: [
      "Toma Nota now commands a visual authority that attracts top-tier enterprise clients across Southern Europe.",
    ],
    scope: [
      { number: "01", title: "Brand Archetype & Typographic Blueprint", desc: "Custom font pairing and mathematical typographic modular scale." },
      { number: "02", title: "Motion & Micro-Interaction Language", desc: "Bespoke easing curves and spring physics for digital touchpoints." },
      { number: "03", title: "Design System Tokenization", desc: "Syncing Figma styles directly with CSS custom properties for instant dev handoff." },
    ],
    techStack: ["Figma", "Adobe Illustrator", "After Effects", "CSS Custom Properties", "Tailwind CSS"],
    faqs: [
      {
        question: "How are brand guidelines enforced across external teams?",
        answer: "We provide an interactive web-based Brand Hub with downloadable vector assets, copy guidelines, and automated color contrast checks.",
      },
    ],
    isFeatured: false,
    published: true,
    order: 11,
  },
  {
    id: "pantone-identity",
    index: "12",
    title: "Pantone Identity Packaging Studio",
    subtitle: "Structural Sustainable Packaging & Tactile 3D Brand System",
    summary:
      "Sustainable luxury packaging architecture for an international cosmetics collective, combining bio-resin material engineering with photorealistic 3D CAD unboxing mockups.",
    tagline:
      "Eco-conscious physical packaging design system with photorealistic 3D renders, tactile print finishing, and global production specifications.",
    category: "Branding & Graphic Design",
    projectType: "Packaging Design & Physical Brand Identity",
    industry: "Food & FMCG",
    services: [
      { name: "Branding & Graphic Design", href: "/services" },
      { name: "3D CGI & Spatial Experiences", href: "/services" },
    ],
    industries: [
      { name: "Food & FMCG", href: "/industries/food-fmcg" },
      { name: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
    ],
    image: "/images/service_branding.jpg",
    galleryImages: [
      "/images/service_branding.jpg",
      "/images/project_lifestyle.jpg",
      "/images/project_lumen_sal.jpg",
    ],
    client: "Pantone Beauty Holdings",
    clientApproved: true,
    projectDate: "October 2025",
    year: "2025",
    duration: "10 Weeks",
    sla: "Zero Plastic Standard",
    badge: "PACKAGING // SUSTAINABILITY",
    tags: ["Packaging Design", "3D CAD", "Print Finishing", "FMCG", "KeyShot"],
    brief:
      "Pantone Beauty needed to eliminate all single-use plastics from their luxury cosmetics line while maintaining a decadent, premium shelf appeal in high-end department stores.",
    challenge:
      "Bio-composites often fail structural drop tests and struggle to hold metallic hot-stamp foils and tactile embossing without delaminating.",
    solution:
      "Engineered a molded bamboo fiber shell reinforced with mineral pigments, accompanied by photorealistic KeyShot 3D renders for pre-production retail visualization.",
    deliverables: [
      "12 structural packaging dielines for bottles, jars, and presentation gift boxes",
      "Photorealistic 3D KeyShot renders for e-commerce pre-sales and retailer pitch decks",
      "Print finishing specs: blind debossing, soy-based inks, and waterless foil stamps",
      "Supplier manufacturing specs and ISO 14001 sustainability certification audit",
    ],
    results: [
      { metric: "0%", label: "Virgin Plastic Content in Packaging", verifiedBy: "SGS Environmental Audit" },
      { metric: "100%", label: "Retail Buy-in Across 800 Department Stores", verifiedBy: "Pantone Commercial Team" },
      { metric: "-35%", label: "Freight Carbon Emissions via Light Weighting", verifiedBy: "Logistics Data" },
    ],
    overview: [
      "Pantone Identity proved that uncompromising environmental responsibility can enhance luxury commercial appeal.",
    ],
    scope: [
      { number: "01", title: "Structural Engineering & Drop Tests", desc: "CAD stress simulation to withstand 1.5m drops on concrete without breakage." },
      { number: "02", title: "Photorealistic 3D Material Bakes", desc: "Simulating paper tooth, foil reflectivity, and embossing depth in KeyShot." },
      { number: "03", title: "Press-Check Color Calibration", desc: "On-site press checks ensuring Delta E color variations under 1.0." },
    ],
    techStack: ["SolidWorks", "KeyShot", "Adobe Illustrator", "Cinema 4D", "Esko Studio"],
    faqs: [
      {
        question: "Can 3D CAD files be used directly in e-commerce storefronts?",
        answer: "Yes, we export lightweight GLTF and USDZ models optimized for direct browser rendering and Apple AR Quick Look.",
      },
    ],
    isFeatured: false,
    published: true,
    order: 12,
  },

  // =========================================================================
  // CATEGORY 5: Videography & Photography
  // =========================================================================
  {
    id: "mission-ops",
    index: "13",
    title: "Vanguard High-Altitude Commercial",
    subtitle: "8K Cinema Commercial & High-Altitude Drone Cinematography",
    summary:
      "An award-winning commercial film captured across extreme sub-zero mountain environments in the Swiss Alps, featuring custom FPV drone footage, Dolby Atmos sound mastering, and DaVinci color grading.",
    tagline:
      "High-speed cinematic 8K brand film blending high-altitude FPV aerials, raw macro cinematography, and spatial Dolby Atmos sound design.",
    category: "Videography & Photography",
    projectType: "Commercial Cinematography & Video",
    industry: "Travel & Tourism",
    services: [
      { name: "Commercial Media & Motion", href: "/services" },
      { name: "Branding & Graphic Design", href: "/services" },
    ],
    industries: [
      { name: "Travel & Tourism", href: "/industries/travel-tourism" },
      { name: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
    ],
    image: "/images/project_forest_film.jpg",
    galleryImages: [
      "/images/project_forest_film.jpg",
      "/images/service_media.jpg",
      "/images/showreel_thumb.jpg",
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    client: "Vanguard Mountain Gear",
    clientApproved: true,
    projectDate: "Q4 2025",
    year: "2025",
    duration: "6 Weeks",
    sla: "Broadcast Grade 8K",
    badge: "CINEMA 8K // DOLBY ATMOS",
    tags: ["Cinematography", "FPV Drones", "8K Film", "Color Grading", "Sound Design"],
    brief:
      "Vanguard needed an emotionally arresting brand film for their winter expedition launch that proves their technical apparel can endure the harshest alpine environments on Earth.",
    challenge:
      "Operating high-draw cinema cameras and lithium drone batteries in minus 25°C blizzards at 3,800 meters altitude with zero margin for equipment failure.",
    solution:
      "Deployed a specialized 4-person alpine camera squad equipped with RED V-Raptor 8K cameras, custom heated FPV drone rigs, and portable satellite data offloaders.",
    deliverables: [
      "90-second hero cinema commercial delivered in 8K DCI and 4K UHD",
      "Suite of 15, 30, and 60-second broadcast cuts with social aspect ratios (9:16, 1:1)",
      "Bespoke Dolby Atmos 7.1.4 spatial audio mix and orchestral sound score",
      "High-resolution still photography library of 180+ commercial campaign stills",
    ],
    results: [
      { metric: "14.8M", label: "Global Organic Broadcast & Web Views", verifiedBy: "Vanguard Media Analytics" },
      { metric: "Cannes Lion", label: "Shortlisted for Craft Cinematography", verifiedBy: "Festival Registry" },
      { metric: "+46%", label: "Spike in Winter Expedition Pre-Orders", verifiedBy: "E-Commerce Revenue Data" },
    ],
    overview: [
      "Vanguard Mountain Gear's commercial film captured the raw spirit of alpine survival with unmatched visual fidelity.",
    ],
    quote: {
      text: "RnD's film crew risked literal blizzards to capture footage that gave our entire global executive board chills.",
      author: "Lars Lindqvist • VP Marketing, Vanguard Global",
    },
    scope: [
      { number: "01", title: "Alpine Production & High-Altitude Logistics", desc: "Helicopter drop-offs and mountain guide safety protocols." },
      { number: "02", title: "FPV Aerial Dynamics", desc: "Proximity mountain flying capturing skiers descending 50-degree couloirs." },
      { number: "03", title: "DaVinci Resolve ACES Color Science", desc: "Custom film-emulation LUTs preserving shadow details in bright snowfields." },
    ],
    techStack: ["RED V-Raptor 8K", "Custom FPV Drones", "DaVinci Resolve Studio", "Pro Tools HD", "Dolby Atmos"],
    faqs: [
      {
        question: "What deliverables are provided for social and television broadcast?",
        answer: "We deliver ProRes 4444 XQ master files, Rec.709 and HDR10 deliverables, and full social cutdowns tailored for TikTok and Instagram.",
      },
    ],
    isFeatured: true,
    published: true,
    order: 13,
  },
  {
    id: "astrafilm-studios",
    index: "14",
    title: "AstraFilm Virtual Production",
    subtitle: "Unreal Engine LED Stage & In-Camera VFX Commercial Production",
    summary:
      "Cutting-edge virtual commercial production utilizing a 180-degree LED volume stage powered by Unreal Engine 5.4, delivering real-time photorealistic environments with zero post-production greenscreen latency.",
    tagline:
      "Next-generation virtual production studio combining Unreal Engine 5, camera tracking, and cinema lighting for commercial product spots.",
    category: "Videography & Photography",
    projectType: "Virtual Production & Commercial Film",
    industry: "Manufacturing & Robotics",
    services: [
      { name: "Commercial Media & Motion", href: "/services" },
      { name: "Spatial & 3D Web Experiences", href: "/services" },
    ],
    industries: [
      { name: "Manufacturing & Robotics", href: "/industries/manufacturing" },
      { name: "Travel & Tourism", href: "/industries/travel-tourism" },
    ],
    image: "/images/service_media.jpg",
    galleryImages: [
      "/images/service_media.jpg",
      "/images/project_forest_film.jpg",
      "/images/agency_team_studio.jpg",
    ],
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    client: "Astra Automotive Group",
    clientApproved: true,
    projectDate: "Q3 2025",
    year: "2025",
    duration: "4 Weeks",
    sla: "Zero Post Greenscreen",
    badge: "UNREAL ENGINE 5 // ICVFX",
    tags: ["Virtual Production", "Unreal Engine 5", "LED Volume", "In-Camera VFX", "Automotive"],
    brief:
      "Astra needed to shoot their concept electric vehicle across futuristic neon cyber-cities, desert flats, and mountain tunnels in a single shooting day without leaving our studio stage.",
    challenge:
      "Achieving photorealistic reflections on curved vehicle paint and chrome surfaces that react dynamically to camera movements in real time.",
    solution:
      "Engineered photorealistic 3D Unreal Engine 5 environments mapped to a 40-foot curved LED wall synchronized with OptiTrack camera tracking sensors.",
    deliverables: [
      "3 bespoke 3D Unreal Engine 5.4 virtual environments with interactive lighting controls",
      "Full 1-day shoot resulting in 4 commercial broadcast spots",
      "Real-time in-camera color grading and vehicle lighting synchronization",
      "Final 4K commercial masters delivered within 72 hours of wrap",
    ],
    results: [
      { metric: "-60%", label: "Total Commercial Production Cost", verifiedBy: "Astra Production Audit" },
      { metric: "72 Hours", label: "Shoot Wrap to Final Broadcast Master", verifiedBy: "Studio Telemetry" },
      { metric: "100%", label: "Photorealistic In-Camera Reflections", verifiedBy: "Lead VFX Supervisor" },
    ],
    overview: [
      "AstraFilm Studios proved how virtual production eliminates costly location travel while amplifying creative control.",
    ],
    scope: [
      { number: "01", title: "Unreal Engine 5 Virtual Environments", desc: "Procedural geometry with Nanite and Lumen real-time global illumination." },
      { number: "02", title: "OptiTrack Camera Frustum Tracking", desc: "Sub-millimeter lens position syncing with real-time parallax on the LED wall." },
      { number: "03", title: "Dynamic DMX Studio Light Rigging", desc: "Studio spotlights driven automatically by environment light values." },
    ],
    techStack: ["Unreal Engine 5.4", "OptiTrack", "ARRI Alexa Mini LF", "DaVinci Resolve", "DMX Lighting"],
    faqs: [
      {
        question: "How does virtual production compare in budget to on-location shoots?",
        answer: "By removing flights, hotels, permits, and weather delays, clients typically save 50% to 65% compared to multi-location international film shoots.",
      },
    ],
    isFeatured: false,
    published: true,
    order: 14,
  },
  {
    id: "aura-creative",
    index: "15",
    title: "Aura Botanical Macro Commercial",
    subtitle: "High-Speed Macro Food & Beverage Commercial Cinematography",
    summary:
      "A sensory culinary commercial film combining 1,000 FPS Phantom Flex4K high-speed liquid cinematography, probe macro lenses, and vibrant organic styling for luxury gastronomy.",
    tagline:
      "High-speed 1,000 FPS culinary cinematography capturing the tactile poetry of flavor, liquid collisions, and sensory indulgence.",
    category: "Videography & Photography",
    projectType: "Culinary & Commercial Product Film",
    industry: "Food & FMCG",
    services: [
      { name: "Commercial Media & Motion", href: "/services" },
      { name: "Branding & Graphic Design", href: "/services" },
    ],
    industries: [
      { name: "Food & FMCG", href: "/industries/food-fmcg" },
      { name: "Hospitality & Dining", href: "/industries/hospitality" },
    ],
    image: "/images/project_lifestyle.jpg",
    galleryImages: [
      "/images/project_lifestyle.jpg",
      "/images/service_media.jpg",
      "/images/showreel_thumb.jpg",
    ],
    client: "Aura Organic Botanicals",
    clientApproved: true,
    projectDate: "September 2025",
    year: "2025",
    duration: "5 Weeks",
    sla: "1000 FPS High Speed",
    badge: "PHANTOM 4K // HIGH-SPEED MACRO",
    tags: ["High-Speed Film", "Phantom Flex4K", "Food Styling", "Macro Cinema", "Commercial"],
    brief:
      "Aura required an appetite-whetting sensory commercial that highlights the purity, viscosity, and natural sparkle of their botanical cold-pressed extracts.",
    challenge:
      "Triggering robotic arm movements and high-pressure liquid droplets with millisecond precision under intense studio lighting without wilting fresh botanical ingredients.",
    solution:
      "Utilized a Bolt high-speed camera robot synchronized with a Phantom Flex4K shooting at 1,000 frames per second, paired with low-heat LED continuous fresnels.",
    deliverables: [
      "60-second national TV spot with Dolby 5.1 surround sound",
      "10 micro-cut commercial loops for social media ads and programmatic video",
      "Pack of 75 ultra-high-resolution macro food photography campaign hero stills",
      "Behind-the-scenes documentary short for brand PR distribution",
    ],
    results: [
      { metric: "1,000 FPS", label: "Ultra Slow-Motion Fluid Clarity", verifiedBy: "Phantom Telemetry" },
      { metric: "+240%", label: "Online Store DTC Sales Velocity", verifiedBy: "Aura Financials" },
      { metric: "9.2M", label: "Earned Social Video Impressions", verifiedBy: "Campaign Report" },
    ],
    overview: [
      "Aura Botanical proved that cinematic macro details trigger immense visceral appetite appeal that drives conversions.",
    ],
    scope: [
      { number: "01", title: "Pneumatic Fluid Trigger Engineering", desc: "Microcontroller solenoids timing droplet collisions within 1/1000th of a second." },
      { number: "02", title: "Bolt Cinebot Motion Control", desc: "Repeatable high-speed camera moves tracking splashing liquids in mid-air." },
      { number: "03", title: "Sensory Color Chemistry", desc: "Vibrant organic color grading accentuating fresh botanicals and citrus zest." },
    ],
    techStack: ["Phantom Flex4K", "Bolt High-Speed Cinebot", "Laowa Probe Lenses", "DaVinci Resolve Studio"],
    faqs: [
      {
        question: "Can these high-speed commercials be adapted for digital billboards?",
        answer: "Yes, we export in uncompressed 4K resolution at custom aspect ratios matching Times Square and Piccadilly Circus LED screens.",
      },
    ],
    isFeatured: false,
    published: true,
    order: 15,
  },
];

export function getPortfolioById(id: string): PortfolioProjectDetail | undefined {
  return portfolioData.find(
    (p) => p.id === id || (id === "apex-performance" && p.id === "apex-fintech")
  );
}

export function getPublishedPortfolios(): PortfolioProjectDetail[] {
  return portfolioData
    .filter((p) => p.published !== false)
    .sort((a, b) => (a.order || 99) - (b.order || 99));
}

export function getFeaturedPortfolios(): PortfolioProjectDetail[] {
  return portfolioData
    .filter((p) => p.isFeatured && p.published !== false)
    .sort((a, b) => (a.order || 99) - (b.order || 99));
}

export function getPortfoliosByCategory(category: PortfolioCategory): PortfolioProjectDetail[] {
  return portfolioData
    .filter((p) => p.category === category && p.published !== false)
    .sort((a, b) => (a.order || 99) - (b.order || 99));
}

export function getRelatedPortfolios(currentId: string, limit = 3): PortfolioProjectDetail[] {
  const current = getPortfolioById(currentId);
  if (!current) return [];

  const others = portfolioData.filter((p) => p.id !== currentId && p.published !== false);

  // Prioritize same category, then same industry
  const sameCategory = others.filter((p) => p.category === current.category);
  const sameIndustry = others.filter((p) => p.industry === current.industry && p.category !== current.category);
  const remaining = others.filter((p) => p.category !== current.category && p.industry !== current.industry);

  return [...sameCategory, ...sameIndustry, ...remaining].slice(0, limit);
}
