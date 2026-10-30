import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { industriesList } from "@/data/industriesData";
import IndustryDetailClientView from "@/components/IndustryDetailClientView";

export function generateStaticParams() {
  return industriesList.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesList.find((item) => item.slug === slug);
  if (!industry) {
    return {
      title: "Industry Not Found | RnD Technosoft",
    };
  }
  return {
    title: `${industry.title} | RnD Technosoft Industry Solutions`,
    description: industry.tagline,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industriesList.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  const currentIndex = industriesList.findIndex((item) => item.slug === slug);
  const nextIndustry = industriesList[(currentIndex + 1) % industriesList.length];

  return (
    <IndustryDetailClientView
      industry={industry}
      nextIndustry={nextIndustry}
    />
  );
}
