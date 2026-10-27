"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Sparkles, Filter, ArrowUpRight, Globe, Layers, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import CyberButton from "@/components/CyberButton";

interface PortfolioProject {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  image: string;
  tall?: boolean;
  avatarIcon?: string;
  client: string;
  tags: string[];
}

const portfolioData: PortfolioProject[] = [
  {
    id: "lumen-sal",
    index: "[01]",
    title: "Lumen Sal",
    subtitle: "Brand Identity & Product Design",
    year: "2026",
    category: "Branding",
    image: "/images/industry_automotive.jpg",
    tall: true,
    client: "Lumen Architecture",
    tags: ["Branding", "Spatial 3D", "Identity"],
  },
  {
    id: "toma-nota",
    index: "[02]",
    title: "Toma Nota",
    subtitle: "Brand Identity & Product Design",
    year: "2025",
    category: "Branding",
    image: "/images/about_space_pedestal.jpg",
    avatarIcon: "🦉",
    client: "Toma Nota Studios",
    tags: ["Branding", "Creative Direction"],
  },
  {
    id: "kailua",
    index: "[03]",
    title: "Kailua",
    subtitle: "Development & E-commerce",
    year: "2025",
    category: "Development",
    image: "/images/project_ecommerce.jpg",
    tall: true,
    client: "Kailua Living",
    tags: ["Development", "E-commerce", "Three.js"],
  },
  {
    id: "mission-ops",
    index: "[04]",
    title: "Wildfire Vanguard",
    subtitle: "Real-time Telemetry & Autonomous Drone Mesh",
    year: "2025",
    category: "Development",
    image: "/images/project_ai.jpg",
    avatarIcon: "👨‍🚒",
    client: "State Emergency Service",
    tags: ["UX/UI", "Development", "AI"],
  },
  {
    id: "apex-fintech",
    index: "[05]",
    title: "Apex FinTech",
    subtitle: "Next.js 15 High-Frequency Crypto Engine",
    year: "2026",
    category: "Development",
    image: "/images/project_fintech.jpg",
    client: "Apex Global Capital",
    tags: ["Development", "Fintech", "Security"],
  },
  {
    id: "nebula-cloud",
    index: "[06]",
    title: "Nebula Cloud OS",
    subtitle: "Multi-Region Distributed Infrastructure",
    year: "2026",
    category: "UX/UI",
    image: "/images/nebula_cloud_os_3d.jpg",
    client: "Orbital Computing Labs",
    tags: ["UX/UI", "Cloud", "Kubernetes"],
  },
  {
    id: "astra-film",
    index: "[07]",
    title: "AstraFilm Studios",
    subtitle: "Commercial 8K Film Production & CGI VFX",
    year: "2026",
    category: "Design",
    image: "/images/showreel_thumb.jpg",
    tall: true,
    client: "Orbital Global Media",
    tags: ["Design", "Cinematography", "Media"],
  },
  {
    id: "zenith-social",
    index: "[08]",
    title: "Zenith Social",
    subtitle: "Omnichannel Social Commerce Platform",
    year: "2026",
    category: "Social Media",
    image: "/images/social.png",
    avatarIcon: "🌐",
    client: "Zenith Digital Brands",
    tags: ["Social Media", "Community", "Growth"],
  },
  {
    id: "aurora-horology",
    index: "[09]",
    title: "Aurora Spaceware",
    subtitle: "Photorealistic 3D Chronograph Visualizer",
    year: "2025",
    category: "E-commerce",
    image: "/images/weddev.png",
    tall: true,
    client: "Aurora Horology Geneva",
    tags: ["E-commerce", "WebGL", "Luxury"],
  },
  {
    id: "content-matrix",
    index: "[10]",
    title: "Chronos Editorial",
    subtitle: "Tone-Calibrated Commercial Copywriting Pipeline",
    year: "2026",
    category: "Community",
    image: "/images/contet.png",
    client: "Chronos Media Group",
    tags: ["Community", "SEO", "Copywriting"],
  },
  {
    id: "medtech-vanguard",
    index: "[11]",
    title: "MedTech Vanguard",
    subtitle: "AI Spatial Diagnostics & Tele-Surgical Platform",
    year: "2025",
    category: "UX/UI",
    image: "/images/industry_medtech.jpg",
    client: "Vanguard Life Sciences",
    tags: ["UX/UI", "Healthcare", "ISO 13485"],
  },
  {
    id: "automotive-os",
    index: "[12]",
    title: "HyperDrive Connected",
    subtitle: "Next-Gen Cockpit Telemetry & Mobile Fleet OS",
    year: "2026",
    category: "Design",
    image: "/images/industry_automotive.jpg",
    client: "HyperDrive Motors",
    tags: ["Design", "Automotive", "Mobile"],
  },
];

