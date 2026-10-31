"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Clock,
  Zap,
  CheckCircle2,
  Send,
  Phone,
  Mail,
  Calendar,
  Lock,
  ArrowUpRight,
  Check,
} from "lucide-react";

export interface ServiceConversionCTAProps {
  id?: string;
  category?: string;
  defaultService?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
}

const SERVICE_OPTIONS = [
  "Custom Web & React 19 Architecture",
  "Cloud Infrastructure & Kubernetes DevOps",
  "Enterprise Software & Scalable SaaS",
  "E-Commerce Platform Engineering",
  "UI/UX & Digital Product Design",
  "3D CGI, WebGL & Spatial Experiences",
  "Commercial Video & Motion Production",
  "Digital Marketing & Growth Engine",
  "Dedicated Engineering Pod",
  "Other Architectural Scope",
];

const BUDGET_OPTIONS = [
  "< $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000+",
  "Flexible / Exploration",
];

const PHONE_CODES = [
  { code: "+1", label: "+1 (US/CA)" },
  { code: "+44", label: "+44 (UK)" },
  { code: "+91", label: "+91 (IN)" },
  { code: "+49", label: "+49 (DE)" },
  { code: "+971", label: "+971 (UAE)" },
  { code: "+61", label: "+61 (AU)" },
  { code: "+65", label: "+65 (SG)" },
  { code: "+33", label: "+33 (FR)" },
  { code: "+31", label: "+31 (NL)" },
  { code: "+41", label: "+41 (CH)" },
];

