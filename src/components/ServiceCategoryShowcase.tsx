"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code,
  TrendingUp,
  Palette,
  Video,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Zap,
} from "lucide-react";
import CyberButton from "@/components/CyberButton";

export interface ServiceCategoryItem {
  id: string;
  index: string;
  badge: string;
  title: string;
  categoryHref?: string;
  tagline: string;
  intro: string;
  icon: React.ElementType;
  visual: string;
  accentColor: string;
  services: {
    id: string;
    title: string;
    desc: string;
    sla: string;
    tags: string[];
    href: string;
  }[];
}

const CATEGORIES: ServiceCategoryItem[] = [
  {
    id: "technology-solutions",
    index: "01",
    badge: "2.3 TECHNOLOGY SOLUTIONS",
    title: "Technology Solutions & Cloud Engineering",
    categoryHref: "/technology-solution",
    tagline: "High-Performance Web Platforms, Cloud Microservices & Scalable Systems",
    intro:
      "We architect fault-tolerant digital foundations designed to process millions of transactions with sub-second response times. From enterprise Next.js platforms to autonomous cloud microservices, we build software engineered to scale without bottlenecks.",
    icon: Code,
    visual: "/images/service_cloud_color.jpg",
    accentColor: "#FFD400",
    services: [
      {
        id: "custom-web-development",
        title: "Custom Web Development",
        desc: "Full-stack Next.js 15 & React 19 web applications with 90+ Core Web Vitals and dynamic 60 FPS spatial interactions.",
        sla: "99.9% UPTIME",
        tags: ["Next.js 15", "TypeScript", "Tailwind", "REST/GraphQL"],
        href: "/technology-solution/web-development",
      },
      {
        id: "cloud-infrastructure-devops",
        title: "Cloud Infrastructure & DevOps",
        desc: "Kubernetes orchestration, automated CI/CD pipelines, multi-region redundancy, and bank-grade AWS/GCP cloud resilience.",
        sla: "<15m INCIDENT RESPONSE",
        tags: ["Docker", "Kubernetes", "Terraform", "AWS / GCP"],
        href: "/services/web-cloud",
      },
      {
        id: "enterprise-software-solutions",
        title: "Enterprise Software Solutions",
        desc: "Bespoke SaaS architectures, high-load backends, internal operations software, and mission-critical database scaling.",
        sla: "100% IP OWNERSHIP",
        tags: ["Microservices", "PostgreSQL", "Node / Go", "SOC2"],
        href: "/services/web-cloud",
      },
      {
        id: "ecommerce-platform-engineering",
        title: "E-Commerce Platform Engineering",
        desc: "Headless Shopify Plus and custom checkout engines optimized for high-volume flash sales and compounding conversion rates.",
        sla: "1.2s CHECKOUT SPEED",
        tags: ["Headless Shopify", "Stripe", "Next.js", "Algolia"],
        href: "/services/ecommerce-platforms",
      },
    ],
  },
  {
    id: "digital-marketing",
    index: "02",
    badge: "2.4 DIGITAL MARKETING",
    title: "Digital Marketing & Performance Growth",
    categoryHref: "/services#digital-marketing",
    tagline: "Programmatic Search Dominance, Paid Funnels & Conversion Engineering",
    intro:
      "Data-engineered customer acquisition models. We replace guesswork with algorithmic precision, deploying multi-channel performance funnels, technical backlink graphs, and behavioral CRO that consistently drive predictable revenue expansion.",
    icon: TrendingUp,
    visual: "/images/service_marketing.jpg",
    accentColor: "#FFD400",
    services: [
      {
        id: "technical-seo-dominance",
        title: "Technical SEO & Search Dominance",
        desc: "Algorithmic keyword clusters, programmatic internal linking, crawl budget optimization, and top-3 organic ranking capture.",
        sla: "+180% TRAFFIC SURGE",
        tags: ["Semantic Indexing", "Core Web Vitals", "Backlinks", "Schema"],
        href: "/services/seo-search",
      },
      {
        id: "performance-ppc-advertising",
        title: "Performance PPC & Paid Media",
        desc: "High-ROI paid search and social campaigns across Google Ads, Meta, and TikTok with real-time ROAS telemetry dashboards.",
        sla: "8.4x AVG ROAS",
        tags: ["Google Ads", "Meta Ads Manager", "TikTok Ads", "Attribution"],
        href: "/services/seo-search",
      },
      {
        id: "social-media-management",
        title: "Social Media Strategy & Management",
        desc: "Viral organic community building, platform-specific content cadence, and influencer amplification that establishes brand authority.",
        sla: "100% ORGANIC-DRIVEN",
        tags: ["Content Calendars", "Audience Ops", "LinkedIn", "Instagram"],
        href: "/services/social-media",
      },
      {
        id: "content-strategy-production",
        title: "Content Strategy & Copywriting",
        desc: "High-authority editorial briefs, thought leadership articles, and high-converting commercial copy crafted for your target buyer persona.",
        sla: "CONVERSION-FIRST",
        tags: ["Whitepapers", "Landing Copy", "Email Funnels", "Guides"],
        href: "/services/social-media",
      },
    ],
  },
  {
    id: "branding-design",
    index: "03",
    badge: "2.5 BRANDING & DESIGN",
    title: "Branding Systems & Spatial UI/UX",
    categoryHref: "/services#branding-design",
    tagline: "Category-Defining Visual Identities & Fluid Human-Centric Interfaces",
    intro:
      "Great software requires an unforgettable aesthetic. We construct cohesive design languages, mathematically scaled design systems, and spatial 3D user interfaces that elevate market perception and command enterprise pricing power.",
    icon: Palette,
    visual: "/images/service_branding.jpg",
    accentColor: "#FFD400",
    services: [
      {
        id: "brand-identity-systems",
        title: "Brand Identity & Design Systems",
        desc: "Comprehensive brand identity guidelines, modern logos, typography scales, color palettes, and unified design token architectures.",
        sla: "PRODUCTION-READY",
        tags: ["Design Systems", "Vector Identity", "Figma", "Guidelines"],
        href: "/services/brand-identity",
      },
      {
        id: "ui-ux-spatial-design",
        title: "UI/UX & Spatial Web Architecture",
        desc: "Next-gen user journeys, micro-interactive prototypes, and 3D web interfaces mapped through rigorous usability heatmaps.",
        sla: "60 FPS INTERACTION",
        tags: ["Spatial 3D", "Wireframing", "Interaction Design", "Figma"],
        href: "/services/brand-identity",
      },
    ],
  },
  {
    id: "media-production",
    index: "04",
    badge: "2.6 MEDIA PRODUCTION",
    title: "Commercial Media & Motion Production",
    categoryHref: "/services#media-production",
    tagline: "Cinematic Commercial Films, 3D CGI Motion & High-Impact Brand Assets",
    intro:
      "Transforming complex product capabilities into breathtaking visual narratives. Combining in-house cinema equipment, 3D Unreal Engine environments, and post-production color mastering to tell your enterprise story with emotional impact.",
    icon: Video,
    visual: "/images/service_media.jpg",
    accentColor: "#FFD400",
    services: [
      {
        id: "commercial-video-production",
        title: "Commercial Video & Brand Films",
        desc: "End-to-end commercial productions: scriptwriting, 4K/8K cinematography, sound engineering, and multi-platform promotional edits.",
        sla: "CINEMA-GRADE 4K/8K",
        tags: ["Brand Films", "Product Launches", "Color Grading", "Voiceover"],
        href: "/services/commercial-media",
      },
      {
        id: "motion-graphics-3d-cgi",
        title: "3D CGI & Motion Graphics",
        desc: "Photorealistic 3D product animations, kinetic typography, dynamic HUD holograms, and spatial VFX for web and commercials.",
        sla: "PHOTOREALISTIC",
        tags: ["Three.js", "Cinema4D", "Blender 3D", "After Effects"],
        href: "/services/commercial-media",
      },
    ],
  },
];

