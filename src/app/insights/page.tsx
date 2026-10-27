"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Sparkles, BookOpen, Calendar, Clock, ArrowUpRight, User, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import CyberButton from "@/components/CyberButton";

interface InsightArticle {
  id: string;
  index: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  tall?: boolean;
  avatarIcon?: string;
  date: string;
  readTime: string;
  author: string;
  tags: string[];
}

const insightsData: InsightArticle[] = [
  {
    id: "spatial-3d-conversion",
    index: "[01]",
    title: "Spatial Web & Three.js: How Real-Time 3D Configurator Drives 3.4x Conversion",
    excerpt:
      "Deep-dive telemetry analysis across 2.4M sessions comparing flat 2D e-commerce layouts against interactive WebGL 3D product viewports with dynamic GLSL illumination.",
    category: "Spatial 3D",
    image: "/images/project_ecommerce.jpg",
    tall: true,
    avatarIcon: "🌐",
    date: "OCT 2026",
    readTime: "7 min read",
    author: "Vikram Mehta, Lead 3D Architect",
    tags: ["Three.js", "WebGL", "Conversion", "E-commerce"],
  },
  {
    id: "production-ai-rag",
    index: "[02]",
    title: "Production AI: Scaling Multi-Tenant RAG Pipelines with Sub-5ms Latency",
    excerpt:
      "Architecting enterprise generative AI architectures: vector indexing strategies, cache warming, and automated fallback inference models for mission-critical operations.",
    category: "AI & RAG",
    image: "/images/project_ai.jpg",
    avatarIcon: "🤖",
    date: "OCT 2026",
    readTime: "9 min read",
    author: "Elena Rostova, Chief AI Scientist",
    tags: ["AI", "RAG", "Vector Search", "Python"],
  },
  {
    id: "nextjs-zero-latency",
    index: "[03]",
    title: "Next.js 15 Partial Prerendering: Achieving Sub-800ms Time-To-Interactive",
    excerpt:
      "Eliminating hydration bottlenecks in complex enterprise web applications through streaming SSR, server actions, and localized edge data caching.",
    category: "Architecture",
    image: "/images/weddev.png",
    tall: true,
    avatarIcon: "⚡",
    date: "OCT 2026",
    readTime: "6 min read",
    author: "Marcus Chen, VP Engineering",
    tags: ["Next.js 15", "Performance", "React 19"],
  },
  {
    id: "core-web-vitals-seo",
    index: "[04]",
    title: "Core Web Vitals Engineering: From 64 to 99 Lighthouse Score in 3 Sprints",
    excerpt:
      "A systematic engineering case study on layout shift eradication, script deferral, image pipeline quantization, and server TTFB minimization.",
    category: "SEO & Growth",
    image: "/images/seoupdate.png",
    avatarIcon: "📈",
    date: "SEP 2026",
    readTime: "5 min read",
    author: "Priya Sharma, Head of Technical SEO",
    tags: ["SEO", "Performance", "Lighthouse"],
  },
  {
    id: "multi-cloud-mesh",
    index: "[05]",
    title: "Zero-Downtime Multi-Region Kubernetes Failover on Bare Metal & AWS",
    excerpt:
      "Designing eBPF network telemetry observability and cross-cloud mTLS routing to survive simultaneous multi-region cloud outages without customer interruption.",
    category: "Architecture",
    image: "/images/nebula_cloud_os_3d.jpg",
    avatarIcon: "☁️",
    date: "SEP 2026",
    readTime: "8 min read",
    author: "David Vance, Principal Cloud Architect",
    tags: ["Cloud", "Kubernetes", "DevOps"],
  },
  {
    id: "social-commerce-virality",
    index: "[06]",
    title: "Algorithmic Virality: Crafting Omni-Channel Funnels in the TikTok Era",
    excerpt:
      "Why static social ad graphics are dead, and how short-form cinematic motion hooks generate sustained organic conversion pipelines for high-ticket brands.",
    category: "SEO & Growth",
    image: "/images/social.png",
    avatarIcon: "🎯",
    date: "AUG 2026",
    readTime: "6 min read",
    author: "Sofia Reynolds, Growth Partner",
    tags: ["Social Media", "Video", "Growth"],
  },
  {
    id: "cinema-8k-branding",
    index: "[07]",
    title: "The Neurobiology of Cinematic Brand Films: Why 8K Visuals Stick",
    excerpt:
      "Cognitive research analyzing consumer recall rates when exposed to high-production cinema-grade brand narratives versus generic templated video ads.",
    category: "Brand & Media",
    image: "/images/showreel_thumb.jpg",
    tall: true,
    avatarIcon: "🎬",
    date: "AUG 2026",
    readTime: "7 min read",
    author: "Julian Thorne, Creative Film Director",
    tags: ["Cinematography", "Branding", "Creative"],
  },
  {
    id: "brand-identity-longevity",
    index: "[08]",
    title: "Designing for Decades: The Mathematics Behind Timeless Brand Identity",
    excerpt:
      "Exploring geometric golden ratios, typography hierarchy, and flexible token systems that preserve brand prestige through rapid technological disruption.",
    category: "Brand & Media",
    image: "/images/contet.png",
    avatarIcon: "🖋️",
    date: "JUL 2026",
    readTime: "5 min read",
    author: "Hannah Cole, Design Systems Lead",
    tags: ["Design Systems", "Typography", "Branding"],
  },
];

