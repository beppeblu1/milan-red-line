import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

export type GuideLayout = "standard" | "reading-experience-pilot";

export type GuideMetadata = {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
  publishedAt: string;
  author: string;
  layout: GuideLayout;
};

export type Guide = {
  metadata: GuideMetadata;
  content: string;
};

const guidesDirectory = path.join(process.cwd(), "content", "guides");

function getGuideFilePath(slug: string): string {
  return path.join(guidesDirectory, `${slug}.mdx`);
}

function parseGuideLayout(value: unknown): GuideLayout {
  if (value === "reading-experience-pilot") {
    return value;
  }

  return "standard";
}

function parseGuideFile(fileName: string): Guide {
  const slug = fileName.replace(/\.mdx$/, "");
  const filePath = path.join(guidesDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const metadata: GuideMetadata = {
    slug,
    title: String(data.title ?? ""),
    description: String(data.description ?? ""),
    readingTime: String(data.readingTime ?? ""),
    publishedAt: String(data.publishedAt ?? ""),
    author: String(data.author ?? "Milan Red Line"),
    layout: parseGuideLayout(data.layout),
  };

  if (!metadata.title || !metadata.description) {
    throw new Error(
      `The guide "${fileName}" must contain title and description in its frontmatter.`,
    );
  }

  return {
    metadata,
    content,
  };
}

export function getGuideSlugs(): string[] {
  if (!fs.existsSync(guidesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(guidesDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getAllGuides(): GuideMetadata[] {
  if (!fs.existsSync(guidesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(guidesDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => parseGuideFile(fileName).metadata)
    .sort((firstGuide, secondGuide) => {
      return (
        new Date(secondGuide.publishedAt).getTime() -
        new Date(firstGuide.publishedAt).getTime()
      );
    });
}

export function getGuideBySlug(slug: string): Guide | null {
  const filePath = getGuideFilePath(slug);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return parseGuideFile(`${slug}.mdx`);
}

export function getLatestGuide(): GuideMetadata | null {
  const guides = getAllGuides();

  return guides.length > 0 ? guides[0] : null;
}