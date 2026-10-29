"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  ChevronRight,
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Sparkles,
  Volume2,
  VolumeX,
  Compass,
  Layers,
  Lightbulb,
  CheckCircle2,
  ListOrdered,
  Building2,
  User,
  Mail,
  Phone,
  Send,
  Check,
  RotateCcw,
} from "lucide-react";
import Navbar from "./Navbar";
import RnDFooter from "./RnDFooter";
import SpaceBackground from "./SpaceBackground";
import { BlogDetail, TechMatrixItem } from "@/data/blogsData";
import BeforeAfterSection from "./BeforeAfterSection";

interface InsightDetailViewProps {
  article: BlogDetail;
  allArticles: BlogDetail[];
  prevArticle: BlogDetail | null;
  nextArticle: BlogDetail | null;
}

export default function InsightDetailView({
  article,
  allArticles,
  prevArticle,
  nextArticle,
}: InsightDetailViewProps) {
  // Reading scroll progress percentage
  const [scrollProgress, setScrollProgress] = useState(0);

  // Active section for table of contents
  const [activeSection, setActiveSection] = useState("abstract");

  // Audio briefing play/pause simulation
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // Active tech matrix item for interactive notes
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  // Mobile outline modal toggle
  const [isMobileOutlineOpen, setIsMobileOutlineOpen] = useState(false);

  // Inquiry form states
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Full-Stack Web & Cloud",
    scale: "",
  });

  // Track window scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Scroll-spy sections
      const sectionIds = [
        "abstract",
        "hero-visual",
        "narrative",
        "tech-matrix",
        "takeaways",
        "before-after",
        "author",
        "inquiry-form",
      ];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 800);
  };

  const sectionsList = [
    { id: "abstract", number: "01", label: "Editorial Thesis" },
    { id: "hero-visual", number: "02", label: "Visual Architecture" },
    { id: "narrative", number: "03", label: "Spatial Narrative" },
    { id: "tech-matrix", number: "04", label: "Architecture Matrix" },
    { id: "takeaways", number: "05", label: "Engineering Insights" },
    { id: "before-after", number: "06", label: "Transformation Delta" },
    { id: "author", number: "07", label: "Principal Profile" },
    { id: "inquiry-form", number: "08", label: "Consultation Suite" },
  ];

  const activeTech: TechMatrixItem | undefined =
    article.techMatrix?.[activeTechIndex] || article.techMatrix?.[0];

  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  // Drop cap letter from first overview paragraph
  const firstParagraph = article.overview[0] || "";
  const firstLetter = firstParagraph.charAt(0);
  const remainingFirstParagraph = firstParagraph.slice(1);

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black font-sans pb-28">
      {/* Background Galactic Starfield */}
      <SpaceBackground />

      {/* Global Navbar */}
      <Navbar />

      {/* =========================================================================
          0. FIXED TOP READING PROGRESS BAR (Matching Reference Page)
          ========================================================================= */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#FFD400] via-[#ffe34d] to-[#FFD400] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(255,212,0,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <main className="relative z-10 w-full pt-16">
        {/* =========================================================================
            1. HERO HEADER BANNER (Matching Reference Page)
            ========================================================================= */}
        <section className="relative w-full h-[340px] sm:h-[400px] md:h-[460px] lg:h-[500px] flex items-center justify-center overflow-hidden bg-[#06070a]">
          <div className="absolute inset-0 z-0">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover object-center scale-105 transition-transform duration-1000 ease-out brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/75 to-[#050608]/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/80 via-transparent to-[#050608]" />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]" />
          </div>

          {/* Architectural Grid Lines */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="max-w-[1560px] h-full mx-auto px-6 sm:px-10 lg:px-14 flex justify-between">
              <div className="w-[1px] h-full bg-white/40" />
              <div className="w-[1px] h-full bg-white/20 hidden md:block" />
              <div className="w-[1px] h-full bg-white/40" />
            </div>
          </div>

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
                <Link
                  href="/insights"
                  className="text-[11px] sm:text-xs uppercase tracking-[0.16em] font-medium text-white/80 hover:text-[#FFD400] transition-colors"
                >
                  Insights
                </Link>
                <ChevronRight className="w-3 h-3 text-white/40 shrink-0" />
              </div>

              <div className="inline-flex items-center space-x-1.5 sm:space-x-2">
                <span
                  className="text-[11px] sm:text-xs uppercase tracking-[0.16em] font-bold text-[#FFD400] truncate max-w-[200px] sm:max-w-[340px]"
                  aria-current="page"
                >
                  {article.title}
                </span>
              </div>
            </nav>

            {/* Grand Sculptural Title */}
            <h1 className="font-[family-name:var(--font-syne)] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] max-w-4xl uppercase drop-shadow-[0_4px_30px_rgba(0,0,0,0.85)]">
              {article.title}
            </h1>

            {/* Subtitle Metadata */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-300 font-light max-w-2xl tracking-wide">
              {article.category} • Published {article.date} • {article.readTime}
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
            2. SUB-HEADER BAR (Archive Navigation & Mobile Outline Trigger)
            ========================================================================= */}
        <div className="max-w-[1560px] mx-auto px-5 md:px-8 lg:px-12 pt-7 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
            <Link
              href="/insights"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-[#FFD400] transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#FFD400]" />
              <span>Studio Insights Archive</span>
            </Link>

            {/* Mobile Outline Modal Trigger */}
            <div className="lg:hidden flex items-center text-xs font-mono">
              <button
                type="button"
                onClick={() => setIsMobileOutlineOpen(!isMobileOutlineOpen)}
                className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#0c0e14] border border-white/15 text-white shadow-sm hover:border-[#FFD400] cursor-pointer"
              >
                <ListOrdered className="w-3.5 h-3.5 text-[#FFD400]" />
                <span>Article Outline</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Outline Drawer Modal */}
        {isMobileOutlineOpen && (
          <div className="lg:hidden max-w-[1560px] mx-auto px-5 mb-6">
            <div className="p-5 bg-[#0c0e14] border border-[#FFD400]/40 rounded-xl space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FFD400] font-bold">
                  Table of Contents
                </span>
                <button
                  type="button"
                  onClick={() => setIsMobileOutlineOpen(false)}
                  className="text-xs font-mono text-neutral-400 hover:text-white"
                >
                  ✕ Close
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {sectionsList.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={() => setIsMobileOutlineOpen(false)}
                    className="p-2 rounded bg-white/[0.03] text-neutral-300 hover:text-[#FFD400] hover:bg-white/[0.08]"
                  >
                    <span className="text-[#FFD400] mr-1.5">{sec.number}</span>
                    <span>{sec.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            3. MAIN 3-COLUMN CONTENT GRID (Left TOC / Center Article / Right CTA)
            ========================================================================= */}
        <section className="max-w-[1560px] mx-auto px-5 md:px-8 lg:px-12 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start">
            
            {/* -------------------------------------------------------------------
                LEFT COLUMN (3 COLS): READING PROGRESS & INTERACTIVE OUTLINE
                ------------------------------------------------------------------- */}
            <aside className="hidden lg:block lg:col-span-3 space-y-6 sticky top-24 self-start">
              {/* Reading Progress Card */}
              <div className="p-4 bg-[#0c0e14] border border-white/10 shadow-lg space-y-2.5">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  <span className="flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FFD400]" />
                    <span>Reading Progress</span>
                  </span>
                  <span className="text-[#FFD400] font-bold">
                    {Math.round(scrollProgress)}%
                  </span>
                </div>

                <div className="w-full h-1.5 bg-white/10 overflow-hidden rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-[#FFD400] to-[#ffe34d] transition-all duration-150"
                    style={{ width: `${scrollProgress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-1 border-t border-white/5">
                  <span className="truncate max-w-[140px]">
                    {article.category}
                  </span>
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Table of Contents / Article Outline */}
              <div className="p-6 bg-[#0c0e14] border border-white/10 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                  <span className="flex items-center space-x-2.5 text-xs font-mono uppercase tracking-[0.22em] text-[#FFD400] font-bold">
                    <ListOrdered className="w-4 h-4 text-[#FFD400]" />
                    <span>Article Outline</span>
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 bg-white/[0.05] text-neutral-400 border border-white/10 font-medium">
                    {sectionsList.length} Sections
                  </span>
                </div>

                <nav className="space-y-1.5">
                  {sectionsList.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className={`group flex items-center justify-between py-2.5 px-3 text-xs sm:text-sm transition-all border-l-[3px] rounded-r-sm ${
                          isActive
                            ? "border-[#FFD400] bg-white/[0.06] text-white font-semibold"
                            : "border-transparent text-neutral-400 hover:text-white hover:border-[#FFD400]/50 hover:bg-white/[0.03]"
                        }`}
                      >
                        <span className="flex items-center space-x-3 truncate">
                          <span
                            className={`font-mono text-xs font-bold transition-colors ${
                              isActive
                                ? "text-[#FFD400]"
                                : "text-neutral-500 group-hover:text-[#FFD400]"
                            }`}
                          >
                            {sec.number}
                          </span>
                          <span className="truncate text-xs sm:text-sm font-normal tracking-wide">
                            {sec.label}
                          </span>
                        </span>
                        <ChevronRight
                          className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                            isActive
                              ? "text-[#FFD400] translate-x-0.5"
                              : "text-transparent group-hover:text-[#FFD400]/50"
                          }`}
                        />
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* -------------------------------------------------------------------
                CENTER COLUMN (6 COLS): DEEP TECHNICAL ARTICLE CONTENT
                ------------------------------------------------------------------- */}
            <article className="lg:col-span-5 xl:col-span-6 space-y-10">
              
              {/* Audio Briefing Player */}
              <div className="p-4 bg-[#0c0e14] border border-white/10 shadow-lg flex items-center justify-between gap-4">
                <div className="flex items-center space-x-3 min-w-0">
                  <button
                    type="button"
                    onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all bg-[#FFD400] text-black hover:bg-[#ffe34d] shadow-[0_0_15px_rgba(255,212,0,0.4)] cursor-pointer"
                    title={isPlayingAudio ? "Pause Audio Summary" : "Play Audio Summary"}
                  >
                    {isPlayingAudio ? (
                      <VolumeX className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Volume2 className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </button>

                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-white font-semibold truncate">
                      Engineering Audio Briefing
                    </p>
                    <p className="text-[10px] font-mono text-neutral-400">
                      Narrated by RnD Engineering Lab • {article.audioDuration || "4 min"}
                    </p>
                  </div>
                </div>

                {/* Animated Audio Equalizer Waveform Bars */}
                <div className="hidden sm:flex items-center space-x-1 h-5">
                  {[40, 75, 55, 90, 60, 85, 45, 70].map((h, bIdx) => (
                    <div
                      key={bIdx}
                      className={`w-1 rounded-full transition-all duration-300 ${
                        isPlayingAudio
                          ? "bg-[#FFD400] animate-pulse"
                          : "bg-white/20"
                      }`}
                      style={{
                        height: isPlayingAudio ? `${h}%` : "30%",
                        animationDelay: `${bIdx * 120}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* SECTION 01: EDITORIAL THESIS / ABSTRACT */}
              <div id="abstract" className="space-y-4 scroll-mt-36">
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Editorial Thesis // {article.category}</span>
                </div>

                <blockquote className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl lg:text-3xl text-white font-light leading-relaxed italic border-l-2 border-[#FFD400] pl-6 sm:pl-8 py-3 bg-[#0c0e14] shadow-md">
                  &ldquo;{article.quote.text}&rdquo;
                </blockquote>
              </div>

              {/* Author Meta Header Card */}
              <div className="flex items-center justify-between p-4 bg-[#0c0e14] border border-white/10 shadow-lg">
                <div className="flex items-center space-x-3.5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-[#FFD400]/40 shrink-0">
                    <Image
                      src={article.authorAvatar}
                      alt={article.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-white flex items-center space-x-2">
                      <span>{article.author}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 bg-[#FFD400]/15 text-[#FFD400] font-normal border border-[#FFD400]/30 rounded">
                        Verified Lead
                      </span>
                    </h3>
                    <p className="text-[11px] text-neutral-400 font-mono">
                      {article.authorRole}
                    </p>
                  </div>
                </div>

                <div className="text-right text-xs font-mono text-neutral-400 hidden sm:block">
                  <p>{article.date}</p>
                  <p className="text-[#FFD400] font-semibold">{article.readTime}</p>
                </div>
              </div>

              {/* SECTION 02: HERO VISUAL ARCHIVE */}
              <div
                id="hero-visual"
                className="relative aspect-[16/10] overflow-hidden bg-black border border-white/10 shadow-2xl group scroll-mt-36"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Bottom Telemetry Bar */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-[11px] font-mono uppercase tracking-wider backdrop-blur-md bg-black/60 px-4 py-2.5 border border-white/15">
                  <span className="truncate flex items-center space-x-2">
                    <Compass className="w-3.5 h-3.5 text-[#FFD400]" />
                    <span className="truncate">{article.title}</span>
                  </span>
                  <span className="text-[#FFD400] font-bold shrink-0 ml-3">
                    RnD Archive
                  </span>
                </div>
              </div>

              {/* SECTION 03: SPATIAL NARRATIVE & DEEP DIVE WITH DROP CAP */}
              <div
                id="narrative"
                className="space-y-6 text-neutral-300 font-light leading-relaxed scroll-mt-36 text-base sm:text-lg"
              >
                <p className="leading-relaxed">
                  <span className="float-left text-5xl sm:text-6xl font-[family-name:var(--font-syne)] text-[#FFD400] leading-none pr-3 pt-1 font-bold">
                    {firstLetter}
                  </span>
                  {remainingFirstParagraph}
                </p>

                {article.overview.slice(1).map((para, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* SECTION 04: INTERACTIVE ARCHITECTURE & TECH MATRIX (Matching Materiality Matrix) */}
              <div
                id="tech-matrix"
                className="p-6 sm:p-7 bg-[#0c0e14] border border-white/10 shadow-lg space-y-4 scroll-mt-36"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#FFD400] font-semibold flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-[#FFD400]" />
                    <span>Tactile Architecture &amp; Tech Matrix</span>
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    Click card for architectural telemetry
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {article.techMatrix.map((item, mIdx) => {
                    const isSelected = activeTechIndex === mIdx;
                    return (
                      <button
                        key={mIdx}
                        type="button"
                        onClick={() => setActiveTechIndex(mIdx)}
                        className={`p-3 text-left border transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#FFD400] bg-white/[0.08] shadow-[0_0_15px_rgba(255,212,0,0.2)]"
                            : "border-white/10 bg-white/[0.02] hover:border-[#FFD400]/50"
                        }`}
                      >
                        <div
                          className="w-full h-10 mb-2 border border-white/10 flex items-center justify-center text-xs font-mono font-bold"
                          style={{
                            backgroundColor: `${item.color}20`,
                            color: item.color,
                          }}
                        >
                          {item.badge || item.category}
                        </div>
                        <p className="font-[family-name:var(--font-syne)] text-xs sm:text-sm text-white font-bold leading-tight line-clamp-1 uppercase">
                          {item.name}
                        </p>
                        <p className="text-[10px] font-mono text-neutral-400 mt-0.5 truncate">
                          {item.category}
                        </p>
                      </button>
                    );
                  })}
                </div>

                {/* Active Swatch / Tech Note Readout */}
                {activeTech && (
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-[#FFD400]/30 text-xs text-neutral-300 font-mono space-y-1">
                    <div className="flex items-center justify-between text-[#FFD400] font-bold">
                      <span>{activeTech.name}</span>
                      <span>{activeTech.badge || activeTech.category}</span>
                    </div>
                    <p className="text-neutral-300 font-light text-xs">
                      {activeTech.desc}
                    </p>
                  </div>
                )}
              </div>

              {/* SECTION 05: ENGINEERING TAKEAWAYS & CHECKLIST */}
              <div
                id="takeaways"
                className="p-6 sm:p-8 bg-[#0c0e14] border border-white/10 shadow-lg space-y-4 scroll-mt-36"
              >
                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#FFD400] font-semibold">
                  <Lightbulb className="w-4 h-4 text-[#FFD400]" />
                  <span>Engineering Takeaways &amp; Spatial Insights:</span>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-300">
                  {article.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-[#FFD400] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* SECTION 06: BEFORE & AFTER TRANSFORMATION SHOWCASE */}
              <div id="before-after" className="scroll-mt-36">
                <BeforeAfterSection
                  data={article.beforeAfter}
                  category={article.category}
                  title={article.title}
                />
              </div>

              {/* SECTION 07: PRINCIPAL PROFILE / AUTHOR CARD */}
              <div
                id="author"
                className="p-7 bg-[#0c0e14] border border-white/10 shadow-lg flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left scroll-mt-36"
              >
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white/10 shrink-0 border border-[#FFD400]/40">
                  <Image
                    src={article.authorAvatar}
                    alt={article.author}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-[family-name:var(--font-syne)] text-lg sm:text-xl text-white font-bold uppercase">
                      {article.author}
                    </h4>
                    <span className="text-[11px] font-mono text-[#FFD400] uppercase font-semibold">
                      {article.authorRole}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    Leading research into spatial WebGL viewports, hardware-accelerated 3D rendering pipelines, and high-concurrency cloud systems at RnD Technosoft.
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/about-us"
                      className="inline-flex items-center space-x-1 text-xs font-mono uppercase tracking-widest text-[#FFD400] hover:text-white font-semibold transition-colors"
                    >
                      <span>View Atelier Profile &amp; Leadership</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* PREV / NEXT ARTICLE NAVIGATION CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                {prevArticle ? (
                  <Link
                    href={`/insights/${prevArticle.id}`}
                    className="p-5 bg-[#0c0e14] border border-white/10 hover:border-[#FFD400] transition-colors group shadow-sm flex flex-col justify-between"
                  >
                    <span className="text-xs font-mono uppercase text-neutral-400 group-hover:text-[#FFD400] flex items-center space-x-1">
                      <span>← Previous Article</span>
                    </span>
                    <p className="font-[family-name:var(--font-syne)] text-sm sm:text-base text-white group-hover:text-[#FFD400] transition-colors mt-2 line-clamp-2 uppercase font-semibold">
                      {prevArticle.title}
                    </p>
                  </Link>
                ) : (
                  <div className="p-5 bg-white/[0.02] border border-dashed border-white/10 text-neutral-500 text-xs font-mono flex items-center">
                    <span>First monograph in archive</span>
                  </div>
                )}

                {nextArticle ? (
                  <Link
                    href={`/insights/${nextArticle.id}`}
                    className="p-5 bg-[#0c0e14] border border-white/10 hover:border-[#FFD400] transition-colors group shadow-sm flex flex-col justify-between text-right"
                  >
                    <span className="text-xs font-mono uppercase text-neutral-400 group-hover:text-[#FFD400] flex items-center justify-end space-x-1">
                      <span>Next Article →</span>
                    </span>
                    <p className="font-[family-name:var(--font-syne)] text-sm sm:text-base text-white group-hover:text-[#FFD400] transition-colors mt-2 line-clamp-2 uppercase font-semibold">
                      {nextArticle.title}
                    </p>
                  </Link>
                ) : (
                  <div className="p-5 bg-white/[0.02] border border-dashed border-white/10 text-neutral-500 text-xs font-mono flex items-center justify-end">
                    <span>Final monograph in archive</span>
                  </div>
                )}
              </div>
            </article>

            {/* -------------------------------------------------------------------
                RIGHT COLUMN (3 COLS): STICKY INQUIRY SUITE & CONCIERGE CARD
                ------------------------------------------------------------------- */}
            <aside className="lg:col-span-4 xl:col-span-3 space-y-6 sticky top-24 self-start">
              {/* Private Commission Inquiry Form */}
              <div
                id="inquiry-form"
                className="bg-[#0c0e14] border border-white/15 shadow-2xl p-5 sm:p-6 relative overflow-hidden scroll-mt-36"
              >
                <div className="space-y-1 pb-4 border-b border-white/10 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center space-x-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Private Commission</span>
                  </span>
                  <h3 className="font-[family-name:var(--font-syne)] text-lg sm:text-xl text-white font-bold uppercase leading-tight">
                    Discuss Your Architecture
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed font-light">
                    Connect with our principal software architects and engineering leads for confidential scoping.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#FFD400] text-black mx-auto flex items-center justify-center shadow-[0_0_20px_rgba(255,212,0,0.5)]">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <h4 className="text-lg font-[family-name:var(--font-syne)] font-bold text-white uppercase">
                      Transmission Confirmed
                    </h4>
                    <p className="text-xs text-neutral-300 max-w-xs mx-auto leading-relaxed">
                      Thank you. Your project brief has been encrypted and routed directly to our Principal Architecture Squad. We respond within 4 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="mt-3 px-4 py-1.5 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-3.5 h-3.5 text-[#FFD400] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Vikram Sharma"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full pl-8 pr-3 py-2 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-3.5 h-3.5 text-[#FFD400] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="vikram@enterprise.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full pl-8 pr-3 py-2 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                        Phone / WhatsApp
                      </label>
                      <div className="relative">
                        <Phone className="w-3.5 h-3.5 text-[#FFD400] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          placeholder="+91 98200 12345"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full pl-8 pr-3 py-2 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                        Service Typology
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            serviceType: e.target.value,
                          })
                        }
                        className="w-full px-2.5 py-2 text-xs font-mono bg-[#0c0e14] border border-white/15 text-white focus:outline-none focus:border-[#FFD400] transition-colors"
                      >
                        <option value="Full-Stack Web & Cloud">
                          Full-Stack Web &amp; Cloud (Next.js 15)
                        </option>
                        <option value="Spatial 3D & WebGL">
                          Spatial 3D &amp; WebGL Showroom
                        </option>
                        <option value="Mobile Engineering">
                          Cross-Platform Mobile (React Native)
                        </option>
                        <option value="Technical SEO & Growth">
                          Technical SEO &amp; Growth Engine
                        </option>
                        <option value="Dedicated Engineering Pod">
                          Dedicated Engineering Pod (Turnkey)
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
                        Technical Scope &amp; Target Milestones
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Share your technical goals, stack requirements, and launch timeline..."
                        value={formData.scale}
                        onChange={(e) =>
                          setFormData({ ...formData, scale: e.target.value })
                        }
                        className="w-full p-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full py-3 bg-[#FFD400] hover:bg-[#ffe34d] text-black text-[11px] font-mono uppercase tracking-[0.2em] font-bold transition-all shadow-[0_0_20px_rgba(255,212,0,0.3)] flex items-center justify-center space-x-2 group cursor-pointer disabled:opacity-60"
                    >
                      {formLoading ? (
                        <span>Encrypting Brief...</span>
                      ) : (
                        <>
                          <span>Transmit Brief</span>
                          <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-neutral-400 text-center font-mono">
                      Strict bilateral NDA confidentiality assured.
                    </p>
                  </form>
                )}
              </div>

              {/* Direct Technical Concierge Card */}
              <div className="p-4 bg-[#0c0e14] border border-white/10 shadow-lg space-y-2 text-xs font-mono">
                <span className="text-[10px] uppercase tracking-widest text-[#FFD400] font-semibold block">
                  Direct Atelier Concierge:
                </span>
                <div className="space-y-1 text-neutral-300">
                  <p>
                    <strong className="text-white">Inquiry:</strong>{" "}
                    private@rndtechnosoft.com
                  </p>
                  <p>
                    <strong className="text-white">Studio:</strong> +91 22 2490
                    8800
                  </p>
                  <p>
                    <strong className="text-white">HQ:</strong> Mumbai &amp;
                    Global Cloud Nodes
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* =========================================================================
            4. BOTTOM CURATED PERSPECTIVES (Related Articles Grid)
            ========================================================================= */}
        <section className="max-w-[1560px] mx-auto px-5 md:px-8 lg:px-12 pt-16 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Curated Perspectives</span>
              </span>
              <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl lg:text-4xl text-white font-bold uppercase mt-1">
                Related Engineering Insights
              </h2>
            </div>

            <Link
              href="/insights"
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#FFD400] hover:text-white font-bold shrink-0 transition-colors"
            >
              <span>Explore All Insights</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((rel) => (
              <article
                key={rel.id}
                className="group flex flex-col justify-between bg-[#0c0e14] border border-white/10 p-6 shadow-lg hover:shadow-[0_0_30px_rgba(255,212,0,0.15)] hover:border-[#FFD400]/50 transition-all duration-500"
              >
                <div>
                  <Link
                    href={`/insights/${rel.id}`}
                    className="block relative aspect-[16/10] overflow-hidden bg-black mb-5 shadow-sm border border-white/10"
                  >
                    <Image
                      src={rel.image}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-[#FFD400] font-semibold border border-white/10">
                      {rel.category}
                    </div>
                  </Link>

                  <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2 flex items-center space-x-2">
                    <span>{rel.date}</span>
                    <span>•</span>
                    <span>{rel.readTime}</span>
                  </div>

                  <h3 className="font-[family-name:var(--font-syne)] text-lg sm:text-xl text-white font-bold group-hover:text-[#FFD400] transition-colors leading-snug uppercase">
                    <Link href={`/insights/${rel.id}`}>{rel.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mt-2.5 line-clamp-2">
                    {rel.tagline}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 font-mono">
                    By {rel.author}
                  </span>
                  <Link
                    href={`/insights/${rel.id}`}
                    className="text-xs font-mono uppercase tracking-widest text-[#FFD400] flex items-center space-x-1 group-hover:underline font-bold"
                  >
                    <span>Read Monograph</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Global RnDFooter */}
      <RnDFooter />
    </div>
  );
}
