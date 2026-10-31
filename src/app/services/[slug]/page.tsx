import { redirect, notFound } from "next/navigation";
import { getServiceById, servicesData } from "@/data/servicesData";
import type { Metadata } from "next";

const SERVICE_REDIRECTS: Record<string, string> = {
  "ecommerce-platforms": "/technology-solution/ecommerce-platform-engineering",
  "ecommerce-platform-engineering": "/technology-solution/ecommerce-platform-engineering",
  "web-cloud": "/technology-solution/cloud-infrastructure-devops",
  "cloud-infrastructure-devops": "/technology-solution/cloud-infrastructure-devops",
  "enterprise-software-solutions": "/technology-solution/enterprise-software-solutions",
  "mobile-apps": "/technology-solution/mobile-applications",
  "mobile-applications": "/technology-solution/mobile-applications",
  "web-development": "/technology-solution/web-development",
  "seo-search": "/digital-marketing/technical-seo-dominance",
  "technical-seo-dominance": "/digital-marketing/technical-seo-dominance",
  "performance-ppc-advertising": "/digital-marketing/performance-ppc-advertising",
  "social-media": "/digital-marketing/social-media-management",
  "social-media-management": "/digital-marketing/social-media-management",
  "content-strategy-production": "/digital-marketing/content-strategy-production",
  "brand-identity": "/branding-design/brand-identity-systems",
  "brand-identity-systems": "/branding-design/brand-identity-systems",
  "ui-ux-spatial-design": "/branding-design/ui-ux-spatial-design",
  "commercial-media": "/media-production/commercial-video-production",
  "commercial-video-production": "/media-production/commercial-video-production",
  "motion-graphics-3d-cgi": "/media-production/motion-graphics-3d-cgi",
  "dedicated-squads": "/media-production/dedicated-squads",
};

export function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);

  return {
    title: service
      ? `${service.title} | RnD Technosoft`
      : "Service Redirect | RnD Technosoft",
    description: service?.tagline || "Service capabilities overview",
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const target = SERVICE_REDIRECTS[slug];

  if (target) {
    redirect(target);
  }

  notFound();
}
