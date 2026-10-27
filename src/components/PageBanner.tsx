"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home, Sparkles } from "lucide-react";
import CyberButton from "./CyberButton";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  highlightText?: string;
  subtitle: string;
  badge?: string;
  breadcrumbs: BreadcrumbItem[];
  bgImage?: string;
  bgPosition?: string;
  ctaText?: string;
  ctaHref?: string;
  theme?: "light" | "dark";
}

export default function PageBanner({
  title,
  highlightText,
  subtitle,
  badge = "ENTERPRISE DIRECTORY // 2026 ARCHIVE",
  breadcrumbs,
  bgImage = "/images/agency_team_studio.jpg",
  bgPosition = "object-center",
  ctaText,
  ctaHref = "/#contact",
  theme = "dark",
}: PageBannerProps) {
  const isLight = theme === "light";

  return (
    <section
      className={`relative w-full min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] pt-36 sm:pt-44 pb-24 sm:pb-28 flex flex-col justify-center overflow-hidden select-none border-b ${
        isLight
          ? "bg-[#F8FAFC] border-neutral-200/90 text-neutral-900"
          : "bg-[#050608] border-white/10 text-white"
      }`}
    >
      {/* Full-Cover Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bgImage}
          alt={title}
          className={`w-full h-full object-cover ${bgPosition} transition-transform duration-1000 ease-out ${
            isLight
              ? "opacity-50 saturate-125"
              : "opacity-80 saturate-110"
          }`}
        />

        {/* Cinematic Full-Cover Overlays for Edge-to-Edge Image Visibility */}
        {isLight ? (
          <>
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[0.5px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-[#F8FAFC]" />
          </>
        ) : (
          <>
            {/* Even dark cinematic tint so the photo is richly visible edge-to-edge */}
            <div className="absolute inset-0 bg-[#050608]/50 backdrop-blur-[0.5px]" />
            {/* Subtle vertical feathering to blend seamlessly with navbar and section below */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/75 via-transparent to-[#050608]" />
            {/* Ambient gold glow highlight */}
            <div className="absolute -top-24 left-1/3 w-[500px] h-[300px] bg-[#FFD400]/12 blur-[130px] rounded-full pointer-events-none" />
          </>
        )}
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 w-full">
        {/* Breadcrumb Navigation with Pill Backdrop for High Legibility */}
        <nav
          aria-label="Breadcrumb"
          className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-6 px-3.5 py-1.5 rounded-full border ${
            isLight
              ? "bg-white/80 border-neutral-200 text-neutral-600 shadow-sm"
              : "bg-black/50 border-white/10 text-neutral-300 backdrop-blur-md"
          }`}
        >
          <Link
            href="/"
            className={`flex items-center gap-1.5 transition-colors py-1 group ${
              isLight
                ? "hover:text-blue-600 font-semibold"
                : "hover:text-[#FFD400]"
            }`}
          >
            <Home
              className={`w-3.5 h-3.5 transition-colors ${
                isLight
                  ? "text-neutral-500 group-hover:text-blue-600"
                  : "text-neutral-400 group-hover:text-[#FFD400]"
              }`}
            />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={idx}>
                <ChevronRight
                  className={`w-3.5 h-3.5 shrink-0 ${
                    isLight ? "text-neutral-400" : "text-neutral-600"
                  }`}
                />
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className={`transition-colors py-1 ${
                      isLight
                        ? "hover:text-blue-600 text-neutral-600 font-medium"
                        : "hover:text-[#FFD400]"
                    }`}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className={`font-semibold py-1 ${
                      isLight ? "text-neutral-900" : "text-[#FFD400]"
                    }`}
                  >
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Micro-Badge */}
        {badge && (
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-5 ${
              isLight
                ? "bg-white/80 border border-blue-200 text-blue-700 shadow-sm"
                : "bg-black/60 border border-[#FFD400]/40 text-[#FFD400] backdrop-blur-md"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>
        )}

        {/* Banner Title & CTA Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div>
            <h1
              className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-[family-name:var(--font-bebas)] tracking-wide uppercase leading-[0.92] ${
                isLight
                  ? "text-neutral-900"
                  : "text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
              }`}
            >
              {title}{" "}
              {highlightText && (
                <span
                  className={
                    isLight
                      ? "text-blue-600"
                      : "text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.45)]"
                  }
                >
                  {highlightText}
                </span>
              )}
            </h1>
            <p
              className={`text-sm sm:text-base font-normal max-w-2xl mt-4 leading-relaxed ${
                isLight
                  ? "text-neutral-700"
                  : "text-neutral-200 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
              }`}
            >
              {subtitle}
            </p>
          </div>

          {ctaText && (
            <div className="shrink-0 mt-4 lg:mt-0">
              <CyberButton href={ctaHref} size="md">
                {ctaText}
              </CyberButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
