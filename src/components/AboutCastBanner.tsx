"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export default function AboutCastBanner() {
  return (
    <section className="relative w-full h-[75vh] min-h-[720px] max-h-[1024px] bg-[#050608] text-white flex flex-col justify-end overflow-hidden select-none px-6 sm:px-10 lg:px-16 pb-[50px] pt-24">
      {/* Background Image: Original crystal-clear uncompressed resolution with NO overlays */}
      <div className="absolute inset-0  z-0">
        <Image
          src="/banner.png"
          alt="About RnD Technosoft Banner"
          fill
          priority
          unoptimized
          className="object-cover object-bottom "
        />
      </div>

      {/* Foreground Content: Main Heading and Breadcrumb Only */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/80 mb-3 sm:mb-4 pb-2 border-b border-white/20 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 text-white/70 hover:text-[#FFD400] transition-colors group"
          >
            <Home className="w-3.5 h-3.5 text-white/50 group-hover:text-[#FFD400] transition-colors" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-white/40" />
          <span className="text-[#FFD400] font-bold">About Us</span>
        </nav>

        {/* Main Heading */}
        <div className="flex flex-col drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px] font-[family-name:var(--font-syne)] font-bold tracking-tight text-white leading-[0.85] uppercase">
            ABOUT
          </h1>
          <div className="flex items-center gap-3 sm:gap-4 mt-1.5 sm:mt-2.5">
            <span className="w-12 sm:w-16 h-[2.5px] bg-[#FFD400] block shrink-0 shadow-[0_0_14px_rgba(255,212,0,0.9)]" />
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px] font-[family-name:var(--font-syne)] font-bold tracking-tight text-white leading-[0.85] uppercase">
              RND
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
