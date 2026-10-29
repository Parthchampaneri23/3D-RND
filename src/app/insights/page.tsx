"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ArrowUpRight,
  Home,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import CyberButton from "@/components/CyberButton";
import PageBanner from "@/components/PageBanner";
import CursorGlow from "@/components/CursorGlow";
import PrintRevealImage from "@/components/PrintRevealImage";
import WaveText from "@/components/WaveText";
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
  const pageRef = useRef<HTMLDivElement>(null);
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

  // GSAP Scroll Animations (Repeats each time on top-to-bottom scroll)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Filter buttons and search bar stagger
      gsap.fromTo(
        ".insight-filter-btn",
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.05,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".insight-filters-bar",
            start: "top 88%",
            toggleActions: "restart none none reset",
          },
        }
      );

      gsap.fromTo(
        ".insight-search-box",
        { opacity: 0, x: 30, filter: "blur(6px)" },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".insight-filters-bar",
            start: "top 88%",
            toggleActions: "restart none none reset",
          },
        }
      );

      // 2. Featured Editorial Card Entrance
      const tlFeatured = gsap.timeline({
        scrollTrigger: {
          trigger: ".featured-editorial-section",
          start: "top 85%",
          toggleActions: "restart none none reset",
        },
      });

      tlFeatured
        .fromTo(
          ".featured-editorial-card",
          { opacity: 0, y: 40, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(
          ".featured-content-item",
          { opacity: 0, y: 25, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            stagger: 0.12,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.5"
        );

      // 3. Main Articles Grid Stagger
      gsap.fromTo(
        ".insight-grid-card",
        { opacity: 0, y: 45, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".insight-grid-section",
            start: "top 85%",
            toggleActions: "restart none none reset",
          },
        }
      );

      // 4. Newsletter Research Briefing Card Entrance
      const tlBriefing = gsap.timeline({
        scrollTrigger: {
          trigger: ".research-briefing-section",
          start: "top 88%",
          toggleActions: "restart none none reset",
        },
      });

      tlBriefing
        .fromTo(
          ".research-briefing-card",
          { opacity: 0, y: 40, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
        )
        .fromTo(
          ".briefing-anim-item",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
    }, pageRef);

    return () => ctx.revert();
  }, [filteredArticles]);

  return (
    <div
      ref={pageRef}
      className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black font-sans"
    >
      {/* Interactive Cursor Glow */}
      <CursorGlow />

      {/* Background Galactic Starfield */}
      <SpaceBackground />

      {/* Global Navbar */}
      <Navbar />

      {/* Page Banner with Typewriter Title */}
      <PageBanner
        title="ENGINEERING INSIGHTS"
        breadcrumb="INSIGHTS"
      />

      <main className="relative z-20 w-full -mt-10 sm:-mt-14 md:-mt-18 rounded-t-[32px] sm:rounded-t-[44px] bg-[#050608] border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)]">

        {/* =========================================================================
            2. FILTER & SEARCH BAR SECTION (Matching Reference Page with + Suffix)
            ========================================================================= */}
        <section className="insight-filters-bar max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-6 border-b border-white/10">
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
                    className={`insight-filter-btn px-4 py-2 text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer rounded-none border ${
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
            <div className="insight-search-box relative w-full sm:w-80 shrink-0">
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
            3. FEATURED EDITORIAL SPOTLIGHT (With Right-to-Left Printer Reveal)
            ========================================================================= */}
        {featuredArticle && (
          <section className="featured-editorial-section max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-6">
            <div className="featured-editorial-card p-8 md:p-12 bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/40 transition-colors shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch group">
              {/* Left Column (7 cols): Printer Print Reveal Right-to-Left */}
              <div className="lg:col-span-7 relative w-full h-[280px] sm:h-[360px] lg:h-auto min-h-full flex flex-col justify-stretch self-stretch overflow-hidden">
                <Link href={`/insights/${featuredArticle.id}`} className="block w-full h-full min-h-full">
                  <PrintRevealImage
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    priority
                    badge="Featured Editorial"
                    aspectClass="w-full h-full min-h-full"
                    direction="left"
                  />
                </Link>
              </div>

              {/* Right Column (5 cols): Metadata, Title, Excerpt, Author */}
              <div className="lg:col-span-5 space-y-5">
                <div className="featured-content-item flex items-center space-x-3 text-xs font-mono uppercase tracking-wider text-neutral-400">
                  <span className="text-[#FFD400] font-semibold">
                    {featuredArticle.category}
                  </span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>

                <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-[#FFD400] transition-colors leading-snug font-bold uppercase">
                  <Link href={`/insights/${featuredArticle.id}`} className="block">
                    <WaveText text={featuredArticle.title} />
                  </Link>
                </h2>

                <p className="featured-content-item text-xs sm:text-sm text-neutral-300 font-light leading-relaxed line-clamp-3">
                  {featuredArticle.tagline}
                </p>

                {/* Author Info & Read Article Link */}
                <div className="featured-content-item pt-4 border-t border-white/10 flex items-center justify-between">
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
            4. MAIN ARTICLES 3-COLUMN GRID (With Right-to-Left Printer Reveal)
            ========================================================================= */}
        <section className="insight-grid-section max-w-7xl mx-auto px-6 md:px-12 py-12">
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
                className="px-5 py-2 bg-[#FFD400] text-black text-xs font-mono uppercase tracking-wider font-bold cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {gridArticles.map((art, idx) => (
                <article
                  key={art.id}
                  className="insight-grid-card group flex flex-col justify-between bg-[#0c0e14] border border-white/10 p-6 sm:p-7 shadow-lg hover:shadow-[0_0_30px_rgba(255,212,0,0.12)] hover:border-[#FFD400]/50 transition-all duration-500"
                >
                  <div>
                    {/* Top Aspect-[16/10] Image with Multi-Directional Glide & Settle Animation */}
                    <Link
                      href={`/insights/${art.id}`}
                      className="block mb-6 shadow-sm overflow-hidden"
                    >
                      <PrintRevealImage
                        src={art.image}
                        alt={art.title}
                        badge={art.category}
                        aspectClass="aspect-[16/10]"
                        index={idx}
                      />
                    </Link>

                    {/* Meta Line: Date • Read Time */}
                    <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2 flex items-center space-x-3">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>

                    {/* Title Heading with Smooth Wave Animation */}
                    <h3 className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl text-white font-bold group-hover:text-[#FFD400] transition-colors leading-snug uppercase">
                      <Link href={`/insights/${art.id}`}>
                        <WaveText text={art.title} />
                      </Link>
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
        <section className="research-briefing-section max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="research-briefing-card rounded-3xl bg-gradient-to-r from-[#0c0e14] via-[#141724] to-[#0c0e14] border border-white/15 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="briefing-anim-item inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>FORTNIGHTLY RESEARCH BRIEFING</span>
              </div>
              <h2 className="briefing-anim-item text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase tracking-tight mb-2">
                Stay at the Forefront of Digital Engineering
              </h2>
              <p className="briefing-anim-item text-xs sm:text-sm text-neutral-300 font-light max-w-xl leading-relaxed">
                Receive curated technical architectures, spatial 3D benchmarks, and performance engineering reports straight to your inbox every two weeks.
              </p>
            </div>

            <div className="briefing-anim-item relative z-10 shrink-0">
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
