import { BeforeAfterData } from "@/components/BeforeAfterSection";

export interface PortfolioProjectDetail {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  tagline: string;
  year: string;
  category: string;
  image: string;
  galleryImages: string[];
  client: string;
  duration: string;
  sla: string;
  badge: string;
  overview: string[];
  quote: {
    text: string;
    author: string;
  };
  deliverables: string[];
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
}

export const portfolioData: PortfolioProjectDetail[] = [
  {
    id: "lumen-sal",
    index: "01",
    title: "Lumen Sal Spatial Architecture",
    subtitle: "Brand Identity & Spatial Architecture",
    tagline: "End-to-end spatial 3D experience, architectural design tokens, and immersive WebGL showroom for luxury interiors.",
    year: "2026",
    category: "Branding & Spatial 3D",
    image: "/images/project_lumen_sal.jpg",
    galleryImages: [
      "/images/project_lumen_sal.jpg",
      "/images/nebula_cloud_os_3d.jpg",
    ],
    client: "Lumen Architecture Atelier",
    duration: "12 Weeks",
    sla: "60 FPS WebGL",
    badge: "SPATIAL WEB // 3D BRANDING",
    overview: [
      "Lumen Sal required an iconic digital flagship that translates the tactile physicality of bespoke European architecture into an interactive browser experience.",
      "We engineered a custom Three.js / WebGL viewport with physically-based rendering (PBR), dynamic lighting conditions, and an ultra-fast headless Next.js 15 content architecture.",
    ],
    quote: {
      text: "RnD Technosoft bridged the gap between tactile spatial design and web technology with surgical precision.",
      author: "Julian Vance • Creative Director, Lumen Atelier",
    },
    deliverables: [
      "Custom WebGL 3D architectural showroom running at steady 60 FPS",
      "Interactive lighting condition simulations (Dawn, Midday, Twilight)",
      "Headless CMS integration with sub-second portfolio filtering",
      "Comprehensive design token library and brand guidelines",
    ],
    scope: [
      {
        number: "01",
        title: "3D CAD Topology & PBR Material Optimization",
        desc: "Poly-reduction, Draco compression, and PBR texture baking for sub-2MB model payloads.",
      },
      {
        number: "02",
        title: "Spatial Three.js / WebGL Engine Development",
        desc: "Custom shaders, post-processing bloom, and camera orbital spline paths.",
      },
      {
        number: "03",
        title: "Atomic Design System & Micro-Interactions",
        desc: "Interactive cursor physics, fluid layout transitions, and bespoke typography tokens.",
      },
      {
        number: "04",
        title: "Headless Content Infrastructure",
        desc: "Automated media pipelines on Cloudflare R2 with global edge distribution.",
      },
      {
        number: "05",
        title: "Performance & Lighthouse Optimization",
        desc: "Achieved 99 Lighthouse performance score with zero layout shifts.",
      },
      {
        number: "06",
        title: "Full Handover & Source IP Deployment",
        desc: "Complete documentation, CI/CD automated staging, and source code transfer.",
      },
    ],
    techStack: ["Next.js 15", "Three.js", "React Three Fiber", "GSAP", "Tailwind CSS", "Cloudflare"],
    faqs: [
      {
        question: "How did you achieve fast load times with heavy 3D models?",
        answer: "We utilized Draco geometry compression, KTX2 texture transcoding, and progressive level-of-detail (LOD) streaming so the core page loads in under 700ms before 3D assets progressively stream in.",
      },
      {
        question: "Is the 3D showroom fully responsive on mobile smartphones?",
        answer: "Yes. The WebGL canvas detects mobile GPU capability and dynamically scales shadow resolution and particle counts to sustain a rock-solid 60 FPS even on mid-tier mobile hardware.",
      },
    ],
    beforeAfter: {
      badge: "SPATIAL ARCHITECTURE TRANSFORMATION",
      title: "Tactile Real-Time 3D",
      highlightText: "Transformation",
      description: "Comparing Lumen Sal's previous static 2D brochure website with the engineered Three.js / WebGL architectural showroom featuring real-time sunlight simulation.",
      beforeLabel: "Legacy Static 2D Portfolio (2024)",
      afterLabel: "RnD Spatial 3D Showroom (2026)",
      beforeImage: "/images/about_blank_screen.jpg",
      afterImage: "/images/project_lumen_sal.jpg",
      beforeTagline: "Flat static JPEGs, 5.2s load, zero spatial immersion",
      afterTagline: "Sub-second edge load, 60 FPS WebGL, real-time PBR lighting",
      metrics: [
        {
          label: "Client Dwell Time / Session Depth",
          before: "42 sec",
          after: "5 min 18 sec",
          improvement: "+657% Dwell",
          subtext: "Interactive 3D camera spline exploration",
          icon: "gauge",
        },
        {
          label: "Inbound High-Ticket Inquiries",
          before: "4 / month",
          after: "31 / month",
          improvement: "+675% Inbound",
          subtext: "Direct architect commission requests",
          icon: "trending",
        },
        {
          label: "Asset Payload Optimization",
          before: "18.4 MB",
          after: "1.9 MB",
          improvement: "-89.6% Size",
          subtext: "Draco poly-compression & KTX2 textures",
          icon: "zap",
        },
        {
          label: "WebGL Frame Stability",
          before: "18-24 FPS",
          after: "60 FPS Locked",
          improvement: "Silky Smooth",
          subtext: "Dynamic shadow cascades & LOD switching",
          icon: "shield",
        },
      ],
      legacyPoints: [
        "Flat, static catalog requiring clients to download 45MB PDF spec sheets",
        "Zero real-time lighting interaction or material texture inspection",
        "High bounce rate on smartphones due to uncompressed hero imagery",
        "Disjointed brand presentation failing to communicate luxury craftsmanship",
      ],
      modernPoints: [
        "Interactive WebGL viewport allowing clients to orbit spatial 3D interiors",
        "Real-time celestial lighting toggle (Dawn, High Noon, Golden Hour)",
        "Progressive sub-second streaming with instant tactile feedback",
        "Sculptural design token typography commanding ultra-luxury prestige",
      ],
    },
  },
  {
    id: "toma-nota",
    index: "02",
    title: "Toma Nota Studio Identity",
    subtitle: "Brand Identity & Product Design",
    tagline: "Bold typography, interactive editorial layouts, and high-velocity digital product design for an avant-garde creative studio.",
    year: "2025",
    category: "Branding",
    image: "/images/project_toma_nota.jpg",
    galleryImages: [
      "/images/project_toma_nota.jpg",
      "/images/service_branding.jpg",
    ],
    client: "Toma Nota Studios",
    duration: "8 Weeks",
    sla: "Zero CLS",
    badge: "CREATIVE DIRECTION // DESIGN SYSTEM",
    overview: [
      "Toma Nota needed a brand identity and web platform that broke through traditional agency conventions, featuring avant-garde typography, tactile micro-animations, and dynamic visual rhythms.",
      "We orchestrated a complete identity transformation across visual typography, spatial grid foundations, and an interactive digital portfolio with sub-millisecond page transitions.",
    ],
    quote: {
      text: "The brand identity RnD built established us as an unquestioned market authority overnight.",
      author: "Sofia Calderon • Managing Partner, Toma Nota",
    },
    deliverables: [
      "Custom typographical identity system & bespoke ligature font pairings",
      "Dynamic high-contrast web portal with fluid cursor interactions",
      "Physical print collateral guidelines & foiled stationery mockups",
      "Social media design kit with 40+ animated vector templates",
    ],
    scope: [
      {
        number: "01",
        title: "Brand Archetype & Typographic Blueprint",
        desc: "Establishing foundational brand voice, color palette, and bespoke editorial grids.",
      },
      {
        number: "02",
        title: "Custom Web Application UI/UX",
        desc: "Choreographed layout animations, magnetic buttons, and custom scroll physics.",
      },
      {
        number: "03",
        title: "Motion Design & Animated Micro-Interactions",
        desc: "GSAP timeline choreography for seamless page transitions.",
      },
      {
        number: "04",
        title: "Responsive Cross-Platform Verification",
        desc: "Rigorous testing across 18 viewports, ensuring flawless typography hierarchy.",
      },
      {
        number: "05",
        title: "Brand Book & Asset Library Delivery",
        desc: "Exported SVG vectors, Figma components, and print-ready vector proofs.",
      },
      {
        number: "06",
        title: "Deployment & Technical SEO Setup",
        desc: "Structured schema markup and social graph OpenGraph integration.",
      },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Figma"],
    faqs: [
      {
        question: "Can this design system be extended to our internal software tools?",
        answer: "Yes, all tokens are organized as standard CSS variables and Tailwind utilities, making it effortless to apply the brand identity to internal dashboards and customer portals.",
      },
    ],
  },
  {
    id: "kailua",
    index: "03",
    title: "Kailua Living Storefront",
    subtitle: "Development & E-commerce",
    tagline: "High-concurrency headless Shopify e-commerce platform with 3D product configurators and sub-second checkout.",
    year: "2025",
    category: "Development",
    image: "/images/service_ecommerce.jpg",
    galleryImages: [
      "/images/service_ecommerce.jpg",
      "/images/project_ecommerce.jpg",
    ],
    client: "Kailua Living Ltd.",
    duration: "14 Weeks",
    sla: "3.4x Conversion",
    badge: "HEADLESS COMMERCE // NEXT.JS",
    overview: [
      "Kailua Living sought to migrate away from slow monolithic e-commerce towards a headless architecture capable of handling viral product drops with zero latency.",
      "We delivered an edge-first headless Shopify storefront built on Next.js 15, integrating real-time inventory synchronization, 3D product customization, and a streamlined 1-click checkout funnel.",
    ],
    quote: {
      text: "Our conversion rate surged by 340% within the first month of launching the new headless platform.",
      author: "Marcus Aurel • E-commerce Director, Kailua",
    },
    deliverables: [
      "Headless Next.js 15 Shopify Storefront with edge caching",
      "Interactive 3D product color and material customizer",
      "Algolia instant search with predictive multi-attribute filtering",
      "Automated multi-currency and global tax checkout integration",
    ],
    scope: [
      {
        number: "01",
        title: "Headless Shopify Storefront Architecture",
        desc: "Storefront GraphQL API integration with Server Components for zero-wait rendering.",
      },
      {
        number: "02",
        title: "3D Product Viewer & Customizer",
        desc: "Interactive canvas allowing customers to preview fabric textures in photorealistic 3D.",
      },
      {
        number: "03",
        title: "Ultra-Fast Algolia Search & Filter Mesh",
        desc: "Instant search results with sub-20ms query latency across 10,000+ SKUs.",
      },
      {
        number: "04",
        title: "Conversion-Rate-Optimized Checkout Flow",
        desc: "Frictionless express checkout with Apple Pay, Google Pay, and Klarna.",
      },
      {
        number: "05",
        title: "Enterprise ERP & WMS Inventory Sync",
        desc: "Real-time webhook sync between warehouse management and live storefront.",
      },
      {
        number: "06",
        title: "Cloudflare Edge Security & Bot Protection",
        desc: "DDoS mitigation and queue management during high-volume flash drops.",
      },
    ],
    techStack: ["Next.js 15", "Shopify Storefront API", "Three.js", "Algolia", "Tailwind CSS"],
    faqs: [
      {
        question: "Can our non-technical merchandising team update content easily?",
        answer: "Yes, all promotional banners, collection features, and discounts are easily edited via the Shopify admin and headless visual CMS without needing code changes.",
      },
    ],
  },
  {
    id: "mission-ops",
    index: "04",
    title: "Vanguard Outdoors Cinema",
    subtitle: "Commercial Cinematography & Storytelling",
    tagline: "Cinematic commercial brand film, 8K drone cinematography, and immersive narrative storytelling for extreme expedition gear.",
    year: "2025",
    category: "Media Production",
    image: "/images/project_forest_film.jpg",
    galleryImages: [
      "/images/project_forest_film.jpg",
      "/images/service_media.jpg",
    ],
    client: "Vanguard Media & Apparel",
    duration: "6 Weeks",
    sla: "8K Master",
    badge: "COMMERCIAL FILM // 8K MASTER",
    overview: [
      "Vanguard Outdoors required an adrenaline-fueled commercial campaign showcasing their alpine gear under sub-zero blizzard conditions across the Swiss Alps.",
      "Our media production unit deployed RED V-Raptor 8K cameras, cinematic FPV drones, and directional spatial audio rigs to capture visceral expedition footage.",
    ],
    quote: {
      text: "The visuals took our global audience's breath away. An absolute masterpiece of commercial filmmaking.",
      author: "Henrik Lind • VP Brand, Vanguard",
    },
    deliverables: [
      "90-second hero commercial film in 8K DCI master format",
      "Social cutdowns (15s, 30s, 60s) in vertical 9:16 and 4:5 ratios",
      "Dolby Atmos spatial sound mix with bespoke orchestral scoring",
      "Color grading suite deliverables with ACES color space accuracy",
    ],
    scope: [
      {
        number: "01",
        title: "Pre-Production & High-Altitude Location Scouting",
        desc: "Logistics planning, safety protocols, and narrative storyboard choreography.",
      },
      {
        number: "02",
        title: "8K Cinema Camera & FPV Drone Production",
        desc: "Extreme weather camera operation with RED 8K sensors and high-speed primes.",
      },
      {
        number: "03",
        title: "Dolby Atmos Spatial Audio Design",
        desc: "Field foley recording, atmospheric wind layers, and custom orchestral composition.",
      },
      {
        number: "04",
        title: "DaVinci Resolve Color Mastery",
        desc: "Color science tuned for natural skin tones and deep icy landscape contrast.",
      },
      {
        number: "05",
        title: "VFX & Screen Replacement Clean-Up",
        desc: "Subtle CGI snow enhancements and logo tracking on apparel.",
      },
      {
        number: "06",
        title: "Global Multi-Platform Broadcast Packaging",
        desc: "Cinema DCP delivery, YouTube HDR, and high-bitrate streaming exports.",
      },
    ],
    techStack: ["RED V-Raptor 8K", "DaVinci Resolve Studio", "Dolby Atmos", "After Effects"],
    faqs: [
      {
        question: "Do you handle filming permits and drone flight clearances?",
        answer: "Yes, our production squad secures all certified flight permits, safety clearances, and international location insurance ahead of shoot days.",
      },
    ],
  },
  {
    id: "apex-fintech",
    index: "05",
    title: "Aura Creative Global Campaign",
    subtitle: "Joyful Lifestyle Brand Campaign & Identity",
    tagline: "Vibrant multi-channel creative campaign, lifestyle photography, and digital social activation reaching 14M impressions.",
    year: "2026",
    category: "Branding",
    image: "/images/project_lifestyle.jpg",
    galleryImages: [
      "/images/project_lifestyle.jpg",
      "/images/service_marketing.jpg",
    ],
    client: "Aura Global",
    duration: "10 Weeks",
    sla: "14M Impressions",
    badge: "GLOBAL CAMPAIGN // CREATIVE STRATEGY",
    overview: [
      "Aura Global launched their next-generation lifestyle product line across 12 international territories, requiring unified creative direction and rapid social asset production.",
      "We produced over 120 creative assets, managing commercial photography sets, 3D motion graphics, and paid performance social variants that drove record pre-orders.",
    ],
    quote: {
      text: "RnD Technosoft delivered creative excellence at unprecedented velocity. A true partner in growth.",
      author: "Priya Patel • Global Marketing VP, Aura",
    },
    deliverables: [
      "120+ High-definition photography and video campaign assets",
      "Paid social performance motion ads with 4.8x average ROAS",
      "Dynamic interactive landing page with pre-order counter",
      "Global influencer creative kit and physical PR unboxing suite",
    ],
    scope: [
      {
        number: "01",
        title: "Creative Campaign Concept & Moodboarding",
        desc: "Defining core emotional narratives, color aesthetics, and product messaging.",
      },
      {
        number: "02",
        title: "Multi-Location Commercial Photo Shoot",
        desc: "Studio lighting, lifestyle sets, and high-fashion model direction.",
      },
      {
        number: "03",
        title: "3D Product CGI & Motion Graphics",
        desc: "Photorealistic product spinning reveals and exploded-view animations.",
      },
      {
        number: "04",
        title: "High-Converting Pre-Order Landing Page",
        desc: "Interactive countdown, customer review ticker, and Apple Pay checkout.",
      },
      {
        number: "05",
        title: "Multi-Channel Paid Ad Quantization",
        desc: "A/B testing creative variants across Meta, TikTok, and YouTube.",
      },
      {
        number: "06",
        title: "Analytics Dashboard & Post-Campaign Report",
        desc: "Real-time ROAS tracking and audience sentiment data visualization.",
      },
    ],
    techStack: ["Next.js", "Figma", "Blender 3D", "After Effects", "Meta Ads"],
    faqs: [
      {
        question: "How do you ensure consistent brand guidelines across multiple global agencies?",
        answer: "We deliver an interactive online brand portal where local marketing teams can download approved assets, color profiles, and typography rules in one click.",
      },
    ],
  },
  {
    id: "nebula-cloud",
    index: "06",
    title: "Core Web Platform Next.js 15",
    subtitle: "Modern Next.js 15 Web Applications & Cloud",
    tagline: "Enterprise cloud application mesh with distributed microservices, multi-tenant databases, and zero-trust authentication.",
    year: "2026",
    category: "Development",
    image: "/images/service_webdev.jpg",
    galleryImages: [
      "/images/service_webdev.jpg",
      "/images/nebula_cloud_os_3d.jpg",
    ],
    client: "CoreStack Labs",
    duration: "16 Weeks",
    sla: "99.99% Uptime",
    badge: "ENTERPRISE CLOUD // DISTRIBUTED ARCHITECTURE",
    overview: [
      "CoreStack Labs needed to unify their fragmented B2B enterprise SaaS offerings into a single high-performance web dashboard with real-time analytics.",
      "We engineered an event-driven architecture using Next.js 15 Server Components, PostgreSQL read-replicas, and WebSocket telemetry capable of processing 100,000 live data events per second.",
    ],
    quote: {
      text: "The new platform handles our enterprise telemetry effortlessly with zero latency. Game-changing engineering.",
      author: "David Vance • Chief Architect, CoreStack",
    },
    deliverables: [
      "Full-stack Next.js 15 enterprise SaaS dashboard with RBAC security",
      "Real-time WebSocket telemetry engine with Redis Pub/Sub",
      "Terraform Infrastructure as Code (IaC) deployment on AWS EKS",
      "SOC2 Type II compliance audit documentation and secret management",
    ],
    scope: [
      {
        number: "01",
        title: "Multi-Tenant Database Mesh Architecture",
        desc: "PostgreSQL partitioning with automated tenant isolation and connection pooling.",
      },
      {
        number: "02",
        title: "Next.js 15 App Router & Server Actions",
        desc: "Optimized server-side rendering with granular revalidation and edge caching.",
      },
      {
        number: "03",
        title: "Real-Time Telemetry & Data Streaming",
        desc: "Low-latency WebSocket pub/sub processing 100k events/sec.",
      },
      {
        number: "04",
        title: "Role-Based Access Control (RBAC) & SSO",
        desc: "Enterprise SAML, Okta, and Google Workspace authentication.",
      },
      {
        number: "05",
        title: "Automated CI/CD & Blue/Green Deployments",
        desc: "Zero-downtime Kubernetes deployments with automated canary health checks.",
      },
      {
        number: "06",
        title: "Comprehensive Security & Penetration Testing",
        desc: "OWASP Top 10 remediation, automated SAST/DAST, and SOC2 certification.",
      },
    ],
    techStack: ["Next.js 15", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS"],
    faqs: [
      {
        question: "Can this system integrate with our legacy enterprise databases?",
        answer: "Yes, our microservices layer includes custom connector adaptors that interface with legacy SQL, Oracle, or SOAP services while exposing modern, type-safe GraphQL/REST APIs.",
      },
    ],
  },
];

export function getPortfolioById(id: string): PortfolioProjectDetail | undefined {
  return portfolioData.find((p) => p.id === id);
}
