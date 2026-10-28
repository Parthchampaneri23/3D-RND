import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogById, blogsData } from "@/data/blogsData";
import UnifiedDetailsView, {
  UnifiedDetailItem,
  RelatedItemSummary,
} from "@/components/UnifiedDetailsView";

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

  const unifiedItem: UnifiedDetailItem = {
    id: blog.id,
    index: blog.index,
    title: blog.title,
    subtitle: blog.subtitle,
    tagline: blog.tagline,
    category: blog.category,
    image: blog.image,
    galleryImages: blog.galleryImages,
    author: blog.author,
    date: blog.date,
    readTime: blog.readTime,
    sla: blog.sla,
    badge: blog.badge,
    overview: blog.overview,
    quote: blog.quote,
    deliverables: blog.deliverables,
    scope: blog.scope,
    techStack: blog.techStack,
    faqs: blog.faqs,
  };

  const relatedSummaries: RelatedItemSummary[] = blogsData.map((b) => ({
    id: b.id,
    index: b.index,
    title: b.title,
    category: b.category,
    image: b.image,
    tagline: b.tagline,
  }));

  const prevSummary: RelatedItemSummary | null = prevBlog
    ? {
        id: prevBlog.id,
        index: prevBlog.index,
        title: prevBlog.title,
        category: prevBlog.category,
        image: prevBlog.image,
        tagline: prevBlog.tagline,
      }
    : null;

  const nextSummary: RelatedItemSummary | null = nextBlog
    ? {
        id: nextBlog.id,
        index: nextBlog.index,
        title: nextBlog.title,
        category: nextBlog.category,
        image: nextBlog.image,
        tagline: nextBlog.tagline,
      }
    : null;

  return (
    <UnifiedDetailsView
      type="blog"
      item={unifiedItem}
      allServicesOrItems={relatedSummaries}
      prevItem={prevSummary}
      nextItem={nextSummary}
      parentPath="/blogs"
      parentLabel="Blogs"
    />
  );
}
