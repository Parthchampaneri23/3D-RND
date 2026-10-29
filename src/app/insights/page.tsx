"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ArrowUpRight,
  Home,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import CyberButton from "@/components/CyberButton";
import { blogsData, BlogDetail } from "@/data/blogsData";

const categories = [
  "All",
  "Spatial 3D & E-Commerce",
  "Mobile Engineering",
  "Cloud & Web Architecture",
  "Technical SEO & Growth",
  "Agile Architecture",
  "Brand & Media",
];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return blogsData.filter((item) => {
      const matchesCategory =
        activeCategory === "All" ||
        item.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        activeCategory.toLowerCase().includes(item.category.toLowerCase());

      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Featured article is the first matching article or spatial-3d-conversion
  const featuredArticle = filteredArticles[0] || blogsData[0];
  const gridArticles = filteredArticles.slice(1);

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black font-sans">
      {/* Background Galactic Starfield */}
      <SpaceBackground />

      {/* Global Navbar */}
      <Navbar />

      <main className="relative z-10 w-full pt-16">
        {/* =========================================================================
            1. HERO BANNER SECTION (Matching Reference Blogs Architectural Design)
            ========================================================================= */}
        <section className="relative w-full h-[340px] sm:h-[400px] md:h-[460px] lg:h-[500px] flex items-center justify-center overflow-hidden bg-[#06070a]">
          {/* Hero Cover Image with Smooth Dark Gradient Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/service_marketing.jpg"
              alt="RnD Technosoft Research & Engineering Insights"
              fill
              priority
              className="object-cover object-center scale-105 transition-transform duration-1000 ease-out brightness-90"
            />
            {/* Multi-stop dark gradient for high contrast & seamless blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/75 to-[#050608]/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/80 via-transparent to-[#050608]" />
            <div className="absolute inset-0 bg-black/35 backdrop-blur-[0.5px]" />
          </div>

          {/* Subtle Vertical Architectural Grid Lines Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="max-w-[1560px] h-full mx-auto px-6 sm:px-10 lg:px-14 flex justify-between">
              <div className="w-[1px] h-full bg-white/40" />
              <div className="w-[1px] h-full bg-white/20 hidden md:block" />
              <div className="w-[1px] h-full bg-white/40" />
            </div>
          </div>

          {/* Central Hero Content */}
          <div className="relative z-10 max-w-[1560px] w-full mx-auto px-6 sm:px-10 lg:px-14 text-center flex flex-col items-center pt-16 sm:pt-20">
            {/* Breadcrumb Navigation Pill */}
            <nav
              aria-label="Breadcrumb"
              className="inline-flex items-center space-x-2 sm:space-x-2.5 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 mb-4 sm:mb-6 shadow-lg"
            >
              <div className="inline-flex items-center space-x-1.5 sm:space-x-2">
                <Home className="w-3.5 h-3.5 text-[#FFD400]" />
                <Link
                  href="/"
                  className="text-[11px] sm:text-xs uppercase tracking-[0.16em] font-medium text-white/80 hover:text-[#FFD400] transition-colors"
                >
                  Home
                </Link>
                <ChevronRight className="w-3 h-3 text-white/40 shrink-0" />
              </div>

              <div className="inline-flex items-center space-x-1.5 sm:space-x-2">
                <span
                  className="text-[11px] sm:text-xs uppercase tracking-[0.16em] font-bold text-[#FFD400]"
                  aria-current="page"
                >
                  Insights
                </span>
              </div>
            </nav>

            {/* Sculptural Headline */}
            <h1 className="font-[family-name:var(--font-syne)] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-5xl uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
              Digital Engineering <span className="text-[#FFD400]">Insights</span>
            </h1>

            {/* Subtitle Description */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-300 font-light max-w-2xl tracking-wide leading-relaxed">
              Curated technical essays, spatial 3D benchmarks, architectural frameworks, and telemetry analysis from RnD Technosoft engineering leads.
            </p>

            {/* Signature Brand Divider (Line — Dot — Line) */}
            <div className="mt-6 sm:mt-8 flex items-center space-x-3">
              <span className="w-12 h-[1.5px] bg-[#FFD400]/70" />
              <span className="w-2 h-2 rounded-full bg-[#FFD400] shadow-[0_0_10px_#FFD400]" />
              <span className="w-12 h-[1.5px] bg-[#FFD400]/70" />
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. FILTER & SEARCH BAR SECTION (Matching Reference Page with + Suffix)
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-6 border-b border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {/* Category Filter Buttons with '+' suffix */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer rounded-none border ${
                      isSelected
                        ? "bg-[#FFD400] text-black border-[#FFD400] font-bold shadow-[0_0_20px_rgba(255,212,0,0.3)]"
                        : "bg-[#0c0e14] text-neutral-300 border-white/10 hover:border-[#FFD400] hover:text-[#FFD400]"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className="ml-1 opacity-75">+</span>
                  </button>
                );
              })}
            </div>

            {/* Search Box on Right */}
            <div className="relative w-full sm:w-80 shrink-0">
              <Search className="w-4 h-4 text-[#FFD400] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search engineering insights & essays..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#0c0e14] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. FEATURED EDITORIAL SPOTLIGHT (Matching Reference 7/5 Column Card)
            ========================================================================= */}
        {featuredArticle && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-6">
            <div className="p-8 md:p-12 bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/40 transition-colors shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group">
              {/* Left Column (7 cols): Large Featured Visual with Zoom on Hover */}
              <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-black shadow-md border border-white/10">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Top-Left Featured Badge */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-[#FFD400] font-bold border border-[#FFD400]/30 shadow-md">
                  Featured Editorial
                </div>
              </div>

              {/* Right Column (5 cols): Metadata, Title, Excerpt, Author */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-wider text-neutral-400">
                  <span className="text-[#FFD400] font-semibold">
                    {featuredArticle.category}
                  </span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-[#FFD400] transition-colors leading-snug font-bold uppercase">
                  <Link href={`/insights/${featuredArticle.id}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed line-clamp-3">
                  {featuredArticle.tagline}
                </p>

                {/* Author Info & Read Article Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden bg-white/10 border border-[#FFD400]/40 shrink-0">
                      <Image
                        src={featuredArticle.authorAvatar}
                        alt={featuredArticle.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-white">
                        {featuredArticle.author}
                      </p>
                      <p className="text-[10px] text-neutral-400 font-mono">
                        {featuredArticle.authorRole}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/insights/${featuredArticle.id}`}
                    className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-mono uppercase tracking-widest text-[#FFD400] hover:text-white font-bold group/btn"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            4. MAIN ARTICLES 3-COLUMN GRID (Matching Reference Articles Structure)
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          {gridArticles.length === 0 ? (
            <div className="text-center py-20 bg-[#0c0e14] border border-white/10 p-8 space-y-4">
              <p className="text-sm font-mono text-neutral-400">
                No additional articles found matching &quot;{searchQuery}&quot; in {activeCategory}.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="px-5 py-2 bg-[#FFD400] text-black text-xs font-mono uppercase tracking-wider font-bold"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {gridArticles.map((art) => (
                <article
                  key={art.id}
                  className="group flex flex-col justify-between bg-[#0c0e14] border border-white/10 p-6 sm:p-7 shadow-lg hover:shadow-[0_0_30px_rgba(255,212,0,0.12)] hover:border-[#FFD400]/50 transition-all duration-500"
                >
                  <div>
                    {/* Top Aspect-[16/10] Image with Zoom on Hover */}
                    <Link
                      href={`/insights/${art.id}`}
                      className="block relative aspect-[16/10] overflow-hidden bg-black mb-6 shadow-sm border border-white/10"
                    >
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                      {/* Top-Left Category Badge */}
                      <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-[#FFD400] font-semibold border border-white/10">
                        {art.category}
                      </div>
                    </Link>

                    {/* Meta Line: Date • Read Time */}
                    <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2 flex items-center space-x-3">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>

                    {/* Title Heading */}
                    <h3 className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl text-white font-bold group-hover:text-[#FFD400] transition-colors leading-snug uppercase">
                      <Link href={`/insights/${art.id}`}>{art.title}</Link>
                    </h3>

                    {/* Excerpt Description */}
                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mt-3 line-clamp-3">
                      {art.tagline}
                    </p>
                  </div>

                  {/* Card Footer: Author Avatar + Name + Read Article Link */}
                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="relative w-7 h-7 rounded-full overflow-hidden bg-white/10 border border-[#FFD400]/40 shrink-0">
                        <Image
                          src={art.authorAvatar}
                          alt={art.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-white truncate max-w-[130px]">
                          {art.author}
                        </p>
                        <p className="text-[9px] text-neutral-400 font-mono truncate max-w-[130px]">
                          {art.authorRole}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/insights/${art.id}`}
                      className="inline-flex items-center space-x-1 text-xs font-mono uppercase tracking-widest text-[#FFD400] group-hover:text-white font-bold transition-colors"
                    >
                      <span>Read</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* =========================================================================
            5. FORTNIGHTLY RESEARCH BRIEFING NEWSLETTER BANNER
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="rounded-3xl bg-gradient-to-r from-[#0c0e14] via-[#141724] to-[#0c0e14] border border-white/15 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>FORTNIGHTLY RESEARCH BRIEFING</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase tracking-tight mb-2">
                Stay at the Forefront of Digital Engineering
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl leading-relaxed">
                Receive curated technical architectures, spatial 3D benchmarks, and performance engineering reports straight to your inbox every two weeks.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <CyberButton href="/#contact" size="lg">
                SUBSCRIBE TO BRIEFINGS
              </CyberButton>
            </div>
          </div>
        </section>
      </main>

      {/* Global RnDFooter */}
      <RnDFooter />
    </div>
  );
}
