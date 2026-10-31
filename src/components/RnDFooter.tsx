"use client";

import { ArrowUp, Mail, Phone, MapPin, Globe, Shield, Sparkles } from "lucide-react";

export default function RnDFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white pt-20 pb-12 border-t border-white/10 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-[#FFD400]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3.5 py-1.5 rounded-xl flex items-center">
                <img
                  src="/logo.svg"
                  alt="RND Technosoft Logo"
                  className="h-7 sm:h-16 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-sm text-white/65 leading-relaxed font-light mb-6 max-w-sm">
              <strong className="text-white font-medium">RnD Technosoft</strong> is an integrated digital agency engineering high-performance software, spatial 3D web platforms, omnichannel marketing, and commercial visual production for high-growth global enterprises.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-[#FFD400]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>GLOBAL SYSTEM STATUS: 100% OPERATIONAL</span>
            </div>
          </div>

          {/* Technology Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono text-[#FFD400] uppercase tracking-[0.2em] mb-4">
              Technology & Cloud
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-white/70">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Custom Next.js & React Web Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Enterprise Cloud Software & SaaS
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Spatial 3D WebGL Experiences
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Headless CMS Architecture
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Generative AI & RAG Pipelines
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  High-Availability Microservices
                </a>
              </li>
            </ul>
          </div>

          {/* Marketing & Media */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-mono text-[#FFD400] uppercase tracking-[0.2em] mb-4">
              Marketing & Media
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-white/70">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Omnichannel SMM Growth
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  High-ROI Paid Advertising
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Commercial 8K Film Production
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Studio Product Photography
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Brand Identity & Systems
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Global Presence */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono text-[#FFD400] uppercase tracking-[0.2em] mb-4">
              Mission Control
            </h4>
            <div className="space-y-3 text-sm font-light text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFD400] shrink-0 mt-0.5" />
                <span>Global Hubs: New York • London • Dubai • New Delhi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFD400] shrink-0" />
                <a href="mailto:contact@rndtechnosoft.com" className="hover:text-white transition-colors">
                  contact@rndtechnosoft.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFD400] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 (0) 98765 43210
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {["LinkedIn", "Twitter / X", "GitHub", "Instagram"].map((soc, sIdx) => (
                <a
                  key={sIdx}
                  href="#contact"
                  className="px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 text-[11px] font-mono text-white/60 hover:text-[#FFD400] transition-colors"
                >
                  {soc}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Policies & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>© 2026 RnD Technosoft Pvt. Ltd. All rights reserved.</span>
            <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#about" className="hover:text-white transition-colors">Security Disclosures</a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-[#FFD400] hover:text-black border border-white/10 text-white/70 transition-all font-mono text-xs"
          >
            <span>Back to Orbit</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
