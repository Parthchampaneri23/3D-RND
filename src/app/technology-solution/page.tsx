"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code,
  Cpu,
  Layers,
  Server,
  Database,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  Terminal,
  Activity,
  Workflow,
  Compass,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import CyberButton from "@/components/CyberButton";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import ServiceConversionCTA from "@/components/ServiceConversionCTA";
import { FullColorToolLogo } from "@/components/ServiceUniverseSection";
import {
  technologySubCategories,
  webDevelopmentBeforeAfter,
} from "@/data/technologySolutionsData";

const TECH_ECOSYSTEM = [
  { name: "React.js", category: "Frontend", role: "Component UI Engine" },
  { name: "NEXT JS", category: "Frontend", role: "Server Components & Edge" },
  { name: "TypeScript", category: "Frontend", role: "Strict Contract Safety" },
  { name: "Node.js", category: "Backend", role: "Asynchronous I/O Runtime" },
  { name: "Python", category: "Backend", role: "Neural Mesh & AI Serving" },
  { name: "LARAVEL", category: "Backend", role: "Robust MVC API Services" },
  { name: "PHP", category: "Backend", role: "Legacy Enterprise Integration" },
  { name: "Docker", category: "Cloud & DevOps", role: "Containerization Pods" },
  { name: "PostgreSQL", category: "Database", role: "ACID Relational Storage" },
  { name: "MongoDB", category: "Database", role: "High-Scale Document DB" },
  { name: "Flutter", category: "Mobile", role: "Cross-Platform iOS/Android" },
  { name: "Figma", category: "Design", role: "Design Token Pipeline" },
];

const ARCHITECTURE_PILLARS = [
  {
    number: "01",
    title: "Edge-First SSR & Server Components",
    desc: "Next.js 15 App Router architecture with dynamic streaming, edge middleware, and automated stale-while-revalidate caching that achieves sub-400ms Time to First Byte worldwide.",
    metrics: "<380ms TTFB Worldwide",
    icon: Globe,
  },
  {
    number: "02",
    title: "Fault-Tolerant Microservices Mesh",
    desc: "Decoupled gRPC and RESTful services orchestrated in Kubernetes container pods, equipped with automated circuit breakers, rate limiters, and self-healing replicas.",
    metrics: "10,000+ QPS per Pod",
    icon: Server,
  },
  {
    number: "03",
    title: "High-Concurrency Data Tiers",
    desc: "Partitioned PostgreSQL clusters with automated read-replicas, Redis in-memory caches, and Kafka streaming pipelines designed for zero data loss under extreme burst traffic.",
    metrics: "99.999% Data Durability",
    icon: Database,
  },
  {
    number: "04",
    title: "Zero-Trust Security & SOC2 Hardening",
    desc: "Bank-grade Content Security Policies (CSP), continuous vulnerability scanning, DDoS mitigation via Cloudflare WAF, and automated penetration testing before every production release.",
    metrics: "SOC2 & ISO27001 Ready",
    icon: Shield,
  },
];

const PROCESS_PHASES = [
  {
    phase: "PHASE 01",
    title: "Architecture & Systems Discovery",
    duration: "Weeks 1 - 2",
    desc: "We analyze system bottlenecks, data schemas, compliance requirements, and cloud infrastructure costs to establish a rock-solid technical blueprint.",
    deliverables: ["C4 Architecture Blueprints", "Data Schema Mapping", "API Contracts & Milestones"],
  },
  {
    phase: "PHASE 02",
    title: "UI/UX Tokens & Micro-Prototypes",
    duration: "Weeks 3 - 4",
    desc: "Design tokens, accessible Figma components, and functional interactive prototypes built to test usability and micro-animations at 60 FPS.",
    deliverables: ["Figma Token Design System", "Interactive Staging Prototypes", "Performance Budgets"],
  },
  {
    phase: "PHASE 03",
    title: "Agile Engineering Sprints",
    duration: "Weeks 5 - 8",
    desc: "Bi-weekly sprint iterations with functional staging deployments, automated unit tests, and continuous peer code reviews in shared Git repositories.",
    deliverables: ["Tested Production Code", "Bi-Weekly Demo Builds", "90%+ Unit Test Coverage"],
  },
  {
    phase: "PHASE 04",
    title: "Load Pentest & Zero-Downtime Go-Live",
    duration: "Weeks 9 - 10",
    desc: "Simulated load testing of 50k+ concurrent requests, third-party security audits, and automated blue/green cutover with zero downtime.",
    deliverables: ["Load Test Reports", "Security Sign-off", "24/7 Hypercare Warranty"],
  },
];

