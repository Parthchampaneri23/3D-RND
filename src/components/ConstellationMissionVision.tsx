"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  Cpu,
  Sparkles,
  Users,
  Target,
  ChevronRight,
  Compass,
} from "lucide-react";

export default function ConstellationMissionVision({
  className = "py-[50px]",
}: {
  className?: string;
} = {}) {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Background Golden Starfield Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.5 + 0.6;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(c: CanvasRenderingContext2D) {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = "#FFD400";
        c.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < 45; i++) {
      particles.push(new Particle());
    }

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
      animId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const values = [
    {
      id: "node-1",
      number: "01",
      name: "Radical Transparency",
      icon: ShieldCheck,
    },
    {
      id: "node-2",
      number: "02",
      name: "Relentless Craftsmanship",
      icon: Cpu,
    },
    {
      id: "node-3",
      number: "03",
      name: "Fearless Innovation",
      icon: Sparkles,
    },
    {
      id: "node-4",
      number: "04",
      name: "Collective Synergy",
      icon: Users,
    },
  ];

  // GSAP ScrollTrigger Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Constellation Header
      gsap.fromTo(
        ".constellation-header",
        { opacity: 0, y: 35, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".constellation-header",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Left 4 Orbiting Value Nodes Stagger
      gsap.fromTo(
        ".constellation-value-node",
        { opacity: 0, x: -35, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".constellation-value-node",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Central Vision Core Sun
      gsap.fromTo(
        "#vision-core",
        { opacity: 0, scale: 0.75 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.0,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: "#vision-core",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // 4. Mission Bridge Card
      gsap.fromTo(
        "#mission-bridge",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#mission-bridge",
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // 5. Right Strategic Vision Card
      gsap.fromTo(
        ".constellation-vision-card",
        { opacity: 0, x: 40, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".constellation-vision-card",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="constellation-orbital-ecosystem"
      className={`relative w-full ${className} flex flex-col justify-center overflow-hidden text-gray-100 selection:bg-[#FFD400] selection:text-black font-sans`}
    >
      {/* Background Canvas & Radial Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full opacity-35" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#FFD400]/10 blur-[130px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header with Glowing Orbital Title Animation */}
        <div className="constellation-header text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FFD400]/10 text-[#FFD400] border border-[#FFD400]/30 tracking-widest uppercase mb-4 shadow-[0_0_25px_rgba(255,212,0,0.2)] hover:border-[#FFD400]/60 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-ping" />
            <span className="tracking-[0.2em] font-mono">Constellation Architecture / 01</span>
          </div>
          <h1 className="font-[family-name:var(--font-syne)] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
            The Orbital{" "}
            <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.45)]">
              Ecosystem
            </span>
          </h1>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
            An interconnected universe where our North Star Vision guides our Mission trajectory, powered by planetary Core Value orbits.
          </p>
        </div>

        {/* Constellation Interactive Stage: 3-Column Layout Aligned to Exact Same Bottom Baseline */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* =========================================================================
              LEFT COLUMN: ALL 4 VALUES (Evenly Spaced, Bottom Aligned with Center & Right)
              ========================================================================= */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3.5 h-full">
            <div className="text-xs uppercase tracking-[0.25em] text-[#FFD400] font-semibold mb-1 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-ping" />
              <span>01 / Orbiting Values</span>
            </div>

            <div className="flex-1 flex flex-col justify-between gap-3.5">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.number}
                    className={`constellation-value-node bg-black/30 backdrop-blur-md border border-[#FFD400]/20 hover:border-[#FFD400]/70 p-4 sm:p-4.5 rounded-2xl transition-all duration-300 hover:scale-[1.025] shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(255,212,0,0.06)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.7),0_0_35px_rgba(255,212,0,0.25)] group relative overflow-hidden flex-1 flex flex-col justify-center ${
                      idx % 2 === 0 ? "hover:-translate-y-0.5" : "hover:translate-y-0.5"
                    }`}
                  >
                    {/* Hover Light Sweep Beam */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD400]/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center space-x-3.5">
                        <div className="w-10 h-10 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] group-hover:bg-[#FFD400] group-hover:text-black transition-all group-hover:scale-110 group-hover:rotate-6 shrink-0 shadow-[0_0_15px_rgba(255,212,0,0.1)]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-mono text-[#FFD400] font-semibold block">
                            NODE {v.number}
                          </span>
                          <h3 className="font-[family-name:var(--font-syne)] text-base sm:text-lg font-bold text-white group-hover:text-[#FFD400] transition-colors leading-snug">
                            {v.name}
                          </h3>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-neutral-500 group-hover:text-[#FFD400] group-hover:translate-x-1.5 transition-all shrink-0" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =========================================================================
              CENTER COLUMN: CORE SUN (VISION) + MISSION BRIDGE CARD (Bottom Anchored)
              ========================================================================= */}
          <div className="lg:col-span-4 flex flex-col justify-between items-center text-center relative py-1 h-full">
            
            {/* Connecting SVG Orbits behind Center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <div className="w-80 h-80 rounded-full border border-dashed border-[#FFD400]/30 animate-spin-slow" />
              <div className="absolute w-[480px] h-[480px] rounded-full border border-[#FFD400]/10" />
            </div>

            {/* Central Sun */}
            <div id="vision-core" className="relative group my-auto select-none py-6">
              <div className="absolute inset-0 rounded-full bg-[#FFD400]/30 blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse" />
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-black/40 backdrop-blur-2xl border-2 border-[#FFD400] flex flex-col items-center justify-center p-6 shadow-[0_0_60px_rgba(255,212,0,0.45)] group-hover:scale-105 transition-transform duration-500">
                <span className="text-[10px] font-mono tracking-widest text-[#FFD400] uppercase mb-1 font-bold">
                  North Star Vision
                </span>
                <h2 className="font-[family-name:var(--font-syne)] text-base sm:text-lg font-bold text-white leading-tight">
                  Autonomous Digital Paradigm
                </h2>
              </div>
            </div>

            {/* The Bridge: Mission Card (Anchored to exact bottom baseline) */}
            <div id="mission-bridge" className="w-full bg-black/30 backdrop-blur-md border border-[#FFD400]/25 hover:border-[#FFD400]/70 p-6 rounded-2xl transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(255,212,0,0.06)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.7),0_0_35px_rgba(255,212,0,0.25)] group text-left mt-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD400]/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              <div className="flex items-center justify-between mb-2 relative z-10">
                <span className="text-xs font-mono text-[#FFD400] font-bold uppercase tracking-wider">
                  Mission Bridge / 02
                </span>
                <Target className="w-4 h-4 text-[#FFD400] group-hover:rotate-45 group-hover:scale-125 transition-transform duration-300" />
              </div>
              <h3 className="font-[family-name:var(--font-syne)] text-sm sm:text-base font-bold text-white mb-2 leading-snug group-hover:text-[#FFD400] transition-colors relative z-10">
                To engineer relentless clarity and compounding value through autonomous code.
              </h3>
              <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed font-light relative z-10">
                Every iteration undergoes rigorous stress-testing to guarantee rock-solid resilience and sub-millisecond execution.
              </p>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: STRATEGIC VISION CARD (Bottom Anchored & Same Baseline)
              ========================================================================= */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-3.5">
            <div className="text-xs uppercase tracking-[0.25em] text-[#FFD400] font-semibold mb-1 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-ping" />
              <span>02 / Strategic Vision</span>
            </div>

            {/* Vision Card: Fills height so bottom edge matches left & center columns */}
            <div className="constellation-vision-card flex-1 bg-black/30 backdrop-blur-md border border-[#FFD400]/30 hover:border-[#FFD400]/70 p-6 sm:p-8 rounded-3xl transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.6),0_0_45px_rgba(255,212,0,0.15)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.8),0_0_60px_rgba(255,212,0,0.35)] group relative overflow-hidden flex flex-col justify-between">
              {/* Subtle Ambient Radial Highlight */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFD400]/10 rounded-full blur-[60px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD400]/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              <div className="relative z-10">
                {/* Category Indicator */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFD400] animate-ping" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FFD400] font-semibold">
                    North Star Vision / Core
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight group-hover:text-[#FFD400] transition-colors">
                  Pioneering the Next Paradigm of Intelligent Digital Architecture
                </h3>

                {/* Description */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  We envision a borderless digital ecosystem where human ingenuity effortlessly syncs with autonomous machine precision, establishing unprecedented benchmarks for sustainable enterprise impact.
                </p>
              </div>

              {/* Footer Tag */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 relative z-10">
                <span className="font-mono text-[11px] text-[#FFD400]/90">
                  Ultimate North Star Horizon
                </span>
                <span className="w-8 h-8 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] group-hover:bg-[#FFD400] group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(255,212,0,0.2)]">
                  <Compass className="w-4 h-4 animate-spin-slow" />
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
