# 05_Editorial_Design_System

> **Module Owner:** Development / UX\
> **Status:** Stable (Living document)

------------------------------------------------------------------------

# 1. Purpose

The Editorial Design System defines every reusable content component
available to MDX guides.

Its objectives are:

-   provide a consistent reading experience;
-   avoid one-off implementations;
-   simplify maintenance;
-   allow new guides to reuse existing patterns.

Whenever a reusable visual pattern appears more than once, it should
become a component instead of duplicated markup.

------------------------------------------------------------------------

# 2. Design Principles

Every component should be:

-   reusable;
-   content-first;
-   responsive;
-   accessible;
-   independent from a specific guide.

Components must never exist for a single article only.

------------------------------------------------------------------------

# 3. Available Components

## GuideHighlightCard

### Purpose

Highlight important information without interrupting the reading flow.

### Typical use

-   warnings;
-   important decisions;
-   practical advice.

### Avoid

Using Highlight Cards for decorative purposes.

------------------------------------------------------------------------

## GuideComparisonTable

### Purpose

Compare two attributes across several options.

Typical examples:

-   transport type vs best use;
-   accommodation option vs traveller profile;
-   ticket type vs recommended scenario.

### Rules

-   maximum two columns;
-   concise descriptions;
-   mobile friendly.

Do not use for numerical datasets or complex comparisons.

------------------------------------------------------------------------

## GuideDestinationTable

### Purpose

Show destinations and direct connections.

Typical use:

-   M1 destinations;
-   transport accessibility.

------------------------------------------------------------------------

## GuideFaq

Purpose:

Display expandable frequently asked questions.

Rules:

-   answer real questions;
-   avoid introducing new topics.

------------------------------------------------------------------------

## RelatedGuidesBox

Purpose:

Help readers continue their journey naturally.

Rules:

-   maximum three guides;
-   editorial relevance first;
-   never force SEO links.

------------------------------------------------------------------------

## GoodToKnow

Purpose:

Prevent common mistakes.

Content should be practical rather than informational.

------------------------------------------------------------------------

## ApartmentContextCard

Purpose:

Introduce accommodation only when it genuinely helps the reader.

Avoid promotional language.

------------------------------------------------------------------------

## EditorialLeadConnector

Purpose:

Improve visual rhythm at the beginning of the article.

------------------------------------------------------------------------

## GuidePanoramicImage

Purpose:

Display one contextual panoramic image.

Rules:

-   meaningful;
-   high quality;
-   supports understanding.

------------------------------------------------------------------------

# 4. Component Evolution

Whenever a new reusable pattern appears:

1.  verify that an existing component cannot solve the problem;
2.  design a generic API;
3.  document it here;
4.  reuse it in future guides.

------------------------------------------------------------------------

# 5. Anti-patterns

Avoid:

-   inline HTML layouts;
-   duplicated JSX;
-   page-specific components;
-   styling copied between guides.

------------------------------------------------------------------------

# 6. Maintenance

Whenever a component is added, removed or substantially modified:

-   update this document;
-   update MDX examples if necessary;
-   verify backward compatibility;
-   review existing guides that may benefit from the new component.
