import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogById, blogsData } from "@/data/blogsData";
import InsightDetailView from "@/components/InsightDetailView";

export function generateStaticParams() {
  return blogsData.map((b) => ({
    slug: b.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogById(slug);
  if (!blog) {
    return {
      title: "Article Not Found | RnD Technosoft",
    };
  }
  return {
    title: `${blog.title} | RnD Technosoft Engineering Insights`,
    description: blog.tagline,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = getBlogById(slug);

  if (!blog) {
    notFound();
  }

  const currentIndex = blogsData.findIndex((b) => b.id === blog.id);
  const prevBlog = currentIndex > 0 ? blogsData[currentIndex - 1] : null;
  const nextBlog =
    currentIndex < blogsData.length - 1 ? blogsData[currentIndex + 1] : null;

  return (
    <InsightDetailView
      article={blog}
      allArticles={blogsData}
      prevArticle={prevBlog}
      nextArticle={nextBlog}
    />
  );
}
