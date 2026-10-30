"use client";

import { useState } from "react";
import { Play, Film, Camera, Clapperboard, Sparkles, X, Volume2 } from "lucide-react";

export default function CreativeShowreelSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const showreelItems = [
    {
      id: "commercial-8k",
      category: "film",
      title: "Cosmic Odyssey // AstraFilm Commercial",
      desc: "Shot on RED V-Raptor 8K with anamorphic cine primes on location and zero-gravity wire rigging.",
      thumb: "/images/showreel_thumb.jpg",
      duration: "02:45",
      type: "Brand Film",
    },
    {
      id: "spatial-3d",
      category: "3d",
      title: "Aurora Horology // 3D Spatial Master",
      desc: "High-precision CGI product reveal with dynamic studio lighting and micro-machinery animation.",
      thumb: "/images/project_ecommerce.jpg",
      duration: "01:30",
      type: "3D Motion",
    },
    {
      id: "fintech-launch",
      category: "campaign",
      title: "Galactic Wealth // Global Launch Campaign",
      desc: "Omnichannel digital marketing assets, viral short-form cutdowns, and executive leadership interviews.",
      thumb: "/images/project_fintech.jpg",
      duration: "03:15",
      type: "Campaign Film",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? showreelItems
      : showreelItems.filter((item) => item.category === activeCategory);

  return (
    <section id="showreel" className="relative py-28 sm:py-36 bg-transparent text-white overflow-hidden border-t border-white/5">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 w-[800px] h-[400px] bg-[#FFD400]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-5">
              <Film className="w-3.5 h-3.5" />
              <span>CINEMA & VISUAL STUDIO // SHOWREEL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-syne)] font-bold tracking-tight leading-tight uppercase text-white">
              CINEMATIC VISUALS.{" "}
              <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.35)]">
                UNCOMPROMISED ARTISTRY.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {[
              { id: "all", label: "All Reels" },
              { id: "film", label: "Commercial 8K" },
              { id: "3d", label: "3D Motion" },
              { id: "campaign", label: "Campaigns" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setActiveCategory(btn.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all ${
                  activeCategory === btn.id
                    ? "bg-[#FFD400] text-black font-bold shadow-[0_0_15px_rgba(255,212,0,0.35)]"
                    : "bg-white/[0.03] text-white/60 hover:text-white border border-white/10"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Master Cinema Theater Feature Card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.85)] mb-14 group">
          <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full min-h-[380px] sm:min-h-[480px]">
            <img
              src="/images/showreel_thumb.jpg"
              alt="Creative Showreel Master Frame"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/40 to-black/30" />

            {/* Glowing Big Play Button */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-[#FFD400] hover:bg-[#ffe033] text-black flex items-center justify-center transition-all duration-300 shadow-[0_0_50px_rgba(255,212,0,0.5)] hover:scale-110 group/btn"
              aria-label="Play Showreel"
            >
              <Play className="w-8 sm:w-10 h-8 sm:h-10 fill-black ml-1 transition-transform group-hover/btn:scale-110" />
            </button>

            {/* Bottom Meta Overlay */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
              <div>
                <span className="text-xs font-mono text-[#FFD400] tracking-widest uppercase mb-1 block">
                  FEATURED REEL // 2026 EDITION
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  RnD Creative Studio & Media Reel
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-white/70">
                <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                  8K CINEMA SPEC
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                  DOLBY ATMOS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Lightbox Modal */}
        {isPlaying && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
              {/* Fallback Cinema Player Screen */}
              <img
                src="/images/showreel_thumb.jpg"
                alt="Cinema Player"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/60">
                <div className="w-16 h-16 rounded-full bg-[#FFD400] flex items-center justify-center text-black mb-4 animate-pulse">
                  <Play className="w-7 h-7 fill-black ml-1" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Streaming 8K Master Cinema Stream...
                </h4>
                <p className="text-sm font-mono text-[#FFD400] tracking-wider uppercase">
                  AstraFilm & RnD Technosoft Production
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Additional Selected Showreel Campaigns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group p-5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-[#FFD400]/40 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-white/5">
                <img
                  src={item.thumb}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 font-mono text-[10px] text-white/80">
                  {item.duration}
                </span>
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#FFD400] font-mono text-[10px] text-black font-bold">
                  {item.type}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#FFD400] transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
