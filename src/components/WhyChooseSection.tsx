"use client";

import { ArrowUpRight, Headphones, Sparkles } from "lucide-react";

export default function WhyChooseSection() {
  const avatars = [
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      alt: "Senior Cloud Architect",
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      alt: "Principal Full-Stack Engineer",
    },
    {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
      alt: "Lead 3D & WebGL Developer",
    },
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      alt: "Staff UX/UI Systems Designer",
    },
    {
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80",
      alt: "AI & ML Pipeline Specialist",
    },
  ];

  return (
    <section
      id="why-choose"
      className="relative py-24 sm:py-32 bg-[#060709] text-white overflow-hidden selection:bg-[#FFD400] selection:text-black"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#FFD400]/4 blur-[160px] rounded-full pointer-events-none" />

      {/* Subtle Background Cyber Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-between">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-4 sm:mb-6 shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-[10px] sm:text-xs font-mono font-medium tracking-[0.25em] uppercase mb-2 shadow-[0_0_15px_rgba(255,212,0,0.15)]">
            <Sparkles className="w-3 h-3" />
            <span>THE RND ADVANTAGE // DIFFERENTIATORS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight text-white mb-1.5 font-[family-name:var(--font-jakarta)] leading-tight">
            Why Visionary Enterprises{" "}
            <span className="text-[#FFD400]">Choose RnD</span>
          </h2>
          <p className="text-xs sm:text-[13px] text-neutral-400 font-light max-w-lg mx-auto leading-relaxed line-clamp-1 sm:line-clamp-none">
            Eliminating vendor fragmentation with battle-tested sprint velocity, elite engineering talent, and guaranteed bank-grade uptime.
          </p>
        </div>

        {/* ----------------- 5-CARD BENTO GRID (EQUAL COLUMNS) ----------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 flex-1 min-h-0 items-stretch">
          
          {/* ================= COLUMN 1 (LEFT): CARDS 01 & 02 ================= */}
          <div className="flex flex-col gap-4 lg:gap-5 h-full">
            
            {/* CARD 01 - Rapid Agile Delivery (Solid Yellow) */}
            <div className="rounded-[24px] lg:rounded-[28px] bg-[#FFD400] text-black p-5 sm:p-6 flex-1 flex flex-col justify-between shadow-[0_15px_40px_rgba(255,212,0,0.16)] hover:shadow-[0_20px_50px_rgba(255,212,0,0.25)] transition-all duration-300 group">
              <div>
                {/* Number */}
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-black mb-1.5">
                  01 /
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight leading-[1.12] mb-4 sm:mb-5 font-[family-name:var(--font-jakarta)]">
                  Rapid Agile<br />Delivery
                </h3>

                {/* Segmented Sprint Progress Bar (4 distinct pills) */}
                <div className="grid grid-cols-4 gap-1.5 mb-2">
                  <div className="h-1.5 rounded-full bg-black" />
                  <div className="h-1.5 rounded-full bg-black" />
                  <div className="h-1.5 rounded-full bg-black" />
                  <div className="h-1.5 rounded-full bg-black/25" />
                </div>

                {/* Sprint Labels */}
                <div className="grid grid-cols-4 gap-1.5 text-[10px] font-bold text-black">
                  <span>Sprint 01</span>
                  <span>Sprint 02</span>
                  <span>Sprint 03</span>
                  <span className="text-black/55 font-medium">Deploy</span>
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="pt-3">
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-black text-[#FFD400] text-[11px] font-bold tracking-wide shadow-sm">
                  100% On-Time
                </span>
              </div>
            </div>

            {/* CARD 02 - Top 1% Senior Engineers (Dark Matte) */}
            <div className="rounded-[24px] lg:rounded-[28px] bg-[#0c0e14] border border-white/10 p-5 sm:p-6 flex-1 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:border-[#FFD400]/40 transition-all duration-300 group">
              <div>
                {/* Header: Number & Badge */}
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-500">
                    02 /
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-neutral-400">
                    Vetted Talent
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-[1.15] mb-4 font-[family-name:var(--font-jakarta)]">
                  Top 1% Senior<br />Engineers
                </h3>

                {/* Avatar Stack */}
                <div className="flex items-center -space-x-2.5 mb-4">
                  {avatars.map((av, idx) => (
                    <img
                      key={idx}
                      src={av.src}
                      alt={av.alt}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-[#0c0e14] ring-1 ring-white/10 hover:scale-110 hover:z-20 transition-all duration-200"
                    />
                  ))}
                  {/* Dark 6th Placeholder Circle */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#0c0e14] bg-neutral-900 ring-1 ring-white/10 flex items-center justify-center text-[10px] text-neutral-500 font-bold">
                    +45
                  </div>
                </div>

                {/* Metric Stat */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-bold text-[#FFD400] tracking-tight leading-none">
                    10+
                  </span>
                  <span className="text-xs text-neutral-400 font-medium">
                    Years Avg.
                  </span>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                {["React", "Node", "AWS", "Vetted Talent"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] text-neutral-300 font-medium hover:border-[#FFD400]/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* ================= COLUMN 2 (CENTER HERO): EQUAL HEIGHT TALL CARD ================= */}
          <div className="h-full flex flex-col">
            <div className="rounded-[24px] lg:rounded-[28px] bg-black border border-white/10 p-5 sm:p-6 h-full flex flex-col justify-between items-center text-center relative overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] hover:border-[#FFD400]/40 transition-all duration-300 group">
              
              {/* Top Amber Ambient Glow */}
              <div className="absolute top-0 inset-x-0 h-36 bg-gradient-to-b from-[#FFD400]/12 via-[#FFD400]/3 to-transparent pointer-events-none" />

              {/* Astronaut Floating Over Golden 3D Shield (Filling Card Seamlessly) */}
              <div className="relative z-10 w-full flex-1 min-h-[220px] lg:min-h-[260px] flex items-center justify-center overflow-hidden my-1">
                <img
                  src="/images/why_choose_astronaut_shield.jpg"
                  alt="3D Astronaut with Glowing Golden Shield"
                  className="w-full h-full object-contain transform group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                />
                {/* Seamless Bottom Vignette Blend into 3x Faster */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Typography Content */}
              <div className="relative z-10 text-center mb-4 w-full shrink-0">
                <h3 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#FFD400] tracking-[-0.03em] leading-none mb-2 font-[family-name:var(--font-jakarta)] drop-shadow-[0_0_30px_rgba(255,212,0,0.35)]">
                  3x Faster
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-snug">
                  From Concept to<br />Scalable Launch
                </p>
              </div>

              {/* Solid Yellow Action Button */}
              <a
                href="#contact"
                className="relative z-10 w-full py-3 sm:py-3.5 px-5 rounded-xl bg-[#FFD400] hover:bg-[#ffe34d] text-black font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(255,212,0,0.3)] hover:shadow-[0_0_30px_rgba(255,212,0,0.5)] shrink-0 group/btn"
              >
                <span>Book Free Consultation</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>

            </div>
          </div>

          {/* ================= COLUMN 3 (RIGHT): CARDS 03 & 04 ================= */}
          <div className="flex flex-col gap-4 lg:gap-5 h-full">
            
            {/* CARD 03 - Bank-Grade Cloud Security */}
            <div className="rounded-[24px] lg:rounded-[28px] bg-[#0c0e14] border border-white/10 p-5 sm:p-6 flex-1 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:border-[#FFD400]/40 transition-all duration-300 group">
              <div>
                {/* Number */}
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-500 mb-1.5">
                  03 /
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-[1.15] mb-3 font-[family-name:var(--font-jakarta)]">
                  Bank-Grade<br />Cloud Security
                </h3>

                {/* Glowing Yellow Sine Wave Graph */}
                <div className="relative h-14 sm:h-16 mb-2 flex items-center justify-center overflow-hidden">
                  <svg
                    className="w-full h-full overflow-visible"
                    viewBox="0 0 320 90"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="whySecurityGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FFD400" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#FFD400" stopOpacity="0" />
                      </linearGradient>
                      <filter id="yellowGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#FFD400" floodOpacity="0.6" />
                      </filter>
                    </defs>

                    {/* Area fill */}
                    <path
                      d="M 0,65 Q 25,68 50,55 T 100,58 T 150,38 T 200,45 T 250,22 T 300,18 L 320,18 L 320,90 L 0,90 Z"
                      fill="url(#whySecurityGlow)"
                    />

                    {/* Glowing Stroke */}
                    <path
                      d="M 0,65 Q 25,68 50,55 T 100,58 T 150,38 T 200,45 T 250,22 T 300,18 L 320,18"
                      fill="none"
                      stroke="#FFD400"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      filter="url(#yellowGlowFilter)"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom Badges */}
              <div className="flex items-center justify-between gap-2 pt-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FFD400] text-black text-[10px] sm:text-[11px] font-bold tracking-wide shadow-sm">
                  99.99% SLA Uptime
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] text-neutral-400 font-mono">
                  SOC2 Compliant
                </span>
              </div>
            </div>

            {/* CARD 04 - 24/7 Dedicated Support */}
            <div className="rounded-[24px] lg:rounded-[28px] bg-[#0c0e14] border border-white/10 p-5 sm:p-6 flex-1 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:border-[#FFD400]/40 transition-all duration-300 group">
              <div>
                {/* Number */}
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-500 mb-1.5">
                  04 /
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-[1.15] mb-2 font-[family-name:var(--font-jakarta)]">
                  24/7 Dedicated<br />Support
                </h3>

                {/* Telemetry Support Network Illustration */}
                <div className="relative h-14 sm:h-16 mb-2 flex items-center justify-end pr-3">
                  <div className="relative flex items-center justify-center">
                    {/* Pulsing Outer Orbit */}
                    <div className="absolute w-16 h-16 rounded-full border border-[#FFD400]/20 animate-spin" style={{ animationDuration: "20s" }}>
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FFD400] shadow-[0_0_8px_#FFD400]" />
                    </div>

                    {/* Orbit lines */}
                    <div className="absolute w-11 h-11 rounded-full border border-dashed border-[#FFD400]/30" />

                    {/* Center Headset Circle */}
                    <div className="w-9 h-9 rounded-full bg-[#FFD400]/15 border border-[#FFD400] flex items-center justify-center text-[#FFD400] shadow-[0_0_15px_rgba(255,212,0,0.3)] z-10">
                      <Headphones className="w-4 h-4 text-[#FFD400]" />
                    </div>

                    {/* Satellite nodes */}
                    <div className="absolute -top-1 -right-6 w-1.5 h-1.5 rounded-full bg-[#FFD400]/80 shadow-[0_0_6px_#FFD400]" />
                    <div className="absolute -bottom-1 -left-6 w-1.5 h-1.5 rounded-full bg-[#FFD400]/80 shadow-[0_0_6px_#FFD400]" />
                  </div>
                </div>
              </div>

              {/* Bottom Metric & Response Pill */}
              <div className="flex items-end justify-between pt-2">
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-[#FFD400] tracking-tight leading-none mb-0.5">
                    98%
                  </div>
                  <div className="text-[11px] sm:text-xs text-neutral-400 font-medium">
                    Client Retention
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] text-neutral-300 font-mono">
                  &lt;15m Response
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
