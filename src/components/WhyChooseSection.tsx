"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Headphones, ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * WaveText component renders text character-by-character with staggered delays
 * producing a smooth, fluid undulating sine-wave ripple across the title.
 */
function WaveText({
  text,
  className = "",
  delayOffset = 0,
}: {
  text: string;
  className?: string;
  delayOffset?: number;
}) {
  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block animate-text-wave"
          style={{
            animationDelay: `${(delayOffset + i) * 0.07}s`,
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

export default function WhyChooseSection({ className = "" }: { className?: string } = {}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const wavePathRef = useRef<SVGPathElement>(null);

  // Typewriter animation state for the main heading
  const typewriterPhrases = [
    "VELOCITY & IMPACT",
    "SCALE & RELIABILITY",
    "ENGINEERING EXCELLENCE",
    "RAPID LAUNCH SPEED",
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("VELOCITY & IMPACT");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typewriterPhrases[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === currentPhrase) {
      // Pause after typing the full phrase
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && currentText === "") {
      // Switch phrase after deleting
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
    } else {
      // Character-by-character typing or backspacing
      const typingSpeed = isDeleting ? 40 : 85;
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? currentPhrase.substring(0, prev.length - 1)
            : currentPhrase.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal & Typewriter Reset on Scroll
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 2. Cards entrance with stagger & 3D tilt
      const cards = cardsGridRef.current?.querySelectorAll(".why-choose-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsGridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 3. Card 01 - Sprint timeline segment fill animation
      const sprintBars = section.querySelectorAll(".sprint-segment-bar");
      if (sprintBars && sprintBars.length > 0) {
        gsap.fromTo(
          sprintBars,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: cardsGridRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 4. Card 02 - Avatars stagger pop
      const avatars = section.querySelectorAll(".team-avatar-pill");
      if (avatars && avatars.length > 0) {
        gsap.fromTo(
          avatars,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cardsGridRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // 5. Card 03 - Wave path line draw
      if (wavePathRef.current) {
        const pathLength = wavePathRef.current.getTotalLength();
        gsap.set(wavePathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(wavePathRef.current, {
          strokeDashoffset: 0,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: wavePathRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const teamAvatars = [
    { src: "/images/career/career_spatial_3d.jpg", alt: "Senior Spatial Engineer" },
    { src: "/images/career/career_cloud_architect.jpg", alt: "Cloud Architect" },
    { src: "/images/career/career_mobile_engineer.jpg", alt: "Mobile Systems Engineer" },
    { src: "/images/career/career_ai_engineer.jpg", alt: "AI Solutions Lead" },
    { src: "/images/career/career_seo_performance.jpg", alt: "Performance Specialist" },
  ];

  return (
    <section
      ref={sectionRef}
      id="why-choose"
      className={`relative py-16 sm:py-24 bg-transparent text-white overflow-hidden ${className}`}
    >
      {/* Background radial atmosphere with infinite subtle ambient breathing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#FFD400]/[0.03] blur-[140px] pointer-events-none rounded-full animate-ambient-pulse" />
      <div className="absolute top-1/4 right-10 w-[350px] h-[350px] bg-[#FFD400]/[0.02] blur-[120px] pointer-events-none rounded-full animate-ambient-drift" />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-12">
        {/* Section Header: Tagline, Title with Typewriter, Subtitle */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFD400]/30 bg-[#FFD400]/10 text-[#FFD400] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-ping" />
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>WHY CHOOSE RND // PROVEN ENGINEERING EDGE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold uppercase font-[family-name:var(--font-syne)] tracking-tight text-white mb-3 min-h-[52px] sm:min-h-[60px] md:min-h-[68px]">
            BUILT FOR MAXIMUM{" "}
            <span className="text-[#FFD400] inline-block">
              {currentText}
              <span className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-[#FFD400] ml-1.5 align-middle animate-cursor-blink shadow-[0_0_10px_#FFD400]" />
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/60 font-[family-name:var(--font-jakarta)] leading-relaxed">
            Accelerate your go-to-market timeline with battle-tested senior engineers, bank-grade cloud resilience, and around-the-clock dedicated engineering support.
          </p>
        </div>

        {/* 3-Column Grid Layout matching the design */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
        >
          {/* ========================================================
              CARD 01 - Rapid Agile Delivery (Left Column - Top)
          ======================================================== */}
          <div className="why-choose-card rounded-[28px] bg-[#FFD400] text-black p-7 sm:p-8 flex flex-col justify-between border border-[#FFD400] shadow-[0_15px_35px_rgba(255,212,0,0.18)] hover:scale-[1.015] transition-all duration-300 lg:col-start-1 lg:row-start-1 group">
            <div>
              <div className="text-2xl sm:text-3xl font-black mb-1.5 text-black font-[family-name:var(--font-syne)] tracking-tight">
                01 /
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-6 leading-tight font-[family-name:var(--font-syne)] text-black">
                <WaveText text="Rapid Agile" />
                <br />
                <WaveText text="Delivery" delayOffset={12} />
              </h3>

              {/* Segmented Sprint Timeline with Infinite Scanner Pulse */}
              <div className="grid grid-cols-4 gap-2 mb-2.5">
                <div className="sprint-segment-bar relative h-1.5 sm:h-2 bg-black rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-bar-shimmer" />
                </div>
                <div className="sprint-segment-bar relative h-1.5 sm:h-2 bg-black rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-bar-shimmer"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
                <div className="sprint-segment-bar relative h-1.5 sm:h-2 bg-black rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-bar-shimmer"
                    style={{ animationDelay: "0.8s" }}
                  />
                </div>
                <div className="sprint-segment-bar relative h-1.5 sm:h-2 bg-black/25 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-transparent animate-bar-shimmer"
                    style={{ animationDelay: "1.2s" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 text-[11px] sm:text-xs font-bold text-black font-[family-name:var(--font-jakarta)] mb-8">
                <span>Sprint 01</span>
                <span>Sprint 02</span>
                <span>Sprint 03</span>
                <span className="text-black/50 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-black/60 animate-ping inline-block" />
                  Deploy
                </span>
              </div>

              {/* Badge with infinite light sheen reflection */}
              <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-[#FFD400] text-xs sm:text-sm font-bold font-[family-name:var(--font-jakarta)] shadow-sm overflow-hidden">
                <span className="w-2 h-2 rounded-full bg-[#FFD400] animate-ping" />
                <span>100% On-Time</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-pass pointer-events-none" />
              </div>
            </div>
          </div>

          {/* ========================================================
              CARD 02 - Top 1% Senior Engineers (Left Column - Bottom)
          ======================================================== */}
          <div className="why-choose-card rounded-[28px] bg-[#0c0d12] border border-white/10 hover:border-white/20 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 lg:col-start-1 lg:row-start-2">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="text-2xl sm:text-3xl font-black text-white/40 font-[family-name:var(--font-syne)] tracking-tight">
                  02 /
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Vetted Talent
                </span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-5 leading-tight font-[family-name:var(--font-syne)] text-white">
                <WaveText text="Top 1% Senior" />
                <br />
                <WaveText text="Engineers" delayOffset={14} />
              </h3>

              {/* Avatar Group with Real Engineer Portraits */}
              <div className="flex items-center -space-x-3 mb-6">
                {teamAvatars.map((person, idx) => (
                  <div
                    key={idx}
                    className="team-avatar-pill relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#0c0d12] overflow-hidden bg-neutral-800 shadow-md transition-transform hover:scale-110 hover:z-20 duration-200"
                  >
                    <Image
                      src={person.src}
                      alt={person.alt}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="team-avatar-pill relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#181920] border-2 border-[#0c0d12] flex items-center justify-center text-xs text-white/85 font-bold font-mono shadow-md overflow-hidden">
                  <span>+45</span>
                  <div className="absolute inset-0 bg-[#FFD400]/10 rounded-full animate-pulse-glow pointer-events-none" />
                </div>
              </div>

              {/* Metric */}
              <div className="flex items-baseline gap-2 mb-5">
                <span className="text-3xl sm:text-4xl font-black text-[#FFD400] font-[family-name:var(--font-syne)] tracking-tight">
                  10+
                </span>
                <span className="text-white/60 text-xs sm:text-sm font-[family-name:var(--font-jakarta)]">
                  Years Avg.
                </span>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                {["React", "Node", "AWS", "Spatial 3D"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70 font-mono hover:border-[#FFD400]/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================
              CENTER HERO CARD - Astronaut with Golden Shield (Center Column - Spans 2 Rows)
          ======================================================== */}
          <div className="why-choose-card rounded-[28px] bg-[#08090d] border border-white/10 hover:border-[#FFD400]/40 p-6 sm:p-8 flex flex-col items-center justify-between md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-2 relative overflow-hidden transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
            {/* Floating Cyber Astronaut + Golden Energy Shield Image & Hologram Rings */}
            <div className="relative z-10 w-full flex-1 flex items-center justify-center min-h-[340px] sm:min-h-[400px] py-4">
              {/* Infinite Rotating Cyber Halo Rings behind the shield */}
              <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-[#FFD400]/10 animate-spin-slow pointer-events-none" />
              <div className="absolute w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] rounded-full border border-dashed border-[#FFD400]/20 animate-spin-reverse pointer-events-none" />
              {/* Golden Core Pulse Aura */}
              <div className="absolute w-[180px] h-[180px] rounded-full bg-[#FFD400]/[0.08] blur-[40px] animate-pulse-glow pointer-events-none" />

              <div className="relative w-full h-full max-w-[340px] sm:max-w-[380px] aspect-[3/4] flex items-center justify-center animate-subtle-float">
                <Image
                  src="/images/why_choose_astronaut_shield.jpg"
                  alt="Cyber Astronaut with Golden Energy Shield"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain select-none pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
              </div>
            </div>

            {/* 3x Faster Text & Subtitle with Neon Golden Breathing Glow & Wave Animation */}
            <div className="relative z-10 text-center mb-6">
              <h3 className="text-4xl sm:text-5xl md:text-[50px] font-black text-[#FFD400] mb-1.5 tracking-tight font-[family-name:var(--font-syne)] animate-glow-pulse">
                <WaveText text="3x Faster" className="whitespace-nowrap" />
              </h3>
              <p className="text-white/70 text-xs sm:text-sm font-[family-name:var(--font-jakarta)] leading-snug">
                From Concept to<br />Scalable Launch
              </p>
            </div>

            {/* CTA Button with Infinite Radiant Sheen Sweep */}
            <Link
              href="/#contact"
              className="relative z-10 w-full py-4 px-6 rounded-2xl bg-[#FFD400] text-black font-extrabold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 hover:bg-[#ffe033] transition-all group/btn font-[family-name:var(--font-syne)] uppercase tracking-wider shadow-[0_0_25px_rgba(255,212,0,0.3)] hover:shadow-[0_0_40px_rgba(255,212,0,0.55)] overflow-hidden"
            >
              {/* Continuous Light Sweep Sheen */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-cta-sheen pointer-events-none" />
              <span className="relative z-10">Book Free Consultation</span>
              <ArrowUpRight className="relative z-10 w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* ========================================================
              CARD 03 - Bank-Grade Cloud Security (Last Column - Top)
          ======================================================== */}
          <div className="why-choose-card rounded-[28px] bg-[#0c0d12] border border-white/10 hover:border-white/20 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 lg:col-start-3 lg:row-start-1">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="text-2xl sm:text-3xl font-black text-white/40 font-[family-name:var(--font-syne)] tracking-tight">
                  03 /
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Live Monitoring
                </span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-5 leading-tight font-[family-name:var(--font-syne)] text-white">
                <WaveText text="Bank-Grade" />
                <br />
                <WaveText text="Cloud Security" delayOffset={11} />
              </h3>

              {/* Glowing Yellow Sine / Spline Wave Graph with Traveling Data Packet */}
              <div className="h-28 mb-8 relative flex items-center">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 320 120"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="cloudSecurityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFD400" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#FFD400" stopOpacity="0" />
                    </linearGradient>
                    <filter id="yellowGlow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#FFD400" floodOpacity="0.9" />
                    </filter>
                  </defs>

                  {/* Gradient Underfill */}
                  <path
                    d="M 0,82 C 40,82 60,80 90,74 C 120,68 140,42 165,42 C 190,42 205,88 230,88 C 255,88 275,28 295,28 L 320,28 L 320,120 L 0,120 Z"
                    fill="url(#cloudSecurityGradient)"
                  />

                  {/* Neon Spline Line */}
                  <path
                    ref={wavePathRef}
                    d="M 0,82 C 40,82 60,80 90,74 C 120,68 140,42 165,42 C 190,42 205,88 230,88 C 255,88 275,28 295,28 L 320,28"
                    stroke="#FFD400"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#yellowGlow)"
                  />

                  {/* Infinite Traveling Glowing Telemetry Photon */}
                  <circle r="4" fill="#FFFFFF" filter="url(#yellowGlow)">
                    <animateMotion
                      path="M 0,82 C 40,82 60,80 90,74 C 120,68 140,42 165,42 C 190,42 205,88 230,88 C 255,88 275,28 295,28 L 320,28"
                      dur="3.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle r="7.5" fill="#FFD400" opacity="0.35">
                    <animateMotion
                      path="M 0,82 C 40,82 60,80 90,74 C 120,68 140,42 165,42 C 190,42 205,88 230,88 C 255,88 275,28 295,28 L 320,28"
                      dur="3.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>

              {/* Badges */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FFD400] text-black text-xs font-bold font-mono tracking-tight shadow-[0_0_15px_rgba(255,212,0,0.25)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                  <span>99.99% SLA Uptime</span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white/60 text-[11px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  SOC2 Compliant
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================
              CARD 04 - 24/7 Dedicated Support (Last Column - Bottom)
          ======================================================== */}
          <div className="why-choose-card rounded-[28px] bg-[#0c0d12] border border-white/10 hover:border-white/20 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 lg:col-start-3 lg:row-start-2">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="text-2xl sm:text-3xl font-black text-white/40 font-[family-name:var(--font-syne)] tracking-tight">
                  04 /
                </div>
              </div>

              <div className="flex items-start justify-between mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold leading-tight font-[family-name:var(--font-syne)] text-white">
                  <WaveText text="24/7 Dedicated" />
                  <br />
                  <WaveText text="Support" delayOffset={15} />
                </h3>

                {/* Glowing Concentric Radar / Telemetry Node with Active Orbiting Sensors */}
                <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                  {/* Outer pulse circle */}
                  <div className="absolute inset-0 rounded-full border border-[#FFD400]/30 animate-ping opacity-30" />
                  {/* Mid dashed radar ring */}
                  <div className="absolute inset-2 rounded-full border border-dashed border-[#FFD400]/40 animate-spin-slow" />
                  {/* Rotating radar sweep ray */}
                  <div className="absolute inset-1 rounded-full animate-spin-slow pointer-events-none overflow-hidden opacity-30">
                    <div className="w-1/2 h-1/2 origin-bottom-right bg-gradient-to-br from-transparent to-[#FFD400]/40 rounded-tl-full" />
                  </div>
                  {/* Center glowing circle with headphone icon */}
                  <div className="relative z-10 w-11 h-11 rounded-full bg-[#FFD400]/15 border border-[#FFD400] flex items-center justify-center shadow-[0_0_20px_rgba(255,212,0,0.4)]">
                    <Headphones className="w-5 h-5 text-[#FFD400]" />
                  </div>
                  {/* Orbiting accent dots rotating around perimeter */}
                  <div className="absolute inset-0 animate-orbit pointer-events-none">
                    <span className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-[#FFD400] shadow-[0_0_8px_#FFD400]" />
                    <span className="absolute bottom-2 left-1 w-1.5 h-1.5 rounded-full bg-[#FFD400]/80 shadow-[0_0_8px_#FFD400]" />
                  </div>
                </div>
              </div>

              {/* Metric & Retention */}
              <div className="flex items-end justify-between mt-8">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#FFD400] font-[family-name:var(--font-syne)] tracking-tight">
                    98%
                  </div>
                  <div className="text-xs sm:text-sm text-white/60 font-[family-name:var(--font-jakarta)] mt-0.5">
                    Client Retention
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white/70 text-xs font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  &lt;15m Response
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes textWave {
          0%, 100% {
            transform: translateY(0px);
          }
          20% {
            transform: translateY(-5px);
          }
          40% {
            transform: translateY(2px);
          }
          60% {
            transform: translateY(0px);
          }
        }
        .animate-text-wave {
          display: inline-block;
          will-change: transform;
        }

        @keyframes cursorBlink {
          0%, 45% {
            opacity: 1;
          }
          50%, 95% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-cursor-blink {
          animation: cursorBlink 0.9s infinite;
        }

        @keyframes subtleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-subtle-float {
          animation: subtleFloat 6s ease-in-out infinite;
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spinSlow 18s linear infinite;
        }

        @keyframes spinReverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-reverse {
          animation: spinReverse 24s linear infinite;
        }

        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-orbit {
          animation: orbit 10s linear infinite;
        }

        @keyframes glowPulse {
          0%, 100% {
            filter: drop-shadow(0 0 16px rgba(255, 212, 0, 0.35));
          }
          50% {
            filter: drop-shadow(0 0 32px rgba(255, 212, 0, 0.75));
          }
        }
        .animate-glow-pulse {
          animation: glowPulse 3.5s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.35;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.08);
          }
        }
        .animate-pulse-glow {
          animation: pulseGlow 4s ease-in-out infinite;
        }

        @keyframes ambientPulse {
          0%, 100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(0.95);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.08);
          }
        }
        .animate-ambient-pulse {
          animation: ambientPulse 8s ease-in-out infinite;
        }

        @keyframes ambientDrift {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.12);
          }
        }
        .animate-ambient-drift {
          animation: ambientDrift 10s ease-in-out infinite;
        }

        @keyframes barShimmer {
          0% {
            transform: translateX(-100%);
          }
          50%, 100% {
            transform: translateX(100%);
          }
        }
        .animate-bar-shimmer {
          animation: barShimmer 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes shimmerPass {
          0%, 20% {
            transform: translateX(-150%);
          }
          60%, 100% {
            transform: translateX(200%);
          }
        }
        .animate-shimmer-pass {
          animation: shimmerPass 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes ctaSheen {
          0%, 25% {
            transform: translateX(-150%) skewX(-20deg);
          }
          65%, 100% {
            transform: translateX(250%) skewX(-20deg);
          }
        }
        .animate-cta-sheen {
          animation: ctaSheen 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}
