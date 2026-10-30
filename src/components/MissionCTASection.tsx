"use client";

import { useState } from "react";
import { Rocket, Send, Sparkles, Phone, Mail, CheckCircle2 } from "lucide-react";
import CyberButton from "@/components/CyberButton";

export default function MissionCTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Websites & Web Apps",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-transparent text-white overflow-hidden border-t border-white/5">
      {/* Warp Portal Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#FFD400]/8 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.05] to-white/[0.015] border border-white/15 p-8 sm:p-14 lg:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.85)] overflow-hidden">
          {/* Top Amber Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#FFD400] to-transparent shadow-[0_0_20px_#FFD400]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Value Prop */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-6">
                <Rocket className="w-3.5 h-3.5" />
                <span>INITIATE MISSION // CONTACT</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-syne)] font-bold tracking-tight leading-tight uppercase text-white mb-6">
                READY FOR YOUR{" "}
                <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.4)]">
                  NEXT BIG MISSION?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-white/70 leading-relaxed font-light mb-8">
                Whether you need to architect scalable enterprise cloud software, build a conversion-driven spatial 3D web platform, dominate social media growth, or direct an 8K commercial campaign — RnD Technosoft delivers complete mission success.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-white/10 text-sm font-mono text-white/75">
                <a
                  href="mailto:contact@rndtechnosoft.com"
                  className="flex items-center gap-2.5 hover:text-[#FFD400] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FFD400]" />
                  <span>contact@rndtechnosoft.com</span>
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-2.5 hover:text-[#FFD400] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#FFD400]" />
                  <span>+91 (0) 98765 43210</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Mission Enquiry Form */}
            <div className="lg:col-span-6">
              <div className="p-7 sm:p-9 rounded-2xl bg-[#050608]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-2">
                  Launch Your Project Brief
                </h3>
                <p className="text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
                  Guaranteed response within 24 hours with NDA & architecture plan.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/40 text-center animate-in fade-in">
                    <CheckCircle2 className="w-12 h-12 text-[#FFD400] mx-auto mb-3" />
                    <h4 className="text-xl font-bold text-white mb-1">
                      Mission Brief Received!
                    </h4>
                    <p className="text-sm text-white/70">
                      Our lead technical architect will review your requirements and reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-white/60 uppercase tracking-wider mb-1.5">
                        Your Name / Organization
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Alex Vance, Founder"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFD400] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-white/60 uppercase tracking-wider mb-1.5">
                        Business Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFD400] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-white/60 uppercase tracking-wider mb-1.5">
                        Primary Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#090b10] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFD400] transition-colors"
                      >
                        <option value="Websites & Web Apps">Custom Websites & Web Apps</option>
                        <option value="Enterprise Software">Custom Software & Cloud Systems</option>
                        <option value="Digital Marketing & SMM">Digital Marketing & Social Media</option>
                        <option value="Branding & Design">Branding & UI/UX Design</option>
                        <option value="Commercial Media">Commercial 8K Film & Photography</option>
                        <option value="Full Integrated Retainer">Full Integrated Ecosystem Retainer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-white/60 uppercase tracking-wider mb-1.5">
                        Project Details / Timeline
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell us about your objectives, scale, and timeline..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFD400] transition-colors resize-none"
                      />
                    </div>

                    <CyberButton
                      type="submit"
                      variant="gold"
                      fullWidth
                      size="lg"
                    >
                      INITIATE MISSION PROTOCOL
                    </CyberButton>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
