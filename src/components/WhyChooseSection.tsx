"use client";

import { Shield, ArrowRight, UserCircle } from "lucide-react";
// import Image from "next/image"; // Uncomment when adding actual images

export default function WhyChooseSection({ className = "" }: { className?: string } = {}) {
  return (
    <section className={`relative py-[50px] bg-black text-white overflow-hidden ${className}`}>
      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-12">
        {/* Grid Layout - 3 columns with center card taller */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          {/* Card 01 - Rapid Agile Delivery (Yellow - Top Left) */}
          <div className="rounded-3xl bg-[#FFD400] text-black p-8 flex flex-col justify-between border border-[#FFD400]/30 hover:scale-[1.02] transition-transform">
            <div>
              <div className="text-5xl font-bold mb-3 opacity-90 font-[family-name:var(--font-bebas)] tracking-tight">01 /</div>
              <h3 className="text-3xl font-bold mb-8 leading-tight font-[family-name:var(--font-jakarta)]">
                Rapid Agile<br />Delivery
              </h3>

              {/* Sprint Timeline */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex-1 h-1 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full bg-black" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs font-semibold mb-8 font-[family-name:var(--font-jakarta)]">
                <span>Sprint 01</span>
                <span>Sprint 02</span>
                <span>Sprint 03</span>
                <span className="text-black/50">Deploy</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-black text-[#FFD400] text-sm font-bold font-[family-name:var(--font-jakarta)]">
                100% On-Time
              </div>
            </div>
          </div>

          {/* Card 02 - Top 1% Senior Engineers (Dark - Bottom Left) */}
          <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 p-8 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl font-bold text-white/40 font-[family-name:var(--font-bebas)] tracking-tight">02 /</div>
                <span className="px-3 py-1.5 rounded-full bg-white/10 text-white/60 text-xs font-medium font-[family-name:var(--font-jakarta)]">
                  Vetted Talent
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-8 font-[family-name:var(--font-jakarta)]">
                Top 1% Senior<br />Engineers
              </h3>

              {/* Avatar Group */}
              <div className="flex -space-x-3 mb-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div 
                    key={i}
                    className={`w-12 h-12 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center text-white font-bold text-xs
                      ${i === 1 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' : ''}
                      ${i === 2 ? 'bg-gradient-to-br from-blue-400 to-blue-600' : ''}
                      ${i === 3 ? 'bg-gradient-to-br from-orange-400 to-orange-600' : ''}
                      ${i === 4 ? 'bg-gradient-to-br from-purple-400 to-purple-600' : ''}
                      ${i === 5 ? 'bg-gradient-to-br from-pink-400 to-pink-600' : ''}
                      ${i === 6 ? 'bg-gradient-to-br from-teal-400 to-teal-600' : ''}
                    `}
                  >
                    {/* Placeholder - replace with real images */}
                  </div>
                ))}
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-bold text-[#FFD400] font-[family-name:var(--font-bebas)] tracking-tight">10+</span>
                <span className="text-white/60 text-sm font-[family-name:var(--font-jakarta)]">Years Avg.</span>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                {['React', 'Node', 'AWS', 'Vetted Talent'].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70 font-[family-name:var(--font-jakarta)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER CARD - Astronaut with Shield (Tall - Spans 2 rows) */}
          <div className="rounded-3xl bg-gradient-to-b from-[#3a3a2a] via-[#2a2a1a] to-black border border-[#FFD400]/20 p-8 flex flex-col items-center justify-between md:row-span-2 lg:row-span-2 relative overflow-hidden hover:border-[#FFD400]/40 transition-all">
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-[#FFD400]/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>

            {/* Astronaut with Shield */}
            <div className="relative z-10 flex-1 flex items-center justify-center w-full">
              <div className="relative">
                {/* Glowing shield placeholder */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
                  {/* Shield glow */}
                  <div className="absolute inset-0 flex items-end justify-center">
                    <div className="w-32 h-32 bg-[#FFD400]/30 blur-3xl rounded-full"></div>
                  </div>
                  
                  {/* Shield icon */}
                  <div className="relative z-10 text-[#FFD400]">
                    <Shield className="w-24 h-24 sm:w-32 sm:h-32 fill-[#FFD400]/20 stroke-[#FFD400] stroke-[1.5]" />
                  </div>

                  {/* Astronaut placeholder - replace with actual image */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                    <UserCircle className="w-32 h-32 sm:w-40 sm:h-40 text-[#FFD400]/40" />
                  </div>
                </div>
              </div>
            </div>

            {/* 3x Faster Text */}
            <div className="relative z-10 text-center mb-8">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#FFD400] mb-3 tracking-tight font-[family-name:var(--font-bebas)]">
                3x Faster
              </h2>
              <p className="text-white/60 text-lg sm:text-xl font-[family-name:var(--font-jakarta)]">
                From Concept to<br />Scalable Launch
              </p>
            </div>

            {/* CTA Button */}
            <button className="relative z-10 w-full px-8 py-4 rounded-2xl bg-[#FFD400] text-black font-bold text-base flex items-center justify-center gap-2 hover:bg-[#FFD400]/90 transition-all group font-[family-name:var(--font-jakarta)]">
              Book Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Card 03 - Bank-Grade Cloud Security (Top Right) */}
          <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 p-8 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl font-bold text-white/40 font-[family-name:var(--font-bebas)] tracking-tight">03 /</div>
              </div>

              <h3 className="text-2xl font-bold mb-8 font-[family-name:var(--font-jakarta)]">
                Bank-Grade<br />Cloud Security
              </h3>

              {/* Graph */}
              <div className="h-24 mb-6">
                <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="securityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFD400" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#FFD400" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,60 L20,58 L40,55 L60,50 L80,45 L100,42 L120,38 L140,30 L160,25 L180,22 L200,20"
                    fill="url(#securityGradient)"
                  />
                  <path
                    d="M0,60 L20,58 L40,55 L60,50 L80,45 L100,42 L120,38 L140,30 L160,25 L180,22 L200,20"
                    fill="none"
                    stroke="#FFD400"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="flex items-center justify-between">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-sm font-bold font-[family-name:var(--font-jakarta)]">
                  99.99% SLA Uptime
                </div>
                <span className="text-xs text-white/40 font-[family-name:var(--font-jakarta)]">SOC2<br/>Compliant</span>
              </div>
            </div>
          </div>

          {/* Card 04 - 24/7 Dedicated Support (Bottom Right) */}
          <div className="rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 p-8 flex flex-col justify-between hover:border-white/20 transition-all">
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="text-5xl font-bold text-white/40 font-[family-name:var(--font-bebas)] tracking-tight">04 /</div>
              </div>

              <h3 className="text-2xl font-bold mb-8 font-[family-name:var(--font-jakarta)]">
                24/7 Dedicated<br />Support
              </h3>

              {/* Support Network Diagram */}
              <div className="relative h-24 mb-6 flex items-center justify-center">
                <div className="relative">
                  {/* Center node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FFD400]/20 border-2 border-[#FFD400] flex items-center justify-center">
                    <UserCircle className="w-6 h-6 text-[#FFD400]" />
                  </div>
                  {/* Connection lines and nodes */}
                  <svg className="w-48 h-24" viewBox="0 0 200 100">
                    <line x1="100" y1="50" x2="40" y2="30" stroke="#FFD400" strokeWidth="1" opacity="0.3" />
                    <line x1="100" y1="50" x2="160" y2="30" stroke="#FFD400" strokeWidth="1" opacity="0.3" />
                    <line x1="100" y1="50" x2="40" y2="70" stroke="#FFD400" strokeWidth="1" opacity="0.3" />
                    <line x1="100" y1="50" x2="160" y2="70" stroke="#FFD400" strokeWidth="1" opacity="0.3" />
                    <circle cx="40" cy="30" r="4" fill="#FFD400" opacity="0.5" />
                    <circle cx="160" cy="30" r="4" fill="#FFD400" opacity="0.5" />
                    <circle cx="40" cy="70" r="4" fill="#FFD400" opacity="0.5" />
                    <circle cx="160" cy="70" r="4" fill="#FFD400" opacity="0.5" />
                  </svg>
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-bold text-[#FFD400] font-[family-name:var(--font-bebas)] tracking-tight">98%</span>
                <div className="text-sm text-white/60 font-[family-name:var(--font-jakarta)]">
                  Client Retention
                </div>
              </div>

              <div className="mt-4">
                <span className="text-xs text-white/40 bg-white/5 px-3 py-1.5 rounded-lg inline-block font-[family-name:var(--font-jakarta)]">
                  &lt;15m Response
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}
