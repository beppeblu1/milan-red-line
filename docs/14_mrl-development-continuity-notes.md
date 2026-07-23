# Milan Red Line — Development Continuity Notes

Version: July 2026

## Purpose

This document complements the permanent project documentation and preserves practical development knowledge, recurring implementation patterns and high-value onboarding notes that can reduce the time required by future Development chats to understand the codebase.

It intentionally avoids repeating information that should already exist in permanent project sources.

---

## 1. Knowledge Network maintenance

Guides should be treated as part of an interconnected knowledge network rather than as independent articles.

Whenever a new guide is added:

1. create or update its `related-guides.ts` entry;
2. verify its outbound contextual links;
3. add inbound contextual links from the most relevant existing guides;
4. verify that the guide belongs clearly to an editorial cluster rather than remaining isolated.

Whenever practical, internal linking should be completed in the same sprint as publication.

---

## 2. Preferred workflow for internal-link maintenance

1. Inspect candidate guides.
2. Identify stable insertion points.
3. Automate well-defined repetitive changes through PowerShell.
4. Verify with `git diff --stat` and `git diff`.
5. Run lint.
6. Run the production build.
7. Commit and push only after the checks are clean.

Avoid editing several guides manually when a defensive PowerShell script can perform the task safely and repeatably.

---

## 3. PowerShell best practices

### Resolve paths before using .NET file methods

```powershell
$resolvedPath = (Resolve-Path -LiteralPath $path).Path
$content = [System.IO.File]::ReadAllText($resolvedPath)
```

Do not assume that `.NET` methods resolve relative paths exactly like PowerShell.

### Preserve UTF-8 without BOM

```powershell
$utf8WithoutBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($resolvedPath, $updatedContent, $utf8WithoutBom)
```

### Make scripts defensive and repeatable

Scripts should:

- verify that each file exists;
- skip files that already contain the intended change;
- verify that an insertion anchor is unique;
- avoid writing when assumptions fail;
- report modified, skipped and failed files separately;
- stop with an explicit error when an expected update is not completed.

---

## 4. Anchor strategy for automated edits

Prefer:

- MDX section comments such as `rx:introduction`, `rx:local-area` and `rx:planning`;
- stable headings;
- known component boundaries;
- short unique phrases;
- narrowly scoped regular expressions.

Avoid entire editorial paragraphs as long-term anchors. Minor copy changes, punctuation or line wrapping can make them fail.

Inspect candidate files with `Select-String` and context before writing an update script.

---

## 5. Git verification workflow

Run:

```powershell
git diff --stat
```

before lint and build.

The result should show only the intended files, a small and understandable number of changes and no unexpected whole-file rewrites.

Windows warnings such as `LF will be replaced by CRLF` are expected in the current workflow and are not build failures by themselves.

---

## 6. Related guides and inbound links

Updating `related-guides.ts` alone does not complete the Knowledge Network work.

For every new guide, verify both directions:

- the new guide points to relevant existing guides;
- relevant existing guides point back to the new guide.

---

## 7. Local Knowledge implementation principle

The Local Knowledge pillar includes Sesto San Giovanni and nearby cultural venues, green areas, industrial heritage and useful North Milan destinations.

Development should support the positioning that Sesto is a practical base for Milan and worthwhile nearby places, without turning guides into generic tourist directories.

---

## 8. Guide-related development checklist

Whenever a guide is created or substantially revised, verify:

- frontmatter and metadata;
- hero image and alternative text;
- Reading Experience layout;
- contextual outbound links;
- `related-guides.ts`;
- inbound links;
- final apartment/contact CTA;
- FAQ and planning sections where applicable;
- `git diff --stat`;
- lint;
- production build;
- commit and push.

Preferred rule: open a guide once and leave it in a final, current state.

---

## 9. Recurring debugging lessons

### Missing exports

When Next.js reports that an imported export does not exist, inspect the target module directly. Partial replacements can remove functions while leaving surrounding data intact.

### Path-resolution failures

When `Test-Path` succeeds but `.NET` file methods report a missing file, resolve the path explicitly before reading or writing.

### Minimal diffs are part of acceptance

A script completing without errors is not enough. The diff must also be small and expected.

---

# Key Files Reference

## `lib/guides.ts`

### Role

This is the central filesystem-backed data layer for MDX guides.

It:

- discovers guide files in `content/guides`;
- parses frontmatter through `gray-matter`;
- returns typed metadata and raw MDX content;
- provides guide slugs for static generation;
- provides the full guide index for listing, search and latest-guide features;
- retrieves a single guide by slug.

It is server-side code and depends directly on Node's `fs` and `path`.

### Shared contracts

`GuideLayout` currently accepts only:

```ts
"standard" | "reading-experience-pilot"
```

