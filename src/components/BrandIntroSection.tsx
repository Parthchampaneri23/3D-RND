"use client";

import { Sparkles, Award, Globe2, Users, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function BrandIntroSection() {
  const counters = [
    {
      value: "12+",
      label: "Years Excellence",
      detail: "Enterprise IT since 2014",
      icon: Award,
    },
    {
      value: "500+",
      label: "Projects Delivered",
      detail: "Web, Cloud & 3D Systems",
      icon: CheckCircle2,
    },
    {
      value: "150+",
      label: "Global Clients",
      detail: "Across 15+ Countries",
      icon: Globe2,
    },
    {
      value: "50+",
      label: "Senior Architects",
      detail: "Dedicated In-House Squads",
      icon: Users,
    },
  ];

  return (
    <section
      id="about"
      className="relative z-20 -mt-[100vh] min-h-screen bg-[#050608] rounded-t-[40px] sm:rounded-t-[64px] border-t-2 border-[#FFD400]/40 shadow-[0_-50px_140px_rgba(0,0,0,0.99)] overflow-hidden pt-20 sm:pt-24 pb-20 sm:pb-28 text-white"
    >
      {/* Laser Top Glow Accent Line */}
      <div className="absolute top-0 left-12 right-12 h-[3px] bg-gradient-to-r from-transparent via-[#FFD400] to-transparent shadow-[0_0_25px_#FFD400] z-20" />

      {/* Ambient Cosmic Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#FFD400]/6 blur-[180px] rounded-full pointer-events-none z-0" />

      {/* Cyber Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 z-10">
        {/* Minimalist Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 shadow-[0_0_20px_rgba(255,212,0,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT US // RND TECHNOSOFT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-[family-name:var(--font-bebas)] tracking-tight leading-[0.92] uppercase text-white mb-3">
            OVER A DECADE OF ENGINEERING{" "}
            <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.35)]">
              DIGITAL FRONTIERS
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Full-stack enterprise engineering, spatial 3D web platforms, and omnichannel digital marketing united into one cohesive mission.
          </p>
        </div>

        {/* ----------------- 3D SPACE TERMINAL CANVAS WITH BLANK CENTER SCREEN ----------------- */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)] bg-[#07090e] mb-8 group">
          {/* Main 3D Space Command Image with completely BLANK center monitor */}
          <div className="relative w-full aspect-[16/9]">
            <img
              src="/images/about_blank_screen.jpg"
              alt="RnD Technosoft 3D Space Terminal"
              className="w-full h-full object-cover block"
            />

            {/* Content Managed Directly Inside the Blank Center Monitor Screen */}
            <div className="absolute top-[18.2%] left-1/2 -translate-x-1/2 w-[39.5%] h-[42.8%] z-20 flex flex-col justify-between p-2 sm:p-3.5 md:p-5 text-center pointer-events-auto bg-black/60 rounded-lg backdrop-blur-[1px]">
              {/* Top Terminal Status */}
              <div className="flex items-center justify-between pb-1 sm:pb-1.5 border-b border-white/10 text-[7px] sm:text-[9px] md:text-xs font-mono text-[#FFD400]">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>RND MISSION TERMINAL</span>
                </span>
                <span className="text-white/40 hidden sm:inline">STATUS: 100%</span>
              </div>

              {/* Center Brand Title */}
              <div className="my-auto py-0.5 sm:py-1">
                <h3 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-[family-name:var(--font-bebas)] tracking-wider uppercase text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)] leading-tight">
                  RND <span className="text-[#FFD400]">TECHNOSOFT</span>
                </h3>
                <p className="text-[7px] sm:text-[9px] md:text-xs text-white/70 font-light line-clamp-1 mt-0.5">
                  Enterprise Cloud Software & Spatial 3D Web
                </p>
              </div>

              {/* 4 Clean Minimal Counters Inside the Screen */}
              <div className="grid grid-cols-2 gap-1 sm:gap-2 my-auto">
                <div className="p-1 sm:p-1.5 md:p-2 rounded-md sm:rounded-lg bg-white/[0.04] border border-white/5">
                  <span className="text-xs sm:text-base md:text-lg font-mono font-bold text-[#FFD400] leading-none block">
                    12+
                  </span>
                  <span className="text-[7px] sm:text-[8px] md:text-[10px] font-mono text-white/60 uppercase">
                    Years Exp
                  </span>
                </div>
                <div className="p-1 sm:p-1.5 md:p-2 rounded-md sm:rounded-lg bg-white/[0.04] border border-white/5">
                  <span className="text-xs sm:text-base md:text-lg font-mono font-bold text-[#FFD400] leading-none block">
                    500+
                  </span>
                  <span className="text-[7px] sm:text-[8px] md:text-[10px] font-mono text-white/60 uppercase">
                    Projects
                  </span>
                </div>
                <div className="p-1 sm:p-1.5 md:p-2 rounded-md sm:rounded-lg bg-white/[0.04] border border-white/5">
                  <span className="text-xs sm:text-base md:text-lg font-mono font-bold text-[#FFD400] leading-none block">
                    150+
                  </span>
                  <span className="text-[7px] sm:text-[8px] md:text-[10px] font-mono text-white/60 uppercase">
                    Clients
                  </span>
                </div>
                <div className="p-1 sm:p-1.5 md:p-2 rounded-md sm:rounded-lg bg-white/[0.04] border border-white/5">
                  <span className="text-xs sm:text-base md:text-lg font-mono font-bold text-[#FFD400] leading-none block">
                    50+
                  </span>
                  <span className="text-[7px] sm:text-[8px] md:text-[10px] font-mono text-white/60 uppercase">
                    Architects
                  </span>
                </div>
              </div>

              {/* Bottom Action Button Inside Screen */}
              <div className="pt-1 border-t border-white/10">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-1 sm:gap-1.5 w-full py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-[#FFD400] hover:bg-[#ffe033] text-black font-mono font-bold text-[7px] sm:text-[9px] md:text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(255,212,0,0.4)]"
                >
                  <span>LAUNCH MISSION PROTOCOL</span>
                  <ArrowUpRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Viewports Complementary Counters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 md:hidden">
          {counters.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center flex flex-col items-center justify-center"
              >
                <Icon className="w-4 h-4 text-[#FFD400] mb-1" />
                <span className="text-xl font-mono font-bold text-[#FFD400] leading-none block mb-0.5">
                  {c.value}
                </span>
                <span className="text-[10px] font-mono text-white/70">
                  {c.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Minimal Bottom SLA Badges */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-white/50">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
            100% CODE & IP OWNERSHIP
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
            99.99% UPTIME SLA
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
            TWO-WEEK AGILE SPRINTS
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400]" />
            24/7 DEDICATED SUPPORT
          </span>
        </div>
      </div>
    </section>
  );
}
