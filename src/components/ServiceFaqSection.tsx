"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Plus,
  Minus,
  HelpCircle,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "TIMELINES & ESTIMATES",
    question: "How do you scope and estimate timelines for complex engineering projects?",
    answer:
      "We begin with a structured 3-day discovery phase where our Principal Architect and Product Lead analyze your requirements, system architecture, third-party integrations, and performance goals. We then provide a comprehensive Sprint Blueprint outlining explicit milestones, weekly deliverables, fixed pricing, and risk buffers. Most project sprints range between 4 to 12 weeks, while dedicated pods deploy in 5 business days.",
  },
  {
    id: "faq-2",
    category: "COLLABORATION MODELS",
    question: "Can we start with a project sprint and later transition to a dedicated pod or retainer?",
    answer:
      "Yes, this is our most common engagement pathway. Many clients begin with a fixed-scope Sprint (such as an MVP build, headless migration, or brand identity system). Once deployed, the same core engineers transition seamlessly into a Dedicated Engineering Pod or Monthly Growth Retainer to drive continuous feature releases, conversion optimization, and infrastructure maintenance with zero knowledge loss.",
  },
  {
    id: "faq-3",
    category: "IP & SOURCE CODE",
    question: "Who owns the intellectual property and codebase once development is complete?",
    answer:
      "You own 100% of all intellectual property, source code, design assets, database schemas, and documentation from day one. All code is committed directly to your private GitHub or GitLab repositories, and all design systems are maintained in your organization's Figma workspace. We sign binding Mutual NDAs and IP assignment agreements prior to kickoff.",
  },
  {
    id: "faq-4",
    category: "WORKFLOW INTEGRATION",
    question: "How do your dedicated engineering pods integrate with our existing in-house team?",
    answer:
      "Our squads function as a natural extension of your engineering organization. We join your Slack or Microsoft Teams channels, participate in your daily standups, integrate into your Jira/Linear boards, and adhere to your Git branching and PR review standards. We align our working hours to provide minimum 4-6 hours of daily real-time timezone overlap with your team.",
  },
  {
    id: "faq-5",
    category: "TECH STACK",
    question: "What core technologies and frameworks do you specialize in?",
    answer:
      "Our primary engineering stack centers on modern high-performance frameworks: Next.js 15, React 19, TypeScript, Node.js, Go, Python (FastAPI/AI integrations), PostgreSQL, Redis, Three.js/WebGL for spatial interactions, Docker, Kubernetes, and AWS/GCP cloud environments. For e-commerce, we specialize in Headless Shopify Plus, Medusa, and Stripe custom checkouts.",
  },
  {
    id: "faq-6",
    category: "SLAS & SUPPORT",
    question: "What service level agreements (SLAs) and support guarantees do you provide?",
    answer:
      "For enterprise retainers and deployed production systems, we provide guaranteed SLAs including 99.9% platform availability, under 15-minute response times for critical severity incidents, and 24/7 automated telemetry monitoring. Fixed-scope projects include a complimentary 30-day hypercare warranty post-launch to address any potential bugs or edge cases.",
  },
];

export default function ServiceFaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="relative py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4 bg-black/60 border border-[#FFD400]/40 text-[#FFD400] backdrop-blur-md">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>2.9 SERVICE FAQS // CLARITY &amp; STANDARDS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-syne)] font-bold tracking-tight uppercase leading-[1.02] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
            FREQUENTLY ASKED <span className="text-[#FFD400]">SERVICE QUESTIONS</span>
          </h2>
          <p className="text-sm sm:text-base font-normal mt-4 leading-relaxed text-neutral-300">
            Clear, transparent answers about our engineering methodology, ownership terms, timeline scoping, and service level agreements.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden border ${
                  isOpen
                    ? "bg-[#0d1017]/95 border-[#FFD400]/50 shadow-[0_4px_30px_rgba(255,212,0,0.12)]"
                    : "bg-[#08090d]/80 border-white/10 hover:border-white/25 hover:bg-[#0c0e14]/90"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <span className="font-mono text-xs sm:text-sm text-[#FFD400] px-2.5 py-1 rounded bg-[#FFD400]/10 border border-[#FFD400]/20 shrink-0">
                      0{idx + 1}
                    </span>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mb-1">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-[family-name:var(--font-syne)]">
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#FFD400] text-black rotate-180"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-7 pt-1 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed border-t border-white/5 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help Card */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Have a project-specific technical inquiry?</h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                Speak directly with our technical leadership for architecture advice and estimates.
              </p>
            </div>
          </div>

          <Link href="/contact-us" className="inline-block shrink-0">
            <div className="group relative inline-flex items-center justify-between rounded-full overflow-hidden bg-[#12141a]/95 hover:bg-[#1a1d26] border border-white/15 hover:border-[#FFD400]/70 text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,212,0,0.28)] transition-all duration-300 hover:scale-[1.025] active:scale-[0.98] cursor-pointer select-none px-5 py-2.5 text-xs sm:text-sm font-mono font-bold tracking-[0.18em] uppercase gap-3">
              <span className="relative z-10 text-white group-hover:text-[#FFD400]">
                ASK AN ARCHITECT
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#FFD400] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
