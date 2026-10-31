import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CategorySubcategoryServicePage, {
  generateMetadata as getSubcategoryMetadata,
  generateStaticParams as getSubcategoryStaticParams,
} from "../../[category]/[subcategory]/page";

export function generateStaticParams() {
  const allParams = getSubcategoryStaticParams();
  return allParams
    .filter((p) => p.category === "technology-solution")
    .map((p) => ({ subcategory: p.subcategory }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subcategory: string }>;
}): Promise<Metadata> {
  const { subcategory } = await params;
  return getSubcategoryMetadata({
    params: Promise.resolve({
      category: "technology-solution",
      subcategory,
    }),
  });
}

export default async function TechnologySubcategoryPage({
  params,
}: {
  params: Promise<{ subcategory: string }>;
}) {
  const { subcategory } = await params;
  return (
    <CategorySubcategoryServicePage
      params={Promise.resolve({
        category: "technology-solution",
        subcategory,
      })}
    />
  );
}

