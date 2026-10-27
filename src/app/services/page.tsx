"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Sparkles, Globe, Cpu, Layers, Palette, Camera, BarChart3, ShieldCheck, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import CyberButton from "@/components/CyberButton";

interface ServiceCard {
  id: string;
  index: string;
  title: string;
  tagline: string;
  category: string;
  image: string;
  tall?: boolean;
  avatarIcon?: string;
  specs: string[];
  sla: string;
  tech: string[];
}

const servicesData: ServiceCard[] = [
  {
    id: "web-cloud",
    index: "[01]",
    title: "Web & Enterprise Cloud",
    tagline: "Next.js 15, Three.js 3D WebGL, and High-Concurrency Microservices",
    category: "Web & Cloud",
    image: "/images/weddev.png",
    tall: true,
    avatarIcon: "⚡",
    sla: "99.99% SLA",
    specs: [
      "Headless Next.js 15 & SSR architecture",
      "Real-time Three.js & WebGL 3D spatial experiences",
      "Multi-tenant PostgreSQL & Redis caching meshes",
      "Sub-800ms global Time-To-Interactive",
    ],
    tech: ["Next.js", "React 19", "Three.js", "PostgreSQL", "AWS"],
  },
  {
    id: "seo-search",
    index: "[02]",
    title: "Search Dominance & Technical SEO",
    tagline: "Core Web Vitals Engineering & Programmatic Keyword Authority",
    category: "Digital Marketing",
    image: "/images/seoupdate.png",
    avatarIcon: "🎯",
    sla: "#1 Rank Strategy",
    specs: [
      "Automated JSON-LD schema & semantic entity graphs",
      "100/100 Google Lighthouse Core Web Vitals",
      "Enterprise link architecture & backlink authority",
      "International multi-region hreflang indexing",
    ],
    tech: ["Schema.org", "Next.js", "Ahrefs API", "Search Console"],
  },
  {
    id: "ai-engineering",
    index: "[03]",
    title: "Autonomous AI & Cognitive Systems",
    tagline: "Enterprise Multi-Agent Orchestration & Sub-5ms RAG Pipelines",
    category: "AI & Data",
    image: "/images/project_ai.jpg",
    tall: true,
    avatarIcon: "🤖",
    sla: "<1.5ms Inference",
    specs: [
      "Multi-modal vector indexing & hybrid search",
      "Custom domain model quantization & fine-tuning",
      "Autonomous tool-calling agent networks",
      "Enterprise SOC2 & ISO 42001 safety safeguards",
    ],
    tech: ["PyTorch", "Milvus", "FastAPI", "Python", "Docker"],
  },
  {
    id: "digital-marketing",
    index: "[04]",
    title: "Omnichannel Digital Marketing",
    tagline: "Performance PPC, Meta Ad Engines, and Funnel Conversion Optimization",
    category: "Digital Marketing",
    image: "/images/digi_market.png",
    avatarIcon: "📈",
    sla: "340% Avg ROI",
    specs: [
      "Precision audience targeting & algorithmic bidding",
      "Dynamic creative remarketing & retention sequences",
      "End-to-end attribution telemetry & ROAS analytics",
      "Omnichannel budget allocation algorithms",
    ],
    tech: ["Google Ads", "Meta Ads", "GA4", "Mixpanel"],
  },
  {
    id: "brand-identity",
    index: "[05]",
    title: "Brand Strategy & UI/UX Systems",
    tagline: "Design Systems, Motion Guidelines, and Spatial Visual Languages",
    category: "Design",
    image: "/images/industry_automotive.jpg",
    avatarIcon: "✨",
    sla: "Zero Design Debt",
    specs: [
      "Comprehensive design systems & Figma component tokens",
      "Micro-animations & interactive haptic feedback",
      "Full corporate typography & color matrix guidelines",
      "Accessibility compliance WCAG 2.2 AAA standard",
    ],
    tech: ["Figma", "Framer", "Design Tokens", "Tailwind CSS"],
  },
  {
    id: "social-media",
    index: "[06]",
    title: "Social Media & Community Building",
    tagline: "Organic Virality Engines, Content Hubs, and Community Retainers",
    category: "Social Media",
    image: "/images/social.png",
    avatarIcon: "🌐",
    sla: "24/7 Monitoring",
    specs: [
      "Viral reel production & dynamic motion clips",
      "Executive personal brand & LinkedIn thought leadership",
      "High-converting organic community management",
      "Influencer partnership curation & compliance",
    ],
    tech: ["Buffer", "Brand24", "Canva Pro", "TikTok Suite"],
  },
  {
    id: "commercial-media",
    index: "[07]",
    title: "Commercial 8K Film & CGI Production",
    tagline: "Cinema-Grade Product Commercials, 3D Renders, and Sound Design",
    category: "Media",
    image: "/images/showreel_thumb.jpg",
    tall: true,
    avatarIcon: "🎬",
    sla: "8K Cinema Spec",
    specs: [
      "RED V-Raptor 8K cinema filming & drone aerials",
      "Photorealistic Blender & Cinema4D 3D product renders",
      "Cinema sound design & Dolby Atmos spatial audio",
      "Omnichannel multi-ratio format delivery (16:9, 9:16)",
    ],
    tech: ["RED 8K", "Blender", "DaVinci Resolve", "Dolby Atmos"],
  },
  {
    id: "content-strategy",
    index: "[08]",
    title: "Content Creation & Editorial Systems",
    tagline: "Tone-Calibrated Commercial Copywriting & Thought Leadership",
    category: "Design",
    image: "/images/contet.png",
    avatarIcon: "🖋️",
    sla: "100% Original",
    specs: [
      "High-authority industry whitepapers & case studies",
      "Tone-of-voice playbooks & brand messaging guides",
      "Automated editorial calendar scheduling & syndication",
      "SEO-aligned topic clustering for rapid topical rank",
    ],
    tech: ["Grammarly Business", "Notion CMS", "MarketMuse"],
  },
];

