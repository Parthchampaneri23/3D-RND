"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Move3d,
  Compass,
  Eye,
  Sliders,
  Layers,
  Activity,
  ChevronDown,
  ChevronRight,
  Maximize2,
  Cpu,
  Globe,
  Database,
  Terminal,
  Zap,
} from "lucide-react";
import Astronaut, { AstronautActionPose } from "@/components/Astronaut";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import CyberButton from "@/components/CyberButton";

type ShowcaseMode = "standup" | "scroll" | "manual";
type TargetSide = "center" | "left" | "right";

interface StageData {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  side: TargetSide;
  description: string;
  tags: string[];
  metrics: { label: string; val: string }[];
  pose: AstronautActionPose;
}

const STAGES: StageData[] = [
  {
    id: "center-overview",
    step: "01",
    title: "MISSION CONTROL // STAND UP FIX",
    subtitle: "Real-Time Dual-Arm Cursor Gesture Presentation",
    side: "center",
    description:
      "Hover your cursor left or right. The astronaut stands fixed in center, elevating the respective arm and turning its head to actively present the content you explore.",
    tags: ["Cursor Tracking", "Zero-G Idle Float", "Saccadic Eye Gaze", "Smooth Dampening"],
    metrics: [
      { label: "Active Rig", val: "30 Bones" },
      { label: "Kinematics", val: "Procedural IK" },
      { label: "FPS Target", val: "60-120 FPS" },
    ],
    pose: {
      targetX: 0,
      targetY: 0,
      targetRotY: 0,
      targetRotX: 0,
      headYawOffset: 0,
      headPitchOffset: 0,
    },
  },
  {
    id: "stage-left",
    step: "02",
    title: "SLIDE LEFT // PRESENT RIGHT",
    subtitle: "Enterprise Cloud Mesh & Backend Systems",
    side: "left",
    description:
      "The astronaut smoothly transitions to the left perimeter, turning inward and extending its right arm across the stage to spotlight the right-side technical architecture.",
    tags: ["Distributed Mesh", "P99 < 12ms", "Terraform IAC", "Zero-Trust VPC"],
    metrics: [
      { label: "Position X", val: "-0.78 L" },
      { label: "Arm State", val: "Right Elevated" },
      { label: "Body Yaw", val: "+18° Inward" },
    ],
    pose: {
      targetX: -0.78,
      targetY: 0,
      targetRotY: 0.35,
      targetRotX: -0.03,
      headYawOffset: 0.45,
      headPitchOffset: 0,
    },
  },
  {
    id: "stage-right",
    step: "03",
    title: "SLIDE RIGHT // PRESENT LEFT",
    subtitle: "Visual Intelligence & Brand Direction",
    side: "right",
    description:
      "The astronaut glides across to the right perimeter, turning inward and elevating its left arm to showcase the high-fidelity branding and conversion systems on the left.",
    tags: ["WebGL Shaders", "GSAP ScrollTrigger", "Design Systems", "Conversion Funnels"],
    metrics: [
      { label: "Position X", val: "+0.78 R" },
      { label: "Arm State", val: "Left Elevated" },
      { label: "Body Yaw", val: "-18° Inward" },
    ],
    pose: {
      targetX: 0.78,
      targetY: 0,
      targetRotY: -0.35,
      targetRotX: 0.03,
      headYawOffset: -0.45,
      headPitchOffset: 0,
    },
  },
];

