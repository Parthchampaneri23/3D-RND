"use client";

import { Award, Star, Quote, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function ResultsTrustSection() {
  const metrics = [
    { value: "$180M+", label: "Client Revenue Generated", detail: "Through scaled apps & SMM funnels" },
    { value: "250+", label: "Enterprise Systems Shipped", detail: "Next.js, cloud SaaS & mobile" },
    { value: "99.4%", label: "Client Retention Rate", detail: "Long-term partnership contracts" },
    { value: "15+", label: "Countries Served Globally", detail: "US, UK, EU, UAE, India & APAC" },
  ];

  const clientLogos = [
    "AURA CAPITAL",
    "DEEPSYNTHETIX AI",
    "AURORA HOROLOGY",
    "NEXUS LOGISTICS",
    "ORBITAL MEDIA",
    "ZENITH HEALTH",
    "KINETIC CLOUD",
    "SOLARIS ENERGY",
  ];

  const testimonials = [
    {
      quote:
        "RnD Technosoft rebuilt our enterprise web engine from scratch in Next.js. Page load dropped from 4.2s to 0.4s, and organic conversion surged by 280% in the first quarter post-launch.",
      author: "Marcus Vance",
      role: "CTO, Aura Capital Global",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    },
    {
      quote:
        "Having software, branding, SMM, and commercial 8K video under one unified agency completely eliminated our vendor headaches. Their sprint velocity is unmatched.",
      author: "Elena Rostova",
      role: "VP of Product, DeepSynthetix AI",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    {
      quote:
        "The 3D WebGL spatial product visualizer they engineered for our luxury timepiece line increased dwell time by 4x and drove our biggest product release in company history.",
      author: "Julian Chen",
      role: "Chief Commercial Officer, Aurora Spaceware",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-[#050608] text-white overflow-hidden border-t border-white/5">
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FFD400]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED TELEMETRY // TRUST & RESULTS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-bebas)] tracking-tight leading-[0.92] uppercase text-white mb-6">
            PROVEN RESULTS BACKED BY{" "}
            <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.35)]">
              CONCRETE METRICS
            </span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light">
            We measure our success strictly through tangible commercial impact, uptime reliability, and transformative brand growth.
          </p>
        </div>

        {/* 4 Big Verified Metric Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-white/[0.025] border border-white/10 text-center flex flex-col justify-between hover:border-[#FFD400]/50 transition-colors"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold text-[#FFD400] block mb-2">
                {m.value}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                {m.label}
              </h3>
              <span className="text-xs font-mono text-white/45">
                {m.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Approved Client Logos Ticker */}
        <div className="mb-24 py-8 border-y border-white/10 bg-black/30">
          <span className="text-center block text-xs font-mono text-white/40 uppercase tracking-[0.3em] mb-6">
            TRUSTED BY INDUSTRY LEADERS & VENTURE-BACKED SCALEUPS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
            {clientLogos.map((logo, lIdx) => (
              <span
                key={lIdx}
                className="text-sm sm:text-base font-mono font-bold tracking-widest text-white/60 hover:text-[#FFD400] transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Client Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, tIdx) => (
            <div
              key={tIdx}
              className="group p-8 rounded-3xl bg-white/[0.025] hover:bg-white/[0.05] border border-white/10 hover:border-[#FFD400]/40 transition-all duration-300 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <div>
                <div className="flex items-center gap-1 mb-6 text-[#FFD400]">
                  {[...Array(t.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-[#FFD400]" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-white/75 leading-relaxed font-light mb-8 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border border-[#FFD400]/50"
                />
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#FFD400] transition-colors">
                    {t.author}
                  </h4>
                  <span className="text-xs font-mono text-white/50 block">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
