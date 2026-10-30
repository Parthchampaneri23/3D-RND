"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowRight, Play, Sparkles } from "lucide-react";
import CyberButton from "@/components/CyberButton";
import HeroScrollFrames from "@/components/HeroScrollFrames";

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
  const [scrollProgress, setScrollProgress] = useState(0);

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
      setScrollProgress(progress);

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
      className="relative w-full h-[600vh] bg-[#050608] z-10"
    >
      {/* Pinned Sticky Stage during the entire scroll journey */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Full-width Video Canvas with 5% dark overlay and +10% height */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-auto">
          <HeroScrollFrames
            scrollProgress={scrollProgress}
            className="w-full h-full opacity-100"
            damping={0.12}
            showVignette={false}
            overlayOpacity={0.05}
            heightScale={1.10}
          />
        </div>

        {/* ----------------- INTERACTIVE STAGE: INTRO CONTENT ----------------- */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative z-10 w-full flex-1 flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-4"
        >
          {/* Interactive Radial Spotlight tracking mouse cursor */}
          {isHovered && scrollProgress <= 0.01 && (
            <div
              className="absolute pointer-events-none inset-0 transition-opacity duration-300 z-10 opacity-70"
              style={{
                background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 212, 0, 0.08), transparent 75%)`,
              }}
            />
          )}

          {/* Unique Cyber Floating Cursor Pointer Animation */}
          {isHovered && scrollProgress <= 0.01 && (
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

          {/* INITIAL INTRO TEXT (Fades out completely on scroll - No text during scroll) */}
          <div
            className={`absolute inset-0 flex flex-col justify-between select-none z-10 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-16 sm:py-20 w-full max-w-[1800px] mx-auto transition-all duration-500 ease-out ${
              scrollProgress <= 0.01
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            {/* Top Micro-Tag */}
            {/* <div className="flex justify-center pt-2 sm:pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[#FFD400] text-[11px] sm:text-xs font-mono font-medium tracking-[0.25em] uppercase shadow-[0_0_20px_rgba(255,212,0,0.15)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>RND TECHNOSOFT // ORBITAL MISSION CONTROL</span>
              </div>
            </div> */}

            {/* Middle: Grand Split Title */}
            <div className="flex items-end justify-between w-full my-auto pointer-events-none translate-y-[110%]">
              <div className="flex items-center justify-start z-10">
                <h1
                  style={{
                    textShadow:
                      "0 4px 15px rgba(0, 0, 0, 0.95), 0 12px 40px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.95)",
                  }}
                  className="text-[#ffd400] text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[110px] xl:text-[140px] 2xl:text-[165px] font-[family-name:var(--font-bebas)] tracking-tight leading-none uppercase select-none drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)] whitespace-nowrap"
                >
                  DIGITAL
                </h1>
              </div>
              <div className="flex items-center justify-center z-10">
                <h1
                  style={{
                    textShadow:
                      "0 4px 15px rgba(0, 0, 0, 0.95), 0 12px 40px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.95)",
                  }}
                  className="text-[#ffd400] text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[110px] xl:text-[140px] 2xl:text-[165px] font-[family-name:var(--font-bebas)] tracking-tight leading-none uppercase select-none drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)] whitespace-nowrap text-right"
                >
                  AGENCY
                </h1>
              </div>
            </div>

            {/* Bottom Row: Left Supporting Copy & Primary CTA, Right Showreel & Secondary CTA */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between w-full pb-6 sm:pb-8 z-30 pointer-events-auto gap-4">
            
            </div>
          </div>

          {/* SCROLL HINT (Only visible at initial top state, fades immediately on scroll) */}
          <div
            className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none transition-all duration-500 ${
              scrollProgress <= 0.01
                ? "opacity-90 translate-y-0"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
          >
            <span className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-0.5">
              Scroll To Scrub Mission
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#FFD400] animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
