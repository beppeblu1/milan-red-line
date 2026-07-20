import ApartmentContextCard from "@/components/guides/ApartmentContextCard";
import GoodToKnow from "@/components/guides/GoodToKnow";
import {
  GuideFaq,
  GuideFaqItem,
} from "@/components/guides/GuideFaq";
import GuideContentRenderer from "@/components/guides/GuideContentRenderer";
import GuidePanoramicImage from "@/components/guides/GuidePanoramicImage";
import GuideSectionHeading from "@/components/guides/GuideSectionHeading";
import GuideTableOfContents from "@/components/guides/GuideTableOfContents";
import RelatedGuidesBox from "@/components/guides/RelatedGuidesBox";

type PilotGuideLayoutProps = {
  source: string;
  heroImage?: string;
  heroImageAlt?: string;
};

type GuideSectionIcon =
  | "calendar"
  | "help"
  | "lightbulb"
  | "train"
  | "users";

type FaqItem = {
  question: string;
  answer: string;
};

type ContentSection = {
  id: string;
  title: string;
  source: string;
  icon?: GuideSectionIcon;
};

type TableOfContentsItem = {
  label: string;
  href: `#${string}`;
};

type ReadingExperienceSections = {
  introduction: string;
  audience: ContentSection;
  keyPoints: ContentSection;
  areaSelection: ContentSection;
  transport: ContentSection;
  localArea: ContentSection;
  dayTrips: ContentSection;
  localTip: ContentSection;
  faq: {
    id: string;
    title: string;
    items: FaqItem[];
    icon?: GuideSectionIcon;
  };
  planning: ContentSection;
  goodToKnow: string;
};

const requiredSectionNames = [
  "introduction",
  "audience",
  "key-points",
  "area-selection",
  "transport",
  "local-area",
  "day-trips",
  "local-tip",
  "faq",
  "planning",
  "good-to-know",
] as const;

export default function PilotGuideLayout({
  source,
  heroImage,
  heroImageAlt,
}: PilotGuideLayoutProps) {
  const sections = parseReadingExperienceSections(source);

  const tableOfContentsItems: TableOfContentsItem[] = [
    sections.audience,
    sections.keyPoints,
    sections.areaSelection,
    sections.transport,
    sections.localArea,
    sections.dayTrips,
    {
      id: sections.faq.id,
      title: sections.faq.title,
      source: "",
    },
  ].map((section) => ({
    label: section.title,
    href: `#${section.id}` as `#${string}`,
  }));

  return (
    <>
      <GuideContentRenderer
        source={sections.introduction}
        showEditorialLeadConnector
      />

      <GuideTableOfContents items={tableOfContentsItems} />

      {heroImage && heroImageAlt && (
        <GuidePanoramicImage src={heroImage} alt={heroImageAlt} />
      )}

      <GuideSection section={sections.audience} />

      <GuideSection section={sections.keyPoints} />

      <GuideSection section={sections.areaSelection} />

      <GuideSection section={sections.transport} />

      <GuideSection section={sections.localArea} />

      <ApartmentContextCard
        slugs={["arco", "gramsci"]}
        title="A practical base in Sesto San Giovanni"
      >
        Both Milan Red Line apartments are located in Sesto San Giovanni, with
        convenient access to the M1 Red Line, local railway connections and
        everyday services.
      </ApartmentContextCard>

      <GuideSection section={sections.dayTrips} />

      <GuideSection section={sections.localTip} />

      <GuideSectionHeading
        id={sections.faq.id}
        icon={sections.faq.icon}
      >
        {sections.faq.title}
      </GuideSectionHeading>

      <GuideFaq>
        {sections.faq.items.map((item) => (
          <GuideFaqItem key={item.question} question={item.question}>
            <GuideContentRenderer source={item.answer} />
          </GuideFaqItem>
        ))}
      </GuideFaq>

      <GuideSection section={sections.planning} />

      <GoodToKnow>
        <GuideContentRenderer source={sections.goodToKnow} />
      </GoodToKnow>

      <RelatedGuidesBox
        slugs={[
          "where-to-stay-in-milan-without-a-car",
          "where-to-stay-near-the-m1-red-line",
          "is-sesto-san-giovanni-a-good-place-to-stay",
        ]}
      />
    </>
  );
}

type GuideSectionProps = {
  section: ContentSection;
};

function GuideSection({ section }: GuideSectionProps) {
  return (
    <>
      <GuideSectionHeading
        id={section.id}
        icon={section.icon}
      >
        {section.title}
      </GuideSectionHeading>

      <GuideContentRenderer source={section.source} />
    </>
  );
}

