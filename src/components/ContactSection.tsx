"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Wrench,
  Compass,
  MessageSquare,
  Send,
  Check,
  Copy,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+1",
    phone: "",
    message: "",
    agreed: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Mouse spotlight coordinates for interactive card glow
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // GSAP ScrollTrigger Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Header Area Animation
      const tlHeader = gsap.timeline({
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 85%",
          toggleActions: "restart none none reset",
        },
      });

      tlHeader
        .fromTo(
          ".anim-badge",
          { opacity: 0, y: 24, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.7)" }
        )
        .fromTo(
          ".anim-title",
          { opacity: 0, y: 40, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          ".anim-subtitle",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.5"
        );

      // 2. Left Helper Cards (Rectangles & Content Stagger)
      gsap.fromTo(
        ".helper-card-rect",
        { opacity: 0, x: -45, y: 20 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".helper-cards-container",
            start: "top 80%",
            toggleActions: "restart none none reset",
          },
        }
      );

      // 3. Right Main Form Rectangle & Elements
      gsap.fromTo(
        ".form-card-rect",
        { opacity: 0, y: 55, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".form-card-rect",
            start: "top 85%",
            toggleActions: "restart none none reset",
          },
        }
      );

      gsap.fromTo(
        ".form-field-anim",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".form-card-rect",
            start: "top 78%",
            toggleActions: "restart none none reset",
          },
        }
      );

      // 4. Direct Channels Grid Data Animation
      gsap.fromTo(
        ".channel-card-rect",
        { opacity: 0, y: 45, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.15,
          ease: "back.out(1.3)",
          scrollTrigger: {
            trigger: ".channels-grid",
            start: "top 85%",
            toggleActions: "restart none none reset",
          },
        }
      );

      // 5. FAQ Title & Accordion Items Animation
      gsap.fromTo(
        ".faq-header-anim",
        { opacity: 0, y: 35, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-section",
            start: "top 85%",
            toggleActions: "restart none none reset",
          },
        }
      );

      gsap.fromTo(
        ".faq-card-rect",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".faq-list",
            start: "top 85%",
            toggleActions: "restart none none reset",
          },
        }
      );

      // 6. Bottom Strategic CTA Rectangle Animation
      gsap.fromTo(
        ".cta-banner-rect",
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-banner-rect",
            start: "top 90%",
            toggleActions: "restart none none reset",
          },
        }
      );
    }, containerRef);

    // Refresh ScrollTrigger once DOM layout finishes
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agreed: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phoneCode: "+1",
        phone: "",
        message: "",
        agreed: true,
      });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 900);
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const helperCards = [
    {
      icon: Wrench,
      title: "Need Help with Setup?",
      desc: "Our senior technical cohort is ready to guide your infrastructure and architecture roadmap.",
    },
    {
      icon: Compass,
      title: "Looking for a Custom Solution?",
      desc: "Let's discuss how our bespoke 3D WebGL, Next.js, and cloud platforms fit your goals.",
    },
    {
      icon: MessageSquare,
      title: "Want to Give Feedback or Partner?",
      desc: "We'd love to hear your thoughts and explore strategic technical collaborations.",
    },
  ];

  const faqs = [
    {
      q: "How fast can your engineering cohort begin work?",
      a: "Following our initial architecture consultation and bilateral agreement, we can typically mobilize a dedicated sprint team within 48 to 72 hours.",
    },
    {
      q: "What does your typical project cadence look like?",
      a: "We operate in structured 2-week agile sprints featuring bi-weekly live staging releases, transparent roadmaps, and direct communications via Slack/Teams.",
    },
    {
      q: "Can we execute a bilateral NDA before sharing technical briefs?",
      a: "Absolutely. We routinely execute mutual, bilateral enterprise NDAs prior to in-depth technical scoping to guarantee complete confidentiality.",
    },
    {
      q: "Do you offer post-launch maintenance and SLA support?",
      a: "Yes, we provide 24/7 technical monitoring, infrastructure scaling, SOC2 compliance audits, and 99.9% uptime SLA maintenance contracts.",
    },
  ];

  return (
    <div ref={containerRef} className="relative w-full bg-transparent text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-[#FFD400] selection:text-black font-sans">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/4 left-1/4 w-[750px] h-[500px] bg-[#FFD400]/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[400px] bg-white/[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* =========================================================================
            1. MAIN TWO-COLUMN CONTACT SECTION (Minimal Dark Form + Helper Cards)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-24">
          
          {/* ================= LEFT COLUMN: INTRO & 3 HELPER CARDS ================= */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="contact-header">
              {/* Status Pill Badge */}
              <div className="anim-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#FFD400] animate-pulse shadow-[0_0_8px_#FFD400]" />
                <span className="text-xs font-mono font-medium tracking-widest text-[#FFD400] uppercase">
                  ACTIVE INTAKE // 24/7 TELEMETRY
                </span>
              </div>

              {/* Title */}
              <h1 className="anim-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] font-[family-name:var(--font-syne)] mb-5">
                We&apos;re Here to <span className="text-[#FFD400]">Help!</span>
              </h1>

              {/* Subtitle */}
              <p className="anim-subtitle text-neutral-400 text-sm sm:text-base font-light leading-relaxed max-w-xl mb-8">
                Have questions or need assistance? Our team is ready to support you.
                Reach out and let&apos;s make RnD Technosoft work for your next milestone.
              </p>
            </div>

            {/* 3 Helper Cards (Dark Version with GSAP stagger + cursor spotlight) */}
            <div className="helper-cards-container space-y-4">
              {helperCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    onMouseMove={handleMouseMove}
                    className="helper-card-rect p-5 sm:p-6 rounded-2xl bg-[#0c0e14]/90 border border-white/10 hover:border-[#FFD400]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-xl group flex items-start gap-4 sm:gap-5 relative overflow-hidden"
                  >
                    {/* Subtle cursor spotlight effect on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                      style={{
                        background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,212,0,0.08), transparent 60%)`,
                      }}
                    />

                    <div className="w-12 h-12 rounded-xl bg-[#141721] border border-white/10 flex items-center justify-center text-[#FFD400] group-hover:scale-105 group-hover:bg-[#FFD400] group-hover:text-black transition-all shrink-0 shadow-md relative z-10">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FFD400] transition-colors font-[family-name:var(--font-syne)] leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 font-light mt-1.5 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Quick Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
                <Clock className="w-3.5 h-3.5 text-[#FFD400]" />
                Avg Response: &lt; 2 Hours
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFD400]" />
                Strict NDA Protected
              </span>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: MINIMAL FORM CARD RECTANGLE ================= */}
          <div
            onMouseMove={handleMouseMove}
            className="form-card-rect lg:col-span-6 bg-[#0c0e14]/95 border border-white/10 hover:border-[#FFD400]/40 rounded-3xl p-7 sm:p-9 md:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden transition-colors duration-500"
          >
            {/* Interactive Cursor Spotlight Glow */}
            <div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
              style={{
                background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,212,0,0.06), transparent 70%)`,
              }}
            />

            {/* Static Ambient Corner Flare */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#FFD400]/5 blur-3xl rounded-full pointer-events-none" />

            <div className="relative z-10">
              <h2 className="form-field-anim text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-syne)] mb-6 tracking-tight">
                Fill Out this Quick Form:
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="form-field-anim">
                  <label className="text-xs font-mono font-medium text-neutral-300 block mb-2 tracking-wide">
                    Name<span className="text-red-400 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-[#12151e] border border-white/10 focus:border-[#FFD400] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(255,212,0,0.15)]"
                  />
                </div>

                {/* Email */}
                <div className="form-field-anim">
                  <label className="text-xs font-mono font-medium text-neutral-300 block mb-2 tracking-wide">
                    Email<span className="text-red-400 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full bg-[#12151e] border border-white/10 focus:border-[#FFD400] rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(255,212,0,0.15)]"
                  />
                </div>

                {/* Phone Number (Optional) */}
                <div className="form-field-anim">
                  <label className="text-xs font-mono font-medium text-neutral-300 block mb-2 tracking-wide">
                    Phone Number <span className="text-neutral-500 font-normal">(Optional)</span>
                  </label>
                  <div className="flex items-center rounded-xl bg-[#12151e] border border-white/10 focus-within:border-[#FFD400] transition-all overflow-hidden shadow-inner focus-within:shadow-[0_0_15px_rgba(255,212,0,0.15)]">
                    <select
                      name="phoneCode"
                      value={formData.phoneCode}
                      onChange={handleChange}
                      className="bg-white/[0.04] text-neutral-300 text-xs font-mono py-3.5 px-3 border-r border-white/10 focus:outline-none cursor-pointer"
                    >
                      <option value="+1" className="bg-[#12151e] text-white">+1 (US)</option>
                      <option value="+44" className="bg-[#12151e] text-white">+44 (UK)</option>
                      <option value="+91" className="bg-[#12151e] text-white">+91 (IN)</option>
                      <option value="+49" className="bg-[#12151e] text-white">+49 (DE)</option>
                      <option value="+81" className="bg-[#12151e] text-white">+81 (JP)</option>
                      <option value="+61" className="bg-[#12151e] text-white">+61 (AU)</option>
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="flex-1 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="form-field-anim">
                  <label className="text-xs font-mono font-medium text-neutral-300 block mb-2 tracking-wide">
                    Message<span className="text-red-400 ml-1">*</span>
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you"
                    className="w-full bg-[#12151e] border border-white/10 focus:border-[#FFD400] rounded-xl p-4 text-sm text-white placeholder:text-neutral-500 focus:outline-none transition-all resize-none shadow-inner leading-relaxed focus:shadow-[0_0_15px_rgba(255,212,0,0.15)]"
                  />
                </div>

                {/* Terms Agreement Checkbox */}
                <div className="form-field-anim flex items-start gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={formData.agreed}
                    onChange={handleCheckboxChange}
                    className="mt-1 w-4 h-4 rounded border-white/20 text-[#FFD400] focus:ring-0 focus:ring-offset-0 bg-[#12151e] cursor-pointer accent-[#FFD400]"
                  />
                  <label htmlFor="terms" className="text-xs text-neutral-400 font-light leading-relaxed cursor-pointer select-none">
                    By checking the box you agree to our{" "}
                    <span className="text-white hover:text-[#FFD400] underline transition-colors">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-white hover:text-[#FFD400] underline transition-colors">
                      Privacy Policy
                    </span>.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="form-field-anim">
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.agreed}
                    className="w-full py-4 rounded-xl bg-[#FFD400] hover:bg-[#ffe033] disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold font-mono tracking-wider text-sm uppercase flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,212,0,0.25)] hover:shadow-[0_0_35px_rgba(255,212,0,0.45)] transition-all active:scale-[0.99] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        TRANSMITTING...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </div>

                {/* Success Toast */}
                {isSubmitted && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-3 text-xs font-mono text-emerald-400 animate-fadeIn">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Thank you! Your message has been received. Our team will contact you within 2 hours.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. DIRECT CHANNELS & WORKING NODES (3 Sleek Grid Cards)
            ========================================================================= */}
        <div className="channels-grid grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {/* Card 1: Email Inquiries */}
          <div
            onMouseMove={handleMouseMove}
            className="channel-card-rect p-6 sm:p-7 rounded-2xl bg-[#0c0e14]/90 border border-white/10 hover:border-[#FFD400]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl relative overflow-hidden group"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
              style={{
                background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,212,0,0.07), transparent 60%)`,
              }}
            />
            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-[#141721] border border-white/10 flex items-center justify-center text-[#FFD400] group-hover:scale-105 group-hover:bg-[#FFD400] group-hover:text-black transition-all mb-5 shadow-md">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-[family-name:var(--font-syne)] uppercase tracking-wide group-hover:text-[#FFD400] transition-colors">
                Direct Inquiries
              </h3>
              <p className="text-xs text-neutral-400 font-light mt-1 mb-4">
                Speak directly with our engineering triage leads.
              </p>
              <div className="flex items-center justify-between text-xs font-mono text-neutral-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                <span>hello@rndtechnosoft.com</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard("hello@rndtechnosoft.com", "c_email")}
                  className="text-neutral-400 hover:text-[#FFD400] transition-colors p-1"
                  title="Copy Email"
                >
                  {copiedKey === "c_email" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Voice & WhatsApp */}
          <div
            onMouseMove={handleMouseMove}
            className="channel-card-rect p-6 sm:p-7 rounded-2xl bg-[#0c0e14]/90 border border-white/10 hover:border-[#FFD400]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl relative overflow-hidden group"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
              style={{
                background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,212,0,0.07), transparent 60%)`,
              }}
            />
            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-[#141721] border border-white/10 flex items-center justify-center text-[#FFD400] group-hover:scale-105 group-hover:bg-[#FFD400] group-hover:text-black transition-all mb-5 shadow-md">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-[family-name:var(--font-syne)] uppercase tracking-wide group-hover:text-[#FFD400] transition-colors">
                Direct Voice &amp; WhatsApp
              </h3>
              <p className="text-xs text-neutral-400 font-light mt-1 mb-4">
                Immediate voice support &amp; priority scheduling.
              </p>
              <div className="flex items-center justify-between text-xs font-mono text-neutral-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                <span>+1 (555) 392-8820</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard("+1 (555) 392-8820", "c_phone")}
                  className="text-neutral-400 hover:text-[#FFD400] transition-colors p-1"
                  title="Copy Phone"
                >
                  {copiedKey === "c_phone" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Physical Headquarters */}
          <div
            onMouseMove={handleMouseMove}
            className="channel-card-rect p-6 sm:p-7 rounded-2xl bg-[#0c0e14]/90 border border-white/10 hover:border-[#FFD400]/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl relative overflow-hidden group"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
              style={{
                background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,212,0,0.07), transparent 60%)`,
              }}
            />
            <div className="relative z-10">
              <div className="w-11 h-11 rounded-xl bg-[#141721] border border-white/10 flex items-center justify-center text-[#FFD400] group-hover:scale-105 group-hover:bg-[#FFD400] group-hover:text-black transition-all mb-5 shadow-md">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white font-[family-name:var(--font-syne)] uppercase tracking-wide group-hover:text-[#FFD400] transition-colors">
                Global Locations
              </h3>
              <p className="text-xs text-neutral-400 font-light mt-1 mb-4">
                Hubs across San Francisco, London &amp; Tokyo.
              </p>
              <div className="text-xs font-mono text-neutral-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/5 flex items-center justify-between">
                <span>HQ: 500 Howard St, SF, CA</span>
                <span className="text-[10px] text-[#FFD400]">UTC-8</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. FREQUENTLY ASKED QUESTIONS (FAQ Staggered Reveal)
            ========================================================================= */}
        <div className="faq-section mb-20">
          <div className="faq-header-anim text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#FFD400] uppercase tracking-widest block mb-2">
              HELP &amp; INQUIRIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-syne)] text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-light mt-2">
              Common questions about working with our digital engineering and 3D studio.
            </p>
          </div>

          <div className="faq-list max-w-4xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="faq-card-rect rounded-2xl border border-white/10 bg-[#0c0e14]/90 backdrop-blur-xl overflow-hidden transition-all hover:border-[#FFD400]/40"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left group cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#FFD400] transition-colors pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 group-hover:text-[#FFD400] transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-[#FFD400]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            4. BOTTOM STRATEGIC CALL-TO-ACTION RECTANGLE
            ========================================================================= */}
        <div
          onMouseMove={handleMouseMove}
          className="cta-banner-rect rounded-3xl border border-white/10 hover:border-[#FFD400]/40 bg-gradient-to-r from-[#0c0e14] via-[#10131d] to-[#0c0e14] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden transition-all duration-300"
        >
          <div
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
            style={{
              background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,212,0,0.08), transparent 70%)`,
            }}
          />
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-syne)] text-white mb-2">
              Ready to Discuss Your Next Milestone?
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm font-light max-w-xl">
              Schedule a dedicated 20-minute discovery call with our solutions director to map out scope and deliverables.
            </p>
          </div>
          <Link
            href="tel:+15553928820"
            className="relative z-10 shrink-0 bg-white hover:bg-[#FFD400] text-black font-bold font-mono tracking-wider px-6 py-3.5 rounded-xl flex items-center gap-2 text-xs uppercase transition-all shadow-lg hover:shadow-[0_0_25px_rgba(255,212,0,0.4)] active:scale-95"
          >
            <span>Call Directly</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