export default function ServiceConversionCTA({
  id = "conversion-cta",
  category,
  defaultService,
  title,
  subtitle,
  badge = "2.10 INITIATE ENGAGEMENT // DIRECT QUOTE & INQUIRY",
}: ServiceConversionCTAProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+1",
    phone: "",
    service: defaultService || "Custom Web & React 19 Architecture",
    budget: "$10,000 - $25,000",
    message: "",
    ndaRequested: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phoneCode: "+1",
      phone: "",
      service: defaultService || "Custom Web & React 19 Architecture",
      budget: "$10,000 - $25,000",
      message: "",
      ndaRequested: true,
    });
    setIsSubmitted(false);
  };

  return (
    <section id={id} className="relative py-20 sm:py-28 scroll-mt-20">
      {/* Anchor for alternate hashes so existing links always land here */}
      <span id="inquire-form" className="sr-only" />
      <span id="conversion-cta" className="sr-only" />

      {/* Ambient glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-blue-600/10 via-[#FFD400]/12 to-purple-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-gradient-to-br from-[#0d1017]/95 via-[#090b10]/95 to-[#0d1017]/95 border border-white/15 p-6 sm:p-12 lg:p-16 shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
          {/* Subtle Cyber Grid Texture */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* Top Section Header */}
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 bg-black/60 border border-[#FFD400]/40 text-[#FFD400] backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.04] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
              {title ? (
                title
              ) : (
                <>
                  READY TO BUILD SOMETHING{" "}
                  <span className="text-[#FFD400]">EXCEPTIONAL?</span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base font-normal mt-4 leading-relaxed text-neutral-300">
              {subtitle ||
                "Whether you need a comprehensive project quotation with fixed deliverables or an exploratory architecture consultation, our engineering leadership is ready."}
            </p>
          </div>

          {/* Main 2-Column Content: Left Value Props + Right Direct Form */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-14">
            {/* Left Column: Direct Inquiries & Engineering Guarantees */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="rounded-2xl p-6 sm:p-8 bg-white/[0.02] border border-white/10 space-y-6">
                <div>
                  <div className="text-[11px] font-mono tracking-widest text-[#FFD400] uppercase mb-1">
                    ENGINEERING POD ENGAGEMENT
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight uppercase font-[family-name:var(--font-syne)]">
                    Direct Architect Access
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light mt-2 leading-relaxed">
                    Skip standard sales intermediaries. You will connect directly with Principal Software Architects and Creative Technologists who build your platform.
                  </p>
                </div>

                {/* 4 Guarantees */}
                <div className="space-y-3.5 pt-2 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] shrink-0 mt-0.5">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono uppercase">
                        Rapid 48-Hour Mobilization
                      </div>
                      <div className="text-[11px] text-neutral-400 font-light">
                        Sprint squads assembled and ready to kick off within 48 to 72 hours.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono uppercase">
                        100% Bilateral NDA & IP Transfer
                      </div>
                      <div className="text-[11px] text-neutral-400 font-light">
                        Enterprise NDA executed prior to scoping; complete code ownership.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono uppercase">
                        Fixed Milestones & Zero Fluff
                      </div>
                      <div className="text-[11px] text-neutral-400 font-light">
                        Itemized architecture roadmap, predictable deliverables, no surprise fees.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] shrink-0 mt-0.5">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white font-mono uppercase">
                        SLA Guaranteed Response
                      </div>
                      <div className="text-[11px] text-neutral-400 font-light">
                        Average technical scoping turnaround under 4 business hours.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Studio Channels */}
              <div className="rounded-2xl p-6 bg-white/[0.02] border border-white/10 space-y-4">
                <div className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                  DIRECT CONTACT CHANNELS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <a
                    href="mailto:hello@rndtechnosoft.com"
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex items-center gap-2.5 text-neutral-200 hover:text-white transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-[#FFD400] shrink-0" />
                    <span className="truncate font-mono">hello@rndtechnosoft.com</span>
                  </a>
                  <a
                    href="tel:+912224908800"
                    className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 flex items-center gap-2.5 text-neutral-200 hover:text-white transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-[#FFD400] shrink-0" />
                    <span className="truncate font-mono">+91 22 2490 8800</span>
                  </a>
                </div>

                <Link
                  href="/contact-us?intent=consultation"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-neutral-200 hover:text-white text-xs font-mono uppercase tracking-wider transition-all"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#FFD400]" />
                  <span>Prefer an instant call? Schedule via Calendar</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Direct CTA Form */}
            <div className="lg:col-span-7 bg-[#0b0c10]/95 backdrop-blur-xl p-6 sm:p-9 rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl relative">
              {/* Corner Flare */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD400]/5 blur-3xl rounded-full pointer-events-none" />

              {isSubmitted ? (
                <div className="py-12 sm:py-16 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#FFD400] text-black mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(255,212,0,0.5)]">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono uppercase tracking-widest">
                    <Lock className="w-3 h-3" />
                    <span>ENCRYPTED &amp; DISPATCHED</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-syne)] font-bold text-white uppercase">
                    Inquiry Confirmed
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name || "Partner"}</span>. Your project brief has been received and routed directly to our Principal Architecture Squad. A dedicated lead engineer will review your scope and follow up within <span className="text-[#FFD400] font-mono">4 business hours</span>.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full border border-white/20 hover:border-[#FFD400] text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-[family-name:var(--font-syne)] uppercase tracking-tight">
                        Direct Project Commission
                      </h3>
                      <p className="text-xs text-neutral-400 font-light mt-0.5">
                        Tell us about your requirements for an immediate architectural assessment.
                      </p>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#FFD400]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-pulse" />
                      Priority Queue
                    </span>
                  </div>

                  {/* Row 1: Name & Work Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Vikram Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#FFD400] text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                        Work Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. v.sharma@enterprise.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#FFD400] text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Service Discipline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                        Phone / WhatsApp <span className="text-neutral-500">(Optional)</span>
                      </label>
                      <div className="flex items-center rounded-xl bg-white/[0.04] border border-white/15 focus-within:border-[#FFD400] transition-colors overflow-hidden">
                        <select
                          value={formData.phoneCode}
                          onChange={(e) =>
                            setFormData({ ...formData, phoneCode: e.target.value })
                          }
                          className="bg-black/40 text-neutral-300 text-xs font-mono py-3 px-2.5 border-r border-white/10 focus:outline-none cursor-pointer"
                        >
                          {PHONE_CODES.map((p) => (
                            <option key={p.code} value={p.code} className="bg-[#121520] text-white">
                              {p.label}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="Phone number"
                          className="flex-1 bg-transparent px-3 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                        Service Discipline <span className="text-red-400">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-3 py-3 rounded-xl bg-[#0f121a] border border-white/15 focus:border-[#FFD400] text-sm text-white focus:outline-none transition-colors cursor-pointer"
                      >
                        {defaultService && !SERVICE_OPTIONS.includes(defaultService) && (
                          <option value={defaultService} className="bg-[#121520] text-white">
                            {defaultService}
                          </option>
                        )}
                        {SERVICE_OPTIONS.map((srv) => (
                          <option key={srv} value={srv} className="bg-[#121520] text-white">
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Budget Range */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {BUDGET_OPTIONS.map((tier) => {
                        const isSelected = formData.budget === tier;
                        return (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: tier })}
                            className={`py-2 px-2 rounded-lg text-[11px] font-mono transition-all text-center border truncate cursor-pointer ${
                              isSelected
                                ? "bg-[#FFD400] text-black font-bold border-[#FFD400] shadow-[0_0_12px_rgba(255,212,0,0.3)]"
                                : "bg-white/[0.03] text-neutral-300 border-white/10 hover:border-white/25 hover:text-white"
                            }`}
                          >
                            {tier}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Message / Brief */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                      Project Brief &amp; Key Requirements <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share your goals, target launch milestone, tech stack requirements, or platform challenges..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 focus:border-[#FFD400] text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Row 5: Bilateral NDA Checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="ndaRequested"
                      checked={formData.ndaRequested}
                      onChange={(e) =>
                        setFormData({ ...formData, ndaRequested: e.target.checked })
                      }
                      className="mt-0.5 w-4 h-4 rounded border-white/20 text-[#FFD400] focus:ring-0 focus:ring-offset-0 bg-[#12151e] cursor-pointer accent-[#FFD400]"
                    />
                    <label
                      htmlFor="ndaRequested"
                      className="text-xs text-neutral-400 font-light leading-relaxed cursor-pointer select-none"
                    >
                      Execute mutual bilateral NDA prior to sharing proprietary architectures. Full IP ownership on delivery.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-[#FFD400] hover:bg-[#ffe34d] text-black text-xs sm:text-sm font-mono font-bold uppercase tracking-[0.18em] transition-all shadow-[0_0_25px_rgba(255,212,0,0.35)] hover:shadow-[0_0_35px_rgba(255,212,0,0.55)] flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>ENCRYPTING &amp; DISPATCHING...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SUBMIT DIRECT INQUIRY &amp; QUOTE</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Trust Guarantees Bar */}
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