"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutCastBanner() {
  const bannerRef = useRef<HTMLElement>(null);
  const firstLine = "ABOUT";
  const secondLine = "RND";

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 85%",
          toggleActions: "restart none none reset",
        },
      });

      // 1. Breadcrumb nav fade-in
      tl.fromTo(
        ".about-nav-anim",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.2 }
      );

      // 2. Typewriter Caret appears with a soft glow
      tl.fromTo(
        ".about-typewriter-caret",
        { opacity: 0, scaleY: 0 },
        { opacity: 1, scaleY: 1, duration: 0.25, ease: "power2.out" },
        "-=0.1"
      );

      // 3. First line letters smooth typewriter effect with soft blur & gentle lift
      tl.fromTo(
        ".about-char-1",
        {
          opacity: 0,
          y: 18,
          filter: "blur(6px)",
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.32,
          stagger: 0.08,
          ease: "power2.out",
        }
      );

      // 4. Yellow line laser expands smoothly
      tl.fromTo(
        ".about-line-anim",
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.6, ease: "power3.inOut" },
        "+=0.1"
      );

      // 5. Second line letters smooth typewriter effect
      tl.fromTo(
        ".about-char-2",
        {
          opacity: 0,
          y: 18,
          filter: "blur(6px)",
          scale: 0.92,
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.32,
          stagger: 0.08,
          ease: "power2.out",
        }
      );

      // 6. Caret smooth breathing pulse loop
      tl.to(".about-typewriter-caret", {
        opacity: 0.15,
        repeat: -1,
        yoyo: true,
        duration: 0.65,
        ease: "power1.inOut",
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={bannerRef}
      className="relative w-full h-[76vh] min-h-[640px] max-h-[820px] bg-[#050608] text-white flex flex-col justify-end overflow-hidden select-none px-6 sm:px-10 lg:px-16 pb-[60px] sm:pb-[80px] pt-24"
    >
      {/* Background Image: Original crystal-clear uncompressed resolution with NO overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/banner.png"
          alt="About RnD Technosoft Banner"
          fill
          priority
          unoptimized
          className="object-cover object-bottom"
        />
      </div>

      {/* Foreground Content: Main Heading and Breadcrumb Only */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="about-nav-anim flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/80 mb-3 sm:mb-4 pb-2 border-b border-white/20 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
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

        {/* Main Heading with Typewriter Letter Reveal Animation */}
        <div className="flex flex-col drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px] font-[family-name:var(--font-syne)] font-bold tracking-tight text-white leading-[0.85] uppercase">
            {firstLine.split("").map((char, idx) => (
              <span
                key={idx}
                className="about-char-1 opacity-0 inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <div className="flex items-center gap-3 sm:gap-4 mt-1.5 sm:mt-2.5">
            <span className="about-line-anim w-12 sm:w-16 h-[2.5px] bg-[#FFD400] block shrink-0 shadow-[0_0_14px_rgba(255,212,0,0.9)]" />
            <div className="flex items-center">
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px] font-[family-name:var(--font-syne)] font-bold tracking-tight text-white leading-[0.85] uppercase">
                {secondLine.split("").map((char, idx) => (
                  <span
                    key={idx}
                    className="about-char-2 opacity-0 inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
              <span className="about-typewriter-caret inline-block w-[4px] sm:w-[6px] h-[0.7em] sm:h-[0.75em] bg-[#FFD400] ml-2 align-middle shadow-[0_0_12px_rgba(255,212,0,0.95)] opacity-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
