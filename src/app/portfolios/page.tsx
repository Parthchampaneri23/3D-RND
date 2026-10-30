"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Search,
  ArrowUpRight,
  Home,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import { portfolioData, PortfolioProjectDetail } from "@/data/portfolioData";

import PageBanner from "@/components/PageBanner";

const CATEGORIES = [
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
    return portfolioData.filter((project) => {
      // Category match
      const matchesCategory =
        activeCategory === "All" ||
        project.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        project.tags?.some((t) =>
          t.toLowerCase().includes(activeCategory.toLowerCase())
        );

      // Search match
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.client.toLowerCase().includes(query) ||
        project.tags?.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black">
      {/* Background Starfield Canvas */}
      <SpaceBackground />

      {/* Global Navbar */}
      <Navbar />

      {/* =========================================================================
          1. EXACT SAME PAGE BANNER AS CAREER PAGE
          ========================================================================= */}
      <PageBanner
        title="PORTFOLIO ARCHIVE"
        breadcrumb="PORTFOLIOS"
      />

      <main className="relative z-20 w-full -mt-10 sm:-mt-14 md:-mt-18 rounded-t-[32px] sm:rounded-t-[44px] bg-transparent border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        {/* Top Header Row */}
        <section className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-14 pb-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 bg-black/60 border border-[#FFD400]/40 text-[#FFD400] backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PORTFOLIO DIRECTORY // 2025 - 2026 ARCHIVE</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-bebas)] tracking-wide uppercase leading-[0.95] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                SELECTED WORKS &amp;{" "}
                <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.45)]">
                  CASE STUDIES
                </span>
              </h1>
              <p className="text-sm sm:text-base font-normal max-w-2xl mt-3 leading-relaxed text-neutral-300">
                Explore our catalog of custom web applications, spatial 3D platforms, brand identities, and high-conversion e-commerce systems engineered for market leaders.
              </p>
            </div>

            <div className="shrink-0 mt-4 lg:mt-0">
              <Link href="/contact-us" className="inline-block">
                <div className="group relative inline-flex items-center justify-between rounded-full overflow-hidden bg-[#12141a]/95 hover:bg-[#1a1d26] border border-white/15 hover:border-[#FFD400]/70 text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,212,0,0.28)] transition-all duration-300 hover:scale-[1.025] active:scale-[0.98] cursor-pointer select-none px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm gap-3 sm:gap-4">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-full" />
                  <div className="flex items-center space-x-3 sm:space-x-3.5 relative z-10">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse bg-[#FFD400] shadow-[0_0_8px_#FFD400]" />
                    <span className="font-mono font-bold tracking-[0.18em] uppercase transition-colors whitespace-nowrap text-white group-hover:text-[#FFD400]">
                      START A PROJECT
                    </span>
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 group-hover:bg-[#FFD400] text-[#FFD400] group-hover:text-black flex items-center justify-center transition-all duration-300 shrink-0 ml-2 shadow-inner relative z-10">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. FILTER & SEARCH BAR + BENTO DIRECTORY GRID
            ========================================================================= */}
        <div className="pt-6 pb-24 px-4 sm:px-8 lg:px-12 max-w-[1600px] mx-auto">
        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white font-bold shadow-[0_0_20px_rgba(37,99,235,0.6)] border border-blue-400"
                      : "bg-white/[0.04] text-neutral-300 hover:text-white border border-white/15 hover:border-white/35 hover:bg-white/[0.08]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
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

        {/* Bento Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-24 rounded-3xl bg-white/[0.02] border border-white/10">
            <p className="text-neutral-400 text-base font-mono mb-4">
              No projects found matching &ldquo;{searchQuery || activeCategory}&rdquo;
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="px-5 py-2 rounded-full bg-[#FFD400] text-black font-mono text-xs uppercase font-bold hover:bg-[#ffe34d] transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {filteredProjects.map((project: PortfolioProjectDetail) => {
              const isTall = !!project.isFeatured;

              return (
                <div
                  key={project.id}
                  className={`group relative rounded-3xl overflow-hidden bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/60 transition-all duration-500 shadow-2xl flex flex-col justify-between ${
                    isTall
                      ? "md:row-span-2 min-h-[520px] lg:min-h-[580px]"
                      : "min-h-[380px] lg:min-h-[420px]"
                  }`}
                >
                  {/* Top-Left Index Tag */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className="font-mono text-xs sm:text-sm text-white/60 tracking-wider px-2 py-0.5 rounded bg-black/40 backdrop-blur-md border border-white/10">
                      [{project.index}]
                    </span>
                  </div>

                  {/* Top-Right Category Badge */}
                  <div className="absolute top-5 right-5 z-20">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#FFD400]/30 shadow-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Background Image & Ambient Gradient */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/65 to-black/35 pointer-events-none" />
                  </div>

                  {/* Optional Center Emoji Badge (from Reference) */}
                  {project.emoji && (
                    <div className="relative z-10 my-auto flex justify-center items-center pointer-events-none">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {project.emoji}
                      </div>
                    </div>
                  )}

                  {/* Bottom Content Area */}
                  <div className="relative z-10 mt-auto p-6 sm:p-7 pt-12 flex flex-col justify-end">
                    <div className="flex items-baseline justify-between gap-4 mb-1">
                      <Link href={`/portfolios/${project.id}`}>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#FFD400] transition-colors font-[family-name:var(--font-jakarta)]">
                          {project.title}
                        </h3>
                      </Link>
                      <span className="font-mono text-xs sm:text-sm text-neutral-400 font-bold shrink-0">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                      {project.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                      {/* Tag Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.05] text-neutral-300 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* View Mission CyberButton */}
                      <Link
                        href={`/portfolios/${project.id}`}
                        className="inline-block"
                      >
                        <div className="group/btn relative inline-flex items-center justify-between rounded-full overflow-hidden bg-[#12141a]/95 hover:bg-[#1a1d26] border border-white/15 hover:border-[#FFD400]/70 text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,212,0,0.28)] transition-all duration-300 hover:scale-[1.025] active:scale-[0.98] cursor-pointer select-none px-3.5 py-1.5 text-xs gap-2.5">
                          <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-full" />
                          <div className="flex items-center space-x-3 sm:space-x-3.5 relative z-10">
                            <span className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse bg-[#FFD400] shadow-[0_0_8px_#FFD400]" />
                            <span className="font-mono font-bold tracking-[0.18em] uppercase transition-colors whitespace-nowrap text-white group-hover/btn:text-[#FFD400]">
                              VIEW MISSION
                            </span>
                          </div>
                          <div className="w-5 h-5 rounded-full bg-white/10 group-hover/btn:bg-[#FFD400] text-[#FFD400] group-hover/btn:text-black flex items-center justify-center transition-all duration-300 shrink-0 ml-2 shadow-inner relative z-10">
                            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:rotate-12 transition-transform duration-300" />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* =========================================================================
            3. BOTTOM CTA CARD (Matching Reference Site)
            ========================================================================= */}
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
            <Link href="/contact-us" className="inline-block">
              <div className="group relative inline-flex items-center justify-between rounded-full overflow-hidden bg-[#12141a]/95 hover:bg-[#1a1d26] border border-white/15 hover:border-[#FFD400]/70 text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,212,0,0.28)] transition-all duration-300 hover:scale-[1.025] active:scale-[0.98] cursor-pointer select-none px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base gap-4 sm:gap-5">
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-full" />
                <div className="flex items-center space-x-3 sm:space-x-3.5 relative z-10">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse bg-[#FFD400] shadow-[0_0_8px_#FFD400]" />
                  <span className="font-mono font-bold tracking-[0.18em] uppercase transition-colors whitespace-nowrap text-white group-hover:text-[#FFD400]">
                    SCHEDULE ARCHITECT CALL
                  </span>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-[#FFD400] text-[#FFD400] group-hover:text-black flex items-center justify-center transition-all duration-300 shrink-0 ml-2 shadow-inner relative z-10">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>

      {/* Global RnD Footer */}
      <RnDFooter />
    </div>
  );
}
