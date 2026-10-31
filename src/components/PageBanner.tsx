"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  parentBreadcrumb?: { label: string; href: string };
  imageSrc?: string;
  className?: string;
  imagePosition?: string;
  imageClassName?: string;
  imageStyle?: React.CSSProperties;
}

export default function PageBanner({
  title,
  subtitle,
  breadcrumb,
  parentBreadcrumb,
  imageSrc = "/banner.png",
  className = "",
  imagePosition = "object-bottom",
  imageClassName = "",
  imageStyle,
}: PageBannerProps) {
  const bannerRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  let firstLine = "";
  let secondLine = "";

  if (subtitle) {
    firstLine = title;
    secondLine = subtitle;
  } else if (title && title.includes(" ")) {
    const parts = title.trim().split(/\s+/);
    firstLine = parts[0];
    secondLine = parts.slice(1).join(" ");
  } else {
    firstLine = "";
    secondLine = title || "";
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Slow, ultra-smooth cinematic zoom out on open (starts at 1.08 and zooms out to 1.0)
      if (imageRef.current) {
        const isRightAligned =
          imagePosition.includes("right") ||
          imagePosition.includes("%") ||
          imageClassName.includes("right");

        gsap.fromTo(
          imageRef.current,
          {
            scale: 1.08,
            transformOrigin: isRightAligned ? "92% 50%" : "center bottom",
          },
          {
            scale: 1.0,
            duration: 8,
            ease: "power1.out",
          }
        );

        // 2. Parallax effect on scroll
        gsap.to(imageRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 3. Foreground Content gentle upward float on scroll
      gsap.to(".banner-content-wrap", {
        y: -40,
        opacity: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // 4. Breadcrumb nav fade-in
      tl.fromTo(
        ".banner-nav-anim",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.2 }
      );

      // 5. Typewriter Caret appears with a soft glow
      tl.fromTo(
        ".typewriter-caret",
        { opacity: 0, scaleY: 0 },
        { opacity: 1, scaleY: 1, duration: 0.25, ease: "power2.out" },
        "-=0.1"
      );

      // 6. First line letters smooth typewriter effect with soft blur & gentle lift
      if (firstLine) {
        tl.fromTo(
          ".typewriter-char-1",
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
      }

      // 7. Yellow line laser expands smoothly
      tl.fromTo(
        ".banner-line-anim",
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.6, ease: "power3.inOut" },
        firstLine ? "+=0.1" : "0"
      );

      // 8. Second line letters smooth typewriter effect
      tl.fromTo(
        ".typewriter-char-2",
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

      // 9. Caret smooth breathing pulse loop
      tl.to(".typewriter-caret", {
        opacity: 0.15,
        repeat: -1,
        yoyo: true,
        duration: 0.65,
        ease: "power1.inOut",
      });
    }, bannerRef);

    return () => ctx.revert();
  }, [firstLine, secondLine, imagePosition, imageClassName]);

  const isLong = secondLine.length > 22;
  const titleSizeClass = isLong
    ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
    : "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl";

  return (
    <section
      ref={bannerRef}
      className={`relative z-10 w-full h-[76vh] min-h-[640px] max-h-[820px] bg-[#050608] text-white flex flex-col justify-end overflow-hidden select-none px-6 sm:px-10 lg:px-16 pb-[75px] sm:pb-[105px] pt-24 ${className}`}
    >
      {/* Background Image: Smooth Slow Zoom on Open + Scroll Parallax */}
      <div
        ref={imageWrapperRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <div
          ref={imageRef}
          className="relative w-full h-full will-change-transform"
        >
          <Image
            src={imageSrc}
            alt={title ? `${title} Banner` : "RnD Technosoft Banner"}
            fill
            priority
            unoptimized
            className={`object-cover ${imagePosition} ${imageClassName}`}
            style={imageStyle}
          />
        </div>
      </div>

      {/* Foreground Content: Main Heading and Breadcrumb Only */}
      <div className="banner-content-wrap relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start will-change-transform">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="banner-nav-anim flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/80 mb-3 sm:mb-4 pb-2 border-b border-white/20 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 text-white/70 hover:text-[#FFD400] transition-colors group"
          >
            <Home className="w-3.5 h-3.5 text-white/50 group-hover:text-[#FFD400] transition-colors" />
            <span>Home</span>
          </Link>
          {parentBreadcrumb && (
            <>
              <ChevronRight className="w-3 h-3 text-white/40" />
              <Link
                href={parentBreadcrumb.href}
                className="text-white/70 hover:text-[#FFD400] transition-colors"
              >
                {parentBreadcrumb.label}
              </Link>
            </>
          )}
          <ChevronRight className="w-3 h-3 text-white/40" />
          <span className="text-[#FFD400] font-bold">{breadcrumb || title}</span>
        </nav>

        {/* Main Heading with Typewriter Letter Reveal Animation */}
        <div className="flex flex-col drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
          {firstLine ? (
            <>
              <h1 className={`${titleSizeClass} font-[family-name:var(--font-syne)] font-bold tracking-tight text-white leading-[0.88] uppercase`}>
                {firstLine.split("").map((char, idx) => (
                  <span
                    key={idx}
                    className="typewriter-char-1 opacity-0 inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h1>
              <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-3">
                <span className="banner-line-anim w-12 sm:w-16 h-[2.5px] bg-[#FFD400] block shrink-0 shadow-[0_0_14px_rgba(255,212,0,0.9)]" />
                <div className="flex items-center">
                  <span className={`${titleSizeClass} font-[family-name:var(--font-syne)] font-bold tracking-tight text-white leading-[0.88] uppercase`}>
                    {secondLine.split("").map((char, idx) => (
                      <span
                        key={idx}
                        className="typewriter-char-2 opacity-0 inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                  <span className="typewriter-caret inline-block w-[4px] sm:w-[6px] h-[0.7em] sm:h-[0.75em] bg-[#FFD400] ml-2 align-middle shadow-[0_0_12px_rgba(255,212,0,0.95)] opacity-0" />
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="banner-line-anim w-12 sm:w-16 h-[2.5px] bg-[#FFD400] block shrink-0 shadow-[0_0_14px_rgba(255,212,0,0.9)]" />
              <div className="flex items-center">
                <h1 className={`${titleSizeClass} font-[family-name:var(--font-syne)] font-bold tracking-tight text-white leading-[0.88] uppercase`}>
                  {secondLine.split("").map((char, idx) => (
                    <span
                      key={idx}
                      className="typewriter-char-2 opacity-0 inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </h1>
                <span className="typewriter-caret inline-block w-[4px] sm:w-[6px] h-[0.7em] sm:h-[0.75em] bg-[#FFD400] ml-2 align-middle shadow-[0_0_12px_rgba(255,212,0,0.95)] opacity-0" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
