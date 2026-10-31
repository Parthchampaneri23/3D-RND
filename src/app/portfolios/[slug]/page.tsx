import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getPortfolioById,
  portfolioData,
  getRelatedPortfolios,
} from "@/data/portfolioData";
import PortfolioDetailView from "@/components/PortfolioDetailView";

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
    title: `${project.title} — ${project.category} | RnD Technosoft Case Study`,
    description: project.summary || project.tagline,
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

  const relatedProjects = getRelatedPortfolios(project.id, 3);

  return (
    <PortfolioDetailView
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
      relatedProjects={relatedProjects}
    />
  );
}