export default function AstronautTestPage() {
  const [activeMode, setActiveMode] = useState<ShowcaseMode>("standup");
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const [mouseTelemetry, setMouseTelemetry] = useState({ x: 0, y: 0 });
  const [cursorArmIndicator, setCursorArmIndicator] = useState<"LEFT" | "RIGHT" | "RESTING">("RESTING");

  const stage = STAGES[selectedStageIndex];

  // Mouse telemetry tracking over the interactive canvas container
  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to +1
    const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1); // -1 to +1
    setMouseTelemetry({ x: Number(nx.toFixed(2)), y: Number(ny.toFixed(2)) });

    if (activeMode === "standup") {
      if (nx < -0.05) setCursorArmIndicator("LEFT");
      else if (nx > 0.05) setCursorArmIndicator("RIGHT");
      else setCursorArmIndicator("RESTING");
    } else if (stage.side === "left") {
      setCursorArmIndicator("RIGHT");
    } else if (stage.side === "right") {
      setCursorArmIndicator("LEFT");
    } else {
      setCursorArmIndicator("RESTING");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050608] text-white selection:bg-[#FFD400] selection:text-black font-sans antialiased overflow-x-hidden">
      <SpaceBackground />
      <Navbar />

      <main className="relative z-10 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 pt-28 pb-24">
        {/* Top Header & Breadcrumb Status */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-[#FFD400] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>EXIT TO PORTAL</span>
            </Link>
            <span className="text-white/20">|</span>
            <span className="text-xs font-mono text-[#FFD400] uppercase tracking-wider">
              EXPERIMENTAL LABORATORY // KINEMATICS ENGINE 2.0
            </span>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="inline-flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <button
              onClick={() => {
                setActiveMode("standup");
                setSelectedStageIndex(0);
              }}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeMode === "standup"
                  ? "bg-[#FFD400] text-black font-semibold shadow-[0_0_15px_rgba(255,212,0,0.3)]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>STAND UP FIX (CURSOR POINT)</span>
            </button>

            <button
              onClick={() => setActiveMode("scroll")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeMode === "scroll"
                  ? "bg-[#FFD400] text-black font-semibold shadow-[0_0_15px_rgba(255,212,0,0.3)]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>SCROLL STAGES (SLIDE & SHOW)</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            MODE 1: STAND UP FIX — DYNAMIC DUAL-ARM CURSOR PRESENTATION
           ========================================================================= */}
        {activeMode === "standup" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Interactive Stage Viewport with Split Content Panels */}
            <div
              onMouseMove={handleStageMouseMove}
              className="relative w-full h-[620px] sm:h-[680px] rounded-3xl bg-gradient-to-b from-white/[0.03] to-black/80 border border-white/10 overflow-hidden flex items-center justify-between px-6 sm:px-12 group shadow-[0_25px_60px_rgba(0,0,0,0.8)]"
            >
              {/* Background Glows */}
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[420px] h-[420px] bg-[#FFD400]/10 blur-[130px] rounded-full pointer-events-none" />
              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[420px] h-[420px] bg-cyan-400/10 blur-[130px] rounded-full pointer-events-none" />

              {/* Top HUD Telemetry Banner */}
              <div className="absolute top-5 left-6 right-6 z-30 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[11px] font-mono text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>SKELETAL BONE TRACKING: ACTIVE</span>
                </div>

                <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-black/70 border border-[#FFD400]/30 backdrop-blur-md text-[11px] font-mono text-[#FFD400]">
                  <span>CURSOR: ({mouseTelemetry.x.toFixed(2)}, {mouseTelemetry.y.toFixed(2)})</span>
                  <span>|</span>
                  <span>ACTIVE ARM: <strong className="text-white underline">{cursorArmIndicator}</strong></span>
                </div>
              </div>

              {/* ----------------- LEFT CONTENT CARD ----------------- */}
              <div
                className={`relative z-20 max-w-sm sm:max-w-md p-6 sm:p-8 rounded-3xl bg-black/60 border backdrop-blur-xl transition-all duration-300 ${
                  mouseTelemetry.x < -0.05
                    ? "border-[#FFD400] shadow-[0_0_35px_rgba(255,212,0,0.25)] scale-[1.02]"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#FFD400] tracking-widest uppercase">
                  <Globe className="w-4 h-4" />
                  <span>LEFT DOMAIN // DIGITAL EXPERIENCE</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                  Next-Gen Web Architecture
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  Move your mouse over this card. The astronaut stands in the center and immediately raises its left-side arm, bends the elbow, and opens its hand to point directly at this section!
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["React Three Fiber", "GSAP Kinematics", "Micro-frontends", "Edge Workers"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <CyberButton href="/services/web-cloud" size="sm">
                  EXPLORE ARCHITECTURE
                </CyberButton>
              </div>

              {/* ----------------- CENTER 3D ASTRONAUT ----------------- */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                <Astronaut
                  className="w-full h-full"
                  targetSide="center"
                  pose={{
                    targetX: 0,
                    targetY: 0,
                    targetRotY: 0,
                    targetRotX: 0,
                  }}
                />
              </div>

              {/* ----------------- RIGHT CONTENT CARD ----------------- */}
              <div
                className={`relative z-20 max-w-sm sm:max-w-md p-6 sm:p-8 rounded-3xl bg-black/60 border backdrop-blur-xl transition-all duration-300 text-right ${
                  mouseTelemetry.x > 0.05
                    ? "border-[#FFD400] shadow-[0_0_35px_rgba(255,212,0,0.25)] scale-[1.02]"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <div className="flex items-center justify-end gap-2 mb-3 text-xs font-mono text-[#FFD400] tracking-widest uppercase">
                  <span>RIGHT DOMAIN // COGNITIVE CLOUD</span>
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                  Enterprise Cloud Mesh
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  Move your mouse over this right card. The astronaut turns its head and elevates its right-side arm, pointing across with palm presentation while tracking cursor height in real-time!
                </p>
                <div className="flex flex-wrap justify-end gap-2 mb-6">
                  {["Kubernetes", "AWS Fargate", "Zero-Trust", "Kafka Eventing"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <CyberButton href="/services/enterprise-dev" size="sm">
                  DEPLOY CLUSTER
                </CyberButton>
              </div>

              {/* Bottom Instructions Indicator */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 pointer-events-none text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/75 border border-white/15 backdrop-blur-md text-xs font-mono text-neutral-300 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#FFD400] animate-ping" />
                  <span>SWEEP CURSOR LEFT OR RIGHT TO TRIGGER ARMS</span>
                </div>
              </div>
            </div>

            {/* Feature Telemetry Cards below Viewport */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Compass className="w-5 h-5 text-[#FFD400]" />
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                    Standing Fix Posture
                  </h4>
                </div>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  The model remains centered on screen at <code>targetX: 0</code>. Gentle harmonic chest breathing (<code className="text-[#FFD400]">Math.sin(time * 2.0)</code>) keeps the character alive even during rest.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Move3d className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                    Organic Arm Elevation
                  </h4>
                </div>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Moving cursor left or right activates the upper arm (Y/Z rotation), unfolds the forearm at the elbow (Z rotation), and articulates the wrist to present content.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                    Saccadic Eye & Head Gaze
                  </h4>
                </div>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  The astronaut’s head and neck naturally anticipate and gaze towards whichever card the user explores, with vertical pitch modulation tracking mouse height.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            MODE 2: SCROLL STAGE SIMULATION (SLIDE LEFT / RIGHT & PRESENT CONTENT)
           ========================================================================= */}
        {activeMode === "scroll" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Stage Selector Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-[#0c0e14] border border-white/15">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                  SIMULATE SCROLL STAGE:
                </span>
                <div className="flex items-center gap-2">
                  {STAGES.map((stg, idx) => (
                    <button
                      key={stg.id}
                      onClick={() => setSelectedStageIndex(idx)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                        selectedStageIndex === idx
                          ? "bg-[#FFD400] text-black font-bold shadow-[0_0_15px_rgba(255,212,0,0.3)]"
                          : "bg-white/[0.04] text-neutral-300 hover:bg-white/[0.08]"
                      }`}
                    >
                      {stg.step}: {stg.side.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Next / Previous Controls */}
              <div className="flex items-center gap-2">
                <button
                  disabled={selectedStageIndex === 0}
                  onClick={() => setSelectedStageIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1 rounded-md text-xs font-mono text-neutral-300 hover:text-white bg-white/[0.04] border border-white/10 disabled:opacity-30 cursor-pointer"
                >
                  PREV
                </button>
                <button
                  disabled={selectedStageIndex === STAGES.length - 1}
                  onClick={() => setSelectedStageIndex((prev) => Math.min(STAGES.length - 1, prev + 1))}
                  className="px-3 py-1 rounded-md text-xs font-mono text-neutral-300 hover:text-white bg-white/[0.04] border border-white/10 disabled:opacity-30 cursor-pointer"
                >
                  NEXT
                </button>
              </div>
            </div>

            {/* Pinned Scroll Simulation Stage */}
            <div
              onMouseMove={handleStageMouseMove}
              className="relative w-full h-[620px] sm:h-[680px] rounded-3xl bg-gradient-to-b from-[#0a0d14] to-black border border-white/15 overflow-hidden flex items-center shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
            >
              {/* Dynamic Glow following the side */}
              <div
                className={`absolute top-1/2 w-[480px] h-[480px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 -translate-y-1/2 ${
                  stage.side === "left"
                    ? "left-[18%] bg-[#FFD400]/15"
                    : stage.side === "right"
                    ? "left-[82%] -translate-x-full bg-cyan-400/15"
                    : "left-1/2 -translate-x-1/2 bg-[#FFD400]/12"
                }`}
              />

              {/* Center 3D Astronaut Render */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-auto">
                <Astronaut
                  className="w-full h-full"
                  targetSide={stage.side}
                  pose={stage.pose}
                />
              </div>

              {/* ----------------- PRESENTED CONTENT (OPPOSITE OF MODEL SIDE) ----------------- */}
              <div className="relative z-20 w-full max-w-[1550px] mx-auto px-6 sm:px-12 flex items-center justify-between pointer-events-none">
                {/* Content on LEFT side (visible when model is on RIGHT) */}
                <div
                  className={`max-w-xl transition-all duration-700 ease-out ${
                    stage.side === "right"
                      ? "opacity-100 translate-x-0 pointer-events-auto"
                      : "opacity-0 -translate-x-12 pointer-events-none hidden md:block md:invisible"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-xs font-mono text-[#FFD400] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-pulse" />
                    <span>STAGE {stage.step} // ASTRONAUT ON RIGHT</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-[family-name:var(--font-jakarta)] leading-tight">
                    {stage.subtitle}
                  </h2>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    {stage.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {stage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-black/60 border border-white/15 text-xs font-mono text-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md mb-6">
                    {stage.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-[10px] font-mono text-neutral-400 uppercase">{m.label}</div>
                        <div className="text-sm font-mono font-bold text-[#FFD400]">{m.val}</div>
                      </div>
                    ))}
                  </div>
                  <CyberButton href="/services" size="md">
                    VIEW COMPREHENSIVE ROADMAP
                  </CyberButton>
                </div>

                {/* Content on RIGHT side (visible when model is on LEFT) */}
                <div
                  className={`max-w-xl ml-auto text-right transition-all duration-700 ease-out ${
                    stage.side === "left"
                      ? "opacity-100 translate-x-0 pointer-events-auto"
                      : "opacity-0 translate-x-12 pointer-events-none hidden md:block md:invisible"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-xs font-mono text-[#FFD400] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-pulse" />
                    <span>STAGE {stage.step} // ASTRONAUT ON LEFT</span>
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-[family-name:var(--font-jakarta)] leading-tight">
                    {stage.subtitle}
                  </h2>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    {stage.description}
                  </p>
                  <div className="flex flex-wrap justify-end gap-2 mb-6">
                    {stage.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-black/60 border border-white/15 text-xs font-mono text-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md mb-6 text-left">
                    {stage.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-[10px] font-mono text-neutral-400 uppercase">{m.label}</div>
                        <div className="text-sm font-mono font-bold text-[#FFD400]">{m.val}</div>
                      </div>
                    ))}
                  </div>
                  <CyberButton href="/services" size="md">
                    VIEW INFRASTRUCTURE BLUEPRINTS
                  </CyberButton>
                </div>

                {/* Center Welcome Overview (visible when model is centered) */}
                {stage.side === "center" && (
                  <div className="w-full flex items-center justify-between pointer-events-none">
                    <div className="max-w-xs text-left">
                      <span className="text-[10px] font-mono text-[#FFD400] tracking-widest uppercase">
                        INTERACTIVE PRESENTER
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-1">Stand Up Fix</h3>
                      <p className="text-xs text-neutral-400 mt-2">
                        Move cursor across screen to observe dynamic shoulder, forearm, and wrist gestures.
                      </p>
                    </div>

                    <div className="max-w-xs text-right">
                      <span className="text-[10px] font-mono text-[#FFD400] tracking-widest uppercase">
                        MULTI-STAGE SCROLL
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-1">Side Progression</h3>
                      <p className="text-xs text-neutral-400 mt-2">
                        Click the stage buttons above or scroll to see the astronaut slide left and right.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Stage Progression Flow Indicator */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {STAGES.map((stg, idx) => (
                <div
                  key={stg.id}
                  onClick={() => setSelectedStageIndex(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    selectedStageIndex === idx
                      ? "bg-white/[0.06] border-[#FFD400] shadow-[0_0_20px_rgba(255,212,0,0.15)]"
                      : "bg-white/[0.02] border-white/10 hover:border-white/25"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-2">
                    <span>STAGE {stg.step}</span>
                    <span className="text-[#FFD400] font-semibold">{stg.side.toUpperCase()} POSITION</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{stg.title}</h4>
                  <p className="text-xs text-neutral-400 line-clamp-2">{stg.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <RnDFooter />
    </div>
  );
}
