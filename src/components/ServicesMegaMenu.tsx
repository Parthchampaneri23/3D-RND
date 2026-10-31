"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code,
  Cpu,
  TrendingUp,
  Palette,
  Camera,
  Video,
  ShoppingBag,
  Smartphone,
  Share2,
  Layers,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

export interface ServiceSubCategory {
  title: string;
  href: string;
  desc?: string;
  badge?: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export interface ServiceMegaCategory {
  id: string;
  num: string;
  name: string;
  href: string;
  icon: React.ElementType;
  tagline: string;
  subcategories: ServiceSubCategory[];
}

export const SERVICE_MEGA_CATEGORIES: ServiceMegaCategory[] = [
  {
    id: "technology-solutions",
    num: "01",
    name: "Technology Solutions",
    href: "/technology-solution",
    icon: Code,
    tagline: "Ultra-scalable web, cloud & digital architectures",
    subcategories: [
      {
        title: "Custom Web Development",
        href: "/technology-solution/web-development",
        desc: "Next.js 15, React 19, high-performance edge portals",
        badge: "FEATURED",
        isPopular: true,
      },
      {
        title: "Web & Enterprise Cloud",
        href: "/technology-solution/cloud-infrastructure-devops",
        desc: "Microservices, AWS/GCP mesh & zero-trust infra",
      },
      {
        title: "Mobile App Development",
        href: "/technology-solution/mobile-applications",
        desc: "iOS & Android native, Flutter, 60fps spatial UI",
      },
      {
        title: "E-Commerce Platforms",
        href: "/technology-solution/ecommerce-platform-engineering",
        desc: "Headless Shopify Plus & 3D product customizers",
      },
    ],
  },
  {
    id: "digital-marketing",
    num: "02",
    name: "Digital Marketing",
    href: "/digital-marketing",
    icon: TrendingUp,
    tagline: "High-intent customer acquisition & search dominance",
    subcategories: [
      {
        title: "Search Dominance & Technical SEO",
        href: "/digital-marketing/technical-seo-dominance",
        desc: "Automated schema graphs & Core Web Vitals optimization",
        badge: "HIGH ROI",
        isPopular: true,
      },
      {
        title: "Performance PPC Advertising",
        href: "/digital-marketing/performance-ppc-advertising",
        desc: "Multi-channel paid media, Google Ads & Meta funnels",
      },
      {
        title: "Social Media & Community Building",
        href: "/digital-marketing/social-media-management",
        desc: "Viral organic content cadence & founder branding",
      },
      {
        title: "Content Strategy & Copywriting",
        href: "/digital-marketing/content-strategy-production",
        desc: "High-converting editorial briefs & conversion copy",
      },
    ],
  },
  {
    id: "branding-design",
    num: "03",
    name: "Branding & Design",
    href: "/branding-design",
    icon: Palette,
    tagline: "Category-defining identities & human-centric UI/UX",
    subcategories: [
      {
        title: "Brand Strategy & Design Systems",
        href: "/branding-design/brand-identity-systems",
        desc: "Design token architectures, vector logos & typography",
        badge: "AWARD WINNING",
      },
      {
        title: "Spatial 3D & UI/UX Architecture",
        href: "/branding-design/ui-ux-spatial-design",
        desc: "Interactive WebGL, Three.js & micro-animations",
        badge: "SPATIAL",
      },
      {
        title: "3D Motion Graphics & CGI",
        href: "/media-production/motion-graphics-3d-cgi",
        desc: "Photorealistic product visualizations & kinetic assets",
      },
    ],
  },
  {
    id: "media-production",
    num: "04",
    name: "Media Production",
    href: "/media-production",
    icon: Camera,
    tagline: "Cinematic commercial films & 8K expedition capture",
    subcategories: [
      {
        title: "Commercial Film & Photography",
        href: "/media-production/commercial-video-production",
        desc: "Studio product photography & enterprise brand films",
      },
      {
        title: "8K Cinema Expedition & Story",
        href: "/media-production/commercial-video-production",
        desc: "Sub-zero and aerial drone storytelling cinematography",
        badge: "8K RAW",
      },
      {
        title: "Dedicated Agency Squads",
        href: "/media-production/dedicated-squads",
        desc: "Autonomous engineering pods & monthly retainers",
        badge: "PODS",
        isPopular: true,
      },
    ],
  },
];

interface ServicesMegaMenuProps {
  isOpen?: boolean;
  onClose?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ServicesMegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: ServicesMegaMenuProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string>("technology-solutions");

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`hidden ${
        isOpen ? "lg:!block" : "lg:group-hover/mega:block"
      } absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-[90vw] max-w-[1000px] animate-fadeIn`}
    >
      <div className="rounded-2xl bg-[#07090e]/98 backdrop-blur-3xl border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden text-left">
        {/* Top Accent Gradient Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#FFD400]/0 via-[#FFD400] to-[#FFD400]/0" />

        {/* Main Grid: 4 Category Columns */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICE_MEGA_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isHovered = hoveredCategory === cat.id;

            return (
              <div
                key={cat.id}
                onMouseEnter={() => setHoveredCategory(cat.id)}
                className="flex flex-col"
              >
                {/* Category Header */}
                <Link
                  href={cat.href}
                  onClick={onClose}
                  prefetch={false}
                  className="group/cat mb-4 pb-3 border-b border-white/10"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? "bg-[#FFD400] text-black scale-110"
                          : "bg-white/[0.06] text-[#FFD400] border border-white/10"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] text-[#FFD400] tracking-widest uppercase">
                      {cat.num}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-[family-name:var(--font-syne)] uppercase tracking-tight group-hover/cat:text-[#FFD400] transition-colors leading-tight">
                    {cat.name}
                  </h4>
                </Link>

                {/* Subcategories List - Clean & Minimal */}
                <ul className="space-y-2 flex-1">
                  {cat.subcategories.map((sub, sIdx) => {
                    return (
                      <li key={sIdx}>
                        <Link
                          href={sub.href}
                          onClick={onClose}
                          prefetch={false}
                          className="group/sub flex items-center justify-between gap-2 py-1.5 px-2 rounded-lg hover:bg-white/[0.05] transition-all"
                        >
                          <span className="text-xs text-neutral-300 group-hover/sub:text-[#FFD400] transition-colors font-medium font-[family-name:var(--font-jakarta)]">
                            {sub.title}
                          </span>
                          <ArrowRight className="w-3 h-3 text-neutral-500 group-hover/sub:text-[#FFD400] opacity-0 group-hover/sub:opacity-100 transition-all" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar - Simplified */}
        <div className="px-8 py-4 bg-black/60 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <Link
            href="/services"
            onClick={onClose}
            prefetch={false}
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#FFD400] transition-colors font-[family-name:var(--font-jakarta)]"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/contact-us"
            onClick={onClose}
            prefetch={false}
            className="inline-flex items-center gap-2 text-[#FFD400] font-bold hover:underline font-[family-name:var(--font-jakarta)]"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
