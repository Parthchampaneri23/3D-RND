"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Server,
  Database,
  Cloud,
  Shield,
  Cpu,
  Code2,
  Globe,
  Smartphone,
  ShoppingCart,
  Zap,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Clock,
  Award,
  Terminal,
  Activity,
  Lock,
  RefreshCw,
  BarChart3,
  Users,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  ShieldCheck,
  FileCode,
} from "lucide-react";
import Navbar from "./Navbar";
import RnDFooter from "./RnDFooter";
import SpaceBackground from "./SpaceBackground";
import CyberButton from "./CyberButton";
import PageBanner from "./PageBanner";
import { ServiceDetail } from "@/data/servicesData";

interface ServiceDetailsViewProps {
  service: ServiceDetail;
}

// Icon mapper for dynamic architecture pillars
function renderPillarIcon(iconName: string) {
  const iconProps = { className: "w-6 h-6 text-[#FFD400]" };
  switch (iconName) {
    case "Server":
      return <Server {...iconProps} />;
    case "Database":
      return <Database {...iconProps} />;
    case "Cloud":
      return <Cloud {...iconProps} />;
    case "Shield":
      return <Shield {...iconProps} />;
    case "Cpu":
      return <Cpu {...iconProps} />;
    case "Globe":
      return <Globe {...iconProps} />;
    case "Smartphone":
      return <Smartphone {...iconProps} />;
    case "ShoppingCart":
      return <ShoppingCart {...iconProps} />;
    case "Zap":
      return <Zap {...iconProps} />;
    case "Layers":
      return <Layers {...iconProps} />;
    case "Award":
      return <Award {...iconProps} />;
    case "Terminal":
      return <Terminal {...iconProps} />;
    case "Activity":
      return <Activity {...iconProps} />;
    case "Users":
      return <Users {...iconProps} />;
    case "BarChart3":
      return <BarChart3 {...iconProps} />;
    case "RefreshCw":
      return <RefreshCw {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
}

export default function ServiceDetailsView({ service }: ServiceDetailsViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [copiedCode, setCopiedCode] = useState(false);

  // GSAP Animations with ScrollTrigger
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Hero Stats Entrance with Stagger & Counter Scale
      gsap.fromTo(
        ".gsap-hero-stat",
        { opacity: 0, y: 35, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-hero-stats-row",
            start: "top 85%",
          },
        }
      );

      // 2. Overview Narrative & Terminal Reveal
      gsap.fromTo(
        ".gsap-overview-col",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-overview-section",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".gsap-terminal-col",
        { opacity: 0, x: 40, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-overview-section",
            start: "top 80%",
          },
        }
      );

      // 3. Architecture Pillar Cards Entrance with 3D tilt stagger
      gsap.fromTo(
        ".gsap-pillar-card",
        { opacity: 0, y: 50, rotationX: 10 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.85,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-pillars-grid",
            start: "top 80%",
          },
        }
      );

      // 4. Vertical Process Timeline Animation
      gsap.fromTo(
        ".gsap-timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".gsap-process-section",
            start: "top 70%",
            end: "bottom 85%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".gsap-process-step",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-process-section",
            start: "top 75%",
          },
        }
      );

      // 5. Tech Stack Pills Stagger
      gsap.fromTo(
        ".gsap-tech-pill",
        { opacity: 0, scale: 0.85, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: ".gsap-tech-container",
            start: "top 85%",
          },
        }
      );

      // 6. Deliverables Matrix Rows
      gsap.fromTo(
        ".gsap-deliverable-row",
        { opacity: 0, x: -25 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".gsap-deliverables-table",
            start: "top 80%",
          },
        }
      );

      // 7. Case Study Banner Pulse
      gsap.fromTo(
        ".gsap-case-card",
        { opacity: 0, scale: 0.95, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gsap-case-card",
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [service.id]);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(`npm i @rndtechnosoft/${service.id}-squad`);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black font-sans antialiased overflow-x-hidden"
    >
      {/* 3D Space & Starfield Ambient Background */}
      <SpaceBackground />

      {/* Global White Header Navbar */}
      <Navbar />

      {/* High-Impact Hero Banner with Cover Photo & Breadcrumbs */}
      <PageBanner
        theme="dark"
        title={service.title}
        highlightText={service.highlightText}
        subtitle={service.tagline}
        badge={service.badge}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title.split(" ")[0] || "Details" },
        ]}
        bgImage={service.image}
        ctaText="REQUEST ARCHITECT AUDIT"
        ctaHref="/#contact"
      />

      <main className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-28 space-y-28">
        {/* ================= SECTION 1: TELEMETRY & HERO STATS ================= */}
        <section className="gsap-hero-stats-row grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {service.heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="gsap-hero-stat relative p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#FFD400]/40 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FFD400]/5 blur-2xl rounded-full group-hover:bg-[#FFD400]/15 transition-all" />
              <div className="font-mono text-xs uppercase tracking-widest text-[#FFD400] mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-pulse" />
                <span>{stat.label}</span>
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-bebas)] tracking-wide text-white group-hover:text-[#FFD400] transition-colors leading-none">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 mt-3 font-light leading-snug">
                {stat.desc}
              </p>
            </div>
          ))}
        </section>

        {/* ================= SECTION 2: ARCHITECTURE NARRATIVE & TERMINAL ================= */}
        <section className="gsap-overview-section grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Narrative Column */}
          <div className="gsap-overview-col lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono uppercase tracking-[0.25em]">
              <Cpu className="w-3.5 h-3.5" />
              <span>ENTERPRISE SPECIFICATION // 2026 ARCHITECTURE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-[family-name:var(--font-jakarta)]">
              Engineering high-resilience systems built to outlast market shifts.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              {service.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Checklist of Technical Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {service.specs.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#FFD400] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-neutral-200 leading-snug">
                    {spec}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Telemetry / Terminal Column */}
          <div className="gsap-terminal-col lg:col-span-5">
            <div className="relative rounded-3xl bg-[#090b10] border border-white/15 p-6 sm:p-7 shadow-2xl overflow-hidden">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-xs font-mono text-neutral-400 ml-2">
                    rnd-telemetry://{service.id}-pod
                  </span>
                </div>
                <button
                  onClick={handleCopyCommand}
                  className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 hover:text-[#FFD400] transition-colors px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 cursor-pointer"
                  title="Copy command"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>COPY CLI</span>
                    </>
                  )}
                </button>
              </div>

              {/* Terminal Body */}
              <div className="font-mono text-xs sm:text-sm space-y-3 text-neutral-300">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="text-white/40">$</span>
                  <span>rnd-cli init --discipline={service.id} --sla={service.sla.replace(/\s+/g, "_")}</span>
                </div>
                <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-neutral-400 space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Service Node:</span>
                    <span className="text-white font-semibold">{service.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Deployment SLA:</span>
                    <span className="text-[#FFD400] font-semibold">{service.sla}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Security Vault:</span>
                    <span className="text-emerald-400">SOC2 Type II + ISO27001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Active Mesh:</span>
                    <span className="text-cyan-400">Multi-Region Edge Failover</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Latency Target:</span>
                    <span className="text-purple-400">&lt; 800ms P99 SLA</span>
                  </div>
                </div>

                {/* Animated Pulsing Status */}
                <div className="flex items-center justify-between pt-2 text-xs">
                  <span className="flex items-center gap-2 text-neutral-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>SYSTEM HEALTH: NOMINAL</span>
                  </span>
                  <span className="text-neutral-500 font-mono text-[11px]">
                    HASH: #7F2B-98CE
                  </span>
                </div>
              </div>

              {/* Quick Action Button */}
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-xs font-mono text-neutral-400">
                  Ready to deploy pod?
                </span>
                <CyberButton href="/#contact" size="sm">
                  SCHEDULE CALL
                </CyberButton>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: ARCHITECTURE PILLARS GRID ================= */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono uppercase tracking-[0.25em] mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>CORE CAPABILITY MATRIX</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-[family-name:var(--font-jakarta)]">
                Architectural Pillars & Deep Tech
              </h2>
            </div>
            <p className="text-sm text-neutral-400 max-w-md font-light">
              Meticulously engineered modules integrated into your ecosystem with zero friction and guaranteed velocity.
            </p>
          </div>

          <div className="gsap-pillars-grid grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {service.architecturePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="gsap-pillar-card relative rounded-3xl p-7 sm:p-9 bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/60 transition-all duration-500 group shadow-2xl flex flex-col justify-between overflow-hidden"
              >
                {/* Glow accent in corner */}
                <div className="absolute top-0 right-0 w-44 h-44 bg-[#FFD400]/5 blur-3xl rounded-full group-hover:bg-[#FFD400]/15 transition-all pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:bg-[#FFD400]/15 group-hover:border-[#FFD400]/40 transition-colors">
                      {renderPillarIcon(pillar.iconName)}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#FFD400] px-3 py-1 rounded-full bg-black/60 border border-[#FFD400]/30">
                      {pillar.metrics}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[#FFD400] transition-colors font-[family-name:var(--font-jakarta)]">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {pillar.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-neutral-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 4: PROCESS & ROADMAP (GSAP TIMELINE) ================= */}
        <section className="gsap-process-section space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono uppercase tracking-[0.25em]">
              <Clock className="w-3.5 h-3.5" />
              <span>SPRINT ROADMAP // END-TO-END</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-[family-name:var(--font-jakarta)]">
              Execution Methodology & Milestone Cadence
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light">
              From day one discovery through post-launch hypercare, our two-week agile sprint cycles ensure zero surprises.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto pt-6">
            {/* GSAP Animated Vertical Timeline Connector */}
            <div className="absolute top-8 bottom-8 left-8 sm:left-1/2 -translate-x-1/2 w-0.5 bg-white/10 hidden sm:block">
              <div className="gsap-timeline-line absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[#FFD400] via-cyan-400 to-[#FFD400] origin-top scale-y-0" />
            </div>

            <div className="space-y-12 sm:space-y-16">
              {service.processSteps.map((step, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`gsap-process-step relative flex flex-col sm:flex-row items-center gap-8 ${
                      isEven ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content Card */}
                    <div className="w-full sm:w-[calc(50%-40px)] p-6 sm:p-8 rounded-3xl bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/50 transition-all duration-300 shadow-xl group">
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <span className="font-mono text-xs uppercase tracking-widest text-[#FFD400] font-semibold">
                          {step.phase}
                        </span>
                        <span className="text-xs font-mono text-neutral-400 px-2.5 py-0.5 rounded bg-white/[0.05] border border-white/10">
                          {step.duration}
                        </span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#FFD400] transition-colors mb-3">
                        {step.title}
                      </h4>
                      <ul className="space-y-2 pt-2 border-t border-white/10">
                        {step.deliverables.map((deliv, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300 font-light"
                          >
                            <span className="text-[#FFD400] mt-1">▸</span>
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Timeline Node Badge (Center) */}
                    <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050608] border-2 border-[#FFD400] flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,212,0,0.4)] hidden sm:flex">
                      <span className="w-3 h-3 rounded-full bg-[#FFD400]" />
                    </div>

                    {/* Spacer for Alternate Column */}
                    <div className="w-full sm:w-[calc(50%-40px)] hidden sm:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: TECH ECOSYSTEM ================= */}
        <section className="gsap-tech-container rounded-3xl bg-[#090b10] border border-white/15 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFD400]/5 blur-3xl rounded-full pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/10 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono uppercase tracking-[0.25em] mb-3">
                <Code2 className="w-3.5 h-3.5" />
                <span>FRAMEWORKS & STACK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Enterprise Technologies Powered
              </h2>
            </div>
            <p className="text-sm text-neutral-400 max-w-md font-light">
              We leverage battle-tested open-source and cloud infrastructure with zero proprietary lock-in.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {service.techStack.map((tech, idx) => (
              <div
                key={idx}
                className="gsap-tech-pill p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FFD400]/50 hover:bg-white/[0.06] transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase text-[#FFD400] px-2 py-0.5 rounded bg-black/60 border border-[#FFD400]/20">
                    {tech.badge}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-[#FFD400] transition-colors" />
                </div>
                <div className="text-base sm:text-lg font-bold text-white group-hover:text-[#FFD400] transition-colors">
                  {tech.name}
                </div>
                <span className="text-xs text-neutral-400 font-light mt-1">
                  {tech.role}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 6: DELIVERABLES & SLA MATRIX ================= */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono uppercase tracking-[0.25em] mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>COMMERCIAL DELIVERABLES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-[family-name:var(--font-jakarta)]">
                Contractual Deliverables & Standards
              </h2>
            </div>
            <span className="text-xs font-mono text-[#FFD400] px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 self-start md:self-end">
              100% INTELLECTUAL PROPERTY GUARANTEE
            </span>
          </div>

          <div className="gsap-deliverables-table divide-y divide-white/10 border-y border-white/10">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="gsap-deliverable-row py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors px-3 rounded-xl"
              >
                <div className="md:w-1/3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs text-[#FFD400]">
                      [0{idx + 1}]
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold text-white">
                      {item.item}
                    </h4>
                  </div>
                </div>
                <div className="md:w-1/2 text-sm text-neutral-300 font-light">
                  {item.detail}
                </div>
                <div className="md:w-1/6 flex justify-start md:justify-end">
                  <span className="text-xs font-mono text-[#FFD400] bg-black/60 px-3 py-1 rounded-full border border-[#FFD400]/30">
                    {item.standard}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 7: CASE STUDY HIGHLIGHT ================= */}
        <section className="gsap-case-card relative rounded-3xl bg-gradient-to-br from-[#121624] via-[#090b10] to-[#050608] border border-white/15 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFD400]/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFD400] tracking-widest uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>PROVEN CLIENT RESULT // {service.caseStudy.tag}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight font-[family-name:var(--font-jakarta)]">
                {service.caseStudy.client}
              </h3>
              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl">
                {service.caseStudy.desc}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-bebas)] text-[#FFD400] tracking-wide leading-none">
                {service.caseStudy.metric}
              </div>
              <span className="text-xs font-mono text-neutral-400 mt-2">
                VERIFIED PRODUCTION METRIC
              </span>
              <div className="mt-6">
                <CyberButton href="/portfolios" size="md">
                  VIEW FULL CASE STUDY
                </CyberButton>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 8: FAQ ACCORDION ================= */}
        <section className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono uppercase tracking-[0.25em]">
              <HelpCircleIcon />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-jakarta)]">
              Questions About This Discipline?
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0c0e14] border border-white/10 hover:border-white/25 transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-semibold text-white">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 text-[#FFD400]">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= SECTION 9: BOTTOM CTA BANNER ================= */}
        <section className="rounded-3xl bg-gradient-to-r from-[#0c0e14] via-[#141722] to-[#0c0e14] border border-white/15 p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>READY TO ARCHITECT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-[family-name:var(--font-jakarta)]">
              Schedule your technical architecture review.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-light max-w-xl">
              Meet directly with our principal engineers for a 30-minute scope evaluation, architecture blueprint review, and estimate.
            </p>
          </div>

          <div className="relative z-10 shrink-0 flex flex-col sm:flex-row gap-4">
            <CyberButton href="/#contact" size="lg">
              BOOK ARCHITECT REVIEW
            </CyberButton>
            <Link
              href="/services"
              className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-mono tracking-wider uppercase text-neutral-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 transition-all text-center flex items-center justify-center gap-2"
            >
              <span>ALL SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <RnDFooter />
    </div>
  );
}

function HelpCircleIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <path
        strokeWidth="2"
        d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"
      />
    </svg>
  );
}