const categories = [
  "All",
  "Architecture",
  "AI & RAG",
  "Spatial 3D",
  "SEO & Growth",
  "Brand & Media",
];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return insightsData.filter((item) => {
      const matchesCategory =
        activeCategory === "All" ||
        item.category.toLowerCase() === activeCategory.toLowerCase();

      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

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
            <span>DISPATCHES &amp; INTELLIGENCE // RESEARCH JOURNAL</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-bebas)] tracking-wide uppercase leading-[0.92] text-white">
                TECHNICAL PAPERS &amp;{" "}
                <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.35)]">
                  DISPATCHES
                </span>
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 font-light max-w-2xl mt-4">
                Cutting-edge research on spatial web engineering, enterprise AI scaling, real-time telemetry, and algorithmic growth strategies written by our technical leads.
              </p>
            </div>

            <CyberButton href="/#contact" size="md">
              SUBSCRIBE TO DISPATCHES
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
              placeholder={`Search ${insightsData.length} articles...`}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.07] border border-white/15 focus:border-blue-500 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* ================= BENTO GRID (EXACT IMAGE 2 REPLICATION) ================= */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-24 bg-white/[0.02] rounded-3xl border border-white/10">
            <p className="text-neutral-400 font-mono text-sm mb-4">
              No articles found matching &quot;{searchQuery}&quot; in {activeCategory}.
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
            {filteredArticles.map((art) => {
              const isTall = art.tall;

              return (
                <div
                  key={art.id}
                  className={`group relative rounded-3xl overflow-hidden bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/60 transition-all duration-500 shadow-2xl flex flex-col justify-between ${
                    isTall ? "md:row-span-2 min-h-[520px] lg:min-h-[580px]" : "min-h-[380px] lg:min-h-[430px]"
                  }`}
                >
                  {/* Top Index Corner ([01], [02], etc.) */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className="font-mono text-xs sm:text-sm text-white/60 tracking-wider px-2 py-0.5 rounded bg-black/40 backdrop-blur-md border border-white/10">
                      {art.index}
                    </span>
                  </div>

                  {/* Top Right Read Time Badge */}
                  <div className="absolute top-5 right-5 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#FFD400]">
                    <Clock className="w-3 h-3 text-[#FFD400]" />
                    <span>{art.readTime}</span>
                  </div>

                  {/* Main Article Image with Zoom on Hover */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Multi-Stop Dark Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/60 to-black/30 pointer-events-none" />
                  </div>

                  {/* Floating Center Badge/Avatar (Matching Image 2) */}
                  {art.avatarIcon && (
                    <div className="relative z-10 my-auto flex justify-center items-center pointer-events-none">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-black/70 backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {art.avatarIcon}
                      </div>
                    </div>
                  )}

                  {/* Bottom Information Card Overlay */}
                  <div className="relative z-10 mt-auto p-6 sm:p-7 pt-12 flex flex-col justify-end">
                    <div className="flex items-center gap-3 mb-2 text-xs font-mono text-neutral-400">
                      <span className="text-[#FFD400] font-bold uppercase">{art.category}</span>
                      <span>•</span>
                      <span>{art.date}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-2 group-hover:text-[#FFD400] transition-colors font-[family-name:var(--font-jakarta)]">
                      {art.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4 line-clamp-3">
                      {art.excerpt}
                    </p>

                    {/* Author & Action Button */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                      <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                        <User className="w-3.5 h-3.5 text-[#FFD400]" />
                        <span className="truncate max-w-[150px]">{art.author}</span>
                      </div>

                      <CyberButton href="/#contact" size="sm">
                        READ ARTICLE
                      </CyberButton>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Newsletter Dispatch Banner */}
        <div className="mt-20 sm:mt-24 rounded-3xl bg-gradient-to-r from-[#0c0e14] via-[#141722] to-[#0c0e14] border border-white/15 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>FORTNIGHTLY RESEARCH BRIEFING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
              Stay at the forefront of digital engineering
            </h2>
            <p className="text-sm text-neutral-400 font-light max-w-xl">
              Receive curated technical architectures, spatial 3D benchmarks, and AI deployment reports straight to your inbox every two weeks.
            </p>
          </div>

          <CyberButton href="/#contact" size="lg">
            SUBSCRIBE TO NEWSLETTER
          </CyberButton>
        </div>
      </main>

      {/* Global RnDFooter */}
      <RnDFooter />
    </div>
  );
}
