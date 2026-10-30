"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowUpRight, Compass } from "lucide-react";

interface ProjectItem {
  id: string;
  category: string;
  tag: string;
  verticalTitle: string;
  title: string;
  location: string;
  desc: string;
  image: string;
  specs: string;
  link: string;
}

export default function FeaturedProjectsSection() {
  // Center card (index 2: Sync Spatial 3D Configurator) is open by default
  const [activeIndex, setActiveIndex] = useState(2);

  const projects: ProjectItem[] = [
    {
      id: "nexus-trading",
      category: "FINTECH",
      tag: "FINTECH & TRADING",
      verticalTitle: "NEXUS QUANT TRADING",
      title: "Nexus Quantum Trading Engine",
      location: "NEW YORK // WALL STREET",
      desc: "Ultra-low-latency financial analytics and distributed portfolio management dashboard processing $2.4B+ in daily asset telemetry with sub-millisecond execution.",
      image: "/images/project_it_fintech.jpg",
      specs: "Sub-1.2ms Latency // 99.999% SLA // 2025",
      link: "/portfolios",
    },
    {
      id: "aegis-ai",
      category: "AI & ML",
      tag: "ENTERPRISE AI & ML",
      verticalTitle: "PROJECT AEGIS NEURAL AI",
      title: "Project Aegis Autonomous Neural Network",
      location: "SAN FRANCISCO // TOKYO",
      desc: "Distributed enterprise generative AI orchestrator featuring real-time multi-tenant LLM inference, active neural graph visualization, and automated cluster load-balancing.",
      image: "/images/project_it_ai.jpg",
      specs: "89 PetaFLOPS // 412 GPU Nodes // 2025",
      link: "/portfolios",
    },
    {
      id: "sync-spatial",
      category: "SPATIAL 3D",
      tag: "SPATIAL 3D & WEB",
      verticalTitle: "SYNC SPATIAL WEB STUDIO",
      title: "Sync Spatial 3D Web Configurator",
      location: "GENEVA // LONDON",
      desc: "Photorealistic WebGL & WebGPU 3D spatial product configurator featuring real-time cinema GLSL lighting shaders, procedural materials, and frictionless headless checkout.",
      image: "/images/project_it_spatial.jpg",
      specs: "WebGL 2.0 // +340% Conversions // 2025",
      link: "/portfolios",
    },
    {
      id: "nebula-mesh",
      category: "CLOUD INFRA",
      tag: "CLOUD & KUBERNETES",
      verticalTitle: "NEBULA CLOUD MESH OS",
      title: "Nebula Multi-Region Kubernetes Mesh",
      location: "FRANKFURT // SINGAPORE",
      desc: "Autonomous distributed cloud computing management plane orchestrating hybrid Kubernetes clusters across AWS, GCP, and bare-metal nodes with zero-downtime failover.",
      image: "/images/project_it_cloud.jpg",
      specs: "0.00s RTO // 14 Edge Regions // 2025",
      link: "/portfolios",
    },
    {
      id: "cybershield-mesh",
      category: "SECURITY",
      tag: "CYBERSECURITY & ZERO-TRUST",
      verticalTitle: "CYBERSHIELD DEFENSE MESH",
      title: "CyberShield Biometric Defense System",
      location: "ZURICH // DUBAI",
      desc: "Post-quantum cryptographic key management platform featuring biometric authentication, real-time threat intelligence telemetry, and automated SOC 2 compliance.",
      image: "/images/project_it_cyber.jpg",
      specs: "Zero-Trust // SOC 2 Type II // 2025",
      link: "/portfolios",
    },
  ];

  // Staggered vertical displacement matching the reference design layout
  const verticalOffsets = [
    "translate-y-3 sm:translate-y-5 lg:translate-y-6",
    "translate-y-7 sm:translate-y-10 lg:translate-y-12",
    "translate-y-0", // Center card
    "translate-y-8 sm:translate-y-12 lg:translate-y-14",
    "translate-y-2 sm:translate-y-3 lg:translate-y-4",
  ];

  return (
    <section
      id="work"
      className="relative bg-transparent text-white overflow-hidden py-20 sm:py-28 lg:py-32 selection:bg-[#FFD400] selection:text-black border-t border-white/5"
    >
      {/* Background Starfield and Ambient Glowing Nebulae */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#c59a58]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[550px] h-[550px] bg-[#FFD400]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[1720px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 sm:pb-10 mb-6 sm:mb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED IT MISSIONS // SOFTWARE PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase text-white">
              ENGINEERED FOR THE{" "}
              <span className="text-[#c59a58] sm:text-[#FFD400] drop-shadow-[0_0_35px_rgba(212,175,55,0.35)]">
                HIGHEST STAKES
              </span>
            </h2>
          </div>

          <div className="hidden lg:flex items-center space-x-3 text-xs font-mono text-neutral-400 uppercase tracking-widest">
            <span className="text-[#FFD400] font-semibold">INTERACTIVE SHOWCASE</span>
            <span className="text-white/20">|</span>
            <span>HOVER TO EXPLORE IT PROJECTS</span>
          </div>
        </div>

        {/* ----------------- EXPANDING ACCORDION GALLERY CONTAINER ----------------- */}
        <div
          onMouseLeave={() => setActiveIndex(2)}
          className="relative flex flex-col md:flex-row items-stretch gap-3 sm:gap-4 lg:gap-5 w-full min-h-[580px] sm:min-h-[640px] lg:h-[680px] xl:h-[720px] pb-12 sm:pb-16"
        >
          {projects.map((project, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`relative rounded-[32px] sm:rounded-[40px] lg:rounded-[46px] overflow-hidden cursor-pointer select-none transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  verticalOffsets[idx]
                } ${
                  isActive
                    ? "flex-[3.5] sm:flex-[4] lg:flex-[4.6] border-[1.5px] border-[#c59a58] sm:border-[#FFD400]/90 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.22)]"
                    : "flex-1 border border-white/10 hover:border-white/25 hover:shadow-[0_15px_35px_rgba(0,0,0,0.7)]"
                }`}
                style={{
                  minHeight: isActive ? "420px" : "120px",
                }}
              >
                {/* Background Image: Colourful and Vibrant in both states */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-all duration-1000 ease-out ${
                    isActive
                      ? "scale-105 opacity-100 saturate-110 brightness-105"
                      : "scale-100 opacity-70 saturate-100 brightness-90 hover:opacity-95 hover:scale-105"
                  }`}
                  priority={idx === 2}
                />

                {/* Overlays: Subtle Dark Scrim preserving vivid colors */}
                <div
                  className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
                    isActive
                      ? "bg-gradient-to-t from-black/95 via-black/40 to-black/10 opacity-100"
                      : "bg-black/40 hover:bg-black/25 opacity-100"
                  }`}
                />

                {/* ================= INACTIVE (COLLAPSED) VIEW ================= */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between items-center py-6 sm:py-8 px-2 transition-all duration-500 ${
                    isActive
                      ? "opacity-0 pointer-events-none -translate-y-4"
                      : "opacity-100 pointer-events-auto translate-y-0"
                  }`}
                >
                  {/* Top Capsule Category Badge */}
                  <div className="w-full flex justify-center">
                    <span className="px-2.5 sm:px-3 py-1 rounded-full bg-black/75 border border-white/25 text-[9px] sm:text-[10px] font-mono tracking-widest text-[#FFD400] uppercase backdrop-blur-md text-center shadow-lg">
                      {project.tag}
                    </span>
                  </div>

                  {/* Vertical Centered Sideways Title */}
                  <div className="my-auto flex items-center justify-center">
                    <span className="[writing-mode:vertical-rl] rotate-180 uppercase tracking-[0.24em] text-white hover:text-[#FFD400] font-[family-name:var(--font-syne)] font-bold text-xs sm:text-sm drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] whitespace-nowrap transition-colors">
                      {project.verticalTitle}
                    </span>
                  </div>

                  {/* Bottom Decorative Index Accent */}
                  <div className="w-2 h-2 rounded-full bg-[#FFD400]/70 shadow-[0_0_8px_#FFD400]" />
                </div>

                {/* ================= ACTIVE (EXPANDED) VIEW ================= */}
                <div
                  className={`absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-10 transition-all duration-700 ${
                    isActive
                      ? "opacity-100 pointer-events-auto translate-y-0 delay-100"
                      : "opacity-0 pointer-events-none translate-y-6"
                  }`}
                >
                  {/* Top Row: Category Tag & Location Micro-Pill */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/80 border border-white/25 text-[11px] sm:text-xs font-mono font-medium tracking-widest text-[#FFD400] uppercase backdrop-blur-md shadow-md">
                      {project.tag}
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/75 border border-white/20 text-[11px] sm:text-xs font-mono text-neutral-200 backdrop-blur-md shadow-md">
                      <Compass className="w-3.5 h-3.5 text-[#FFD400]" />
                      <span>{project.location}</span>
                    </span>
                  </div>

                  {/* Middle & Bottom Group: Title, Description, Specs & Action Button */}
                  <div className="space-y-3 sm:space-y-4 max-w-2xl">
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold text-white tracking-tight leading-tight drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)]">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm lg:text-base text-neutral-200 font-light leading-relaxed line-clamp-3 sm:line-clamp-none drop-shadow-md">
                      {project.desc}
                    </p>

                    {/* Separator Line with Specifications & Sleek Pill Button */}
                    <div className="pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs sm:text-sm font-mono text-[#FFD400] tracking-wider font-semibold">
                        {project.specs}
                      </span>

                      <Link
                        href={project.link}
                        className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#FFD400] hover:bg-[#ffe34d] text-black font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,212,0,0.45)] hover:scale-105 active:scale-95"
                      >
                        <span>EXPLORE PROJECT</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