`GuideMetadata` contains:

```ts
slug
locale
title
description
readingTime
publishedAt
author
layout
keywords
destinations
searchAliases
heroImage?
heroImageAlt?
```

`Guide` combines metadata with the raw MDX body.

### Frontmatter normalization

The parser deliberately supplies safe defaults:

- `locale` defaults to `"en"`;
- `author` defaults to `"Milan Red Line"`;
- missing or unknown layout values fall back to `"standard"`;
- missing array fields become empty arrays;
- array entries are trimmed and empty values removed;
- empty optional hero strings become `undefined`.

These helpers protect guide listings and search from incomplete optional metadata.

### Enforced validation

Parsing fails when:

1. `title` or `description` is missing;
2. `heroImage` exists without `heroImageAlt`.

Because `getAllGuides()` parses every guide, one invalid MDX frontmatter can fail pages or the production build.

New required fields should be introduced only after deciding whether old guides need defaults or a migration.

### Slug behavior

The slug comes from the MDX filename, not frontmatter.

Renaming a file changes its canonical slug and may require updates to:

- routes;
- contextual internal links;
- `related-guides.ts`;
- sitemap behavior;
- indexed URLs and redirects.

### Exported functions

`getGuideSlugs()`  
Returns all top-level `.mdx` filenames without extensions. Returns `[]` when the directory does not exist.

`getAllGuides()`  
Parses metadata for every guide and sorts by `publishedAt` descending. This assumes valid date strings; invalid dates are not explicitly rejected and can make ordering unreliable.

`getGuideBySlug(slug)`  
Returns the parsed guide or `null` when the matching file does not exist.

`getLatestGuide()`  
Returns the first guide from the date-sorted list or `null`.

### Architectural assumptions

- Guides are top-level files in `content/guides`.
- Nested guide directories are not supported.
- Reads are synchronous.
- There is no generated manifest, CMS or database.
- `getAllGuides()` reparses guide files in a fresh server execution context.

This remains appropriate for the current project size. Do not add caching or a content database without evidence that the simple filesystem model is a real bottleneck.

### Changes that require wider checks

When changing `GuideMetadata`, inspect:

- dynamic guide rendering;
- search index creation;
- guide cards and carousels;
- metadata generation;
- sitemap logic;
- locale filtering;
- all MDX frontmatter.

When adding a new layout, update both `GuideLayout` and `parseGuideLayout()`. Changing only the union type will still cause the parser to fall back to `"standard"`.

### Common failure modes

- `heroImage` without `heroImageAlt`;
- an array field written as a scalar string, resulting in `[]`;
- renamed guide files without updated links and mappings;
- a new layout value not recognized by `parseGuideLayout()`;
- invalid `publishedAt` values producing unreliable ordering;
- importing this filesystem module into a client component.

### Modification checklist

Before changing this file:

- preserve server-only usage;
- preserve filename-derived slugs unless routing is intentionally changing;
- retain backward-compatible defaults where appropriate;
- decide explicitly whether validation should fail the build;
- update every consumer of `GuideMetadata`;
- run lint and production build;
- verify one guide listing and one dynamic guide page.

---

## `lib/related-guides.ts`

### Role

This module is the manual editorial layer of the Knowledge Network.

Unlike contextual links inside MDX guides, this file defines explicit editorial relationships between guides that are used whenever related content needs to be suggested.

It should be considered part of the site's information architecture rather than a simple lookup table.

---

### Editorial philosophy

Relationships are intentionally curated.

This is **not** an automatically generated graph.

Only strong editorial relationships should be added.

Prefer quality over quantity.

Three highly relevant guides are usually more valuable than six weakly related ones.

---

### Current strategy

The project currently uses two complementary systems:

1. contextual links inside guide content;
2. manual related-guide mappings in this file.

Both should be maintained together.

Adding only one of them produces an incomplete Knowledge Network.

---

### Fallback behaviour

When a guide does not have its own configuration, the project falls back to a default recommendation list.

The fallback guarantees that every guide always has related content.

However, fallback recommendations should be considered temporary.

As new editorial clusters are completed, guides should progressively receive their own dedicated configuration.

---

### Duplicate protection

`getRelatedGuideSlugs()` automatically:

- removes duplicates;
- prevents a guide from recommending itself.

This behaviour should be preserved.

---

### Editorial clusters

This file is one of the easiest ways to understand the current editorial structure.

Current clusters include:

North Milan

- Practical Guide to Sesto San Giovanni
- Places to Visit Near Sesto San Giovanni
- Carroponte
- Bicocca
- M1 Red Line
- Without a Car

Business Travel

- Rho Fiera
- Business Travellers
- M1 Red Line
- Without a Car

