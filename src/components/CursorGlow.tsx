"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor with a glowing dot + trailing ring.
 * Only activates on devices with a fine pointer (desktop).
 * The ring expands and the dot shrinks when hovering interactive elements.
 */
export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch / coarse-pointer devices
    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    )
      return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let hovering = false;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.opacity = "1";
      ring.style.opacity = "1";

      // Detect interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest(
        'a, button, input, textarea, select, label, [data-cursor="hover"]'
      );

      if (isInteractive !== hovering) {
        hovering = isInteractive;
        if (hovering) {
          ring.style.width = "52px";
          ring.style.height = "52px";
          ring.style.borderColor = "rgba(255,212,0,0.9)";
          ring.style.backgroundColor = "rgba(255,212,0,0.08)";
        } else {
          ring.style.width = "34px";
          ring.style.height = "34px";
          ring.style.borderColor = "rgba(255,212,0,0.5)";
          ring.style.backgroundColor = "transparent";
        }
      }

      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%) scale(${
        hovering ? 0.4 : 1
      })`;
    };

    const handleMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    // Smooth lerp animation for the trailing ring
    const animate = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Glowing dot — follows cursor precisely */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#FFD400",
          boxShadow:
            "0 0 12px rgba(255,212,0,0.8), 0 0 24px rgba(255,212,0,0.4)",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: 0,
          transition: "opacity 0.3s ease",
          willChange: "transform, opacity",
        }}
      />
      {/* Trailing ring — follows with smooth lerp */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "34px",
          height: "34px",
          borderRadius: "50%",
          border: "1.5px solid rgba(255,212,0,0.5)",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: 0,
          transition:
            "opacity 0.3s ease, width 0.25s ease, height 0.25s ease, border-color 0.25s ease, background-color 0.25s ease",
          willChange: "transform, opacity, width, height",
        }}
      />
    </>
  );
}
