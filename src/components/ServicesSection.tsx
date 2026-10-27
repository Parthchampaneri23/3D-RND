"use client";

import { useState } from "react";
import {
  Code2,
  Boxes,
  Cpu,
  Cloud,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function ServicesSection() {
  const [filter, setFilter] = useState<"all" | "web" | "3d" | "ai" | "cloud">("all");

  const services = [
    {
      id: "web-dev",
      category: "web",
      title: "Enterprise Web & Next.js Systems",
      desc: "Ultra-fast, SEO-optimized web applications with modern architecture, server-driven UI, SSR/SSG caching, and fault-tolerant microfrontends.",
      icon: Code2,
      accent: "from-cyan-500 to-blue-600",
      borderGlow: "group-hover:border-cyan-500/50",
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Node.js"],
      deliverables: ["Sub-second TTFB", "Modular Component Design", "Multi-Tenant Scalability"],
    },
    {
      id: "3d-webgl",
      category: "3d",
      title: "3D WebGL & Interactive Visualizers",
      desc: "Real-time 3D spatial web experiences, photorealistic product configurators, digital twin simulations, and WebGPU graphics rendering.",
      icon: Boxes,
      accent: "from-blue-500 to-indigo-600",
      borderGlow: "group-hover:border-indigo-500/50",
      tech: ["Three.js", "WebGL / WebGPU", "Blender Pipelines", "GLTF Optimizers"],
      deliverables: ["60 FPS Fluid Rendering", "Cross-Platform Mobile 3D", "PBR Material Shaders"],
    },
    {
      id: "ai-solutions",
      category: "ai",
      title: "AI Integration & Machine Learning",
      desc: "Custom generative AI pipelines, specialized RAG search engines, automated predictive analytics, and fine-tuned enterprise LLMs.",
      icon: Cpu,
      accent: "from-purple-500 to-pink-600",
      borderGlow: "group-hover:border-purple-500/50",
      tech: ["PyTorch", "LangChain", "Vector DBs", "OpenAI / Claude API", "FastAPI"],
      deliverables: ["Private On-Prem RAG", "Intelligent Automation Agents", "Real-Time Inference"],
    },
    {
      id: "cloud-devops",
      category: "cloud",
      title: "Cloud Architecture & Modern DevOps",
      desc: "Cloud-native infrastructure orchestration, zero-downtime CI/CD workflows, automated scaling with Kubernetes, and multi-region failover.",
      icon: Cloud,
      accent: "from-sky-500 to-cyan-600",
      borderGlow: "group-hover:border-sky-500/50",
      tech: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "GitHub Actions"],
      deliverables: ["99.99% Availability", "Zero-Trust Security Mesh", "Automated Auto-scaling"],
    },
    {
      id: "mobile-apps",
      category: "web",
      title: "Cross-Platform Mobile Engineering",
      desc: "Native-grade iOS & Android applications engineered with React Native & Flutter, delivering buttery 120Hz micro-interactions and offline-first data sync.",
      icon: Smartphone,
      accent: "from-emerald-500 to-teal-600",
      borderGlow: "group-hover:border-emerald-500/50",
      tech: ["React Native", "Flutter", "GraphQL", "SQLite / Realm", "Firebase"],
      deliverables: ["Unified iOS/Android Codebase", "Biometric Security", "Instant Push Services"],
    },
    {
      id: "cyber-security",
      category: "cloud",
      title: "Enterprise Security & Code Audits",
      desc: "Rigorous penetration testing, SOC2 compliance roadmaps, automated static/dynamic vulnerability scans, and cryptographic data hardening.",
      icon: ShieldCheck,
      accent: "from-amber-500 to-orange-600",
      borderGlow: "group-hover:border-amber-500/50",
      tech: ["OWASP Standards", "Vault", "OAuth2 / OIDC", "SonarQube", "Snyk"],
      deliverables: ["Zero Vulnerability Verification", "Compliance Readiness", "Encrypted At Rest & In Transit"],
    },
  ];

  const filteredServices = filter === "all" ? services : services.filter((s) => s.category === filter);

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            High-Performance Engineering For{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Ambitious Enterprises
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From modern web apps and interactive 3D WebGL experiences to intelligent AI systems and rock-solid cloud infrastructure.
          </p>

          {/* Interactive Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "All Services", value: "all" },
              { label: "Web Platforms", value: "web" },
              { label: "3D & WebGL", value: "3d" },
              { label: "AI & ML", value: "ai" },
              { label: "Cloud & Security", value: "cloud" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  filter === tab.value
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                    : "bg-slate-900/60 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative p-7 rounded-2xl bg-slate-900/40 border border-slate-800/80 ${service.borderGlow} hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1`}
              >
                <div>
                  {/* Service Icon with Gradient */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${service.accent} p-0.5 shadow-md`}>
                      <div className="w-full h-full bg-[#090d18] rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest px-2.5 py-1 rounded-md bg-slate-800/50 border border-slate-700/50">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Deliverables */}
                  <div className="mt-5 space-y-2 border-t border-slate-800/60 pt-4">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges & Action */}
                <div className="mt-6 pt-4 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/70 text-slate-300 border border-slate-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>Consult on this technology</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
