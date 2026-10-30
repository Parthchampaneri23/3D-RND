"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Quote,
  Mail,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Cpu,
  Palette,
  Bot,
  TrendingUp,
  Users,
  CheckCircle2,
  Heart,
  Zap,
  Flame,
} from "lucide-react";
import WaveText from "@/components/WaveText";
import CyberButton from "@/components/CyberButton";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  squad: string;
  image: string;
  bio: string;
  expertise: string[];
  metric: { value: string; label: string };
  icon: typeof Cpu;
}

export default function TeamCultureSection({
  className = "",
}: {
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState<"all" | "engineering" | "creative" | "ai" | "growth">("all");

  const squadLeaders: TeamMember[] = [
    {
      id: "cto",
      name: "Rohan Sharma",
      role: "Chief Technology Officer",
      squad: "Engineering & Cloud Systems",
      image: "/images/team/team_cto.jpg",
      bio: "Former Lead Infrastructure Architect overseeing distributed systems, Next.js 15 App Router engines, and sub-millisecond cloud pipelines.",
      expertise: ["Distributed Systems", "Next.js 15", "Kubernetes", "Rust Microservices"],
      metric: { value: "<5ms", label: "Average Global API Latency" },
      icon: Cpu,
    },
    {
      id: "design-lead",
      name: "Ananya Sen",
      role: "Head of Product & Spatial Design",
      squad: "Spatial WebGL & Design Systems",
      image: "/images/team/team_design_lead.jpg",
      bio: "Award-winning creative director blending cinematic typography, spatial 3D interactions, and modular enterprise design token systems.",
      expertise: ["Three.js WebGL", "Spatial UI/UX", "Motion Design", "Design Systems"],
      metric: { value: "60 FPS", label: "Smooth WebGL Canvas Render" },
      icon: Palette,
    },
    {
      id: "ai-lead",
      name: "Vikramaditya Patel",
      role: "Head of AI Architecture",
      squad: "Cognitive AI & Vector Graph",
      image: "/images/team/team_ai_lead.jpg",
      bio: "Deep learning specialist architecting enterprise multi-tenant RAG pipelines, fine-tuned LLM agents, and semantic vector graphs.",
      expertise: ["Multi-Tenant RAG", "Vector Graphs", "LLM Quantization", "eBPF Telemetry"],
      metric: { value: "1.5ms", label: "Real-Time Vector Inference" },
      icon: Bot,
    },
    {
      id: "growth-lead",
      name: "Priya Nair",
      role: "Head of Growth & Performance",
      squad: "Search Dominance & CRO Funnels",
      image: "/images/team/team_growth_lead.jpg",
      bio: "Data-driven marketing strategist managing algorithmic search dominance, programmatic SEO engines, and compounding multi-million dollar ad spend.",
      expertise: ["Programmatic SEO", "Paid Meta/Google", "Funnel Analytics", "Conversion Rate"],
      metric: { value: "8.04x", label: "Audited Average ROAS Lift" },
      icon: TrendingUp,
    },
  ];

  const cultureValues = [
    {
      icon: Zap,
      number: "01",
      title: "Zero-Fluff Engineering",
      desc: "We measure architecture strictly by uptime, conversion rate lift, and sub-millisecond execution — never by buzzwords.",
    },
    {
      icon: Flame,
      number: "02",
      title: "Integrated DNA",
      desc: "Engineers, 3D artists, and marketers collaborate under one roof. No fragmented handoffs, no lost context.",
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "Relentless Craft",
      desc: "Obsession with microscopic detail: 60 FPS spatial animations, fluid typographic scales, and pixel-precise interfaces.",
    },
    {
      icon: Heart,
      number: "04",
      title: "Radical Ownership",
      desc: "Every squad lead takes holistic responsibility for the client's commercial victory from initial sprint to long-term scale.",
    },
  ];

  const filteredSquad =
    activeTab === "all"
      ? squadLeaders
      : squadLeaders.filter((m) => {
          if (activeTab === "engineering") return m.id === "cto";
          if (activeTab === "creative") return m.id === "design-lead";
          if (activeTab === "ai") return m.id === "ai-lead";
          if (activeTab === "growth") return m.id === "growth-lead";
          return true;
        });

  return (
    <section id="team-culture" className={`relative w-full ${className}`}>
      {/* Ambient Cosmic Background Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-[#FFD400]/4 blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[450px] bg-[#c59a58]/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* =========================================================================
          SECTION HEADER
          ========================================================================= */}
      <div className="mb-14 sm:mb-18 border-b border-white/10 pb-8 sm:pb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4">
          <Users className="w-3.5 h-3.5" />
          <span>10.5 TEAM &amp; CULTURE // ARCHITECTURAL MINDS</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-syne)] font-bold text-white tracking-tight leading-[1.08] uppercase">
              THE MINDS BEHIND THE{" "}
              <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.35)]">
                DIGITAL ARCHITECTURE.
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-md">
            Uniting 60+ full-stack software engineers, spatial 3D designers, AI researchers, and performance marketers driven by a shared standard of perfection.
          </p>
        </div>
      </div>

      {/* =========================================================================
          1. FOUNDER & OWNER SPOTLIGHT (UNIQUE EDITORIAL COMMAND CARD)
          ========================================================================= */}
      <div className="mb-20">
        <div className="rounded-[32px] bg-gradient-to-br from-[#0e1017] via-[#090b10] to-[#121520] border border-[#FFD400]/30 p-8 sm:p-12 lg:p-14 shadow-[0_20px_70px_rgba(0,0,0,0.85)] relative overflow-hidden group">
          {/* Top Amber Radiant Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD400] to-transparent shadow-[0_0_20px_#FFD400]" />

          {/* Background Sci-Fi Grid lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Left: Founder Portrait with Cyber Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square max-w-[420px] mx-auto rounded-2xl overflow-hidden border-2 border-white/15 group-hover:border-[#FFD400]/60 transition-all duration-700 shadow-2xl">
                <Image
                  src="/images/team/founder_ceo.jpg"
                  alt="Siddharth Rao — Founder & CEO"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />

                {/* Founder Telemetry Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/15 p-3 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#FFD400] font-bold block">
                      EXECUTIVE LEADERSHIP
                    </span>
                    <span className="text-xs font-mono text-white font-medium">
                      FOUNDER &amp; MANAGING DIRECTOR
                    </span>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                </div>
              </div>

              {/* Corner Cyber Accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#FFD400]" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#FFD400]" />
            </div>

            {/* Right: Founder Information & Executive Conviction */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>FOUNDER &amp; CHIEF EXECUTIVE OFFICER</span>
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold text-white uppercase tracking-tight">
                  SIDDHARTH RAO
                </h3>
                <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  Visionary Technologist • Digital Product Architect • Venture Advisor
                </p>
              </div>

              {/* Founder's Philosophy Quote */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#FFD400] py-2 space-y-3 bg-white/[0.02] p-5 rounded-r-xl">
                <Quote className="w-8 h-8 text-[#FFD400]/40 absolute -top-3 -left-3 fill-current" />
                <p className="text-sm sm:text-base text-neutral-200 font-light italic leading-relaxed">
                  &ldquo;Software is no longer merely infrastructure; it is the physical space where your enterprise reputation and client relationships are created. We founded RnD Technosoft to forever eliminate the compromise between elite deep-tech engineering and category-defining visual beauty.&rdquo;
                </p>
                <span className="text-xs font-mono text-[#FFD400] font-medium block">
                  — Siddharth Rao, Founder &amp; CEO
                </span>
              </div>

              {/* 3 Executive Pillars / Stats */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/10">
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-white">
                    12+
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-neutral-400 block uppercase leading-tight">
                    Years Tech Leadership
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-[#FFD400]">
                    250+
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-neutral-400 block uppercase leading-tight">
                    Shipped Global Systems
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-white">
                    100%
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-neutral-400 block uppercase leading-tight">
                    In-House Squads
                  </span>
                </div>
              </div>

              {/* Founder Connect Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <CyberButton href="/contact-us" size="md">
                  REQUEST EXECUTIVE CONSULTATION
                </CyberButton>
                <div className="flex items-center gap-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#FFD400] hover:text-[#FFD400] flex items-center justify-center transition-colors text-white/80"
                    aria-label="Founder LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:contact@rndtechnosoft.com"
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#FFD400] hover:text-[#FFD400] flex items-center justify-center transition-colors text-white/80"
                    aria-label="Founder Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. LEADERSHIP & AUTONOMOUS SQUADS (DISTINCT INDIAN FACES & DISCIPLINES)
          ========================================================================= */}
      <div className="mb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
              SPECIALIZED DISCIPLINE LEADERSHIP
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-1">
              Autonomous Squad Leads
            </h3>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "ALL SQUADS" },
              { id: "engineering", label: "ENGINEERING" },
              { id: "creative", label: "3D & DESIGN" },
              { id: "ai", label: "COGNITIVE AI" },
              { id: "growth", label: "GROWTH & SEO" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#FFD400] text-black font-bold shadow-[0_0_15px_rgba(255,212,0,0.35)]"
                    : "bg-white/[0.04] text-neutral-300 border border-white/10 hover:border-white/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Specialized Squad Leads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSquad.map((member) => {
            const Icon = member.icon;
            return (
              <div
                key={member.id}
                className="group rounded-2xl bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(255,212,0,0.15)]"
              >
                <div>
                  {/* Member Photo Frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/60">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-transparent to-transparent pointer-events-none" />

                    {/* Squad Beacon Icon */}
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#FFD400]">
                      <Icon className="w-4 h-4" />
                    </div>

                    {/* Live Metric Badge */}
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/85 backdrop-blur-md border border-[#FFD400]/40 text-right">
                      <span className="text-xs font-mono font-bold text-[#FFD400] block leading-none">
                        {member.metric.value}
                      </span>
                      <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-tighter">
                        {member.metric.label}
                      </span>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="p-5 space-y-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#FFD400] font-bold block">
                        {member.squad}
                      </span>
                      <h4 className="text-lg font-[family-name:var(--font-syne)] font-bold text-white uppercase group-hover:text-[#FFD400] transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-xs font-mono text-neutral-400">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-xs text-neutral-300 font-light leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {member.expertise.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[9px] font-mono bg-white/[0.03] border border-white/5 text-neutral-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span className="text-[#FFD400] font-bold">VERIFIED LEAD</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Active Squad</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          3. WORKPLACE CULTURE & CORE ETHOS (COLLABORATIVE STUDIO + 4 VALUES)
          ========================================================================= */}
      <div>
        <div className="rounded-[32px] bg-[#0c0e14] border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Studio Collaboration Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl group/studio">
                <Image
                  src="/images/agency_team_studio.jpg"
                  alt="RnD Technosoft Creative Studio Collaboration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover/studio:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 bg-black/85 backdrop-blur-md border border-white/15 p-3 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#FFD400] font-bold block">
                      IN-HOUSE INNOVATION LAB
                    </span>
                    <span className="text-xs font-mono text-white">
                      Cross-Discipline Sprint Rooms
                    </span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
                </div>
              </div>
            </div>

            {/* Right: 4 Core Workplace Culture Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center gap-2">
                  <Flame className="w-3.5 h-3.5" />
                  <span>INTERNAL STANDARD OF EXCELLENCE</span>
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-1">
                  How We Think &amp; Build
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cultureValues.map((val) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={val.number}
                      className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#FFD400]/40 transition-colors space-y-2 group/val"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-lg bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] group-hover/val:bg-[#FFD400] group-hover/val:text-black transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono text-neutral-500 font-bold">
                          {val.number}
                        </span>
                      </div>
                      <h4 className="text-base font-[family-name:var(--font-syne)] font-bold text-white uppercase group-hover/val:text-[#FFD400] transition-colors">
                        {val.title}
                      </h4>
                      <p className="text-xs text-neutral-300 font-light leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
