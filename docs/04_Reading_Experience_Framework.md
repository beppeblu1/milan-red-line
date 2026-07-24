# 04_Reading_Experience_Framework

> **Module Owner:** UX / Content & SEO\
> **Status:** Stable (Living document)

------------------------------------------------------------------------

# 1. Purpose

The Reading Experience Framework defines the standard structure used by
every modern Milan Red Line guide.

Its objective is to reduce cognitive load, make long guides feel
approachable and create a consistent reading experience across the
website.

------------------------------------------------------------------------

# 2. Core Principles

Every guide should be:

-   practical before exhaustive;
-   easy to scan;
-   progressively structured;
-   visually consistent;
-   focused on helping the reader make decisions.

Readers should never feel overwhelmed by large blocks of text.

------------------------------------------------------------------------

# 3. Mandatory Structure

Every new guide follows the same sequence.

1.  `rx:introduction`
2.  `rx:audience`
3.  `rx:key-points`
4.  `rx:area-selection`
5.  `rx:transport`
6.  `rx:local-area`
7.  `rx:day-trips`
8.  `rx:local-tip`
9.  `rx:faq`
10. `rx:planning`
11. `rx:good-to-know`

The order may only change when a guide has a strong editorial reason to
do so.

------------------------------------------------------------------------

# 4. Section Guidelines

## Introduction

Maximum two short paragraphs.

The introduction answers:

-   What is this guide about?
-   Why should the reader continue?

Avoid historical background.

------------------------------------------------------------------------

## Who is this guide for?

Identify the target audience with concise bullet points.

Readers should immediately understand whether the guide matches their
situation.

------------------------------------------------------------------------

## Key Points

Provide a quick decision summary.

The reader should understand the main conclusions without reading the
entire article.

------------------------------------------------------------------------

## Main Content

Develop the topic progressively.

Prefer several short sections instead of one long section.

------------------------------------------------------------------------

## Local Tip

Offer practical advice based on local experience.

Local Tips should add value, not repeat existing content.

------------------------------------------------------------------------

## FAQ

Answer real user questions.

Avoid using the FAQ to introduce completely new topics.

------------------------------------------------------------------------

### GuideFinalCTA

The Reading Experience concludes with the shared `GuideFinalCTA` component.

Purpose

Provide a consistent closing section that naturally transitions readers from useful information to the next step.

Rules

- Appears exactly once.
- Always follows:
  - FAQ
  - Good to Know
  - Related Guides
- Uses the shared React component.
- The layout, copy and buttons are centrally managed.
- Individual guides should not implement custom CTA layouts.
- The `rx:planning` marker remains mandatory for structural consistency, even though its content is no longer rendered.

Current standard actions

Primary button

- View Apartments

Secondary button

- Contact Us

------------------------------------------------------------------------

## Good to Know

Include only information that prevents common mistakes or
misunderstandings.

Do not use this section for generic travel advice.

------------------------------------------------------------------------

# 5. Writing Standards

-   Prefer short paragraphs.
-   Prefer lists where appropriate.
-   Avoid unnecessary repetition.
-   One idea per paragraph.
-   Explain before recommending.

------------------------------------------------------------------------

# 6. Compression Pass

Before publication perform a Compression Pass.

Check that:

-   duplicated concepts are removed;
-   sentences are concise;
-   specialist topics are not expanded unnecessarily;
-   each paragraph has a clear purpose.

The goal is not to shorten the guide, but to improve information
density.

------------------------------------------------------------------------

# 7. Components

Whenever appropriate use reusable editorial components instead of raw
Markdown.

Examples include:

-   GuideHighlightCard
-   GuideComparisonTable
-   GuideDestinationTable
-   GuideFaq
-   GoodToKnow
-   RelatedGuidesBox

Component usage is documented in the Editorial Design System.

------------------------------------------------------------------------

# 8. Accessibility

Headings should follow a logical hierarchy.

Tables should remain readable on mobile devices.

Visual components must support, not replace, textual information.

------------------------------------------------------------------------


### Final Section Order

The visual order of Reading Experience sections is controlled by the
`PilotGuideLayout` component rather than by the physical order of the
`rx:*` markers inside the MDX file.

The standard closing sequence for every Reading Experience guide is:

1. Frequently Asked Questions
2. Good to Know
3. Related Guides
4. GuideFinalCTA

The shared GuideFinalCTA component is intentionally rendered as the final visible section of the guide.

This structure ensures that:

- practical notes and disclaimers are presented before the conversion message;
- visitors can continue exploring related content before making a booking decision;
- every guide finishes with a consistent, contextual call to action that encourages direct contact or apartment discovery.

Authors should continue placing the `rx:planning` marker in every guide. The rendering order is managed by the layout, so the physical position of the marker inside the MDX file is not significant.

------------------------------------------------------------------------

# Maintenance

Update this document whenever the Reading Experience Framework evolves
or a new mandatory structural pattern is introduced.