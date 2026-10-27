"use client";

import { ArrowUpRight, CheckCircle2, TrendingUp, Layers, Sparkles } from "lucide-react";

export default function CaseStudiesSection() {
  const cases = [
    {
      title: "OmniSpace: WebGL 3D Architectural Configurator",
      client: "Global Real Estate & Interior Design Firm",
      desc: "Architected a browser-native 3D spatial customizer allowing real-time CAD model rendering, custom textures, and instantaneous BOM pricing.",
      results: [
        { metric: "+320%", label: "User Engagement" },
        { metric: "60 FPS", label: "Zero Lag Rendering" },
        { metric: "-45%", label: "Sales Cycle Length" },
      ],
      tags: ["Three.js", "Next.js", "WebGPU", "Blender Automation"],
      gradient: "from-cyan-500/10 via-blue-500/5 to-transparent",
      accent: "text-cyan-400",
    },
    {
      title: "ApexFlow: Autonomous AI Log Analysis Platform",
      client: "Enterprise FinTech Infrastructure",
      desc: "Built a distributed AI observability agent that monitors 500k log events/sec, automatically isolating system bottlenecks and flagging security anomalies.",
      results: [
        { metric: "99.999%", label: "System Reliability" },
        { metric: "14ms", label: "Avg Vector Latency" },
        { metric: "$1.8M", label: "Downtime Prevented" },
      ],
      tags: ["PyTorch", "Kubernetes", "Vector DB", "FastAPI"],
      gradient: "from-purple-500/10 via-indigo-500/5 to-transparent",
      accent: "text-purple-400",
    },
    {
      title: "NovaCloud: Multi-Tenant SaaS Commerce Engine",
      client: "High-Volume Retail Marketplace",
      desc: "Re-engineered a legacy monolithic infrastructure into high-concurrency microfrontends powered by Next.js App Router and edge caching.",
      results: [
        { metric: "0.28s", label: "Global Page Load" },
        { metric: "12x", label: "Peak Traffic Capacity" },
        { metric: "+64%", label: "Checkout Conversion" },
      ],
      tags: ["Next.js 16", "Turbopack", "Tailwind CSS", "AWS Fargate"],
      gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
      accent: "text-emerald-400",
    },
  ];

  return (
    <section id="case-studies" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              Proven Impact
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Case Studies &{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-400 max-w-md text-sm sm:text-base">
            Discover how RND Technosoft transforms technical obstacles into competitive advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((cs, idx) => (
            <div
              key={idx}
              className={`rounded-2xl bg-gradient-to-b ${cs.gradient} bg-slate-900/60 border border-slate-800 hover:border-slate-700 p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group`}
            >
              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  {cs.client}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {cs.title}
                </h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {cs.desc}
                </p>

                {/* Metrics */}
                <div className="mt-6 grid grid-cols-3 gap-2 py-4 border-y border-slate-800">
                  {cs.results.map((res, i) => (
                    <div key={i} className="text-center">
                      <div className={`text-lg font-bold font-mono ${cs.accent}`}>{res.metric}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Link */}
              <div className="mt-6 pt-2">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cs.tags.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors">
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
