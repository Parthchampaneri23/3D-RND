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
      robots: "noindex, nofollow",
    };
  }

  const pageUrl = `https://rndtechnosoft.com/industries/${industry.slug}`;
  const metaDescription = `${industry.shortInfo.slice(0, 155)}...`;

  return {
    title: `${industry.title} Software Solutions & 3D Engineering | RnD Technosoft`,
    description: metaDescription,
    keywords: [
      industry.title,
      `${industry.title} software solutions`,
      industry.category,
      industry.badge,
      "RnD Technosoft",
      "Enterprise 3D WebGL",
      "Digital Twin Engineering",
      "Industry Solutions",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${industry.title} | RnD Technosoft Industry Solutions`,
      description: metaDescription,
      url: pageUrl,
      siteName: "RnD Technosoft",
      type: "website",
      images: [
        {
          url: industry.works[0]?.image || "/images/nebula_cloud_os_3d.jpg",
          width: 1200,
          height: 630,
          alt: `${industry.title} Architecture Solutions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.title} Software & 3D WebGL | RnD Technosoft`,
      description: metaDescription,
      images: [industry.works[0]?.image || "/images/nebula_cloud_os_3d.jpg"],
    },
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
