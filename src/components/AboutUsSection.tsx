"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import CyberButton from "@/components/CyberButton";

export default function AboutUsSection() {
  const [activeStoryHover, setActiveStoryHover] = useState(false);

  const stats = [
    {
      value: "250+",
      label: "PROJECTS",
      subLabel: "DELIVERED",
      highlight: "Cloud & Web",
    },
    {
      value: "99.9%",
      label: "CLOUD",
      subLabel: "UPTIME",
      highlight: "SLA Guaranteed",
    },
    {
      value: "60+",
      label: "IT",
      subLabel: "SPECIALISTS",
      highlight: "In-House Squads",
    },
  ];

  return (
    <section
      id="about"
      className="relative z-20 -mt-[100vh] min-h-screen bg-[#050608] text-white pt-20 sm:pt-28 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-[#FFD400] selection:text-black shadow-[0_-50px_140px_rgba(0,0,0,0.99)] flex items-center"
    >
      {/* ----------------- FULL SECTION BACKGROUND: home-about2.png ----------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Ambient Glows */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-[#FFD400]/6 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

        {/* Section Edge Vignettes for Seamless Blending */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#050608] to-transparent z-10" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050608] to-transparent z-10" />

        {/* Full Background Astronaut & Workstation Asset */}
        <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-end px-4 sm:px-6 lg:px-12">
          <div className="relative w-[500px] sm:w-[610px] lg:w-[740px] xl:w-[860px] 2xl:w-[920px] aspect-[612/408] translate-y-4 sm:translate-y-6 lg:translate-y-2 opacity-95">
            <Image
              src="/home-about2.png"
              alt="RnD Technosoft Astronaut Workstation"
              fill
              priority
              className="object-contain object-right"
              sizes="(max-width: 1024px) 100vw, 920px"
            />
            {/* Subtle Neon Floor Reflection */}
            <div className="absolute -bottom-2 right-12 w-[390px] h-20 bg-[#FFD400]/20 blur-[50px] rounded-full pointer-events-none" />
          </div>
        </div>

        {/* Mobile Readability Overlay */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/30 lg:bg-transparent pointer-events-none" />
      </div>

      {/* ----------------- TOP-RIGHT SCI-FI TELEMETRY BADGE ----------------- */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-12 z-20 hidden md:flex flex-col items-center pointer-events-none text-right">
        <span className="text-[10px] text-neutral-500 font-mono select-none">^</span>
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#FFD400] uppercase my-0.5">
          &quot;ACTIVE WORKSTATION // ORBITAL LINK&quot;
        </span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-[#FFD400]/60 to-transparent my-1" />
        <span className="text-[10px] text-neutral-500 font-mono select-none">v</span>
      </div>

      {/* ----------------- MAIN ABOUT US CONTENT (LEFT-ALIGNED OVER BACKGROUND) ----------------- */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: HERO CONTENT, STATS & VISION ================= */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-between space-y-6 sm:space-y-8 max-w-2xl">
            
            {/* Category Indicator Tag */}
            <div>
              <div className="inline-flex items-center gap-3 text-xs font-mono font-medium tracking-[0.25em] text-neutral-400 uppercase mb-4">
                <span className="text-white font-bold">01</span>
                <span className="w-6 h-[1px] bg-[#FFD400]" />
                <span className="text-[#FFD400] tracking-[0.3em]">ABOUT US</span>
              </div>

              {/* Primary Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-bold text-white tracking-[-0.003em] leading-[1.15] font-[family-name:var(--font-jakarta)] mb-5">
                Engineering 
                the Next Era 
                of Digital.
              </h2>

              {/* Body Paragraph */}
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                <strong className="text-white font-medium">RnD Technosoft</strong> is an integrated digital innovation lab architecting scalable cloud platforms, custom web applications, and AI-driven solutions. We unite <span className="text-[#FFD400]">Technology</span>, <span className="text-[#FFD400]">Digital Marketing</span>, <span className="text-[#FFD400]">Branding &amp; Design</span>, and <span className="text-[#FFD400]">Media Production</span> into one cohesive delivery engine.
              </p>
            </div>

            {/* Bottom Key Metrics (Divided into 3 Columns by Thin Vertical Grid Lines) */}
            <div className="pt-6 sm:pt-8 border-t border-white/[0.12]">
              <div className="grid grid-cols-3 divide-x divide-white/[0.12] -mx-2 sm:-mx-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="px-2 sm:px-4 group cursor-default transition-all duration-300"
                  >
                    {/* Number Metric */}
                    <div className="text-2xl sm:text-4xl lg:text-[38px] xl:text-[44px] font-bold text-white tracking-tight leading-none mb-2 group-hover:text-[#FFD400] transition-colors duration-300">
                      {stat.value}
                    </div>

                    {/* Label */}
                    <div className="text-[10px] sm:text-[11px] lg:text-xs font-semibold tracking-[0.14em] uppercase text-neutral-400 group-hover:text-neutral-200 transition-colors">
                      <span className="block">{stat.label}</span>
                      <span className="block text-neutral-500 group-hover:text-[#FFD400]/90">
                        {stat.subLabel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ----------------- ATTRACTIVE "EXPLORE MORE" ACTION BUTTON ----------------- */}
            <div className="pt-3">
              <CyberButton href="/services" size="lg">
                EXPLORE MORE
              </CyberButton>
            </div>

          </div>

          {/* ================= RIGHT COLUMN (EMPTY TO EXPOSE THE ASTRONAUT & WORKSTATION IN BACKGROUND) ================= */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[460px] pointer-events-none" />

        </div>
      </div>
    </section>
  );
}
