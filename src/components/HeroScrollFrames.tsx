"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface HeroScrollFramesProps {
  scrollProgress?: number; // External scroll progress [0, 1] if provided
  className?: string;
  totalFrames?: number;
  framePathPrefix?: string;
  damping?: number; // Smoothness factor: lower = silkier inertia (0.08 - 0.15)
  showVignette?: boolean;
  overlayOpacity?: number; // Dark overlay opacity (e.g. 0.05 for 5%)
  heightScale?: number; // Height multiplier (default: 1.10 for +10% height)
}

export default function HeroScrollFrames({
  scrollProgress,
  className = "w-full h-full",
  totalFrames = 239,
  framePathPrefix = "/hero-frames/frame_",
  damping = 0.11, // Smooth Apple-style inertia
  showVignette = false,
  overlayOpacity = 0.05, // 5% dark overlay
  heightScale = 1.10, // 10% increased height as requested
}: HeroScrollFramesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Images cache
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCountRef = useRef(0);
  const [isInitialReady, setIsInitialReady] = useState(false);

  // Physics animation values for smooth scrubbing
  const targetFrameRef = useRef(1);
  const currentFrameRef = useRef(1);
  const animationFrameIdRef = useRef<number | null>(null);
  const isPlayingRef = useRef(false);

  // Format frame number to 4 digits: e.g., 1 -> "0001"
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

  // Draw a frame on canvas: covers full width and full frame edge-to-edge
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Find requested image or fallback to the nearest loaded frame
    let img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find nearest loaded frame so canvas never flickers or goes blank
      for (let offset = 1; offset < 30; offset++) {
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

    // Full screen width & height with ZERO cropping:
    // Covers 100% full screen width (no black side bars) AND 100% full height (no top/bottom cropping)
    const isDesktop = cw >= 768;
    const aspectDiff = (cw / ch) / (iw / ih);

    let renderWidth = cw;
    let renderHeight = ch;
    let offsetX = 0;
    let offsetY = 0;

    if (isDesktop && aspectDiff >= 0.75 && aspectDiff <= 1.4) {
      // Seamlessly stretch to cover 100% full screen width with 10% increased height
      renderWidth = cw;
      renderHeight = Math.round(ch * heightScale);
      offsetX = 0;
      offsetY = Math.round((ch - renderHeight) / 2);
    } else {
      // For mobile or extreme portrait ratios, cover full viewport with 10% increased height
      const ratio = Math.max(cw / iw, ch / ih);
      renderWidth = Math.round(iw * ratio);
      renderHeight = Math.round(ih * ratio * heightScale);
      offsetX = Math.round((cw - renderWidth) / 2);
      offsetY = Math.round((ch - renderHeight) / 2);
    }

    ctx.clearRect(0, 0, cw, ch);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, 0, 0, iw, ih, offsetX, offsetY, renderWidth, renderHeight);
  }, [heightScale]);

  // Update canvas size on resize or DPR change
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);

    const targetWidth = Math.floor(rect.width * dpr);
    const targetHeight = Math.floor(rect.height * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      drawFrame(Math.round(currentFrameRef.current));
    }
  }, [drawFrame]);

  // Preload frames in staged priority:
  // 1. Frame 1 (Instant Paint)
  // 2. Keyframes across the sequence (Fast Scrubbing readiness)
  // 3. All remaining frames (Complete fluidity)
  useEffect(() => {
    let isCancelled = false;
    imagesRef.current = new Array(totalFrames);

    // 1. First frame
    const firstImg = new Image();
    firstImg.src = getFrameUrl(1);
    imagesRef.current[0] = firstImg;
    firstImg.onload = () => {
      if (isCancelled) return;
      loadedCountRef.current++;
      setIsInitialReady(true);
      resizeCanvas();
      drawFrame(1);
    };

    // 2. Preload keyframes spaced by 8
    const keyframeIndices: number[] = [];
    for (let i = 2; i <= totalFrames; i += 8) {
      keyframeIndices.push(i);
    }

    keyframeIndices.forEach((frameNum) => {
      const img = new Image();
      img.src = getFrameUrl(frameNum);
      imagesRef.current[frameNum - 1] = img;
      img.onload = () => {
        if (!isCancelled) loadedCountRef.current++;
      };
    });

    // 3. Background stream all other frames
    const preloadTimer = setTimeout(() => {
      for (let i = 1; i <= totalFrames; i++) {
        if (!imagesRef.current[i - 1]) {
          const img = new Image();
          img.src = getFrameUrl(i);
          imagesRef.current[i - 1] = img;
          img.onload = () => {
            if (!isCancelled) loadedCountRef.current++;
          };
        }
      }
    }, 150);

    return () => {
      isCancelled = true;
      clearTimeout(preloadTimer);
    };
  }, [totalFrames, getFrameUrl, resizeCanvas, drawFrame]);

  // Handle external scroll progress or internal container scroll
  useEffect(() => {
    if (scrollProgress !== undefined) {
      const clamped = Math.max(0, Math.min(1, scrollProgress));
      targetFrameRef.current = Math.round(clamped * (totalFrames - 1)) + 1;
    }
  }, [scrollProgress, totalFrames]);

  // Window resize observer
  useEffect(() => {
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  // 60/120 FPS Physics Animation Loop: Smooth inertia LERP
  // This guarantees that even if the user scrolls very fast, frames animate smoothly without skipping or stuttering!
  useEffect(() => {
    isPlayingRef.current = true;

    const renderLoop = () => {
      if (!isPlayingRef.current) return;

      const diff = targetFrameRef.current - currentFrameRef.current;

      // When difference is noticeable, interpolate smoothly
      if (Math.abs(diff) > 0.01) {
        currentFrameRef.current += diff * damping;
        drawFrame(Math.round(currentFrameRef.current));
      }

      animationFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    animationFrameIdRef.current = requestAnimationFrame(renderLoop);

    return () => {
      isPlayingRef.current = false;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [damping, drawFrame]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none ${className}`}
    >
      {/* HTML5 Render Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full block object-contain will-change-transform"
      />

      {/* 5% Dark Overlay as requested */}
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 pointer-events-none z-10 transition-opacity duration-300"
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
        />
      )}

      {/* Optional Soft Edge Vignette (Default very subtle to keep video bright and vibrant) */}
      {showVignette && (
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/25 via-transparent to-black/30 z-10" />
      )}

      {/* Subtle Loading indicator if first frame is still preparing */}
      {!isInitialReady && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050608] z-20">
          <div className="w-10 h-10 border-3 border-[#FFD400] border-t-transparent rounded-full animate-spin mb-3" />
          <span className="text-[11px] font-mono text-[#FFD400] tracking-widest uppercase">
            CALIBRATING MISSION FRAMES...
          </span>
        </div>
      )}
    </div>
  );
}
