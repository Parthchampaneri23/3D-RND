import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceById, ServiceDetail } from "@/data/servicesData";
import ServiceDetailsView from "@/components/ServiceDetailsView";

interface SubcategoryConfig {
  baseId: string;
  title: string;
  highlightText: string;
  tagline: string;
  sla: string;
  category: string;
  image?: string;
  badge?: string;
}

const SUBCATEGORY_CONFIGS: Record<string, SubcategoryConfig> = {
  // Technology Solutions
  "web-development": {
    baseId: "web-cloud",
    title: "Custom Web Development",
    highlightText: "& React 19 Architecture",
    tagline:
      "High-performance full-stack web platforms, edge-rendered Next.js 15 architectures, dynamic 3D web experiences, and micro-interactive enterprise portals.",
    sla: "99.99% UPTIME SLA",
    category: "Technology Solutions",
    image: "/images/service_webdev.jpg",
    badge: "NEXT.JS 15 // EDGE NATIVE",
  },
  "cloud-infrastructure-devops": {
    baseId: "web-cloud",
    title: "Cloud Infrastructure & DevOps",
    highlightText: "& Multi-Region Resilience",
    tagline:
      "Kubernetes orchestration, automated CI/CD pipelines, multi-region redundancy, and bank-grade AWS/GCP cloud resilience.",
    sla: "<15m INCIDENT RESPONSE",
    category: "Technology Solutions",
    image: "/images/service_cloud_color.jpg",
    badge: "KUBERNETES // ZERO DOWNTIME",
  },
  "enterprise-software-solutions": {
    baseId: "web-cloud",
    title: "Enterprise Software Solutions",
    highlightText: "& Scalable Backends",
    tagline:
      "Bespoke SaaS architectures, high-load backends, internal operations software, and mission-critical database scaling.",
    sla: "100% IP OWNERSHIP",
    category: "Technology Solutions",
    image: "/images/nebula_cloud_os_3d.jpg",
    badge: "SOC2 COMPLIANT // ENTERPRISE SAAS",
  },
  "ecommerce-platform-engineering": {
    baseId: "ecommerce-platforms",
    title: "E-Commerce Platform Engineering",
    highlightText: "& Headless Storefronts",
    tagline:
      "Headless Shopify Plus and custom checkout engines optimized for high-volume flash sales and compounding conversion rates.",
    sla: "1.2s CHECKOUT SPEED",
    category: "Technology Solutions",
    image: "/images/service_branding.jpg",
    badge: "SHOPIFY PLUS // SUB-SECOND CHECKOUT",
  },
  "mobile-applications": {
    baseId: "mobile-apps",
    title: "Mobile Application Engineering",
    highlightText: "& 60 FPS Native Fluidity",
    tagline:
      "High-performance cross-platform and native mobile apps built with Flutter and React Native, featuring offline-first data sync.",
    sla: "60 FPS NATIVE FLUIDITY",
    category: "Technology Solutions",
    image: "/images/service_webdev.jpg",
  },
  "microservices-api-mesh": {
    baseId: "web-cloud",
    title: "Distributed Microservices & APIs",
    highlightText: "& Event-Driven Mesh",
    tagline:
      "Decoupled distributed services communicating via high-throughput gRPC and Kafka event streams.",
    sla: "10K+ QPS PER NODE",
    category: "Technology Solutions",
    image: "/images/project_ai.jpg",
  },

  // Digital Marketing
  "technical-seo-dominance": {
    baseId: "seo-search",
    title: "Technical SEO & Search Dominance",
    highlightText: "& Algorithmic Graphs",
    tagline:
      "Algorithmic keyword clusters, programmatic internal linking, crawl budget optimization, and top-3 organic ranking capture.",
    sla: "+180% TRAFFIC SURGE",
    category: "Digital Marketing",
    image: "/images/service_marketing.jpg",
    badge: "SERP DOMINANCE // SCHEMA 2026",
  },
  "performance-ppc-advertising": {
    baseId: "seo-search",
    title: "Performance PPC & Paid Media",
    highlightText: "& ROAS Optimization",
    tagline:
      "High-ROI paid search and social campaigns across Google Ads, Meta, and TikTok with real-time ROAS telemetry dashboards.",
    sla: "8.4x AVG ROAS",
    category: "Digital Marketing",
    image: "/images/service_marketing.jpg",
    badge: "MULTI-CHANNEL ATTRIBUTION",
  },
  "social-media-management": {
    baseId: "social-media",
    title: "Social Media Strategy & Management",
    highlightText: "& Viral Community Growth",
    tagline:
      "Viral organic community building, platform-specific content cadence, and influencer amplification that establishes brand authority.",
    sla: "100% ORGANIC-DRIVEN",
    category: "Digital Marketing",
    image: "/images/service_marketing.jpg",
    badge: "COMMUNITY FIRST",
  },
  "content-strategy-production": {
    baseId: "social-media",
    title: "Content Strategy & Copywriting",
    highlightText: "& Editorial Authority",
    tagline:
      "High-authority editorial briefs, thought leadership articles, and high-converting commercial copy crafted for your target buyer persona.",
    sla: "CONVERSION-FIRST",
    category: "Digital Marketing",
    image: "/images/service_marketing.jpg",
    badge: "EDITORIAL PERFECTION",
  },

  // Branding & Design
  "brand-identity-systems": {
    baseId: "brand-identity",
    title: "Brand Identity & Design Systems",
    highlightText: "& Vector Design Tokens",
    tagline:
      "Comprehensive brand identity guidelines, modern logos, typography scales, color palettes, and unified design token architectures.",
    sla: "PRODUCTION-READY",
    category: "Branding & Design",
    image: "/images/service_branding.jpg",
    badge: "DESIGN SYSTEMS // FIGMA TOKENS",
  },
  "ui-ux-spatial-design": {
    baseId: "brand-identity",
    title: "UI/UX & Spatial Web Architecture",
    highlightText: "& 60 FPS Micro-Interactions",
    tagline:
      "Next-gen user journeys, micro-interactive prototypes, and 3D web interfaces mapped through rigorous usability heatmaps.",
    sla: "60 FPS INTERACTION",
    category: "Branding & Design",
    image: "/images/service_branding.jpg",
    badge: "SPATIAL 3D // HUMAN-CENTRIC",
  },

  // Media Production
  "commercial-video-production": {
    baseId: "commercial-media",
    title: "Commercial Video & Brand Films",
    highlightText: "& 8K Cinema Production",
    tagline:
      "End-to-end commercial productions: scriptwriting, 4K/8K cinematography, sound engineering, and multi-platform promotional edits.",
    sla: "CINEMA-GRADE 4K/8K",
    category: "Media Production",
    image: "/images/service_media.jpg",
    badge: "RED 8K // CINEMA PRODUCTION",
  },
  "motion-graphics-3d-cgi": {
    baseId: "commercial-media",
    title: "3D CGI & Motion Graphics",
    highlightText: "& Spatial Visual Effects",
    tagline:
      "Photorealistic 3D product animations, kinetic typography, dynamic HUD holograms, and spatial VFX for web and commercials.",
    sla: "PHOTOREALISTIC",
    category: "Media Production",
    image: "/images/service_media.jpg",
    badge: "BLENDER 3D // UNREAL ENGINE",
  },
};

