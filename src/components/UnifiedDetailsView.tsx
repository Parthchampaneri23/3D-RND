"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  ChevronRight,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  FileText,
  Calendar,
  Layers,
  Cpu,
  Globe,
  Database,
  Server,
  Code2,
  Lock,
  Zap,
  BarChart3,
  Clock,
  Compass,
  Check,
  Send,
} from "lucide-react";
import Navbar from "./Navbar";
import RnDFooter from "./RnDFooter";
import SpaceBackground from "./SpaceBackground";
import BeforeAfterSection, { BeforeAfterData } from "./BeforeAfterSection";
import PageBanner from "./PageBanner";

export interface UnifiedDetailItem {
  id: string;
  index: string;
  title: string;
  highlightText?: string;
  tagline: string;
  category: string;
  image: string;
  galleryImages?: string[];
  client?: string;
  author?: string;
  date?: string;
  year?: string;
  readTime?: string;
  sla?: string;
  badge?: string;
  overview: string[];
  quote?: {
    text: string;
    author: string;
  };
  deliverables?: (string | { item: string; detail: string; standard?: string })[];
  scope?: {
    number: string;
    title: string;
    desc: string;
    iconName?: string;
  }[];
  techStack?: (string | { name: string; role?: string; badge?: string })[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  beforeAfter?: BeforeAfterData;
}

export interface RelatedItemSummary {
  id: string;
  index: string;
  title: string;
  category: string;
  image: string;
  tagline: string;
}

export interface UnifiedDetailsViewProps {
  type: "service" | "portfolio" | "blog";
  item: UnifiedDetailItem;
  allServicesOrItems?: RelatedItemSummary[];
  prevItem?: RelatedItemSummary | null;
  nextItem?: RelatedItemSummary | null;
  parentPath: string; // e.g. "/services", "/portfolios", "/blogs"
  parentLabel: string; // e.g. "Services", "Portfolio", "Blogs"
}

// Icon helper for module cards
function getModuleIcon(index: number) {
  const icons = [Layers, Cpu, Globe, Database, Server, Zap, BarChart3, Lock];
  const IconComp = icons[index % icons.length];
  return <IconComp className="w-5 h-5 text-[#FFD400]" />;
}

export default function UnifiedDetailsView({
  type,
  item,
  allServicesOrItems = [],
  prevItem,
  nextItem,
  parentPath,
  parentLabel,
}: UnifiedDetailsViewProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: item.category || "Full-Stack Web & Cloud",
    message: "",
  });

  const fullTitle = item.highlightText
    ? `${item.title} ${item.highlightText}`
    : item.title;

  const gallery1 =
    item.galleryImages?.[0] || item.image || "/images/service_webdev.jpg";
  const gallery2 =
    item.galleryImages?.[1] ||
    "/images/nebula_cloud_os_3d.jpg";

  // Normalize deliverables list
  const deliverablesList = item.deliverables || [
    "Production-grade Next.js 15 repository with TypeScript type safety",
    "Comprehensive architecture diagrams and data schema flowcharts",
    "Continuous integration automated test suite with 90%+ code coverage",
    "Dedicated technical project lead with bi-weekly live staging releases",
    "99.9% Uptime SLA and SOC2-compliant zero-trust cloud configuration",
  ];

  // Normalize scope modules (ensure at least 6 modules)
  const defaultScope = [
    {
      number: "01",
      title: "Architecture & Systems Discovery",
      desc: "Deep analysis of system bottlenecks, user telemetry, and cloud scalability requirements.",
    },
    {
      number: "02",
      title: "Spatial 3D & UI/UX Design System",
      desc: "Designing tactile interfaces, micro-animations, and responsive typography design tokens.",
    },
    {
      number: "03",
      title: "Full-Stack Agile Sprint Engineering",
      desc: "Clean modular code written in rapid two-week agile sprint cycles with continuous integration.",
    },
    {
      number: "04",
      title: "Distributed Data & Cache Mesh",
      desc: "High-concurrency PostgreSQL read-replicas, Redis caching, and real-time WebSocket pipelines.",
    },
    {
      number: "05",
      title: "Hardened Security & Zero-Trust DevOps",
      desc: "Infrastructure as Code via Terraform, secret vaults, and continuous vulnerability scans.",
    },
    {
      number: "06",
      title: "Handover, Documentation & IP Transfer",
      desc: "Complete repository IP transfer, staging handover, and long-term maintenance SLAs.",
    },
  ];

  const scopeModules =
    item.scope && item.scope.length >= 4 ? item.scope : defaultScope;

  // Normalize FAQs
  const faqList = item.faqs && item.faqs.length > 0 ? item.faqs : [
    {
      question: `What is the standard delivery timeline for this ${type}?`,
      answer: `Depending on technical scope, delivery timelines typically range between 6 to 14 weeks. We operate in transparent 2-week agile sprint cycles with bi-weekly live demo releases to your team.`,
    },
    {
      question: "How do you guarantee scalability and zero downtime?",
      answer: "We deploy multi-region containerized clusters with automated blue/green canary deployments and edge caching, backed by our 99.99% enterprise uptime SLA.",
    },
    {
      question: "Do we retain 100% intellectual property ownership of the codebase?",
      answer: "Yes, absolutely. All source code repositories, design tokens, Docker containers, and documentation are transferred 100% to your organization under our standard enterprise IP agreement.",
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 900);
  };

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black font-sans">
      {/* Background Galactic Starfield */}
      <SpaceBackground />

      {/* Global Navbar */}
      <Navbar />

      {/* Page Banner - Compact 2-line title matching Contact Us banner height */}
      <PageBanner
        title={item.title}
        breadcrumb={item.title}
        parentBreadcrumb={{ label: parentLabel, href: parentPath }}
      />

      <main className="relative z-20 w-full -mt-10 sm:-mt-14 md:-mt-18 rounded-t-[32px] sm:rounded-t-[44px] bg-[#050608] border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)] overflow-hidden">

        {/* =========================================================================
            2. STICKY SUB-HEADER ACTION BAR (Hidden on Portfolio Details)
            ========================================================================= */}
        {type !== "portfolio" && (
          <div className="border-b border-white/10 bg-[#0c0e14]/95 backdrop-blur-xl sticky top-16 sm:top-20 z-30 shadow-2xl rounded-t-[32px] sm:rounded-t-[44px]">
            <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 py-3.5 flex items-center justify-between">
              {/* Left: Back Link */}
              <Link
                href={parentPath}
                className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-[0.18em] text-neutral-400 hover:text-[#FFD400] transition-colors group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1.5 transition-transform text-[#FFD400]" />
                <span>All {parentLabel}</span>
              </Link>

              {/* Center: Index & Title Indicator */}
              <div className="hidden sm:flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
                <span className="text-[#FFD400] font-bold">{item.index}</span>
                <span>•</span>
                <span className="truncate max-w-[320px] text-white">
                  {fullTitle}
                </span>
              </div>

              {/* Right: Quick Action CTAs */}
              <div className="flex items-center space-x-2.5">
                <a
                  href="#before-after"
                  className="hidden sm:inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-neutral-200 text-xs font-mono uppercase tracking-wider transition-all hover:text-[#FFD400] hover:border-[#FFD400]/40 cursor-pointer"
                >
                  <Sparkles className="w-3 h-3 text-[#FFD400]" />
                  <span>Before &amp; After</span>
                </a>
                <a
                  href="#inquire-form"
                  className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FFD400] hover:bg-[#ffe34d] text-black text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-[0_0_20px_rgba(255,212,0,0.25)] hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            3. MAIN 2-COLUMN SPLIT SECTION (7 Cols Left / 5 Cols Sticky Right)
            ========================================================================= */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start">
            
            {/* Left Column (7 cols): Methodology, Overview, Quote Card & Gallery */}
            <div className="lg:col-span-7 space-y-8">
              {/* Project Intelligence & Specification Matrix (For Portfolio / Case Studies) */}
              {(item.client || item.year || item.sla) && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-lg">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Client Partner
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-white truncate">
                      {item.client || "Enterprise Atelier"}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Release Cycle
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-[#FFD400] font-mono">
                      {item.year || "2026"} // PROD
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Discipline
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-white truncate">
                      {item.category}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                      Performance SLA
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-emerald-400 font-mono flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <span className="truncate">{item.sla || "Sub-Second Edge"}</span>
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono uppercase tracking-[0.2em] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{item.badge || "Engineering Discipline & Methodology"}</span>
                </div>
                <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-[1.15] uppercase">
                  The Architectural Craft Behind{" "}
                  <span className="text-[#FFD400]">{fullTitle}</span>
                </h2>
              </div>

              {/* Narrative Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
                {item.overview.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* Quality Assurance Protocol Quote Card (Gold Left Border) */}
              <div className="p-7 sm:p-8 rounded-2xl bg-[#0d0e14] border-l-4 border-l-[#FFD400] border border-white/10 shadow-xl space-y-3 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD400]/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#FFD400] font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#FFD400]" />
                  <span>Quality Assurance &amp; Execution Protocol</span>
                </div>

                <p className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl text-white font-light italic leading-snug">
                  {item.quote
                    ? `“${item.quote.text}”`
                    : `“Every microservice, 3D viewport, and cloud infrastructure pipeline is benchmarked and verified before deployment.”`}
                </p>

                <p className="text-xs text-neutral-400 font-mono">
                  {item.quote?.author ||
                    "RnD Senior Enterprise Engineering Division • ISO / SOC2 Compliance"}
                </p>
              </div>

              {/* 2 Gallery Images in 2-Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group border border-white/10 bg-[#0c0e14]">
                  <Image
                    src={gallery1}
                    alt={`${fullTitle} Architecture Detail`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <span className="text-white text-xs font-mono uppercase tracking-wider text-[#FFD400]">
                      Cloud Topology &amp; Spatial UI
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group border border-white/10 bg-[#0c0e14]">
                  <Image
                    src={gallery2}
                    alt={`${fullTitle} High-Concurrency Infrastructure`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <span className="text-white text-xs font-mono uppercase tracking-wider text-[#FFD400]">
                      Hardware-Accelerated Execution
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Sticky Deliverables Card & Direct Tech Line */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
              {/* Deliverables Card ("What You Receive") */}
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#11131a] to-[#0c0e14] text-white border border-[#FFD400]/25 shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#FFD400]/10 rounded-full blur-[70px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                <div className="space-y-2 mb-8 relative z-10">
                  <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.22em] text-[#FFD400] font-semibold">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Tangible Project Deliverables</span>
                  </div>
                  <h3 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl text-white font-bold uppercase">
                    What You Receive
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    Comprehensive architectural documentation, production source
                    code repositories, and SLA guarantees delivered across every phase.
                  </p>
                </div>

                {/* Deliverable Check Items */}
                <div className="space-y-3.5 mb-8 relative z-10">
                  {deliverablesList.slice(0, 5).map((deliv, dIdx) => {
                    const text =
                      typeof deliv === "string" ? deliv : deliv.item;
                    return (
                      <div
                        key={dIdx}
                        className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start space-x-3.5 hover:border-[#FFD400]/50 transition-colors group/item"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#FFD400]/20 flex items-center justify-center text-[#FFD400] shrink-0 mt-0.5 group-hover/item:bg-[#FFD400] group-hover/item:text-black transition-colors">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                          {text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Action CTA & Assurance */}
                <div className="space-y-3 pt-4 border-t border-white/10 relative z-10">
                  <a
                    href="#inquire-form"
                    className="w-full py-4 rounded-full bg-[#FFD400] hover:bg-[#ffe34d] text-black text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-[0_0_25px_rgba(255,212,0,0.3)] hover:shadow-[0_0_35px_rgba(255,212,0,0.5)] flex items-center justify-center space-x-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Request Service Quote</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <div className="flex items-center justify-center space-x-2 text-[11px] font-mono text-neutral-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FFD400]" />
                    <span>Fixed Scope • Zero Cost Overruns • 99.9% SLA</span>
                  </div>
                </div>
              </div>

              {/* Direct Technical Line Card */}
              <div className="p-6 rounded-2xl bg-[#0c0e14] border border-white/10 shadow-lg flex items-center justify-between hover:border-[#FFD400]/40 transition-colors">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] font-semibold block">
                    Direct Technical Line
                  </span>
                  <h4 className="font-[family-name:var(--font-syne)] text-base sm:text-lg text-white font-bold uppercase">
                    Speak With Our Lead Architect
                  </h4>
                  <p className="text-xs text-neutral-400 font-mono">
                    +91 22 2490 8800 (IST 10:00 – 19:30)
                  </p>
                </div>
                <a
                  href="tel:+912224908800"
                  className="w-11 h-11 rounded-full bg-[#FFD400]/15 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] hover:bg-[#FFD400] hover:text-black transition-all shrink-0 shadow-sm hover:scale-110"
                  aria-label="Call Lead Architect"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            3.5. ATTRACTIVE INTERACTIVE BEFORE & AFTER TRANSFORMATION SHOWCASE
            ========================================================================= */}
        <div id="before-after">
          <BeforeAfterSection
            data={item.beforeAfter}
            type={type}
            category={item.category}
            title={fullTitle}
          />
        </div>

        {/* =========================================================================
            4. DETAILED SCOPE OF WORKS (3-Column Execution Matrix)
            ========================================================================= */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 py-16 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#FFD400] font-semibold">
              Comprehensive Execution Matrix
            </span>
            <h3 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl text-white font-bold uppercase">
              Detailed Scope of Works
            </h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Every technical discipline is orchestrated under a single milestone
              agreement, from structural engineering to cloud DevOps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeModules.slice(0, 6).map((mod, mIdx) => (
              <div
                key={mIdx}
                className="p-8 rounded-2xl bg-[#0c0e14] border border-white/10 shadow-lg hover:shadow-[0_0_30px_rgba(255,212,0,0.12)] hover:border-[#FFD400]/50 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#FFD400] font-bold">
                      Module // {mod.number || `0${mIdx + 1}`}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FFD400] group-hover:bg-[#FFD400] group-hover:text-black transition-colors">
                      {getModuleIcon(mIdx)}
                    </div>
                  </div>

                  <h4 className="font-[family-name:var(--font-syne)] text-lg sm:text-xl text-white font-bold uppercase leading-snug group-hover:text-[#FFD400] transition-colors">
                    {mod.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span className="text-white/70">RnD Certified Discipline</span>
                  <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            5. SERVICE CLARIFICATIONS & FAQ ACCORDION (Matching Reference Page)
            ========================================================================= */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-white/10">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-[#FFD400] font-semibold">
                Service Clarifications &amp; FAQ
              </span>
              <h3 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl text-white font-bold uppercase">
                Frequently Asked Inquiries
              </h3>
              <p className="text-sm text-neutral-400 font-light">
                Key details regarding timelines, quality guarantees, and architectural specifications for this discipline.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {faqList.map((faq, fIdx) => {
                const isOpen = activeFaq === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="border border-white/10 rounded-2xl bg-[#0c0e14] overflow-hidden transition-all shadow-sm hover:border-[#FFD400]/40"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                      className="w-full p-6 text-left flex items-center justify-between transition-colors focus:outline-none cursor-pointer"
                    >
                      <span className="font-[family-name:var(--font-syne)] text-base sm:text-lg text-white font-semibold pr-4">
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full border border-white/15 flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#FFD400] text-black border-transparent"
                            : "bg-white/[0.04] text-neutral-300"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light border-t border-white/10 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. PREVIOUS / NEXT NAVIGATION BAR (Matching Reference Page)
            ========================================================================= */}
        <section className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 py-12 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prevItem ? (
              <Link
                href={`${parentPath}/${prevItem.id}`}
                className="p-7 rounded-2xl bg-[#0c0e14] border border-white/10 hover:border-[#FFD400] transition-all group flex items-center justify-between shadow-lg"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                    ← Previous Discipline ({prevItem.index})
                  </span>
                  <h4 className="font-[family-name:var(--font-syne)] text-lg sm:text-xl text-white font-bold uppercase group-hover:text-[#FFD400] transition-colors">
                    {prevItem.title}
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FFD400] group-hover:bg-[#FFD400] group-hover:text-black transition-colors shrink-0">
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </Link>
            ) : (
              <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 opacity-40 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  First Discipline in Registry
                </span>
              </div>
            )}

            {nextItem ? (
              <Link
                href={`${parentPath}/${nextItem.id}`}
                className="p-7 rounded-2xl bg-[#0c0e14] border border-white/10 hover:border-[#FFD400] transition-all group flex items-center justify-between text-right shadow-lg"
              >
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FFD400] group-hover:bg-[#FFD400] group-hover:text-black transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                    Next Discipline ({nextItem.index}) →
                  </span>
                  <h4 className="font-[family-name:var(--font-syne)] text-lg sm:text-xl text-white font-bold uppercase group-hover:text-[#FFD400] transition-colors">
                    {nextItem.title}
                  </h4>
                </div>
              </Link>
            ) : (
              <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 opacity-40 flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                  Final Discipline in Registry
                </span>
              </div>
            )}
          </div>
        </section>

        {/* =========================================================================
            7. PROJECT COMMISSION DIALOGUE & INTERACTIVE CTA FORM
            ========================================================================= */}
        <section
          id="inquire-form"
          className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 pb-16"
        >
          <div className="rounded-3xl bg-gradient-to-r from-[#11131a] via-[#161a24] to-[#11131a] text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-[#FFD400]/30">
            {/* Ambient Nebula Glow */}
            <div className="absolute top-0 right-1/4 w-[450px] h-[300px] bg-[#FFD400]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Left Column: Direct Inquiries Description */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono uppercase tracking-[0.2em]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Turnkey Commission Dialogue</span>
                </div>

                <h3 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl lg:text-5xl text-white font-bold uppercase leading-tight">
                  Ready to Architect Your Enterprise System?
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  Schedule a confidential technical dialogue with our principal
                  software architects and engineering directors.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
                    <span>Direct engineering consultation with zero sales fluff</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
                    <span>Transparent fixed milestones &amp; technical scope documentation</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
                    <span>Guaranteed response within 4 business hours</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    href="/contact-us"
                    className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs uppercase tracking-[0.16em] font-mono font-bold transition-all"
                  >
                    Direct Studio Inquiries
                  </Link>
                  <a
                    href="tel:+912224908800"
                    className="px-6 py-3 rounded-full bg-[#FFD400]/15 hover:bg-[#FFD400] hover:text-black border border-[#FFD400]/40 text-[#FFD400] text-xs uppercase tracking-[0.16em] font-mono font-bold transition-all"
                  >
                    Call: +91 22 2490 8800
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Fast Inquire Form */}
              <div className="lg:col-span-7 bg-[#0b0c10]/95 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-[#FFD400] text-black mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(255,212,0,0.5)]">
                      <Check className="w-7 h-7 stroke-[3]" />
                    </div>
                    <h4 className="text-2xl font-[family-name:var(--font-syne)] font-bold text-white uppercase">
                      Transmission Confirmed
                    </h4>
                    <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                      Thank you. Your project brief has been encrypted and routed directly to our Principal Architecture Squad. We will respond within 4 business hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-2 rounded-full border border-white/20 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Vikram Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 focus:border-[#FFD400] text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="e.g. v.sharma@enterprise.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 focus:border-[#FFD400] text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Selected Discipline / Scope
                      </label>
                      <input
                        type="text"
                        value={formData.projectType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            projectType: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 focus:border-[#FFD400] text-sm text-[#FFD400] font-mono focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Project Brief &amp; Target Timeline
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Share your technical goals, target launch date, and key milestones..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/15 focus:border-[#FFD400] text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formLoading}
                      className="w-full py-4 rounded-full bg-[#FFD400] hover:bg-[#ffe34d] text-black text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-[0_0_25px_rgba(255,212,0,0.3)] hover:shadow-[0_0_35px_rgba(255,212,0,0.5)] flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                    >
                      {formLoading ? (
                        <span>Encrypting &amp; Transmitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Transmit Project Commission Brief</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. RECENT & RELATED DATA SECTION (Matching Reference Page)
            ========================================================================= */}
        {allServicesOrItems.length > 0 && (
          <section className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 pb-24 border-t border-white/10 pt-16">
            <div className="flex flex-col sm:flex-row items-baseline justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD400] font-semibold block mb-1">
                  Explore Ecosystem
                </span>
                <h3 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl text-white font-bold uppercase">
                  Related {parentLabel}
                </h3>
              </div>
              <Link
                href={parentPath}
                className="inline-flex items-center space-x-1.5 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-[#FFD400] transition-colors"
              >
                <span>View Full Registry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServicesOrItems
                .filter((s) => s.id !== item.id)
                .slice(0, 3)
                .map((rel, rIdx) => (
                  <Link
                    key={rIdx}
                    href={`${parentPath}/${rel.id}`}
                    className="rounded-2xl border border-white/10 bg-[#0c0e14] overflow-hidden hover:border-[#FFD400]/50 hover:shadow-[0_0_30px_rgba(255,212,0,0.15)] transition-all group flex flex-col"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={rel.image || "/images/service_webdev.jpg"}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10">
                          {rel.index || `0${rIdx + 1}`}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                          {rel.category}
                        </span>
                        <h4 className="font-[family-name:var(--font-syne)] text-lg text-white font-bold uppercase group-hover:text-[#FFD400] transition-colors">
                          {rel.title}
                        </h4>
                        <p className="text-xs text-neutral-300 font-light line-clamp-2 leading-relaxed">
                          {rel.tagline}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#FFD400]">
                        <span>Explore Discipline</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>

            {/* Prev / Next Mission Control */}
            {(prevItem || nextItem) && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 mt-12 border-t border-white/10">
                {prevItem ? (
                  <Link
                    href={`${parentPath}/${prevItem.id}`}
                    className="group flex items-center gap-3.5 p-4 sm:px-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#FFD400]/40 transition-all w-full sm:w-auto"
                  >
                    <ArrowLeft className="w-4 h-4 text-[#FFD400] group-hover:-translate-x-1 transition-transform" />
                    <div className="text-left">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                        Previous Mission
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-[#FFD400] transition-colors">
                        {prevItem.title}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div className="hidden sm:block" />
                )}

                {nextItem ? (
                  <Link
                    href={`${parentPath}/${nextItem.id}`}
                    className="group flex items-center justify-end gap-3.5 p-4 sm:px-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#FFD400]/40 transition-all w-full sm:w-auto ml-auto"
                  >
                    <div className="text-right">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                        Next Mission
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-[#FFD400] transition-colors">
                        {nextItem.title}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#FFD400] group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <div className="hidden sm:block" />
                )}
              </div>
            )}
          </section>
        )}
      </main>

      {/* Global Footer */}
      <RnDFooter />
    </div>
  );
}
