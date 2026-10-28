"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import CyberButton from "@/components/CyberButton";

interface AboutRocketScrollBannerProps {
  totalFrames?: number;
  framePathPrefix?: string;
  damping?: number;
}

export default function AboutRocketScrollBanner({
  totalFrames = 240,
  framePathPrefix = "/about-frames/frame_",
  damping = 0.12,
}: AboutRocketScrollBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Images cache & tracking
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCountRef = useRef(0);
  const lastDrawnIndexRef = useRef(-1);

  // Scroll & animation progress
  const [scrollProgress, setScrollProgress] = useState(0);
  const targetFrameRef = useRef(1);
  const currentFrameRef = useRef(1);

  // Typewriter state for heading
  const [typedCount, setTypedCount] = useState(0);
  const fullTextLine1 = "Engineering the Next  ";
  const fullTextLine2 = "Era of Digital.";

  // GSAP Number Counter Refs
  const count1Ref = useRef<HTMLSpanElement>(null);
  const count2Ref = useRef<HTMLSpanElement>(null);
  const count3Ref = useRef<HTMLSpanElement>(null);
  const hasAnimatedCountersRef = useRef(false);

  // Format frame number to 4 digits: e.g. 1 -> "0001"
  const getFrameUrl = useCallback(
    (index: number) => {
      const padded = String(Math.max(1, Math.min(totalFrames, index))).padStart(
        4,
        "0"
      );
      return `${framePathPrefix}${padded}.jpg`;
    },
    [framePathPrefix, totalFrames]
  );

  // Draw current frame on canvas (Edge-to-edge cover mode with cache & deduplication)
  const drawFrame = useCallback((frameIndex: number) => {
    // Page Speed Optimization: Skip redundant draws if frame hasn't changed
    if (frameIndex === lastDrawnIndexRef.current) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find nearest loaded frame so canvas never flickers or drops
      for (let offset = 1; offset < 40; offset++) {
        const prev = imagesRef.current[frameIndex - 1 - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[frameIndex - 1 + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    // Cover mode calculation
    const ratio = Math.max(cw / iw, ch / ih);
    const renderWidth = Math.round(iw * ratio);
    const renderHeight = Math.round(ih * ratio);
    const offsetX = Math.round((cw - renderWidth) / 2);
    const offsetY = Math.round((ch - renderHeight) / 2);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, iw, ih, offsetX, offsetY, renderWidth, renderHeight);

    lastDrawnIndexRef.current = frameIndex;
  }, []);

  // Resize canvas accounting for retina / devicePixelRatio (Clamped to 1.5 for peak GPU performance)
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(
      typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1,
      1.5
    );

    const targetWidth = Math.floor(rect.width * dpr);
    const targetHeight = Math.floor(rect.height * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      lastDrawnIndexRef.current = -1; // Force redraw on resize
      drawFrame(Math.round(currentFrameRef.current));
    }
  }, [drawFrame]);

  // Preload frames progressively with async decoding for zero main-thread jank
  useEffect(() => {
    let isCancelled = false;
    imagesRef.current = new Array(totalFrames);

    // 1. Initial Frame 1
    const firstImg = new Image();
    firstImg.decoding = "async";
    firstImg.src = getFrameUrl(1);
    imagesRef.current[0] = firstImg;
    firstImg.onload = () => {
      if (isCancelled) return;
      loadedCountRef.current++;
      resizeCanvas();
      drawFrame(1);
    };

    // 2. Preload keyframes spaced by 6
    const keyframes: number[] = [];
    for (let i = 2; i <= totalFrames; i += 6) {
      keyframes.push(i);
    }
    keyframes.forEach((frameNum) => {
      const img = new Image();
      img.decoding = "async";
      img.src = getFrameUrl(frameNum);
      imagesRef.current[frameNum - 1] = img;
      img.onload = () => {
        if (!isCancelled) loadedCountRef.current++;
      };
    });

    // 3. Stream all remaining frames after brief delay
    const preloadTimer = setTimeout(() => {
      for (let i = 1; i <= totalFrames; i++) {
        if (!imagesRef.current[i - 1]) {
          const img = new Image();
          img.decoding = "async";
          img.src = getFrameUrl(i);
          imagesRef.current[i - 1] = img;
          img.onload = () => {
            if (!isCancelled) loadedCountRef.current++;
          };
        }
      }
    }, 80);

    return () => {
      isCancelled = true;
      clearTimeout(preloadTimer);
    };
  }, [getFrameUrl, resizeCanvas, drawFrame, totalFrames]);

  // Window resize listener
  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // Scroll handler calculating exact progress through section & freeze cutoff
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      if (totalScroll <= 0) return;

      const currentScroll = -rect.top;
      const p = Math.max(0, Math.min(1, currentScroll / totalScroll));
      setScrollProgress(p);

      // Rocket Flight & Freeze Curve:
      // Active flight scrubbing takes place during 0.00 to 0.60
      // - 0.00 to 0.18: Rocket speeds from left to right (Frame 1 to 125)
      // - 0.18 to 0.60: Rocket settles on right side, astronaut turns and waves (Frame 125 to 240)
      // - 0.60 to 1.00: Section remains pinned and FROZEN on frame 240, while next section overlaps it!
      let calculatedFrame = 1;
      if (p <= 0.18) {
        calculatedFrame = Math.round(1 + (p / 0.18) * 124);
      } else if (p <= 0.60) {
        const remainingP = (p - 0.18) / (0.60 - 0.18);
        calculatedFrame = Math.round(125 + remainingP * (totalFrames - 125));
      } else {
        // Frozen phase
        calculatedFrame = totalFrames;
      }

      targetFrameRef.current = Math.max(1, Math.min(totalFrames, calculatedFrame));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalFrames]);

  // Smooth lerp frame loop (Apple-style inertia for silky scrubbing)
  useEffect(() => {
    let animId: number;
    const loop = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      if (Math.abs(diff) > 0.04) {
        currentFrameRef.current += diff * damping;
        drawFrame(Math.round(currentFrameRef.current));
      }
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [damping, drawFrame]);

  // Trigger when rocket arrives on the right (~16% of scroll track)
  const isRocketPassed = scrollProgress >= 0.16;

  // 1. TYPEWRITER EFFECT FOR SECTION HEADING
  useEffect(() => {
    if (!isRocketPassed) {
      setTypedCount(0);
      return;
    }

    let count = 0;
    const totalChars = fullTextLine1.length + fullTextLine2.length;
    const timer = setInterval(() => {
      count++;
      setTypedCount(count);
      if (count >= totalChars) {
        clearInterval(timer);
      }
    }, 32);

    return () => clearInterval(timer);
  }, [isRocketPassed, fullTextLine1.length, fullTextLine2.length]);

  const line1Chars = Math.min(typedCount, fullTextLine1.length);
  const line2Chars = Math.max(0, typedCount - fullTextLine1.length);
  const renderedLine1 = fullTextLine1.slice(0, line1Chars);
  const renderedLine2 = fullTextLine2.slice(0, line2Chars);
  const isTypingActive = typedCount > 0 && typedCount < fullTextLine1.length + fullTextLine2.length;

  // 2. GSAP COUNTER ANIMATION FOR METRIC NUMBERS
  useEffect(() => {
    if (!isRocketPassed) {
      hasAnimatedCountersRef.current = false;
      if (count1Ref.current) count1Ref.current.textContent = "0";
      if (count2Ref.current) count2Ref.current.textContent = "0.0";
      if (count3Ref.current) count3Ref.current.textContent = "0";
      return;
    }

    if (hasAnimatedCountersRef.current) return;
    hasAnimatedCountersRef.current = true;

    const targets = { v1: 0, v2: 0, v3: 0 };
    const tween = gsap.to(targets, {
      v1: 250,
      v2: 99.9,
      v3: 60,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        if (count1Ref.current) {
          count1Ref.current.textContent = Math.round(targets.v1).toString();
        }
        if (count2Ref.current) {
          count2Ref.current.textContent = targets.v2.toFixed(1);
        }
        if (count3Ref.current) {
          count3Ref.current.textContent = Math.round(targets.v3).toString();
        }
      },
    });

    return () => {
      tween.kill();
    };
  }, [isRocketPassed]);

  return (
    <section
      id="about-us-scroll-experience"
      ref={containerRef}
      className="relative w-full h-[280vh] bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black z-20"
      style={{ contain: "paint" }}
    >
      {/* Sticky Fullscreen Stage (Stays pinned & freezes while next section overlaps) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center will-change-transform">
        {/* Background Canvas Scrubbing 240 Video Frames */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* Ambient Dark Gradient Overlays for Maximum Text Legibility & Section Blending */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Deep Left Shadow: Keeps left side text 100% crisp while rocket is visible on the right */}
          <div className="absolute inset-y-0 left-0 w-full md:w-3/5 lg:w-[58%] bg-gradient-to-r from-[#050608]/98 via-[#050608]/90 via-60% to-transparent" />

          {/* Top & Bottom Vignettes to blend with previous & subsequent sections */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#050608] to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050608] to-transparent" />

          {/* Golden Ambient Glow Accent */}
          <div className="absolute top-1/3 left-10 w-[480px] h-[480px] bg-[#FFD400]/7 rounded-full blur-[150px]" />
        </div>

        {/* Foreground Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full pt-20 sm:pt-24 pb-6 pointer-events-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* =========================================================================
                LEFT SIDE: ABOUT US DATA
                - Initial state (0% to ~16%): NO text shown (clean video scrub).
                - Once rocket arrives (16%+): smoothly animates in, typewriter runs & numbers count up!
                ========================================================================= */}
            <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center max-w-2xl">
              <div
                className={`transition-all duration-700 ease-out flex flex-col space-y-4 sm:space-y-4.5 ${
                  isRocketPassed
                    ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
                    : "opacity-0 translate-y-8 pointer-events-none scale-[0.97]"
                }`}
              >
                {/* 1. Category Indicator Tag with Origin Badge */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-medium tracking-[0.25em] text-neutral-400 uppercase mb-2 sm:mb-2.5">
                    <span className="text-white font-bold text-sm">01</span>
                    <span className="w-8 h-[1px] bg-[#FFD400]" />
                    <span className="text-[#FFD400] tracking-[0.3em]">ABOUT US</span>
                    <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-neutral-300 font-mono tracking-wider ml-auto">
                      EST. 2018 • VAPI &amp; GLOBAL
                    </span>
                  </div>

                  {/* 2. Primary Headline with Dynamic Futuristic Typewriter Effect */}
                  <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-[-0.01em] leading-[1.16] font-[family-name:var(--font-syne)] min-h-[2.35em]">
                    {renderedLine1}
                    {line2Chars > 0 && <br />}
                    <span className="text-[#FFD400]">{renderedLine2}</span>
                    {/* Blinking Cyber Cursor */}
                    {(isTypingActive || isRocketPassed) && (
                      <span
                        className="inline-block w-[3px] sm:w-[4px] h-[0.82em] bg-[#FFD400] ml-1.5 align-middle shadow-[0_0_10px_#FFD400] animate-pulse"
                        aria-hidden="true"
                      />
                    )}
                  </h2>
                </div>

                {/* 3. Core Lead Description */}
                <p className="text-xs sm:text-[14px] text-neutral-300 font-light leading-relaxed">
                  <strong className="text-white font-medium">RnD Technosoft</strong> is an integrated digital innovation lab architecting scalable cloud platforms, custom web applications, and AI-driven solutions. We unite <span className="text-[#FFD400]">Technology</span>, <span className="text-[#FFD400]">Digital Marketing</span>, <span className="text-[#FFD400]">Branding &amp; Design</span>, and <span className="text-[#FFD400]">Media Production</span> into one cohesive delivery engine.
                </p>

                {/* 4. Philosophy Quote */}
                <div className="border-l-2 border-[#FFD400] pl-3.5 py-1 bg-white/[0.02] rounded-r-lg">
                  <p className="text-xs sm:text-sm text-neutral-300 italic font-light leading-relaxed">
                    &ldquo;Success involves a lot more than just being competent in code — we combine strategy, design, and user-focused technology to simplify complex business processes.&rdquo;
                  </p>
                </div>

                {/* 5. Bottom Key Metrics (GSAP Counter Animated) */}
                <div className="pt-4 sm:pt-5 border-t border-white/[0.12]">
                  <div className="grid grid-cols-3 divide-x divide-white/[0.12] -mx-2 sm:-mx-4">
                    {/* Stat 1 */}
                    <div className="px-2 sm:px-4 group cursor-default transition-all duration-300">
                      <div className="text-2xl sm:text-4xl lg:text-[36px] xl:text-[40px] font-bold text-white tracking-tight leading-none mb-1 group-hover:text-[#FFD400] transition-colors duration-300 flex items-baseline">
                        <span ref={count1Ref}>0</span>
                        <span className="text-[#FFD400] ml-0.5">+</span>
                      </div>
                      <div className="text-[10px] sm:text-[11px] lg:text-xs font-semibold tracking-[0.14em] uppercase text-neutral-400 group-hover:text-neutral-200 transition-colors">
                        <span className="block">PROJECTS</span>
                        <span className="block text-neutral-500 group-hover:text-[#FFD400]/90">
                          DELIVERED
                        </span>
                      </div>
                    </div>

                    {/* Stat 2 */}
                    <div className="px-2 sm:px-4 group cursor-default transition-all duration-300">
                      <div className="text-2xl sm:text-4xl lg:text-[36px] xl:text-[40px] font-bold text-white tracking-tight leading-none mb-1 group-hover:text-[#FFD400] transition-colors duration-300 flex items-baseline">
                        <span ref={count2Ref}>0.0</span>
                        <span className="text-[#FFD400] ml-0.5">%</span>
                      </div>
                      <div className="text-[10px] sm:text-[11px] lg:text-xs font-semibold tracking-[0.14em] uppercase text-neutral-400 group-hover:text-neutral-200 transition-colors">
                        <span className="block">CLOUD</span>
                        <span className="block text-neutral-500 group-hover:text-[#FFD400]/90">
                          UPTIME
                        </span>
                      </div>
                    </div>

                    {/* Stat 3 */}
                    <div className="px-2 sm:px-4 group cursor-default transition-all duration-300">
                      <div className="text-2xl sm:text-4xl lg:text-[36px] xl:text-[40px] font-bold text-white tracking-tight leading-none mb-1 group-hover:text-[#FFD400] transition-colors duration-300 flex items-baseline">
                        <span ref={count3Ref}>0</span>
                        <span className="text-[#FFD400] ml-0.5">+</span>
                      </div>
                      <div className="text-[10px] sm:text-[11px] lg:text-xs font-semibold tracking-[0.14em] uppercase text-neutral-400 group-hover:text-neutral-200 transition-colors">
                        <span className="block">IT</span>
                        <span className="block text-neutral-500 group-hover:text-[#FFD400]/90">
                          SPECIALISTS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. Action Buttons with Micro-Animations & Glow Effects */}
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFD400]/50 to-[#ffe34d]/10 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-500" />
                    <CyberButton href="/services" variant="gold" size="lg" className="relative">
                      EXPLORE SERVICES
                    </CyberButton>
                  </div>
                  <CyberButton href="/#contact" variant="dark" size="lg">
                    LET&apos;S TALK
                  </CyberButton>
                </div>

              </div>
            </div>

            {/* =========================================================================
                RIGHT SIDE: EMPTY TO EXPOSE ASTRONAUT & ROCKET CLEANLY
                ========================================================================= */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-5 min-h-[480px] pointer-events-none" />

          </div>
        </div>
      </div>
    </section>
  );
}
