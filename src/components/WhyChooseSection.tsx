"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Headphones, ArrowUpRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WhyChooseSection({ className = "" }: { className?: string } = {}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const wavePathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. Header reveal
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
      className={`relative py-16 sm:py-24 bg-black text-white overflow-hidden ${className}`}
    >
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#FFD400]/[0.025] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 right-10 w-[350px] h-[350px] bg-[#FFD400]/[0.015] blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-12">
        {/* Section Header: Tagline, Title, Subtitle */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FFD400]/30 bg-[#FFD400]/10 text-[#FFD400] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-ping" />
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHY CHOOSE RND // PROVEN ENGINEERING EDGE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold uppercase font-[family-name:var(--font-syne)] tracking-tight text-white mb-3">
            BUILT FOR MAXIMUM <span className="text-[#FFD400]">VELOCITY & IMPACT</span>
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
          <div className="why-choose-card rounded-[28px] bg-[#FFD400] text-black p-7 sm:p-8 flex flex-col justify-between border border-[#FFD400] shadow-[0_15px_35px_rgba(255,212,0,0.18)] hover:scale-[1.015] transition-all duration-300 lg:col-start-1 lg:row-start-1">
            <div>
              <div className="text-2xl sm:text-3xl font-black mb-1.5 text-black font-[family-name:var(--font-syne)] tracking-tight">
                01 /
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-6 leading-tight font-[family-name:var(--font-syne)] text-black">
                Rapid Agile<br />Delivery
              </h3>

              {/* Segmented Sprint Timeline */}
              <div className="grid grid-cols-4 gap-2 mb-2.5">
                <div className="sprint-segment-bar h-1.5 sm:h-2 bg-black rounded-full" />
                <div className="sprint-segment-bar h-1.5 sm:h-2 bg-black rounded-full" />
                <div className="sprint-segment-bar h-1.5 sm:h-2 bg-black rounded-full" />
                <div className="sprint-segment-bar h-1.5 sm:h-2 bg-black/25 rounded-full" />
              </div>

              <div className="grid grid-cols-4 gap-2 text-[11px] sm:text-xs font-bold text-black font-[family-name:var(--font-jakarta)] mb-8">
                <span>Sprint 01</span>
                <span>Sprint 02</span>
                <span>Sprint 03</span>
                <span className="text-black/50">Deploy</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black text-[#FFD400] text-xs sm:text-sm font-bold font-[family-name:var(--font-jakarta)] shadow-sm">
                100% On-Time
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
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-mono">
                  Vetted Talent
                </span>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-5 leading-tight font-[family-name:var(--font-syne)] text-white">
                Top 1% Senior<br />Engineers
              </h3>

              {/* Avatar Group with Real Engineer Portraits */}
              <div className="flex items-center -space-x-3 mb-6">
                {teamAvatars.map((person, idx) => (
                  <div
                    key={idx}
                    className="team-avatar-pill relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-[#0c0d12] overflow-hidden bg-neutral-800 shadow-md"
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
                <div className="team-avatar-pill w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#181920] border-2 border-[#0c0d12] flex items-center justify-center text-xs text-white/75 font-bold font-mono shadow-md">
                  +45
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
                {["React", "Node", "AWS", "Vetted Talent"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================
              CENTER HERO CARD - Astronaut with Golden Shield (Center Column - Spans 2 Rows, Pure Black BG)
          ======================================================== */}
          <div className="why-choose-card rounded-[28px] bg-black border border-white/10 hover:border-[#FFD400]/40 p-6 sm:p-8 flex flex-col items-center justify-between md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:row-span-2 relative overflow-hidden transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
            {/* Floating Cyber Astronaut + Golden Energy Shield Image */}
            <div className="relative z-10 w-full flex-1 flex items-center justify-center min-h-[340px] sm:min-h-[400px] py-4">
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

            {/* 3x Faster Text & Subtitle */}
            <div className="relative z-10 text-center mb-6">
              <h3 className="text-4xl sm:text-5xl md:text-[50px] font-black text-[#FFD400] mb-1.5 tracking-tight font-[family-name:var(--font-syne)] drop-shadow-[0_0_20px_rgba(255,212,0,0.35)]">
                3x Faster
              </h3>
              <p className="text-white/70 text-xs sm:text-sm font-[family-name:var(--font-jakarta)] leading-snug">
                From Concept to<br />Scalable Launch
              </p>
            </div>

            {/* CTA Button */}
            <Link
              href="/#contact"
              className="relative z-10 w-full py-4 px-6 rounded-2xl bg-[#FFD400] text-black font-extrabold text-xs sm:text-sm md:text-base flex items-center justify-center gap-2 hover:bg-[#ffe033] transition-all group/btn font-[family-name:var(--font-syne)] uppercase tracking-wider shadow-[0_0_25px_rgba(255,212,0,0.3)] hover:shadow-[0_0_35px_rgba(255,212,0,0.5)]"
            >
              <span>Book Free Consultation</span>
              <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-5 leading-tight font-[family-name:var(--font-syne)] text-white">
                Bank-Grade<br />Cloud Security
              </h3>

              {/* Glowing Yellow Sine / Spline Wave Graph */}
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
                    <filter id="yellowGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#FFD400" floodOpacity="0.8" />
                    </filter>
                  </defs>

                  {/* Gradient Underfill */}
                  <path
                    d="M 0,82 C 40,82 60,80 90,74 C 120,68 140,42 165,42 C 190,42 205,88 230,88 C 255,88 275,28 295,28 L 320,28 L 320,120 L 0,120 Z"
                    fill="url(#cloudSecurityGradient)"
                  />

                  {/* Neon Spline Line matching the user screenshot */}
                  <path
                    ref={wavePathRef}
                    d="M 0,82 C 40,82 60,80 90,74 C 120,68 140,42 165,42 C 190,42 205,88 230,88 C 255,88 275,28 295,28 L 320,28"
                    stroke="#FFD400"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#yellowGlow)"
                  />
                </svg>
              </div>

              {/* Badges */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FFD400] text-black text-xs font-bold font-mono tracking-tight shadow-[0_0_15px_rgba(255,212,0,0.25)]">
                  99.99% SLA Uptime
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white/50 text-[11px] font-mono">
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
                  24/7 Dedicated<br />Support
                </h3>

                {/* Glowing Concentric Radar / Telemetry Node */}
                <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
                  {/* Outer pulse circle */}
                  <div className="absolute inset-0 rounded-full border border-[#FFD400]/25 animate-ping opacity-35" />
                  {/* Mid dashed radar ring */}
                  <div className="absolute inset-2 rounded-full border border-dashed border-[#FFD400]/50 animate-spin-slow" />
                  {/* Center glowing circle with headphone icon */}
                  <div className="relative w-11 h-11 rounded-full bg-[#FFD400]/15 border border-[#FFD400] flex items-center justify-center shadow-[0_0_20px_rgba(255,212,0,0.4)]">
                    <Headphones className="w-5 h-5 text-[#FFD400]" />
                  </div>
                  {/* Orbiting accent dots */}
                  <span className="absolute top-1 right-2 w-1.5 h-1.5 rounded-full bg-[#FFD400] shadow-[0_0_8px_#FFD400]" />
                  <span className="absolute bottom-2 left-1 w-1.5 h-1.5 rounded-full bg-[#FFD400]/80 shadow-[0_0_8px_#FFD400]" />
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

                <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white/60 text-xs font-mono">
                  &lt;15m Response
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </section>
  );
}
