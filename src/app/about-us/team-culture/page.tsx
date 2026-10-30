import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Users,
  Sparkles,
  Quote,
  ShieldCheck,
  Zap,
  Flame,
  Heart,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Cpu,
  Palette,
  Bot,
  TrendingUp,
  Award,
  Layers,
  Code2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import CursorGlow from "@/components/CursorGlow";
import RocketCursor from "@/components/RocketCursor";
import PageBanner from "@/components/PageBanner";
import CyberButton from "@/components/CyberButton";
import WaveText from "@/components/WaveText";

export const metadata: Metadata = {
  title: "Team & Culture | RnD Technosoft Leadership & Squads",
  description:
    "Meet the visionary leadership, specialized engineering squads, 3D spatial designers, and growth architects driving digital transformation at RnD Technosoft.",
};

export default function TeamCulturePage() {
  const squadLeaders = [
    {
      id: "cto",
      name: "Rohan Sharma",
      role: "Chief Technology Officer",
      squad: "Engineering & Cloud Infrastructure",
      image: "/images/team/team_cto.jpg",
      bio: "Former Lead Infrastructure Architect overseeing distributed systems, Next.js 15 App Router engines, and sub-millisecond cloud pipelines. Expert in Kubernetes cluster orchestration and edge-compute architectures.",
      expertise: ["Distributed Systems", "Next.js 15", "Kubernetes", "Rust Microservices", "Cloud Security"],
      metric: { value: "<5ms", label: "Average Global API Latency" },
    },
    {
      id: "design-lead",
      name: "Ananya Sen",
      role: "Head of Product & Spatial Design",
      squad: "Spatial WebGL & Design Systems",
      image: "/images/team/team_design_lead.jpg",
      bio: "Award-winning creative director blending cinematic typography, spatial 3D interactions, and modular enterprise design token systems. Directs real-time WebGL canvas graphics and immersive brand environments.",
      expertise: ["Three.js WebGL", "Spatial UI/UX", "Motion Design", "Design Systems", "Kinematics"],
      metric: { value: "60 FPS", label: "Smooth WebGL Canvas Render" },
    },
    {
      id: "ai-lead",
      name: "Vikramaditya Patel",
      role: "Head of AI Architecture",
      squad: "Cognitive AI & Vector Graph",
      image: "/images/team/team_ai_lead.jpg",
      bio: "Deep learning specialist architecting enterprise multi-tenant RAG pipelines, fine-tuned domain LLM agents, and semantic vector graphs. Leading real-time cluster inference and automated model governance.",
      expertise: ["Multi-Tenant RAG", "Vector Graphs", "LLM Quantization", "eBPF Telemetry", "Agent Swarms"],
      metric: { value: "1.5ms", label: "Real-Time Vector Inference" },
    },
    {
      id: "growth-lead",
      name: "Priya Nair",
      role: "Head of Growth & Performance",
      squad: "Search Dominance & CRO Funnels",
      image: "/images/team/team_growth_lead.jpg",
      bio: "Data-driven marketing strategist managing algorithmic search dominance, programmatic SEO engines, and compounding multi-million dollar ad spend across high-value global B2B and consumer niches.",
      expertise: ["Programmatic SEO", "Paid Meta/Google", "Funnel Analytics", "Conversion Rate", "Attribution"],
      metric: { value: "8.04x", label: "Audited Average ROAS Lift" },
    },
  ];

  const engineeringSquads = [
    {
      title: "Core Web & Cloud OS",
      lead: "Rohan Sharma",
      size: "18 Engineers",
      focus: "Next.js 15 App Router, React Server Components, Distributed Rust/Go microservices, and global edge CDN caching.",
      technologies: ["Next.js 15", "TypeScript", "Go", "Rust", "PostgreSQL", "Docker", "Kubernetes"],
    },
    {
      title: "Spatial 3D & Creative Lab",
      lead: "Ananya Sen",
      size: "14 Designers & 3D Artists",
      focus: "Hardware-accelerated WebGL shaders, Three.js spatial digital twins, blender pipelines, and interactive kinetic UI tokens.",
      technologies: ["Three.js", "WebGL", "GLSL Shaders", "Blender 3D", "Figma Tokens", "GSAP ScrollTrigger"],
    },
    {
      title: "AI Research & Vector Core",
      lead: "Vikramaditya Patel",
      size: "12 ML Scientists",
      focus: "Multi-tenant vector indexing, custom fine-tuned domain models, autonomous tool-calling agent networks, and cluster telemetry.",
      technologies: ["PyTorch", "Qdrant", "vLLM", "LangGraph", "FastAPI", "Prometheus"],
    },
    {
      title: "Growth, Search & Performance",
      lead: "Priya Nair",
      size: "16 Growth Strategists",
      focus: "Programmatic search rank domination, real-time keyword telemetry, high-ROI performance funnels, and creative ad cutdowns.",
      technologies: ["Programmatic SEO", "Google Ads", "Meta Ads", "GA4 Analytics", "Mixpanel", "Looker"],
    },
  ];

  const culturePillars = [
    {
      number: "01",
      title: "Zero-Fluff Engineering",
      desc: "We measure architecture strictly by uptime, conversion rate lift, and sub-millisecond execution — never by buzzwords or vanity metrics.",
    },
    {
      number: "02",
      title: "Integrated DNA",
      desc: "Engineers, 3D artists, and marketers collaborate under one roof. No fragmented handoffs, no lost context, and no friction.",
    },
    {
      number: "03",
      title: "Relentless Craft",
      desc: "Obsession with microscopic detail: 60 FPS spatial animations, fluid typographic scales, and pixel-precise interfaces that amaze users.",
    },
    {
      number: "04",
      title: "Radical Ownership",
      desc: "Every squad lead takes holistic responsibility for the client's commercial victory from initial sprint to long-term scale.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black font-sans">
      <RocketCursor />
      <CursorGlow />
      <SpaceBackground />
      <Navbar />

      {/* Page Banner with Typewriter Title & Breadcrumbs */}
      <PageBanner
        title="TEAM & CULTURE"
        breadcrumb="TEAM & CULTURE"
        parentBreadcrumb={{ label: "ABOUT US", href: "/about-us" }}
      />

      {/* Overlapping Main Content */}
      <main className="relative z-20 w-full -mt-10 sm:-mt-14 md:-mt-18 rounded-t-[32px] sm:rounded-t-[44px] bg-transparent border-t border-white/10 shadow-[0_-25px_60px_rgba(0,0,0,0.85)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-24">

          {/* =========================================================================
              1. FOUNDER & OWNER SPOTLIGHT
              ========================================================================= */}
          <section>
            <div className="rounded-[32px] bg-black/30 backdrop-blur-md border border-[#FFD400]/30 hover:border-[#FFD400]/50 p-8 sm:p-12 lg:p-14 shadow-[0_20px_70px_rgba(0,0,0,0.5)] relative overflow-hidden group transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD400] to-transparent shadow-[0_0_20px_#FFD400]" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
                {/* Left: Clean Founder Portrait */}
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
                  </div>

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
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold text-white uppercase tracking-tight">
                      SIDDHARTH RAO
                    </h1>
                    <p className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                      Founder &amp; Managing Director • Digital Product Architect
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
                        Years Leadership
                      </span>
                    </div>
                    <div className="space-y-1">
                      <span className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-[#FFD400]">
                        250+
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono text-neutral-400 block uppercase leading-tight">
                        Shipped Systems
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

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <CyberButton href="/contact-us" size="md">
                      REQUEST EXECUTIVE CONSULTATION
                    </CyberButton>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              2. SQUAD LEADS ROSTER (CLEAN CARDS: NAME & DESIGNATION ONLY)
              ========================================================================= */}
          <section>
            <div className="mb-10">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
                DISCIPLINE LEADERSHIP
              </span>
              <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-1">
                Autonomous Squad Leads
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {squadLeaders.map((member) => (
                <div
                  key={member.id}
                  className="group rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#FFD400]/50 transition-all duration-500 overflow-hidden shadow-xl hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(255,212,0,0.15)] flex flex-col"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-transparent">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                      className="object-cover object-top group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  <div className="p-5 text-center sm:text-left">
                    <h3 className="text-lg font-[family-name:var(--font-syne)] font-bold text-white uppercase group-hover:text-[#FFD400] transition-colors tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400 mt-1 uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* =========================================================================
              3. DEEP-DIVE SQUAD CAPABILITIES
              ========================================================================= */}
          <section className="border-t border-white/10 pt-16">
            <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold">
                  CROSS-FUNCTIONAL DELIVERY
                </span>
                <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-1">
                  Autonomous Squad Structure
                </h2>
              </div>
              <p className="text-xs font-mono text-neutral-400">
                60+ In-House Specialists Deployed Across 4 Dedicated Squads
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {engineeringSquads.map((squad, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:border-[#FFD400]/40 transition-colors space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white uppercase">
                      {squad.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-mono text-[#FFD400] bg-[#FFD400]/10 border border-[#FFD400]/30">
                      {squad.size}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                    {squad.focus}
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-2">
                      Core Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {squad.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded text-[10px] font-mono bg-white/[0.04] border border-white/10 text-neutral-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* =========================================================================
              4. WORKPLACE CULTURE & ETHOS
              ========================================================================= */}
          <section className="border-t border-white/10 pt-16">
            <div className="rounded-[32px] bg-white/[0.02] backdrop-blur-md border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                    <Image
                      src="/images/agency_team_studio.jpg"
                      alt="RnD Technosoft Creative Studio Collaboration"
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover"
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

                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FFD400] font-semibold flex items-center gap-2">
                      <Flame className="w-3.5 h-3.5" />
                      <span>INTERNAL STANDARD OF EXCELLENCE</span>
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-syne)] font-bold text-white uppercase mt-1">
                      Our Workplace Ethos
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {culturePillars.map((val) => (
                      <div
                        key={val.number}
                        className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#FFD400]/40 transition-colors space-y-2"
                      >
                        <span className="text-xs font-mono text-[#FFD400] font-bold block">
                          {val.number} // PRINCIPLE
                        </span>
                        <h3 className="text-base font-[family-name:var(--font-syne)] font-bold text-white uppercase">
                          {val.title}
                        </h3>
                        <p className="text-xs text-neutral-300 font-light leading-relaxed">
                          {val.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              5. CAREER CALL TO ACTION
              ========================================================================= */}
          <section className="rounded-3xl border border-[#FFD400]/30 bg-black/40 backdrop-blur-md p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-[#FFD400] uppercase block">
                CAREERS &amp; CULTURE
              </span>
              <h2 className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold uppercase text-white tracking-tight">
                WANT TO JOIN OUR SQUAD OF <span className="text-[#FFD400]">VISIONARIES?</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xl">
                We are always hiring world-class Next.js engineers, Three.js 3D spatial artists, and growth strategists. Explore open roles in our mission control.
              </p>
            </div>

            <div className="shrink-0">
              <CyberButton href="/career" variant="gold" size="md">
                EXPLORE OPEN ROLES
              </CyberButton>
            </div>
          </section>

        </div>
      </main>

      <RnDFooter />
    </div>
  );
}
