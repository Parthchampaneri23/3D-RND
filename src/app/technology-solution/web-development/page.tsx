import type { Metadata } from "next";
import UnifiedDetailsView from "@/components/UnifiedDetailsView";
import {
  webDevelopmentUnifiedDetail,
  technologyRelatedSummaries,
} from "@/data/technologySolutionsData";

export const metadata: Metadata = {
  title: "Custom Web Development & React 19 Architecture | Technology Solutions",
  description:
    "Ultra-scalable Next.js 15, React 19, and TypeScript web development engineered for 90+ Core Web Vitals, dynamic 60 FPS spatial interactions, and high-concurrency enterprise workloads.",
};

export default function WebDevelopmentDetailsPage() {
  const prevSummary = technologyRelatedSummaries[technologyRelatedSummaries.length - 1];
  const nextSummary = technologyRelatedSummaries[1];

  return (
    <UnifiedDetailsView
      type="service"
      item={webDevelopmentUnifiedDetail}
      allServicesOrItems={technologyRelatedSummaries}
      prevItem={prevSummary}
      nextItem={nextSummary}
      parentPath="/technology-solution"
      parentLabel="Technology Solutions"
    />
  );
}