Future clusters should continue following the same philosophy rather than creating isolated guide relationships.

---

### Maintenance workflow

Whenever a guide is published:

1. add its own configuration;
2. review neighbouring guides;
3. add reciprocal relationships where appropriate;
4. verify contextual inbound links;
5. verify outbound links.

The goal is for every published guide to become part of the editorial graph during the same sprint.

---

### Common mistakes

Avoid:

- relying permanently on fallback recommendations;
- creating one-way relationships only;
- linking guides only because they share keywords;
- creating very large related-guide lists.

Relationships should reflect genuine editorial intent.

---

### Future evolution

The current implementation is intentionally simple.

It is perfectly adequate for the current number of guides.

If the project grows significantly, possible future improvements include:

- relationship weights;
- multilingual mappings;
- topic-based automatic suggestions;
- category-aware fallbacks.

These improvements should only be considered when they provide measurable value.

The current manual mapping remains the preferred solution because it gives complete editorial control while keeping the implementation extremely maintainable.

---

# Development Continuity Addendum — Guide Search UX v2 (July 2026)

## Guide Search architectural refinement

Guide Search UX v2 intentionally improves the search behaviour without changing the Knowledge Hub v1 architecture.

The implementation now follows a two-stage search strategy:

1. **Exact metadata search**
2. **Fuzzy search fallback**

The existing metadata-based search is always executed first.

If one or more exact matches are found, they are returned using the existing ranking algorithm.

Only when the exact search produces zero results does the system invoke Fuse.js for fuzzy matching.

This preserves the editorial relevance and predictability established in Knowledge Hub v1 while making the search significantly more tolerant of common typing mistakes.

Examples:

- `monsa` → Monza
- `bicoca` → Bicocca
- `san rafaele` → San Raffaele
- `rhofiera` → Rho Fiera
- `metroo` → Metro

Fuse.js searches only the existing metadata fields:

- title
- description
- keywords
- destinations
- searchAliases

No guide body indexing has been introduced.

The implementation remains entirely client-side.

## Search UX separation

The project now intentionally maintains two distinct search experiences.

### Guide Search (`/guides`)

The Guides page remains the complete guide index.

Its behaviour has intentionally not changed:

- empty query displays all guides;
- existing "No guides found" state is preserved.

### Guide Search Shortcut (inside Reading Experience guides)

The contextual search component embedded in guides has been enhanced with:

- fuzzy matching;
- typo tolerance;
- Escape key support (clears the current query while keeping focus in the input);
- dedicated "No matching guides" state including a **Browse all guides** action linking to `/guides`.

This contextual search is intentionally more assistive without affecting the behaviour of the main guide index.

## Architectural principle

Future search improvements should continue to extend the current architecture rather than replace it.

Preferred search flow:

Exact search
↓
Results found?
↓
Yes → Return exact results
No
↓
Fuse.js fallback

This layered approach minimises behavioural regressions, preserves editorial control over relevance and keeps the search system simple, maintainable and multilingual-ready.


---

## `lib/guide-search.ts`

### Role

This module contains the complete search engine used by the Milan Red Line Knowledge Hub.

It is intentionally independent from React and from the UI.

Its responsibilities are limited to:

- building the search index;
- normalising searchable content;
- executing searches;
- ranking results;
- filtering by locale.

UI components should only display results.

They should never implement search logic.

---

### Architectural philosophy

The search engine follows a layered approach.

Guide metadata

↓

Search index

↓

Exact search

↓

Results found?

↓

Yes → Return ranked results

↓

No

↓

Fuse.js fuzzy search

This strategy intentionally preserves editorial control over relevance while remaining tolerant of typing mistakes.

Exact matches always have priority.

Fuzzy matching is a fallback rather than the default search mode.

---

### Search model

The search engine is entirely metadata-driven.

Only the following fields are indexed:

- title;
- description;
- keywords;
- destinations;
- searchAliases.

Guide body content is intentionally excluded.

This keeps the index:

- lightweight;
- predictable;
- multilingual-friendly;
- editor-controlled.

Improving metadata is preferred over expanding the search algorithm.

---

### Text normalisation

Every searchable field is normalised before indexing.

The process removes:

- diacritics;
- punctuation;
- duplicated spaces;
- case differences.

Examples:

```
San Raffaèle
```

becomes

```
san raffaele
```

This guarantees consistent behaviour regardless of user input.

Any future searchable field should pass through the same normalisation pipeline.

---

### Ranking strategy

Exact search uses a manually weighted scoring system.

Current priority is intentionally:

1. exact title match;
2. title prefix;
3. title contains query;
4. destinations;
5. search aliases;
6. keywords;
7. description.

Individual query terms are then scored again with lower weights.

This allows broad searches such as:

