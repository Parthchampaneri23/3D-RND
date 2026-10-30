"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Users,
  Clock,
  Sparkles,
  Layers,
  ChevronRight,
} from "lucide-react";

interface EngagementModel {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  isPopular?: boolean;
  idealFor: string;
  turnaround: string;
  sla: string;
  features: string[];
  specs: { label: string; value: string }[];
  ctaText: string;
  ctaHref: string;
}

const MODELS: EngagementModel[] = [
  {
    id: "project-sprint",
    badge: "FIXED SCOPE & TARGETED MILESTONES",
    title: "Project-Based Sprint",
    tagline: "Precision execution for clear-scope digital products & MVPs",
    description:
      "Ideal for well-defined builds, complete platform redesigns, or rapid-launch MVPs with fixed milestones, transparent schedules, and zero budget overruns.",
    idealFor: "Startups, specific product launches, headless migrations & redesigns",
    turnaround: "4 – 12 Weeks",
    sla: "Guaranteed Milestone Delivery",
    features: [
      "Fixed milestone pricing with zero hidden surcharges",
      "Dedicated Technical Architect & Project Lead",
      "Interactive Figma prototypes & spatial design systems",
      "Production-grade Next.js 15 & cloud deployment",
      "Comprehensive documentation & 100% IP code handover",
      "30-day post-launch warranty & hypercare support",
    ],
    specs: [
      { label: "Commitment", value: "Milestone-Based" },
      { label: "Velocity", value: "Bi-Weekly Demos" },
      { label: "IP Rights", value: "100% Client Owned" },
    ],
    ctaText: "START PROJECT SPRINT",
    ctaHref: "/contact-us?model=project-sprint",
  },
  {
    id: "dedicated-pod",
    badge: "MOST POPULAR // SCALABLE VELOCITY",
    title: "Dedicated Engineering Pod",
    tagline: "Autonomous, cross-functional squads seamlessly embedded into your team",
    description:
      "A complete plug-and-play team of senior architects, frontend engineers, cloud specialists, and UI/UX designers dedicated exclusively to your roadmap.",
    isPopular: true,
    idealFor: "Fast-growing scaleups, funded tech companies & enterprise innovation labs",
    turnaround: "Deploy in 5 Business Days",
    sla: "99.9% Sprint Velocity SLA",
    features: [
      "Pre-vetted senior squad: Tech Lead, Full-Stack, QA & Designer",
      "Direct integration into your Slack, GitHub, Jira & daily standups",
      "Dynamic resource scaling up or down based on release milestones",
      "Strict code review standards with automated CI/CD gating",
      "Timezone-aligned overlap with real-time pairing",
      "Continuous knowledge transfer & zero lock-in agreements",
    ],
    specs: [
      { label: "Squad Size", value: "3 – 8 Engineers" },
      { label: "Cadence", value: "Agile 2-Wk Sprints" },
      { label: "Billing", value: "Predictable Monthly" },
    ],
    ctaText: "RESERVE DEDICATED POD",
    ctaHref: "/contact-us?model=dedicated-pod",
  },
  {
    id: "growth-retainer",
    badge: "CONTINUOUS INNOVATION & PRIORITY SLA",
    title: "Enterprise Growth Retainer",
    tagline: "On-demand access to multi-disciplinary engineering & performance talent",
    description:
      "A flexible, proactive monthly partnership providing continuous feature enhancements, conversion rate optimization, technical SEO, and 24/7 mission-critical reliability.",
    idealFor: "Established brands, high-volume e-commerce & revenue-critical web apps",
    turnaround: "Immediate Onboarding",
    sla: "<15 Min Incident Response",
    features: [
      "Allocated monthly capacity across Dev, Design, SEO & Media",
      "24/7 infrastructure uptime monitoring & security patch management",
      "Continuous Core Web Vitals maintenance & speed audits",
      "Priority SLA queue with under 15-minute response for critical issues",
      "Quarterly executive strategy roadmaps & architecture reviews",
      "Unused hours roll-over options for flexible project surges",
    ],
    specs: [
      { label: "Availability", value: "24/7/365 Monitored" },
      { label: "Response SLA", value: "<15m Urgent" },
      { label: "Disciplines", value: "Full Agency Access" },
    ],
    ctaText: "INQUIRE FOR RETAINER",
    ctaHref: "/contact-us?model=growth-retainer",
  },
];