const CATEGORY_META: Record<
  string,
  { parentPath: string; parentLabel: string; categoryName: string }
> = {
  "technology-solution": {
    parentPath: "/technology-solution",
    parentLabel: "Technology Solutions",
    categoryName: "Technology Solutions",
  },
  "technology-solutions": {
    parentPath: "/technology-solution",
    parentLabel: "Technology Solutions",
    categoryName: "Technology Solutions",
  },
  "digital-marketing": {
    parentPath: "/services#digital-marketing",
    parentLabel: "Digital Marketing",
    categoryName: "Digital Marketing",
  },
  "branding-design": {
    parentPath: "/services#branding-design",
    parentLabel: "Branding & Design",
    categoryName: "Branding & Design",
  },
  "media-production": {
    parentPath: "/services#media-production",
    parentLabel: "Media Production",
    categoryName: "Media Production",
  },
};

function resolveService(
  category: string,
  subcategory: string
): { service: ServiceDetail; parentPath: string; parentLabel: string } | null {
  const catMeta = CATEGORY_META[category];
  if (!catMeta) return null;

  // Check if subcategory has a dedicated config
  const customConfig = SUBCATEGORY_CONFIGS[subcategory];
  if (customConfig) {
    const baseService = getServiceById(customConfig.baseId);
    if (!baseService) return null;

    const mergedService: ServiceDetail = {
      ...baseService,
      id: subcategory,
      title: customConfig.title,
      highlightText: customConfig.highlightText,
      tagline: customConfig.tagline,
      sla: customConfig.sla,
      category: customConfig.category || catMeta.categoryName,
      image: customConfig.image || baseService.image,
      badge: customConfig.badge || baseService.badge,
    };

    return {
      service: mergedService,
      parentPath: catMeta.parentPath,
      parentLabel: catMeta.parentLabel,
    };
  }

  // Check if subcategory is a direct service ID
  const directService = getServiceById(subcategory);
  if (directService) {
    return {
      service: {
        ...directService,
        category: catMeta.categoryName,
      },
      parentPath: catMeta.parentPath,
      parentLabel: catMeta.parentLabel,
    };
  }

  return null;
}

