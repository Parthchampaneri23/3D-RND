import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPortfolioById, portfolioData } from "@/data/portfolioData";
import UnifiedDetailsView, {
  UnifiedDetailItem,
  RelatedItemSummary,
} from "@/components/UnifiedDetailsView";

export function generateStaticParams() {
  return portfolioData.map((p) => ({
    slug: p.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioById(slug);
  if (!project) {
    return {
      title: "Project Not Found | RnD Technosoft",
    };
  }
  return {
    title: `${project.title} | RnD Technosoft Case Study`,
    description: project.tagline,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getPortfolioById(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = portfolioData.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? portfolioData[currentIndex - 1] : null;
  const nextProject =
    currentIndex < portfolioData.length - 1
      ? portfolioData[currentIndex + 1]
      : null;

  const unifiedItem: UnifiedDetailItem = {
    id: project.id,
    index: project.index,
    title: project.title,
    tagline: project.tagline,
    category: project.category,
    image: project.image,
    galleryImages: project.galleryImages,
    client: project.client,
    year: project.year,
    sla: project.sla,
    badge: project.badge,
    overview: project.overview,
    quote: project.quote,
    deliverables: project.deliverables,
    scope: project.scope,
    techStack: project.techStack,
    faqs: project.faqs,
    beforeAfter: project.beforeAfter,
  };

  const relatedSummaries: RelatedItemSummary[] = portfolioData.map((p) => ({
    id: p.id,
    index: p.index,
    title: p.title,
    category: p.category,
    image: p.image,
    tagline: p.tagline,
  }));

  const prevSummary: RelatedItemSummary | null = prevProject
    ? {
        id: prevProject.id,
        index: prevProject.index,
        title: prevProject.title,
        category: prevProject.category,
        image: prevProject.image,
        tagline: prevProject.tagline,
      }
    : null;

  const nextSummary: RelatedItemSummary | null = nextProject
    ? {
        id: nextProject.id,
        index: nextProject.index,
        title: nextProject.title,
        category: nextProject.category,
        image: nextProject.image,
        tagline: nextProject.tagline,
      }
    : null;

  return (
    <UnifiedDetailsView
      type="portfolio"
      item={unifiedItem}
      allServicesOrItems={relatedSummaries}
      prevItem={prevSummary}
      nextItem={nextSummary}
      parentPath="/portfolios"
      parentLabel="Portfolio"
    />
  );
}