const CATEGORY_FAQS = [
  {
    question: "What makes RnD's Technology Solutions division different from traditional web agencies?",
    answer:
      "Unlike traditional agencies that deploy cookie-cutter templates, RnD operates as a high-performance software engineering lab. We author bespoke, edge-rendered Next.js 15 platforms, distributed cloud microservices, and reactive data architectures engineered to handle millions of concurrent users with sub-second response times and 100% intellectual property ownership.",
  },
  {
    question: "How do you ensure our web applications scale effortlessly during flash traffic surges?",
    answer:
      "We utilize edge SSR caching, multi-region serverless endpoints, Redis cluster meshes, and containerized Kubernetes auto-scaling. Static assets and cached data are delivered via global CDN points of presence within 50ms, offloading up to 90% of traffic from the primary database.",
  },
  {
    question: "Who owns the source code, design systems, and cloud configurations?",
    answer:
      "You own 100% of all intellectual property, source code, Git repositories, Terraform scripts, and design tokens from day one. Everything is hosted directly inside your company's GitHub and cloud accounts with zero vendor lock-in.",
  },
  {
    question: "Can we start with Custom Web Development and expand to Cloud DevOps later?",
    answer:
      "Yes. Our modular engagement model allows you to deploy a targeted squad for Custom Web Development first, and seamlessly layer on Cloud DevOps, Enterprise Software, or Mobile Applications as your product roadmap expands.",
  },
  {
    question: "What is your incident response SLA for production systems?",
    answer:
      "We offer guaranteed SLAs up to 99.99% uptime with direct lead engineer access and under 15-minute critical incident response times for enterprise tier partners.",
  },
];

