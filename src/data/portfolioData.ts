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
  tags?: string[];
  emoji?: string;
  isFeatured?: boolean;
}

export const portfolioData: PortfolioProjectDetail[] = [
  {
    id: "lumen-sal",
    index: "01",
    title: "Lumen Sal",
    subtitle: "Brand Identity & Spatial Architecture",
    tagline: "End-to-end spatial 3D experience, architectural design tokens, and immersive WebGL showroom for luxury interiors.",
    year: "2026",
    category: "Branding",
    isFeatured: true,
    tags: ["Branding", "Spatial 3D", "Identity"],
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
    title: "Toma Nota",
    subtitle: "Brand Identity & Product Design",
    tagline: "Bold typography, interactive editorial layouts, and high-velocity digital product design for an avant-garde creative studio.",
    year: "2025",
    category: "Branding",
    emoji: "🦉",
    tags: ["Branding", "Creative Direction"],
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
    title: "Kailua",
    subtitle: "Development & E-commerce",
    tagline: "High-concurrency headless Shopify e-commerce platform with 3D product configurators and sub-second checkout.",
    year: "2025",
    category: "Development",
    isFeatured: true,
    tags: ["Development", "E-commerce", "Three.js"],
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
    title: "Vanguard Outdoors",
    subtitle: "Commercial Cinematography & Storytelling",
    tagline: "Cinematic commercial brand film, 8K drone cinematography, and immersive narrative storytelling for extreme expedition gear.",
    year: "2025",
    category: "Design",
    emoji: "🎬",
    tags: ["Cinematography", "Storytelling", "Video"],
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
    title: "Aura Creative",
    subtitle: "Joyful Lifestyle Brand Campaign & Identity",
    tagline: "Vibrant multi-channel creative campaign, lifestyle photography, and digital social activation reaching 14M impressions.",
    year: "2026",
    category: "Branding",
    emoji: "✨",
    tags: ["Branding", "Campaign", "Lifestyle"],
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
    title: "Core Web Platform",
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
    tags: ["Development", "Cloud", "Next.js"],
    faqs: [
      {
        question: "Can this system integrate with our legacy enterprise databases?",
        answer: "Yes, our microservices layer includes custom connector adaptors that interface with legacy SQL, Oracle, or SOAP services while exposing modern, type-safe GraphQL/REST APIs.",
      },
    ],
  },
  {
    id: "astrafilm-studios",
    index: "07",
    title: "AstraFilm Studios",
    subtitle: "Commercial 8K Film Production & Studio Sets",
    tagline: "Commercial 8K film production, virtual production volumes, and visual narrative storytelling for global consumer brands.",
    year: "2026",
    category: "Design",
    image: "/images/service_media.jpg",
    galleryImages: [
      "/images/service_media.jpg",
      "/images/project_forest_film.jpg",
    ],
    client: "Astra International",
    duration: "8 Weeks",
    sla: "8K Virtual Volume",
    badge: "VIRTUAL PRODUCTION // 8K MASTER",
    isFeatured: true,
    tags: ["Design", "Cinematography", "Media"],
    overview: [
      "AstraFilm Studios required a hyper-realistic virtual production pipeline combining Unreal Engine 5.4 in-camera visual effects with full robotic camera control.",
      "We orchestrated an end-to-end studio setup featuring LED volume parallax tracking, real-time lighting synchronization, and high-throughput ACES color management.",
    ],
    quote: {
      text: "The speed and fidelity of RnD's virtual production workflow transformed our entire commercial studio output.",
      author: "Elena Rostova • Executive Producer, AstraFilm",
    },
    deliverables: [
      "LED volume virtual set synchronization with Unreal Engine 5",
      "Real-time camera tracking calibration and lens profiling",
      "Broadcast-grade 8K ProRes 4444 XQ mastering pipeline",
      "Comprehensive studio operational training manual",
    ],
    scope: [
      {
        number: "01",
        title: "Virtual Environment Asset Pipeline",
        desc: "Nanite and Lumen scene construction optimized for real-time LED rendering.",
      },
      {
        number: "02",
        title: "In-Camera Visual Effects (ICVFX) Setup",
        desc: "Syncing camera tracking data with camera frustum projections.",
      },
      {
        number: "03",
        title: "Dynamic Lighting & DMX Integration",
        desc: "Automated studio lighting matching virtual world sun position.",
      },
      {
        number: "04",
        title: "High-Bitrate Edge Data Offloading",
        desc: "100GbE SAN storage architecture for simultaneous multi-camera raw takes.",
      },
      {
        number: "05",
        title: "Color Science & ACES Workflow",
        desc: "Strict chromatic calibration between sensor, display volume, and post pipeline.",
      },
      {
        number: "06",
        title: "Final Master Delivery & Archive",
        desc: "LTO tape archiving and multi-format SDR/HDR client deliverables.",
      },
    ],
    techStack: ["Unreal Engine 5", "RED V-Raptor", "DaVinci Resolve", "AJA Video Systems"],
    faqs: [
      {
        question: "Can we shoot in real time without green screen post-production?",
        answer: "Yes, ICVFX captures photorealistic backgrounds with realistic lighting reflections directly on the actors, eliminating keying entirely.",
      },
    ],
  },
  {
    id: "zenith-social",
    index: "08",
    title: "Zenith Social",
    subtitle: "Omnichannel Social Media & Creator Growth",
    tagline: "Viral TikTok and Instagram content engine, algorithmic growth frameworks, and high-engagement creator activations.",
    year: "2026",
    category: "Social Media",
    image: "/images/service_social.jpg",
    galleryImages: [
      "/images/service_social.jpg",
      "/images/service_marketing.jpg",
    ],
    client: "Zenith Brands",
    duration: "Continuous Retainer",
    sla: "+450% Engagement",
    badge: "TIKTOK & IG // CREATOR ENGINE",
    emoji: "📱",
    tags: ["Social Media", "Community", "Growth"],
    overview: [
      "Zenith needed to dominate short-form vertical video across TikTok, Instagram Reels, and YouTube Shorts to engage Gen-Z audiences at massive scale.",
      "We built an agile creative production pod that turns cultural trends into viral video assets within 24 hours, driving millions of organic views weekly.",
    ],
    quote: {
      text: "Our brand engagement skyrocketed within 60 days. The RnD social pod is our secret weapon.",
      author: "Maya Lin • Head of Brand, Zenith",
    },
    deliverables: [
      "Daily viral short-form video production (40+ assets/month)",
      "Creator collaboration management and influencer seeding",
      "Real-time social listening and trend capitalization",
      "Weekly analytics dashboards with retention benchmarks",
    ],
    scope: [
      {
        number: "01",
        title: "Trend Spotting & Algorithmic Hook Formulation",
        desc: "Daily analysis of breakout audio tracks and viral video structures.",
      },
      {
        number: "02",
        title: "Rapid Vertical Video Production & Motion FX",
        desc: "Dynamic captions, kinetic typography, and fast-paced visual hooks.",
      },
      {
        number: "03",
        title: "Community Management & Comment Conversions",
        desc: "Active banter, pinned response videos, and brand relationship building.",
      },
      {
        number: "04",
        title: "Creator Network Seeding & Whitelisting",
        desc: "Scaling reach through authenticated micro-influencer collaborations.",
      },
      {
        number: "05",
        title: "Spark Ads & Paid Amplification",
        desc: "Boosting organic winners with precision algorithmic ad spend.",
      },
      {
        number: "06",
        title: "Retention & Shareability Optimization",
        desc: "Continuous A/B testing on initial 3-second hook metrics.",
      },
    ],
    techStack: ["TikTok Creator Hub", "CapCut Pro", "Figma", "Sprout Social", "Meta Ads"],
    faqs: [
      {
        question: "How fast can you respond to a breaking social media trend?",
        answer: "Our sprint team can script, record, edit, and publish trending content within 12 to 24 hours of a trend emerging.",
      },
    ],
  },
  {
    id: "pantone-identity",
    index: "09",
    title: "Pantone Identity Studio",
    subtitle: "Comprehensive Design Systems & Packaging",
    tagline: "Physical packaging architecture, luxury unboxing experiences, and global multi-sensory brand design systems.",
    year: "2025",
    category: "Branding",
    image: "/images/service_branding.jpg",
    galleryImages: [
      "/images/service_branding.jpg",
      "/images/project_toma_nota.jpg",
    ],
    client: "Pantone Design Lab",
    duration: "10 Weeks",
    sla: "Zero Tolerance Print",
    badge: "LUXURY PACKAGING // BRAND SYSTEM",
    isFeatured: true,
    tags: ["Branding", "Packaging", "Design"],
    overview: [
      "Pantone Identity Studio partnered with us to engineer a next-generation tactile packaging system for limited-run artisan cosmetics.",
      "We engineered sustainable molded-fiber structural packaging, custom embossing dies, and high-precision spot-UV varnish guidelines that received international acclaim.",
    ],
    quote: {
      text: "The unboxing experience is sheer perfection. Every fold and texture conveys pure luxury.",
      author: "Christophe Blanc • Design Principal, Pantone Lab",
    },
    deliverables: [
      "Precision structural packaging CAD dielines and 3D renderings",
      "Sustainable biodegradable paper pulp material formulations",
      "Complete print specification manuals with Pantone ink matching",
      "Interactive 3D unboxing viewer for digital previewing",
    ],
    scope: [
      {
        number: "01",
        title: "Structural Engineering & Unboxing Physics",
        desc: "Designing ergonomic folds, magnetic closures, and tactile drawer slides.",
      },
      {
        number: "02",
        title: "Eco-Conscious Material Discovery",
        desc: "Testing biodegradable sugarcane pulp and FSC-certified recyclable boards.",
      },
      {
        number: "03",
        title: "3D CAD Mockups & Photorealistic Renders",
        desc: "Simulating foil stamping, blind debossing, and matte soft-touch coatings.",
      },
      {
        number: "04",
        title: "Press-Check Calibration & Print QC",
        desc: "On-site press checks ensuring delta-E color tolerance under 1.5.",
      },
      {
        number: "05",
        title: "Global Production Scale Specification",
        desc: "Vendor-ready vector dielines and high-volume assembly blueprints.",
      },
      {
        number: "06",
        title: "Digital 3D E-Commerce Integration",
        desc: "Interactive 3D unboxing animation deployed on client web store.",
      },
    ],
    techStack: ["Adobe Illustrator", "Esko ArtiosCAD", "KeyShot", "Blender 3D"],
    faqs: [
      {
        question: "Are all materials fully recyclable and sustainable?",
        answer: "Yes, 100% of the packaging materials are FSC-certified and use soy-based inks without harmful plastic lamination.",
      },
    ],
  },
  {
    id: "omnigrowth-analytics",
    index: "10",
    title: "OmniGrowth Analytics",
    subtitle: "Performance Marketing, SEO & Attribution",
    tagline: "Algorithmic paid media bidding, multi-touch conversion attribution, and technical SEO scaling customer acquisition by 400%.",
    year: "2026",
    category: "Community",
    image: "/images/service_marketing.jpg",
    galleryImages: [
      "/images/service_marketing.jpg",
      "/images/service_webdev.jpg",
    ],
    client: "OmniGrowth Media",
    duration: "12 Weeks",
    sla: "4.8x Blended ROAS",
    badge: "ATTRIBUTION ENGINE // SEO SCALE",
    tags: ["Community", "SEO", "Analytics"],
    overview: [
      "OmniGrowth Media required a deterministic marketing attribution engine to measure blended customer acquisition costs across Google, Meta, and organic search.",
      "We implemented server-side tracking via Cloudflare Workers, custom BigQuery attribution models, and programmatic SEO architecture that generated 85,000 monthly organic visits.",
    ],
    quote: {
      text: "Our blended ROAS climbed to 4.8x while slashing our paid CPA in half. Unbelievable return on investment.",
      author: "Rachel Sterling • CMO, OmniGrowth",
    },
    deliverables: [
      "Server-side CAPI tracking engine with zero cookie degradation",
      "BigQuery data warehouse with automated attribution dashboards",
      "Programmatic SEO landing page mesh targeting 500+ long-tail keywords",
      "Automated budget re-allocation scripts for Google Ads & Meta Ads",
    ],
    scope: [
      {
        number: "01",
        title: "Server-Side Tracking & Conversions API",
        desc: "Eliminating ad-blocker loss with edge-computed first-party data.",
      },
      {
        number: "02",
        title: "Multi-Touch Attribution Modeling",
        desc: "Shapley value and Markov chain models measuring genuine channel incrementality.",
      },
      {
        number: "03",
        title: "Programmatic SEO Architecture",
        desc: "Dynamic Next.js 15 template generation for hundreds of hyper-targeted queries.",
      },
      {
        number: "04",
        title: "Core Web Vitals & Speed Optimization",
        desc: "Achieving top SERP rankings with sub-1s Largest Contentful Paint (LCP).",
      },
      {
        number: "05",
        title: "High-Intent Creative Ad Refresh",
        desc: "Weekly iterative multivariate testing on ad copy and video hooks.",
      },
      {
        number: "06",
        title: "Executive Looker Studio Dashboard",
        desc: "Automated real-time visibility into customer lifetime value (LTV) and CAC.",
      },
    ],
    techStack: ["Google BigQuery", "Cloudflare Workers", "Looker Studio", "Meta CAPI", "Google Ads API"],
    faqs: [
      {
        question: "How do you track users after iOS 14.5 and third-party cookie deprecation?",
        answer: "We deploy server-side CAPI on your own custom domain, bypassing client-side cookie blockers with 100% compliant first-party identity resolution.",
      },
    ],
  },
  {
    id: "quantum-mobile-os",
    index: "11",
    title: "Quantum Mobile OS",
    subtitle: "iOS & Android Cross-Platform Experience",
    tagline: "Ultra-fluid React Native mobile application with biometric security, offline SQLite syncing, and 120Hz micro-animations.",
    year: "2025",
    category: "UX/UI",
    image: "/images/service_mobile.jpg",
    galleryImages: [
      "/images/service_mobile.jpg",
      "/images/nebula_cloud_os_3d.jpg",
    ],
    client: "Quantum Mobile Corp",
    duration: "14 Weeks",
    sla: "120 FPS Mobile",
    badge: "REACT NATIVE // 120HZ FLUID",
    tags: ["UX/UI", "Mobile", "React Native"],
    overview: [
      "Quantum Mobile required a mission-critical consumer app that feels truly native on both iOS and Android, featuring biometric authentication and offline-first capabilities.",
      "We engineered a modern React Native architecture utilizing the new Bridgeless Fabric architecture, Skia graphics engine, and WatermelonDB for instantaneous local queries.",
    ],
    quote: {
      text: "The application feels faster than native Swift. The animations and gestures are unbelievably smooth.",
      author: "Tariq Mansoor • VP Engineering, Quantum Mobile",
    },
    deliverables: [
      "Cross-platform iOS and Android apps with 98% shared codebase",
      "Offline-first sync engine with conflict resolution algorithms",
      "Biometric FaceID / TouchID authentication with hardware keystore",
      "Automated Fastlane deployment pipeline to App Store & Google Play",
    ],
    scope: [
      {
        number: "01",
        title: "Fabric Architecture & Skia 2D Rendering",
        desc: "Hardware-accelerated rendering achieving fluid 120 FPS frame rates.",
      },
      {
        number: "02",
        title: "Offline-First WatermelonDB Sync",
        desc: "Local SQLite database syncing seamlessly when network connectivity restores.",
      },
      {
        number: "03",
        title: "Tactile Gesture & Haptic Engine",
        desc: "Natural spring physics gestures paired with micro-haptic feedback.",
      },
      {
        number: "04",
        title: "Hardware Enclave Biometric Security",
        desc: "Zero-knowledge cryptographic key storage in Secure Enclave.",
      },
      {
        number: "05",
        title: "Push Notification & Deeplinking Mesh",
        desc: "Contextual personalized notifications with instant screen routing.",
      },
      {
        number: "06",
        title: "Automated Store Submissions & OTA Updates",
        desc: "Continuous over-the-air updates via Expo EAS without waiting for app store reviews.",
      },
    ],
    techStack: ["React Native", "Expo EAS", "React Native Skia", "TypeScript", "WatermelonDB"],
    faqs: [
      {
        question: "Does the app support real-time over-the-air bug fixes?",
        answer: "Yes, utilizing Expo EAS Update, JavaScript hotfixes and UI enhancements can be published directly to active users in minutes.",
      },
    ],
  },
  {
    id: "synapse-digital",
    index: "12",
    title: "Synapse Digital Hub",
    subtitle: "Dedicated Engineering & Design Pods",
    tagline: "Bespoke engineering squads embedded within enterprise product teams to accelerate release cycles by 300%.",
    year: "2026",
    category: "Development",
    image: "/images/agency_team_studio.jpg",
    galleryImages: [
      "/images/agency_team_studio.jpg",
      "/images/service_webdev.jpg",
    ],
    client: "Synapse Ventures",
    duration: "Annual Contract",
    sla: "99.9% Sprint Velocity",
    badge: "DEDICATED PODS // RAPID DEPLOY",
    tags: ["Development", "Agency", "Team"],
    overview: [
      "Synapse Ventures required dedicated, senior-level engineering and design pods to rapidly prototype, build, and ship venture-backed SaaS products.",
      "We embedded cross-functional pods consisting of lead architects, full-stack Next.js developers, and senior UI/UX designers working seamlessly inside the client's Jira and GitHub workflows.",
    ],
    quote: {
      text: "RnD's dedicated engineering squad gave us enterprise-grade development velocity from day one.",
      author: "David Vance • Partner, Synapse Ventures",
    },
    deliverables: [
      "Fully integrated 6-person dedicated engineering and design pod",
      "Two-week agile sprint cadence with transparent burn-down charts",
      "Continuous CI/CD pipeline and automated pull-request code reviews",
      "Complete IP transfer and on-demand team elasticity",
    ],
    scope: [
      {
        number: "01",
        title: "Pod Assembly & Technical Alignment",
        desc: "Matching domain-specialized engineers to client stack and architecture.",
      },
      {
        number: "02",
        title: "Sprint Cadence & Standup Integration",
        desc: "Daily async standups, backlog grooming, and bi-weekly sprint demos.",
      },
      {
        number: "03",
        title: "Rapid Prototyping & MVP Execution",
        desc: "Shipping validated functional prototypes to beta users in 14 days.",
      },
      {
        number: "04",
        title: "Code Review & Architecture Governance",
        desc: "Zero-defect policies with strict linting, typechecks, and coverage standards.",
      },
      {
        number: "05",
        title: "Scalability Stress Testing & DevOps",
        desc: "Automated load testing up to 50,000 concurrent virtual users.",
      },
      {
        number: "06",
        title: "Long-Term Knowledge Transfer & Handoff",
        desc: "Pair programming sessions ensuring seamless internal ownership.",
      },
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "GitHub Actions", "Docker"],
    faqs: [
      {
        question: "Can we scale the dedicated pod size up or down as project needs change?",
        answer: "Yes, our flexible retainer model allows scaling team capacity up or down with 30 days notice.",
      },
    ],
  },
];

export function getPortfolioById(id: string): PortfolioProjectDetail | undefined {
  return portfolioData.find((p) => p.id === id);
}