```
milan metro airport
```

to remain useful without replacing explicit title matches.

The weights represent editorial priorities rather than mathematical optimisation.

Do not modify them casually.

---

### Tie-breaking

When two guides receive the same relevance score, the newest guide is returned first.

Publication date is therefore only a secondary ordering criterion.

Editorial relevance always comes before recency.

---

### Locale isolation

Search is performed only inside the current locale.

The search engine never mixes guides belonging to different languages.

This behaviour is fundamental for the future multilingual architecture and should be preserved.

---

### Fuse.js configuration

Fuse.js is intentionally conservative.

Current configuration favours:

- typo correction;
- small spelling mistakes;
- nearby words.

It intentionally avoids aggressive fuzzy matching that could generate unrelated results.

Thresholds should be changed only after observing real search behaviour.

---

### Performance assumptions

The current architecture assumes:

- client-side execution;
- relatively small metadata;
- tens or a few hundred guides.

The search index is rebuilt from metadata rather than persisted.

This keeps the implementation extremely simple and perfectly adequate for the current project scale.

Future optimisation should be driven by measurable performance needs rather than anticipated growth.

---

### Future evolution

The current architecture leaves room for:

- synonym dictionaries;
- weighted editorial boosts;
- destination categories;
- search analytics;
- autocomplete;
- highlighted matches.

These improvements should extend the current pipeline rather than replace it.

The preferred philosophy remains:

metadata first, algorithm second.

---

### Common mistakes

Avoid:

- indexing full MDX content;
- moving search logic into React components;
- changing field weights without editorial review;
- bypassing text normalisation;
- making Fuse.js the primary search mechanism.

The current layered architecture deliberately balances relevance, predictability and maintainability.


---

## `components/ui/MarkerIcon.tsx`

### Role

This component provides the standard map marker used throughout Milan Red Line.

It centralises every visual and geometric aspect of apartment, metro and station markers so that all maps remain visually consistent.

No page should implement its own marker.

---

### Design philosophy

The marker is intentionally designed as a reusable design-system component rather than a map-specific asset.

Its objectives are:

- immediate recognition;
- strong contrast on map backgrounds;
- visual consistency across all map implementations;
- scalability to different marker sizes.

The component should remain independent from any specific map library.

---

### Geometric proportions

The marker is built from a single scalable geometry.

`size` always represents the marker width.

All other dimensions are derived proportionally.

Current visual proportions are intentionally balanced and should be treated as the project's baseline:

- markerHeight = size × 1.34
- circleSize = size × 0.57
- circleTop = size × 0.22

Inner symbols:

- metro = size × 0.37
- apartment = size × 0.41
- station = size × 0.41

Future visual refinements should preserve proportional scaling rather than introducing fixed pixel values.

---

### Visual construction

The marker consists of several independent visual layers.

From back to front:

1. external drop shadow;
2. soft white-to-light-grey body gradient;
3. subtle upper highlight;
4. white external outline;
5. red outline;
6. red circular badge;
7. transport or apartment symbol.

Keeping these layers independent makes future visual refinements straightforward.

---

### White outline strategy

The white outline is intentionally rendered **only outside** the red border.

This is achieved through an SVG mask rather than multiple overlapping paths.

The objective is to improve marker visibility on satellite imagery and complex map backgrounds without changing the apparent thickness of the red outline.

Future modifications should preserve this behaviour.

---

### SVG identifier safety

The component generates unique SVG IDs through `useId()`.

This prevents collisions between gradients and masks when multiple markers appear on the same page.

Any future SVG definitions should continue using generated IDs rather than hard-coded identifiers.

---

### Icon strategy

Three marker types are currently supported:

- apartment;
- metro;
- station.

Icons are intentionally lightweight and immediately recognisable.

New marker types should only be introduced when they represent stable concepts used throughout the project rather than one-off locations.

---

### Colour strategy

The visual identity intentionally relies on a very small palette:

- brand red;
- white;
- neutral light greys.

The component should continue following the Brand Guidelines rather than introducing additional colours.

---

### Accessibility

The marker is purely decorative.

It is intentionally hidden from assistive technologies through:

```
aria-hidden="true"
```

Accessibility information should instead be provided by the surrounding interactive map component.

---

### Common mistakes

Avoid:

- manually changing individual proportions;
- introducing fixed pixel values;
- duplicating marker implementations elsewhere;
- replacing generated SVG IDs with static ones;
- adding decorative effects that reduce legibility.

The component should remain simple, highly reusable and visually stable.

---

### Future evolution

Possible future improvements include:

- animated active markers;
- hover states;
- clustering support;
- dark-map adaptations.

These enhancements should extend the current component rather than replacing it, ensuring that every map continues to use a single shared marker implementation.
