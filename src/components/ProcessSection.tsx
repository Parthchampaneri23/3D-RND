"use client";

import { Compass, Lightbulb, Palette, Code2, Rocket, ArrowRight } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      name: "Discover",
      desc: "Deep technical discovery, stakeholder alignment, user journeys, and architectural feasibility mapping.",
      icon: Compass,
      color: "text-[#d4ff00]",
      border: "hover:border-[#d4ff00]/50",
    },
    {
      num: "02",
      name: "Strategise",
      desc: "System design specs, data schema modeling, cloud scalability roadmap, and security compliance planning.",
      icon: Lightbulb,
      color: "text-cyan-400",
      border: "hover:border-cyan-400/50",
    },
    {
      num: "03",
      name: "Design",
      desc: "High-fidelity interactive UI/UX prototyping, 3D spatial design, motion choreography, and component systems.",
      icon: Palette,
      color: "text-purple-400",
      border: "hover:border-purple-400/50",
    },
    {
      num: "04",
      name: "Build",
      desc: "Clean modular TypeScript development, Next.js App Router, Three.js shaders, and end-to-end unit testing.",
      icon: Code2,
      color: "text-emerald-400",
      border: "hover:border-emerald-400/50",
    },
    {
      num: "05",
      name: "Launch",
      desc: "Automated zero-downtime CI/CD deployment, global edge CDN distribution, and continuous observability.",
      icon: Rocket,
      color: "text-sky-400",
      border: "hover:border-sky-400/50",
    },
  ];

  return (
    <section className="py-24 bg-slate-950/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4ff00]/10 border border-[#d4ff00]/30 text-[#d4ff00] text-xs font-semibold uppercase tracking-wider">
            <span>Workflow & Cadence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            The Process. Powering{" "}
            <span className="bg-gradient-to-r from-[#d4ff00] via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Tomorrow&apos;s Solutions
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A battle-tested 5-phase engineering methodology delivering enterprise-grade quality on time and at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 ${step.border} transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-slate-700 group-hover:text-slate-400 transition-colors">
                      {step.num}
                    </span>
                    <Icon className={`w-5 h-5 ${step.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#d4ff00] transition-colors">
                    {step.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-1 text-[11px] font-mono text-slate-400">
                  <span>Phase {step.num}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
