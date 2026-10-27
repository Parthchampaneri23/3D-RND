import { notFound } from "next/navigation";
import { getServiceById, servicesData } from "@/data/servicesData";
import ServiceDetailsView from "@/components/ServiceDetailsView";
import type { Metadata } from "next";

export function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) {
    return {
      title: "Service Not Found | NovaTech",
    };
  }
  return {
    title: `${service.title} ${service.highlightText} | NovaTech Digital Engineering`,
    description: service.tagline,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceById(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailsView service={service} />;
}
