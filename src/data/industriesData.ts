export interface IndustryChallenge {
  title: string;
  description: string;
  impactMetric: string;
}

export interface IndustryServiceCombination {
  serviceTitle: string;
  serviceHref: string;
  role: string;
  deliverablesSummary: string;
  badge: string;
}

export interface IndustryProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  keyOutputs: string[];
}

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
  challenges: IndustryChallenge[];
  serviceCombinations: IndustryServiceCombination[];
  process: IndustryProcessStep[];
  pillars: { title: string; desc: string; icon: string }[];
  works: IndustryProjectWork[];
  caseStudy: IndustryCaseStudy;
  faqs: IndustryFAQ[];
}

export const industriesList: IndustryData[] = [
  {
    slug: "manufacturing",
    number: "8.2",
    title: "Manufacturing & Industrial",
    category: "Industry 4.0 & Digital Twin Telemetry",
    badge: "SCADA & ISO 9001 COMPLIANT",
    tagline: "Industrial Digital Twins & Sub-Second Shopfloor Telemetry.",
    shortInfo: "We bridge legacy PLC/SCADA industrial machinery with high-performance 3D WebGL plant twins, edge IoT telemetry pipelines, and predictive maintenance dashboards. From discrete automotive assembly lines to process chemicals, our systems eradicate unplanned downtime and deliver complete operational transparency.",
    heroMetrics: [
      { label: "Unplanned Downtime", value: "-74% Reduction" },
      { label: "Telemetry Latency", value: "<40ms Ingestion" },
      { label: "OEE Performance Lift", value: "+38% Efficiency" },
    ],
    challenges: [
      {
        title: "Legacy PLC & Proprietary Fieldbus Silos",
        description: "Industrial facilities operate dozens of incompatible proprietary controller protocols (Modbus, Profinet, EtherCAT) with zero unified web APIs, trapping critical machine telemetry on physical factory floors.",
        impactMetric: "82% Trapped Data",
      },
      {
        title: "Devastating Cost of Unplanned Machine Stoppages",
        description: "Without automated predictive failure algorithms, mechanical bearing fatigue and thermal anomalies trigger sudden conveyor or CNC halts that cascade into millions in lost production shifts.",
        impactMetric: "$260K/Hr Downtime",
      },
      {
        title: "Bulky Engineering CAD Files Unusable in Field",
        description: "Original SolidWorks or STEP machine assemblies exceed 600MB, preventing maintenance crews and field technicians from viewing interactive part breakdowns on tablets and mobile devices.",
        impactMetric: "600MB+ File Bottleneck",
      },
    ],
    serviceCombinations: [
      {
        serviceTitle: "Web & Enterprise Cloud",
        serviceHref: "/technology-solution/web-development",
        role: "Central Telemetry Command & Microservices Mesh",
        deliverablesSummary: "Sub-40ms WebSocket and Kafka streaming ingestion engines, multi-tenant plant dashboards, and automated SCADA protocol bridges.",
        badge: "Edge Architecture",
      },
      {
        serviceTitle: "Mobile App Development",
        serviceHref: "/technology-solution/mobile-applications",
        role: "Field Maintenance PWA & AR Parts Inspector",
        deliverablesSummary: "Offline-capable technician mobile app with QR-code equipment diagnostic scanning, instant fault logging, and tactile parts schematics.",
        badge: "Mobile Telemetry",
      },
      {
        serviceTitle: "Dedicated Agency Squads",
        serviceHref: "/technology-solution/enterprise-software-solutions",
        role: "Embedded Systems & Industrial Protocol Engineers",
        deliverablesSummary: "Specialized senior pods deployed on-site or remote to integrate OPC-UA gateways, calibrate vibration sensors, and configure ISO 9001 compliance logs.",
        badge: "Dedicated Pods",
      },
    ],
    process: [
      {
        step: "01",
        title: "Shopfloor Sensor & Fieldbus Topology Audit",
        duration: "Weeks 1 - 2",
        description: "We conduct an exhaustive audit of your plant PLC controllers, sensor protocols (OPC-UA, Modbus, MQTT), and network isolation constraints to architect secure edge gateways.",
        keyOutputs: ["Industrial Interface Blueprint", "Network Air-Gap Security Audit", "Telemetry Data Schema Specification"],
      },
      {
        step: "02",
        title: "Lightweight 3D CAD Quantization & Digital Twin Design",
        duration: "Weeks 3 - 5",
        description: "Heavy STEP and SolidWorks machine assemblies are decimated and quantized via Draco compression into sub-5MB in-browser 3D twins operating at 60 FPS.",
        keyOutputs: ["Draco-Quantized 3D Assembly", "Exploded Part Hierarchy Viewer", "Sensor Node Mapping Matrix"],
      },
      {
        step: "03",
        title: "Kafka Streaming Ingest & Predictive Model Calibration",
        duration: "Weeks 6 - 9",
        description: "We implement fault-tolerant event streaming pipelines processing thousands of sensor readings per second, backed by anomaly detection models that flag thermal excursions.",
        keyOutputs: ["Edge Gateway Container Deployment", "Sub-40ms Real-Time Dashboard", "Automated SMS/Email Alerting Webhooks"],
      },
      {
        step: "04",
        title: "Plant Floor Pilot, ISO Validation & Squad Handover",
        duration: "Weeks 10 - 12",
        description: "Live rollout across pilot assembly cells, operator training, security penetration testing, and full documentation handover with complete IP ownership transfer.",
        keyOutputs: ["ISO 9001 Compliance Report", "Maintenance PWA Production Launch", "Full Source Code & Repository Transfer"],
      },
    ],
    pillars: [
      {
        title: "Sub-40ms SCADA Ingestion",
        desc: "Distributed event brokers streaming live RPM, amperage, and temperature telemetry directly into browser viewports.",
        icon: "Cpu",
      },
      {
        title: "60 FPS WebGL Plant Twins",
        desc: "Full interactive 3D shopfloor twins with color-coded thermal heatmaps and exploded parts breakdowns.",
        icon: "Layers",
      },
      {
        title: "Predictive Anomaly Triggers",
        desc: "Machine learning heuristics detecting subtle harmonic vibrations days before mechanical component seizure.",
        icon: "Shield",
      },
    ],
    works: [
      {
        id: "aeroforged-twin",
        title: "AeroForged 3D // Industrial Turbine Digital Twin",
        client: "Titan Aerospace Propulsion",
        category: "Aeronautical Manufacturing & Digital Twin",
        image: "/images/industries/work_manufacturing_1.jpg",
        highlightMetric: "-74% Unplanned Downtime",
        desc: "A browser-based 3D digital twin platform synchronizing 4,200 real-time vibration and thermal sensor nodes across precision aerospace titanium forging cells.",
        techStack: ["Next.js 15", "Three.js WebGL", "Rust Edge Broker", "Kafka", "TimescaleDB"],
        deliverables: [
          "Interactive exploded-view 3D turbine model with real-time heat mapping",
          "Sub-40ms telemetry ingestion from OPC-UA industrial gateways",
          "Automated predictive maintenance scheduling and ERP work-order dispatch",
        ],
        year: "2026",
      },
      {
        id: "kinetix-plant-os",
        title: "Kinetix Plant OS // Shopfloor Telemetry & Predictive Maintenance",
        client: "Kinetix Robotics GmbH",
        category: "Industrial Robotics & Automation ERP",
        image: "/images/industries/work_manufacturing_2.jpg",
        highlightMetric: "+38% Overall Equipment Effectiveness",
        desc: "Cloud-native manufacturing execution portal tracking cycle times, robot arm positional accuracy, and scrap rates across 6 automotive assembly plants.",
        techStack: ["React 19", "WebSockets", "Go Microservices", "PostgreSQL", "Docker"],
        deliverables: [
          "Multi-plant comparative OEE telemetry and cycle-time analytics",
          "Automated shift yield reporting and ISO 9001 compliance logs",
          "Mobile-responsive tablet interface for assembly floor supervisors",
        ],
        year: "2026",
      },
    ],
    caseStudy: {
      title: "Eliminating Costly Production Stoppages Across 14 Automotive Press Plants",
      client: "Apex Global Automotives",
      period: "12 Weeks Deployment",
      overview: "Apex Global suffered recurring hydraulic press breakdowns costing over $1.4M annually in lost production shifts due to blind spots in legacy analog telemetry.",
      challenge: "Their 14 regional manufacturing plants ran isolated SCADA systems with no unified monitoring, causing maintenance teams to react only after catastrophic mechanical failures occurred.",
      solution: "RnD Technosoft deployed unified edge IoT brokers streaming vibration and oil pressure data into a centralized 3D digital twin dashboard with predictive harmonic vibration alerts.",
      metrics: [
        { label: "Unplanned Stoppages", value: "-74%", change: "Historic Low" },
        { label: "OEE Machine Efficiency", value: "+38.4%", change: "Measured Gain" },
        { label: "Annual Cost Savings", value: "$1.85M", change: "Direct Recovery" },
      ],
      quote: {
        text: "RnD Technosoft transformed our manufacturing operations from purely reactive repairs into predictive engineering. We can now pinpoint machine fatigue days before it causes downtime.",
        author: "Klaus Von Berg",
        role: "VP of Global Manufacturing, Apex Automotives",
      },
    },
    faqs: [
      {
        question: "How do you securely extract telemetry from air-gapped industrial SCADA machines?",
        answer: "We deploy isolated unidirectional edge gateways with hardware-enforced DMZ segmentation and TLS 1.3 encryption, ensuring read-only data extraction with zero inbound attack surface to machine controllers.",
      },
      {
        question: "Can our engineers view complex 500MB+ CAD machine models in a standard web browser?",
        answer: "Yes. Our automated pipeline converts SolidWorks, STEP, and Inventor CAD assemblies using Draco mesh compression and texture instancing into lightweight sub-5MB WebGL payloads that render at silky-smooth 60 FPS.",
      },
      {
        question: "Does the system function when the factory internet connection drops?",
        answer: "Yes, our edge gateways run local time-series buffers with automated synchronization queues. All plant floor dashboards and PWA tablet apps operate seamlessly offline, resyncing telemetry automatically when network connectivity restores.",
      },
    ],
  },
  {
    slug: "healthcare",
    number: "8.3",
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
    challenges: [
      {
        title: "Severe Patient Check-In & Scheduling Bottlenecks",
        description: "Legacy hospital front desks and dental clinics struggle with manual paper intake, insurance pre-authorizations, and fragmented phone scheduling that balloon patient wait times.",
        impactMetric: "45-Min Wait Times",
      },
      {
        title: "Complex HIPAA / HL7 Regulatory Compliance Risks",
        description: "Transmitting clinical notes, diagnostic imaging, and biometric telemetry across mobile apps exposes organizations to severe regulatory penalties without end-to-end encryption.",
        impactMetric: "$50K/Day Penalties",
      },
      {
        title: "Inability to Render 3D Dental Scans in Web Browsers",
        description: "Intraoral STL scans and orthodontic crown CAD files are locked within bulky desktop workstations, preventing patients from visualizing treatment plans on smartphones.",
        impactMetric: "Zero Mobile 3D Access",
      },
    ],
    serviceCombinations: [
      {
        serviceTitle: "Web & Enterprise Cloud",
        serviceHref: "/technology-solution/web-development",
        role: "HIPAA-Grade Cloud Architecture & EHR Interoperability",
        deliverablesSummary: "FHIR and HL7 compliant database schemas, zero-knowledge patient vaults, and sub-100ms WebRTC encrypted consultation streams.",
        badge: "HIPAA Cloud",
      },
      {
        serviceTitle: "Search Dominance & Technical SEO",
        serviceHref: "/digital-marketing/technical-seo-dominance",
        role: "High-Intent Patient Acquisition & Local Practice Dominance",
        deliverablesSummary: "Local clinic map pack optimization, medical schema markup, and specialized high-conversion doctor profile funnels.",
        badge: "Patient Growth",
      },
      {
        serviceTitle: "Mobile App Development",
        serviceHref: "/technology-solution/mobile-applications",
        role: "Patient Health Portal & Contactless Check-In",
        deliverablesSummary: "Biometrically secured mobile patient apps with digital consent signatures, instant billing, and tele-triage messaging.",
        badge: "Patient Portal",
      },
    ],
    process: [
      {
        step: "01",
        title: "Clinical Workflow & HIPAA / FHIR Architecture Audit",
        duration: "Weeks 1 - 2",
        description: "We map your EHR software constraints (Epic, Cerner, Dentrix), patient intake pathways, and regulatory audit criteria to establish a zero-knowledge cloud posture.",
        keyOutputs: ["HIPAA Compliance Blueprint", "FHIR / HL7 Data Map", "EHR Interoperability Spec"],
      },
      {
        step: "02",
        title: "In-Browser 3D Viewport & Interactive Telehealth Prototype",
        duration: "Weeks 3 - 5",
        description: "We build hardware-accelerated WebGL intraoral tooth scan viewers and low-latency WebRTC encrypted consultation video rooms.",
        keyOutputs: ["Draco-Optimized STL Scan Viewer", "Encrypted WebRTC Audio/Video Room", "UX Intake Wireframes"],
      },
      {
        step: "03",
        title: "Practice Management ERP & Payment Integration",
        duration: "Weeks 6 - 9",
        description: "Complete development of patient scheduling calendar, automated SMS/WhatsApp recall sequences, and PCI-DSS Level 1 co-pay processing.",
        keyOutputs: ["Automated Appointment Engine", "PCI-DSS Payment Gateway", "Automated Insurance Verification API"],
      },
      {
        step: "04",
        title: "Security Penetration Testing & Clinical Staff Onboarding",
        duration: "Weeks 10 - 12",
        description: "Third-party HIPAA penetration auditing, hospital staff training, production cutover with zero downtime, and complete IP transfer.",
        keyOutputs: ["Independent Security Audit Certificate", "Staff Protocol Handbook", "100% Code Ownership Transfer"],
      },
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
    number: "8.4",
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
    challenges: [
      {
        title: "Perishable Inventory Spoilage in Transit",
        description: "Temperature excursions and delivery delays during transit ruin sensitive chilled food, dairy, and beverage shipments without automated cold-chain IoT telemetry.",
        impactMetric: "-42% Spoilage Risk",
      },
      {
        title: "Cart Abandonment During High-Volume Flash Sales",
        description: "Legacy monolithic e-commerce platforms collapse when influencer campaigns direct tens of thousands of shoppers simultaneously, causing cart timeouts and lost revenue.",
        impactMetric: "71% Abandonment",
      },
      {
        title: "Complex Recurring Subscription Churn",
        description: "Rigid subscription billing engines make it hard for customers to swap flavors, adjust delivery dates, or pause boxes, leading to immediate subscription cancellations.",
        impactMetric: "35% Churn Rate",
      },
    ],
    serviceCombinations: [
      {
        serviceTitle: "E-Commerce & Digital Storefronts",
        serviceHref: "/technology-solution/ecommerce-platform-engineering",
        role: "Headless Sub-Second D2C Commerce & Subscription Engine",
        deliverablesSummary: "Ultra-fast headless Shopify or BigCommerce storefronts with 1-click reordering, smart bundle builders, and dynamic delivery pause triggers.",
        badge: "Headless D2C",
      },
      {
        serviceTitle: "Web & Enterprise Cloud",
        serviceHref: "/technology-solution/cloud-infrastructure-devops",
        role: "IoT Cold-Chain Telemetry & Warehouse Inventory Mesh",
        deliverablesSummary: "MQTT sensor event streams tracking temperature, ambient humidity, and container GPS in real time with automated FIFO dispatch routing.",
        badge: "Cold-Chain IoT",
      },
      {
        serviceTitle: "Commercial Film & Photography",
        serviceHref: "/media-production/commercial-video-production",
        role: "Appetite-Appeal Visual Media & Sensory Storytelling",
        deliverablesSummary: "High-speed macro cinematography, commercial product photography, and interactive 3D culinary package mockups.",
        badge: "Visual Media",
      },
    ],
    process: [
      {
        step: "01",
        title: "D2C Funnel Audit & Fulfillment Pipeline Mapping",
        duration: "Weeks 1 - 2",
        description: "We analyze your subscription churn metrics, shipping radius constraints, and cold-chain inventory handoffs to define a high-velocity headless architecture.",
        keyOutputs: ["D2C Growth Strategy", "Warehouse WMS Integration Spec", "Customer Journey Wireframes"],
      },
      {
        step: "02",
        title: "Headless Storefront & Sub-Second Cart Prototype",
        duration: "Weeks 3 - 5",
        description: "We engineer Next.js 15 edge-rendered storefront components, sub-400ms cart checkouts, and custom flavor bundle configuration widgets.",
        keyOutputs: ["Next.js 15 Headless Front-End", "Algorithmic Bundle Builder", "1-Click Subscription Portal"],
      },
      {
        step: "03",
        title: "Cold-Chain IoT Integration & Dynamic Logistics Routing",
        duration: "Weeks 6 - 9",
        description: "Real-time telemetry integration with temperature sensors and third-party logistics (3PL) APIs for automated dispatch and spoilage alerts.",
        keyOutputs: ["Cold-Chain Telemetry Dashboard", "Automated 3PL Dispatch Webhooks", "Real-Time Order Tracking View"],
      },
      {
        step: "04",
        title: "Flash-Sale Load Testing & Global CDN Deployment",
        duration: "Weeks 10 - 12",
        description: "Stress testing against 100,000 concurrent virtual shoppers, edge Redis caching optimization, and payment gateway failover validation.",
        keyOutputs: ["100K Concurrent Stress Audit", "Core Web Vitals 99+ Score", "Production Launch & Handoff"],
      },
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
    number: "8.5",
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
    challenges: [
      {
        title: "High Customer Return Rates from Flat Photography",
        description: "Shoppers struggle to assess true material textures, scale, and finishes through static photos, resulting in staggering return rates that decimate retail profit margins.",
        impactMetric: "-82% RMA Reduction",
      },
      {
        title: "Sluggish Storefront Speeds Hurting Conversions",
        description: "Bloated e-commerce themes and heavy third-party tracking scripts lead to 4-second load times that bleed mobile shoppers at every stage of the purchase funnel.",
        impactMetric: "53% Bounce Rate",
      },
      {
        title: "Disconnected Showroom & Online Inventory Systems",
        description: "Retail brands lose sales when physical boutique inventory fails to synchronize instantaneously with online store carts and warehouse allocation systems.",
        impactMetric: "22% Out-of-Stock Loss",
      },
    ],
    serviceCombinations: [
      {
        serviceTitle: "E-Commerce & Digital Storefronts",
        serviceHref: "/technology-solution/ecommerce-platform-engineering",
        role: "Sub-Second Headless Commerce & GraphQL Mesh",
        deliverablesSummary: "Custom Shopify Plus or BigCommerce headless architectures delivering sub-400ms time to first byte and frictionless biometric checkout.",
        badge: "Headless Retail",
      },
      {
        serviceTitle: "Web & Enterprise Cloud",
        serviceHref: "/technology-solution/web-development",
        role: "Photorealistic In-Browser 3D Spatial Configurator",
        deliverablesSummary: "Custom WebGL GLSL shaders, physical ambient occlusion, and Draco-quantized geometry allowing real-time material and finish customization.",
        badge: "3D Spatial Web",
      },
      {
        serviceTitle: "Brand Strategy & Design Systems",
        serviceHref: "/branding-design/brand-identity-systems",
        role: "Luxury Retail Design Systems & Omnichannel Typography",
        deliverablesSummary: "Unified design tokens, micro-animations, and bespoke digital flagship interfaces reflecting luxury boutique aesthetics.",
        badge: "Luxury Branding",
      },
    ],
    process: [
      {
        step: "01",
        title: "Retail UX & Material Texture Digitation Audit",
        duration: "Weeks 1 - 2",
        description: "We audit your product catalog, physical samples, and existing commerce backend to determine optimal 3D geometry quantization and cart performance benchmarks.",
        keyOutputs: ["3D CAD Conversion Matrix", "Omnichannel UX Wireframes", "Headless Tech Stack Spec"],
      },
      {
        step: "02",
        title: "Photorealistic WebGL Shaders & Customizer Prototype",
        duration: "Weeks 3 - 5",
        description: "We engineer physical rendering shaders simulating leather grain, gold beveling, and textile sheens running at a constant 60 FPS in browsers.",
        keyOutputs: ["In-Browser 3D Product Configurator", "GLSL Micro-facet Shaders", "Mobile Multi-Touch Gestures"],
      },
      {
        step: "03",
        title: "Headless Cart & Omnichannel ERP Synchronization",
        duration: "Weeks 6 - 9",
        description: "Seamless integration with Shopify Plus, Netsuite ERP, and Stripe payment gateways for instant real-time inventory locking and tax automation.",
        keyOutputs: ["GraphQL Headless Commerce Bridge", "Omnichannel Stock Syncer", "1-Click Express Checkout Funnel"],
      },
      {
        step: "04",
        title: "Global CDN Acceleration & Conversion Optimization",
        duration: "Weeks 10 - 12",
        description: "Rigorous Core Web Vitals optimization, automated responsive image sets, and A/B testing on checkout funnel velocity.",
        keyOutputs: ["Lighthouse 99+ Performance Audit", "Automated Draco Geometry Pipeline", "Production Launch & Sign-Off"],
      },
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
    number: "8.6",
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
    challenges: [
      {
        title: "Hefty OTA Commission Fees (Up to 25%)",
        description: "Hotels and luxury resorts sacrifice millions in annual revenue to online travel agencies (Booking.com, Expedia) because their own direct websites fail to convert prospective guests.",
        impactMetric: "25% OTA Margin Loss",
      },
      {
        title: "High-Ticket Guest Purchase Hesitation",
        description: "Luxury travelers paying $2,500+ per night hesitate to reserve suites sight-unseen without experiencing exact room dimensions, balcony sightlines, and sunset orientations.",
        impactMetric: "68% Pre-Booking Drop",
      },
      {
        title: "Fragmented On-Property Guest Services",
        description: "Paper service menus, busy front desk phone lines, and disjointed spa reservation systems cause long queues and frustrating guest experiences.",
        impactMetric: "32% Missed Ancillary Rev",
      },
    ],
    serviceCombinations: [
      {
        serviceTitle: "Web & Enterprise Cloud",
        serviceHref: "/technology-solution/web-development",
        role: "Zero-Commission Direct Reservation Engine & PMS Bridge",
        deliverablesSummary: "Sub-second multi-currency booking checkout integrating bidirectionally with Opera, Mews, and Cloudbeds PMS for instant rate parity.",
        badge: "Direct Booking",
      },
      {
        serviceTitle: "Commercial Film & Photography",
        serviceHref: "/media-production/commercial-video-production",
        role: "Cinematic Resort Drone & Spatial 360 Photography",
        deliverablesSummary: "Golden-hour aerial cinematography, architectural interior photography, and high-fidelity 360-degree immersive panoramic environments.",
        badge: "Visual Production",
      },
      {
        serviceTitle: "Mobile App Development",
        serviceHref: "/technology-solution/mobile-applications",
        role: "Digital Guest Key & Contactless Concierge PWA",
        deliverablesSummary: "Zero-download web mobile app for mobile room entry, in-room Michelin dining ordering, and private excursion concierge chat.",
        badge: "Guest Concierge",
      },
    ],
    process: [
      {
        step: "01",
        title: "Resort Spatial Capture & PMS Architecture Mapping",
        duration: "Weeks 1 - 2",
        description: "We review your property layout, villa types, and existing PMS software (Opera, Cloudbeds) to architect seamless two-way inventory and room synchronization.",
        keyOutputs: ["Resort Spatial Map Wireframe", "PMS API Integration Blueprint", "Luxury Guest Journey Map"],
      },
      {
        step: "02",
        title: "Photorealistic 3D Spatial Walkthrough & Room Visualizer",
        duration: "Weeks 3 - 5",
        description: "We craft an interactive in-browser 3D property map allowing guests to orbit the island or estate, inspect suite interiors, and verify sunset sightlines.",
        keyOutputs: ["Interactive 3D Property Map", "Virtual Suite Walkthrough Viewer", "Dynamic Daylight Lighting Engine"],
      },
      {
        step: "03",
        title: "High-Conversion Multi-Currency Booking Funnel",
        duration: "Weeks 6 - 9",
        description: "Direct reservation checkout supporting 30+ international payment methods, dynamic currency conversion, and automated upgrade upsell suggestions.",
        keyOutputs: ["Direct Booking Engine", "Stripe Multi-Currency Checkout", "Automated Upsell & Ancillary Engine"],
      },
      {
        step: "04",
        title: "PMS Synchronization, Staff Training & Live Cutover",
        duration: "Weeks 10 - 12",
        description: "Complete validation of two-way booking queues with your front-desk PMS, concierge tablet rollout, and worldwide CDN launch.",
        keyOutputs: ["Two-Way PMS Synced Gateway", "Concierge Staff Training Portal", "Production Launch & SEO Handover"],
      },
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
    number: "8.7",
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
    challenges: [
      {
        title: "Prohibitive Costs of Physical Laboratory Equipment",
        description: "Equipping physical physics, chemistry, and engineering training labs for thousands of students requires millions in capital expenditure and routine maintenance.",
        impactMetric: "-64% CapEx Savings",
      },
      {
        title: "Disengagement & Plunging Online Completion Rates",
        description: "Static video lectures and text PDFs fail to hold modern learner attention, resulting in industry-wide completion rates hovering below 15%.",
        impactMetric: "85% Dropout Rate",
      },
      {
        title: "Platform Crashes During Simultaneous Examination Spikes",
        description: "When 50,000+ university students log on simultaneously for midterm or certification exams, legacy LMS servers crash, invalidating test results.",
        impactMetric: "High Exam Failure Risk",
      },
    ],
    serviceCombinations: [
      {
        serviceTitle: "Web & Enterprise Cloud",
        serviceHref: "/technology-solution/web-development",
        role: "Scalable Examination Mesh & Interactive 3D SimLab",
        deliverablesSummary: "WebAssembly physics engines, Three.js chemistry apparatus simulations, and auto-scaling Kubernetes test delivery clusters.",
        badge: "Interactive SimLab",
      },
      {
        serviceTitle: "Mobile App Development",
        serviceHref: "/technology-solution/mobile-applications",
        role: "Micro-Learning Mobile Companion & Offline Sync",
        deliverablesSummary: "Native mobile learning apps with bite-sized lesson streaks, offline video downloads, and automated push notifications.",
        badge: "Mobile LMS",
      },
      {
        serviceTitle: "Dedicated Agency Squads",
        serviceHref: "/technology-solution/enterprise-software-solutions",
        role: "SCORM / xAPI Compliance & EdTech Architecture Squads",
        deliverablesSummary: "Specialized engineers deploying interoperability bridges for Canvas, Moodle, and Blackboard LMS systems.",
        badge: "LTI / SCORM Squad",
      },
    ],
    process: [
      {
        step: "01",
        title: "Pedagogical Curriculum & LMS Interoperability Audit",
        duration: "Weeks 1 - 2",
        description: "We review your syllabus, examination proctoring needs, and integration requirements for SCORM 1.2/2004, xAPI, and LTI 1.3 standards.",
        keyOutputs: ["EdTech Architecture Blueprint", "SCORM / xAPI Integration Spec", "Gamified Learning Roadmap"],
      },
      {
        step: "02",
        title: "Interactive 3D Virtual Lab & WebAssembly Physics Prototype",
        duration: "Weeks 3 - 5",
        description: "We build browser-native simulation engines where students manipulate mechanical assemblies, fluid dynamics, and electronic circuits with zero lag.",
        keyOutputs: ["WebAssembly Physics Lab", "3D Chemical Compound Sandbox", "Student Interactive Telemetry"],
      },
      {
        step: "03",
        title: "Adaptive AI Quiz Engine & Examination Lockdown",
        duration: "Weeks 6 - 9",
        description: "Implementation of dynamic question difficulty calibration, browser lockdown proctoring, and automated gradebook synchronization.",
        keyOutputs: ["AI-Adaptive Pacing Engine", "Secure Examination Engine", "Instant Grading Webhooks"],
      },
      {
        step: "04",
        title: "High-Concurrency Stress Testing & Campus Rollout",
        duration: "Weeks 10 - 12",
        description: "Simulating 100,000 simultaneous test submissions, automated failover verification, instructor training, and global academic rollout.",
        keyOutputs: ["100K Concurrent Test Audit", "Instructor Administrative Dashboard", "Production Cutover & IP Transfer"],
      },
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
    number: "8.8",
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
    challenges: [
      {
        title: "Difficulty Pre-Selling Off-Plan Units Sight Unseen",
        description: "Static architectural 2D floorplans fail to convey scale, balcony sightlines, or sunlight angles, causing prospective luxury buyers to delay high-value purchase commitments.",
        impactMetric: "-55% Longer Sales Cycle",
      },
      {
        title: "Construction Jobsite Delay & Rework Costs",
        description: "Subcontractor miscommunications, misaligned CAD specs, and late delivery tracking cause construction schedule slippages that cost millions in penalties.",
        impactMetric: "-35% Delays Avoided",
      },
      {
        title: "High Friction in Online Unit Reservation & Escrow",
        description: "Requiring buyers to visit sales galleries physically to place deposits limits sales reach and excludes international investors seeking rapid digital reservations.",
        impactMetric: "48% International Loss",
      },
    ],
    serviceCombinations: [
      {
        serviceTitle: "Web & Enterprise Cloud",
        serviceHref: "/technology-solution/web-development",
        role: "In-Browser 3D Building Digital Twin & Inventory Engine",
        deliverablesSummary: "Three.js and WebGL2 building orbit visualizer with real-time apartment availability, floor selection, and live lighting simulation.",
        badge: "3D PropTech",
      },
      {
        serviceTitle: "Search Dominance & Technical SEO",
        serviceHref: "/digital-marketing/technical-seo-dominance",
        role: "High-Net-Worth Investor Acquisition & International SEO",
        deliverablesSummary: "Multi-regional real estate search indexing, schema markup for luxury developments, and targeted lead funnels.",
        badge: "Investor Lead Gen",
      },
      {
        serviceTitle: "Mobile App Development",
        serviceHref: "/technology-solution/mobile-applications",
        role: "Jobsite Drone Telemetry & Field Inspection Portal",
        deliverablesSummary: "Offline tablet app syncing BIM IFC models, drone photogrammetry overlays, and automated safety milestone verification.",
        badge: "BIM Field App",
      },
    ],
    process: [
      {
        step: "01",
        title: "Revit / BIM Architectural Model Ingestion & Optimization",
        duration: "Weeks 1 - 2",
        description: "We ingest your complex architectural CAD, Revit, or ArchiCAD models and convert them into lightweight WebGL Draco meshes with optimized draw calls.",
        keyOutputs: ["Quantized 3D Building Geometry", "Inventory Data Schema", "PropTech UX Wireframes"],
      },
      {
        step: "02",
        title: "In-Browser Building Orbit & Balcony Sightline Engine",
        duration: "Weeks 3 - 5",
        description: "We engineer realistic sky daylight cycles, apartment filter controls, and interactive 2D-to-3D floorplan transitions in browser.",
        keyOutputs: ["3D Exterior Orbit Visualizer", "Interactive Unit Selector", "Balcony View Simulation"],
      },
      {
        step: "03",
        title: "Digital Reservation Escrow & CRM Pipeline Integration",
        duration: "Weeks 6 - 9",
        description: "Integration with Stripe, Plaid, DocuSign, and Salesforce CRM for instant token deposits, identity verification, and legal contract signing.",
        keyOutputs: ["Secure Escrow Deposit Portal", "DocuSign Contract Pipeline", "Real-Time CRM Sync"],
      },
      {
        step: "04",
        title: "International Sales Gallery Launch & Global CDN Edge",
        duration: "Weeks 10 - 12",
        description: "Testing across touchscreens, iPads, and mobile devices, edge caching deployment for sub-second international loading, and staff training.",
        keyOutputs: ["Touchscreen Kiosk Compatibility", "Global Edge CDN Deployment", "Final Source Handover"],
      },
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
    number: "8.9",
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
    challenges: [
      {
        title: "Slow Development Cycles Burning Pre-Seed Runway",
        description: "Early-stage founders burn scarce capital hiring fragmented freelance contractors or junior developers who take 9 months to ship buggy, unscalable products.",
        impactMetric: "14-Day MVP Solution",
      },
      {
        title: "Failing Institutional Investor Due Diligence Audits",
        description: "Venture capitalists reject startups during technical due diligence because of sloppy database architecture, security vulnerabilities, or missing SOC2 posture.",
        impactMetric: "$45M Capital at Stake",
      },
      {
        title: "Complex Enterprise Billing & Multi-Tenant Isolation",
        description: "Implementing seat-based pricing, Stripe usage metering, and multi-tenant database isolation delays product launch by several engineering quarters.",
        impactMetric: "68% Time Saved",
      },
    ],
    serviceCombinations: [
      {
        serviceTitle: "Web & Enterprise Cloud",
        serviceHref: "/technology-solution/web-development",
        role: "Investor-Grade SaaS Core & Multi-Tenant Database Mesh",
        deliverablesSummary: "Production Next.js 15 App Router architecture, PostgreSQL schemas with Row-Level Security (RLS), and sub-50ms global API routes.",
        badge: "Venture SaaS",
      },
      {
        serviceTitle: "Dedicated Agency Squads",
        serviceHref: "/technology-solution/enterprise-software-solutions",
        role: "Full-Stack Senior Engineering Squad on Demand",
        deliverablesSummary: "Autonomous squads consisting of a Principal Architect, Senior Frontend Lead, and Backend DevOps engineer moving at 2-week sprint speed.",
        badge: "Rapid Squads",
      },
      {
        serviceTitle: "Brand Strategy & Design Systems",
        serviceHref: "/branding-design/brand-identity-systems",
        role: "Pitch-Ready Brand Identity & High-Converting Landing Pages",
        deliverablesSummary: "Investor pitch decks, component-driven design systems in Figma, and high-converting marketing landing pages that secure early signups.",
        badge: "Investor Brand",
      },
    ],
    process: [
      {
        step: "01",
        title: "Product Scope & Enterprise Technical Scaffolding",
        duration: "Days 1 - 3",
        description: "We define your core user journey, strip unnecessary feature bloat, and deploy enterprise infrastructure (authentication, multi-tenancy, CI/CD pipeline).",
        keyOutputs: ["Scoped MVP Spec", "Database ERD & RLS Security Rules", "Live Staging Environment"],
      },
      {
        step: "02",
        title: "Rapid Sprint Execution & Core Feature Build",
        duration: "Days 4 - 9",
        description: "Daily automated builds, clean TypeScript code, Stripe billing integration, and interactive user onboarding flows developed with relentless focus.",
        keyOutputs: ["Core Product Features", "Stripe Billing & Subscriptions", "Daily Working Demos"],
      },
      {
        step: "03",
        title: "SOC2 Compliance Hardening & Analytics Telemetry",
        duration: "Days 10 - 12",
        description: "We implement immutable audit logging, role-based access control (RBAC), and product analytics tracking activation and cohort retention.",
        keyOutputs: ["SOC2 Compliance Ready Spec", "PostHog / Mixpanel Telemetry", "Automated E2E Test Suite"],
      },
      {
        step: "04",
        title: "Investor Demo Launch & Full IP Code Handover",
        duration: "Days 13 - 14",
        description: "Production launch on scalable cloud infrastructure, full source code handover, and repository transfer with zero vendor lock-in.",
        keyOutputs: ["Production Deployment", "Full Git Repository Ownership", "Investor Technical Briefing Packet"],
      },
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
    number: "8.10",
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
    challenges: [
      {
        title: "Extreme API Latency from Legacy GDS Systems",
        description: "Querying major Global Distribution Systems (Amadeus, Sabre) for flight and hotel availability takes 4+ seconds, driving impatient mobile travelers to competitor sites.",
        impactMetric: "-65% Search Latency",
      },
      {
        title: "Complex Multi-Currency FX & Tax Compliance",
        description: "Handling global payments across 40+ currencies with volatile exchange rates and regional value-added tax (VAT) creates margin leakage and reconciliation headaches.",
        impactMetric: "8.4% Forex Margin Leak",
      },
      {
        title: "Static Itinerary Formats That Fail to Convert",
        description: "Flat PDF travel schedules leave travelers confused about local transfer times, trail conditions, and weather changes, leading to customer support overload.",
        impactMetric: "4.8x Mobile Lift",
      },
    ],
    serviceCombinations: [
      {
        serviceTitle: "Web & Enterprise Cloud",
        serviceHref: "/technology-solution/web-development",
        role: "Distributed Edge Search Caching & GDS Connector Mesh",
        deliverablesSummary: "Redis edge caching layer caching hundreds of thousands of flight and hotel routes with sub-120ms response times and zero rate-limit drops.",
        badge: "Edge Travel Engine",
      },
      {
        serviceTitle: "Mobile App Development",
        serviceHref: "/technology-solution/mobile-applications",
        role: "Interactive 3D Destination Map & Offline Trail App",
        deliverablesSummary: "Progressive mobile app with Mapbox GL 3D topographic terrain elevation, offline GPS wayfinding, and digital RFID boarding passes.",
        badge: "Spatial Guide",
      },
      {
        serviceTitle: "Search Dominance & Technical SEO",
        serviceHref: "/digital-marketing/technical-seo-dominance",
        role: "Programmatic Destination & Route SEO Dominance",
        deliverablesSummary: "Automated generation of thousands of indexable, high-ranking travel route and city attraction pages with dynamic pricing schema.",
        badge: "Travel SEO",
      },
    ],
    process: [
      {
        step: "01",
        title: "GDS API Benchmark & Fare Cache Architecture Audit",
        duration: "Weeks 1 - 2",
        description: "We audit your third-party inventory feeds (Amadeus, Sabre, Hotelbeds), rate limitations, and booking transaction drop-off points.",
        keyOutputs: ["GDS API Architecture Map", "Distributed Cache Topology", "Travel UX Wireframes"],
      },
      {
        step: "02",
        title: "Sub-120ms Search Engine & AI Itinerary Prototype",
        duration: "Weeks 3 - 5",
        description: "We deploy Redis edge memory clusters to pre-warm fare searches, combined with generative itinerary planning algorithms balancing travel styles.",
        keyOutputs: ["Sub-120ms Fare Search Engine", "AI Trip Builder Prototype", "3D Topographic Terrain View"],
      },
      {
        step: "03",
        title: "Multi-Currency Checkout & Group Split-Payment Integration",
        duration: "Weeks 6 - 9",
        description: "Integration with Stripe, Klarna, and local Asian e-wallets (Alipay, WeChat Pay) with automated Forex hedging and split-payment checkout.",
        keyOutputs: ["Multi-Currency Checkout Funnel", "Split-Payment Group Booking", "Automated Booking Confirmation Email/SMS"],
      },
      {
        step: "04",
        title: "Global CDN Stress Testing & Airport/PWA Rollout",
        duration: "Weeks 10 - 12",
        description: "Simulating millions of monthly searches across multi-region CDNs, progressive offline app testing, and production launch.",
        keyOutputs: ["1.8M Monthly Search Load Audit", "Offline PWA Mobile App", "Full Repository Ownership Transfer"],
      },
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

