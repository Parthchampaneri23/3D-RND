"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Zap,
  Gauge,
  TrendingUp,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  RotateCcw,
} from "lucide-react";

export interface BeforeAfterMetric {
  label: string;
  before: string;
  after: string;
  improvement: string;
  subtext?: string;
  icon?: "gauge" | "zap" | "trending" | "shield";
}

export interface BeforeAfterData {
  badge?: string;
  title?: string;
  highlightText?: string;
  description?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeImage: string;
  afterImage: string;
  beforeTagline?: string;
  afterTagline?: string;
  metrics?: BeforeAfterMetric[];
  legacyPoints?: string[];
  modernPoints?: string[];
}

interface BeforeAfterSectionProps {
  data?: BeforeAfterData;
  type?: "service" | "portfolio" | "general";
  category?: string;
  title?: string;
}

// Category-tailored fallback configurations
function getFallbackData(
  category: string = "Web & Cloud",
  itemTitle: string = "Digital System",
  customImage?: string
): BeforeAfterData {
  const cat = category.toLowerCase();

  if (cat.includes("brand") || cat.includes("design")) {
    return {
      badge: "BRAND TRANSFORMATION BENCHMARK",
      title: "Visual Architecture",
      highlightText: "Transformation",
      description: `A comparative look at how we elevated ${itemTitle} from a fragmented, dated visual presence to an avant-garde, award-winning design system with spatial tokens.`,
      beforeLabel: "Legacy Identity (Outdated)",
      afterLabel: "RnD Spatial Design System",
      beforeImage: "/images/about_blank_screen.jpg",
      afterImage: customImage || "/images/project_toma_nota.jpg",
      beforeTagline: "Inconsistent assets, low contrast, no spatial 3D presence",
      afterTagline: "Unified atomic tokens, 3D WebGL hero, 4.6x engagement lift",
      metrics: [
        {
          label: "Brand Recall & Engagement",
          before: "14%",
          after: "78%",
          improvement: "+457% Lift",
          subtext: "Measured via user heatmaps & direct recall surveys",
          icon: "trending",
        },
        {
          label: "Visual Cohesion Score",
          before: "42 / 100",
          after: "98 / 100",
          improvement: "+133% Cohesion",
          subtext: "Cross-platform design token unification",
          icon: "shield",
        },
        {
          label: "Asset Delivery Payload",
          before: "14.2 MB",
          after: "1.4 MB",
          improvement: "-90% Size",
          subtext: "WebP / AVIF & SVG vectorization",
          icon: "zap",
        },
        {
          label: "Session Depth Duration",
          before: "48 sec",
          after: "3 min 45 sec",
          improvement: "+368% Dwell",
          subtext: "Interactive tactile micro-animations",
          icon: "gauge",
        },
      ],
      legacyPoints: [
        "Fragmented typography scales across web, mobile, and print collateral",
        "Flat, static 2D visuals with zero interactive or spatial depth",
        "Disjointed color palette lacking modern dark-mode accessibility",
        "Slow unoptimized asset delivery driving high bounce rates",
      ],
      modernPoints: [
        "Sculptural avant-garde typography system built for luxury appeal",
        "Interactive Three.js 3D viewport running at steady 60 FPS",
        "Harmonious cyber-luxe color tokens with gold and neon accents",
        "Edge-cached asset pipeline delivering sub-second visual renders",
      ],
    };
  }

  if (cat.includes("market") || cat.includes("seo") || cat.includes("social")) {
    return {
      badge: "GROWTH & PERFORMANCE BENCHMARK",
      title: "Audience & Acquisition",
      highlightText: "Transformation",
      description: `Examining the quantum leap in organic discovery, conversion velocity, and customer acquisition after deploying RnD technical marketing engineering.`,
      beforeLabel: "Legacy Campaign Baseline",
      afterLabel: "RnD High-Velocity Funnel",
      beforeImage: "/images/about_blank_screen.jpg",
      afterImage: customImage || "/images/digi_market.png",
      beforeTagline: "Page 4 SERP obscurity, 1.1% conversion, wasted ad spend",
      afterTagline: "Top 3 Google rankings, 4.8% conversion, 340% pipeline ROI",
      metrics: [
        {
          label: "Organic Search Visibility",
          before: "Page 4+",
          after: "Top 3 SERP",
          improvement: "#1 Dominance",
          subtext: "Schema markup & Core Web Vitals dominance",
          icon: "trending",
        },
        {
          label: "Funnel Conversion Rate",
          before: "1.1%",
          after: "4.8%",
          improvement: "+336% Lift",
          subtext: "Zero-friction intent-driven user pathways",
          icon: "gauge",
        },
        {
          label: "Cost Per Acquisition (CPA)",
          before: "$142",
          after: "$39",
          improvement: "-72.5% Cost",
          subtext: "High-intent algorithmic audience targeting",
          icon: "zap",
        },
        {
          label: "Monthly Qualified Leads",
          before: "18 Leads",
          after: "164 Leads",
          improvement: "+811% Volume",
          subtext: "B2B enterprise pipeline verified",
          icon: "shield",
        },
      ],
      legacyPoints: [
        "Unoptimized landing pages causing 65%+ bounce rate before form fill",
        "Thin content architecture penalised by modern search search engines",
        "Untracked attribution models wasting PPC budget across dead channels",
        "Sluggish page speeds destroying mobile ad click-through conversions",
      ],
      modernPoints: [
        "High-converting kinetic landing pages with interactive calculators",
        "Rich JSON-LD entity graph schemas dominating Google AI Overviews",
        "Real-time server-side attribution pipeline with conversion telemetry",
        "Sub-500ms edge delivery maximizing paid ad return on ad spend",
      ],
    };
  }

  if (cat.includes("ai") || cat.includes("data")) {
    return {
      badge: "AI INTELLIGENCE BENCHMARK",
      title: "Autonomous Intelligence",
      highlightText: "Transformation",
      description: `Comparing manual data silos with our modern autonomous AI pipelines, real-time vector embeddings, and enterprise-grade inference engine.`,
      beforeLabel: "Manual Siloed Analytics",
      afterLabel: "RnD Autonomous AI Engine",
      beforeImage: "/images/about_blank_screen.jpg",
      afterImage: customImage || "/images/project_ai.jpg",
      beforeTagline: "Manual spreadsheets, 48hr data lag, zero automation",
      afterTagline: "Sub-second vector search, autonomous agents, 99.8% precision",
      metrics: [
        {
          label: "Query Inference Latency",
          before: "3.8 sec",
          after: "180 ms",
          improvement: "21x Faster",
          subtext: "Vectorized embeddings & GPU cache clusters",
          icon: "zap",
        },
        {
          label: "Automated Workflow Coverage",
          before: "8%",
          after: "84%",
          improvement: "+950% Scale",
          subtext: "Autonomous reasoning agent swarms",
          icon: "trending",
        },
        {
          label: "Data Model Accuracy",
          before: "71.4%",
          after: "99.2%",
          improvement: "+27.8% Accuracy",
          subtext: "Fine-tuned enterprise domain models",
          icon: "shield",
        },
        {
          label: "Monthly Engineering Hours Saved",
          before: "0 hrs",
          after: "420 hrs",
          improvement: "Massive ROI",
          subtext: "Eliminated repetitive ETL processing",
          icon: "gauge",
        },
      ],
      legacyPoints: [
        "Fragmented tabular databases requiring hours of manual queries",
        "Zero real-time prediction or autonomous decision-making capability",
        "Prone to human data entry mistakes and compliance oversights",
        "Inability to search unstructured PDF reports, contracts, or audio",
      ],
      modernPoints: [
        "Unified pgvector & Pinecone knowledge graph with semantic search",
        "Autonomous agent workflows executing complex tasks in seconds",
        "SOC2-compliant zero-trust encryption for all enterprise data",
        "Real-time streaming telemetry and predictive dashboard telemetry",
      ],
    };
  }

  // Default / Web & Cloud / 3D
  return {
    badge: "ARCHITECTURAL SYSTEM BENCHMARK",
    title: "Enterprise Performance",
    highlightText: "Transformation",
    description: `A direct comparison between the sluggish legacy codebase and our modern, edge-accelerated Next.js 15 full-stack architecture built for ${itemTitle}.`,
    beforeLabel: "Legacy Monolithic Baseline",
    afterLabel: "RnD Edge Next.js 15 Architecture",
    beforeImage: "/images/about_blank_screen.jpg",
    afterImage: customImage || "/images/service_webdev.jpg",
    beforeTagline: "Slow 4.8s TTFB, single-server crash risk, 38 Lighthouse",
    afterTagline: "Sub-400ms Edge SSR, 99.99% SLA, 99 Lighthouse Score",
    metrics: [
      {
        label: "Time to First Byte (TTFB)",
        before: "4.82s",
        after: "0.38s",
        improvement: "92% Faster",
        subtext: "Multi-region Cloudflare Edge runtime",
        icon: "zap",
      },
      {
        label: "Lighthouse Performance Score",
        before: "38 / 100",
        after: "99 / 100",
        improvement: "+161% Score",
        subtext: "Sub-100ms hydration with zero layout shift",
        icon: "gauge",
      },
      {
        label: "User Retention & Conversion",
        before: "1.2%",
        after: "4.8%",
        improvement: "+300% Lift",
        subtext: "Silky-smooth 60 FPS spatial interactions",
        icon: "trending",
      },
      {
        label: "Peak System Concurrency",
        before: "250 Req/sec",
        after: "10M+ Req/min",
        improvement: "Enterprise Grade",
        subtext: "Distributed Redis mesh & PostgreSQL read-replicas",
        icon: "shield",
      },
    ],
    legacyPoints: [
      "Bloated JavaScript bundles (>4.5 MB) blocking the browser main thread",
      "Monolithic single-point-of-failure server crashing during peak traffic",
      "Cumulative layout shift (CLS > 0.38) frustrating mobile visitors",
      "Manual deployment cycles with high risk of unexpected production bugs",
    ],
    modernPoints: [
      "React 19 Server Components with sub-90 KB initial hydration bundle",
      "Multi-region serverless cluster with automated failover and 99.99% SLA",
      "Zero layout shift (CLS 0.00) with responsive fluid typography tokens",
      "Continuous CI/CD with automated end-to-end regression test suites",
    ],
  };
}

