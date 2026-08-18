import type { MetadataRoute } from "next";
import { getCaseStudies, siteUrl } from "@/content/profile";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...getCaseStudies().map((project) => ({
      url: `${siteUrl}/work/${project.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
