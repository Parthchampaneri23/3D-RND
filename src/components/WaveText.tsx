"use client";

import React, { useMemo, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface WaveTextProps {
  text: string;
  className?: string;
  amplitude?: number; // max vertical displacement on wave crest in px
  stagger?: number; // delay per character in seconds
  activeColor?: string; // highlight color on wave crest
}

export default function WaveText({
  text,
  className = "",
  amplitude = 10,
  stagger = 0.052,
  activeColor = "#FFD400",
}: WaveTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);

  // Split text into words to preserve standard browser word wrapping
  const words = useMemo(() => text.split(" "), [text]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const chars = containerRef.current?.querySelectorAll(".wave-char-span");
      if (!chars || chars.length === 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });

      // 1. Initial State before wave enters: slightly lower, faded and soft
      tl.set(chars, {
        opacity: 0,
        y: 18,
        filter: "blur(5px)",
        color: "#ffffff",
      });

      // 2. Wave Crest Phase: characters rise up to the wave crest, highlight in gold, and sharpen (slower, smoother)
      tl.to(chars, {
        opacity: 1,
        y: -amplitude,
        color: activeColor,
        filter: "blur(0px)",
        duration: 0.58,
        ease: "power2.out",
        stagger: stagger,
      });

      // 3. Wave Settle Phase: each character smoothly glides down into baseline and normal text color
      tl.to(
        chars,
        {
          y: 0,
          color: "#ffffff",
          duration: 0.52,
          ease: "power2.inOut",
          stagger: stagger,
          onComplete: () => {
            // Clear inline styles so the text settles as 100% normal text and responds to hover
            gsap.set(chars, { clearProps: "color,transform,filter" });
          },
        },
        `<0.24` // seamlessly overlaps with the crest, creating a continuous moving wave
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text, amplitude, stagger, activeColor]);

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, wordIdx) => (
        <span
          key={`w-${wordIdx}`}
          className="inline-block whitespace-nowrap mr-[0.28em]"
        >
          {word.split("").map((char, charIdx) => (
            <span
              key={`c-${wordIdx}-${charIdx}`}
              className="wave-char-span inline-block will-change-transform"
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