export default function BeforeAfterSection({
  data,
  type = "general",
  category = "Web & Cloud",
  title = "System",
}: BeforeAfterSectionProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Compute merged data
  const finalData = data || getFallbackData(category, title);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };

    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [isDragging, handleMove]);

  return (
    <section className="relative w-full py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-[#050608] via-[#090b10] to-[#050608] border-t border-b border-white/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#FFD400]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#FFD400]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono uppercase tracking-[0.22em] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{finalData.badge || "PROVEN ARCHITECTURAL TRANSFORMATION"}</span>
          </div>

          <h2 className="font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-tight leading-[1.15]">
            {finalData.title || "The Transformation"}{" "}
            <span className="text-[#FFD400]">
              {finalData.highlightText || "Before & After"}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            {finalData.description}
          </p>
        </div>

        {/* =========================================================================
            1. INTERACTIVE BEFORE & AFTER SLIDER CANVAS
            ========================================================================= */}
        <div className="space-y-4 mb-16">
          <div
            ref={containerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onMouseDown={(e) => handlePointerDown(e.clientX)}
            onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl cursor-ew-resize select-none bg-black group"
          >
            {/* ----------------- AFTER IMAGE (BASE LAYER - FULL RIGHT) ----------------- */}
            <div className="absolute inset-0">
              <Image
                src={finalData.afterImage}
                alt={finalData.afterLabel || "After Transformation"}
                fill
                priority
                className="object-cover object-center brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* AFTER Floating Label (Right) */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 flex flex-col items-end space-y-1.5">
                <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#FFD400]/60 text-[#FFD400] text-[11px] sm:text-xs font-mono uppercase tracking-wider font-bold shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#FFD400] animate-pulse" />
                  <span>{finalData.afterLabel || "AFTER: RnD Architecture"}</span>
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-white/80 bg-black/60 px-2.5 py-0.5 rounded backdrop-blur-sm hidden sm:inline-block">
                  {finalData.afterTagline || "99.99% SLA • 60 FPS • Edge SSR"}
                </span>
              </div>
            </div>

            {/* ----------------- BEFORE IMAGE (CLIPPED TOP LAYER - LEFT) ----------------- */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <Image
                src={finalData.beforeImage}
                alt={finalData.beforeLabel || "Before Transformation"}
                fill
                className="object-cover object-center grayscale contrast-125 brightness-75 scale-105"
              />
              {/* Scanline CRT overlay effect for retro/legacy feel */}
              <div
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(0,0,0,0.4) 0px, rgba(0,0,0,0.4) 1px, transparent 1px, transparent 3px)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-red-950/20 to-black/40" />

              {/* BEFORE Floating Label (Left) */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 flex flex-col items-start space-y-1.5">
                <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-red-500/50 text-red-400 text-[11px] sm:text-xs font-mono uppercase tracking-wider font-bold shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span>{finalData.beforeLabel || "BEFORE: Legacy System"}</span>
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-neutral-400 bg-black/60 px-2.5 py-0.5 rounded backdrop-blur-sm hidden sm:inline-block">
                  {finalData.beforeTagline || "4.8s Latency • Monolith • High Bounce"}
                </span>
              </div>
            </div>

            {/* ----------------- VERTICAL DRAGGABLE DIVIDER LINE ----------------- */}
            <div
              className="absolute top-0 bottom-0 z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Divider Glow & Vertical Bar */}
              <div className="relative h-full flex items-center justify-center -translate-x-1/2">
                <div className="w-[2.5px] h-full bg-[#FFD400] shadow-[0_0_16px_#FFD400]" />

                {/* Draggable Circular Knob */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#FFD400] text-black flex items-center justify-center shadow-[0_0_25px_rgba(255,212,0,0.8)] border-2 border-black transition-transform duration-150 ${
                    isDragging ? "scale-110 ring-4 ring-[#FFD400]/40" : "group-hover:scale-105"
                  }`}
                >
                  <div className="flex items-center justify-center space-x-0.5">
                    <ChevronLeft className="w-4 h-4 stroke-[3]" />
                    <div className="w-[1px] h-3 bg-black/40" />
                    <ChevronRight className="w-4 h-4 stroke-[3]" />
                  </div>
                </div>

                {/* Tactile "Drag to Reveal" Hint Badge */}
                <div
                  className={`absolute -bottom-10 sm:-bottom-12 whitespace-nowrap px-3 py-1 rounded-full bg-black/90 backdrop-blur-md border border-[#FFD400]/40 text-[#FFD400] text-[10px] font-mono uppercase tracking-widest pointer-events-none transition-opacity duration-300 ${
                    isHovering || isDragging ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Slide to Reveal
                </div>
              </div>
            </div>
          </div>

          {/* Quick-Preset Toolbar (Mobile & Desktop Friendly) */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-2 pt-2 text-xs font-mono text-neutral-400">
            <div className="flex items-center space-x-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#FFD400]" />
              <span className="uppercase tracking-wider text-[11px] text-neutral-300">
                Reveal Ratio: <span className="text-[#FFD400] font-bold">{Math.round(sliderPosition)}%</span>
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setSliderPosition(10)}
                className={`px-3 py-1 rounded-full border transition-all text-[11px] uppercase tracking-wider cursor-pointer ${
                  sliderPosition <= 15
                    ? "bg-red-500/20 text-red-300 border-red-500/50"
                    : "bg-white/[0.04] text-neutral-400 border-white/10 hover:text-white"
                }`}
              >
                100% After
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(50)}
                className={`px-3.5 py-1 rounded-full border transition-all text-[11px] uppercase tracking-wider font-semibold cursor-pointer ${
                  sliderPosition === 50
                    ? "bg-[#FFD400] text-black border-[#FFD400]"
                    : "bg-white/[0.04] text-neutral-300 border-white/10 hover:text-[#FFD400] hover:border-[#FFD400]/40"
                }`}
              >
                50 / 50 Split
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(90)}
                className={`px-3 py-1 rounded-full border transition-all text-[11px] uppercase tracking-wider cursor-pointer ${
                  sliderPosition >= 85
                    ? "bg-white/20 text-white border-white/40"
                    : "bg-white/[0.04] text-neutral-400 border-white/10 hover:text-white"
                }`}
              >
                100% Before
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(50)}
                aria-label="Reset slider position to 50 percent"
                className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center hover:bg-white/10 text-neutral-300 transition-colors"
                title="Reset to 50/50"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. COMPARATIVE TRANSFORMATION SCORECARD (4 METRICS)
            ========================================================================= */}
        {finalData.metrics && finalData.metrics.length > 0 && (
          <div className="mb-16 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#FFD400] font-semibold block mb-1">
                  Empirical Verification
                </span>
                <h3 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-white uppercase">
                  Transformation Impact Scorecard
                </h3>
              </div>
              <p className="text-xs font-mono text-neutral-400">
                Audited against standard enterprise SLAs &amp; production metrics
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {finalData.metrics.map((metric, idx) => {
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#0c0e14] border border-white/10 hover:border-[#FFD400]/40 transition-all hover:shadow-[0_0_30px_rgba(255,212,0,0.12)] group flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                          Metric // 0{idx + 1}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FFD400] group-hover:bg-[#FFD400] group-hover:text-black transition-colors">
                          {idx === 0 && <Gauge className="w-4 h-4" />}
                          {idx === 1 && <Zap className="w-4 h-4" />}
                          {idx === 2 && <TrendingUp className="w-4 h-4" />}
                          {idx === 3 && <ShieldCheck className="w-4 h-4" />}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs sm:text-sm font-medium text-neutral-300 mb-3">
                          {metric.label}
                        </h4>

                        {/* Before vs After comparative readout */}
                        <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                          <div>
                            <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-500 block">
                              Legacy Before
                            </span>
                            <span className="text-sm font-mono font-semibold text-red-400/90 line-through decoration-red-500/60">
                              {metric.before}
                            </span>
                          </div>

                          <div className="border-l border-white/10 pl-2">
                            <span className="text-[9px] font-mono uppercase tracking-wider text-[#FFD400] block">
                              RnD After
                            </span>
                            <span className="text-sm font-mono font-bold text-white">
                              {metric.after}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase font-bold text-[#FFD400] bg-[#FFD400]/10 px-2 py-0.5 rounded border border-[#FFD400]/25">
                        {metric.improvement}
                      </span>
                      {metric.subtext && (
                        <span className="text-[10px] text-neutral-400 font-light truncate max-w-[140px]" title={metric.subtext}>
                          {metric.subtext}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =========================================================================
            3. STRATEGIC ARCHITECTURAL DELTA: SIDE-BY-SIDE BREAKDOWN
            ========================================================================= */}
        {(finalData.legacyPoints || finalData.modernPoints) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Legacy Bottlenecks Card (Before) */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#140b0d] to-[#0d0708] border border-red-500/25 shadow-xl space-y-6 relative overflow-hidden group">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold block">
                    Phase 01 // Baseline State
                  </span>
                  <h4 className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl font-bold text-white uppercase">
                    Legacy Architecture Bottlenecks
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Prior to intervention, operational bottlenecks in latency, visual fragmentation, and server infrastructure capped organic growth.
              </p>

              <div className="space-y-3 pt-2">
                {(finalData.legacyPoints || []).map((point, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start space-x-3 text-xs sm:text-sm text-neutral-300 font-light"
                  >
                    <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✕
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Resulting Status</span>
                <span className="text-red-400 font-bold uppercase">Suboptimal ROI &amp; Churn</span>
              </div>
            </div>

            {/* RnD Engineered Architecture Card (After) */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#12140c] to-[#0c0e14] border border-[#FFD400]/40 shadow-2xl space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#FFD400]/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="flex items-center space-x-3 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-[#FFD400]/20 border border-[#FFD400]/40 flex items-center justify-center text-[#FFD400] shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] font-bold block">
                    Phase 02 // RnD Target State
                  </span>
                  <h4 className="font-[family-name:var(--font-syne)] text-xl sm:text-2xl font-bold text-white uppercase">
                    Engineered System Dominance
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed relative z-10">
                Post-deployment, systems operate under our continuous zero-downtime SLA with sub-second response times and tactile 3D immersion.
              </p>

              <div className="space-y-3 pt-2 relative z-10">
                {(finalData.modernPoints || []).map((point, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-3.5 rounded-xl bg-[#FFD400]/[0.04] border border-[#FFD400]/20 flex items-start space-x-3 text-xs sm:text-sm text-neutral-200 font-light hover:border-[#FFD400]/40 transition-colors"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#FFD400] text-black flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400 relative z-10">
                <span>Certified Delivery</span>
                <span className="text-[#FFD400] font-bold uppercase">Enterprise SLA Compliant</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
