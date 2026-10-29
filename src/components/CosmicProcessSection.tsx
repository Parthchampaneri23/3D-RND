"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

interface ProcessStep {
  number: string;
  stepLabel: string;
  phase: string;
  title: string;
  desc: string;
  deliverable: string;
  kpis: string[];
}

export default function CosmicProcessSection({
  className = "py-24 sm:py-32",
}: {
  className?: string;
} = {}) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const steps: ProcessStep[] = [
    {
      number: "01",
      stepLabel: "STEP 01",
      phase: "Analysis & Discovery",
      title: "ANALYSIS OF CLIENT NEEDS & AUDIT",
      desc: "We analyze your business architecture, user telemetry, technical bottlenecks, and market competitors to define precise project requirements, cloud topology, and conversion KPIs.",
      deliverable: "Architecture Audit & Scope Blueprint",
      kpis: ["Cloud Infrastructure Audit", "Telemetry Benchmarking", "Target Audience Topology"],
    },
    {
      number: "02",
      stepLabel: "STEP 02",
      phase: "Strategy & Systems",
      title: "DEVELOPMENT OF AN INDIVIDUAL STRATEGY",
      desc: "Crafting the technical and creative roadmap: cloud infrastructure design, multi-region database schemas, sprint timelines, performance budgets, and high-velocity growth funnels.",
      deliverable: "System Design & Sprint Backlog",
      kpis: ["Terraform IaC Blueprint", "Data Schema & RBAC Design", "Sprint Velocity Roadmap"],
    },
    {
      number: "03",
      stepLabel: "STEP 03",
      phase: "Design & UX",
      title: "SPATIAL 3D & UI/UX PROTOTYPING",
      desc: "Designing high-fidelity spatial design systems, responsive interactive UI in Figma, cinema-grade PBR micro-interaction choreography, and brand visual guidelines.",
      deliverable: "Interactive Design System",
      kpis: ["Figma Token Design System", "60 FPS Micro-Interactions", "Responsive Viewport Matrix"],
    },
    {
      number: "04",
      stepLabel: "STEP 04",
      phase: "Engineering",
      title: "FULL-STACK AGILE SPRINT CYCLES",
      desc: "Writing clean, modular, tested code in two-week agile sprint cycles. Continuous integration with automated regression testing and live staging environments for real-time client verification.",
      deliverable: "Bi-Weekly Live Staging Releases",
      kpis: ["100% Type-Safe TypeScript", "CI/CD Auto-Regression Tests", "Zero-Latency API Endpoints"],
    },
    {
      number: "05",
      stepLabel: "STEP 05",
      phase: "Launch Ops",
      title: "ZERO-DOWNTIME MULTI-REGION LAUNCH",
      desc: "Multi-region CDN rollout, load testing under peak concurrent traffic simulations, penetration security audits, and flawless production release handover.",
      deliverable: "Production Release & Handover",
      kpis: ["Sub-50ms Global TTFB", "100% Penetration Test Pass", "24/7 SRE Uptime Watch"],
    },
    {
      number: "06",
      stepLabel: "STEP 06",
      phase: "Telemetry",
      title: "TELEMETRY & CONTINUOUS OPTIMIZATION",
      desc: "Post-launch real-time user behavior analytics, conversion funnel experimentation, core web vitals fine-tuning, and ongoing continuous feature scaling with 99.99% SLA.",
      deliverable: "Continuous Growth & 24/7 SLA",
      kpis: ["Core Web Vitals 95+", "Continuous Conversion Lift", "Automated Security Patches"],
    },
  ];

  // GSAP Scroll Animations: Entrance & Stagger on Scroll (Visual entrance only, steps managed by hover)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const container = containerRef.current;
    const cards = cardsContainerRef.current?.querySelectorAll(".process-stair-card");

    if (!section || !container) return;

    const ctx = gsap.context(() => {
      // 1. Top Metadata Bar Entrance
      gsap.fromTo(
        ".process-meta-bar",
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Giant Typography Title Reveal
      gsap.fromTo(
        ".process-title-reveal",
        { opacity: 0, y: 35, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-title-reveal",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Frame entrance animation
      gsap.fromTo(
        container,
        {
          opacity: 0,
          y: 50,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );

      // 4. Cascading Staircase Steps Entrance Animation
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 60,
            scaleY: 0.88,
            transformOrigin: "bottom center",
          },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 1.0,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className={`relative ${className} bg-[#050608] text-white overflow-hidden border-t border-white/5 selection:bg-[#FFD400] selection:text-black`}
    >
      {/* Background Ambient Galaxy Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#FFD400]/4 blur-[180px] rounded-full pointer-events-none" />

      {/* Outer Max Width Container */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* ================= TOP METADATA BAR (Matching image header) ================= */}
        <div className="process-meta-bar flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10 font-mono text-xs text-neutral-400 uppercase tracking-widest">
          <div className="flex items-center space-x-3">
            <span className="text-[#FFD400] font-bold text-sm">➔</span>
            <span className="text-[#FFD400] font-semibold">// STAGES OF WORK</span>
            <span className="text-white/20">|</span>
            <span className="hover:text-white transition-colors cursor-pointer">// METHODOLOGY</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-neutral-500">ENGINEERING // AGENCY</span>
            <span className="font-[family-name:var(--font-syne)] font-bold text-lg sm:text-xl text-[#FFD400] tracking-wider leading-none">
              RND TECHNOSOFT
            </span>
          </div>
        </div>

        {/* ================= MAIN FRAMED CYBER CONTAINER ================= */}
        <div
          ref={containerRef}
          className="relative w-full rounded-2xl bg-[#08090e] border border-white/15 p-6 sm:p-8 lg:p-10 xl:p-12 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
        >
          {/* Subtle Grid Lines Background */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Top Left Header Label Inside Frame */}
          <div className="flex items-center justify-between mb-8 sm:mb-12 relative z-10">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#FFD400]/80">
              // 6 STAGES OF WORK
            </div>
          </div>

          {/* Top Section: Giant Typography + 2 Architecture Telemetry Note Blocks */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 sm:mb-16 relative z-10">
            {/* Left/Middle: Giant Bold Syne Heading matching other section headers */}
            <div className="lg:col-span-8">
              <h2 className="process-title-reveal font-[family-name:var(--font-syne)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] uppercase select-none">
                STAGES OF
                <br />
                OUR WORK <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.4)]">WITH YOU</span>
              </h2>
            </div>

            {/* Right: 2 Architectural Micro-Notes (Exact from reference design) */}
            <div className="lg:col-span-4 space-y-5 pt-2 font-mono text-xs text-neutral-400">
              <div className="space-y-1.5 border-l-2 border-[#FFD400]/40 pl-4">
                <span className="text-[#FFD400] block text-[11px] font-bold tracking-widest">[ 01 ]</span>
                <p className="text-xs sm:text-sm leading-relaxed text-neutral-300 font-normal">
                  WE OFFER A COMPREHENSIVE ENGINEERING PROCESS COVERING ALL PHASES FROM DISCOVERY TO OBSERVABILITY.
                </p>
              </div>

              <div className="space-y-1.5 border-l-2 border-[#FFD400]/40 pl-4">
                <span className="text-[#FFD400] block text-[11px] font-bold tracking-widest">[ 02 ]</span>
                <p className="text-xs sm:text-sm leading-relaxed text-neutral-300 font-normal">
                  OUR SQUADS WORK TO PROVIDE YOUR BUSINESS WITH MAXIMUM VELOCITY, ZERO DOWNTIME, AND MEASURABLE ROI.
                </p>
              </div>
            </div>
          </div>

          {/* ================= THE CASCADING STAIRCASE STEPS DISPLAY ================= */}
          <div ref={cardsContainerRef} className="relative z-10 mb-8 sm:mb-10 w-full overflow-x-auto lg:overflow-visible no-scrollbar">
            
            {/* Desktop Cascading Staircase: Proportional and Never Cropped */}
            <div className="hidden lg:flex items-end gap-2.5 xl:gap-3.5 w-full min-h-[410px]">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                const dist = Math.abs(idx - activeStep);

                // Dynamic Cascading Staircase Heights & Proportions relative to active card
                let heightStyle = "h-[170px]";
                let flexStyle = "flex-1";

                if (dist === 0) {
                  heightStyle = "h-[390px] xl:h-[410px]";
                  flexStyle = "flex-[2.8] xl:flex-[3.2] min-w-[280px] xl:min-w-[320px]";
                } else if (dist === 1) {
                  heightStyle = "h-[310px] xl:h-[325px]";
                } else if (dist === 2) {
                  heightStyle = "h-[265px] xl:h-[275px]";
                } else if (dist === 3) {
                  heightStyle = "h-[225px] xl:h-[235px]";
                } else if (dist === 4) {
                  heightStyle = "h-[195px] xl:h-[200px]";
                } else {
                  heightStyle = "h-[165px] xl:h-[170px]";
                }

                // Progressive amber/gold tones stepping down from active
                const toneClasses = [
                  "bg-[#FFD400] text-black border-[#FFD400]", // Dist 0 (Active)
                  "bg-[#e0b800] text-black/90 border-[#e0b800]", // Dist 1
                  "bg-[#bfa000] text-black/90 border-[#bfa000]", // Dist 2
                  "bg-[#8c7500] text-white border-[#8c7500]",    // Dist 3
                  "bg-[#665400] text-white/90 border-[#665400]", // Dist 4
                  "bg-[#403500] text-white/80 border-[#403500]", // Dist 5
                ];

                const cardTone = toneClasses[dist] || "bg-[#332a00] text-white/70 border-[#332a00]";

                return (
                  <div
                    key={step.number}
                    onMouseEnter={() => setActiveStep(idx)}
                    onClick={() => setActiveStep(idx)}
                    className={`process-stair-card cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.2,0.8,0.2,1)] flex flex-col justify-between p-5 xl:p-6 rounded-2xl relative select-none border group overflow-hidden ${flexStyle} ${heightStyle} ${
                      isActive
                        ? "bg-[#FFD400] text-black border-2 border-[#FFD400] shadow-[0_15px_40px_rgba(255,212,0,0.35)]"
                        : `${cardTone} hover:opacity-100 opacity-90 hover:-translate-y-1.5`
                    }`}
                  >
                    {/* Top Step Number Label */}
                    <div>
                      <div className="font-[family-name:var(--font-syne)] font-bold text-lg sm:text-xl tracking-tight leading-none mb-2.5">
                        {step.stepLabel}
                      </div>

                      {/* Title: Show full title & desc when active, clean phase label when collapsed */}
                      {isActive ? (
                        <div className="space-y-2.5">
                          <h3 className="font-bold text-lg xl:text-xl uppercase leading-snug tracking-tight">
                            {step.title}
                          </h3>
                          <p className="text-sm sm:text-base xl:text-[16px] font-normal leading-relaxed text-black/90">
                            {step.desc}
                          </p>
                        </div>
                      ) : (
                        <div className="truncate font-bold text-xs uppercase opacity-85 mt-1.5">
                          {step.phase}
                        </div>
                      )}
                    </div>

                    {/* Bottom of Step Card: No text cropping */}
                    {isActive ? (
                      <div className="pt-3 border-t border-black/20 flex flex-wrap items-center justify-between gap-2 mt-2">
                        <span className="text-[11px] font-mono font-bold tracking-wider uppercase truncate max-w-[170px] xl:max-w-none">
                          OUTPUT: {step.deliverable}
                        </span>
                        <Link
                          href="#contact"
                          className="px-3.5 py-1.5 rounded-lg bg-black text-[#FFD400] text-xs font-mono font-bold tracking-wider uppercase inline-flex items-center space-x-1.5 hover:bg-neutral-900 transition-colors shadow-sm shrink-0"
                        >
                          <span>MORE DETAIL</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    ) : (
                      <div className="font-mono text-[11px] opacity-75 font-semibold">
                        0{idx + 1}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile / Tablet Accordion View (Responsive fallback) */}
            <div className="lg:hidden space-y-3">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className={`rounded-xl p-5 border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#FFD400] text-black border-[#FFD400] shadow-lg"
                        : "bg-white/[0.04] text-white border-white/10 hover:bg-white/[0.08]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-[family-name:var(--font-syne)] font-bold text-base tracking-tight">
                        {step.stepLabel} // {step.phase}
                      </span>
                      <span className="font-mono text-xs font-bold">0{idx + 1}</span>
                    </div>

                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-black/15 space-y-2.5">
                        <h4 className="font-bold text-base leading-tight uppercase">
                          {step.title}
                        </h4>
                        <p className="text-sm leading-relaxed font-normal text-black/90">
                          {step.desc}
                        </p>
                        <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase">
                            OUTPUT: {step.deliverable}
                          </span>
                          <Link
                            href="#contact"
                            className="px-3 py-1 bg-black text-[#FFD400] text-[11px] font-mono font-bold uppercase rounded"
                          >
                            MORE DETAIL
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= BOTTOM BAR: BACK / NEXT BUTTONS + HUGE "OUR APPROACH" ================= */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10 relative z-10">
            {/* Left: Back / Next Navigation Buttons (Exact as reference design) */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider transition-colors flex items-center space-x-1 border border-white/10"
              >
                <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                <span>BACK</span>
              </button>

              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-lg bg-[#FFD400] hover:bg-[#ffe033] text-black text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center space-x-1 shadow-[0_0_15px_rgba(255,212,0,0.3)]"
              >
                <span>NEXT</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>

              <span className="hidden sm:inline-block ml-4 font-mono text-xs text-neutral-400">
                0{activeStep + 1} / 0{steps.length}
              </span>
            </div>

            {/* Right: "OUR APPROACH" Massive Typography (Exact as in image footer) */}
            <div className="font-[family-name:var(--font-syne)] font-extrabold text-xl sm:text-3xl lg:text-4xl tracking-widest text-white/30 uppercase select-none pointer-events-none">
              OUR APPROACH
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
