"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import {
  ArrowLeft,
  Sparkles,
  Move3d,
  Compass,
  Eye,
  Sliders,
  Layers,
  Activity,
  ChevronRight,
  Cpu,
  Globe,
  Database,
  Terminal,
  Zap,
  Code2,
  Workflow,
  ShieldCheck,
  Flame,
} from "lucide-react";
import CursorAstronaut from "@/components/CursorAstronaut";
import Navbar from "@/components/Navbar";
import RnDFooter from "@/components/RnDFooter";
import SpaceBackground from "@/components/SpaceBackground";
import CyberButton from "@/components/CyberButton";

interface TopicInfo {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

const TOPICS: TopicInfo[] = [
  {
    id: "web-spatial",
    badge: "01 // SPATIAL & WEBGL",
    title: "Next-Gen 3D Architecture",
    subtitle: "High-Performance Three.js & React Three Fiber Systems",
    description:
      "Hover over this section. The 3D astronaut turns its helmet inward and elevates its right arm and hand, actively gesturing toward this architecture specification in real-time.",
    tags: ["React Three Fiber", "Drei Bone Rigging", "GSAP ScrollTrigger", "P99 < 16ms"],
    metrics: [
      { label: "Frame Rate", value: "120 FPS" },
      { label: "Rigged Bones", value: "30 Joints" },
      { label: "Rendering", value: "PBR Shaders" },
    ],
    accentColor: "#FFD400",
  },
  {
    id: "cloud-mesh",
    badge: "02 // COGNITIVE CLOUD",
    title: "Enterprise Autonomous Mesh",
    subtitle: "Zero-Trust Distributed Microservices & Event Pipelines",
    description:
      "As your cursor shifts down to this panel, the astronaut adjusts its head pitch downward and points its forearm and hand directly at this cloud infrastructure layer.",
    tags: ["Kubernetes", "AWS Fargate", "Kafka Streams", "Terraform IAC"],
    metrics: [
      { label: "Availability", value: "99.99%" },
      { label: "Latency", value: "8.4ms" },
      { label: "Throughput", value: "2.4M req/s" },
    ],
    accentColor: "#00E5FF",
  },
  {
    id: "design-growth",
    badge: "03 // CONVERSION DESIGN",
    title: "Spatial UX & Brand Systems",
    subtitle: "High-Converting Interactive Digital Products for Innovators",
    description:
      "Hover here to see the astronaut gesture downward toward the conversion funnels and design system tokens, keeping constant visual gaze alignment with your cursor.",
    tags: ["Figma Tokens", "Micro-Interactions", "CRO Optimization", "Full-Stack Design"],
    metrics: [
      { label: "Conversion Lift", value: "+44.8%" },
      { label: "Design Sync", value: "100% Vector" },
      { label: "Global Reach", value: "48 Countries" },
    ],
    accentColor: "#A855F7",
  },
];

export default function AstronautTestPage() {
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);
  const [activeModel, setActiveModel] = useState("/wh63ab6b.glb");
  const [mouseTelemetry, setMouseTelemetry] = useState({ x: 0, y: 0 });
  const [isExplaining, setIsExplaining] = useState(true);

  const activeTopic = TOPICS[activeTopicIndex];

