"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe2 } from "lucide-react";
import CyberButton from "@/components/CyberButton";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  slug: string;
  badge: string;
  scope: string[];
}

export default function ServiceCardsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const services: ServiceItem[] = [
    {
      id: "webdev",
      number: "01",
      title: "Web Development & AI Engineering",
      tagline: "Next-Gen Web Applications & Cloud Infrastructure",
      description:
        "Scalable enterprise software platforms, high-converting Next.js / React 19 web applications, and responsive AI web builders supported by resilient cloud infrastructure and automated 99.9% uptime SLA.",
      heroImage: "/images/weddev.png",
      slug: "web-development",
      badge: "100% Responsive",
      scope: [
        "Next.js 15 & React 19 Architecture",
        "Autonomous AI WebBuilder Tools",
        "Cloud & Server Infrastructure Setup",
        "Database Auto-Backup & 99.9% Uptime",
        "PageSpeed & Core Web Vitals 90+",
        "Full-Stack Scalable GraphQL / REST APIs",
      ],
    },
    {
      id: "seo",
      number: "02",
      title: "SEO Intelligence & Dominance",
      tagline: "Organic Traffic Growth & Technical Backlink Architecture",
      description:
        "Data-engineered search engine dominance. We transform organic channels into high-velocity customer acquisition engines through real-time keyword analytics, crawl speed audits, and high-authority backlink graph architecture.",
      heroImage: "/images/seoupdate.png",
      slug: "seo-intelligence",
      badge: "100% Organic-Driven",
      scope: [
        "Real-Time Organic Search Analytics",
        "Technical Site Audits & Crawl Health",
        "High-Authority Backlink Graph Networks",
        "Mobile SERP Rank Preview & Dominance",
        "On-Page Optimization & Semantic Meta",
        "Competitor Domain & Keyword Intelligence",
      ],
    },
    {
      id: "marketing",
      number: "03",
      title: "Digital Marketing & Performance Ads",
      tagline: "High-ROI Funnels, Performance Ads & Conversion Engines",
      description:
        "Precision-targeted paid advertising across Meta, Google, and programmatic video networks. Engineered to lower customer acquisition costs (CAC) and deliver compounding 8x+ return on ad spend (ROAS).",
      heroImage: "/images/digi_market.png",
      slug: "digital-marketing",
      badge: "8.04x ROAS",
      scope: [
        "High-ROI Meta, Google & TikTok Paid Ads",
        "Campaign Funnel & ROI Infrastructure",
        "Real-Time ROAS & Ad Spend Telemetry",
        "High-Converting Dynamic Creative Ad Assets",
        "Omnichannel Social & Display Targeting",
        "Automated Attribution & Funnel Analytics",
      ],
    },
    {
      id: "social",
      number: "04",
      title: "Social Media Marketing & Growth",
      tagline: "Viral Multi-Platform Campaigns & Community Amplification",
      description:
        "Transform brand channels into high-engagement growth drivers. From algorithm-optimized short-form video storytelling to automated scheduling and verified audience acquisition across Instagram, TikTok, and LinkedIn.",
      heroImage: "/images/social.png",
      slug: "social-media-marketing",
      badge: "100% Engagement-Driven",
      scope: [
        "Multi-Platform Post Preview & Scheduling",
        "Viral Short-Form Reels, TikTok & Shorts",
        "Engagement Analytics & Audience Telemetry",
        "Social Media Campaign Architecture",
        "Brand Awareness & Product Reveal Launch Ops",
        "High-Converting Organic Community Building",
      ],
    },
    {
      id: "content",
      number: "05",
      title: "Content Creation & Editorial Strategy",
      tagline: "SEO-Driven Copywriting & Multi-Format Publications",
      description:
        "Authority-building digital publications, tone-calibrated commercial copywriting, and multi-format editorial pipelines designed for sustained reader engagement, brand trust, and search dominance.",
      heroImage: "/images/contet.png",
      slug: "content-creation",
      badge: "100% SEO & Tone-Driven",
      scope: [
        "Tone-Calibrated Commercial Copywriting",
        "Multi-Format Draft & Document Previews",
        "Resource Hub & Topic Cluster Mapping",
        "Editorial Review & Quality Assurance",
        "Content Deployment & Editorial Calendar Sync",
        "Executive Thought Leadership & Op-Eds",
      ],
    },
  ];

  const activeService = services[activeTab];

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-[#06070a] text-white overflow-visible relative border-t border-white/5 px-4 sm:px-8 lg:px-12"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-[#FFD400]/4 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="border-b border-white/10 pb-8 sm:pb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-medium tracking-[0.25em] uppercase mb-4">
              <Globe2 className="w-3.5 h-3.5" />
              <span>SERVICE UNIVERSE // INTEGRATED CAPABILITIES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-[family-name:var(--font-syne)] text-white font-bold tracking-tight leading-[1.05] uppercase select-none">
              ENGINEERED SOLUTIONS &amp;{" "}
              <span className="text-[#FFD400] drop-shadow-[0_0_35px_rgba(255,212,0,0.35)]">
                SERVICES.
              </span>
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 sm:pt-8">
              <div className="space-y-1.5 max-w-lg">
                <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#FFD400] font-mono">
                  Expertise &amp; Architectural Disciplines
                </p>
                <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-light font-[family-name:var(--font-jakarta)]">
                  Hover over any discipline to explore scope and reveal its corresponding architectural visual.
                </p>
              </div>

              <CyberButton href="/services" size="md">
                EXPLORE ALL SERVICES
              </CyberButton>
            </div>
          </div>
        </div>

        {/* Dynamic Split Layout: Left side scrolls naturally, Right side remains sticky */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative w-full">
          {/* ================= SCROLLABLE LEFT SIDE: ACCORDION SERVICE CARDS ================= */}
          <div className="lg:col-span-6 space-y-6 pb-28">
            {services.map((service, idx) => {
              const isActive = activeTab === idx;

              return (
                <div
                  key={service.id}
                  onMouseEnter={(e) => {
                    setActiveTab(idx);
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const topThreshold = 100;
                    const bottomThreshold = window.innerHeight - 30;

                    if (rect.top < topThreshold) {
                      window.scrollBy({
                        top: rect.top - topThreshold - 10,
                        behavior: "smooth",
                      });
                    } else if (rect.bottom > bottomThreshold) {
                      window.scrollBy({
                        top: rect.bottom - bottomThreshold + 20,
                        behavior: "smooth",
                      });
                    }
                  }}
                  onClick={() => setActiveTab(idx)}
                  className={`service-row transition-all duration-300 border cursor-pointer rounded-2xl overflow-hidden ${
                    isActive
                      ? "bg-[#0f121a] border-l-4 border-l-[#FFD400] border-[#FFD400]/60 shadow-[0_12px_40px_rgba(255,212,0,0.2)] scale-[1.01]"
                      : "bg-[#0b0d13]/85 border-white/10 hover:bg-[#11141f] hover:border-white/20"
                  }`}
                >
                  {/* Card Header */}
                  <div className="p-6 md:p-8 flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <span
                        className={`font-mono text-base sm:text-lg font-bold transition-colors ${
                          isActive ? "text-[#FFD400]" : "text-neutral-500"
                        }`}
                      >
                        {service.number}
                      </span>
                      <div>
                        <h3
                          className={`text-xl sm:text-2xl md:text-3xl font-bold font-[family-name:var(--font-syne)] uppercase tracking-tight transition-colors ${
                            isActive ? "text-white" : "text-neutral-300"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-400 font-mono tracking-wider mt-1">
                          {service.tagline}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-5 h-5 transition-all duration-300 shrink-0 ${
                        isActive
                          ? "rotate-45 text-[#FFD400] scale-110"
                          : "text-neutral-500"
                      }`}
                    />
                  </div>

                  {/* Smooth Accordion Body */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-8 pb-8 pt-2 border-t border-white/10 space-y-4">
                        <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                          {service.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                          {service.scope.slice(0, 4).map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2 text-xs sm:text-sm text-neutral-300 font-mono"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] shrink-0" />
                              <span className="truncate">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                          <CyberButton href="/services" size="sm">
                            EXPLORE SERVICE
                          </CyberButton>
                          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] font-bold">
                            {service.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= STICKY RIGHT SIDE: PREVIEW DISPLAY ================= */}
          <div className="lg:col-span-6 sticky top-24 self-start hidden lg:block z-20">
            <div className="relative w-full h-[82vh] min-h-[600px] xl:h-[85vh] xl:min-h-[650px]">
              {/* Cyber accent backdrop border */}
              <div className="absolute inset-0 border border-[#FFD400]/30 -rotate-1 rounded-2xl pointer-events-none" />

              {/* Increased Height Image Container */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl bg-[#090b10] border border-white/15 shadow-2xl flex items-center justify-center p-1 sm:p-2">
                {services.map((srv, idx) => {
                  const isCurActive = activeTab === idx;
                  return (
                    <div
                      key={srv.id}
                      className={`absolute inset-1 sm:inset-2 transition-opacity duration-700 ease-in-out ${
                        isCurActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={srv.heroImage}
                        alt={srv.title}
                        fill
                        unoptimized
                        priority={idx === 0 || idx === 1}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain object-center transition-all duration-700 ease-out"
                      />
                    </div>
                  );
                })}

                {/* Top Floating Badge on Image */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-[#FFD400] shadow-lg">
                    {activeService.badge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
