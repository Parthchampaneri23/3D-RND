export interface JobRole {
  id: string;
  title: string;
  serviceCategory: string; // Associated company service
  department: string;
  level: "Senior" | "Lead" | "Staff" | "Principal";
  type: "Full-Time" | "Contract";
  location: "Remote (Global)" | "Hybrid (Mumbai Atelier)" | "On-Site";
  experience: string;
  compensation: string;
  image: string;
  tagline: string;
  description: string;
  keyResponsibilities: string[];
  requirements: string[];
  techStack: string[];
  featured?: boolean;
}

export const careerRoles: JobRole[] = [
  {
    id: "spatial-3d-webgl-engineer",
    title: "Senior Spatial 3D & WebGL Engineer",
    serviceCategory: "Spatial 3D & E-Commerce",
    department: "Spatial Computing Lab",
    level: "Senior",
    type: "Full-Time",
    location: "Remote (Global)",
    experience: "4+ Years",
    compensation: "$95,000 - $140,000 / ₹26L - ₹40L",
    image: "/images/career/career_spatial_3d_color.jpg",
    tagline: "Pioneer 60 FPS hardware-accelerated 3D product viewports, custom GLSL shaders, and WebGPU pipelines.",
    description: "You will lead the development of our next-generation web spatial engines, engineering sub-second Draco-compressed 3D models and tactile showroom configurations for luxury and high-concurrency retail brands.",
    keyResponsibilities: [
      "Architect WebGL and WebGPU rendering pipelines with Three.js and React Three Fiber.",
      "Write custom GLSL fragment and vertex shaders for physical lighting, ambient occlusion, and subsurface scattering.",
      "Optimize geometry decimation, Draco mesh streaming, and texture compression (KTX2 / Basis Universal).",
      "Collaborate directly with 3D technical artists on automated STEP/Blender asset conversion pipelines.",
    ],
    requirements: [
      "4+ years of professional experience with WebGL, Three.js, or Babylon.js.",
      "Deep understanding of 3D math (quaternions, linear algebra, projection matrices).",
      "Proven track record of optimizing real-time frame rates on mobile 5G/4G devices.",
      "Proficiency with TypeScript and React 19.",
    ],
    techStack: ["Three.js", "WebGL", "WebGPU", "React Three Fiber", "GLSL Shaders", "Draco", "Blender"],
    featured: true,
  },
  {
    id: "lead-cloud-nextjs-architect",
    title: "Lead Cloud & Next.js Systems Architect",
    serviceCategory: "Web & Cloud",
    department: "Enterprise Cloud Engineering",
    level: "Lead",
    type: "Full-Time",
    location: "Hybrid (Mumbai Atelier)",
    experience: "6+ Years",
    compensation: "$120,000 - $175,000 / ₹32L - ₹50L",
    image: "/images/career/career_cloud_architect_color.jpg",
    tagline: "Architect distributed Next.js 15 microservices, multi-region database meshes, and zero-trust cloud infrastructure.",
    description: "Drive the core architecture of our high-concurrency enterprise web platforms, handling millions of requests per minute with sub-600ms global Largest Contentful Paint (LCP) and 99.99% uptime guarantees.",
    keyResponsibilities: [
      "Design zero-downtime blue/green deployment architectures on Kubernetes and AWS/GCP.",
      "Lead Next.js 15 App Router and React 19 Server Components paradigm adoption across squads.",
      "Implement multi-region distributed PostgreSQL/Redis databases with automated replication and failover.",
      "Enforce rigorous SOC2, ISO27001, and zero-trust edge security protocols.",
    ],
    requirements: [
      "6+ years of full-stack engineering with at least 3 years architecting high-scale cloud platforms.",
      "Deep mastery of Next.js, Node.js, TypeScript, Docker, and Kubernetes.",
      "Hands-on expertise with message brokers (Kafka / RabbitMQ / SQS) and gRPC microservices.",
      "Strong leadership skills mentoring pods of 6-12 senior engineers.",
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Node.js", "Kubernetes", "AWS", "PostgreSQL", "Redis"],
    featured: true,
  },
  {
    id: "staff-mobile-engineer",
    title: "Staff Mobile Engineer (React Native & Native iOS)",
    serviceCategory: "Mobile Engineering",
    department: "Mobile Engineering Pod",
    level: "Staff",
    type: "Full-Time",
    location: "Remote (Global)",
    experience: "5+ Years",
    compensation: "$100,000 - $150,000 / ₹28L - ₹42L",
    image: "/images/career/career_mobile_engineer_color.jpg",
    tagline: "Build fluid 60 FPS cross-platform mobile apps with native gesture physics, local SQLite caching, and biometric hardware security.",
    description: "Join our flagship mobile engineering division crafting intuitive, mission-critical mobile applications that eliminate bridge serialization and bind directly to C++ native threads for silky-smooth tactile responsiveness.",
    keyResponsibilities: [
      "Engineer zero-latency gesture animations using React Native Reanimated 3 and Gesture Handler.",
      "Develop custom TurboModules in Swift/C++ to leverage hardware biometrics and local cryptographic keystores.",
      "Architect offline-first local state synchronization using SQLite and conflict-free replicated data types (CRDT).",
      "Automate continuous integration, device farm regression testing, and App Store / Google Play deployments.",
    ],
    requirements: [
      "5+ years of mobile app engineering with deep expertise in React Native and native iOS (Swift / Objective-C).",
      "Demonstrated ability to profile memory leaks, thread contention, and frame drops using Xcode Instruments.",
      "Experience deploying enterprise apps audited for banking-grade security and PCI-DSS compliance.",
    ],
    techStack: ["React Native", "Swift", "iOS Native", "TurboModules", "Reanimated 3", "SQLite", "TypeScript"],
  },
  {
    id: "senior-ai-llm-engineer",
    title: "Senior AI & LLM Systems Engineer",
    serviceCategory: "AI & Data",
    department: "Applied AI Research",
    level: "Senior",
    type: "Full-Time",
    location: "Remote (Global)",
    experience: "4+ Years",
    compensation: "$110,000 - $160,000 / ₹30L - ₹45L",
    image: "/images/career/career_ai_engineer_color.jpg",
    tagline: "Deploy private enterprise RAG pipelines, fine-tuned transformer models, and real-time semantic search meshes.",
    description: "Lead applied AI initiatives integrating domain-adapted LLMs, vector database embeddings, and sub-100ms inference clusters into production enterprise applications and creative automation workflows.",
    keyResponsibilities: [
      "Engineer low-latency RAG (Retrieval-Augmented Generation) architectures using vector databases and hybrid search.",
      "Fine-tune open-source models (Llama 3, Mistral) on proprietary enterprise datasets using LoRA/QLoRA.",
      "Optimize model inference serving using vLLM, TensorRT-LLM, and Triton Inference Server.",
      "Build guardrails for hallucination prevention, prompt injection mitigation, and PII anonymization.",
    ],
    requirements: [
      "4+ years of software engineering with at least 2 years focused on applied machine learning and NLP.",
      "Strong proficiency in Python, PyTorch, LangChain / LlamaIndex, and vector databases (Pinecone, pgvector).",
      "Experience deploying GPU-accelerated cloud infrastructure (NVIDIA Triton, AWS SageMaker).",
    ],
    techStack: ["Python", "PyTorch", "vLLM", "LangChain", "Vector DBs", "TensorRT", "Next.js"],
  },
  {
    id: "lead-technical-seo-engineer",
    title: "Principal Technical SEO & Web Performance Engineer",
    serviceCategory: "Technical SEO & Growth",
    department: "Growth Architecture",
    level: "Lead",
    type: "Full-Time",
    location: "Remote (Global)",
    experience: "5+ Years",
    compensation: "$85,000 - $130,000 / ₹22L - ₹36L",
    image: "/images/career/career_seo_performance_color.jpg",
    tagline: "Spearhead edge rendering architectures, automated Core Web Vitals optimization, and semantic knowledge graph networks.",
    description: "Empower high-volume web portals to dominate global search index rankings through algorithmic crawl-budget management, automated schema microdata generation, and sub-second Lighthouse 95+ score compliance.",
    keyResponsibilities: [
      "Audit and optimize JavaScript rendering pipelines, SSR streaming, and edge caching for Googlebot crawl efficiency.",
      "Formulate JSON-LD semantic knowledge graphs and entity-based content taxonomies.",
      "Monitor real-user Core Web Vitals (INP, LCP, CLS) and diagnose render-blocking performance bottlenecks.",
      "Collaborate with marketing teams to translate growth strategies into scalable technical implementations.",
    ],
    requirements: [
      "5+ years executing technical SEO and web speed optimization for websites with 1M+ monthly organic visitors.",
      "Deep understanding of headless architectures, Next.js incremental static regeneration (ISR), and CDN edge compute.",
      "Fluency with tools like Screaming Frog, Log File Analyzers, Google Search Console API, and BigQuery.",
    ],
    techStack: ["Technical SEO", "Core Web Vitals", "Next.js", "Edge Compute", "Schema Graph", "Lighthouse CI"],
  },
  {
    id: "senior-spatial-product-designer",
    title: "Senior Spatial & Product UX Designer",
    serviceCategory: "UI/UX & Spatial Design",
    department: "Creative Atelier",
    level: "Senior",
    type: "Full-Time",
    location: "Hybrid (Mumbai Atelier)",
    experience: "4+ Years",
    compensation: "$80,000 - $125,000 / ₹20L - ₹34L",
    image: "/images/career/career_spatial_designer_color.jpg",
    tagline: "Sculpt visionary user interfaces, dark-mode design systems, and tactile spatial 3D interaction semantics.",
    description: "Bridge the frontier between graphic design, futuristic dark aesthetics, and interactive 3D spatial computing to create award-winning web platforms that inspire, convert, and redefine luxury digital experiences.",
    keyResponsibilities: [
      "Design atomic typography tokens, glassmorphism UI components, and micro-animations in Figma.",
      "Prototype interactive 3D spatial viewports and gesture interactions using Spline and Protopie.",
      "Conduct in-depth user journey audits to remove checkout friction and increase conversion velocity.",
      "Work side-by-side with frontend engineers to ensure 100% pixel-perfect UI execution.",
    ],
    requirements: [
      "4+ years designing high-impact web products, SaaS platforms, or immersive brand experiences.",
      "Stunning portfolio showcasing typography, dark-mode aesthetics, micro-interactions, and 3D elements.",
      "Proficiency with Figma, Spline, Cinema4D / Blender, and modern design token workflows.",
    ],
    techStack: ["Figma", "Spline 3D", "Protopie", "Design Systems", "UI/UX Physics", "Blender"],
  },
];

export const careerPerks = [
  {
    icon: "Cpu",
    title: "Flagship Hardware Allowance",
    desc: "Every engineer is equipped with top-spec Apple M4 Max MacBook Pros or liquid-cooled dual RTX 4090 workstations.",
  },
  {
    icon: "Compass",
    title: "20% Exploratory R&D Lab Time",
    desc: "Spend 1 day every week exploring experimental shaders, AI agents, WebGPU engines, or contributing to open-source.",
  },
  {
    icon: "Globe",
    title: "Asynchronous-First Culture",
    desc: "Work on your terms across global timezones. We measure outcomes, code elegance, and architectural impact—never chair hours.",
  },
  {
    icon: "Shield",
    title: "Comprehensive Health & Wellness",
    desc: "Premium zero-copay health coverage for you and your dependents, executive annual health screenings, and wellness stipends.",
  },
  {
    icon: "Sparkles",
    title: "Annual Global Tech Retreats",
    desc: "Fly out for our annual engineering symposiums, hackathons, and atelier gatherings in international innovation hubs.",
  },
  {
    icon: "TrendingUp",
    title: "Transparent Equity & Performance Bonuses",
    desc: "Quarterly profit-sharing allocations, milestone bonuses, and transparent performance progression pathways.",
  },
];
