"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Shield,
  Zap,
  CheckCircle2,
  Send,
  Building2,
  Briefcase,
  HeartPulse,
  UtensilsCrossed,
  ShoppingBag,
  Hotel,
  GraduationCap,
  Rocket,
  Plane,
  Sparkles,
  Cpu,
  FileCheck,
  Compass,
  Landmark,
  Layers,
  TrendingUp,
  Quote,
  Calendar,
  Layers3,
  Clock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import CursorGlow from "@/components/CursorGlow";
import RocketCursor from "@/components/RocketCursor";
import PageBanner from "@/components/PageBanner";
import PrintRevealImage from "@/components/PrintRevealImage";
import WaveText from "@/components/WaveText";
import AnimatedCounter from "@/components/AnimatedCounter";
import { industriesList, IndustryData } from "@/data/industriesData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function IndustryDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const industry = industriesList.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  // Find next industry for seamless bottom navigation
  const currentIndex = industriesList.findIndex((item) => item.slug === slug);
  const nextIndustry = industriesList[(currentIndex + 1) % industriesList.length];

  // Accordion state for FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Consultation Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$25,000 - $50,000",
    timeline: "Next 30 Days",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return Shield;
      case "Cpu":
        return Cpu;
      case "FileCheck":
        return FileCheck;
      case "ShoppingBag":
        return ShoppingBag;
      case "TrendingUp":
        return TrendingUp;
      case "Sparkles":
        return Sparkles;
      case "Compass":
        return Compass;
      case "Landmark":
        return Landmark;
      case "Building2":
        return Building2;
      case "Layers":
        return Layers;
      default:
        return Zap;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black font-sans">
      <RocketCursor />
      <CursorGlow />
      <SpaceBackground />
      <Navbar />

      {/* Page Banner with Typewriter Title, Slow Zoom & Parallax */}
      <PageBanner
        title={industry.title}
        breadcrumb={industry.title}
        parentBreadcrumb={{ label: "INDUSTRIES", href: "/industries" }}
      />

      {/* Overlapping Main Content */}
      <main className="relative z-20 w-full -mt-10 sm:-mt-14 md:-mt-18 rounded-t-[32px] sm:rounded-t-[44px] bg-[#050608] border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)]">

        {/* =========================================================================
            1. SHORT INFO & ARCHITECTURAL SUMMARY SECTION
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-10">
          <div className="p-8 sm:p-12 bg-gradient-to-r from-[#0c0e14] via-[#121520] to-[#0c0e14] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Column (8 cols): Short Info & Tagline */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FFD400]/15 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-bold tracking-[0.2em] uppercase">
                    VERTICAL {industry.number} // {industry.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 text-xs font-mono">
                    {industry.category}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase tracking-tight leading-snug">
                  <WaveText text={industry.tagline} />
                </h1>

                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  {industry.shortInfo}
                </p>
              </div>

              {/* Right Column (4 cols): Hero Key Metrics */}
              <div className="lg:col-span-4 bg-black/40 border border-white/10 p-6 space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FFD400] font-bold block border-b border-white/10 pb-2">
                  AUDITED BENCHMARKS
                </span>
                <div className="space-y-4">
                  {industry.heroMetrics.map((metric, mIdx) => (
                    <div key={mIdx} className="space-y-0.5">
                      <span className="text-xs font-mono text-neutral-400">
                        {metric.label}
                      </span>
                      <p className="text-xl sm:text-2xl font-[family-name:var(--font-syne)] font-bold text-white">
                        <AnimatedCounter text={metric.value} duration={1.6} />
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3 Core Engineering Pillars */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {industry.pillars.map((pillar, pIdx) => {
                const IconComponent = getPillarIcon(pillar.icon);
                return (
                  <div
                    key={pIdx}
                    className="p-5 bg-white/[0.02] border border-white/10 hover:border-[#FFD400]/40 transition-colors space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FFD400]/15 border border-[#FFD400]/30 text-[#FFD400] flex items-center justify-center">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-[family-name:var(--font-syne)] text-base font-bold text-white uppercase">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. LIST OF WORKS RELATED TO THIS INDUSTRY (With Project Images)
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
                PROVEN EXECUTION ARCHIVES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-1">
                Featured Works &amp; Systems
              </h2>
            </div>
            <p className="text-xs font-mono text-neutral-400">
              Showing {industry.works.length} Production Deployments
            </p>
          </div>

          {/* Project Cards */}
          <div className="space-y-10">
            {industry.works.map((work, wIdx) => (
              <article
                key={work.id}
                className="group bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/50 transition-all duration-500 shadow-xl overflow-hidden flex flex-col"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[360px]">

                  {/* Left: Project Image with Multi-Directional Glide & Settle Animation */}
                  <div className="lg:col-span-6 xl:col-span-6 relative w-full h-[280px] sm:h-[360px] lg:h-auto min-h-full flex flex-col justify-stretch self-stretch overflow-hidden">
                    <PrintRevealImage
                      src={work.image}
                      alt={work.title}
                      badge={work.highlightMetric}
                      aspectClass="w-full h-full min-h-full"
                      className="w-full h-full border-0 lg:border-r border-white/10"
                      index={wIdx}
                    />
                  </div>

                  {/* Right: Project Details & Deliverables */}
                  <div className="lg:col-span-6 xl:col-span-6 p-6 sm:p-8 lg:p-9 space-y-5 flex flex-col justify-between">
                    <div className="space-y-4">

                      {/* Meta Tags: Client • Category • Year */}
                      <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                        <span className="px-2.5 py-0.5 bg-[#FFD400]/15 text-[#FFD400] border border-[#FFD400]/30 font-bold">
                          {work.client}
                        </span>
                        <span className="px-2.5 py-0.5 bg-white/[0.04] border border-white/10">
                          {work.category}
                        </span>
                        <span className="px-2.5 py-0.5 bg-white/[0.04] border border-white/10 text-white">
                          DEPLOYED {work.year}
                        </span>
                      </div>

                      {/* Project Title with Smooth Wave Animation */}
                      <h3 className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-[#FFD400] transition-colors uppercase leading-snug">
                        <WaveText text={work.title} />
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                        {work.desc}
                      </p>

                      {/* Key Deliverables Bullet Points */}
                      <div className="space-y-2 pt-1 border-t border-white/10">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] font-bold block">
                          Architectural Deliverables:
                        </span>
                        <ul className="space-y-1.5 text-xs text-neutral-300 font-mono">
                          {work.deliverables.map((del, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <span className="text-[#FFD400] shrink-0 mt-0.5">›</span>
                              <span className="font-light">{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-2">
                        {work.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-white/[0.03] border border-white/10 text-[10px] font-mono text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-mono text-[#FFD400] font-bold">
                        {work.highlightMetric}
                      </span>
                      <a
                        href="#consultation-section"
                        className="text-xs font-mono uppercase tracking-wider text-white hover:text-[#FFD400] flex items-center gap-1 group/btn transition-colors"
                      >
                        <span>Request Similar Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform text-[#FFD400]" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* =========================================================================
            3. ATTRACTIVE CASE STUDY DEEP DIVE SECTION
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-14">
          <div className="p-8 sm:p-12 bg-[#090b10] border border-[#FFD400]/30 shadow-2xl relative overflow-hidden">

            {/* Background Aesthetic Watermark */}
            <div className="absolute right-4 bottom-2 text-white/[0.02] text-8xl sm:text-9xl font-black select-none pointer-events-none font-mono">
              CASE STUDY
            </div>

            <div className="relative z-10 space-y-8">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>IN-DEPTH TRANSFORMATION CASE STUDY</span>
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-1">
                    {industry.caseStudy.title}
                  </h2>
                </div>
                <div className="text-xs font-mono px-3 py-1.5 bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] shrink-0 self-start sm:self-center">
                  {industry.caseStudy.period}
                </div>
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm font-mono">
                <div className="p-6 bg-red-500/[0.04] border border-red-500/20 space-y-2.5">
                  <span className="text-red-400 font-bold uppercase tracking-wider block">
                    The Pre-Migration Bottlenecks
                  </span>
                  <p className="text-neutral-300 font-light leading-relaxed">
                    {industry.caseStudy.challenge}
                  </p>
                </div>

                <div className="p-6 bg-emerald-500/[0.04] border border-emerald-500/20 space-y-2.5">
                  <span className="text-emerald-400 font-bold uppercase tracking-wider block">
                    The Engineered Modern Solution
                  </span>
                  <p className="text-neutral-300 font-light leading-relaxed">
                    {industry.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {industry.caseStudy.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-5 bg-white/[0.02] border border-white/10 text-center space-y-1"
                  >
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest block">
                      {m.label}
                    </span>
                    <p className="text-3xl sm:text-4xl font-[family-name:var(--font-syne)] font-bold text-[#FFD400]">
                      {m.value}
                    </p>
                    <span className="text-xs font-mono text-emerald-400 font-medium block">
                      {m.change}
                    </span>
                  </div>
                ))}
              </div>

              {/* Executive Client Quote */}
              <div className="p-6 bg-white/[0.03] border-l-2 border-[#FFD400] space-y-3">
                <Quote className="w-6 h-6 text-[#FFD400] opacity-80" />
                <p className="text-sm sm:text-base text-neutral-200 italic font-light leading-relaxed">
                  &ldquo;{industry.caseStudy.quote.text}&rdquo;
                </p>
                <div className="text-xs font-mono text-neutral-400 pt-1">
                  <strong className="text-white">{industry.caseStudy.quote.author}</strong> • {industry.caseStudy.quote.role}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. TECHNICAL CONSULTATION / INQUIRY FORM
            ========================================================================= */}
        <section
          id="consultation-section"
          className="max-w-7xl mx-auto px-6 md:px-12 py-14 border-t border-white/10"
        >
          <div className="bg-[#0c0e14] border border-white/15 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left Instructions */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>EXECUTIVE ARCHITECTURE CONSULTATION</span>
              </span>
              <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl lg:text-4xl text-white font-bold uppercase leading-tight">
                Request {industry.title} Architecture Brief
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                Connect directly with our Principal Enterprise Architect specializing in {industry.title}. We provide system architecture blueprints, cost modeling, and compliance audits for your project.
              </p>

              <div className="p-4 bg-white/[0.02] border border-white/10 space-y-2 text-xs font-mono text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400]" />
                  <span>Comprehensive NDA Guarantee Before Technical Calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400]" />
                  <span>Direct Principal Architect Response in 24 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400]" />
                  <span>Sector Compliance: {industry.badge}</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="p-8 bg-black/60 border border-[#FFD400]/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#FFD400]/20 border border-[#FFD400] text-[#FFD400] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white uppercase">
                    Inquiry Encrypted &amp; Received
                  </h3>
                  <p className="text-xs text-neutral-300 font-mono max-w-md mx-auto">
                    Thank you. Our Principal Solutions Lead for {industry.title} will review your specifications and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Arjun Kapoor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="arjun@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Organization / Enterprise Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Organization Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Target Launch Window
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs font-mono bg-[#0c0e14] border border-white/15 text-white focus:outline-none focus:border-[#FFD400] transition-colors"
                      >
                        <option value="Next 30 Days">Immediate (Next 30 Days)</option>
                        <option value="Next 60-90 Days">Next Quarter (60-90 Days)</option>
                        <option value="Strategic Planning">Long-Term Strategic Evaluation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Technical Challenges or Architecture Scope
                    </label>
                    <textarea
                      rows={3}
                      placeholder={`Tell us about your ${industry.title} software needs, current platform pain points, or expected scale...`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#FFD400] hover:bg-[#ffe34d] text-black text-xs font-mono uppercase tracking-[0.2em] font-bold transition-all shadow-[0_0_20px_rgba(255,212,0,0.3)] flex items-center justify-center space-x-2 group cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <span>Encrypting Scope...</span>
                      ) : (
                        <>
                          <span>Transmit Consultation Brief</span>
                          <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. INDUSTRY TECHNICAL FAQS (ACCORDION)
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-14 border-t border-white/10">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
              KNOWLEDGE &amp; COMPLIANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {industry.faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;

              return (
                <div
                  key={fIdx}
                  className="border border-white/10 bg-[#0c0e14] transition-colors hover:border-white/25"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-[family-name:var(--font-syne)] text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#FFD400] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5 font-mono">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            6. SEAMLESS NEXT INDUSTRY BROWSE BAR
            ========================================================================= */}
        <section className="border-t border-white/10 bg-black/40 py-10 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block">
                Next Industry Specialization
              </span>
              <p className="font-[family-name:var(--font-syne)] text-xl font-bold text-white uppercase">
                {nextIndustry.number} — {nextIndustry.title}
              </p>
            </div>

            <Link
              href={`/industries/${nextIndustry.slug}`}
              className="px-6 py-2.5 border border-white/20 hover:border-[#FFD400] text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Explore Next Industry</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FFD400]" />
            </Link>
          </div>
        </section>
      </main>

      <RnDFooter />
    </div>
  );
}
