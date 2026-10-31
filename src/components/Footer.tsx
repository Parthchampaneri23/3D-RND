"use client";

import {
  Layers,
  Mail,
  ArrowUp,
  MapPin,
  Shield,
  ExternalLink,
  Code2,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800 bg-black text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#111111] border border-[#FFD400]/40 p-[1.5px] shadow-yellow-glow">
                <div className="w-full h-full bg-[#080808] rounded-[10px] flex items-center justify-center">
                  <Layers className="w-5 h-5 text-[#FFD400]" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                CYBERTECH <span className="text-[#FFD400]">RND</span>
              </span>
            </a>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Engineering future-ready software, immersive 3D/WebGL experiences, AI automation, and resilient cloud architectures for forward-thinking enterprises.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="mailto:contact@rndtechnosoft.com"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Solutions
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Next.js Web Applications</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">3D & WebGL Systems</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Enterprise AI & RAG</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Cloud & Kubernetes</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Mobile Engineering</a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-cyan-400 transition-colors">Tech Architecture</a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-cyan-400 transition-colors">Project Estimator</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Careers & Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-200 font-semibold">
              Global Operations
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>RND Technosoft Innovation Hub, Tech Park</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>contact@rndtechnosoft.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ISO 27001 & SOC2 Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            &copy; 2026 <strong className="text-slate-300">RND Technosoft</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