const categories = [
  "All",
  "Web & Cloud",
  "AI & Data",
  "Digital Marketing",
  "Social Media",
  "Design",
  "Media",
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    return servicesData.filter((item) => {
      const matchesCategory =
        activeCategory === "All" ||
        item.category.toLowerCase() === activeCategory.toLowerCase();

      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.specs.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black">
      {/* Galactic Starfield Canvas */}
      <SpaceBackground />

      {/* Global Navbar */}
      <Navbar />

      <main className="relative z-10 pt-28 sm:pt-36 pb-24 px-4 sm:px-8 lg:px-12 max-w-[1600px] mx-auto">
        {/* Top Header & Breadcrumb */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL CAPABILITIES // INTEGRATED SERVICE ECOSYSTEM</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-bebas)] tracking-wide uppercase leading-[0.92] text-white">
                ENGINEERED SERVICES &amp;{" "}
                <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.35)]">
                  SOLUTIONS
                </span>
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 font-light max-w-2xl mt-4">
                End-to-end digital engineering disciplines spanning modern web applications, autonomous AI agents, technical SEO dominance, performance marketing, and commercial 8K cinema.
              </p>
            </div>

            <CyberButton href="/#contact" size="md">
              BOOK ARCHITECT REVIEW
            </CyberButton>
          </div>
        </div>

        {/* ================= FILTER & SEARCH BAR (EXACT IMAGE 2 REPLICATION) ================= */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white font-bold shadow-[0_0_20px_rgba(37,99,235,0.6)] border border-blue-400"
                      : "bg-white/[0.04] text-neutral-300 hover:text-white border border-white/15 hover:border-white/35 hover:bg-white/[0.08]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box on Right */}
          <div className="relative shrink-0 min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-blue-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${servicesData.length} services...`}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.07] border border-white/15 focus:border-blue-500 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* ================= BENTO GRID (EXACT IMAGE 2 REPLICATION) ================= */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-24 bg-white/[0.02] rounded-3xl border border-white/10">
            <p className="text-neutral-400 font-mono text-sm mb-4">
              No services found matching &quot;{searchQuery}&quot; in {activeCategory}.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="px-5 py-2 rounded-full bg-white/10 text-white text-xs font-mono uppercase tracking-wider hover:bg-[#FFD400] hover:text-black transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {filteredServices.map((service) => {
              const isTall = service.tall;

              return (
                <div
                  key={service.id}
                  className={`group relative rounded-3xl overflow-hidden bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/60 transition-all duration-500 shadow-2xl flex flex-col justify-between ${
                    isTall ? "md:row-span-2 min-h-[520px] lg:min-h-[600px]" : "min-h-[390px] lg:min-h-[440px]"
                  }`}
                >
                  {/* Top Index Corner ([01], [02], etc.) */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className="font-mono text-xs sm:text-sm text-white/60 tracking-wider px-2 py-0.5 rounded bg-black/40 backdrop-blur-md border border-white/10">
                      {service.index}
                    </span>
                  </div>

                  {/* Top Right SLA Badge */}
                  <div className="absolute top-5 right-5 z-20">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#FFD400]/30 shadow-md">
                      {service.sla}
                    </span>
                  </div>

                  {/* Main Service Hero Image with Zoom on Hover */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Multi-Stop Dark Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/65 to-black/35 pointer-events-none" />
                  </div>

                  {/* Floating Center Badge/Avatar (Matching Image 2) */}
                  {service.avatarIcon && (
                    <div className="relative z-10 my-auto flex justify-center items-center pointer-events-none">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {service.avatarIcon}
                      </div>
                    </div>
                  )}

                  {/* Bottom Information Card Overlay */}
                  <div className="relative z-10 mt-auto p-6 sm:p-7 pt-12 flex flex-col justify-end">
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#FFD400] transition-colors font-[family-name:var(--font-jakarta)]">
                        {service.title}
                      </h3>
                      <span className="font-mono text-xs text-[#FFD400] shrink-0 font-bold uppercase">
                        {service.category}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                      {service.tagline}
                    </p>

                    {/* Scope Checklist */}
                    <div className="space-y-1.5 mb-4">
                      {service.specs.slice(0, 3).map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-neutral-300 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400] shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges & Action Button */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                      <div className="flex flex-wrap gap-1.5">
                        {service.tech.slice(0, 3).map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.05] text-neutral-300 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <CyberButton href="/#contact" size="sm">
                        EXPLORE SCOPE
                      </CyberButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom SLA & Retainer Banner */}
        <div className="mt-20 sm:mt-24 rounded-3xl bg-gradient-to-r from-[#0c0e14] via-[#141722] to-[#0c0e14] border border-white/15 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ENTERPRISE ACCELERATION AGREEMENT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
              Ready to deploy specialized engineering squads?
            </h2>
            <p className="text-sm text-neutral-400 font-light max-w-xl">
              We offer dedicated cross-functional pods with guaranteed SLAs, transparent sprint velocity, and full source code ownership.
            </p>
          </div>

          <CyberButton href="/#contact" size="lg">
            INQUIRE ABOUT RETAINERS
          </CyberButton>
        </div>
      </main>

      {/* Global RnDFooter */}
      <RnDFooter />
    </div>
  );
}
