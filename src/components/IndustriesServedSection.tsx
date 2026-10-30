"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Landmark,
  HeartPulse,
  ShoppingBag,
  CloudCog,
  Bot,
  Car,
  ArrowUpRight,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Activity,
  Layers,
} from "lucide-react";

interface IndustryProject {
  id: string;
  number: string;
  industry: string;
  icon: typeof Landmark;
  projectTitle: string;
  client: string;
  highlightMetric: string;
  complianceBadge: string;
  desc: string;
  image: string;
  stats: { label: string; value: string }[];
  deliverables: string[];
  tech: string[];
}

export default function IndustriesServedSection() {
  const [activeId, setActiveId] = useState<string>("fintech");

  const INDUSTRY_PILLARS = [
    { name: "FinTech & Banking", metric: "$2.4B+ Daily", note: "PCI-DSS Level 1" },
    { name: "Healthcare & MedTech", metric: "100% HIPAA Safe", note: "FHIR / HL7 Ready" },
    { name: "Enterprise Cloud SaaS", metric: "99.999% SLA Uptime", note: "SOC2 Type II" },
    { name: "Retail & E-Commerce", metric: "+340% ROAS Lift", note: "Headless WebGL" },
    { name: "Smart Mobility & Aero", metric: "60 FPS Digital Twin", note: "LiDAR Telemetry" },
  ];

  const industries: IndustryProject[] = [
    {
      id: "fintech",
      number: "01",
      industry: "FinTech & Digital Banking",
      icon: Landmark,
      projectTitle: "Aura Ledger // Decentralized High-Frequency Trading & Custody",
      client: "Aura Capital Group",
      highlightMetric: "$2.4B+ Processed",
      complianceBadge: "PCI-DSS Level 1",
      desc: "Sub-millisecond algorithmic execution engine with automated real-time KYC/AML compliance, biometrically secured multi-sig cold storage, and distributed WebSocket orderbooks.",
      image: "/images/project_fintech.jpg",
      stats: [
        { label: "Execution Latency", value: "<1.2ms" },
        { label: "Availability SLA", value: "99.999%" },
        { label: "Daily Asset Volume", value: "$2.4B+" },
      ],
      deliverables: [
        "Sub-millisecond WebSocket streaming orderbook",
        "Deterministic distributed ledger state replication",
        "Biometric multi-sig cryptographic vault",
      ],
      tech: ["Next.js 15", "Rust Engine", "WebSockets", "Kafka", "PostgreSQL"],
    },
    {
      id: "healthcare",
      number: "02",
      industry: "Healthcare & MedTech",
      icon: HeartPulse,
      projectTitle: "BioPulse Vision // Real-Time AI Clinical Diagnostic Portal",
      client: "NeuroGene Health Systems",
      highlightMetric: "100% HIPAA Safe",
      complianceBadge: "FHIR & HL7 Compliant",
      desc: "Cloud-native diagnostic workstation synchronizing live biometric heart rate telemetry, 3D anatomical holographic digital twins, and clinical AI neural network anomaly detection.",
      image: "/images/industry_medtech.jpg",
      stats: [
        { label: "Diagnostic Latency", value: "85ms" },
        { label: "Model Accuracy", value: "99.8%" },
        { label: "Encryption", value: "Zero-Knowledge" },
      ],
      deliverables: [
        "Real-time biometric cardiac telemetry stream",
        "FHIR & HL7 EHR hospital interoperability pipeline",
        "Holographic 3D anatomical digital twin visualizer",
      ],
      tech: ["PyTorch AI", "WebRTC", "Next.js 15", "HIPAA Cloud", "Three.js"],
    },
    {
      id: "ecommerce",
      number: "03",
      industry: "E-Commerce & High-Growth Retail",
      icon: ShoppingBag,
      projectTitle: "Veloce Spaceware // Photorealistic 3D Spatial Commerce Engine",
      client: "Aurora Horology Geneva",
      highlightMetric: "+340% Conversions",
      complianceBadge: "Global Edge CDN",
      desc: "Real-time 3D spatial web product visualizer featuring custom cinema-grade PBR shaders, dynamic studio lighting environments, and frictionless sub-50ms headless checkout.",
      image: "/images/project_ecommerce.jpg",
      stats: [
        { label: "Conversion Lift", value: "+340%" },
        { label: "Avg Session Time", value: "4m 12s" },
        { label: "Core Web Vitals", value: "99/100" },
      ],
      deliverables: [
        "Cinema-grade real-time GLSL lighting shaders",
        "Headless GraphQL instant transaction cart",
        "Procedural 3D configurator with multi-material swap",
      ],
      tech: ["Three.js", "WebGL2", "Shopify Storefront", "Next.js 15", "GraphQL"],
    },
    {
      id: "saas",
      number: "04",
      industry: "Enterprise SaaS & Cloud Infrastructure",
      icon: CloudCog,
      projectTitle: "Nebula Mesh // Multi-Region Autonomous Cloud OS",
      client: "Orbital Computing Labs",
      highlightMetric: "99.999% SLA Uptime",
      complianceBadge: "SOC2 Type II Certified",
      desc: "Autonomous multi-cloud control plane orchestrating distributed Kubernetes clusters, automated Stripe metered billing, and zero-failover multi-region disaster recovery.",
      image: "/images/nebula_cloud_os_3d.jpg",
      stats: [
        { label: "Failover RTO", value: "0.00s" },
        { label: "Global Regions", value: "14 Nodes" },
        { label: "Cost Optimization", value: "42.8%" },
      ],
      deliverables: [
        "Automated Terraform multi-region provisioning",
        "Real-time eBPF network telemetry observability",
        "Multi-tenant RBAC enterprise security protocol",
      ],
      tech: ["Kubernetes", "Terraform", "Go Microservices", "Prometheus", "PostgreSQL"],
    },
    {
      id: "deeptech",
      number: "05",
      industry: "AI, Machine Learning & DeepTech",
      icon: Bot,
      projectTitle: "OmniCore Vector // Autonomous Enterprise LLM Agent Network",
      client: "DeepSynthetix Cognitive Labs",
      highlightMetric: "<1.5ms Inference",
      complianceBadge: "ISO 42001 AI Safety",
      desc: "Multi-modal AI orchestrator integrating hybrid RAG vector search, custom fine-tuned domain models, and autonomous multi-agent tool execution with real-time cluster monitoring.",
      image: "/images/project_ai.jpg",
      stats: [
        { label: "Stream Inference", value: "1.5ms" },
        { label: "Compute Power", value: "89 PetaFLOPS" },
        { label: "Active Nodes", value: "412 Clusters" },
      ],
      deliverables: [
        "Distributed hybrid vector graph search architecture",
        "Custom domain model fine-tuning & quantization",
        "Real-time token telemetry & autonomous tool use",
      ],
      tech: ["Python", "PyTorch", "Milvus Vector DB", "Next.js 15", "FastAPI"],
    },
    {
      id: "automotive",
      number: "06",
      industry: "Smart Automotive & Aerospace",
      icon: Car,
      projectTitle: "Aegis Telematics // Autonomous Fleet LiDAR & Digital Twin Hub",
      client: "Hyperion Mobility Works",
      highlightMetric: "60 FPS Digital Twin",
      complianceBadge: "ISO 26262 ASIL-D",
      desc: "Real-time digital twin visualization platform for autonomous EV and aerospace fleets, streaming aerodynamic LiDAR point clouds and live vehicle telemetry at 60 frames per second.",
      image: "/images/industry_automotive.jpg",
      stats: [
        { label: "Telemetry Latency", value: "12ms" },
        { label: "Visual Refresh", value: "60 FPS" },
        { label: "Active Connected", value: "12,000+ Units" },
      ],
      deliverables: [
        "Real-time aerodynamic LiDAR point cloud rendering",
        "Predictive battery & avionics telemetry pipeline",
        "Low-latency V2X cellular telematics architecture",
      ],
      tech: ["Three.js WebGL", "MQTT Telemetry", "Rust", "Next.js 15", "Tailwind CSS"],
    },
  ];

  return (
    <section
      id="industries"
      className="relative py-24 sm:py-32 bg-transparent text-white overflow-hidden border-t border-white/5"
    >
      {/* Background Ambient Cosmic Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#FFD400]/4 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-indigo-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-12 mb-14 pb-6 border-b border-white/15">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-8 h-[2px] bg-[#FFD400]" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#FFD400] font-mono">
                DOMAIN EXCELLENCE // INDUSTRY VERTICALS
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] uppercase">
              INDUSTRIES EMPOWERED BY{" "}
              <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.35)]">
                OUR ARCHITECTURE
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-lg leading-relaxed">
            We adapt our engineering engines, distributed microservices, and AI models to the rigorous compliance, sub-millisecond latency, and security demands of the world&apos;s most critical sectors.
          </p>
        </div>

        {/* ================= INDUSTRY TELEMETRY PILLARS BAR ================= */}
        <div className="mb-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {INDUSTRY_PILLARS.map((pillar, pIdx) => (
            <div
              key={pIdx}
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col items-center justify-center text-center hover:border-[#FFD400]/50 hover:bg-white/[0.06] transition-all duration-300 shadow-lg group cursor-pointer"
            >
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-white group-hover:text-[#FFD400] transition-colors">
                {pillar.name}
              </span>
              <span className="text-xs font-mono font-semibold text-[#FFD400] mt-1.5">
                {pillar.metric}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 mt-1">
                {pillar.note}
              </span>
            </div>
          ))}
        </div>

        {/* ================= INDUSTRY PROJECTS INTERACTIVE EDITORIAL ROWS ================= */}
        <div className="space-y-4">
          {industries.map((ind) => {
            const isOpen = activeId === ind.id;
            const Icon = ind.icon;

            return (
              <div
                key={ind.id}
                onMouseEnter={() => setActiveId(ind.id)}
                onClick={() => setActiveId(ind.id)}
                className={`rounded-2xl border transition-all duration-400 overflow-hidden cursor-pointer group ${
                  isOpen
                    ? "bg-[#0b0e17] border-[#FFD400]/60 shadow-[0_15px_45px_rgba(255,212,0,0.12)]"
                    : "bg-[#08090e]/85 border-white/10 hover:border-white/25 hover:bg-[#0c0f18]"
                }`}
              >
                {/* Row Header Bar (Always Visible: Data on Left, Badges on Right) */}
                <div className="p-5 sm:p-6 lg:p-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <span
                      className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                        isOpen ? "text-[#FFD400]" : "text-neutral-500"
                      }`}
                    >
                      {ind.number}
                    </span>

                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                      <Icon className={`w-5 h-5 ${isOpen ? "text-[#FFD400]" : "text-neutral-400"}`} />
                    </div>

                    <div>
                      <div className="flex items-center space-x-3">
                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                          {ind.industry}
                        </span>
                        <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-neutral-600" />
                        <span className="hidden sm:inline-block text-xs font-mono text-white/50">
                          Client: <strong className="text-neutral-300">{ind.client}</strong>
                        </span>
                      </div>
                      <h3
                        className={`text-lg sm:text-xl lg:text-2xl font-bold tracking-tight mt-0.5 transition-colors ${
                          isOpen ? "text-white" : "text-neutral-300"
                        }`}
                      >
                        {ind.projectTitle}
                      </h3>
                    </div>
                  </div>

                  {/* Right Header Badges */}
                  <div className="flex items-center justify-between md:justify-end space-x-3 sm:space-x-4 shrink-0 pl-14 md:pl-0">
                    <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-xs font-mono text-[#FFD400] font-semibold">
                      {ind.highlightMetric}
                    </span>
                    <span className="hidden lg:inline-block px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300">
                      {ind.complianceBadge}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#FFD400] text-black border-[#FFD400]" : "text-neutral-400"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expandable Project Details Body (CSS Grid 0fr -> 1fr animation) */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-7 pb-7 pt-2 border-t border-white/10">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-4">
                        
                        {/* ================= LEFT: DATA & ARCHITECTURAL SPECIFICATIONS ================= */}
                        <div
                          className={`lg:col-span-7 flex flex-col justify-between space-y-4 transition-all duration-500 ease-out transform ${
                            isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                          }`}
                        >
                          <div>
                            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-4">
                              {ind.desc}
                            </p>

                            {/* 3 Telemetry Stats */}
                            <div className="grid grid-cols-3 gap-2 sm:gap-3 p-3 rounded-xl bg-black/50 border border-white/10 mb-4">
                              {ind.stats.map((s, sIdx) => (
                                <div key={sIdx} className="bg-white/[0.02] border border-white/5 p-2 rounded-lg text-center">
                                  <span className="text-sm sm:text-base font-mono font-bold text-[#FFD400] block leading-none">
                                    {s.value}
                                  </span>
                                  <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400 tracking-wide mt-1 block truncate">
                                    {s.label}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Deliverables Checklist */}
                            <div className="space-y-2 mb-4">
                              {ind.deliverables.map((deliv, dIdx) => (
                                <div key={dIdx} className="flex items-center space-x-2.5 text-xs sm:text-sm text-neutral-300 font-mono">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400] shrink-0" />
                                  <span>{deliv}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Tech Stack & Explore CTA */}
                          <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex flex-wrap gap-1.5">
                              {ind.tech.map((t, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/10"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>

                            <Link
                              href="#contact"
                              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FFD400] hover:text-white transition-colors group/cta shrink-0"
                            >
                              <span>Explore Vertical Architecture</span>
                              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                            </Link>
                          </div>
                        </div>

                        {/* ================= RIGHT: IMAGE SMOOTHLY SHIFTS IN ON HOVER ================= */}
                        <div
                          className={`lg:col-span-5 relative h-[260px] sm:h-[300px] lg:h-[330px] rounded-2xl overflow-hidden bg-black/80 border border-white/15 shadow-2xl transition-all duration-700 ease-out transform ${
                            isOpen
                              ? "opacity-100 translate-x-0 scale-100 shadow-[0_15px_35px_rgba(255,212,0,0.18)]"
                              : "opacity-0 translate-x-8 scale-95 pointer-events-none"
                          } group/img`}
                        >
                          <Image
                            src={ind.image}
                            alt={ind.projectTitle}
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#FFD400] tracking-wider uppercase">
                            {ind.complianceBadge}
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/80 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10">
                            <span>ARCHITECTURAL CASE STUDY</span>
                            <span className="text-[#FFD400] font-bold">{ind.highlightMetric}</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
