"use client";

import React, { useEffect, useRef, useState } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

export default function RocketCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const rocketRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const nextId = useRef(0);

  const pos = useRef({ x: -100, y: -100 });
  const prevPos = useRef({ x: -100, y: -100 });
  const angleRef = useRef(-45);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const colors = ["#FFD400", "#FF9900", "#FF5500", "#FFFFFF", "#FFE066"];

    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Calculate movement angle
      const dx = e.clientX - prevPos.current.x;
      const dy = e.clientY - prevPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 1.5) {
        // Rocket base points upward-right by default (-45 deg)
        // Add subtle tilt based on velocity vector
        const targetAngle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
        angleRef.current = targetAngle;

        // Emit exhaust sparks opposite to movement
        const sparkCount = Math.min(Math.floor(speed / 4) + 1, 4);
        for (let i = 0; i < sparkCount; i++) {
          const spread = (Math.random() - 0.5) * 1.5;
          const sparkSpeed = Math.random() * 2 + 1;
          const sparkAngle = (targetAngle - 90 + 180) * (Math.PI / 180) + spread;

          // Spawn point at rocket base
          const offsetDist = 18;
          const spawnX = e.clientX - Math.cos((targetAngle - 90) * (Math.PI / 180)) * offsetDist;
          const spawnY = e.clientY - Math.sin((targetAngle - 90) * (Math.PI / 180)) * offsetDist;

          sparksRef.current.push({
            id: nextId.current++,
            x: spawnX,
            y: spawnY,
            vx: Math.cos(sparkAngle) * sparkSpeed,
            vy: Math.sin(sparkAngle) * sparkSpeed,
            size: Math.random() * 3 + 1.5,
            alpha: 1,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
      }

      prevPos.current = { x: e.clientX, y: e.clientY };

      // Check if hovering clickable
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "SELECT" ||
          target.tagName === "TEXTAREA" ||
          target.closest("button") ||
          target.closest("a") ||
          target.classList.contains("cursor-pointer"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Animation loop for rocket smooth follow and sparks
    let animId: number;
    let currentX = -100;
    let currentY = -100;
    let currentAngle = -45;

    const render = () => {
      // Smooth interpolation for rocket
      currentX += (pos.current.x - currentX) * 0.45;
      currentY += (pos.current.y - currentY) * 0.45;

      // Smooth angle interpolation
      let diff = angleRef.current - currentAngle;
      while (diff < -180) diff += 360;
      while (diff > 180) diff -= 360;
      currentAngle += diff * 0.25;

      if (rocketRef.current) {
        rocketRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) rotate(${currentAngle}deg) scale(${isHovered ? 1.25 : 1})`;
      }

      // Render sparks on canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = sparksRef.current.length - 1; i >= 0; i--) {
        const s = sparksRef.current[i];
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.038;
        s.size *= 0.94;

        if (s.alpha <= 0 || s.size < 0.2) {
          sparksRef.current.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Keep spark list capped
      if (sparksRef.current.length > 120) {
        sparksRef.current = sparksRef.current.slice(-120);
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isVisible, isHovered]);

  return (
    <>
      {/* Canvas for sparks */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
      />

      {/* Futuristic Rocket Layout Cursor */}
      <div
        ref={rocketRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 will-change-transform ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <div className="relative flex items-center justify-center">
          {/* Engine Thruster Glow */}
          <div
            className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-3.5 h-6 rounded-full blur-[3px] transition-all duration-200 ${
              isHovered
                ? "bg-gradient-to-t from-transparent via-[#FF5500] to-[#FFD400] scale-150 opacity-100 animate-pulse"
                : "bg-gradient-to-t from-transparent via-[#FF9900] to-[#FFD400] opacity-80"
            }`}
          />

          {/* Precision Aerospace Rocket SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_8px_rgba(255,212,0,0.65)]"
          >
            {/* Rocket Fins */}
            <path
              d="M4 17L7 14L8 16L5 19L4 17Z"
              fill="#FFD400"
              opacity="0.85"
            />
            <path
              d="M20 17L17 14L16 16L19 19L20 17Z"
              fill="#FFD400"
              opacity="0.85"
            />

            {/* Main Rocket Body */}
            <path
              d="M12 2C9.5 4.5 8 9 8 13C8 16 9.5 18 12 19C14.5 18 16 16 16 13C16 9 14.5 4.5 12 2Z"
              fill="#08090D"
              stroke="#FFD400"
              strokeWidth="1.4"
            />

            {/* Nose Cone Accent */}
            <path
              d="M12 2C10.8 3.5 10 5.5 10 7.5C11.2 7 12.8 7 14 7.5C14 5.5 13.2 3.5 12 2Z"
              fill="#FFD400"
            />

            {/* Porthole Window */}
            <circle
              cx="12"
              cy="11.5"
              r="2"
              fill="#00E5FF"
              stroke="#FFFFFF"
              strokeWidth="0.8"
              className="drop-shadow-[0_0_4px_#00E5FF]"
            />

            {/* Rocket Exhaust Nozzle */}
            <path
              d="M10.5 19H13.5L13 21H11L10.5 19Z"
              fill="#FF5500"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
