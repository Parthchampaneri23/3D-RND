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
  // Center card (index 2: Lumen Sal Spatial 3D) is open by default
  const [activeIndex, setActiveIndex] = useState(2);

  const projects: ProjectItem[] = [
    {
      id: "quantum-mobile-os",
      category: "MOBILE APP",
      tag: "MOBILE APP // FINTECH",
      verticalTitle: "QUANTUM MOBILE WEALTH",
      title: "Quantum Mobile Wealth Suite",
      location: "ZURICH // NEW YORK",
      desc: "Cross-platform mobile wealth management app featuring hardware enclave biometric cryptography, offline WatermelonDB sync, and 60 FPS Skia graphics.",
      image: "/images/project_it_fintech.jpg",
      specs: "60 FPS Native // $850M+ AUM // 2026",
      link: "/portfolios/quantum-mobile-os",
    },
    {
      id: "kailua",
      category: "WEB APP",
      tag: "WEBSITE & WEB APPS",
      verticalTitle: "KAILUA HEADLESS FLAGSHIP",
      title: "Kailua Headless Storefront",
      location: "VANCOUVER // LONDON",
      desc: "Lightning-fast headless Shopify Plus edge storefront engineered with Next.js 15, sub-150ms Algolia search, and interactive 3D WebGL fabric inspection.",
      image: "/images/service_ecommerce_color.jpg",
      specs: "0.8s LCP // +340% Conversions // 2026",
      link: "/portfolios/kailua",
    },
    {
      id: "lumen-sal",
      category: "BRANDING",
      tag: "BRANDING & 3D SPATIAL",
      verticalTitle: "LUMEN SAL ATELIER",
      title: "Lumen Sal Spatial 3D Showroom",
      location: "GENEVA // PARIS",
      desc: "Photorealistic Three.js & WebGL spatial interior showroom featuring dynamic PBR solar lighting shaders, procedural materials, and bespoke typography tokens.",
      image: "/images/project_lumen_sal.jpg",
      specs: "60 FPS WebGL // sub-2MB Draco // 2026",
      link: "/portfolios/lumen-sal",
    },
    {
      id: "nebula-cloud",
      category: "CLOUD INFRA",
      tag: "WEBSITE & CLOUD PLATFORM",
      verticalTitle: "NEBULA DISTRIBUTED OS",
      title: "Nebula Distributed Cloud OS",
      location: "FRANKFURT // SINGAPORE",
      desc: "Autonomous multi-region Kubernetes cloud management console orchestrating 10,000+ pods with live WebSocket telemetry, zero-downtime blue/green deployments.",
      image: "/images/nebula_cloud_os_3d.jpg",
      specs: "0.00s RTO // 10k+ Pods // 2025",
      link: "/portfolios/nebula-cloud",
    },
    {
      id: "mission-ops",
      category: "CINEMA",
      tag: "VIDEOGRAPHY & PHOTOGRAPHY",
      verticalTitle: "VANGUARD HIGH-ALTITUDE",
      title: "Vanguard 8K Alpine Commercial",
      location: "ZERMATT // SWISS ALPS",
      desc: "Award-winning commercial film captured in minus 25°C blizzards using RED V-Raptor 8K cameras, high-altitude FPV drones, and Dolby Atmos spatial audio.",
      image: "/images/project_forest_film.jpg",
      specs: "8K Cinema // Dolby Atmos // 2025",
      link: "/portfolios/mission-ops",
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
      {/* Soft Nebula Ambient Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#FFD400]/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono font-medium tracking-[0.25em] uppercase text-[#FFD400] mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED CASE STUDIES // LIVE PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.05] text-white">
            ENGINEERED FOR <span className="text-[#FFD400]">PERFORMANCE.</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 font-light mt-4 leading-relaxed">
            Click through our selected enterprise case studies to inspect architectural blueprints, verified metrics, and interactive production deployments.
          </p>
        </div>

        {/* 5-Card Horizontal Interactive Accordion Grid */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 h-auto lg:h-[640px] items-stretch">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={project.id}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group border border-white/10 hover:border-[#FFD400]/60 shadow-2xl ${
                  verticalOffsets[index]
                } ${
                  isActive
                    ? "lg:flex-[3.5] flex-1 min-h-[480px] lg:min-h-0 ring-1 ring-[#FFD400]/40"
                    : "lg:flex-[0.9] flex-none h-24 lg:h-auto min-w-0 hover:lg:flex-[1.1]"
                }`}
              >
                {/* Background Image with Cinematic Color Grading */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className={`object-cover transition-transform duration-1000 ease-out ${
                    isActive ? "scale-105" : "scale-100 group-hover:scale-110"
                  }`}
                />

                {/* Ambient Dark Gradient Vignette Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30 transition-opacity duration-500 ${
                    isActive ? "opacity-90" : "opacity-75 group-hover:opacity-60"
                  }`}
                />

                {/* ================= COLLAPSED (INACTIVE) VIEW ================= */}
                <div
                  className={`absolute inset-0 flex flex-row lg:flex-col justify-between items-center p-5 sm:p-6 transition-all duration-500 ${
                    isActive
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100 pointer-events-auto"
                  }`}
                >
                  {/* Top/Left Category Icon/Tag */}
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[#FFD400] px-2.5 py-1 rounded bg-black/60 border border-white/10 backdrop-blur-sm">
                    {project.category}
                  </span>

                  {/* Vertical Rotated Title on Desktop, Horizontal on Mobile */}
                  <div className="lg:[writing-mode:vertical-rl] lg:rotate-180 text-left my-auto">
                    <h3 className="text-sm sm:text-base lg:text-lg font-[family-name:var(--font-syne)] font-bold tracking-wider uppercase text-white group-hover:text-[#FFD400] transition-colors whitespace-nowrap">
                      {project.verticalTitle}
                    </h3>
                  </div>

                  {/* Bottom Arrow Indicator */}
                  <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#FFD400] text-white group-hover:text-black flex items-center justify-center transition-all duration-300 shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
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
                        <span>EXPLORE CASE STUDY</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Action Link */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            href="/portfolios"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-[#FFD400] text-white text-xs font-mono uppercase tracking-[0.2em] transition-all"
          >
            <span>VIEW ALL 15 PORTFOLIO CASE STUDIES</span>
            <ArrowUpRight className="w-4 h-4 text-[#FFD400]" />
          </Link>
        </div>
      </div>
    </section>
  );
}