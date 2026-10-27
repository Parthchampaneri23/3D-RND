"use client";

import { Building2, Shield, Cloud, Terminal, Cpu, Database } from "lucide-react";

export default function ClientsTicker() {
  const industries = [
    { name: "FinTech & Digital Banking", icon: Shield },
    { name: "Smart Healthcare Systems", icon: Building2 },
    { name: "E-Commerce & 3D Config", icon: Database },
    { name: "Autonomous Logistics & IoT", icon: Cpu },
    { name: "Cloud SaaS Platforms", icon: Cloud },
    { name: "Enterprise DevOps", icon: Terminal },
  ];

  return (
    <div className="py-10 border-y border-slate-800/60 bg-slate-950/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
          Powering Digital Transformations Across Key Enterprise Sectors
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 transition-all text-slate-400 hover:text-slate-200 group"
              >
                <Icon className="w-4 h-4 text-cyan-400/80 group-hover:text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs sm:text-sm font-medium">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
