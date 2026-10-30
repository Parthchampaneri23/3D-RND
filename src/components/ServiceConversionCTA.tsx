"use client";

import React from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  FileText,
  Clock,
  Zap,
  CheckCircle2,
} from "lucide-react";

export default function ServiceConversionCTA() {
  return (
    <section id="conversion-cta" className="relative py-24 sm:py-32 scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-gradient-to-r from-blue-600/10 via-[#FFD400]/10 to-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-br from-[#0e111a]/95 via-[#090b10]/95 to-[#0e111a]/95 border border-white/15 p-8 sm:p-14 lg:p-20 shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
          {/* Subtle Cyber Grid Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* Top Badge */}
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 bg-black/60 border border-[#FFD400]/40 text-[#FFD400] backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2.10 INITIATE ENGAGEMENT // DISCOVERY &amp; QUOTE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-bebas)] tracking-wide uppercase leading-[0.95] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              READY TO BUILD SOMETHING <span className="text-[#FFD400]">EXCEPTIONAL?</span>
            </h2>
            <p className="text-sm sm:text-base font-normal mt-4 leading-relaxed text-neutral-300">
              Whether you need a comprehensive project quotation with fixed deliverables or an exploratory architecture consultation, our engineering leadership is ready.
            </p>
          </div>

          {/* Dual Action Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Card 1: Request Quotation */}
            <div className="group relative rounded-3xl p-8 sm:p-10 bg-white/[0.03] hover:bg-white/[0.06] border border-white/15 hover:border-[#FFD400]/70 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] mb-6 shadow-md">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-mono tracking-widest text-[#FFD400] uppercase mb-2">
                  OPTION 01 // DETAILED SCOPE
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 font-[family-name:var(--font-jakarta)]">
                  Request a Fixed Quotation
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  Best for defined scopes, RFP documentation, platform redesigns, or headless migrations. Receive a thorough breakdown within 4 business hours.
                </p>

                <div className="space-y-2.5 mb-8">
                  {[
                    "Itemized feature matrix & deliverables schedule",
                    "Recommended tech stack & architectural blueprint",
                    "Fixed milestone pricing with zero hidden fees",
                    "Full IP ownership & warranty specifications",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contact-us?intent=quotation" className="block w-full">
                <div className="group/btn relative w-full inline-flex items-center justify-between rounded-full overflow-hidden bg-[#FFD400] hover:bg-[#ffe34d] text-black font-mono font-bold text-xs sm:text-sm tracking-[0.18em] uppercase px-6 py-3.5 transition-all shadow-[0_0_20px_rgba(255,212,0,0.3)]">
                  <span className="relative z-10">REQUEST FORMAL QUOTATION</span>
                  <div className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Card 2: Schedule Consultation */}
            <div className="group relative rounded-3xl p-8 sm:p-10 bg-white/[0.03] hover:bg-white/[0.06] border border-white/15 hover:border-blue-400/70 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-400 mb-6 shadow-md">
                  <Calendar className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-mono tracking-widest text-blue-400 uppercase mb-2">
                  OPTION 02 // 1-ON-1 STRATEGY
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 font-[family-name:var(--font-jakarta)]">
                  Schedule Architect Call
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  Ideal for exploratory discussions, high-level feasibility evaluations, team pod staffing, or scaling strategy with our technical leadership.
                </p>

                <div className="space-y-2.5 mb-8">
                  {[
                    "30-minute 1-on-1 strategy session via Google Meet",
                    "Direct discussion with Principal Solution Architect",
                    "System bottleneck analysis & stack suggestions",
                    "Zero sales pressure, pure technical insight",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contact-us?intent=consultation" className="block w-full">
                <div className="group/btn relative w-full inline-flex items-center justify-between rounded-full overflow-hidden bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/20 hover:border-blue-400 font-mono font-bold text-xs sm:text-sm tracking-[0.18em] uppercase px-6 py-3.5 transition-all">
                  <span className="relative z-10">BOOK 30-MIN CONSULTATION</span>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
                    <ArrowUpRight className="w-4 h-4 text-blue-400" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Trust Guarantees Bar */}
          <div className="relative z-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-5 h-5 text-[#FFD400] mb-1.5" />
              <span className="text-xs font-bold text-white uppercase font-mono tracking-wider">
                &lt; 4 Hours
              </span>
              <span className="text-[11px] text-neutral-400">Average response time</span>
            </div>

            <div className="flex flex-col items-center">
              <ShieldCheck className="w-5 h-5 text-[#FFD400] mb-1.5" />
              <span className="text-xs font-bold text-white uppercase font-mono tracking-wider">
                100% NDA
              </span>
              <span className="text-[11px] text-neutral-400">Strict confidentiality</span>
            </div>

            <div className="flex flex-col items-center">
              <Zap className="w-5 h-5 text-[#FFD400] mb-1.5" />
              <span className="text-xs font-bold text-white uppercase font-mono tracking-wider">
                Direct Access
              </span>
              <span className="text-[11px] text-neutral-400">Principal engineers only</span>
            </div>

            <div className="flex flex-col items-center">
              <Sparkles className="w-5 h-5 text-[#FFD400] mb-1.5" />
              <span className="text-xs font-bold text-white uppercase font-mono tracking-wider">
                Zero Obligation
              </span>
              <span className="text-[11px] text-neutral-400">Transparent advisory</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
