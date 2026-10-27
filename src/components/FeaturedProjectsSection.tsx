"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowUpRight, Maximize2, CheckCircle2, Globe2, Layers, Cpu } from "lucide-react";
import CyberButton from "@/components/CyberButton";

interface ProjectItem {
  id: string;
  category: string;
  tag: string;
  title: string;
  client: string;
  desc: string;
  image: string;
  metrics: { label: string; value: string }[];
  tech: string[];
  specs: string[];
}

function CyberCompassSvg() {
  return (
    <svg className="w-4 h-4 text-[#FFD400] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

function TelemetryDimensionSvg() {
  return (
    <svg className="w-4 h-4 text-[#FFD400] shrink-0 hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M3 6h18M3 18h18M7 6v12M17 6v12" />
    </svg>
  );
}

export default function FeaturedProjectsSection() {
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progressPercent, setProgressPercent] = useState(0);

  const projects: ProjectItem[] = [
    {
      id: "fintech",
      category: "software",
      tag: "FINTECH & CLOUD ARCHITECTURE",
      title: "Galactic Wealth Portfolio // Next-Gen Trading Engine",
      client: "Aura Capital Group",
      desc: "Ultra-low-latency financial analytics and distributed portfolio management dashboard processing $2.4B+ in daily asset telemetry with sub-millisecond execution.",
      image: "/images/project_fintech.jpg",
      metrics: [
        { label: "Execution Latency", value: "< 1.2ms" },
        { label: "Daily Telemetry", value: "$2.4B+" },
        { label: "Verified Uptime", value: "99.999%" },
      ],
      tech: ["Next.js 15", "WebSockets", "Rust Engine", "Tailwind CSS"],
      specs: [
        "Sub-millisecond WebSocket streaming orderbook",
        "Deterministic distributed ledger sync",
        "Biometric multi-sig cryptographic vault",
      ],
    },
    {
      id: "ai-core",
      category: "software",
      tag: "ENTERPRISE AI & NEURAL CLOUD",
      title: "OmniCore Neural Cloud // Autonomous Inference Network",
      client: "DeepSynthetix AI",
      desc: "Distributed multi-tenant AI orchestrator with fine-tuned RAG vector indexing, live PetaFLOPS monitoring, and automated cluster load-balancing.",
      image: "/images/project_ai.jpg",
      metrics: [
        { label: "Inference Speed", value: "1.5ms" },
        { label: "Active Nodes", value: "412 Clusters" },
        { label: "Compute Power", value: "89 PetaFLOPS" },
      ],
      tech: ["Python", "PyTorch", "Next.js", "Kubernetes", "Vector DB"],
      specs: [
        "Distributed hybrid vector graph search",
        "Multi-region GPU node orchestration",
        "Sub-2ms real-time stream tokenization",
      ],
    },
    {
      id: "ecommerce-3d",
      category: "web",
      tag: "SPATIAL 3D WEB & E-COMMERCE",
      title: "Aurora Spaceware // Photorealistic 3D Chronograph Visualizer",
      client: "Aurora Horology Geneva",
      desc: "Real-time 3D spatial web product configurator featuring PBR shader materials, dynamic studio illumination, and frictionless headless checkout.",
      image: "/images/project_ecommerce.jpg",
      metrics: [
        { label: "Conversion Lift", value: "+340%" },
        { label: "Avg Session Time", value: "4m 12s" },
        { label: "Web Vitals", value: "99/100" },
      ],
      tech: ["Three.js", "WebGL", "Next.js 15", "Shopify Storefront API"],
      specs: [
        "Cinema-grade real-time GLSL lighting shaders",
        "Procedural orbital particle simulations",
        "Headless GraphQL instant transaction cart",
      ],
    },
    {
      id: "cloud-nebula",
      category: "cloud",
      tag: "DISTRIBUTED CLOUD INFRASTRUCTURE",
      title: "Nebula Cloud OS // Multi-Region Kubernetes Mesh",
      client: "Orbital Computing Labs",
      desc: "Autonomous multi-cloud management plane orchestrating hybrid Kubernetes clusters across AWS, GCP, and bare-metal nodes with zero-downtime failover.",
      image: "/images/nebula_cloud_os_3d.jpg",
      metrics: [
        { label: "Failover RTO", value: "0.00s" },
        { label: "Global Regions", value: "14 Nodes" },
        { label: "Cost Savings", value: "42.8%" },
      ],
      tech: ["Kubernetes", "Terraform", "Go Microservices", "Prometheus"],
      specs: [
        "Automated Terraform multi-region provisioning",
        "Real-time eBPF network telemetry observability",
        "Zero-trust mTLS service mesh routing",
      ],
    },
    {
      id: "cinema-showreel",
      category: "media",
      tag: "COMMERCIAL 8K CINEMATOGRAPHY",
      title: "AstraFilm Production // Sci-Fi Brand Master Campaign",
      client: "Orbital Global Media",
      desc: "End-to-end commercial film campaign shot on RED V-Raptor 8K cameras with cinematic zero-gravity VFX, custom sound design, and omnichannel digital distribution.",
      image: "/images/showreel_thumb.jpg",
      metrics: [
        { label: "Organic Reach", value: "14.2M+" },
        { label: "Video Completion", value: "88.4%" },
        { label: "Brand Recall", value: "94%" },
      ],
      tech: ["RED 8K Cinema", "DaVinci Resolve", "Blender VFX", "Dolby Atmos"],
      specs: [
        "Cinematic 8K zero-gravity volumetric rendering",
        "Custom spatial audio soundscape choreography",
        "Omnichannel broadcast-ready color grading",
      ],
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pinContainer = pinContainerRef.current;
    const track = horizontalTrackRef.current;
    const progressBar = progressBarRef.current;

    if (!pinContainer || !track) return;

    // Use gsap.matchMedia for clean responsive desktop vs mobile handling
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Calculate total horizontal scroll distance needed
      const getScrollDistance = () => track.scrollWidth - window.innerWidth + 120;

      const horizontalTween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
      });

      const trigger = ScrollTrigger.create({
        trigger: pinContainer,
        start: "top top",
        end: () => `+=${getScrollDistance() + 300}`,
        pin: true,
        animation: horizontalTween,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const pct = Math.round(self.progress * 100);
          setProgressPercent(pct);
          if (progressBar) {
            progressBar.style.width = `${pct}%`;
          }
        },
      });

      return () => {
        trigger.kill();
        horizontalTween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      id="work"
      className="relative bg-[#050608] text-white overflow-hidden border-t border-white/5 py-16 sm:py-20 lg:py-0"
    >
      {/* Background Starfield and Galactic Nebulae */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-[#FFD400]/5 blur-[180px] rounded-full pointer-events-none" />

      {/* Pinned Viewport Container (Pins full-screen on Desktop lg+, flows naturally on Mobile) */}
      <div
        ref={pinContainerRef}
        className="relative w-full lg:h-screen flex flex-col justify-center items-center py-4 lg:py-0"
      >
        {/* Top Header & Architectural Coordinate Ruler & Dynamic Progress Bar */}
        <div className="max-w-[1560px] w-full mx-auto px-6 sm:px-10 lg:px-14 mb-4 sm:mb-6 shrink-0">
          {/* Section Heading Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FEATURED MISSIONS // PORTFOLIO</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-bebas)] tracking-wide sm:tracking-[0.04em] leading-[0.95] uppercase text-white">
                ENGINEERED FOR THE{" "}
                <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.35)]">
                  HIGHEST STAKES
                </span>
              </h2>
            </div>

            {/* Desktop Telemetry Coordinate Ruler & Progress Bar */}
            <div className="hidden lg:flex items-center space-x-6 shrink-0">
              <div className="flex items-center space-x-3">
                <CyberCompassSvg />
                <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                  <span className="text-[#FFD400] font-semibold">MISSION FOLIO REEL</span>
                  <span className="mx-2 text-white/20">|</span>
                  <span>HORIZONTAL SCROLL TELEMETRY</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <TelemetryDimensionSvg />
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono text-neutral-400 tabular-nums">
                    {progressPercent}%
                  </span>
                  <div className="w-36 h-[2px] bg-white/15 rounded-full overflow-hidden relative">
                    <div
                      ref={progressBarRef}
                      className="h-full bg-[#FFD400] transition-all duration-75"
                      style={{ width: "0%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Track Viewport Wrapper */}
        <div className="w-full overflow-hidden py-2">
          {/* The Track: Horizontal on Desktop (lg+), Vertical Column on Mobile & Tablet */}
          <div
            ref={horizontalTrackRef}
            className="flex flex-col lg:flex-row lg:flex-nowrap gap-8 lg:gap-12 px-6 sm:px-10 lg:px-14 max-w-[1560px] mx-auto lg:max-w-none lg:mx-0 w-full lg:w-max items-center"
          >
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="capability-horizontal-card w-full lg:w-[82vw] lg:max-w-[1180px] lg:h-[72vh] lg:max-h-[550px] lg:min-h-[490px] shrink-0 rounded-3xl bg-[#090b10] border border-white/15 hover:border-[#FFD400]/40 shadow-[0_25px_60px_rgba(0,0,0,0.8)] transition-all duration-500 p-6 sm:p-7 lg:p-8 relative group flex flex-col justify-between overflow-hidden"
              >
                {/* Top Cyber Accent Glow on Card Hover */}
                <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_#FFD400]" />

                {/* Corner Architectural Crosshairs */}
                <div className="absolute top-4 left-4 font-mono text-sm text-[#FFD400]/30 select-none pointer-events-none">
                  +
                </div>
                <div className="absolute top-4 right-4 font-mono text-sm text-[#FFD400]/30 select-none pointer-events-none">
                  +
                </div>
                <div className="absolute bottom-4 left-4 font-mono text-sm text-[#FFD400]/30 select-none pointer-events-none">
                  +
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-sm text-[#FFD400]/30 select-none pointer-events-none">
                  +
                </div>

                {/* Equal 50/50 Balance: Image & Content Height/Width Harmonized */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch h-full">
                  {/* Left Column: Pure Architectural Visual Frame */}
                  <div className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-0 h-full w-full rounded-2xl overflow-hidden bg-[#07080c] border border-white/10 group-hover:border-[#FFD400]/30 transition-colors">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="card-image-fill object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Tag */}
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#FFD400] tracking-wider uppercase shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-pulse" />
                      {project.tag}
                    </div>

                    {/* Mission Index Badge */}
                    <div className="absolute bottom-4 right-4 text-xs font-mono text-[#FFD400] bg-black/75 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15">
                      0{idx + 1} // ARCHITECTURE
                    </div>
                  </div>

                  {/* Right Column: Equal-Weight Content & Precision Specifications */}
                  <div className="flex flex-col justify-between h-full py-1">
                    {/* Top Group: Title, Client, Description */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono text-neutral-400 tracking-wider uppercase">
                          CLIENT: <strong className="text-white">{project.client}</strong>
                        </span>
                        <span className="text-xs font-mono text-[#FFD400] bg-[#FFD400]/10 px-2.5 py-0.5 rounded-full border border-[#FFD400]/30 font-semibold">
                          MISSION 0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white leading-[1.2] mb-2 group-hover:text-[#FFD400] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed line-clamp-3">
                        {project.desc}
                      </p>
                    </div>

                    {/* Middle Group: Technical Specifications Grid / Verified Metrics */}
                    <div className="my-2 p-3 sm:p-3.5 rounded-xl bg-black/55 border border-white/10 space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFD400] font-semibold flex items-center space-x-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-[#FFD400]" />
                        <span>Verified Architectural Telemetry</span>
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {project.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-white/[0.03] border border-white/5 p-2 rounded-lg text-center"
                          >
                            <span className="text-sm sm:text-base font-mono font-bold text-[#FFD400] block leading-none">
                              {m.value}
                            </span>
                            <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400 tracking-wide mt-1 block truncate">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Technical Specs List */}
                      <div className="pt-1.5 border-t border-white/5 space-y-1 hidden sm:block">
                        {project.specs.slice(0, 2).map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-center space-x-2 text-[11px] sm:text-xs text-neutral-300 font-mono">
                            <CheckCircle2 className="w-3 h-3 text-[#FFD400] shrink-0" />
                            <span className="truncate">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Group: Tech Stack & Action Button */}
                    <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-neutral-300 border border-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <CyberButton href="/portfolios" size="sm">
                        EXPLORE MISSION
                      </CyberButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
