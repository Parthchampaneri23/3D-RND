"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
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

export default function IndustriesIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inquiryIndustry, setInquiryIndustry] = useState(industriesList[0].title);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    timeline: "Immediate / Q4",
    message: "",
  });

  const filteredIndustries = useMemo(() => {
    if (selectedCategory === "All") return industriesList;
    return industriesList.filter((item) =>
      item.title.toLowerCase().includes(selectedCategory.toLowerCase())
    );
  }, [selectedCategory]);

  // GSAP ScrollTrigger Animations for Content
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Enterprise Hero Card Entrance
      gsap.fromTo(
        ".industry-hero-card",
        { opacity: 0, y: 45, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".industry-hero-card",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // Hero Metrics Items Stagger
      gsap.fromTo(
        ".industry-metric-item",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".industry-hero-card",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Section Header Reveal
      gsap.fromTo(
        ".industry-section-header",
        { opacity: 0, y: 35, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".industry-section-header",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Industry Directory Cards Reveal per card
      const cards = gsap.utils.toArray<HTMLElement>(".industry-card-item");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 4. Cross-Industry Consultation Section Slide-ins
      gsap.fromTo(
        ".industry-consult-left",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".industry-consult-section",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".industry-consult-right",
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".industry-consult-section",
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    }, mainRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [filteredIndustries]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 850);
  };

  const getIndustryIcon = (slug: string) => {
    switch (slug) {
      case "healthcare":
        return HeartPulse;
      case "food-fmcg":
        return UtensilsCrossed;
      case "retail-ecommerce":
        return ShoppingBag;
      case "hospitality":
        return Hotel;
      case "education":
        return GraduationCap;
      case "real-estate":
        return Building2;
      case "startups-professional-services":
        return Rocket;
      case "travel-tourism":
        return Plane;
      default:
        return Briefcase;
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black font-sans">
      <RocketCursor />
      <CursorGlow />
      <SpaceBackground />
      <Navbar />

      {/* Page Banner with Typewriter Title, Slow Cinematic Zoom & Parallax */}
      <PageBanner
        title="INDUSTRIES & DOMAINS"
        breadcrumb="INDUSTRIES"
      />

      {/* Main Content with Layered Overlap over the Banner */}
      <main
        ref={mainRef}
        className="relative z-20 w-full -mt-10 sm:-mt-14 md:-mt-18 rounded-t-[32px] sm:rounded-t-[44px] bg-[#050608] border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)]"
      >
        {/* =========================================================================
            1. ENTERPRISE ENGINEERING PHILOSOPHY HERO BAR
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-14 pb-8">
          <div className="industry-hero-card p-8 sm:p-12 bg-gradient-to-r from-[#0c0e14] via-[#121520] to-[#0c0e14] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CROSS-DOMAIN ENTERPRISE ARCHITECTURE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold text-white uppercase tracking-tight leading-tight">
                Software Engineered For Regulated &amp; High-Stakes Verticals
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                We combine deep sector-specific compliance (HIPAA, PCI-DSS, SOC2) with cutting-edge 3D spatial web capabilities and sub-second cloud performance. Explore our specialized engineering blueprints across 8 core industry domains.
              </p>
            </div>

            {/* Quick Metrics Ticker with Animated Counters */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
              <div className="industry-metric-item">
                <span className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-[#FFD400]">
                  <AnimatedCounter value={2.4} prefix="$" suffix="B+" decimals={1} duration={2} />
                </span>
                <p className="text-xs font-mono text-neutral-400 mt-0.5">Daily Volume Processed</p>
              </div>
              <div className="industry-metric-item">
                <span className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-white">
                  <AnimatedCounter value={100} suffix="%" duration={1.6} />
                </span>
                <p className="text-xs font-mono text-neutral-400 mt-0.5">HIPAA &amp; SOC2 Compliance</p>
              </div>
              <div className="industry-metric-item">
                <span className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-[#FFD400]">
                  <AnimatedCounter value={340} prefix="+" suffix="%" duration={2.2} />
                </span>
                <p className="text-xs font-mono text-neutral-400 mt-0.5">Average Conversion Lift</p>
              </div>
              <div className="industry-metric-item">
                <span className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-white">
                  <AnimatedCounter value={14} suffix=" Days" duration={1.5} />
                </span>
                <p className="text-xs font-mono text-neutral-400 mt-0.5">Rapid MVP Deployment</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. INDUSTRIES DIRECTORY LISTING
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="industry-section-header mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
                SECTOR SPECIFIC ARCHITECTURES
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-1">
                Explore Industry Specializations
              </h2>
            </div>
            <p className="text-xs font-mono text-neutral-400">
              Showing {filteredIndustries.length} Dedicated Industry Hubs
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="space-y-10">
            {filteredIndustries.map((ind, idx) => {
              const Icon = getIndustryIcon(ind.slug);
              const previewWork = ind.works[0];

              return (
                <article
                  key={ind.slug}
                  className="industry-card-item group bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/50 transition-all duration-500 shadow-xl overflow-hidden flex flex-col"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[360px]">

                    {/* Left: Project Image with Multi-Directional Glide & Settle Animation */}
                    <div className="lg:col-span-5 xl:col-span-5 relative w-full h-[280px] sm:h-[340px] lg:h-auto min-h-full flex flex-col justify-stretch self-stretch overflow-hidden">
                      <PrintRevealImage
                        src={previewWork.image}
                        alt={previewWork.title}
                        badge={ind.badge}
                        aspectClass="w-full h-full min-h-full"
                        className="w-full h-full border-0 lg:border-r border-white/10"
                        index={idx}
                      />
                    </div>

                    {/* Right: Industry Blueprint Details */}
                    <div className="lg:col-span-7 xl:col-span-7 p-6 sm:p-8 lg:p-9 space-y-5 flex flex-col justify-between">
                      <div className="space-y-4">

                        {/* Meta Tags: Number • Category • Standard */}
                        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                          <span className="px-2.5 py-0.5 bg-[#FFD400]/15 text-[#FFD400] border border-[#FFD400]/30 font-bold">
                            VERTICAL {ind.number}
                          </span>
                          <span className="px-2.5 py-0.5 bg-white/[0.04] border border-white/10">
                            {ind.category}
                          </span>
                          <span className="flex items-center gap-1 px-2.5 py-0.5 bg-white/[0.04] border border-white/10 text-white">
                            <Shield className="w-3 h-3 text-[#FFD400]" />
                            <span>{ind.badge}</span>
                          </span>
                        </div>

                        {/* Title with Smooth Wave Animation */}
                        <h3 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-white group-hover:text-[#FFD400] transition-colors uppercase leading-snug">
                          <Link href={`/industries/${ind.slug}`}>
                            <WaveText text={ind.title} />
                          </Link>
                        </h3>

                        {/* Tagline */}
                        <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                          {ind.tagline}
                        </p>

                        {/* Key Metrics Pills with Animated Counter */}
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          {ind.heroMetrics.map((m, mIdx) => (
                            <div
                              key={mIdx}
                              className="px-3 py-1 bg-white/[0.03] border border-white/10 text-xs font-mono"
                            >
                              <span className="text-neutral-400">{m.label}: </span>
                              <strong className="text-[#FFD400]">
                                <AnimatedCounter text={m.value} duration={1.6} />
                              </strong>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Featured Project Snapshot & Action Button */}
                      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                            Showcase Project
                          </span>
                          <p className="text-xs font-mono text-white font-medium line-clamp-1">
                            {previewWork.title}
                          </p>
                        </div>

                        <Link
                          href={`/industries/${ind.slug}`}
                          className="px-6 py-2.5 bg-[#FFD400] hover:bg-[#ffe34d] text-black text-xs font-mono uppercase tracking-widest font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,212,0,0.3)] transition-all cursor-pointer group/btn"
                        >
                          <span>Explore Industry Hub</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            3. CROSS-INDUSTRY ARCHITECTURAL CONSULTATION SECTION
            ========================================================================= */}
        <section className="industry-consult-section max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-white/10">
          <div className="bg-[#0c0e14] border border-white/15 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left Info */}
            <div className="industry-consult-left lg:col-span-5 space-y-5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>EXECUTIVE ARCHITECTURE REVIEW</span>
              </span>
              <h2 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl lg:text-4xl text-white font-bold uppercase leading-tight">
                Plan Your Enterprise Solution
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                Consult with our Principal Architects. We evaluate your industry regulatory compliance, current monolithic constraints, and deliver an actionable 60-day migration blueprint.
              </p>

              <div className="p-4 bg-white/[0.02] border border-white/10 space-y-2 text-xs font-mono text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400]" />
                  <span>Strict NDA &amp; Intellectual Property Protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400]" />
                  <span>Sub-24h Direct Architect Reply Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400]" />
                  <span>Compliance Audits: HIPAA, SOC2, PCI-DSS Level 1</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="industry-consult-right lg:col-span-7">
              {formSubmitted ? (
                <div className="p-8 bg-black/60 border border-[#FFD400]/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#FFD400]/20 border border-[#FFD400] text-[#FFD400] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white uppercase">
                    Inquiry Encrypted &amp; Received
                  </h3>
                  <p className="text-xs text-neutral-300 font-mono max-w-md mx-auto">
                    Thank you. A Senior Industry Solutions Architect will review your requirements and respond within 24 hours.
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
                        placeholder="Dr. Siddharth Mehta"
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
                        placeholder="siddharth@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs font-mono bg-white/[0.04] border border-white/15 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FFD400] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Target Industry Domain
                      </label>
                      <select
                        value={inquiryIndustry}
                        onChange={(e) => setInquiryIndustry(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs font-mono bg-[#0c0e14] border border-white/15 text-white focus:outline-none focus:border-[#FFD400] transition-colors"
                      >
                        {industriesList.map((ind) => (
                          <option key={ind.slug} value={ind.title}>
                            {ind.number} - {ind.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                        Estimated Deployment Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs font-mono bg-[#0c0e14] border border-white/15 text-white focus:outline-none focus:border-[#FFD400] transition-colors"
                      >
                        <option value="Immediate / Q4">Immediate / Urgent (Next 30 Days)</option>
                        <option value="Q1 2027">Q1 2027 (Next 60-90 Days)</option>
                        <option value="Exploratory">Long-term Strategic Evaluation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Technical Scope &amp; Challenges
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your current system bottlenecks, compliance requirements, or target KPIs..."
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
                          <span>Transmit Industry Inquiry</span>
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
      </main>

      <RnDFooter />
    </div>
  );
}
