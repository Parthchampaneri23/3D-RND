export interface IndustryProjectWork {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  highlightMetric: string;
  desc: string;
  techStack: string[];
  deliverables: string[];
  year: string;
}

export interface IndustryCaseStudy {
  title: string;
  client: string;
  period: string;
  overview: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string; change: string }[];
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryData {
  slug: string;
  number: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  shortInfo: string;
  heroMetrics: { label: string; value: string }[];
  pillars: { title: string; desc: string; icon: string }[];
  works: IndustryProjectWork[];
  caseStudy: IndustryCaseStudy;
  faqs: IndustryFAQ[];
}

export const industriesList: IndustryData[] = [
  {
    slug: "healthcare",
    number: "01",
    title: "Healthcare & Dental",
    category: "Medical Telemetry & Practice ERP",
    badge: "HIPAA & HL7 VERIFIED",
    tagline: "Clinical Telehealth & 3D Intraoral Systems.",
    shortInfo: "We engineer mission-critical digital healthcare platforms that streamline patient appointments, automate insurance verification, and process real-time biometric telemetry with zero-knowledge cryptographic encryption. From hospital networks to premier cosmetic dental practices, our software sets the benchmark in clinical reliability.",
    heroMetrics: [
      { label: "Compliance Standard", value: "100% HIPAA Safe" },
      { label: "Real-time Telemetry", value: "<85ms Latency" },
      { label: "Diagnostic Accuracy", value: "99.8% Precision" },
    ],
    pillars: [
      {
        title: "Zero-Knowledge Telehealth",
        desc: "End-to-end encrypted WebRTC audio/video consultations with automated electronic health records (EHR) synchronization.",
        icon: "Shield",
      },
      {
        title: "3D Dental Anatomy Viewport",
        desc: "Hardware-accelerated WebGL viewer for intraoral 3D tooth scans, orthodontic staging, and crown CAD models.",
        icon: "Cpu",
      },
      {
        title: "Automated Insurance & Billing",
        desc: "Instantaneous claims verification and electronic co-pay collection via PCI-DSS Level 1 compliant gateways.",
        icon: "FileCheck",
      },
    ],
    works: [
      {
        id: "biopulse-vision",
        title: "BioPulse Telemetry // AI Diagnostic Portal",
        client: "NeuroGene Health Systems",
        category: "Clinical Telehealth & Diagnostics",
        image: "/images/industries/work_healthcare_1.jpg",
        highlightMetric: "85ms Streaming Telemetry",
        desc: "A web-native clinical workstation allowing cardiologists and surgeons to monitor live patient vital streams and 3D organ models concurrently.",
        techStack: ["Next.js 15", "WebRTC", "PyTorch AI", "Three.js", "FHIR / HL7"],
        deliverables: [
          "Zero-latency cardiac telemetry streaming",
          "FHIR and Epic Systems interoperability bridge",
          "Tactile 3D anatomical model inspection viewport",
        ],
        year: "2026",
      },
      {
        id: "omnident-suite",
        title: "OmniDent OS // 3D Intraoral Practice ERP",
        client: "Apex Dental Atelier",
        category: "Dental Practice Management",
        image: "/images/industries/work_healthcare_2.jpg",
        highlightMetric: "4.8x Booking Velocity",
        desc: "Cloud dental practice management software with integrated 3D STL tooth reconstruction, patient treatment timelines, and contactless check-in.",
        techStack: ["React 19", "Three.js WebGL", "PostgreSQL", "TailwindCSS"],
        deliverables: [
          "In-browser 3D tooth crown rotation and color matching",
          "Automated SMS/WhatsApp recall and reminder sequences",
          "Digital consent signing and insurance pre-authorization",
        ],
        year: "2026",
      },
    ],
    caseStudy: {
      title: "Transforming Regional Hospital Network With Cloud Telemetry & Automated Triage",
      client: "Metropolitan Healthcare Alliance",
      period: "14 Weeks Deployment",
      overview: "Metropolitan Healthcare Alliance faced staggering 45-minute average patient check-in bottlenecks across 18 regional outpatient facilities. RnD Technosoft engineered a unified web portal integrating direct EHR telemetry and biometric check-in kiosks.",
      challenge: "Legacy on-premise servers suffered frequent timeouts during peak morning registration hours, while clinicians struggled with slow patient medical history access across disconnected hospital departments.",
      solution: "We deployed a distributed Next.js 15 App Router architecture with multi-region database failover, instant WebRTC remote consultation queues, and HL7-compliant automated patient chart indexing.",
      metrics: [
        { label: "Patient Wait Time", value: "6.2 Min", change: "-86% Reduction" },
        { label: "System Availability", value: "99.99%", change: "Zero Outages" },
        { label: "Digital Check-ins", value: "92.4%", change: "+310% Adoption" },
      ],
      quote: {
        text: "RnD Technosoft transformed our digital clinical operations. What previously required 45 minutes of manual paper forms now completes in under 6 minutes with 100% automated HIPAA compliance.",
        author: "Dr. Alistair Vance",
        role: "Chief Medical Information Officer, Metropolitan Healthcare",
      },
    },
    faqs: [
      {
        question: "How do you guarantee HIPAA and GDPR compliance for patient telemetry?",
        answer: "Every data transmission is encrypted using AES-256 at rest and TLS 1.3 in transit. We sign comprehensive Business Associate Agreements (BAAs) and implement role-based access control (RBAC) with complete immutable audit logs.",
      },
      {
        question: "Can your system integrate with our existing EHR software like Epic or Cerner?",
        answer: "Yes. We build standardized HL7 and FHIR API connectors that bidirectional synchronize patient demographics, diagnostic scans, and clinical notes seamlessly without disrupting current hospital operations.",
      },
      {
        question: "How does the in-browser 3D dental scan visualizer perform on mobile devices?",
        answer: "Using Draco geometry quantization and off-thread Web Workers, 50MB STL dental scans are quantized into sub-2MB payloads that render at silky-smooth 60 FPS on both smartphones and iPads.",
      },
    ],
  },
  {
    slug: "food-fmcg",
    number: "02",
    title: "Food & FMCG",
    category: "Supply Chain & D2C Delivery",
    badge: "IOT SENSOR MESH",
    tagline: "High-Velocity D2C & Cold-Chain Telemetry.",
    shortInfo: "From enterprise beverage manufacturers to high-growth organic food networks, we build high-concurrency D2C e-commerce hubs, automated inventory dispatch meshes, and interactive digital culinary storytelling experiences that drive repeat subscriptions.",
    heroMetrics: [
      { label: "Order Velocity", value: "3.8x Accelerated" },
      { label: "Supply Telemetry", value: "100% Real-time" },
      { label: "Checkout Conversion", value: "5.4% Rate" },
    ],
    pillars: [
      {
        title: "Sub-Second D2C Checkout",
        desc: "Instantaneous Apple Pay and 1-click subscription reorder funnels designed to minimize cart abandonment.",
        icon: "ShoppingBag",
      },
      {
        title: "IoT Cold-Chain Telemetry",
        desc: "Sensor-driven freshness monitoring tracking ambient humidity, temperature, and container GPS in real time.",
        icon: "Cpu",
      },
      {
        title: "Dynamic Smart Bundling",
        desc: "Algorithmic bundle builder maximizing average order value (AOV) with automated threshold shipping discounts.",
        icon: "TrendingUp",
      },
    ],
    works: [
      {
        id: "tastecraft-delivery",
        title: "TasteCraft Direct // High-Velocity Food Subscription",
        client: "TasteCraft Global Brands",
        category: "D2C Food Subscription",
        image: "/images/industries/work_food_1.jpg",
        highlightMetric: "3.8x Recurring Orders",
        desc: "Sub-second headless Shopify storefront delivering localized meal kit subscriptions, dynamic dietary filtering, and flexible delivery calendar pause triggers.",
        techStack: ["Next.js 15", "Shopify Storefront", "TailwindCSS", "Stripe Billing"],
        deliverables: [
          "Dynamic weekly menu customization engine",
          "Automated recurring subscription billing portal",
          "Sub-600ms global Largest Contentful Paint (LCP)",
        ],
        year: "2026",
      },
      {
        id: "coldchain-os",
        title: "FreshLogix IoT // Cold-Chain Inventory Mesh",
        client: "Nordic Dairy Consortium",
        category: "Cold-Chain Logistics ERP",
        image: "/images/industries/work_food_2.jpg",
        highlightMetric: "-42% Product Spoilage",
        desc: "Real-time logistics command center tracking temperature excursions and predicted expiry dates across 450+ refrigerated transit corridors.",
        techStack: ["TypeScript", "WebSockets", "MQTT IoT", "PostgreSQL", "Docker"],
        deliverables: [
          "Real-time sensor telemetry dashboard with automated anomaly SMS alerts",
          "Automated FIFO inventory dispatch routing",
          "Predictive shelf-life decay modeling algorithms",
        ],
        year: "2026",
      },
    ],
    caseStudy: {
      title: "Scaling Direct-to-Consumer Organic Beverage Brand from Regional to Pan-National",
      client: "Verde Botanicals",
      period: "10 Weeks Deployment",
      overview: "Verde Botanicals experienced high cart abandonment rates and unpredictable inventory stockouts during viral influencer campaigns. RnD Technosoft rebuilt their entire digital flagship architecture.",
      challenge: "Their monolithic CMS platform collapsed under traffic surges of 25,000 concurrent visitors, causing payment timeouts and negative consumer reviews.",
      solution: "We deployed an ultra-scalable headless Next.js architecture on edge CDNs with instantaneous checkout, automated warehouse stock balancing, and personalized flavor profile quizzes.",
      metrics: [
        { label: "Checkout Conversion", value: "5.8%", change: "+240% Lift" },
        { label: "Average Order Value", value: "$68.50", change: "+44% Increase" },
        { label: "Peak Uptime SLA", value: "100%", change: "Zero Downtime" },
      ],
      quote: {
        text: "During our national product launch, we had 40,000 concurrent users hit our store within 10 minutes. The site loaded in under 400ms and not a single transaction failed.",
        author: "Camille Laurent",
        role: "Founder & CMO, Verde Botanicals",
      },
    },
    faqs: [
      {
        question: "How do you handle flash sale traffic spikes for viral food launches?",
        answer: "By decoupling the frontend presentation layer from the database using edge static pre-rendering (PPR) and resilient asynchronous Redis queue workers, our platforms easily absorb 100,000+ concurrent shoppers without slowdown.",
      },
      {
        question: "Can we support custom subscription cadences (e.g. bi-weekly, monthly) with customer pause options?",
        answer: "Yes, our custom subscription engine empowers customers to skip weeks, swap flavours, change delivery addresses, and manage renewals directly from a frictionless 1-click customer portal.",
      },
    ],
  },
  {
    slug: "retail-ecommerce",
    number: "03",
    title: "Retail & E-commerce",
    category: "Spatial Web & Omnichannel Commerce",
    badge: "60 FPS SPATIAL VIEWPORTS",
    tagline: "Headless Storefronts & 3D Spatial Commerce.",
    shortInfo: "We pioneer the next frontier of online retail by fusing sub-second headless commerce speed with interactive 3D spatial product showrooms. Customers examine tactile materials, customize finishes in real time, and check out instantly across mobile and desktop.",
    heroMetrics: [
      { label: "Revenue Lift", value: "+340% Conversions" },
      { label: "Return Rate (RMA)", value: "-82% Reduction" },
      { label: "Core Web Vitals", value: "99/100 Score" },
    ],
    pillars: [
      {
        title: "Photorealistic 3D Customizer",
        desc: "Custom WebGL GLSL shaders with physical ambient occlusion and multi-material upholstery switching.",
        icon: "Cpu",
      },
      {
        title: "Sub-Second Headless Cart",
        desc: "GraphQL data mesh enabling instantaneous item additions and sub-400ms checkout triggers.",
        icon: "ShoppingBag",
      },
      {
        title: "AI Size & Fit Prediction",
        desc: "Computer vision and demographic sizing algorithms that drastically reduce customer returns.",
        icon: "Sparkles",
      },
    ],
    works: [
      {
        id: "veloce-spaceware",
        title: "Veloce Luxury Showroom // 3D Spatial Watchmaker",
        client: "Aurora Horology Geneva",
        category: "Luxury 3D Spatial Commerce",
        image: "/images/industries/work_retail_1.jpg",
        highlightMetric: "+340% Sales Velocity",
        desc: "A tactile 3D spatial web configurator enabling collectors to inspect hand-finished tourbillon movements and configure custom alligator straps in 60 FPS WebGL.",
        techStack: ["Three.js", "WebGL2", "React 19", "Shopify Storefront", "GLSL Shaders"],
        deliverables: [
          "Micro-facet procedural normal mapping for precious metals",
          "Sub-2MB progressive Draco geometry model streaming",
          "Express Apple Pay / Google Pay direct 1-click triggers",
        ],
        year: "2026",
      },
      {
        id: "nordic-lifestyle",
        title: "Kōya Atelier // Minimalist Furniture Spatial Room",
        client: "Kōya Nordic Design",
        category: "Furniture & Interior Architecture",
        image: "/images/industries/work_retail_2.jpg",
        highlightMetric: "4m 12s Avg Dwell Time",
        desc: "Interactive spatial web app allowing homeowners to place realistic furniture models inside photorealistic virtual rooms with accurate shadow casting.",
        techStack: ["Next.js 15", "Three.js", "WebGPU", "Prisma", "TailwindCSS"],
        deliverables: [
          "Interactive room dimensions builder with realistic daylight cycles",
          "Fabric texture macro zoom with realistic ambient occlusion",
          "Seamless omnichannel cart synchronization with physical showrooms",
        ],
        year: "2026",
      },
    ],
    caseStudy: {
      title: "Eliminating Product Returns & Quadrupling Conversion for Luxury Watch Manufacturer",
      client: "Aurora Horology Geneva",
      period: "12 Weeks Deployment",
      overview: "Aurora Horology struggled with high online purchase hesitation for timepieces priced above $8,000. Static product photography failed to communicate handcrafted case beveling and dial depth.",
      challenge: "Customers routinely contacted customer support asking for video demonstrations or abandoned carts at the final credit card step.",
      solution: "RnD Technosoft engineered an in-browser 60 FPS spatial showroom featuring procedural lighting shaders, tactile strap customizers, and frictionless instant biometric checkout.",
      metrics: [
        { label: "Online Sales Conversion", value: "4.6%", change: "+340% Lift" },
        { label: "Customer Return Rate", value: "1.4%", change: "-82% Reduction" },
        { label: "Average Session Dwell", value: "5m 18s", change: "+490% Dwell" },
      ],
      quote: {
        text: "The 3D spatial configurator created by RnD Technosoft bridges the physical luxury boutique experience directly into the web browser. It has fundamentally redefined our online business.",
        author: "Henri de Montmirail",
        role: "Managing Director, Aurora Horology",
      },
    },
    faqs: [
      {
        question: "Does introducing real-time 3D models slow down website performance?",
        answer: "No. We utilize advanced Draco geometry quantization and Basis Universal texture compression to reduce 100MB CAD files into sub-2MB web payloads that load in under 500ms.",
      },
      {
        question: "Can this 3D configurator integrate with our existing Shopify or Magento backend?",
        answer: "Yes, our headless architecture connects cleanly with Shopify Plus, Magento, BigCommerce, or custom ERP systems via GraphQL APIs.",
      },
    ],
  },
  {
    slug: "hospitality",
    number: "04",
    title: "Hospitality & Resorts",
    category: "Luxury Travel & Digital Concierge",
    badge: "3D VIRTUAL RESORT TOURS",
    tagline: "3D Virtual Tours & Direct Booking Engines.",
    shortInfo: "We craft digital luxury platforms for five-star hotels, secluded island resorts, and boutique hospitality chains. By pairing breathtaking virtual property tours with friction-free direct booking engines, we help properties bypass high OTA commissions.",
    heroMetrics: [
      { label: "Direct Bookings", value: "+260% Growth" },
      { label: "OTA Commission Savings", value: "$420K Saved" },
      { label: "Guest Satisfaction", value: "4.9 / 5 Rating" },
    ],
    pillars: [
      {
        title: "3D Virtual Resort Walkthrough",
        desc: "Interactive spatial property tours showcasing suite ocean views, private infinity pools, and dining verandas.",
        icon: "Compass",
      },
      {
        title: "Direct Zero-Commission Booking",
        desc: "Lightning-fast multi-currency reservation checkout engineered to maximize direct bookings over third-party OTAs.",
        icon: "Landmark",
      },
      {
        title: "Contactless Guest Concierge",
        desc: "Mobile web app for digital room access, spa appointment reservations, and in-room fine dining orders.",
        icon: "Shield",
      },
    ],
    works: [
      {
        id: "aura-haven-resort",
        title: "Aura Haven Maldives // Spatial Island Exploration",
        client: "Aura Luxury Resorts & Spas",
        category: "Ultra-Luxury Island Resort",
        image: "/images/industries/work_hospitality_1.jpg",
        highlightMetric: "+260% Direct Bookings",
        desc: "Immersive 3D interactive island map enabling high-net-worth guests to explore overwater villas, preview sunset dining verandas, and book private yacht transfers.",
        techStack: ["Next.js 15", "Three.js", "WebXR", "Stripe Multi-Currency", "TailwindCSS"],
        deliverables: [
          "Photorealistic 360 virtual villa walk-through with real daylight simulation",
          "Direct multi-currency booking engine with automated room selection",
          "Dynamic concierge booking system for private excursions",
        ],
        year: "2026",
      },
      {
        id: "luxestay-concierge",
        title: "LuxeStay Mobile Concierge // Contactless Experience",
        client: "LuxeStay Boutique Collection",
        category: "Boutique Hospitality Web App",
        image: "/images/industries/work_hospitality_2.jpg",
        highlightMetric: "4.9 Guest Rating",
        desc: "Progressive web app enabling hotel guests to check in remotely, order Michelin-starred room service, and request tailored chauffeur services.",
        techStack: ["React 19", "WebSockets", "PWA", "PostgreSQL", "Node.js"],
        deliverables: [
          "Zero-download web mobile guest key and door access integration",
          "Live chat with 24/7 dedicated guest concierge pod",
          "Automated billing checkout with instant invoice transmission",
        ],
        year: "2026",
      },
    ],
    caseStudy: {
      title: "Eliminating OTA Commission Reliance for Premier Maldivian Resort",
      client: "Aura Haven Maldives",
      period: "12 Weeks Deployment",
      overview: "Aura Haven paid over $400,000 annually in commission fees to online travel agencies (OTAs) because their legacy website failed to convert international luxury travelers.",
      challenge: "High-paying travelers hesitated to book $3,000/night villas without understanding exact sightlines, sun orientations, and room dimensions.",
      solution: "We engineered an interactive 3D spatial island map where prospective guests can orbit the resort, virtually enter each villa, and finalize bookings directly with zero friction.",
      metrics: [
        { label: "Direct Bookings", value: "78.4%", change: "+260% Growth" },
        { label: "Commission Savings", value: "$420,000", change: "Annual Recovery" },
        { label: "Average Booking Value", value: "$18,400", change: "+35% Lift" },
      ],
      quote: {
        text: "RnD Technosoft gave our property an undeniable visual advantage. The interactive 3D resort tour made guests fall in love before they even packed their bags.",
        author: "Sebastian Ross",
        role: "General Manager, Aura Haven Maldives",
      },
    },
    faqs: [
      {
        question: "Can your booking engine integrate with our Property Management System (PMS)?",
        answer: "Yes, we integrate seamlessly with leading PMS platforms including Opera, Cloudbeds, Mews, and SiteMinder for instant two-way rate and availability synchronization.",
      },
      {
        question: "Does the 3D virtual tour require guests to download an external app or plugin?",
        answer: "No. Everything runs natively inside standard modern web browsers (Safari, Chrome, Edge) across iPhone, Android, tablets, and desktop computers.",
      },
    ],
  },
  {
    slug: "education",
    number: "05",
    title: "Education & Training",
    category: "EdTech & Interactive Simulation",
    badge: "ADAPTIVE AI LEARNING",
    tagline: "Interactive 3D Labs & Adaptive Learning Engines.",
    shortInfo: "We empower universities, corporate academies, and EdTech unicorns with interactive digital learning platforms. From complex 3D engineering simulations to AI-adaptive coursework, our architectures keep students engaged and ensure zero server dropouts.",
    heroMetrics: [
      { label: "Active Students", value: "250K+ Learners" },
      { label: "Course Completion", value: "94% Rate" },
      { label: "Server Availability", value: "99.999% Uptime" },
    ],
    pillars: [
      {
        title: "3D Virtual Lab Simulations",
        desc: "Interactive physics, chemistry, and machinery simulations allowing students to experiment risk-free in real time.",
        icon: "Cpu",
      },
      {
        title: "AI Adaptive Learning Pathways",
        desc: "Personalized quiz pacing and dynamic content recommendation matching individual learner proficiency.",
        icon: "Sparkles",
      },
      {
        title: "Scalable Examination Mesh",
        desc: "Zero-latency test delivery engine capable of handling 50,000 simultaneous test-takers with automated grading.",
        icon: "Shield",
      },
    ],
    works: [
      {
        id: "synapse-simlab",
        title: "Synapse Spatial Lab // 3D Physics & Chemistry Sim",
        client: "Global STEM Consortium",
        category: "Interactive 3D Simulation",
        image: "/images/industries/work_education_1.jpg",
        highlightMetric: "94% Course Completion",
        desc: "Interactive web laboratory where high school and university students conduct physics experiments, build electronic circuits, and manipulate molecular compounds in 3D.",
        techStack: ["Three.js", "WebGL", "Next.js 15", "WebAssembly", "TypeScript"],
        deliverables: [
          "Real-time rigid-body physics engine in WebAssembly",
          "Interactive periodic table and 3D molecular lattice builder",
          "Automated lab report PDF generator with student grading telemetry",
        ],
        year: "2026",
      },
      {
        id: "eduflow-mesh",
        title: "EduFlow Academy // Enterprise Micro-Learning LMS",
        client: "Novartis Corporate Academy",
        category: "Corporate Training Platform",
        image: "/images/industries/work_education_2.jpg",
        highlightMetric: "250K+ Active Users",
        desc: "Multi-tenant learning management system with gamified streak tracking, micro-credential certifications, and live interactive video workshops.",
        techStack: ["React 19", "PostgreSQL", "Kafka", "WebSockets", "Docker"],
        deliverables: [
          "Multi-tenant tenant isolation with custom enterprise branding",
          "Automated SCORM / xAPI compliance tracking",
          "Leaderboards and micro-credential LinkedIn digital badge issuance",
        ],
        year: "2026",
      },
    ],
    caseStudy: {
      title: "Transitioning 180,000 University Students to Interactive 3D Remote Laboratory Work",
      client: "Consortium of Engineering Universities",
      period: "14 Weeks Deployment",
      overview: "Traditional textbook curricula caused high student dropout rates in undergraduate engineering programs due to limited physical lab access.",
      challenge: "Building physical labs for tens of thousands of engineering students was cost-prohibitive, while static video recordings led to disengagement.",
      solution: "RnD Technosoft developed a browser-based WebGL simulation platform where students can disassemble mechanical engines, simulate fluid dynamics, and conduct safety tests.",
      metrics: [
        { label: "Active Student Enrollment", value: "184,000", change: "+320% Scale" },
        { label: "Lab Test Pass Rates", value: "91.2%", change: "+28% Lift" },
        { label: "Infrastructure Cost", value: "-64%", change: "Significant Savings" },
      ],
      quote: {
        text: "The interactive 3D simulations built by RnD Technosoft allow our engineering students to conduct experiments anytime, anywhere. It has dramatically improved student comprehension.",
        author: "Prof. Kenneth Davies",
        role: "Dean of Engineering, Global STEM Consortium",
      },
    },
    faqs: [
      {
        question: "Can your learning platform support SCORM, xAPI, and LTI standards?",
        answer: "Yes, our LMS architectures are fully compatible with SCORM 1.2/2004, xAPI (Tin Can), and LTI 1.3, allowing easy integration with Canvas, Moodle, and Blackboard.",
      },
      {
        question: "How do you ensure zero cheating or proctoring integrity during online examinations?",
        answer: "We offer browser tab lockdown, biometric facial verification, automated anomaly detection, and end-to-end encrypted question randomization.",
      },
    ],
  },
  {
    slug: "real-estate",
    number: "06",
    title: "Real Estate & Construction",
    category: "Architectural 3D & PropTech",
    badge: "BIM & 3D DIGITAL TWINS",
    tagline: "Photorealistic 3D Twins & PropTech Platforms.",
    shortInfo: "We assist real estate developers, luxury brokerages, and commercial construction firms in pre-selling developments before groundbreaking. With interactive 3D building twins, prospective buyers explore floorplans, inspect sunlight angles, and reserve properties digitally.",
    heroMetrics: [
      { label: "Pre-Sales Volume", value: "$180M+ Sold" },
      { label: "Digital Walkthroughs", value: "Sub-50ms Orbit" },
      { label: "Lead Quality Lift", value: "8x Qualified" },
    ],
    pillars: [
      {
        title: "3D Building Orbit & Floorplan Finder",
        desc: "Interactive 3D building exterior showing live unit availability, floor heights, and view angles.",
        icon: "Building2",
      },
      {
        title: "Virtual Penthouse Staging",
        desc: "Change interior finishes, hardwood floors, and marble countertops with realistic lighting in real time.",
        icon: "Cpu",
      },
      {
        title: "Automated Leasing & Escrow CRM",
        desc: "Digital reservation deposits, automated KYC buyer verification, and digital DocuSign contract triggers.",
        icon: "FileCheck",
      },
    ],
    works: [
      {
        id: "skyline-vr",
        title: "Skyline Tower // 3D Residential Building Twin",
        client: "Metropolis Development Group",
        category: "Luxury Residential PropTech",
        image: "/images/industries/work_realestate_1.jpg",
        highlightMetric: "$180M Units Pre-Sold",
        desc: "Full architectural 3D building visualizer where buyers orbit the 48-story luxury skyscraper, select individual apartments, and inspect panoramic sunset views from their balcony.",
        techStack: ["Three.js", "WebGL2", "React 19", "GLSL Shaders", "TailwindCSS"],
        deliverables: [
          "Interactive exterior 3D building twin with live inventory status",
          "Floorplan 2D-to-3D transition with daylight sun simulation",
          "Direct online token payment reservation via Stripe",
        ],
        year: "2026",
      },
      {
        id: "buildsync-os",
        title: "BuildSync BIM // Construction Telemetry Portal",
        client: "Apex General Contractors",
        category: "Construction Management ERP",
        image: "/images/industries/work_realestate_2.jpg",
        highlightMetric: "-35% Project Delays",
        desc: "Digital twin job-site telemetry portal syncing drone aerial photogrammetry, subcontractor task timelines, and material delivery schedules.",
        techStack: ["Next.js 15", "WebAssembly", "BIM IFC Engine", "PostgreSQL"],
        deliverables: [
          "Drone aerial 3D point-cloud overlay against architectural CAD",
          "Automated delay risk scoring with contractor dispatch alerts",
          "Mobile site superintendent inspection photo logging",
        ],
        year: "2026",
      },
    ],
    caseStudy: {
      title: "Pre-Selling 85% of Luxury Skyscraper Residences 9 Months Ahead of Schedule",
      client: "Metropolis Development Group",
      period: "10 Weeks Deployment",
      overview: "Metropolis Development needed to pre-sell $150M worth of luxury residential units in a competitive downtown market before commencing superstructure construction.",
      challenge: "Flat PDF architectural floorplans failed to convince international high-net-worth buyers who were purchasing sight unseen.",
      solution: "RnD Technosoft built a photorealistic 3D building visualizer where clients could view exact balcony sightlines, test furniture layouts, and secure deposits online.",
      metrics: [
        { label: "Pre-Sales Revenue", value: "$182 Million", change: "+121% Target" },
        { label: "Sales Cycle Duration", value: "18 Days", change: "-55% Faster" },
        { label: "International Buyers", value: "48%", change: "+340% Lift" },
      ],
      quote: {
        text: "The 3D building twin developed by RnD Technosoft allowed overseas investors to explore penthouses as if they were standing in them. It completely changed the speed of our sales.",
        author: "Victoria Sterling",
        role: "VP of Sales & Marketing, Metropolis Developments",
      },
    },
    faqs: [
      {
        question: "How do you convert existing architectural Revit or CAD models for web 3D?",
        answer: "Our automated pipeline converts complex Revit, Rhino, and ArchiCAD models into lightweight Draco-quantized meshes, optimizing draw calls while maintaining photorealistic textures.",
      },
      {
        question: "Can prospective buyers reserve a specific apartment unit online with a deposit?",
        answer: "Yes, our platforms integrate with secure escrow and payment gateways (Stripe, Plaid) to collect refundable deposits and generate digital reservation agreements instantly.",
      },
    ],
  },
  {
    slug: "startups-professional-services",
    number: "07",
    title: "Startups & Professional Services",
    category: "High-Growth SaaS & Venture Tech",
    badge: "14-DAY MVP DEPLOYMENT",
    tagline: "Investor-Grade SaaS & 14-Day MVP Architecture.",
    shortInfo: "We partner with visionary founders and elite consulting firms to build high-velocity software products. Whether you are bootstrapping an AI startup or modernizing a multi-million dollar legal practice, we deliver enterprise-grade code that scales.",
    heroMetrics: [
      { label: "Time-to-Market", value: "14-Day MVP" },
      { label: "Client Funding", value: "$45M+ Raised" },
      { label: "Security Tier", value: "SOC2 Type II" },
    ],
    pillars: [
      {
        title: "Full-Stack SaaS Architecture",
        desc: "Production-ready Next.js 15, PostgreSQL, and multi-tenant authentication engines ready to scale from day one.",
        icon: "Layers",
      },
      {
        title: "Automated Workflows & Billing",
        desc: "Stripe billing tiers, usage-based metering, and automated onboarding sequences that convert free trials into MRR.",
        icon: "TrendingUp",
      },
      {
        title: "Investor-Grade Telemetry",
        desc: "Built-in cohort retention analytics, churn telemetry, and SOC2-compliant enterprise security posture.",
        icon: "Shield",
      },
    ],
    works: [
      {
        id: "novus-capital",
        title: "Novus Vault // Automated Investor Data Room",
        client: "Novus Ventures",
        category: "FinTech & Venture Capital",
        image: "/images/industries/work_startups_1.jpg",
        highlightMetric: "$45M Seed Round Closed",
        desc: "Secure document data room platform with dynamic watermark protection, investor viewing telemetry, and automated electronic NDA execution.",
        techStack: ["Next.js 15", "AWS S3 Vault", "PostgreSQL", "TailwindCSS"],
        deliverables: [
          "Dynamic document watermarking with granular access revocation",
          "Real-time page-by-page investor engagement telemetry heatmaps",
          "Automated cap table and convertible note modeling calculator",
        ],
        year: "2026",
      },
      {
        id: "flowstate-automation",
        title: "FlowState // Legal Practice Automation Engine",
        client: "Lexis Chambers International",
        category: "LegalTech & Enterprise Automation",
        image: "/images/industries/work_startups_2.jpg",
        highlightMetric: "68% Time Saved",
        desc: "AI-assisted contract lifecycle management platform automating NDA generation, clause risk analysis, and multi-party electronic signatures.",
        techStack: ["TypeScript", "LangChain AI", "PostgreSQL", "Prisma", "Docker"],
        deliverables: [
          "AI contract clause comparison and risk highlighting",
          "Automated billing time-tracker and retainer invoicing",
          "Encrypted client messaging and document storage portal",
        ],
        year: "2026",
      },
    ],
    caseStudy: {
      title: "Architecting and Launching B2B FinTech SaaS Platform in 14 Sprints",
      client: "Novus Capital Technologies",
      period: "14 Sprints Execution",
      overview: "The founders of Novus Capital needed an institutional-grade venture deal-flow platform to secure their Series A round, but had only 3 months before their investor demo day.",
      challenge: "Building a complex platform with bank-grade encryption, real-time analytics, and SOC2 compliance from scratch under tight deadlines.",
      solution: "RnD Technosoft deployed a dedicated engineering pod of 4 senior engineers, building a modular Next.js and Rust architecture that met every institutional security audit.",
      metrics: [
        { label: "Time-to-Production", value: "11 Weeks", change: "Ahead of Schedule" },
        { label: "Capital Raised", value: "$14.2M", change: "Oversubscribed Round" },
        { label: "SOC2 Compliance", value: "100%", change: "Zero Vulnerabilities" },
      ],
      quote: {
        text: "RnD Technosoft moved at startup speed with enterprise rigor. They didn't just write code; they helped us architect a platform that passed deep venture diligence with flying colors.",
        author: "Marcus Vance",
        role: "Co-Founder & CEO, Novus Capital",
      },
    },
    faqs: [
      {
        question: "How fast can you build and launch an MVP for a funded startup?",
        answer: "Using our pre-tested enterprise architectural foundations (authentication, billing, database mesh, CI/CD), we typically deliver production-ready MVPs in 4 to 8 weeks.",
      },
      {
        question: "Who owns the code and intellectual property created during the project?",
        answer: "You own 100% of all source code, architecture designs, and intellectual property. All repositories and cloud accounts are transferred to your organization upon project completion.",
      },
    ],
  },
  {
    slug: "travel-tourism",
    number: "08",
    title: "Travel & Tourism",
    category: "Global Travel & Experience Tech",
    badge: "SUB-SECOND FARE ENGINE",
    tagline: "Sub-Second Fare Engines & AI Itinerary Systems.",
    shortInfo: "We build high-concurrency travel booking platforms, experiential destination guides, and AI itinerary planners for airlines, tour operators, and global travel marketplaces. We handle millions of complex queries without latency.",
    heroMetrics: [
      { label: "Monthly Queries", value: "1.8M Searches" },
      { label: "Search Latency", value: "<120ms Speed" },
      { label: "Mobile Bookings", value: "4.8x Accelerated" },
    ],
    pillars: [
      {
        title: "Sub-Second Fare Search Engine",
        desc: "Optimized flight and hotel availability search caching hundreds of thousands of routes with sub-120ms response times.",
        icon: "Compass",
      },
      {
        title: "AI Itinerary Choreography",
        desc: "Personalized trip generator balancing budget, travel style, transit duration, and seasonal weather trends.",
        icon: "Sparkles",
      },
      {
        title: "Multi-Currency Dynamic Checkout",
        desc: "Local payment methods (Alipay, WeChat Pay, Klarna, Apple Pay) with automated currency conversion hedging.",
        icon: "Landmark",
      },
    ],
    works: [
      {
        id: "nomadiq-platform",
        title: "NomadIQ // AI Intelligent Travel Choreographer",
        client: "Nomad Global Expeditions",
        category: "AI Travel Marketplace",
        image: "/images/industries/work_travel_1.jpg",
        highlightMetric: "1.8M Monthly Queries",
        desc: "Next-generation travel planning platform combining generative AI destination recommendations with real-time flight and hotel GDS booking APIs.",
        techStack: ["Next.js 15", "Amadeus API", "PyTorch AI", "Redis Cache", "PostgreSQL"],
        deliverables: [
          "Sub-150ms GDS flight and hotel availability search cache",
          "Personalized multi-day trip builder with exportable calendar sync",
          "Instantaneous split-payment checkout for group travel",
        ],
        year: "2026",
      },
      {
        id: "wanderlust-360",
        title: "Wanderlust 360 // Spatial Destination Discovery",
        client: "Swiss Alps Tourism Board",
        category: "Destination Discovery & Booking",
        image: "/images/industries/work_travel_2.jpg",
        highlightMetric: "4.8x Mobile Bookings",
        desc: "Interactive 3D alpine topographic map enabling skiers and hikers to explore trail difficulty, preview mountain huts, and purchase lift passes online.",
        techStack: ["Three.js", "WebGL2", "React 19", "Mapbox GL", "TailwindCSS"],
        deliverables: [
          "Interactive 3D mountain elevation model with live weather overlays",
          "Automated RFID lift-pass digital wallet delivery",
          "Mobile-optimized progressive offline trail maps",
        ],
        year: "2026",
      },
    ],
    caseStudy: {
      title: "Modernizing Legacy Travel Portal to Reduce Search Latency by 65%",
      client: "Nomad Global Expeditions",
      period: "12 Weeks Deployment",
      overview: "Nomad Global suffered from slow 4-second search times on their legacy monolithic search engine, causing mobile travelers to bounce to major aggregators.",
      challenge: "Querying multiple Global Distribution Systems (GDS) created severe API latency and frequent rate-limiting errors.",
      solution: "We designed a distributed edge caching layer using Redis and Kafka, reducing search response times to under 120ms and tripling mobile conversions.",
      metrics: [
        { label: "Search Latency", value: "115ms", change: "-65% Faster" },
        { label: "Mobile Booking Rate", value: "6.4%", change: "+280% Lift" },
        { label: "Cart Abandonment", value: "18.2%", change: "-42% Drop" },
      ],
      quote: {
        text: "The new search engine engineered by RnD Technosoft feels instantaneous. Our mobile bookings increased threefold within our first month of launch.",
        author: "Julian Thorne",
        role: "Chief Technology Officer, Nomad Global",
      },
    },
    faqs: [
      {
        question: "Can your travel platform integrate with major GDS systems like Amadeus and Sabre?",
        answer: "Yes, we have deep integration experience with Amadeus, Sabre, Travelport, and direct hotel channel managers via modern REST and SOAP APIs.",
      },
      {
        question: "How do you handle currency fluctuations and international tax compliance?",
        answer: "Our checkout systems connect to real-time Forex feeds with automated margin buffers and automated VAT/GST compliance rules based on customer billing location.",
      },
    ],
  },
];
