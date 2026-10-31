"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Search,
  ArrowUpRight,
  Filter,
  Layers,
  Building2,
  SlidersHorizontal,
  CheckCircle2,
  Eye,
  EyeOff,
  ArrowUp,
  ArrowDown,
  ShieldCheck,
  TrendingUp,
  X,
  RotateCcw,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import {
  portfolioData as initialPortfolioData,
  PortfolioProjectDetail,
  PORTFOLIO_CATEGORIES,
  PortfolioCategory,
} from "@/data/portfolioData";
import PageBanner from "@/components/PageBanner";
import ServiceConversionCTA from "@/components/ServiceConversionCTA";

const SERVICE_FILTER_OPTIONS = [
  "All Services",
  "Custom Web Development",
  "Cloud & DevOps",
  "Enterprise Software Solutions",
  "E-Commerce Engineering",
  "Branding & Graphic Design",
  "Spatial & 3D Experiences",
  "UI/UX Design",
  "Digital Marketing & SEO",
  "Commercial Media & Motion",
];

const INDUSTRY_FILTER_OPTIONS = [
  "All Industries",
  "Retail & E-Commerce",
  "Startups & Professional Services",
  "Healthcare & Life Sciences",
  "Fintech & Banking",
  "Food & FMCG",
  "Real Estate & Architecture",
  "Manufacturing & Robotics",
  "Travel & Tourism",
];

/**
 * Ultra-smooth card image renderer with progressive fade-in,
 * GPU compositor isolation, and ambient shimmer to eliminate black flashing during scroll.
 */
function SmoothCardImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0c0e14] transform-gpu [backface-visibility:hidden]">
      {/* Subtle ambient shimmer while decoding */}
      <div
        className={`absolute inset-0 bg-[#0e111a] transition-opacity duration-700 pointer-events-none z-0 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] via-white/[0.05] to-white/[0.01] animate-pulse" />
      </div>

      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={80}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 transform-gpu ${
          isLoaded
            ? "opacity-100 scale-100 filter-none"
            : "opacity-0 scale-[1.02] blur-[3px]"
        }`}
      />

      {/* Atmospheric gradient overlay for typography contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-[#090b10]/75 to-black/40 pointer-events-none z-10" />
    </div>
  );
}

export default function PortfoliosPage() {
  // Live projects list allowing admin reorder and publish/unpublish toggling
  const [projectsList, setProjectsList] = useState<PortfolioProjectDetail[]>(initialPortfolioData);
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [adminStatusFilter, setAdminStatusFilter] = useState<"all" | "published" | "drafts">("all");

  // Multi-dimensional filters
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedService, setSelectedService] = useState<string>("All Services");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All Industries");
  const [searchQuery, setSearchQuery] = useState("");
  const [adminToast, setAdminToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setAdminToast(msg);
    setTimeout(() => setAdminToast(null), 3000);
  };

  // Admin Actions: Toggle Publish
  const handleTogglePublish = (projectId: string) => {
    setProjectsList((prev) =>
      prev.map((p) => {
        if (p.id === projectId) {
          const newStatus = !p.published;
          showToast(`Project "${p.title}" marked as ${newStatus ? "PUBLISHED (Live)" : "DRAFT (Unpublished)"}`);
          return { ...p, published: newStatus };
        }
        return p;
      })
    );
  };

  // Admin Actions: Reorder Up / Down
  const handleMoveProject = (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= projectsList.length) return;

    const updated = [...projectsList];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;

    // Update order sequence
    const reordered = updated.map((item, idx) => ({ ...item, order: idx + 1 }));
    setProjectsList(reordered);
    showToast(`Reordered "${temp.title}" ${direction === "up" ? "higher" : "lower"} in catalog priority.`);
  };

  // Filtered and Sorted Projects
  const filteredProjects = useMemo(() => {
    return projectsList
      .filter((project) => {
        // In user mode, only show published
        if (!isAdminMode && !project.published) {
          return false;
        }

        // Admin status filter
        if (isAdminMode) {
          if (adminStatusFilter === "published" && !project.published) return false;
          if (adminStatusFilter === "drafts" && project.published) return false;
        }

        // Category filter
        const matchesCategory =
          activeCategory === "All" || project.category === activeCategory;

        // Service filter
        const matchesService =
          selectedService === "All Services" ||
          project.services.some((s) =>
            s.name.toLowerCase().includes(selectedService.toLowerCase())
          ) ||
          project.tags.some((t) =>
            t.toLowerCase().includes(selectedService.toLowerCase())
          );

        // Industry filter
        const matchesIndustry =
          selectedIndustry === "All Industries" ||
          project.industry.toLowerCase().includes(selectedIndustry.toLowerCase()) ||
          project.industries.some((i) =>
            i.name.toLowerCase().includes(selectedIndustry.toLowerCase())
          );

        // Search match
        const query = searchQuery.trim().toLowerCase();
        const matchesSearch =
          !query ||
          project.title.toLowerCase().includes(query) ||
          project.subtitle.toLowerCase().includes(query) ||
          project.summary.toLowerCase().includes(query) ||
          project.client.toLowerCase().includes(query) ||
          project.projectType.toLowerCase().includes(query) ||
          project.tags.some((t) => t.toLowerCase().includes(query)) ||
          project.techStack.some((ts) => ts.toLowerCase().includes(query));

        return matchesCategory && matchesService && matchesIndustry && matchesSearch;
      })
      .sort((a, b) => (a.order || 99) - (b.order || 99));
  }, [
    projectsList,
    isAdminMode,
    adminStatusFilter,
    activeCategory,
    selectedService,
    selectedIndustry,
    searchQuery,
  ]);

  const hasActiveFilters =
    activeCategory !== "All" ||
    selectedService !== "All Services" ||
    selectedIndustry !== "All Industries" ||
    searchQuery.trim().length > 0;

  const resetFilters = () => {
    setActiveCategory("All");
    setSelectedService("All Services");
    setSelectedIndustry("All Industries");
    setSearchQuery("");
  };

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black">
      {/* Background Starfield Canvas */}
      <SpaceBackground />

      {/* Global Navbar */}
      <Navbar />

      {/* Page Banner */}
      <PageBanner title="PORTFOLIO ARCHIVE" breadcrumb="PORTFOLIOS" />

      {/* Admin Notification Toast */}
      {adminToast && (
        <div className="fixed bottom-8 right-8 z-50 bg-[#12141c] border border-[#FFD400] text-white px-5 py-3 rounded-2xl shadow-[0_10px_35px_rgba(255,212,0,0.25)] flex items-center gap-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-[#FFD400] shrink-0" />
          <span className="text-xs font-mono">{adminToast}</span>
        </div>
      )}

      {/* Main Content Area - Solid bg-[#050608] to isolate compositor and prevent WebGL redraw flashes */}
      <main className="relative z-20 w-full -mt-10 sm:-mt-14 md:-mt-18 rounded-t-[32px] sm:rounded-t-[44px] bg-[#050608] border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        {/* Top Header Section */}
        <section className="bg-black max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-14 pb-6">
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
                Explore our engineering and design showcase spanning custom web applications, mobile architectures, programmatic growth engines, brand identities, and commercial cinematography.
              </p>
            </div>

            {/* Header Right: Admin Mode Switch & Commission Button */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {/* Admin Mode Toggle */}
              <button
                type="button"
                onClick={() => setIsAdminMode(!isAdminMode)}
                className={`px-3.5 py-2 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer border ${
                  isAdminMode
                    ? "bg-[#FFD400] text-black font-bold border-[#FFD400] shadow-[0_0_15px_rgba(255,212,0,0.4)]"
                    : "bg-white/[0.04] text-neutral-300 hover:text-white border-white/15"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>{isAdminMode ? "Admin Mode Active" : "Admin Controls"}</span>
              </button>

              <Link href="/contact-us" className="inline-block">
                <div className="group relative inline-flex items-center justify-between rounded-full overflow-hidden bg-[#12141a]/95 hover:bg-[#1a1d26] border border-white/15 hover:border-[#FFD400]/70 text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,212,0,0.28)] transition-all duration-300 hover:scale-[1.025] active:scale-[0.98] cursor-pointer select-none px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm gap-3">
                  <div className="flex items-center space-x-2.5 relative z-10">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse bg-[#FFD400] shadow-[0_0_8px_#FFD400]" />
                    <span className="font-mono font-bold tracking-[0.18em] uppercase transition-colors whitespace-nowrap text-white group-hover:text-[#FFD400]">
                      COMMISSION SPRINT
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#FFD400] text-[#FFD400] group-hover:text-black flex items-center justify-center transition-all duration-300 shrink-0 ml-1">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Admin Dashboard Bar (Only when Admin Mode is ON) */}
        {isAdminMode && (
          <section className="bg-[#0e111a] border-y border-[#FFD400]/40 px-4 sm:px-8 lg:px-12 py-3.5">
            <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md bg-[#FFD400]/15 text-[#FFD400] border border-[#FFD400]/30 font-bold uppercase tracking-wider">
                  ADMIN CONSOLE
                </span>
                <span className="text-neutral-300">
                  Total Catalog: <strong className="text-white">{projectsList.length}</strong> | Published:{" "}
                  <strong className="text-emerald-400">
                    {projectsList.filter((p) => p.published).length}
                  </strong>{" "}
                  | Drafts:{" "}
                  <strong className="text-amber-400">
                    {projectsList.filter((p) => !p.published).length}
                  </strong>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-neutral-400">View Status:</span>
                {(["all", "published", "drafts"] as const).map((filterOpt) => (
                  <button
                    key={filterOpt}
                    type="button"
                    onClick={() => setAdminStatusFilter(filterOpt)}
                    className={`px-3 py-1 rounded-lg uppercase tracking-wider cursor-pointer border ${
                      adminStatusFilter === filterOpt
                        ? "bg-[#FFD400] text-black font-bold border-[#FFD400]"
                        : "bg-white/[0.04] text-neutral-300 border-white/10 hover:border-white/25"
                    }`}
                  >
                    {filterOpt}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Filter and Content Grid Section */}
        <div className="relative pt-8 pb-20 px-4 sm:px-8 lg:px-12 max-w-[1600px] mx-auto">
          {/* Category Tabs: The 5 Requested Categories */}
          <div className="relative z-10 mb-6 pb-4 border-b border-white/10 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-2.5 min-w-max">
              <button
                type="button"
                onClick={() => setActiveCategory("All")}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer border ${
                  activeCategory === "All"
                    ? "bg-[#FFD400] text-black font-bold border-[#FFD400] shadow-[0_0_20px_rgba(255,212,0,0.35)]"
                    : "bg-white/[0.04] text-neutral-300 hover:text-white border-white/15 hover:border-white/35"
                }`}
              >
                All Projects ({projectsList.filter((p) => isAdminMode || p.published).length})
              </button>

              {PORTFOLIO_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                const count = projectsList.filter(
                  (p) => p.category === cat && (isAdminMode || p.published)
                ).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer border whitespace-nowrap ${
                      isActive
                        ? "bg-[#FFD400] text-black font-bold border-[#FFD400] shadow-[0_0_20px_rgba(255,212,0,0.35)]"
                        : "bg-white/[0.04] text-neutral-300 hover:text-white border-white/15 hover:border-white/35"
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Multi-Dimensional Filter Bar: Service, Industry & Search */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 mb-8 p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md items-center">
            {/* Filter by Service */}
            <div className="md:col-span-4 flex items-center gap-2 rounded-xl bg-black/40 border border-white/10 px-3.5 py-2.5 focus-within:border-[#FFD400] transition-colors">
              <Layers className="w-4 h-4 text-[#FFD400] shrink-0" />
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-transparent text-xs font-mono text-neutral-200 focus:outline-none cursor-pointer"
              >
                {SERVICE_FILTER_OPTIONS.map((srv) => (
                  <option key={srv} value={srv} className="bg-[#121520] text-white">
                    {srv}
                  </option>
                ))}
              </select>
            </div>

            {/* Filter by Industry */}
            <div className="md:col-span-4 flex items-center gap-2 rounded-xl bg-black/40 border border-white/10 px-3.5 py-2.5 focus-within:border-[#FFD400] transition-colors">
              <Building2 className="w-4 h-4 text-[#FFD400] shrink-0" />
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full bg-transparent text-xs font-mono text-neutral-200 focus:outline-none cursor-pointer"
              >
                {INDUSTRY_FILTER_OPTIONS.map((ind) => (
                  <option key={ind} value={ind} className="bg-[#121520] text-white">
                    {ind}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <div className="md:col-span-4 relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by client, stack, brief..."
                className="w-full pl-9 pr-8 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-[#FFD400] text-xs font-mono text-white placeholder-neutral-500 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Active Filter Indicators */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-8 text-xs font-mono">
            <div className="flex items-center gap-2 text-neutral-400">
              <span>Showing:</span>
              <span className="text-[#FFD400] font-bold">{filteredProjects.length}</span>
              <span>of {projectsList.length} total projects</span>
              {hasActiveFilters && (
                <span className="ml-2 px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-neutral-300">
                  Filtered
                </span>
              )}
            </div>

            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-[#FFD400] transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>

          {/* Projects Bento / Masonry Grid */}
          {filteredProjects.length === 0 ? (
            <div className="relative z-10 text-center py-24 rounded-3xl bg-white/[0.02] border border-white/10">
              <p className="text-neutral-400 text-sm font-mono mb-4">
                No projects found matching the selected filter criteria.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="px-6 py-2.5 rounded-full bg-[#FFD400] text-black font-mono text-xs uppercase font-bold hover:bg-[#ffe34d] transition-all cursor-pointer shadow-[0_0_15px_rgba(255,212,0,0.3)]"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {filteredProjects.map((project: PortfolioProjectDetail, idx: number) => {
                return (
                  <div
                    key={project.id}
                    className={`group relative rounded-3xl overflow-hidden bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/60 transition-colors duration-300 shadow-2xl flex flex-col justify-between h-[460px] transform-gpu ${
                      !project.published ? "opacity-75 ring-1 ring-amber-400/50" : ""
                    }`}
                  >
                    {/* Top Row: Index Tag & Category Badge */}
                    <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between gap-2 pointer-events-none">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-white/90 tracking-wider px-2.5 py-1 rounded-md bg-black/85 border border-white/15 shadow-md">
                          [{project.index}]
                        </span>
                        {project.isFeatured && (
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-[#FFD400] px-2.5 py-1 rounded-md bg-black/85 border border-[#FFD400]/40 shadow-md">
                            <Sparkles className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                      </div>

                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] px-3 py-1 rounded-full bg-black/90 border border-[#FFD400]/30 shadow-md truncate max-w-[200px]">
                        {project.category}
                      </span>
                    </div>

                    {/* Admin Interactive Action Overlay */}
                    {isAdminMode && (
                      <div className="absolute top-16 right-5 z-30 flex items-center gap-1.5 p-1 rounded-xl bg-black/95 border border-[#FFD400]/40 shadow-xl">
                        {/* Publish / Unpublish Toggle */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            handleTogglePublish(project.id);
                          }}
                          title={project.published ? "Click to Unpublish" : "Click to Publish"}
                          className={`p-1.5 rounded-lg text-xs font-mono flex items-center gap-1 transition-all cursor-pointer ${
                            project.published
                              ? "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30"
                              : "bg-amber-500/20 text-amber-400 hover:bg-amber-500/30"
                          }`}
                        >
                          {project.published ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                          <span className="text-[10px] uppercase font-bold">
                            {project.published ? "Live" : "Draft"}
                          </span>
                        </button>

                        {/* Reorder Up */}
                        <button
                          type="button"
                          disabled={idx === 0}
                          onClick={(e) => {
                            e.preventDefault();
                            handleMoveProject(idx, "up");
                          }}
                          title="Move Priority Up"
                          className="p-1.5 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                        >
                          <ArrowUp className="w-3.5 h-3.5" />
                        </button>

                        {/* Reorder Down */}
                        <button
                          type="button"
                          disabled={idx === filteredProjects.length - 1}
                          onClick={(e) => {
                            e.preventDefault();
                            handleMoveProject(idx, "down");
                          }}
                          title="Move Priority Down"
                          className="p-1.5 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                        >
                          <ArrowDown className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    {/* Background Project Thumbnail with progressive smooth fade-in and GPU layer */}
                    <SmoothCardImage
                      src={project.image}
                      alt={project.title}
                      priority={idx < 6}
                    />

                    {/* Bottom Content Area */}
                    <div className="relative z-10 mt-auto p-6 sm:p-7 pt-12 flex flex-col justify-end">
                      {/* Client Name & Project Date */}
                      <div className="flex items-center justify-between gap-3 text-xs font-mono text-[#FFD400] mb-1.5">
                        <span className="truncate tracking-wide">{project.client}</span>
                        <span className="text-neutral-400 shrink-0">{project.projectDate || project.year}</span>
                      </div>

                      {/* Title */}
                      <Link href={`/portfolios/${project.id}`}>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#FFD400] transition-colors font-[family-name:var(--font-syne)] leading-snug">
                          {project.title}
                        </h3>
                      </Link>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed my-3 line-clamp-2">
                        {project.summary || project.subtitle}
                      </p>

                      {/* Verified Result Metric Badge (When available) */}
                      {project.results && project.results.length > 0 && (
                        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/75 border border-[#FFD400]/30 w-fit shadow-md">
                          <TrendingUp className="w-3.5 h-3.5 text-[#FFD400] shrink-0" />
                          <span className="text-xs font-mono font-bold text-[#FFD400]">
                            {project.results[0].metric}
                          </span>
                          <span className="text-[11px] text-neutral-300 font-light truncate">
                            {project.results[0].label}
                          </span>
                        </div>
                      )}

                      {/* Linked Services & Industries Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-4">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-neutral-300 border border-white/10">
                          {project.industry}
                        </span>
                        {project.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-neutral-400 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Card Footer: View Case Study Button */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                        <Link
                          href={`/portfolios/${project.id}`}
                          className="w-full inline-flex items-center justify-between group/link py-1"
                        >
                          <span className="text-xs font-mono font-bold uppercase tracking-[0.18em] text-white group-hover/link:text-[#FFD400] transition-colors">
                            EXPLORE CASE STUDY
                          </span>
                          <div className="w-7 h-7 rounded-full bg-white/10 group-hover/link:bg-[#FFD400] text-[#FFD400] group-hover/link:text-black flex items-center justify-center transition-all duration-300 shrink-0">
                            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Bottom Conversion CTA Form */}
          <div className="mt-16 sm:mt-24">
            <ServiceConversionCTA
              id="portfolio-cta"
              title="Have an Ambitious Project Vision?"
              subtitle="Whether you need a custom web platform, native mobile app, high-converting digital marketing engine, or commercial media production, our engineering directors are ready to scope your build."
              badge="COMMISSION AN ENTERPRISE SYSTEM"
            />
          </div>
        </div>
      </main>

      {/* Global RnD Footer */}
      <RnDFooter />
    </div>
  );
}
