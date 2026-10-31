import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";

const CATEGORY_CONFIG: Record<
  string,
  { name: string; redirectTo?: string }
> = {
  "technology-solution": {
    name: "Technology Solutions",
    redirectTo: "/technology-solution",
  },
  "technology-solutions": {
    name: "Technology Solutions",
    redirectTo: "/technology-solution",
  },
  "digital-marketing": {
    name: "Digital Marketing",
    redirectTo: "/services#digital-marketing",
  },
  "branding-design": {
    name: "Branding & Design",
    redirectTo: "/services#branding-design",
  },
  "media-production": {
    name: "Media Production",
    redirectTo: "/services#media-production",
  },
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_CONFIG).map((category) => ({
    category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const config = CATEGORY_CONFIG[category];

  if (!config) {
    return {
      title: "Category Not Found | RnD Technosoft",
    };
  }

  return {
    title: `${config.name} Services | RnD Technosoft`,
    description: `Explore our ${config.name} services and solutions.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const config = CATEGORY_CONFIG[category];

  if (!config) {
    notFound();
  }

  // Redirect to the appropriate page
  if (config.redirectTo) {
    redirect(config.redirectTo);
  }

  notFound();
}