export function generateStaticParams() {
  const routes: { category: string; subcategory: string }[] = [];

  const categories = [
    "technology-solution",
    "technology-solutions",
    "digital-marketing",
    "branding-design",
    "media-production",
  ];

  const subcategoriesByCategory: Record<string, string[]> = {
    "technology-solution": [
      "cloud-infrastructure-devops",
      "enterprise-software-solutions",
      "ecommerce-platform-engineering",
      "web-cloud",
      "ecommerce-platforms",
      "mobile-apps",
      "mobile-applications",
      "microservices-api-mesh",
    ],
    "technology-solutions": [
      "cloud-infrastructure-devops",
      "enterprise-software-solutions",
      "ecommerce-platform-engineering",
      "web-cloud",
      "ecommerce-platforms",
      "mobile-apps",
    ],
    "digital-marketing": [
      "technical-seo-dominance",
      "performance-ppc-advertising",
      "social-media-management",
      "content-strategy-production",
      "seo-search",
      "social-media",
    ],
    "branding-design": [
      "brand-identity-systems",
      "ui-ux-spatial-design",
      "brand-identity",
      "commercial-media",
    ],
    "media-production": [
      "commercial-video-production",
      "motion-graphics-3d-cgi",
      "commercial-media",
      "dedicated-squads",
    ],
  };

  categories.forEach((cat) => {
    const subs = subcategoriesByCategory[cat] || [];
    subs.forEach((sub) => {
      routes.push({ category: cat, subcategory: sub });
    });
  });

  return routes;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}): Promise<Metadata> {
  const { category, subcategory } = await params;
  const resolved = resolveService(category, subcategory);

  if (!resolved) {
    return {
      title: "Service Not Found | RnD Technosoft",
    };
  }

  return {
    title: `${resolved.service.title} ${resolved.service.highlightText} | ${resolved.parentLabel}`,
    description: resolved.service.tagline,
  };
}

export default async function CategorySubcategoryServicePage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const { category, subcategory } = await params;
  const resolved = resolveService(category, subcategory);

  if (!resolved) {
    notFound();
  }

  return (
    <ServiceDetailsView
      service={resolved.service}
      parentPath={resolved.parentPath}
      parentLabel={resolved.parentLabel}
    />
  );
}

