"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { ChevronDown, ArrowRight, Play, Sparkles } from "lucide-react";
import CyberButton from "@/components/CyberButton";

// SSR safe dynamic import for 3D Astronaut with responsive action poses
const Astronaut = dynamic(() => import("@/components/Astronaut"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[460px] flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-[#FFD400] border-t-transparent rounded-full animate-spin mb-3" />
      <span className="text-xs font-mono text-[#FFD400] uppercase tracking-wider">
        Initializing 3D Astronaut...
      </span>
    </div>
  ),
});

export interface ServiceStoryItem {
  id: string;
  navLabel: string;
  step: string;
  category: string;
  line1: string;
  line2: string;
  side: "center" | "left" | "right"; // Where the 3D model moves! Title appears on OPPOSITE side!
  pose: {
    targetX: number;
    targetY: number;
    targetRotY: number;
    targetRotX: number;
    headYawOffset: number;
    headPitchOffset: number;
    armLeftRotX?: number;
    armLeftRotZ?: number;
    armRightRotX?: number;
    armRightRotZ?: number;
  };
}

const SERVICES: ServiceStoryItem[] = [
  {
    id: "overview",
    navLabel: "OVERVIEW",
    step: "00",
    category: "DIGITAL AGENCY",
    line1: "DIGITAL",
    line2: "AGENCY",
    side: "center",
    pose: {
      targetX: 0,
      targetY: 0,
      targetRotY: 0,
      targetRotX: 0,
      headYawOffset: 0,
      headPitchOffset: 0,
      armLeftRotX: 0,
      armLeftRotZ: 0,
      armRightRotX: 0,
      armRightRotZ: 0,
    },
  },
  {
    id: "websites",
    navLabel: "WEBSITES",
    step: "01",
    category: "WEB ARCHITECTURE",
    line1: "CUSTOM",
    line2: "WEBSITES",
    side: "right", // Model moves right, Title appears on LEFT!
    pose: {
      targetX: 0.72,
      targetY: 0,
      targetRotY: -0.42,
      targetRotX: 0.05,
      headYawOffset: -0.46,
      headPitchOffset: -0.05,
      armRightRotX: -0.5,
      armRightRotZ: -0.32,
      armLeftRotX: 0,
      armLeftRotZ: 0,
    },
  },
  {
    id: "software",
    navLabel: "SOFTWARE",
    step: "02",
    category: "ENTERPRISE SYSTEMS",
    line1: "CUSTOM",
    line2: "SOFTWARE",
    side: "left", // Model moves left, Title appears on RIGHT!
    pose: {
      targetX: -0.72,
      targetY: 0,
      targetRotY: 0.42,
      targetRotX: -0.04,
      headYawOffset: 0.46,
      headPitchOffset: 0,
      armLeftRotX: -0.52,
      armLeftRotZ: 0.32,
      armRightRotX: 0,
      armRightRotZ: 0,
    },
  },
  {
    id: "social-media",
    navLabel: "SMM & GROWTH",
    step: "03",
    category: "BRAND AMPLIFICATION",
    line1: "SOCIAL MEDIA",
    line2: "MARKETING",
    side: "right", // Model moves right, Title appears on LEFT!
    pose: {
      targetX: 0.72,
      targetY: 0.04,
      targetRotY: -0.4,
      targetRotX: 0.12,
      headYawOffset: -0.48,
      headPitchOffset: 0.08,
      armLeftRotX: -0.2,
      armLeftRotZ: 0.15,
      armRightRotX: -0.25,
      armRightRotZ: -0.2,
    },
  },
  {
    id: "photography",
    navLabel: "PHOTOGRAPHY",
    step: "04",
    category: "VISUAL DIRECTION",
    line1: "BRAND",
    line2: "PHOTOGRAPHY",
    side: "left", // Model moves left, Title appears on RIGHT!
    pose: {
      targetX: -0.72,
      targetY: 0,
      targetRotY: 0.38,
      targetRotX: -0.06,
      headYawOffset: 0.44,
      headPitchOffset: 0.16,
      armLeftRotX: 0,
      armLeftRotZ: 0.15,
      armRightRotX: 0,
      armRightRotZ: -0.15,
    },
  },
  {
    id: "content-management",
    navLabel: "CMS ARCHITECTURE",
    step: "05",
    category: "CONTENT PIPELINE",
    line1: "CONTENT",
    line2: "MANAGEMENT",
    side: "right", // Model moves right, Title appears on LEFT!
    pose: {
      targetX: 0.72,
      targetY: 0,
      targetRotY: -0.44,
      targetRotX: 0.04,
      headYawOffset: -0.5,
      headPitchOffset: -0.02,
      armRightRotX: -0.52,
      armRightRotZ: -0.35,
      armLeftRotX: 0,
      armLeftRotZ: 0,
    },
  },
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse spotlight & reticle cursor tracking
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  // Scroll tracking state
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Scroll listener for sticky multi-stage service progression
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));

      // Determine active service index
      const stepCount = SERVICES.length;
      const calculatedIndex = Math.min(
        stepCount - 1,
        Math.floor(progress * stepCount)
      );
      setActiveIndex(calculatedIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentService = SERVICES[activeIndex] || SERVICES[0];

  return (
    <div
      id="home"
      ref={containerRef}
      className="relative w-full h-[550vh] bg-[#050608] z-10"
    >
      {/* Pinned Sticky Stage during the entire scroll journey */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-16 sm:pt-20">
        {/* 1. Full-bleed Lunar Landscape Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat pointer-events-none opacity-85 z-0"
          style={{
            backgroundImage: "url('/hero_lunar_bg.jpg')",
            backgroundPosition: "center bottom",
          }}
        />

        {/* 2. Full-bleed Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />

        {/* 3. Smooth Top & Bottom Dark Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050608]/90 via-transparent to-[#050608] pointer-events-none z-0" />

        {/* ----------------- INTERACTIVE STAGE: 3D ASTRONAUT & OPPOSITE SERVICE TITLE ----------------- */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative z-10 w-full flex-1 flex items-center justify-center overflow-hidden"
        >
          {/* Interactive Radial Spotlight tracking mouse cursor */}
          {isHovered && (
            <div
              className="absolute pointer-events-none inset-0 transition-opacity duration-300 z-10 opacity-70"
              style={{
                background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 212, 0, 0.08), transparent 75%)`,
              }}
            />
          )}

          {/* Unique Cyber Floating Cursor Pointer Animation */}
          {isHovered && (
            <div
              className="absolute pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out hidden sm:block"
              style={{
                left: `${mousePos.x}px`,
                top: `${mousePos.y}px`,
              }}
            >
              <div className="w-2.5 h-2.5 bg-[#FFD400] rounded-full shadow-[0_0_15px_#FFD400]" />
              <div
                className="absolute -top-3.5 -left-3.5 w-9 h-9 rounded-full border border-[#FFD400]/40 animate-spin"
                style={{ animationDuration: "7s" }}
              >
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#FFD400] rounded-full shadow-[0_0_6px_#FFD400]" />
              </div>
              <div className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full border border-[#FFD400]/50" />
            </div>
          )}

          {/* Animated Orbital Visuals centered around the Mascot */}
          <div
            className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 transition-opacity duration-700 ${
              activeIndex === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Primary Orbital Ring */}
            <div
              className="w-[420px] sm:w-[540px] md:w-[680px] lg:w-[820px] h-[420px] sm:h-[540px] md:h-[680px] lg:h-[820px] rounded-full border border-white/[0.07] animate-spin"
              style={{ animationDuration: "35s" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#FFD400] shadow-[0_0_12px_#FFD400]" />
            </div>

            {/* Secondary Tilted Elliptical Orbital Ring */}
            <div
              className="absolute w-[360px] sm:w-[480px] md:w-[600px] lg:w-[740px] h-[360px] sm:h-[480px] md:h-[600px] lg:h-[740px] rounded-full border border-dashed border-[#FFD400]/20 animate-spin"
              style={{
                animationDuration: "25s",
                animationDirection: "reverse",
                transform: "rotateX(65deg) rotateY(20deg)",
              }}
            >
              <div className="absolute bottom-4 right-1/4 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
            </div>
          </div>

          {/* 4. INITIAL INTRO STATE: DIGITAL on Left, AGENCY on Right when at Overview Step (00) */}
          <div
            className={`absolute inset-0 flex flex-col justify-between pointer-events-none select-none z-10 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-16 sm:py-20 w-full max-w-[1800px] mx-auto transition-all duration-700 ${
              activeIndex === 0
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {/* Top Micro-Tag */}
            <div className="flex justify-center pt-2 sm:pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[#FFD400] text-[11px] sm:text-xs font-mono font-medium tracking-[0.25em] uppercase shadow-[0_0_20px_rgba(255,212,0,0.15)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>RND TECHNOSOFT // ORBITAL MISSION CONTROL</span>
              </div>
            </div>

            {/* Middle: Grand Split Title */}
            <div className="flex items-center justify-between w-full my-auto">
              <div className="flex items-center justify-start z-10">
                <h1 className="text-white text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[110px] xl:text-[140px] 2xl:text-[165px] font-[family-name:var(--font-bebas)] tracking-tight leading-none uppercase select-none drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)] whitespace-nowrap">
                  DIGITAL
                </h1>
              </div>
              <div className="flex items-center justify-end z-10">
                <h1 className="text-white text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[110px] xl:text-[140px] 2xl:text-[165px] font-[family-name:var(--font-bebas)] tracking-tight leading-none uppercase select-none drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)] whitespace-nowrap text-right">
                  AGENCY
                </h1>
              </div>
            </div>

            {/* Bottom Row: Left Supporting Copy & Primary CTA, Right Showreel & Secondary CTA */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between w-full pb-6 sm:pb-8 z-30 pointer-events-auto gap-4">
              {/* Left Column: Supporting Copy & Primary CTA */}
              <div className="max-w-md text-left">
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4 drop-shadow-md">
                  Pioneering high-converting web applications, spatial 3D WebGL, and enterprise cloud architecture for global innovators.
                </p>
                <CyberButton href="/#contact" size="md">
                  LAUNCH MISSION
                </CyberButton>
              </div>

              {/* Right Column: Showreel & Secondary CTA */}
              <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
                <span className="text-[11px] font-mono text-[#FFD400] tracking-widest uppercase mb-2">
                  CINEMATIC SHOWREEL 2026
                </span>
                <CyberButton href="/#showreel" size="md">
                  WATCH SHOWREEL
                </CyberButton>
              </div>
            </div>
          </div>

          {/* 5. CENTER 3D ASTRONAUT: Moves & Poses Reactively based on Scroll Stage */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-auto">
            <Astronaut
              className="w-full h-full"
              pose={currentService.pose}
              targetSide={currentService.side}
            />
          </div>

          {/* 6. OPPOSITE-SIDE STREAMLINED BOLD SERVICE TITLE (No Crowded Info Card) */}
          <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-between px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 max-w-[1800px] mx-auto">
            {SERVICES.slice(1).map((service, index) => {
              const serviceStepIndex = index + 1; // 1 to 5
              const isActive = activeIndex === serviceStepIndex;
              // If model moves RIGHT -> Title appears on LEFT!
              // If model moves LEFT -> Title appears on RIGHT!
              const isTextOnLeft = service.side === "right";

              return (
                <div
                  key={service.id}
                  className={`absolute ${
                    isTextOnLeft
                      ? "left-6 sm:left-12 md:left-16 lg:left-24 xl:left-32 items-start text-left"
                      : "right-6 sm:right-12 md:right-16 lg:right-24 xl:right-32 items-end text-right"
                  } flex flex-col justify-center transition-all duration-700 ease-out select-none ${
                    isActive
                      ? "opacity-100 translate-x-0 scale-100 pointer-events-auto"
                      : isTextOnLeft
                      ? "opacity-0 -translate-x-16 scale-95 pointer-events-none"
                      : "opacity-0 translate-x-16 scale-95 pointer-events-none"
                  }`}
                >
                  {/* Minimalist Futuristic Service Category Beacon */}
                  <div
                    className={`flex items-center gap-2 mb-2 sm:mb-3 font-mono text-xs sm:text-sm text-[#FFD400] tracking-[0.28em] uppercase ${
                      isTextOnLeft ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#FFD400] shadow-[0_0_12px_#FFD400] animate-pulse" />
                    <span>SERVICE {service.step} &nbsp;—&nbsp; {service.category}</span>
                  </div>

                  {/* Grand Stacked Typography */}
                  <h2
                    className={`text-white text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[95px] xl:text-[120px] 2xl:text-[145px] font-[family-name:var(--font-bebas)] tracking-tight leading-[0.88] uppercase drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] ${
                      isTextOnLeft ? "text-left" : "text-right"
                    }`}
                  >
                    <span className="block text-white tracking-normal">
                      {service.line1}
                    </span>
                    <span className="block text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.35)] tracking-normal">
                      {service.line2}
                    </span>
                  </h2>

                  {/* Radiant Cyber Accent Line */}
                  <div
                    className={`h-1.5 w-24 sm:w-36 rounded-full mt-4 sm:mt-6 bg-gradient-to-r shadow-[0_0_15px_rgba(255,212,0,0.4)] ${
                      isTextOnLeft
                        ? "from-[#FFD400] to-transparent"
                        : "from-transparent to-[#FFD400]"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* 7. SCROLL HINT (Visible on initial overview step) */}
          <div
            className={`absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none transition-all duration-500 ${
              activeIndex === 0 ? "opacity-90 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-0.5">
              Scroll To Explore Services
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#FFD400] animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