export default function ServiceCategoryShowcase() {
  return (
    <div className="space-y-24 sm:space-y-32">
      {CATEGORIES.map((category, catIdx) => {
        const isReversed = catIdx % 2 !== 0;
        const Icon = category.icon;

        return (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-28 relative"
          >
            {/* Ambient Background Glow */}
            <div
              className={`absolute top-1/3 ${
                isReversed ? "right-10" : "left-10"
              } w-[650px] h-[450px] bg-[#FFD400]/4 blur-[180px] rounded-full pointer-events-none -z-10`}
            />

            {/* Division Card Container */}
            <div className="rounded-[32px] sm:rounded-[40px] bg-black/30 backdrop-blur-md border border-white/10 hover:border-[#FFD400]/40 transition-all duration-500 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden group">
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-60 shadow-[0_0_15px_#FFD400]" />

              {/* Main Grid: Visual Column & Editorial Overview */}
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12 lg:mb-16 ${
                  isReversed ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Visual Media Column */}
                <div
                  className={`lg:col-span-5 relative ${
                    isReversed ? "lg:col-start-8" : ""
                  }`}
                >
                  <Link
                    href={category.categoryHref || `#${category.id}`}
                    prefetch={false}
                    className="block relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 hover:border-[#FFD400]/60 shadow-2xl group/media cursor-pointer transition-all duration-500"
                  >
                    <Image
                      src={category.visual}
                      alt={category.title}
                      fill
                      unoptimized
                      priority
                      loading="eager"
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-cover group-hover/media:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    {/* Floating HUD Badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 flex items-center justify-between shadow-xl">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFD400] animate-ping" />
                        <div>
                          <span className="text-[10px] font-mono tracking-widest uppercase text-[#FFD400] font-bold block">
                            ACTIVE DIVISION SQUAD
                          </span>
                          <span className="text-xs font-mono text-white">
                            {category.services.length} Specialized Offerings
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        // {category.index}
                      </span>
                    </div>
                  </Link>

                  {/* Corner Sci-Fi Framing Accents */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#FFD400]/60 pointer-events-none" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#FFD400]/60 pointer-events-none" />
                </div>

                {/* Editorial Information Column */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isReversed ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-semibold tracking-[0.25em] uppercase">
                      <Icon className="w-3.5 h-3.5" />
                      {category.categoryHref ? (
                        <Link href={category.categoryHref} className="hover:underline">
                          {category.badge}
                        </Link>
                      ) : (
                        <span>{category.badge}</span>
                      )}
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-syne)] font-bold text-white uppercase tracking-tight leading-[1.1]">
                      {category.categoryHref ? (
                        <Link
                          href={category.categoryHref}
                          className="hover:text-[#FFD400] transition-colors"
                        >
                          {category.title}
                        </Link>
                      ) : (
                        category.title
                      )}
                    </h2>

                    <p className="text-sm sm:text-base text-[#FFD400] font-mono tracking-wide">
                      {category.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                    {category.intro}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    {category.categoryHref && (
                      <CyberButton href={category.categoryHref} size="sm">
                        EXPLORE CATEGORY
                      </CyberButton>
                    )}
                    <CyberButton
                      href="/contact-us"
                      size="sm"
                      variant={category.categoryHref ? "dark" : "gold"}
                    >
                      DEPLOY DIVISION POD
                    </CyberButton>
                    <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
                      Direct Lead Architect Assigned
                    </span>
                  </div>
                </div>
              </div>

              {/* Individual Services Cards Grid for this Category */}
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FFD400] font-bold">
                    DIVISION CORE SERVICES LIST ({category.services.length})
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    CLICK SERVICE TO EXPLORE FULL ARCHITECTURE
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {category.services.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      prefetch={false}
                      className="group/card block rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#FFD400]/60 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(255,212,0,0.12)] relative overflow-hidden"
                    >
                      {/* Top Row: Service SLA & Arrow */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400]">
                          {service.sla}
                        </span>

                        <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 group-hover/card:bg-[#FFD400] group-hover/card:text-black text-white/80 flex items-center justify-center transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      {/* Service Title */}
                      <h3 className="text-xl font-[family-name:var(--font-syne)] font-bold text-white uppercase group-hover/card:text-[#FFD400] transition-colors mb-2">
                        {service.title}
                      </h3>

                      {/* Service Description */}
                      <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-5">
                        {service.desc}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-white/10">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-neutral-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