const categories = [
  "All",
  "Branding",
  "Social Media",
  "Development",
  "UX/UI",
  "E-commerce",
  "Design",
  "Community",
];

export default function PortfoliosPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return portfolioData.filter((item) => {
      const matchesCategory =
        activeCategory === "All" ||
        item.category.toLowerCase() === activeCategory.toLowerCase() ||
        item.tags.some((t) => t.toLowerCase() === activeCategory.toLowerCase());

      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
            <span>PORTFOLIO DIRECTORY // 2025 - 2026 ARCHIVE</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-bebas)] tracking-wide uppercase leading-[0.92] text-white">
                SELECTED WORKS &amp;{" "}
                <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.35)]">
                  CASE STUDIES
                </span>
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 font-light max-w-2xl mt-4">
                Explore our catalog of custom web applications, spatial 3D platforms, brand identities, and high-conversion e-commerce systems engineered for market leaders.
              </p>
            </div>

            <CyberButton href="/#contact" size="md">
              START A PROJECT
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
              placeholder={`Search ${portfolioData.length} projects...`}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.07] border border-white/15 focus:border-blue-500 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* ================= BENTO GRID (EXACT IMAGE 2 MASONRY/BENTO LAYOUT) ================= */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-24 bg-white/[0.02] rounded-3xl border border-white/10">
            <p className="text-neutral-400 font-mono text-sm mb-4">
              No projects found matching &quot;{searchQuery}&quot; in {activeCategory}.
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
            {filteredProjects.map((project) => {
              const isTall = project.tall;

              return (
                <div
                  key={project.id}
                  className={`group relative rounded-3xl overflow-hidden bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/60 transition-all duration-500 shadow-2xl flex flex-col justify-between ${
                    isTall ? "md:row-span-2 min-h-[520px] lg:min-h-[580px]" : "min-h-[380px] lg:min-h-[420px]"
                  }`}
                >
                  {/* Top Index Corner ([01], [02], etc.) */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className="font-mono text-xs sm:text-sm text-white/60 tracking-wider px-2 py-0.5 rounded bg-black/40 backdrop-blur-md border border-white/10">
                      {project.index}
                    </span>
                  </div>

                  {/* Optional Right Category Badge */}
                  <div className="absolute top-5 right-5 z-20">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#FFD400]/30 shadow-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Main Project Edge-to-Edge Image with Zoom on Hover */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Multi-Stop Dark Vignette for Premium Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/50 to-transparent pointer-events-none" />
                  </div>

                  {/* Floating Center Badge/Avatar (Matching Toma Nota owl / 04 Firefighter in Image 2) */}
                  {project.avatarIcon && (
                    <div className="relative z-10 my-auto flex justify-center items-center pointer-events-none">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {project.avatarIcon}
                      </div>
                    </div>
                  )}

                  {/* Bottom Information Card Overlay */}
                  <div className="relative z-10 mt-auto p-6 sm:p-7 pt-12 flex flex-col justify-end">
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#FFD400] transition-colors font-[family-name:var(--font-jakarta)]">
                        {project.title}
                      </h3>
                      <span className="font-mono text-xs sm:text-sm text-neutral-400 shrink-0">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                      {project.subtitle}
                    </p>

                    {/* Tags & Action Button */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.05] text-neutral-300 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <CyberButton href="/#contact" size="sm">
                        VIEW MISSION
                      </CyberButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Mission CTA Strip */}
        <div className="mt-20 sm:mt-24 rounded-3xl bg-gradient-to-r from-[#0c0e14] via-[#141722] to-[#0c0e14] border border-white/15 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BESPOKE CLIENT COMMISSIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
              Have an ambitious vision for your brand?
            </h2>
            <p className="text-sm text-neutral-400 font-light max-w-xl">
              Let&apos;s build an unprecedented digital experience together. Our principal engineers and designers are ready to scope your project.
            </p>
          </div>

          <CyberButton href="/#contact" size="lg">
            SCHEDULE ARCHITECT CALL
          </CyberButton>
        </div>
      </main>

      {/* Global RnDFooter */}
      <RnDFooter />
    </div>
  );
}