function parseReadingExperienceSections(
  source: string,
): ReadingExperienceSections {
  const markedSections = extractMarkedSections(source);

  for (const sectionName of requiredSectionNames) {
    if (!markedSections.has(sectionName)) {
      throw new Error(
        `Required Reading Experience section marker not found: "${sectionName}"`,
      );
    }
  }

  const faqSection = parseContentSection(
    getRequiredSection(markedSections, "faq"),
    "Frequently asked questions",
  );

  return {
    introduction: getRequiredSection(markedSections, "introduction"),

    audience: {
      ...parseContentSection(
        getRequiredSection(markedSections, "audience"),
        "Who is this guide for?",
      ),
      icon: "users",
    },

    keyPoints: parseContentSection(
      getRequiredSection(markedSections, "key-points"),
      "Key points",
    ),

    areaSelection: parseContentSection(
      getRequiredSection(markedSections, "area-selection"),
      "Choosing the right option",
    ),

    transport: {
      ...parseContentSection(
        getRequiredSection(markedSections, "transport"),
        "Getting around",
      ),
      icon: "train",
    },

    localArea: parseContentSection(
      getRequiredSection(markedSections, "local-area"),
      "Why consider Sesto San Giovanni",
    ),

    dayTrips: parseContentSection(
      getRequiredSection(markedSections, "day-trips"),
      "Planning your day",
    ),

    localTip: {
      ...parseContentSection(
        getRequiredSection(markedSections, "local-tip"),
        "Local tip",
      ),
      icon: "lightbulb",
    },

    faq: {
      id: faqSection.id,
      title: faqSection.title,
      items: parseFaqItems(faqSection.source),
      icon: "help",
    },

    planning: {
      ...parseContentSection(
        getRequiredSection(markedSections, "planning"),
        "Planning your stay?",
      ),
      icon: "calendar",
    },

    goodToKnow: cleanGoodToKnowSection(
      getRequiredSection(markedSections, "good-to-know"),
    ),
  };
}

function extractMarkedSections(source: string): Map<string, string> {
  const normalizedSource = source.replace(/\r\n/g, "\n").trim();

  const markerPattern = /\{\/\*\s*rx:([a-z0-9-]+)\s*\*\/\}/g;
  const matches = Array.from(normalizedSource.matchAll(markerPattern));

  if (matches.length === 0) {
    throw new Error("No Reading Experience section markers found.");
  }

  const sections = new Map<string, string>();

  matches.forEach((match, index) => {
    const sectionName = match[1];
    const contentStart = (match.index ?? 0) + match[0].length;
    const nextMatch = matches[index + 1];
    const contentEnd = nextMatch?.index ?? normalizedSource.length;

    if (sections.has(sectionName)) {
      throw new Error(
        `Duplicate Reading Experience section marker: "${sectionName}"`,
      );
    }

    sections.set(
      sectionName,
      normalizedSource.slice(contentStart, contentEnd).trim(),
    );
  });

  return sections;
}

function getRequiredSection(
  sections: Map<string, string>,
  sectionName: string,
): string {
  const section = sections.get(sectionName);

  if (section === undefined) {
    throw new Error(
      `Required Reading Experience section marker not found: "${sectionName}"`,
    );
  }

  return section;
}

function parseContentSection(
  source: string,
  fallbackTitle: string,
): ContentSection {
  const normalizedSource = source.trim();
  const headingMatch = normalizedSource.match(/^##\s+(.+?)(?:\n+|$)/);

  const title = headingMatch?.[1]?.trim() || fallbackTitle;

  const content = headingMatch
    ? normalizedSource.slice(headingMatch[0].length).trim()
    : normalizedSource;

  return {
    id: createHeadingId(title),
    title,
    source: content,
  };
}

function createHeadingId(title: string): string {
  const normalizedId = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalizedId || "guide-section";
}

function parseFaqItems(source: string): FaqItem[] {
  const questionPattern = /^### (.+)$/gm;
  const matches = Array.from(source.matchAll(questionPattern));

  if (matches.length === 0) {
    throw new Error("No FAQ items found in the Reading Experience guide.");
  }

  return matches.map((match, index) => {
    const question = match[1]?.trim();
    const answerStart = (match.index ?? 0) + match[0].length;
    const nextMatch = matches[index + 1];
    const answerEnd = nextMatch?.index ?? source.length;
    const answer = source.slice(answerStart, answerEnd).trim();

    if (!question || !answer) {
      throw new Error("An FAQ item is missing its question or answer.");
    }

    return {
      question,
      answer,
    };
  });
}

function cleanGoodToKnowSection(source: string): string {
  return source
    .replace(/^---\s*/m, "")
    .replace(/^###\s+Good to know\s*/m, "")
    .trim();
}