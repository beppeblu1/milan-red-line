# 13_Brand_[Guidelines.md](http://Guidelines.md)

# Milan Red Line — Brand Guidelines v1.0

**Status:** Approved  

**Version:** 1.0  

**Last Updated:** July 2026

---

# Purpose

This document defines the official visual identity of Milan Red Line.

Its purpose is to provide a practical reference for everyone contributing to the project, ensuring that the brand remains visually consistent as the website grows.

This document focuses on implementation and design consistency rather than marketing.

---

# Brand Principles

The Milan Red Line visual identity should always communicate the project's core values.

The brand should feel:

- calm

- practical

- trustworthy

- local

- modern

- simple

Every visual decision should reinforce these qualities.

The design language intentionally avoids visual noise, excessive decoration and aggressive marketing.

---

# Official Logo

The official logo consists of two elements:

- the Milan Red Line symbol;

- the official wordmark.

These elements form the primary visual identity of the project.

The symbol represents movement, direction and the Red Line concept.

The wordmark identifies the brand while maintaining a clean and highly readable appearance.

The horizontal logo is the primary logo used throughout the website.

---

# Logo Variants

The following versions are officially approved.

## Primary Logo

Horizontal logo for light backgrounds.

Used in:

- website header

- Open Graph images (when appropriate)

- presentations

- documentation

---

## Dark Version

Horizontal logo adapted for dark backgrounds.

Use only when the standard version would not provide sufficient contrast.

---

## Symbol

Standalone symbol.

Used for:

- favicon

- application icons

- social avatars

- compact UI locations

The symbol should never be modified or redrawn.

---

## Monochrome Versions

Black version.

White version.

Used only when colour reproduction is impossible or inappropriate.

---

# Clear Space

Leave sufficient empty space around the logo.

As a simple rule:

> Minimum clear space should be equal to at least half the height of the symbol.

No text, icons or other visual elements should enter this area.

---

# Minimum Size

Recommended minimum display sizes.

## Header

Desktop:

190–220 px wide

Mobile:

155–180 px wide

---

## Symbol

Do not display the standalone symbol smaller than 24 px unless used as a favicon.

---

## Favicon

Official sizes:

- 16×16

- 32×32

- 48×48

---

## Apple Touch Icon

180×180 px

---

## Android / PWA

- 192×192 px

- 512×512 px

---

# Colours

## Primary Brand Red

Used for:

- symbol

- highlights

- interactive accents

- selected UI elements

The official implementation should use the approved brand asset rather than recreating colours manually whenever possible.

---

## Neutral Colours

Primary text:

Near black.

Secondary text:

Medium neutral grey.

---

## Backgrounds

Preferred:

- white

- very light grey

Dark backgrounds are supported only through the dedicated dark logo variant.

Avoid placing the logo directly on busy photography.

---

# Typography

The current typography reflects the overall design philosophy:

- clean

- highly readable

- modern

- neutral

Typography should support content rather than becoming a visual feature.

Large editorial titles and comfortable reading spacing remain the standard across the project.

Typography is documented in greater detail within the Editorial Design System.

---

# Header Usage

The logo occupies the left side of the header.

The navigation remains on the right.

The logo should:

- link to the homepage;

- preserve its aspect ratio;

- remain visually balanced with the navigation;

- never be stretched.

Responsive behaviour should reduce logo width while maintaining readability.

The symbol should not replace the horizontal logo without an explicit design decision.

---

# Favicon & Icons

Official assets include:

- favicon (.ico)

- PNG favicons

- Apple Touch Icon

- Android icons

These assets should always originate from the approved Brand Assets package.

Do not regenerate icons independently.

---

# Photography Style

Photography should support understanding rather than decoration.

Preferred characteristics:

- real locations;

- natural lighting;

- realistic colours;

- clean compositions;

- limited post-processing;

- few people, never dominating the scene;

- authentic urban atmosphere.

Avoid:

- text overlays;

- watermarks;

- exaggerated HDR;

- heavy filters;

- promotional imagery;

- generic stock photography whenever possible.

Photography guidelines are further defined in the Reading Experience Hero Standard.

---

# Illustration Style

Illustrations should remain secondary to photography.

When used, they should be:

- simple;

- minimal;

- informative;

- functional.

Illustrations should explain or support information.

They should never exist purely for decoration.

---

# Accessibility

The visual identity should remain accessible.

Guidelines include:

- prefer SVG logos;

- maintain sufficient colour contrast;

- keep decorative graphics hidden from assistive technologies where appropriate;

- preserve responsive sizing;

- avoid raster logos when scalable vector assets are available.

The logo should always remain crisp at every supported resolution.

---

# File Structure

Official assets are stored in:

```text

public/

└── brand/

```

Typical files include:

```text

mrl-logo-horizontal.svg

mrl-logo-horizontal-dark.svg

mrl-mark-version-b.svg

mrl-mark-black.svg

mrl-mark-white.svg

mrl-favicon.ico

mrl-favicon-32x32.png

mrl-favicon-48x48.png

mrl-apple-touch-icon.png

mrl-android-icon-192.png

mrl-android-icon-512.png

```

New brand assets should follow the existing naming convention.

Do not duplicate assets elsewhere in the project.

---

# Future Evolution

Brand Identity v1.0 is considered the project's baseline.

Future updates should be evolutionary rather than revolutionary.

Small improvements are encouraged when they improve:

- clarity;

- consistency;

- accessibility;

- scalability.

Fundamental changes to the symbol, wordmark or colour system should require explicit Project Manager approval.

The objective is to preserve long-term recognition while allowing the identity to mature gradually as Milan Red Line evolves.

---

# Relationship with Other Documents

This document complements:

- Reading Experience Framework

- Editorial Design System

- Content Standards

- Development Standards

- Knowledge Network

- Search & Metadata

- QA Process

- Project Workflows

- Permanent Decisions

Where overlaps exist, this document defines **visual identity**, while the other documents define implementation, editorial or technical behaviour.