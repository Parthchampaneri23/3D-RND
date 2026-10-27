"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Sparkles, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import CyberButton from "@/components/CyberButton";
import PageBanner from "@/components/PageBanner";

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
    subtitle: "Brand Identity & Spatial Architecture",
    year: "2026",
    category: "Branding",
    image: "/images/project_lumen_sal.jpg",
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
    image: "/images/project_toma_nota.jpg",
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
    image: "/images/service_ecommerce.jpg",
    tall: true,
    client: "Kailua Living",
    tags: ["Development", "E-commerce", "Three.js"],
  },
  {
    id: "mission-ops",
    index: "[04]",
    title: "Vanguard Outdoors",
    subtitle: "Commercial Cinematography & Storytelling",
    year: "2025",
    category: "Design",
    image: "/images/project_forest_film.jpg",
    avatarIcon: "🎬",
    client: "Vanguard Media",
    tags: ["Cinematography", "Storytelling", "Video"],
  },
  {
    id: "apex-fintech",
    index: "[05]",
    title: "Aura Creative",
    subtitle: "Joyful Lifestyle Brand Campaign & Identity",
    year: "2026",
    category: "Branding",
    image: "/images/project_lifestyle.jpg",
    avatarIcon: "✨",
    client: "Aura Global",
    tags: ["Branding", "Campaign", "Lifestyle"],
  },
  {
    id: "nebula-cloud",
    index: "[06]",
    title: "Core Web Platform",
    subtitle: "Modern Next.js 15 Web Applications & Cloud",
    year: "2026",
    category: "Development",
    image: "/images/service_webdev.jpg",
    client: "CoreStack Labs",
    tags: ["Development", "Cloud", "Next.js"],
  },
  {
    id: "astra-film",
    index: "[07]",
    title: "AstraFilm Studios",
    subtitle: "Commercial 8K Film Production & Studio Sets",
    year: "2026",
    category: "Design",
    image: "/images/service_media.jpg",
    tall: true,
    client: "Astra Media Group",
    tags: ["Design", "Cinematography", "Media"],
  },
  {
    id: "zenith-social",
    index: "[08]",
    title: "Zenith Social",
    subtitle: "Omnichannel Social Media & Creator Growth",
    year: "2026",
    category: "Social Media",
    image: "/images/service_social.jpg",
    avatarIcon: "📱",
    client: "Zenith Digital Brands",
    tags: ["Social Media", "Community", "Growth"],
  },
  {
    id: "brand-identity-studio",
    index: "[09]",
    title: "Pantone Identity Studio",
    subtitle: "Comprehensive Design Systems & Packaging",
    year: "2025",
    category: "Branding",
    image: "/images/service_branding.jpg",
    tall: true,
    client: "Pantone Creative Lab",
    tags: ["Branding", "Packaging", "Design"],
  },
  {
    id: "marketing-analytics",
    index: "[10]",
    title: "OmniGrowth Analytics",
    subtitle: "Performance Marketing, SEO & Attribution",
    year: "2026",
    category: "Community",
    image: "/images/service_marketing.jpg",
    client: "OmniGrowth Inc.",
    tags: ["Community", "SEO", "Analytics"],
  },
  {
    id: "mobile-ux-platform",
    index: "[11]",
    title: "Quantum Mobile OS",
    subtitle: "iOS & Android Cross-Platform Experience",
    year: "2025",
    category: "UX/UI",
    image: "/images/service_mobile.jpg",
    client: "Quantum Apps",
    tags: ["UX/UI", "Mobile", "React Native"],
  },
  {
    id: "agency-collaboration",
    index: "[12]",
    title: "Synapse Digital Hub",
    subtitle: "Dedicated Engineering & Design Pods",
    year: "2026",
    category: "Development",
    image: "/images/agency_team_studio.jpg",
    client: "Synapse Digital",
    tags: ["Development", "Agency", "Team"],
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

      {/* Attractive Hero Page Banner with Dark UI, Title & Breadcrumbs */}
      <PageBanner
        theme="dark"
        title="SELECTED WORKS &"
        highlightText="CASE STUDIES"
        subtitle="Explore our catalog of custom web applications, spatial 3D platforms, brand identities, and high-conversion e-commerce systems engineered for market leaders."
        badge="PORTFOLIO DIRECTORY // 2025 - 2026 ARCHIVE"
        breadcrumbs={[{ label: "Portfolios" }]}
        bgImage="/images/project_lumen_sal.jpg"
        ctaText="START A PROJECT"
        ctaHref="/#contact"
      />

      <main className="relative z-10 pt-12 pb-24 px-4 sm:px-8 lg:px-12 max-w-[1600px] mx-auto">
        {/* ================= FILTER & SEARCH BAR (DARK THEME) ================= */}
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
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.07] border border-white/15 focus:border-blue-500 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* ================= BENTO GRID (DARK UI CARDS) ================= */}
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

                  {/* Top Right Category Badge */}
                  <div className="absolute top-5 right-5 z-20">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#FFD400]/30 shadow-md">
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
                    {/* Multi-Stop Dark Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/65 to-black/35 pointer-events-none" />
                  </div>

                  {/* Floating Center Badge/Avatar (Matching Toma Nota owl / 04 in Image 2) */}
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
                      <span className="font-mono text-xs sm:text-sm text-neutral-400 font-bold shrink-0">
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

        {/* Bottom Mission CTA Strip with Dark Theme */}
        <div className="mt-20 sm:mt-24 rounded-3xl bg-gradient-to-r from-[#0c0e14] via-[#141722] to-[#0c0e14] border border-white/15 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
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

          <div className="relative z-10 shrink-0">
            <CyberButton href="/#contact" size="lg">
              SCHEDULE ARCHITECT CALL
            </CyberButton>
          </div>
        </div>
      </main>

      {/* Global RnDFooter */}
      <RnDFooter />
    </div>
  );
}