export default function TechnologySolutionCategoryPage() {
  const [activeTechCategory, setActiveTechCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredTech =
    activeTechCategory === "All"
      ? TECH_ECOSYSTEM
      : TECH_ECOSYSTEM.filter((t) => t.category === activeTechCategory);

  const techCategories = ["All", "Frontend", "Backend", "Cloud & DevOps", "Database", "Mobile", "Design"];

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black">
      {/* Background Starfield */}
      <SpaceBackground />

      {/* Global Navbar */}
      <Navbar />

      {/* Page Banner */}
      <PageBanner
        title="TECHNOLOGY SOLUTIONS"
        subtitle="ENTERPRISE ENGINEERING & CLOUD PLATFORMS"
        breadcrumb="Technology Solutions"
        parentBreadcrumb={{ label: "Services", href: "/services" }}
      />

      <main className="relative z-20 w-full -mt-10 sm:-mt-14 md:-mt-18 rounded-t-[32px] sm:rounded-t-[44px] bg-[#050608]/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        {/* =========================================================================
            STICKY SUB-NAVIGATION & JUMP BAR
            ========================================================================= */}
        <div className="border-b border-white/10 bg-[#0c0e14]/95 backdrop-blur-xl sticky top-16 sm:top-20 z-30 shadow-2xl">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-3 flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
            {/* Left: Back Link to Services */}
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.18em] text-neutral-400 hover:text-[#FFD400] transition-colors shrink-0 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1.5 transition-transform text-[#FFD400]" />
              <span>All Services</span>
            </Link>

            {/* Jump Anchors */}
            <div className="hidden md:flex items-center space-x-1 sm:space-x-2 text-xs font-mono">
              <a
                href="#overview"
                className="px-3 py-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                Overview
              </a>
              <a
                href="#disciplines"
                className="px-3 py-1.5 rounded-full text-neutral-300 hover:text-[#FFD400] hover:bg-white/[0.06] transition-colors font-semibold"
              >
                Sub-Categories
              </a>
              <a
                href="#tech-stack"
                className="px-3 py-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                Tech Stack
              </a>
              <a
                href="#pillars"
                className="px-3 py-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                Pillars
              </a>
              <a
                href="#benchmark"
                className="px-3 py-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                Benchmark
              </a>
              <a
                href="#process"
                className="px-3 py-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                Methodology
              </a>
              <a
                href="#faqs"
                className="px-3 py-1.5 rounded-full text-neutral-300 hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                FAQs
              </a>
            </div>

            {/* Right: CTA */}
            <div className="shrink-0">
              <CyberButton href="/contact-us" size="sm">
                DEPLOY DIVISION POD
              </CyberButton>
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 1: OVERVIEW & STRATEGIC TELEMETRY
            ========================================================================= */}
        <section id="overview" className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-14 pb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/10">
            <div className="max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase bg-black/60 border border-[#FFD400]/40 text-[#FFD400] backdrop-blur-md">
                <Code className="w-3.5 h-3.5" />
                <span>SERVICE CATEGORY // DIVISION 01</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.02] text-white">
                ENTERPRISE SOFTWARE &amp;{" "}
                <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.45)]">
                  CLOUD ENGINEERING
                </span>
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-2xl">
                We architect fault-tolerant digital foundations designed to process millions of transactions with sub-second response times. From enterprise Next.js platforms to autonomous cloud microservices, we build software engineered to scale without bottlenecks.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-4">
              <Link href="/technology-solution/web-development">
                <CyberButton size="md">
                  EXPLORE WEB DEV SPEC
                </CyberButton>
              </Link>
            </div>
          </div>

          {/* Capability Telemetry Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FFD400]/50 transition-colors">
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#FFD400]">99.99%</div>
              <div className="text-xs font-mono text-neutral-200 uppercase tracking-wider mt-1.5">
                Production SLA
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">Multi-region edge failover</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FFD400]/50 transition-colors">
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#FFD400]">&lt;380ms</div>
              <div className="text-xs font-mono text-neutral-200 uppercase tracking-wider mt-1.5">
                Global Edge TTFB
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">Sub-second render speeds</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FFD400]/50 transition-colors">
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#FFD400]">150+</div>
              <div className="text-xs font-mono text-neutral-200 uppercase tracking-wider mt-1.5">
                Enterprise Deployments
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">Across 18 global industries</div>
            </div>
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FFD400]/50 transition-colors">
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#FFD400]">100%</div>
              <div className="text-xs font-mono text-neutral-200 uppercase tracking-wider mt-1.5">
                Source IP Ownership
              </div>
              <div className="text-[11px] text-neutral-400 mt-1">Full code repository ownership</div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: SUB-CATEGORIES SHOWCASE (SPECIALIZED PRACTICES)
            ========================================================================= */}
        <section
          id="disciplines"
          className="py-20 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 border-t border-white/10 scroll-mt-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-3 bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400]">
                <Compass className="w-3.5 h-3.5" />
                <span>SPECIALIZED SUB-CATEGORIES // 06 DISCIPLINES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.05] text-white">
                SELECT A <span className="text-[#FFD400]">SPECIALIZED DISCIPLINE</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-light mt-2 max-w-2xl">
                Explore dedicated architecture specifications, tech stacks, and production SLAs across our specialized technology disciplines.
              </p>
            </div>

            <span className="text-xs font-mono text-neutral-400">
              CLICK ANY SUB-CATEGORY TO VIEW DETAILED ARCHITECTURE SPEC
            </span>
          </div>

          {/* Sub-Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {technologySubCategories.map((sub) => {
              const isWebDev = sub.id === "web-development";

              return (
                <div
                  key={sub.id}
                  className={`group relative rounded-3xl overflow-hidden bg-[#0c0e14] border transition-all duration-500 shadow-2xl flex flex-col justify-between ${
                    isWebDev
                      ? "border-[#FFD400] shadow-[0_0_35px_rgba(255,212,0,0.22)] md:col-span-2 lg:col-span-2 min-h-[460px]"
                      : "border-white/10 hover:border-[#FFD400]/60 min-h-[420px]"
                  }`}
                >
                  {/* Top-Right SLA Badge */}
                  <div className="absolute top-5 right-5 z-20 flex items-center gap-2">
                    {sub.badge && (
                      <span className="text-[10px] font-mono uppercase tracking-widest text-black font-bold px-2.5 py-1 rounded bg-[#FFD400] shadow-md">
                        {sub.badge}
                      </span>
                    )}
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#FFD400]/30 shadow-md">
                      {sub.sla}
                    </span>
                  </div>

                  {/* Top-Left Index Tag */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className="font-mono text-xs sm:text-sm text-white/80 tracking-wider px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/15">
                      // {sub.index}
                    </span>
                  </div>

                  {/* Background Image & Vignette */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={sub.image}
                      alt={sub.title}
                      fill
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-40 group-hover:opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/85 to-black/50 pointer-events-none" />
                  </div>

                  {/* Content Area */}
                  <div className="relative z-10 p-6 sm:p-8 pt-16 mt-auto flex flex-col justify-end">
                    <div className="mb-2">
                      <span className="text-xs font-mono text-[#FFD400] tracking-wider uppercase block mb-1">
                        {sub.tagline}
                      </span>
                      <Link href={sub.href} prefetch={false}>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#FFD400] transition-colors font-[family-name:var(--font-syne)] uppercase">
                          {sub.title}
                        </h3>
                      </Link>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                      {sub.desc}
                    </p>

                    {/* Tech Tags & Explore Link */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                        {sub.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] border border-white/10 text-neutral-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Link href={sub.href} prefetch={false} className="inline-block shrink-0">
                        <div
                          className={`group/btn relative inline-flex items-center justify-between rounded-full overflow-hidden border text-white shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer select-none px-4 py-2 text-xs gap-2 ${
                            isWebDev
                              ? "bg-[#FFD400] text-black border-[#FFD400] font-bold hover:bg-[#ffe34d]"
                              : "bg-[#12141a]/95 hover:bg-[#1a1d26] border-white/15 hover:border-[#FFD400]/70"
                          }`}
                        >
                          <span className="font-mono tracking-[0.16em] uppercase whitespace-nowrap">
                            {isWebDev ? "EXPLORE WEB DEV SPEC" : "VIEW SPEC"}
                          </span>
                          <ArrowUpRight
                            className={`w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform ${
                              isWebDev ? "text-black" : "text-[#FFD400]"
                            }`}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: THE ENTERPRISE TECH STACK MATRIX
            ========================================================================= */}
        <section id="tech-stack" className="py-20 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 border-t border-white/10 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-3 bg-black/60 border border-[#FFD400]/40 text-[#FFD400]">
                <Zap className="w-3.5 h-3.5" />
                <span>OFFICIAL BRAND TOOL MATRIX // ZERO-LOCKIN</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.05] text-white">
                ENTERPRISE <span className="text-[#FFD400]">TECH STACK UNIVERSE</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-light mt-2 max-w-xl">
                We engineer using production-proven, enterprise-grade open-source and cloud primitives with zero vendor lock-in.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {techCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTechCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    activeTechCategory === cat
                      ? "bg-[#FFD400] text-black font-bold shadow-[0_0_15px_rgba(255,212,0,0.35)]"
                      : "bg-white/[0.04] text-neutral-400 hover:text-white border border-white/10 hover:border-white/25"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredTech.map((tool) => (
              <div
                key={tool.name}
                className="group p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#FFD400]/60 transition-all duration-300 flex flex-col items-center text-center shadow-lg hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,212,0,0.1)]"
              >
                <div className="w-12 h-12 rounded-xl bg-black/60 border border-white/10 group-hover:border-[#FFD400]/40 flex items-center justify-center p-2 mb-3.5 transition-all">
                  <FullColorToolLogo name={tool.name} className="w-7 h-7 object-contain" />
                </div>
                <div className="text-sm font-bold font-mono text-white group-hover:text-[#FFD400] transition-colors">
                  {tool.name}
                </div>
                <div className="text-[11px] font-mono text-neutral-400 mt-1">
                  {tool.role}
                </div>
                <span className="mt-2 text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.05] text-[#FFD400] border border-white/10">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: ARCHITECTURAL PILLARS & ENGINEERING PRINCIPLES
            ========================================================================= */}
        <section id="pillars" className="py-20 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 border-t border-white/10 scroll-mt-24">
          <div className="mb-12 pb-6 border-b border-white/10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-3 bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400]">
              <Layers className="w-3.5 h-3.5" />
              <span>CORE ARCHITECTURAL PRINCIPLES // 4 PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase text-white">
              ENGINEERED FOR <span className="text-[#FFD400]">UNCOMPROMISING RESILIENCE</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-light mt-2 max-w-2xl">
              Every platform we construct adheres to strict architectural criteria benchmarked against global enterprise reliability standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARCHITECTURE_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="rounded-3xl p-6 sm:p-7 bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        // {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-[family-name:var(--font-syne)] font-bold text-white uppercase group-hover:text-[#FFD400] transition-colors mb-3">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#FFD400] font-bold">
                      {pillar.metrics}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: BEFORE & AFTER TRANSFORMATION BENCHMARK
            ========================================================================= */}
        <section id="benchmark" className="scroll-mt-24 border-t border-white/10">
          <BeforeAfterSection data={webDevelopmentBeforeAfter} />
        </section>

        {/* =========================================================================
            SECTION 6: 4-PHASE DELIVERY FRAMEWORK
            ========================================================================= */}
        <section id="process" className="py-20 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 border-t border-white/10 scroll-mt-24">
          <div className="mb-12 pb-6 border-b border-white/10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-3 bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400]">
              <Workflow className="w-3.5 h-3.5" />
              <span>STRUCTURED DELIVERY CADENCE // 4 PHASES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase text-white">
              AGILE SPRINT <span className="text-[#FFD400]">ENGINEERING METHODOLOGY</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-light mt-2 max-w-2xl">
              From day one architecture discovery to continuous staging builds and zero-downtime go-live cutover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_PHASES.map((phase) => (
              <div
                key={phase.phase}
                className="rounded-3xl p-6 sm:p-7 bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#FFD400] tracking-widest">
                      {phase.phase}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400 px-2.5 py-0.5 rounded bg-white/[0.05] border border-white/10">
                      {phase.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mb-3">
                    {phase.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    {phase.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block font-semibold">
                    KEY DELIVERABLES:
                  </span>
                  {phase.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center space-x-2 text-xs text-neutral-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: CATEGORY FAQS
            ========================================================================= */}
        <section id="faqs" className="py-20 max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 border-t border-white/10 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-3 bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase text-white">
              TECHNICAL &amp; COMMERCIAL <span className="text-[#FFD400]">CLARITY</span>
            </h2>
          </div>

          <div className="space-y-4">
            {CATEGORY_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.02] hover:border-white/20 transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-[family-name:var(--font-syne)] font-bold text-white tracking-wide">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "bg-[#FFD400] text-black rotate-180" : "bg-white/[0.04] text-neutral-400"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: CONVERSION CTA
            ========================================================================= */}
        <section id="cta">
          <ServiceConversionCTA />
        </section>
      </main>

      {/* Global RnDFooter */}
      <RnDFooter />
    </div>
  );
}
