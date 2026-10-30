"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Cpu,
  Layers,
  Video,
  Award,
  BarChart3,
  ExternalLink,
} from "lucide-react";

interface CaseStudyItem {
  id: string;
  category: string;
  divisionBadge: string;
  client: string;
  title: string;
  tagline: string;
  challenge: string;
  outcome: string;
  image: string;
  href: string;
  metrics: { value: string; label: string }[];
  tags: string[];
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "kailua",
    category: "Technology Solutions",
    divisionBadge: "DIV 01 // TECHNOLOGY",
    client: "Kailua Living Ltd.",
    title: "High-Concurrency Headless Next.js 15 & Shopify Commerce",
    tagline: "Sub-second checkout, interactive 3D product customizer, and viral flash-drop infrastructure.",
    challenge:
      "Legacy monolithic Magento architecture was buckling under viral traffic surges, suffering from 4.8s load times and 68% mobile cart abandonment.",
    outcome:
      "Engineered an edge-accelerated Next.js 15 storefront with real-time inventory sync, cutting load times by 85% and lifting sales velocity.",
    image: "/images/service_ecommerce.jpg",
    href: "/portfolios/kailua",
    metrics: [
      { value: "+340%", label: "Conversion Surge" },
      { value: "0.7s", label: "Edge Page Load" },
      { value: "99.99%", label: "Flash Drop Uptime" },
    ],
    tags: ["Next.js 15", "Headless Shopify", "Three.js", "Algolia"],
  },
  {
    id: "apex-fintech",
    category: "Digital Marketing",
    divisionBadge: "DIV 02 // MARKETING",
    client: "Aura Global",
    title: "Omnichannel Acquisition Engine & Scaled PPC Performance",
    tagline: "Predictable customer acquisition across 12 countries with automated bid tuning and multi-touch attribution.",
    challenge:
      "Rising customer acquisition costs and fragmented attribution across Google, Meta, and LinkedIn channels were capping international expansion.",
    outcome:
      "Implemented programmatic creative testing with real-time attribution modeling, unlocking unprecedented return on ad spend.",
    image: "/images/project_lifestyle.jpg",
    href: "/portfolios/apex-fintech",
    metrics: [
      { value: "14M+", label: "Verified Impressions" },
      { value: "4.8x", label: "Blended ROAS" },
      { value: "+280%", label: "Inbound Pipeline" },
    ],
    tags: ["PPC Advertising", "Technical SEO", "Conversion Rate Optimization", "Analytics"],
  },
  {
    id: "lumen-sal",
    category: "Branding & Design",
    divisionBadge: "DIV 03 // BRANDING",
    client: "Lumen Architecture Atelier",
    title: "Spatial 3D Showroom & Bespoke European Brand Identity",
    tagline: "Translating tactile architectural craftsmanship into an interactive 60 FPS WebGL browser experience.",
    challenge:
      "Traditional static 2D PDF catalog failed to communicate the tactile luxury and spatial nuance of high-end architectural commissions.",
    outcome:
      "Developed a real-time WebGL engine with celestial lighting simulations and an atomic design system commanding ultra-luxury prestige.",
    image: "/images/project_lumen_sal.jpg",
    href: "/portfolios/lumen-sal",
    metrics: [
      { value: "60 FPS", label: "WebGL PBR Engine" },
      { value: "+657%", label: "Session Dwell Time" },
      { value: "99/100", label: "Lighthouse Score" },
    ],
    tags: ["Spatial 3D", "Brand Identity", "Design System", "Three.js"],
  },
  {
    id: "mission-ops",
    category: "Media Production",
    divisionBadge: "DIV 04 // MEDIA",
    client: "Vanguard Outdoors",
    title: "8K Cinema Expedition Commercial & Spatial Audio Storytelling",
    tagline: "Extreme sub-zero expedition filmmaking in the Swiss Alps showcasing alpine technical apparel.",
    challenge:
      "The client needed to capture visceral authenticity in sub-zero blizzard environments where consumer cameras fail.",
    outcome:
      "Deployed RED 8K cinema rigs, FPV high-speed drones, and Dolby Atmos sound recording, generating global brand resonance and award recognition.",
    image: "/images/project_forest_film.jpg",
    href: "/portfolios/mission-ops",
    metrics: [
      { value: "8K DCI", label: "Cinema Master" },
      { value: "2.4M+", label: "Organic Views" },
      { value: "Award", label: "Cannes Shortlist" },
    ],
    tags: ["RED 8K", "Drone Cinematography", "Dolby Atmos", "Color Science"],
  },
];

export default function ServiceCaseStudies() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const displayedStudies =
    activeTab === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((cs) => cs.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="case-studies" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 bg-black/60 border border-[#FFD400]/40 text-[#FFD400] backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2.8 RELATED CASE STUDIES // PROVEN IMPACT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.02] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              MEASURABLE SUCCESS <span className="text-[#FFD400]">PER CATEGORY</span>
            </h2>
            <p className="text-sm sm:text-base font-normal max-w-2xl mt-3 leading-relaxed text-neutral-300">
              Each service division is backed by validated production work with audited KPIs, commercial impact, and client testimonials.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {["all", "Technology", "Marketing", "Branding", "Media"].map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#FFD400] text-black font-bold shadow-[0_0_15px_rgba(255,212,0,0.4)]"
                      : "bg-white/[0.04] text-neutral-300 hover:text-white border border-white/10 hover:border-white/30"
                  }`}
                >
                  {tab === "all" ? "All Divisions" : tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2x2 Case Study Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedStudies.map((study) => (
            <div
              key={study.id}
              className="group relative rounded-3xl overflow-hidden bg-[#0a0c12]/90 border border-white/10 hover:border-[#FFD400]/60 transition-all duration-500 shadow-2xl flex flex-col justify-between"
            >
              {/* Media Preview Aspect Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c12] via-[#0a0c12]/50 to-transparent" />

                {/* Division Badge */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#FFD400] px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#FFD400]/40 shadow-lg">
                    {study.divisionBadge}
                  </span>
                </div>

                {/* Client Label */}
                <div className="absolute top-5 right-5 z-10">
                  <span className="font-mono text-xs text-white/80 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                    {study.client}
                  </span>
                </div>
              </div>

              {/* Study Info */}
              <div className="p-6 sm:p-8 pt-2 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase mb-2 group-hover:text-[#FFD400] transition-colors font-[family-name:var(--font-syne)]">
                    {study.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    {study.tagline}
                  </p>

                  {/* 3 Metric Pills */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
                    {study.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="text-base sm:text-xl font-bold text-[#FFD400] font-mono">
                          {m.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-neutral-400 font-mono tracking-wider mt-0.5 uppercase">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags & Action Link */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                    {study.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-neutral-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={study.href} className="inline-block shrink-0">
                    <div className="group/btn inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-white hover:text-[#FFD400] transition-colors">
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Portfolios link */}
        <div className="mt-12 text-center">
          <Link href="/portfolios" className="inline-block">
            <div className="group relative inline-flex items-center justify-between rounded-full overflow-hidden bg-[#12141a]/95 hover:bg-[#1a1d26] border border-white/15 hover:border-[#FFD400]/70 text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,212,0,0.28)] transition-all duration-300 hover:scale-[1.025] active:scale-[0.98] cursor-pointer select-none px-6 py-3 text-xs sm:text-sm font-mono font-bold tracking-[0.2em] uppercase gap-4">
              <span className="relative z-10 text-white group-hover:text-[#FFD400]">
                EXPLORE ALL RECENT WORK (PORTFOLIO)
              </span>
              <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#FFD400] text-[#FFD400] group-hover:text-black flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
