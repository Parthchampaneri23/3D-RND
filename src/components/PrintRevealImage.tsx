"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export type RevealDirection = "top" | "left" | "right" | "bottom" | "auto";

export interface PrintRevealImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  aspectClass?: string;
  badge?: string;
  direction?: RevealDirection;
  index?: number;
}

export default function PrintRevealImage({
  src,
  alt,
  fill = true,
  priority = false,
  className = "border border-white/10",
  aspectClass = "aspect-[16/10]",
  badge,
  direction = "auto",
  index = 0,
}: PrintRevealImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgWrapperRef = useRef<HTMLDivElement>(null);

  // Compute direction: if auto, cycle through top, left, right, bottom based on index
  const activeDirection: "top" | "left" | "right" | "bottom" =
    direction === "auto" || !direction
      ? (["top", "left", "right", "bottom"][index % 4] as "top" | "left" | "right" | "bottom")
      : direction;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!imgWrapperRef.current) return;

      // Determine initial offset based on entrance direction
      let initialVars: gsap.TweenVars = {
        opacity: 0,
        scale: 1.14,
        filter: "blur(8px)",
      };

      switch (activeDirection) {
        case "top":
          initialVars = { ...initialVars, yPercent: -40, xPercent: 0 };
          break;
        case "bottom":
          initialVars = { ...initialVars, yPercent: 40, xPercent: 0 };
          break;
        case "left":
          initialVars = { ...initialVars, xPercent: -40, yPercent: 0 };
          break;
        case "right":
          initialVars = { ...initialVars, xPercent: 40, yPercent: 0 };
          break;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 88%",
          toggleActions: "restart none none reset",
        },
      });

      // 1. Initial State: offset from direction with soft blur and opacity 0
      tl.set(imgWrapperRef.current, initialVars);

      // 2. Smoothly Glide in from chosen direction and settle at exact position
      tl.to(imgWrapperRef.current, {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.25,
        ease: "power3.out",
        onComplete: () => {
          // Clear transform/filter so hover scaling works cleanly
          if (imgWrapperRef.current) {
            gsap.set(imgWrapperRef.current, { clearProps: "filter" });
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [src, activeDirection]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${aspectClass} overflow-hidden bg-[#0a0c10] select-none group/print ${className}`}
    >
      {/* Subtle Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Animated Image Layer gliding in from top/left/right/bottom and setting into position */}
      <div
        ref={imgWrapperRef}
        className="absolute inset-0 w-full h-full will-change-transform will-change-[filter]"
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          priority={priority}
          className="object-cover w-full h-full group-hover/print:scale-105 transition-transform duration-700 ease-out brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Optional Top Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-30 pointer-events-none bg-black/85 backdrop-blur-md px-3.5 py-1 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#FFD400] font-bold border border-[#FFD400]/30 shadow-md">
          {badge}
        </div>
      )}
    </div>
  );
}
