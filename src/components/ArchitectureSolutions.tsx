"use client";

import { useState } from "react";
import {
  Server,
  Layers,
  Cpu,
  Boxes,
  Zap,
  Globe2,
  Lock,
  GitBranch,
  Terminal,
  Database,
  ArrowRight,
} from "lucide-react";

export default function ArchitectureSolutions() {
  const [selectedBlueprint, setSelectedBlueprint] = useState(0);

  const blueprints = [
    {
      id: "3d-pipeline",
      name: "3D WebGL & Interactive Mesh Engine",
      tag: "Graphics & Spatial UI",
      desc: "Our specialized real-time 3D rendering pipeline delivers smooth 60 FPS graphics on browser and mobile with zero plugin dependencies.",
      metrics: [
        { label: "Asset Compression", val: "85% Smaller" },
        { label: "Target Framerate", val: "60 - 120 FPS" },
        { label: "WebGL / WebGPU Support", val: "Universal" },
      ],
      flow: [
        "1. GLTF / Blender 3D Model Optimization with Draco Compression",
        "2. Custom PBR Shader compilation with Three.js / WebGPU shaders",
        "3. Real-time dynamic lighting, shadow maps & reflection probes",
        "4. Reactive state synchronization with Next.js & React 19 UI overlays",
      ],
      codeSnippet: `// RND 3D Spatial Pipeline Engine
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export function InteractiveModel({ assetUrl }) {
  const { scene } = useGLTF(assetUrl, true);
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 2, 5], fov: 45 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <primitive object={scene} />
      <OrbitControls autoRotate enableZoom={false} />
    </Canvas>
  );
}`,
    },
    {
      id: "cloud-mesh",
      name: "Zero-Downtime Multi-Region Cloud Infrastructure",
      tag: "Cloud & DevOps",
      desc: "Enterprise Kubernetes clusters orchestrated with Terraform, global Cloudflare CDN routing, and sub-millisecond edge database read replicas.",
      metrics: [
        { label: "Global Edge Latency", val: "< 25ms" },
        { label: "Failover Time", val: "Instant (< 1s)" },
        { label: "Availability Guarantee", val: "99.999%" },
      ],
      flow: [
        "1. Edge DNS Anycast routing via Cloudflare Enterprise",
        "2. Multi-cluster Kubernetes nodes across US, EU & Asia regions",
        "3. Distributed PostgreSQL with global read replicas & Redis caching",
        "4. Prometheus & Grafana real-time anomaly detection & auto-healing",
      ],
      codeSnippet: `// Infrastructure as Code: Terraform Cluster Mesh
module "rnd_production_mesh" {
  source       = "./modules/kubernetes-mesh"
  regions      = ["us-east-1", "eu-central-1", "ap-southeast-1"]
  autoscaling  = { min_nodes = 3, max_nodes = 50 }
  ssl_enforced = true
  waf_rules    = ["ddos-shield-v2", "bot-mitigation"]
}`,
    },
    {
      id: "ai-rag",
      name: "Enterprise Generative AI & Autonomous Agents",
      tag: "AI Engineering",
      desc: "Secure Retrieval-Augmented Generation (RAG) architecture tailored to private corporate data with zero leakage and semantic intelligence.",
      metrics: [
        { label: "Retrieval Accuracy", val: "98.7%" },
        { label: "Vector Search Speed", val: "4.8ms" },
        { label: "Enterprise Security", val: "HIPAA / SOC2" },
      ],
      flow: [
        "1. Document ingestion, OCR & semantic chunking pipeline",
        "2. High-dimensional vector indexing into Qdrant / Pinecone",
        "3. Contextual re-ranking & query expansion with hybrid search",
        "4. Guardrailed LLM inference with hallucination suppression",
      ],
      codeSnippet: `// Enterprise Neural Pipeline
const queryEngine = new RNDSemanticSearch({
  vectorDb: "pinecone-cluster-prod",
  embeddingModel: "text-embedding-3-large",
  reranker: "bge-reranker-large",
  topK: 5,
  guardrails: { blockPII: true, confidenceThreshold: 0.92 }
});`,
    },
  ];

  const current = blueprints[selectedBlueprint];

  return (
    <section id="architecture" className="py-24 bg-slate-950/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
            Under The Hood
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineered For{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-cyan-400 bg-clip-text text-transparent">
              Extreme Resilience
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Explore the core architectural blueprints developed by RND Technosoft for high-load enterprise systems.
          </p>
        </div>

        {/* Blueprint Selector Tabs */}
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-3">
          {blueprints.map((bp, idx) => (
            <button
              key={bp.id}
              onClick={() => setSelectedBlueprint(idx)}
              className={`flex-1 text-left p-4 rounded-xl border transition-all ${
                selectedBlueprint === idx
                  ? "bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-500/10 text-white"
                  : "bg-slate-900/30 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
              }`}
            >
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1">
                {bp.tag}
              </div>
              <div className="text-sm font-semibold">{bp.name}</div>
            </button>
          ))}
        </div>

        {/* Blueprint Viewer Card */}
        <div className="mt-8 rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Blueprint Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                  {current.tag}
                </span>
                <h3 className="text-2xl font-bold text-white mt-3">{current.name}</h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">{current.desc}</p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-3">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <div className="text-base font-bold text-cyan-400 font-mono">{m.val}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Flow Steps */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Execution Pipeline:</h4>
                <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {current.flow.map((step, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800/80 font-mono">
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Code Architecture Block */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#050811] border border-slate-800 shadow-xl overflow-hidden">
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/90 border-b border-slate-800 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>architecture_spec.ts</span>
                  </div>
                  <span className="text-emerald-400">Production Verified</span>
                </div>
                <pre className="p-4 sm:p-5 text-xs text-slate-300 font-mono overflow-x-auto leading-relaxed">
                  <code>{current.codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
