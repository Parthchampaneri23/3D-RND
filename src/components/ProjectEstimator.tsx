"use client";

import { useState } from "react";
import {
  Calculator,
  CheckCircle,
  Send,
  Sparkles,
  Zap,
  Clock,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function ProjectEstimator() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Next.js Web Platform",
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState("4-8 Weeks");
  const [selectedTier, setSelectedTier] = useState("Growth");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", notes: "" });

  const serviceOptions = [
    { id: "Next.js Web Platform", tag: "Frontend & Full-Stack" },
    { id: "3D WebGL / Three.js Experience", tag: "3D Interactive" },
    { id: "AI & ML Model Integration", tag: "Smart Automation" },
    { id: "Multi-Region Cloud & DevOps", tag: "Infrastructure" },
    { id: "Cross-Platform Mobile App", tag: "iOS & Android" },
  ];

  const timelineOptions = ["2-4 Weeks (Rapid MVP)", "4-8 Weeks (Recommended)", "3+ Months (Enterprise)"];
  const tierOptions = [
    { name: "Starter", desc: "MVP or targeted feature build" },
    { name: "Growth", desc: "Full custom solution with end-to-end testing" },
    { name: "Enterprise", desc: "High-load architecture, 24/7 SLA & dedicated team" },
  ];

  const toggleService = (s: string) => {
    if (selectedServices.includes(s)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((item) => item !== s));
      }
    } else {
      setSelectedServices([...selectedServices, s]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="estimator" className="py-24 bg-slate-950/80 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            Interactive Project Scope & Estimate
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Configure Your Next{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Digital Milestone
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Select your technical requirements below to receive a personalized blueprint and timeline assessment from our senior engineering team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          {submitted ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Inquiry Received Successfully!</h3>
              <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <strong className="text-white">{form.name || "valued partner"}</strong>! Our principal tech architect will review your project configuration and connect within 24 business hours.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                >
                  Configure Another Scope
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Services */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-3 flex items-center justify-between">
                  <span>1. Select Required Capabilities</span>
                  <span className="text-xs text-slate-400 font-normal">Choose one or more</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {serviceOptions.map((s) => {
                    const active = selectedServices.includes(s.id);
                    return (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => toggleService(s.id)}
                        className={`text-left p-3.5 rounded-xl border transition-all ${
                          active
                            ? "bg-gradient-to-r from-cyan-950/80 to-blue-950/60 border-cyan-500 text-white shadow-md shadow-cyan-500/10"
                            : "bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                        }`}
                      >
                        <div className="text-[10px] font-mono text-cyan-400 uppercase">{s.tag}</div>
                        <div className="text-xs font-semibold mt-1">{s.id}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Timeline */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-3">
                  2. Target Delivery Timeline
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {timelineOptions.map((time) => {
                    const active = selectedTimeline === time;
                    return (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setSelectedTimeline(time)}
                        className={`p-3 rounded-xl border text-xs font-medium transition-all text-center ${
                          active
                            ? "bg-indigo-950/70 border-indigo-500 text-indigo-200 shadow-md shadow-indigo-500/10"
                            : "bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Tier */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-3">
                  3. Engagement Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {tierOptions.map((t) => {
                    const active = selectedTier === t.name;
                    return (
                      <button
                        type="button"
                        key={t.name}
                        onClick={() => setSelectedTier(t.name)}
                        className={`text-left p-3.5 rounded-xl border transition-all ${
                          active
                            ? "bg-cyan-950/60 border-cyan-400 text-white"
                            : "bg-slate-950/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                        }`}
                      >
                        <div className="text-xs font-bold text-slate-200">{t.name}</div>
                        <div className="text-[11px] text-slate-400 mt-1 leading-snug">{t.desc}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Contact details */}
              <div id="contact" className="pt-4 border-t border-slate-800 space-y-4">
                <h4 className="text-sm font-semibold text-slate-200">
                  4. Where Should We Send the Architectural Blueprint?
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Your Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Alex Henderson"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Work Email</label>
                    <input
                      required
                      type="email"
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Project Vision / Objectives (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you are looking to build or transform..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 placeholder:text-slate-600 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict NDA Protected • Non-Binding Free Estimate</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all"
                >
                  <span>Request Engineering Proposal</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
