"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import CyberButton from "@/components/CyberButton";
import ContactCastBanner from "@/components/ContactCastBanner";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Calendar,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  Globe,
  Radio,
  FileText,
  Lock,
  Layers,
  Cpu,
  TrendingUp,
  Palette,
  Camera,
  Bot,
} from "lucide-react";

export default function ContactUsPage() {
  // Form State
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Web & Spatial 3D",
  ]);
  const [budgetTier, setBudgetTier] = useState<string>("$25k - $50k");
  const [timeline, setTimeline] = useState<string>("1 - 3 Months");
  const [needsNDA, setNeedsNDA] = useState<boolean>(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    brief: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const servicesList = [
    { name: "Web & Spatial 3D", icon: Cpu },
    { name: "Enterprise Cloud & SaaS", icon: Layers },
    { name: "Search Dominance & SEO", icon: TrendingUp },
    { name: "Category Brand Identity", icon: Palette },
    { name: "8K Cinema & Media", icon: Camera },
    { name: "Autonomous AI Systems", icon: Bot },
  ];

  const budgetOptions = [
    "$10k - $25k",
    "$25k - $50k",
    "$50k - $100k",
    "$100k+ (Enterprise)",
  ];

  const timelineOptions = [
    "Immediate (< 30 days)",
    "1 - 3 Months",
    "3 - 6 Months",
    "Long-Term Partnership",
  ];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@rndtechnosoft.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const globalHubs = [
    {
      city: "Zurich / London",
      region: "European Hub",
      tz: "CET (UTC+1)",
      status: "ACTIVE // 09:00 - 18:00",
      address: "Bahnhofstrasse 28, 8001 Zürich, Switzerland",
      coords: "47.3769° N, 8.5417° E",
    },
    {
      city: "San Francisco",
      region: "North American Hub",
      tz: "PST (UTC-8)",
      status: "ACTIVE // 08:00 - 17:00",
      address: "555 Mission St, San Francisco, CA 94105, USA",
      coords: "37.7891° N, 122.3999° W",
    },
    {
      city: "Mumbai",
      region: "Asia Tech Campus",
      tz: "IST (UTC+5:30)",
      status: "ACTIVE // 09:30 - 19:30",
      address: "Bandra Kurla Complex, Mumbai, Maharashtra 400051",
      coords: "19.0600° N, 72.8656° E",
    },
  ];

  const securityProtocols = [
    {
      number: "01",
      title: "24-Hour Architect SLA",
      desc: "Every brief is reviewed directly by a Principal Architect with a preliminary technical architecture outline delivered within 24 hours.",
      icon: Clock,
    },
    {
      number: "02",
      title: "Mutual NDA Standard",
      desc: "We routinely execute bilateral non-disclosure agreements before reviewing confidential codebases, data schematics, or strategic IP.",
      icon: Lock,
    },
    {
      number: "03",
      title: "100% Code & IP Transfer",
      desc: "Zero vendor lock-in. Full ownership of repository commits, design assets, and cloud configurations transfers to your enterprise upon delivery.",
      icon: ShieldCheck,
    },
    {
      number: "04",
      title: "Fixed Sprint Milestones",
      desc: "Predictable agile delivery with transparent sprint goals, staging deployments, and verified sub-second performance benchmarks.",
      icon: CheckCircle2,
    },
  ];

  const faqs = [
    {
      q: "How quickly can RnD Technosoft assemble and deploy a dedicated squad?",
      a: "For prioritized enterprise sprints, our core engineering and design pods deploy within 5 to 10 business days following the bilateral architecture and scope agreement.",
    },
    {
      q: "Can you audit, refactor, and scale an existing production codebase?",
      a: "Yes. Approximately 40% of our engagements involve modernizing legacy stacks, refactoring monoliths into high-speed Next.js headless architectures, and optimizing cloud performance.",
    },
    {
      q: "What engagement models do you support?",
      a: "We offer fixed-scope milestone sprints for greenfield product builds, dedicated embedded engineering pods for ongoing velocity, and performance-aligned growth partnerships.",
    },
    {
      q: "How is proprietary intellectual property (IP) protected?",
      a: "All work product, custom algorithms, spatial assets, and code commits are developed under full work-for-hire provisions with complete transfer of IP ownership to your company.",
    },
    {
      q: "Do you provide ongoing post-launch SLA and cloud uptime guarantees?",
      a: "Yes. We provide 24/7 incident response, proactive performance monitoring, sub-second latency optimization, and 99.9% uptime SLA maintenance tiers.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black font-sans overflow-x-clip">
      {/* Interactive Galactic Particle Starfield Canvas */}
      <SpaceBackground />

      {/* Global Navbar */}
      <Navbar />

      {/* Architectural Contact Us Banner (Matching About Us Banner) */}
      <ContactCastBanner />

      {/* Ambient Radial Nebulae */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-48 w-96 h-[600px] bg-[#FFD400]/12 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 -right-48 w-96 h-[600px] bg-[#FFD400]/12 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 left-1/3 w-[600px] h-64 bg-[#FFD400]/8 rounded-full blur-[150px]" />
      </div>

      <main className="relative z-10 pt-16 sm:pt-20 pb-24">
        {/* =========================================================================
            1. HERO ATMOSPHERE & TELEMETRY HEADER
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-16 sm:mb-20">
          <div className="max-w-4xl">
            {/* Status Telemetry Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-6 shadow-[0_0_25px_rgba(255,212,0,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>DIRECT ENCRYPTED COMMS // STATUS: ONLINE</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-5xl font-[family-name:var(--font-syne)] font-black tracking-tight uppercase text-white leading-[1.05] mb-6">
              LET&apos;S ARCHITECT YOUR{" "}
              <span className="bg-gradient-to-r from-white via-[#ffe34d] to-[#FFD400] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,212,0,0.35)]">
                DEFINING ADVANTAGE.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl">
              Whether you are architecting a category-defining spatial 3D web platform, scaling an enterprise cloud product, or directing high-impact commercial cinema — initiate a brief with our Principal Architects today.
            </p>
          </div>

          {/* Quick Telemetry Hub Bar */}
          <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs text-neutral-400">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <span className="text-white font-bold block">ZURICH / LONDON</span>
                <span className="text-[10px] text-neutral-400">CET // 09:00 - 18:00</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <span className="text-white font-bold block">SAN FRANCISCO</span>
                <span className="text-[10px] text-neutral-400">PST // 08:00 - 17:00</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <span className="text-white font-bold block">MUMBAI CAMPUS</span>
                <span className="text-[10px] text-neutral-400">IST // 09:30 - 19:30</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. THE COMMAND TERMINAL & DIRECT COMMS GRID (SPLIT SECTION)
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-24 sm:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* -------------------------------------------------------------------
                LEFT COLUMN: DIRECT SECURE CHANNELS & EXECUTIVE DISCOVERY (5 cols)
                ------------------------------------------------------------------- */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Card 1: Direct Channels */}
              <div className="rounded-[32px] border border-white/10 hover:border-[#FFD400]/50 bg-[#0d0e14]/90 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden group transition-all duration-500">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#FFD400]/10 rounded-full blur-[50px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-[#FFD400] animate-pulse" />
                    <span className="text-xs font-mono tracking-widest uppercase text-white font-bold">
                      DIRECT COMMS
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-[#FFD400]">
                    PRIORITY 01
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Email Channel */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FFD400]/40 transition-colors group/item">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                        OFFICIAL ENQUIRY EMAIL
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="text-xs text-neutral-400 hover:text-[#FFD400] transition-colors flex items-center gap-1 font-mono"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">COPIED</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>COPY</span>
                          </>
                        )}
                      </button>
                    </div>
                    <a
                      href="mailto:contact@rndtechnosoft.com"
                      className="text-base sm:text-lg font-[family-name:var(--font-syne)] font-bold text-white group-hover/item:text-[#FFD400] transition-colors block"
                    >
                      contact@rndtechnosoft.com
                    </a>
                  </div>

                  {/* Telephone Channel */}
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#FFD400]/40 transition-colors group/item">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                      DIRECT HOTLINE (GLOBAL)
                    </span>
                    <a
                      href="tel:+919876543210"
                      className="text-base sm:text-lg font-[family-name:var(--font-syne)] font-bold text-white group-hover/item:text-[#FFD400] transition-colors flex items-center justify-between"
                    >
                      <span>+91 (0) 98765 43210</span>
                      <Phone className="w-4 h-4 text-[#FFD400]" />
                    </a>
                  </div>
                </div>

                {/* Response Guarantee Callout */}
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3 text-xs text-neutral-300">
                  <ShieldCheck className="w-5 h-5 text-[#FFD400] shrink-0" />
                  <p className="font-light text-[11px] leading-relaxed">
                    Guaranteed response within <strong className="text-white">24 hours</strong> with mutual NDA & preliminary architectural feasibility.
                  </p>
                </div>
              </div>

              {/* Card 2: Executive Strategy Session */}
              <div className="rounded-[32px] border border-[#FFD400]/30 bg-gradient-to-br from-[#12141c]/95 via-[#0c0d12]/95 to-[#08090d]/95 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FFD400] font-bold uppercase tracking-widest mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>EXECUTIVE DISCOVERY</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-syne)] font-bold uppercase text-white mb-2 leading-tight">
                  Schedule A 30-Min Strategy Call
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed font-light mb-6">
                  Meet directly with our Founding Technical Directors to evaluate architectural trade-offs, feasibility, and deployment schedules.
                </p>

                <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 mb-6 space-y-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400]" />
                    <span>No pitch decks — pure architectural review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400]" />
                    <span>Preliminary tech stack & timeline evaluation</span>
                  </div>
                </div>

                <CyberButton href="mailto:contact@rndtechnosoft.com?subject=Book%20Architecture%20Call" variant="gold" size="md" fullWidth>
                  REQUEST STRATEGY SESSION
                </CyberButton>
              </div>

              {/* Card 3: Global Hubs Compact Overview */}
              <div className="rounded-[28px] border border-white/10 bg-[#0d0e14]/90 backdrop-blur-xl p-6 sm:p-7 shadow-xl">
                <div className="text-xs font-mono uppercase tracking-widest text-[#FFD400] font-bold mb-4 flex items-center justify-between">
                  <span>WORLDWIDE LOCATIONS</span>
                  <Globe className="w-4 h-4 text-[#FFD400]" />
                </div>

                <div className="space-y-4">
                  {globalHubs.map((hub, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-white font-[family-name:var(--font-syne)]">
                          {hub.city}
                        </span>
                        <span className="text-[10px] font-mono text-[#FFD400]">
                          {hub.tz}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 font-light mb-1.5">
                        {hub.address}
                      </p>
                      <span className="text-[9px] font-mono text-neutral-500 block">
                        {hub.coords}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* -------------------------------------------------------------------
                RIGHT COLUMN: INTERACTIVE CYBER MISSION BRIEF CONFIGURATOR (7 cols)
                ------------------------------------------------------------------- */}
            <div className="lg:col-span-7">
              <div className="rounded-[36px] border border-[#FFD400]/30 hover:border-[#FFD400]/60 bg-[#0d0e14]/95 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative overflow-hidden transition-all duration-500">
                {/* Golden Corner Gradient Flash */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD400]/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD400] to-transparent shadow-[0_0_20px_#FFD400]" />

                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FFD400] font-bold uppercase tracking-widest mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>MISSION CONFIGURATOR // TERMINAL</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold uppercase text-white tracking-tight">
                      Configure Your Project Brief
                    </h2>
                  </div>
                  <span className="hidden sm:inline-block text-[10px] font-mono px-3 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-400">
                    STEP-BY-STEP INTEL
                  </span>
                </div>

                {submitted ? (
                  <div className="p-8 sm:p-12 rounded-3xl bg-[#FFD400]/10 border border-[#FFD400]/40 text-center animate-in fade-in zoom-in-95 duration-500">
                    <div className="w-16 h-16 rounded-full bg-[#FFD400] text-black flex items-center justify-center mx-auto mb-5 shadow-[0_0_35px_rgba(255,212,0,0.5)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-mono text-[#FFD400] font-bold uppercase tracking-widest block mb-2">
                      TRANSMISSION RECEIVED // ENCRYPTED
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-white mb-3">
                      Your Mission Brief Is Under Review
                    </h3>
                    <p className="text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed mb-6 font-light">
                      Our Lead Technical Architect is evaluating your scope requirements. We will transmit an initial technical feasibility summary and Bilateral NDA to <strong className="text-white">{formData.email || "your email"}</strong> within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-white/20 hover:border-[#FFD400] text-xs font-mono uppercase text-white hover:text-[#FFD400] transition-colors"
                    >
                      Transmit Another Brief
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Step 1: Select Service Disciplines */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-xs font-mono text-neutral-300 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                          <span>01 // SELECT TARGET CAPABILITIES</span>
                          <span className="text-[#FFD400]">*</span>
                        </label>
                        <span className="text-[10px] font-mono text-neutral-500">
                          MULTI-SELECT ALLOWED
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {servicesList.map((svc) => {
                          const Icon = svc.icon;
                          const isSelected = selectedServices.includes(svc.name);
                          return (
                            <button
                              key={svc.name}
                              type="button"
                              onClick={() => toggleService(svc.name)}
                              className={`p-3 rounded-2xl border text-left transition-all duration-300 flex items-center gap-2.5 text-xs font-medium ${
                                isSelected
                                  ? "bg-[#FFD400] text-black border-[#FFD400] font-bold shadow-[0_0_20px_rgba(255,212,0,0.35)] scale-[1.02]"
                                  : "bg-white/[0.03] text-neutral-300 border-white/10 hover:border-[#FFD400]/40 hover:text-white"
                              }`}
                            >
                              <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-black" : "text-[#FFD400]"}`} />
                              <span className="line-clamp-1">{svc.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 2: Target Budget Tier */}
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 uppercase tracking-widest font-semibold mb-3">
                        02 // ESTIMATED INVESTMENT HORIZON
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {budgetOptions.map((opt) => {
                          const isSelected = budgetTier === opt;
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setBudgetTier(opt)}
                              className={`py-2.5 px-3 rounded-xl border text-center font-mono text-xs transition-all duration-300 ${
                                isSelected
                                  ? "bg-[#FFD400] text-black border-[#FFD400] font-bold shadow-[0_0_15px_rgba(255,212,0,0.3)]"
                                  : "bg-white/[0.03] text-neutral-300 border-white/10 hover:border-white/25 hover:text-white"
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 3: Target Timeline */}
                    <div>
                      <label className="block text-xs font-mono text-neutral-300 uppercase tracking-widest font-semibold mb-3">
                        03 // TARGET DEPLOYMENT TIMELINE
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {timelineOptions.map((time) => {
                          const isSelected = timeline === time;
                          return (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setTimeline(time)}
                              className={`py-2.5 px-3 rounded-xl border text-center font-mono text-xs transition-all duration-300 ${
                                isSelected
                                  ? "bg-[#FFD400] text-black border-[#FFD400] font-bold shadow-[0_0_15px_rgba(255,212,0,0.3)]"
                                  : "bg-white/[0.03] text-neutral-300 border-white/10 hover:border-white/25 hover:text-white"
                              }`}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 4: Contact & Brief Inputs */}
                    <div className="space-y-4 pt-2 border-t border-white/10">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Alex Thorne"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFD400] focus:ring-1 focus:ring-[#FFD400] transition-colors text-sm font-sans"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="alex@enterprise.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFD400] focus:ring-1 focus:ring-[#FFD400] transition-colors text-sm font-sans"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Apex Dynamics Ltd."
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFD400] focus:ring-1 focus:ring-[#FFD400] transition-colors text-sm font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1.5">
                          Project Brief & Technical Ambition *
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Describe the platform or challenge: goals, existing stack or links, target user metrics, and any specific architectural constraints..."
                          value={formData.brief}
                          onChange={(e) =>
                            setFormData({ ...formData, brief: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-[#FFD400] focus:ring-1 focus:ring-[#FFD400] transition-colors text-sm font-sans leading-relaxed"
                        />
                      </div>

                      {/* NDA Toggle */}
                      <label className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={needsNDA}
                          onChange={(e) => setNeedsNDA(e.target.checked)}
                          className="w-4 h-4 rounded border-white/20 text-[#FFD400] focus:ring-[#FFD400] bg-black accent-[#FFD400]"
                        />
                        <span className="text-xs text-neutral-300 font-light">
                          Transmit Mutual Non-Disclosure Agreement (NDA) prior to technical briefing review.
                        </span>
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-2xl bg-[#FFD400] hover:bg-[#ffe34d] text-black font-[family-name:var(--font-syne)] font-bold text-sm sm:text-base uppercase tracking-wider transition-all duration-300 shadow-[0_0_35px_rgba(255,212,0,0.35)] hover:shadow-[0_0_50px_rgba(255,212,0,0.5)] flex items-center justify-center gap-2 group disabled:opacity-70 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            <span>ENCRYPTING & TRANSMITTING BRIEF...</span>
                          </>
                        ) : (
                          <>
                            <span>TRANSMIT MISSION BRIEF</span>
                            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            3. ENTERPRISE TRUST PROTOCOLS
            ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 mb-24 sm:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-[#FFD400] uppercase mb-4 bg-[#FFD400]/10 border border-[#FFD400]/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>ONBOARDING GUARANTEES // COMPLIANCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold uppercase text-white tracking-tight">
              Enterprise Trust Protocols
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityProtocols.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-[#0d0e14]/90 border border-white/10 hover:border-[#FFD400]/60 transition-all duration-300 hover:-translate-y-1 group shadow-xl hover:shadow-[0_0_35px_rgba(255,212,0,0.18)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] group-hover:bg-[#FFD400] group-hover:text-black transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#FFD400]">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-[family-name:var(--font-syne)] font-bold text-white mb-2 group-hover:text-[#FFD400] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            4. FREQUENTLY ASKED QUESTIONS ACCORDION
            ========================================================================= */}
        <section className="max-w-4xl mx-auto px-4 sm:px-8 mb-20">
          <div className="text-center mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-[#FFD400] uppercase block mb-2">
              CLARITY // FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-syne)] font-bold uppercase text-white tracking-tight">
              Common Onboarding Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#0d0e14] border-[#FFD400]/50 shadow-[0_0_25px_rgba(255,212,0,0.1)]"
                      : "bg-[#0a0a0e]/80 border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-[family-name:var(--font-syne)] font-bold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FFD400] transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* Global Footer */}
      <RnDFooter />
    </div>
  );
}
