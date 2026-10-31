"use client";

import React from "react";
import UnifiedDetailsView, {
  UnifiedDetailItem,
  RelatedItemSummary,
} from "./UnifiedDetailsView";
import { ServiceDetail, servicesData } from "@/data/servicesData";

interface ServiceDetailsViewProps {
  service: ServiceDetail;
  parentPath?: string;
  parentLabel?: string;
}

export default function ServiceDetailsView({
  service,
  parentPath = "/services",
  parentLabel = "Services",
}: ServiceDetailsViewProps) {
  // Find index for prev/next navigation
  const currentIndex = servicesData.findIndex((s) => s.id === service.id);
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService =
    currentIndex < servicesData.length - 1
      ? servicesData[currentIndex + 1]
      : null;

  // Convert service architecture pillars to scope modules
  const scopeModules = service.architecturePillars.map((p, idx) => ({
    number: `0${idx + 1}`,
    title: p.title,
    desc: p.desc,
    iconName: p.iconName,
  }));

  // Normalize gallery images with relevant IT images
  const galleryImages = [
    service.image || "/images/service_webdev.jpg",
    service.category === "AI & Data"
      ? "/images/project_ai.jpg"
      : service.category === "Digital Marketing"
      ? "/images/service_marketing.jpg"
      : service.category === "Design"
      ? "/images/service_branding.jpg"
      : service.category === "Media"
      ? "/images/service_media.jpg"
      : "/images/nebula_cloud_os_3d.jpg",
  ];

  // Map to unified item
  const unifiedItem: UnifiedDetailItem = {
    id: service.id,
    index: service.index.replace(/[\[\]]/g, ""),
    title: service.title,
    highlightText: service.highlightText,
    tagline: service.tagline,
    category: service.category,
    image: service.image,
    galleryImages,
    sla: service.sla,
    badge: service.badge,
    overview: service.overview,
    quote: {
      text: service.caseStudy?.desc
        ? service.caseStudy.desc
        : "Every microservice, 3D viewport, and cloud infrastructure pipeline is benchmarked and verified before deployment.",
      author: `${service.caseStudy?.client || "RnD Enterprise Client"} • Verified SLA`,
    },
    deliverables: service.deliverables.map((d) => ({
      item: d.item,
      detail: d.detail,
      standard: d.standard,
    })),
    scope: scopeModules,
    techStack: service.techStack,
    faqs: service.faqs,
    beforeAfter: service.beforeAfter,
  };

  // Map all services for the related section
  const relatedSummaries: RelatedItemSummary[] = servicesData.map((s) => ({
    id: s.id,
    index: s.index.replace(/[\[\]]/g, ""),
    title: `${s.title} ${s.highlightText}`,
    category: s.category,
    image: s.image,
    tagline: s.tagline,
  }));

  const prevSummary: RelatedItemSummary | null = prevService
    ? {
        id: prevService.id,
        index: prevService.index.replace(/[\[\]]/g, ""),
        title: `${prevService.title} ${prevService.highlightText}`,
        category: prevService.category,
        image: prevService.image,
        tagline: prevService.tagline,
      }
    : null;

  const nextSummary: RelatedItemSummary | null = nextService
    ? {
        id: nextService.id,
        index: nextService.index.replace(/[\[\]]/g, ""),
        title: `${nextService.title} ${nextService.highlightText}`,
        category: nextService.category,
        image: nextService.image,
        tagline: nextService.tagline,
      }
    : null;

  return (
    <UnifiedDetailsView
      type="service"
      item={unifiedItem}
      allServicesOrItems={relatedSummaries}
      prevItem={prevSummary}
      nextItem={nextSummary}
      parentPath={parentPath}
      parentLabel={parentLabel}
    />
  );
}
