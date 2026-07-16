import type { MetadataRoute } from "next";

import { apartments } from "@/data/apartments";
import { site } from "@/data/site";
import { getAllGuides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const guides = getAllGuides();

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${site.url}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${site.url}/guides`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    ...apartments.map((apartment) => ({
      url: `${site.url}/apartments/${apartment.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    ...guides.map((guide) => ({
      url: `${site.url}/guides/${guide.slug}`,
      lastModified: guide.publishedAt
        ? new Date(guide.publishedAt)
        : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}