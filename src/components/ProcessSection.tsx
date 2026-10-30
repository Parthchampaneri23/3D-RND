"use client";

import { useEffect, useRef } from "react";
import { Compass, Lightbulb, Palette, Code2, Rocket, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function WaveText({
  text,
  className = "",
  delayOffset = 0,
}: {
  text: string;
  className?: string;
  delayOffset?: number;
}) {
  return (
    <span className={`inline-block ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block animate-text-wave"
          style={{
            animationDelay: `${(delayOffset + i) * 0.07}s`,
            whiteSpace: char === " " ? "pre" : "normal",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header letters wave roll on scroll
      const titleChars = headerRef.current?.querySelectorAll(".animate-text-wave");
      if (titleChars && titleChars.length > 0) {
        const titleTl = gsap.timeline({
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "restart none none reset",
          },
        });

        titleTl
          .fromTo(
            titleChars,
            { opacity: 0, y: 40, scale: 0.85 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              stagger: 0.02,
              ease: "back.out(1.8)",
            }
          )
          .to(titleChars, {
            y: -15,
            duration: 0.3,
            stagger: {
              each: 0.03,
              repeat: 1,
              yoyo: true,
            },
            ease: "sine.inOut",
          });
      }

      // Step Cards entrance & wave roll
      const cards = cardsRef.current?.children;
      if (cards && cards.length > 0) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "restart none none reset",
          },
        });

        tl.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
          }
        ).to(cards, {
          y: -12,
          duration: 0.35,
          stagger: {
            each: 0.1,
            repeat: 1,
            yoyo: true,
          },
          ease: "sine.inOut",
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      num: "01",
      name: "Discover",
      desc: "Deep technical discovery, stakeholder alignment, user journeys, and architectural feasibility mapping.",
      icon: Compass,
      color: "text-[#FFD400]",
      border: "hover:border-[#FFD400]/50",
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
    <section ref={sectionRef} className="py-24 bg-slate-950/40 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-ping" />
            <span>Workflow & Cadence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            <WaveText text="The Process. Powering " />
            <WaveText
              text="Tomorrow's Solutions"
              className="text-[#FFD400] drop-shadow-[0_0_25px_rgba(255,212,0,0.35)]"
              delayOffset={22}
            />
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            A battle-tested 5-phase engineering methodology delivering enterprise-grade quality on time and at scale.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
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
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FFD400] transition-colors">
                    <WaveText text={step.name} delayOffset={idx * 3} />
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

      <style jsx>{`
        @keyframes textWave {
          0%, 100% {
            transform: translateY(0px);
          }
          20% {
            transform: translateY(-5px);
          }
          40% {
            transform: translateY(2px);
          }
          60% {
            transform: translateY(0px);
          }
        }
        .animate-text-wave {
          display: inline-block;
          animation: textWave 2.8s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