export default function ServiceEngagementModels() {
  const [selectedModel, setSelectedModel] = useState<string>("dedicated-pod");

  return (
    <section id="engagement-models" className="relative py-24 sm:py-32 scroll-mt-20">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#FFD400]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 bg-black/60 border border-[#FFD400]/40 text-[#FFD400] backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2.7 ENGAGEMENT MODELS // PARTNERSHIP FRAMEWORKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.02] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            STRUCTURED FOR YOUR <span className="text-[#FFD400]">SCALE &amp; VELOCITY</span>
          </h2>
          <p className="text-sm sm:text-base font-normal mt-4 leading-relaxed text-neutral-300">
            From focused product sprints to high-capacity dedicated engineering pods and long-term enterprise retainers, choose the collaboration model tailored to your roadmap.
          </p>
        </div>

        {/* 3-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MODELS.map((model) => {
            const isPopular = model.isPopular;
            const isSelected = selectedModel === model.id;

            return (
              <div
                key={model.id}
                onClick={() => setSelectedModel(model.id)}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 cursor-pointer ${
                  isPopular
                    ? "bg-[#0c0e16]/95 border-2 border-[#FFD400] shadow-[0_0_40px_rgba(255,212,0,0.18)] lg:-translate-y-2"
                    : "bg-[#090b10]/90 border border-white/10 hover:border-white/30 hover:bg-[#0c0e14]/95 shadow-xl"
                } backdrop-blur-xl`}
              >
                {/* Popular Highlight Ribbon */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-4 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-widest bg-[#FFD400] text-black shadow-[0_0_15px_#FFD400]">
                      ★ MOST REQUESTED PARTNERSHIP
                    </span>
                  </div>
                )}

                {/* Top Details */}
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono tracking-widest text-[#FFD400] px-2.5 py-1 rounded bg-[#FFD400]/10 border border-[#FFD400]/20 uppercase">
                      {model.badge}
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      {model.sla}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight uppercase mb-2 font-[family-name:var(--font-syne)]">
                    {model.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-[#FFD400] mb-3">
                    {model.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6">
                    {model.description}
                  </p>

                  {/* Quick Specs Grid */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 text-center">
                    {model.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex flex-col">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                          {spec.label}
                        </span>
                        <span className="text-xs font-bold text-white mt-0.5 truncate">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mb-2">
                      INCLUDED IN ARCHITECTURE
                    </div>
                    {model.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#FFD400] shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-neutral-200 font-light leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Block */}
                <div className="pt-6 border-t border-white/10">
                  <div className="mb-4 flex items-center justify-between text-xs text-neutral-400 font-mono">
                    <span>Turnaround / Launch:</span>
                    <span className="text-white font-bold">{model.turnaround}</span>
                  </div>

                  <Link href={model.ctaHref} className="block w-full">
                    <div
                      className={`group relative w-full inline-flex items-center justify-between rounded-full overflow-hidden transition-all duration-300 px-5 py-3 text-xs sm:text-sm font-mono font-bold tracking-[0.18em] uppercase ${
                        isPopular
                          ? "bg-[#FFD400] text-black hover:bg-[#ffe34d] shadow-[0_0_20px_rgba(255,212,0,0.35)]"
                          : "bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/15 hover:border-[#FFD400]/60"
                      }`}
                    >
                      <span className="relative z-10">{model.ctaText}</span>
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 ${
                          isPopular ? "bg-black/10 text-black" : "bg-white/10 text-[#FFD400]"
                        }`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Guarantee Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FFD400]" />
            <span>100% Non-Disclosure Agreements (NDA) Signed Upfront</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#FFD400]" />
            <span>Full Intellectual Property &amp; Git Repository Handover</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#FFD400]" />
            <span>Flexible Scaling With Zero Cancellation Penalties</span>
          </div>
        </div>
      </div>
    </section>
  );
}
