"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Search,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Layers,
  Zap,
  Code,
  TrendingUp,
  Palette,
  Video,
  Compass,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import PageBanner from "@/components/PageBanner";
import ServiceCategoryShowcase from "@/components/ServiceCategoryShowcase";
import ServiceEngagementModels from "@/components/ServiceEngagementModels";
import ServiceCaseStudies from "@/components/ServiceCaseStudies";
import ServiceFaqSection from "@/components/ServiceFaqSection";
import ServiceConversionCTA from "@/components/ServiceConversionCTA";
import { servicesData, ServiceDetail } from "@/data/servicesData";
import ServiceUniverseSection from "@/components/ServiceUniverseSection";

const CATEGORIES = [
  "All",
  "Web & Cloud",
  "Digital Marketing",
  "Design",
  "Social Media",
  "Media",
];

const NAVIGATION_DIVISIONS = [
  { id: "technology-solutions", label: "Technology", num: "01", icon: Code },
  { id: "digital-marketing", label: "Digital Marketing", num: "02", icon: TrendingUp },
  { id: "branding-design", label: "Branding & Design", num: "03", icon: Palette },
  { id: "media-production", label: "Media Production", num: "04", icon: Video },
  { id: "engagement-models", label: "Engagement Models", num: "05", icon: Layers },
  { id: "case-studies", label: "Case Studies", num: "06", icon: Cpu },
  { id: "faqs", label: "FAQs", num: "07", icon: Sparkles },
  { id: "directory", label: "Service Index", num: "08", icon: Compass },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      // Category filter
      const matchesCategory =
        activeCategory === "All" ||
        service.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        activeCategory.toLowerCase().includes(service.category.toLowerCase());

      // Search filter
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        service.title.toLowerCase().includes(query) ||
        service.highlightText.toLowerCase().includes(query) ||
        service.tagline.toLowerCase().includes(query) ||
        service.specs.some((spec) => spec.toLowerCase().includes(query)) ||
        service.techStack.some((t) => t.name.toLowerCase().includes(query));

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
          2.1 SERVICES HERO: Page Banner & Capabilities Overview
          ========================================================================= */}
      <PageBanner
        title="INTEGRATED CAPABILITIES"
        breadcrumb="SERVICES"
      />

      <main className="relative z-20 w-full -mt-10 sm:-mt-14 md:-mt-18 rounded-t-[32px] sm:rounded-t-[44px] bg-[#050608]/90 backdrop-blur-xl border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)] overflow-hidden">
        {/* Section 2.1: Capabilities Overview Header & Live Metrics */}
        <section className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-14 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 bg-black/60 border border-[#FFD400]/40 text-[#FFD400] backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>2.1 SERVICES HERO // INTEGRATED CAPABILITIES MATRIX</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.02] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                HIGH-PERFORMANCE ENGINEERING &amp;{" "}
                <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.45)]">
                  DIGITAL ACCELERATION
                </span>
              </h1>
              <p className="text-sm sm:text-base font-normal max-w-2xl mt-4 leading-relaxed text-neutral-300">
                RnD combines full-stack cloud engineering, algorithmic digital marketing, spatial brand identities, and cinema-grade media production into a unified delivery engine.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href="/contact-us?intent=consultation" className="inline-block">
                <div className="group relative inline-flex items-center justify-between rounded-full overflow-hidden bg-[#12141a]/95 hover:bg-[#1a1d26] border border-white/15 hover:border-[#FFD400]/70 text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,212,0,0.28)] transition-all duration-300 hover:scale-[1.025] active:scale-[0.98] cursor-pointer select-none px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm gap-3 sm:gap-4">
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-full" />
                  <div className="flex items-center space-x-3 relative z-10">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse bg-[#FFD400] shadow-[0_0_8px_#FFD400]" />
                    <span className="font-mono font-bold tracking-[0.18em] uppercase transition-colors whitespace-nowrap text-white group-hover:text-[#FFD400]">
                      BOOK ARCHITECT CALL
                    </span>
                  </div>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/10 group-hover:bg-[#FFD400] text-[#FFD400] group-hover:text-black flex items-center justify-center transition-all duration-300 shrink-0 ml-2 shadow-inner relative z-10">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Capability Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#FFD400]">04</div>
              <div className="text-xs font-mono text-neutral-300 uppercase tracking-wider mt-1">
                Core Divisions
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Tech, Growth, Brand, Media</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#FFD400]">12</div>
              <div className="text-xs font-mono text-neutral-300 uppercase tracking-wider mt-1">
                Specialized Practices
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5">End-to-end execution</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#FFD400]">99.9%</div>
              <div className="text-xs font-mono text-neutral-300 uppercase tracking-wider mt-1">
                Production SLA
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Guaranteed reliability</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-2xl sm:text-3xl font-bold font-mono text-[#FFD400]">150+</div>
              <div className="text-xs font-mono text-neutral-300 uppercase tracking-wider mt-1">
                Global Launches
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5">Across 18 industries</div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2.2 SERVICE CATEGORY NAVIGATION: Sticky / Fast Jump Navigation Bar
            ========================================================================= */}
        <ServiceUniverseSection />

        {/* =========================================================================
            SECTIONS 2.3 - 2.6: THE FOUR MAIN SERVICE DIVISIONS SHOWCASE
            2.3 Technology Solutions
            2.4 Digital Marketing
            2.5 Branding & Design
            2.6 Media Production
            ========================================================================= */}
        <ServiceCategoryShowcase />

        {/* =========================================================================
            SECTION 2.7: ENGAGEMENT MODELS
            Project-based work, retainers or dedicated teams
            ========================================================================= */}
        <ServiceEngagementModels />

        {/* =========================================================================
            SECTION 2.8: RELATED CASE STUDIES
            Relevant work for each service category
            ========================================================================= */}
        <ServiceCaseStudies />

        {/* =========================================================================
            INTERACTIVE SERVICE SEARCH & FULL BENTO DIRECTORY GRID
            ========================================================================= */}
        <section id="directory" className="py-24 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 scroll-mt-24 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-3 bg-black/60 border border-[#FFD400]/40 text-[#FFD400] backdrop-blur-md">
                <Compass className="w-3.5 h-3.5" />
                <span>ALL PRACTICES // DETAILED SPEC DIRECTORY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.05] text-white">
                EXPLORE COMPLETE <span className="text-[#FFD400]">SERVICE CATALOG</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-light mt-2 max-w-xl">
                Filter and inspect technical specifications, tech stacks, and deployment SLAs across all 12 specialized disciplines.
              </p>
            </div>

            {/* Search Box */}
            <div className="relative shrink-0 min-w-[260px] sm:min-w-[320px]">
              <Search className="w-4 h-4 text-[#FFD400] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${servicesData.length} practices, stacks...`}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.07] border border-white/15 focus:border-[#FFD400] text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#FFD400] text-black font-bold shadow-[0_0_20px_rgba(255,212,0,0.4)]"
                      : "bg-white/[0.04] text-neutral-300 hover:text-white border border-white/15 hover:border-white/35 hover:bg-white/[0.08]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Bento Grid */}
          {filteredServices.length === 0 ? (
            <div className="text-center py-20 rounded-3xl bg-white/[0.02] border border-white/10">
              <p className="text-neutral-400 text-sm font-mono mb-4">
                No services found matching &ldquo;{searchQuery || activeCategory}&rdquo;
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="px-5 py-2 rounded-full bg-[#FFD400] text-black font-mono text-xs uppercase font-bold hover:bg-[#ffe34d] transition-all cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {filteredServices.map((service: ServiceDetail) => {
                const isTall = !!service.tall;

                return (
                  <div
                    key={service.id}
                    className={`group relative rounded-3xl overflow-hidden bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/60 transition-all duration-500 shadow-2xl flex flex-col justify-between ${
                      isTall
                        ? "md:row-span-2 min-h-[500px] lg:min-h-[560px]"
                        : "min-h-[360px] lg:min-h-[400px]"
                    }`}
                  >
                    {/* Top-Left Index Tag */}
                    <div className="absolute top-5 left-5 z-20">
                      <span className="font-mono text-xs sm:text-sm text-white/70 tracking-wider px-2 py-0.5 rounded bg-black/50 backdrop-blur-md border border-white/10">
                        {service.index}
                      </span>
                    </div>

                    {/* Top-Right SLA Badge */}
                    <div className="absolute top-5 right-5 z-20">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#FFD400]/30 shadow-md">
                        {service.sla}
                      </span>
                    </div>

                    {/* Background Image & Vignette */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/70 to-black/35 pointer-events-none" />
                    </div>

                    {/* Bottom Content Area */}
                    <div className="relative z-10 mt-auto p-6 sm:p-7 pt-12 flex flex-col justify-end">
                      <div className="flex items-baseline justify-between gap-4 mb-1">
                        <Link href={`/services/${service.id}`}>
                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#FFD400] transition-colors font-[family-name:var(--font-syne)] uppercase">
                            {service.title} {service.highlightText}
                          </h3>
                        </Link>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4 line-clamp-2">
                        {service.tagline}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                        {/* Specs badges */}
                        <div className="flex flex-wrap gap-1.5 max-w-[60%]">
                          {service.specs?.slice(0, 2).map((spec, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.05] text-neutral-300 border border-white/10 truncate"
                            >
                              {spec.split(" ")[0]} {spec.split(" ")[1]}
                            </span>
                          ))}
                        </div>

                        {/* Explore Spec Link */}
                        <Link
                          href={`/services/${service.id}`}
                          className="inline-block"
                        >
                          <div className="group/btn relative inline-flex items-center justify-between rounded-full overflow-hidden bg-[#12141a]/95 hover:bg-[#1a1d26] border border-white/15 hover:border-[#FFD400]/70 text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,212,0,0.28)] transition-all duration-300 hover:scale-[1.025] active:scale-[0.98] cursor-pointer select-none px-3.5 py-1.5 text-xs gap-2.5">
                            <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-full" />
                            <div className="flex items-center space-x-2 relative z-10">
                              <span className="w-2 h-2 rounded-full shrink-0 animate-pulse bg-[#FFD400] shadow-[0_0_8px_#FFD400]" />
                              <span className="font-mono font-bold tracking-[0.18em] uppercase transition-colors whitespace-nowrap text-white group-hover/btn:text-[#FFD400]">
                                EXPLORE SPEC
                              </span>
                            </div>
                            <div className="w-5 h-5 rounded-full bg-white/10 group-hover/btn:bg-[#FFD400] text-[#FFD400] group-hover/btn:text-black flex items-center justify-center transition-all duration-300 shrink-0 ml-1.5 shadow-inner relative z-10">
                              <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:rotate-12 transition-transform duration-300" />
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
        </section>

        {/* =========================================================================
            SECTION 2.9: FREQUENTLY ASKED QUESTIONS (FAQS)
            Common service questions
            ========================================================================= */}
        <ServiceFaqSection />

        {/* =========================================================================
            SECTION 2.10: CONVERSION CTA
            Request a quotation or consultation
            ========================================================================= */}
        <ServiceConversionCTA />
      </main>

      {/* Global RnDFooter */}
      <RnDFooter />
    </div>
  );
}
