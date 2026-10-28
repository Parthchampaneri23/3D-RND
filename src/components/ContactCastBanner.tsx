"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

export default function ContactCastBanner() {
  return (
    <section className="relative w-full h-[80vh] min-h-[540px] max-h-[780px] bg-[#050608] text-white flex flex-col justify-between overflow-hidden select-none px-6 sm:px-10 lg:px-16 pt-20 sm:pt-22 pb-4 sm:pb-6">
      {/* 2. Main 4-Column Architectural Grid Layout (80vh) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 flex-1 my-auto items-stretch pt-4 sm:pt-6 pb-2 min-h-0">
        {/* Column 1: Left Typography Column (~33% width) */}
        <div className="lg:col-span-4 flex flex-col justify-between pr-2 lg:pr-6 py-1 relative z-20">
          {/* Top Paragraph */}
          <div>
            <p className="text-xs sm:text-[13px] text-white/60 font-light leading-relaxed max-w-[270px] tracking-wide">
              Direct comms with our engineering principals and creative directors to architect high-impact digital systems.
            </p>
          </div>

          {/* Bottom Sculptural Headline Section: Breadcrumb on Upper Side, Title on Bottom Side */}
          <div className="mt-8 lg:mt-auto pt-2 relative z-20 flex flex-col items-start">
            {/* Breadcrumb Navigation (Upper Side) */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/70 mb-3 sm:mb-4 pb-2 border-b border-white/10"
            >
              <Link
                href="/"
                className="flex items-center gap-1.5 text-white/60 hover:text-[#FFD400] transition-colors group"
              >
                <Home className="w-3.5 h-3.5 text-white/40 group-hover:text-[#FFD400] transition-colors" />
                <span>Home</span>
              </Link>
              <ChevronRight className="w-3 h-3 text-white/30" />
              <span className="text-[#FFD400] font-bold">Contact Us</span>
            </nav>

            {/* Sculptural Headline (Bottom Side) */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[84px] font-[family-name:var(--font-syne)] font-bold tracking-tight text-[#f4f4f0] leading-[0.84] uppercase whitespace-nowrap">
              CONTACT
            </h1>
            <div className="flex items-center gap-3 sm:gap-4 mt-1.5 sm:mt-2">
              <span className="w-10 sm:w-14 h-[1.5px] bg-[#FFD400]/80 block shrink-0" />
              <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-[84px] font-[family-name:var(--font-syne)] font-bold tracking-tight text-[#f4f4f0] leading-[0.84] uppercase">
                RND
              </span>
            </div>
          </div>
        </div>

        {/* Columns 2, 3, 4: The 3 Slit Architectural Panels with Colorful Astronaut IT Service Art */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 h-full items-stretch min-h-0 relative z-10">
          {/* Slit 1 (Middle-Left):
              Shifted to UPPER SIDE (top 62%); bottom is open space for headline clearance */}
          <div className="h-full flex flex-col justify-start">
            <div className="relative h-[62%] w-full bg-[#050608] overflow-hidden shadow-2xl border-l border-r border-b border-white/10 group">
              <Image
                src="/images/about/astronaut_it_service_color.jpg"
                alt="Astronaut IT Service Server Infrastructure"
                fill
                className="object-cover object-[18%_center] contrast-110 brightness-100 group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none" />
            </div>
          </div>

          {/* Slit 2 (Center):
              Full-height vertical panel with the astronaut interacting with floating holographic code interfaces */}
          <div className="h-full">
            <div className="relative h-full w-full bg-[#050608] overflow-hidden shadow-2xl border-l border-r border-white/10 group">
              <Image
                src="/images/about/astronaut_it_service_color.jpg"
                alt="Astronaut IT Service Holographic Interface"
                fill
                className="object-cover object-[42%_center] contrast-110 brightness-105 group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Slit 3 (Rightmost):
              Top 74% is the vertical panel showing the server corridor & data flow charts;
              Bottom 26% sits below the panel with the paragraph */}
          <div className="h-full flex flex-col justify-between">
            <div className="relative h-[74%] w-full bg-[#050608] overflow-hidden shadow-2xl border-l border-r border-white/10 group">
              <Image
                src="/images/about/astronaut_it_service_color.jpg"
                alt="Astronaut Cloud Data Infrastructure"
                fill
                className="object-cover object-[76%_center] contrast-110 brightness-100 group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bottom Right Paragraph */}
            <div className="pt-2 pr-2">
              <p className="text-[11px] sm:text-xs text-white/60 font-light leading-relaxed max-w-[260px] tracking-wide">
                Guaranteed 24-hour principal architect response across Zurich, San Francisco, and Mumbai hubs with strict NDA compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
