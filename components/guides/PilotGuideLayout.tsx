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

type FaqItem = {
  question: string;
  answer: string;
};

type ReadingExperienceSections = {
  introduction: string;
  audience: string;
  keyPoints: string;
  areaSelection: string;
  transport: string;
  localArea: string;
  dayTrips: string;
  localTip: string;
  faq: FaqItem[];
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

  return (
    <>
      <GuideContentRenderer source={sections.introduction} />

      <GuideTableOfContents
        items={[
          {
            label: "Who this guide is for",
            href: "#who-is-this-guide-for",
          },
          {
            label: "Which areas to consider",
            href: "#which-areas-to-consider",
          },
          {
            label: "Why transport connections matter",
            href: "#why-transport-connections-matter",
          },
          {
            label: "Why consider Sesto San Giovanni",
            href: "#why-sesto-san-giovanni",
          },
          {
            label: "Frequently asked questions",
            href: "#frequently-asked-questions",
          },
        ]}
      />

      {heroImage && heroImageAlt && (
        <GuidePanoramicImage
          src={heroImage}
          alt={heroImageAlt}
        />
      )}

      <GuideSection
        id="who-is-this-guide-for"
        title="Who is this guide for?"
        source={sections.audience}
      />

      <GuideSection
        id="what-first-time-visitors-want"
        title="What first-time visitors usually want"
        source={sections.keyPoints}
      />

      <GuideSection
        id="which-areas-to-consider"
        title="Which areas should you consider?"
        source={sections.areaSelection}
      />

      <GuideSection
        id="why-transport-connections-matter"
        title="Why transport connections matter"
        source={sections.transport}
      />

      <GuideSection
        id="why-sesto-san-giovanni"
        title="Why Sesto San Giovanni is worth considering"
        source={sections.localArea}
      />

      <ApartmentContextCard
        slugs={["arco", "gramsci"]}
        title="A practical base near the M1 Red Line"
      >
        Both Milan Red Line apartments are located in Sesto San Giovanni, with
        convenient access to the M1 Red Line and everyday local services.
      </ApartmentContextCard>

      <GuideSection
        id="beyond-the-city-centre"
        title="Beyond the city centre"
        source={sections.dayTrips}
      />

      <GuideSection
        id="local-tip"
        title="Local tip"
        source={sections.localTip}
      />

      <GuideSectionHeading id="frequently-asked-questions">
        Frequently asked questions
      </GuideSectionHeading>

      <GuideFaq>
        {sections.faq.map((item) => (
          <GuideFaqItem key={item.question} question={item.question}>
            <GuideContentRenderer source={item.answer} />
          </GuideFaqItem>
        ))}
      </GuideFaq>

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
  id: string;
  title: string;
  source: string;
};

function GuideSection({ id, title, source }: GuideSectionProps) {
  return (
    <>
      <GuideSectionHeading id={id}>{title}</GuideSectionHeading>
      <GuideContentRenderer source={source} />
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

  return {
    introduction: getRequiredSection(markedSections, "introduction"),

    audience: stripLeadingHeading(
      getRequiredSection(markedSections, "audience"),
      2,
    ),

    keyPoints: stripLeadingHeading(
      getRequiredSection(markedSections, "key-points"),
      2,
    ),

    areaSelection: stripLeadingHeading(
      getRequiredSection(markedSections, "area-selection"),
      2,
    ),

    transport: stripLeadingHeading(
      getRequiredSection(markedSections, "transport"),
      2,
    ),

    localArea: stripLeadingHeading(
      getRequiredSection(markedSections, "local-area"),
      2,
    ),

    dayTrips: stripLeadingHeading(
      getRequiredSection(markedSections, "day-trips"),
      2,
    ),

    localTip: stripLeadingHeading(
      getRequiredSection(markedSections, "local-tip"),
      2,
    ),

    faq: parseFaqItems(
      stripLeadingHeading(getRequiredSection(markedSections, "faq"), 2),
    ),

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

function stripLeadingHeading(source: string, level: 2 | 3): string {
  const headingPrefix = "#".repeat(level);
  const headingPattern = new RegExp(
    `^${headingPrefix}\\s+.+?(?:\\n+|$)`,
  );

  return source.replace(headingPattern, "").trim();
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