  // Mouse telemetry tracking over the interactive canvas stage
  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 (left) to +1 (right)
    const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1); // -1 (down) to +1 (up)
    setMouseTelemetry({ x: Number(nx.toFixed(2)), y: Number(ny.toFixed(2)) });
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
              <span>RETURN TO MAIN PORTAL</span>
            </Link>
            <span className="text-white/20">|</span>
            <span className="text-xs font-mono text-[#FFD400] uppercase tracking-wider">
              EXPERIMENTAL LABORATORY // CURSOR & SKELETAL MOTION ENGINE
            </span>
          </div>

          {/* Model Switcher */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest hidden sm:inline">
              ACTIVE 3D MODEL:
            </span>
            <div className="inline-flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <button
                onClick={() => setActiveModel("/wh63ab6b.glb")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeModel === "/wh63ab6b.glb"
                    ? "bg-[#FFD400] text-black font-bold shadow-[0_0_15px_rgba(255,212,0,0.35)]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                wh63ab6b.glb (Astronaut)
              </button>

              <button
                onClick={() => setActiveModel("/RikModelExport22.glb")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeModel === "/RikModelExport22.glb"
                    ? "bg-[#FFD400] text-black font-bold shadow-[0_0_15px_rgba(255,212,0,0.35)]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                RikModelExport22.glb (Robot Rig)
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MAIN INTERACTIVE STAGE:
            LEFT: Explanatory Text Information Panel
            RIGHT / CENTER: 3D Astronaut following cursor and pointing by head & hand
           ========================================================================= */}
        <div
          onMouseMove={handleStageMouseMove}
          className="relative w-full min-h-[680px] lg:h-[740px] rounded-3xl bg-gradient-to-b from-[#0c0f18]/90 via-[#07090e]/95 to-black/95 border border-white/15 overflow-hidden flex flex-col lg:flex-row items-center justify-between p-6 sm:p-10 lg:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.9)]"
        >
          {/* Dynamic Background Atmospheric Glows */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFD400]/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-400/10 blur-[150px] rounded-full pointer-events-none" />

          {/* Top HUD Telemetry Banner */}
          <div className="absolute top-5 left-6 right-6 z-30 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 border border-white/10 backdrop-blur-md text-[11px] font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ACTIVE MODEL: {activeModel.replace("/models/", "").replace("/", "")}</span>
            </div>

            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-black/75 border border-[#FFD400]/30 backdrop-blur-md text-[11px] font-mono text-[#FFD400]">
              <span>POINTER: ({mouseTelemetry.x.toFixed(2)}, {mouseTelemetry.y.toFixed(2)})</span>
              <span>|</span>
              <span>
                GESTURE:{" "}
                <strong className="text-white underline font-bold">
                  {mouseTelemetry.x < 0.15 ? "POINTING TO LEFT INFO" : "FREE CURSOR TRACKING"}
                </strong>
              </span>
            </div>
          </div>

          {/* ----------------- LEFT SIDE: INTERACTIVE TEXT INFORMATION ----------------- */}
          <div className="relative z-20 w-full lg:max-w-[580px] xl:max-w-[640px] flex flex-col justify-center space-y-6 pt-12 lg:pt-0 pointer-events-auto">
            {/* Top Micro-Tag */}
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-[#FFD400]/15 border border-[#FFD400]/40 text-[#FFD400] text-xs font-mono font-bold tracking-widest uppercase">
                {activeTopic.badge}
              </span>
              <span className="text-xs font-mono text-neutral-400">
                // HOVER TOPIC TO DIRECT ASTRONAUT
              </span>
            </div>

            {/* Active Headline & Subtitle */}
            <div>
              <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-white mb-3 font-[family-name:var(--font-jakarta)] leading-tight">
                {activeTopic.title}
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                {activeTopic.description}
              </p>
            </div>

            {/* Interactive Topic Selector Cards (Hovering or clicking switches the direction target!) */}
            <div className="space-y-3">
              {TOPICS.map((topic, idx) => {
                const isActive = activeTopicIndex === idx;
                return (
                  <div
                    key={topic.id}
                    onMouseEnter={() => {
                      setActiveTopicIndex(idx);
                      setIsExplaining(true);
                    }}
                    onClick={() => {
                      setActiveTopicIndex(idx);
                      setIsExplaining(true);
                    }}
                    className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                      isActive
                        ? "bg-white/[0.08] border-[#FFD400] shadow-[0_0_25px_rgba(255,212,0,0.2)] scale-[1.01]"
                        : "bg-white/[0.02] border-white/10 hover:border-white/30 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-colors ${
                          isActive
                            ? "bg-[#FFD400] text-black shadow-md"
                            : "bg-white/10 text-neutral-300"
                        }`}
                      >
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover:text-[#FFD400] transition-colors">
                          {topic.title}
                        </h4>
                        <span className="text-[11px] text-neutral-400 line-clamp-1">
                          {topic.subtitle}
                        </span>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isActive ? "text-[#FFD400] translate-x-1" : "text-white/40"
                      }`}
                    />
                  </div>
                );
              })}
            </div>

            {/* Metric Specs for Selected Topic */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
              {activeTopic.metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                    {m.label}
                  </div>
                  <div className="text-base sm:text-lg font-mono font-bold text-[#FFD400] mt-0.5">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 pt-2">
              <CyberButton href="/#contact" size="md">
                LAUNCH PROJECT REVIEW
              </CyberButton>
              <button
                onClick={() => setIsExplaining(!isExplaining)}
                className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white hover:border-[#FFD400]/60 transition-all cursor-pointer"
              >
                {isExplaining ? "EXPLAIN BIAS: ACTIVE" : "EXPLAIN BIAS: PAUSED"}
              </button>
            </div>
          </div>

          {/* ----------------- RIGHT / CENTER-RIGHT: 3D ASTRONAUT CANVAS ----------------- */}
          <div className="relative w-full lg:w-[50%] h-[460px] sm:h-[540px] lg:h-full flex items-center justify-center pointer-events-auto">
            {/* Visual Direction Pointer Guide HUD */}
            <div className="absolute bottom-6 right-6 z-30 pointer-events-none hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-[11px] font-mono text-neutral-300">
              <Move3d className="w-3.5 h-3.5 text-[#FFD400]" />
              <span>HEAD & HAND FOLLOWING CURSOR + EXPLAINING LEFT</span>
            </div>

            <Canvas
              camera={{ position: [0, 1.2, 4.4], fov: 42 }}
              dpr={[1, 1.5]}
              className="w-full h-full block cursor-grab active:cursor-grabbing"
            >
              <ambientLight intensity={1.6} />
              <directionalLight position={[4, 6, 5]} intensity={2.2} castShadow />
              <directionalLight position={[-4, 3, 3]} intensity={1.2} color="#00e5ff" />
              <pointLight position={[0, -2, 2]} intensity={0.8} color="#ffd400" />

              <Suspense fallback={null}>
                <CursorAstronaut
                  modelPath={activeModel}
                  isExplainingLeft={isExplaining}
                  activeTopicIndex={activeTopicIndex}
                  scale={activeModel.includes("wh63") ? 1.5 : 1.9}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>

        {/* Bottom Technology & Implementation Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <Code2 className="w-5 h-5 text-[#FFD400]" />
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                Kinematic Bone Traversal
              </h4>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Discovers <code>head</code>, <code>neck</code>, <code>leftArm</code>, <code>rightArm</code>, and hands using flexible regex matching that supports both standard and Mixamo bone naming conventions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <Workflow className="w-5 h-5 text-cyan-400" />
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                Delta Exponential Lerp
              </h4>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Updates rotation every frame using <code className="text-[#FFD400]">smoothness = 1 - Math.exp(-5 * delta)</code>, guaranteeing silky smooth gestures regardless of refresh rate (60Hz, 120Hz, or 144Hz).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                Directional Left Pointing
              </h4>
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              When the cursor hovers over or explores the left-side text cards, the astronaut coordinates head yaw, pitch, and arm elevation to dynamically spotlight and explain the information.
            </p>
          </div>
        </div>
      </main>

      <RnDFooter />
    </div>
  );
}
