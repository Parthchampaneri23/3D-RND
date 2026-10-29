"use client";

import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

interface PageBannerProps {
  title: string;
  breadcrumb?: string;
}

export default function PageBanner({ title, breadcrumb }: PageBannerProps) {
  return (
    <section className="relative h-[80vh] bg-[#050608] text-white overflow-hidden flex items-center">
      {/* ----------------- FULL SECTION BACKGROUND ----------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Ambient Glows */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-[#FFD400]/6 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px] pointer-events-none" />

        {/* Section Edge Vignettes for Seamless Blending */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#050608] to-transparent z-10" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050608] to-transparent z-10" />

        {/* Full Background Astronaut & Workstation Asset - Positioned to show bottom portion */}
        <div className="relative w-full h-full max-w-7xl mx-auto flex items-end justify-end px-4 sm:px-6 lg:px-12">
          <div className="relative w-[500px] sm:w-[610px] lg:w-[740px] xl:w-[860px] 2xl:w-[920px] aspect-[612/408] opacity-95">
            <Image
              src="/home-about2.png"
              alt="RnD Technosoft Astronaut Workstation"
              fill
              priority
              className="object-contain object-bottom"
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

      {/* ----------------- MAIN BANNER CONTENT (LEFT-ALIGNED OVER BACKGROUND) ----------------- */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: PAGE TITLE & BREADCRUMB ================= */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8 max-w-2xl">
            
            {/* Breadcrumb Navigation */}
            {breadcrumb && (
              <div className="inline-flex items-center gap-3 text-xs font-mono font-medium tracking-[0.25em] text-neutral-400 uppercase">
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-[#FFD400] transition-colors"
                >
                  <Home className="w-4 h-4" />
                  <span>HOME</span>
                </Link>
                <span className="text-white/40">/</span>
                <span className="text-[#FFD400] tracking-[0.3em] font-bold">{breadcrumb}</span>
              </div>
            )}

            {/* Page Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[0.95] font-[family-name:var(--font-bebas)] uppercase">
              {title}
            </h1>

            {/* Decorative Yellow Line */}
            <div className="w-24 h-1 bg-[#FFD400] rounded-full shadow-[0_0_20px_rgba(255,212,0,0.5)]" />

          </div>

          {/* ================= RIGHT COLUMN (EMPTY TO EXPOSE THE ASTRONAUT & WORKSTATION IN BACKGROUND) ================= */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 min-h-[460px] pointer-events-none" />

        </div>
      </div>
    </section>
  );
}
