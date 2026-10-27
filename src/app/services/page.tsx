"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Sparkles, Globe, Cpu, Layers, Palette, Camera, BarChart3, ShieldCheck, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import CyberButton from "@/components/CyberButton";
import PageBanner from "@/components/PageBanner";

import { servicesData } from "@/data/servicesData";


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

      {/* Attractive Hero Page Banner with Dark UI, Title & Breadcrumbs */}
      <PageBanner
        theme="dark"
        title="ENGINEERED SERVICES &"
        highlightText="SOLUTIONS"
        subtitle="End-to-end digital engineering disciplines spanning modern web applications, mobile apps, technical SEO dominance, performance marketing, brand design, and commercial 8K cinema."
        badge="FULL CAPABILITIES // INTEGRATED SERVICE ECOSYSTEM"
        breadcrumbs={[{ label: "Services" }]}
        bgImage="/images/agency_team_studio.jpg"
        ctaText="BOOK ARCHITECT REVIEW"
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
              placeholder={`Search ${servicesData.length} services...`}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.07] border border-white/15 focus:border-blue-500 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* ================= BENTO GRID (DARK UI CARDS) ================= */}
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
                    isTall ? "md:row-span-2 min-h-[520px] lg:min-h-[580px]" : "min-h-[380px] lg:min-h-[420px]"
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
                

                  {/* Bottom Information Card Overlay */}
                  <div className="relative z-10 mt-auto p-6 sm:p-7 pt-12 flex flex-col justify-end">
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <Link href={`/services/${service.id}`}>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#FFD400] transition-colors font-[family-name:var(--font-jakarta)]">
                          {service.title} {service.highlightText}
                        </h3>
                      </Link>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-300 font-light line-clamp-2 mb-4 leading-relaxed">
                      {service.tagline}
                    </p>

                    {/* Tech Badges & Action Button */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                      <div className="flex items-center gap-1.5 overflow-x-auto max-w-[65%] scrollbar-none">
                        {service.specs.slice(0, 2).map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono text-neutral-400 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/10 truncate"
                          >
                            {s.split(" ")[0]} {s.split(" ")[1]}
                          </span>
                        ))}
                      </div>

                      <CyberButton href={`/services/${service.id}`} size="sm">
                        EXPLORE SPEC
                      </CyberButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom SLA & Retainer Banner with Dark Theme */}
        <div className="mt-20 sm:mt-24 rounded-3xl bg-gradient-to-r from-[#0c0e14] via-[#141722] to-[#0c0e14] border border-white/15 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
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

          <div className="relative z-10 shrink-0">
            <CyberButton href="/#contact" size="lg">
              INQUIRE ABOUT RETAINERS
            </CyberButton>
          </div>
        </div>
      </main>

      {/* Global RnDFooter */}
      <RnDFooter />
    </div>
  );
}
