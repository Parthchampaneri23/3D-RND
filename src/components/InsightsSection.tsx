"use client";

import { BookOpen, ArrowUpRight, Calendar, Clock, Sparkles } from "lucide-react";
import CyberButton from "@/components/CyberButton";

export default function InsightsSection() {
  const articles = [
    {
      id: "spatial-3d-web",
      category: "TECH & ARCHITECTURE",
      title: "Spatial Web & Three.js: How Real-Time 3D Drives 3x Higher Conversion",
      excerpt:
        "Analyzing the conversion telemetry of photorealistic 3D configurators and WebGL interfaces over standard flat 2D e-commerce templates.",
      date: "OCT 2026",
      readTime: "6 min read",
      author: "Vikram Mehta, Lead 3D Architect",
      image: "/images/project_ecommerce.jpg",
    },
    {
      id: "production-ai-rag",
      category: "ARTIFICIAL INTELLIGENCE",
      title: "Production AI: Scaling Multi-Tenant RAG Pipelines with Sub-5ms Latency",
      excerpt:
        "Architecting enterprise generative AI architectures: vector indexing strategies, cache warming, and automated fallback inference models.",
      date: "OCT 2026",
      readTime: "8 min read",
      author: "Dr. Aris Vance, Head of AI Research",
      image: "/images/project_ai.jpg",
    },
    {
      id: "integrated-agency-roi",
      category: "GROWTH & STRATEGY",
      title: "The Integrated Agency Flywheel: Why Fragmented Vendors Erode ROI",
      excerpt:
        "Why scaling technology, brand design, paid SMM, and commercial media under a unified team saves over 40% in project overhead and accelerates time-to-market.",
      date: "OCT 2026",
      readTime: "5 min read",
      author: "Siddharth Rao, Founder & CEO",
      image: "/images/project_fintech.jpg",
    },
  ];

  return (
    <section id="insights" className="relative py-28 sm:py-36 bg-[#050608] text-white overflow-hidden border-t border-white/5">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-[#FFD400]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>KNOWLEDGE TELEMETRY // INSIGHTS</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-bebas)] tracking-tight leading-[0.92] uppercase text-white">
              INDUSTRY INTEL &{" "}
              <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.35)]">
                DISPATCHES
              </span>
            </h2>
          </div>

          <CyberButton href="/insights" size="sm">
            VIEW ALL DISPATCHES
          </CyberButton>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="group rounded-3xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-[#FFD400]/40 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <div>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/5">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-[#FFD400] uppercase tracking-wider">
                    {art.category}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-white/40 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {art.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#FFD400] transition-colors leading-tight">
                  {art.title}
                </h3>

                <p className="text-sm text-white/65 leading-relaxed font-light mb-6">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-white/50">{art.author}</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFD400] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
