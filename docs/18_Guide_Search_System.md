# Guide Search System

Version

1.0

Status

Current

Owner

Development

Last Updated

2026-08-01

Related Documents

- Development Standards

- Search & Metadata

- Reading Experience Framework

- Guide System Technical Manual

---

# Purpose

The Guide Search System provides visitors with a fast, intuitive and scalable way to discover relevant guides published on the Milan Red Line website.

Unlike a traditional website search, the system is designed specifically for a curated knowledge hub where each guide targets a well-defined search intent.

The primary objective is to help visitors locate the most relevant guide with the minimum possible interaction while preserving the editorial structure of the Knowledge Network.

The Guide Search System is considered a permanent platform component and should evolve without changing its overall architecture.

---

# Search Philosophy

The search system has been designed around a small number of architectural principles.

These principles should remain stable regardless of future implementation improvements.

---

## Search Supports Navigation

The search engine is not intended to replace the website navigation.

Categories, internal links and the Knowledge Network remain the primary navigation mechanisms.

Search provides an alternative discovery path for visitors who already know, or can approximately describe, what they are looking for.

---

## Editorial Content Comes First

Search should promote editorial quality rather than popularity.

Results are determined by metadata and relevance.

They are not influenced by page views, clicks or other behavioural metrics.

Every guide competes on the quality of its metadata rather than historical traffic.

---

## Static Content, Static Index

The guide collection changes infrequently.

For this reason, the search index is generated from the project's content rather than maintained by an external search service.

This approach provides:

- predictable behaviour;

- minimal infrastructure;

- zero runtime indexing costs;

- complete control over searchable data.

---

## Client-Side Search

All searches are performed within the browser.

No search request is sent to the server.

This provides:

- immediate feedback;

- reduced server load;

- improved privacy;

- simplified infrastructure.

Because the guide catalogue is relatively small, client-side search provides excellent performance while avoiding unnecessary complexity.

---

## Progressive Search

Search follows a progressive strategy.

The system first attempts an exact match.

Only when no suitable result is found does it activate fuzzy matching.

This approach preserves precision while remaining tolerant of typing mistakes and approximate queries.

---

## Metadata-Driven Discovery

Search behaviour is determined by structured metadata rather than page content alone.

Each guide exposes metadata describing:

- title;

- description;

- keywords;

- destinations;

- search aliases;

- publication information.

This allows visitors to discover guides even when using terminology that does not appear directly in the visible page content.

---

# System Overview

The Guide Search System consists of four independent stages.

Each stage has a single responsibility.

Guide Content

↓

Search Index Generation

↓

Client-side Search Engine

↓

Search Results Interface

Each stage can evolve independently without requiring architectural changes to the others.

---

# Search Architecture

The search architecture separates content management from search execution.

Content authors focus on producing guides and metadata.

The search engine transforms that information into an optimised search index consumed by the user interface.

This separation reduces maintenance complexity while ensuring that editorial improvements automatically improve search quality.

---

# Search Components

The Guide Search System is composed of four logical components.

---

## Guide Content

Markdown (MDX) guides remain the single source of truth.

Every searchable guide provides both visible content and structured metadata.

Search quality depends primarily on the completeness and consistency of this metadata.

---

## Search Index

The search index contains only the information required for search.

It acts as an optimised representation of the published guide collection.

The index is generated automatically from guide metadata.

No manual maintenance should ever be required.

---

## Search Engine

The search engine receives user queries, applies the configured search strategy and returns an ordered list of relevant guides.

Search execution remains completely independent from the rendering of search results.

---

## Search Interface

The user interface is responsible exclusively for:

- collecting search queries;

- presenting results;

- displaying empty states;

- providing navigation.

Business logic should remain outside the user interface whenever possible.



# Index Generation

## Purpose

The search index transforms the published guide collection into a lightweight structure optimised for fast client-side searching.

Rather than searching directly through MDX content, the application generates a dedicated search index containing only the information required by the Guide Search System.

This keeps search operations fast, predictable and independent from page rendering.

---

## Source of Truth

Published guides remain the single source of truth.

The search index is generated automatically from guide metadata and should never be edited manually.

Any improvement made to guide metadata is automatically reflected in future search results after the application is rebuilt.

This guarantees consistency between editorial content and the search experience.

---

## Indexed Information

Each guide contributes a structured set of searchable information.

Typical indexed fields include:

- title;

- description;

- keywords;

- destinations;

- search aliases;

- reading time;

- publication date;

- URL;

- hero image (when available).

Only information useful for discovery should become part of the search index.

Implementation-specific fields should remain outside the searchable dataset.

---

# Search Pipeline

## Overview

Every search request follows the same processing pipeline.

User Query

↓

Query Normalisation

↓

Exact Search

↓

Fuzzy Search (if required)

↓

Ranking

↓

Result Rendering

Each stage performs one specific task before passing the results to the next stage.

---

## Query Normalisation

Before searching, the system normalises the user query.

Typical normalisation operations include:

- trimming whitespace;

- case normalisation;

- handling common punctuation;

- preparing the query for consistent matching.

Normalisation improves consistency without changing the meaning of the original search.

---

## Exact Search

Exact search is always executed first.

This stage attempts to locate guides whose indexed metadata directly matches the submitted query.

Exact search provides:

- maximum precision;

- predictable ordering;

- deterministic behaviour.

Whenever relevant exact matches exist, no fuzzy search is required.

---

## Fuzzy Search

When exact search produces no suitable results, the system automatically activates fuzzy matching.

Fuzzy search improves tolerance for:

- typing mistakes;

- missing characters;

- approximate wording;

- similar expressions.

The current implementation uses Fuse.js as the fuzzy matching engine.

The fallback strategy improves discoverability while preserving the precision of exact search.

---

## Ranking

After matching, results are ordered according to overall relevance.

Ranking considers the relative importance of indexed metadata rather than the visible page content.

The objective is to present the guide most likely to satisfy the visitor's search intent.

Behavioural metrics such as page popularity or historical traffic are intentionally excluded from ranking.

---

# Metadata Model

## Purpose

Metadata forms the foundation of the Guide Search System.

Well-structured metadata allows visitors to discover guides even when the searched terms do not appear directly within the visible content.

Metadata quality therefore has a direct impact on search quality.

---

## Searchable Metadata

Every published guide should provide complete and consistent metadata.

Important searchable fields include:

### Title

Primary search signal.

Should clearly describe the guide's main search intent.

---

### Description

Provides additional semantic context.

Descriptions help distinguish guides targeting similar topics.

---

### Keywords

Keywords describe the primary concepts covered by the guide.

They should reflect genuine search terminology rather than exhaustive keyword lists.

---

### Destinations

Destinations represent geographical entities associated with the guide.

They improve location-based discovery throughout the Knowledge Network.

---

### Search Aliases

Aliases allow guides to be discovered through common alternative wording.

Typical aliases include:

- abbreviations;

- common spelling variants;

- alternative place names;

- frequently used search expressions.

Aliases should improve discoverability without duplicating the primary title.

---

# Search Strategy

## Precision Before Flexibility

The Guide Search System intentionally prioritises precise results.

Exact matching is always preferred whenever it provides relevant answers.

Fuzzy search exists as a recovery mechanism rather than the default behaviour.

---

## Editorial Relevance

Search ranking is based on editorial relevance.

The objective is not to maximise the number of returned results but to maximise the probability that the first results answer the visitor's question.

---

## Consistent Behaviour

The same query should always produce the same results unless guide metadata changes.

Search behaviour should remain deterministic and easy to understand.

---

# User Experience

## Purpose

The search interface should minimise the effort required to locate relevant guides.

Visitors should receive useful feedback regardless of whether matching guides are found.

---

## Search Interaction

The interface provides immediate feedback while typing.

Search results update dynamically without requiring page reloads.

The experience should remain responsive even as the guide collection grows.

---

## Empty State

When no suitable guide is found, the interface presents a dedicated empty state.

Rather than displaying an error, the empty state encourages visitors to refine or broaden their search.

Empty states should always remain informative and actionable.

---

## Keyboard Accessibility

Search supports keyboard interaction as a first-class experience.

Visitors should be able to:

- focus the search field;

- navigate naturally;

- dismiss search interactions using standard keyboard behaviour.

Accessibility improvements should never compromise usability for mouse or touch users.



# Performance

## Purpose

The Guide Search System has been designed to provide immediate feedback while keeping the overall implementation lightweight.

Performance is achieved through architectural decisions rather than infrastructure complexity.

The current guide collection size allows the entire search experience to execute efficiently within the browser.

---

## Lightweight Search Index

Only information required for search is included in the generated index.

Large portions of guide content remain outside the searchable dataset, reducing both memory usage and search time.

The search index should remain compact even as the number of published guides grows.

---

## Client-Side Execution

Search operations are executed entirely on the client.

This eliminates:

- server round trips;

- API latency;

- backend search infrastructure.

Visitors receive immediate feedback while the application infrastructure remains simple.

---

## Progressive Search Strategy

Exact matching is executed before fuzzy matching.

This avoids unnecessary fuzzy computations when precise matches already exist.

The strategy improves both perceived performance and result quality.

---

## Scalability

The current architecture comfortably supports the expected growth of the Milan Red Line knowledge base.

Should the catalogue grow significantly in the future, optimisation should prioritise improvements to index generation and search strategy before considering external search services.

---

# Accessibility

## Purpose

The Guide Search System should be usable by every visitor regardless of their preferred interaction method.

Accessibility is considered part of the system architecture rather than an optional enhancement.

---

## Keyboard Navigation

Search must remain fully usable through keyboard interaction.

Visitors should be able to:

- focus the search field;

- navigate naturally;

- clear the current search;

- dismiss overlays or suggestions using standard keyboard behaviour.

---

## Screen Readers

Search controls should expose meaningful labels and semantic structure.

Results should remain understandable without relying exclusively on visual presentation.

---

## Empty States

When no matching guide is found, the interface should clearly explain the situation.

Empty states should encourage further exploration rather than presenting an error condition.

---

## Responsive Behaviour

Search functionality should remain consistent across desktop, tablet and mobile devices.

Only the presentation layer should adapt to different screen sizes.

Search behaviour itself should remain identical.

---

# Maintenance

## Purpose

The Guide Search System has been designed to minimise maintenance effort.

Most improvements should be achieved by improving guide metadata rather than modifying application logic.

---

## Adding a New Guide

Publishing a correctly structured guide should automatically make it searchable.

No manual registration should be required.

Developers should verify:

- metadata completeness;

- search aliases;

- destination metadata;

- keyword quality.

---

## Improving Search Quality

Search quality should primarily be improved through metadata refinement.

Typical improvements include:

- clearer titles;

- better descriptions;

- more representative keywords;

- additional search aliases.

Application code should only be modified when architectural improvements are required.

---

## Updating the Search Engine

Future improvements to the search engine should preserve the existing search philosophy:

- exact search first;

- fuzzy search as fallback;

- deterministic ranking;

- metadata-driven discovery.

Architectural consistency should take priority over introducing additional search features.

---

## Testing

Every search-related modification should verify:

- exact matching;

- fuzzy matching;

- ranking consistency;

- empty states;

- keyboard accessibility;

- responsive behaviour.

Changes affecting metadata generation should also verify index generation.

---

# Future Evolution

The current architecture has been intentionally designed to accommodate future improvements without requiring structural redesign.

Potential future enhancements include:

---

## Metadata Expansion

Additional metadata fields may be introduced as the editorial platform evolves.

Any new searchable field should have a clearly defined purpose and should improve discovery rather than increase complexity.

---

## Editorial Signals

Future versions may introduce additional editorial signals to improve ranking.

These signals should remain deterministic and should never depend on visitor popularity metrics.

---

## Search Analytics

Search analytics may be introduced to better understand:

- frequently searched terms;

- unsuccessful searches;

- content gaps.

Analytics should observe search behaviour without influencing ranking.

---

## Knowledge Network Integration

Future improvements may strengthen the relationship between search and the Knowledge Network.

Search should continue helping visitors discover guides while preserving the editorial organisation of the platform.

---

## Permanent Decisions

The following architectural decisions are considered stable.

---

### Client-Side Search

Guide search is performed entirely within the browser.

---

### Static Search Index

The search index is generated from published guide metadata.

---

### Metadata-Driven Discovery

Search quality depends primarily on metadata quality.

---

### Exact Before Fuzzy

Exact matching always has priority.

Fuzzy search exists to recover unsuccessful searches rather than replace exact matching.

---

### Editorial Ranking

Results are ranked according to editorial relevance.

Popularity metrics do not influence search ordering.

---

### Independent Search Architecture

Search remains independent from page rendering, navigation and content management.

Each layer should continue to evolve independently whenever possible.



# Technical Reference

The following information complements the architectural documentation presented in this document.

Unlike the previous sections, the Technical Reference is intended to support day-to-day development, maintenance and onboarding.

The information contained here may evolve more frequently than the architectural sections above.

---

# Source Files

The Guide Search System is primarily implemented through the following files.

## Search Engine

lib/guide-search.ts

Responsibilities:

- search index generation;

- searchable data model;

- index creation.

---

## Guide Metadata

lib/guides.ts

Responsibilities:

- guide loading;

- metadata extraction;

- source data for search.

---

## Search Hook

hooks/use-guide-search.ts

Responsibilities:

- search execution;

- query state;

- result filtering;

- exact and fuzzy search orchestration.

---

## Search Component

components/guides/GuideSearch.tsx

Responsibilities:

- search interface;

- user interaction;

- result rendering.

---

## Search Card

components/guides/GuideSearchCard.tsx

Responsibilities:

- individual search result presentation.

---

## Guides Page

app/guides/page.tsx

Responsibilities:

- server-side index generation;

- passing the search index to the client.

---

# Build-Time Pipeline

Guide Collection

↓

Guide Metadata

↓

createGuideSearchIndex()

↓

Serialized Search Index

↓

Client

The search index is generated during page generation.

No runtime crawling or indexing exists.

---

# Runtime Pipeline

Visitor

↓

Search Input

↓

Query Normalisation

↓

Exact Search

↓

Fuse.js Fallback

↓

Ranking

↓

Search Results

↓

Navigation

---

# Main Components

| Component | Responsibility |

|-----------|----------------|

| GuideSearch | User interface |

| useGuideSearch | Search logic |

| createGuideSearchIndex | Search index generation |

| GuideSearchCard | Search result presentation |

| Guide Metadata | Searchable source data |

---

# Main Dependencies

| Dependency | Purpose |

|-----------|---------|

| Fuse.js | Fuzzy matching |

| Next.js | Application framework |

| React | Client rendering |

| MDX | Guide content |

| TypeScript | Type safety |

---

# Common Development Tasks

## Add a New Searchable Metadata Field

Verify:

- guide front matter;

- metadata extraction;

- search index generation;

- search hook;

- ranking behaviour;

- QA.

---

## Add a New Guide

Verify:

- complete metadata;

- keywords;

- destinations;

- search aliases;

- successful indexing;

- successful discovery.

---

## Modify Search Ranking

Verify:

- exact search behaviour;

- fuzzy fallback;

- ranking consistency;

- search relevance.

Avoid introducing popularity-based ranking.

---

## Modify Search Interface

Verify:

- accessibility;

- keyboard navigation;

- responsive behaviour;

- empty states;

- loading behaviour.

Presentation changes should not modify search logic.

---

# Change Impact

The following table summarises which areas should be verified after common modifications.

| If you modify... | Verify... |

|------------------|-----------|

| Guide metadata | Index generation, search quality, ranking |

| Search index | Search hook, results, QA |

| Fuse.js configuration | Fuzzy matching, ranking consistency |

| Search component | Accessibility, responsive behaviour |

| Search hook | Exact search, fuzzy search, performance |

| Result card | Layout and navigation |

---

# QA Checklist

Every search-related modification should verify:

□ Exact search

□ Fuzzy search

□ Empty state

□ Keyboard navigation

□ Mobile layout

□ Desktop layout

□ Search aliases

□ Destinations

□ Keywords

□ Metadata completeness

□ Ranking consistency

□ Build success

---

# Common Pitfalls

## Missing Metadata

Incomplete metadata directly reduces search quality.

Always verify:

- title;

- description;

- keywords;

- destinations;

- search aliases.

---

## Duplicating Search Logic

Search behaviour should remain centralised.

Avoid implementing search logic directly inside presentation components.

---

## Bypassing the Search Index

The search index is the only supported source for client-side searching.

Do not query MDX content directly.

---

## Modifying Ranking Without QA

Small ranking changes may produce significant differences in search quality.

Every ranking modification should be followed by manual verification using representative queries.

---

## Treating Fuse.js as the Primary Search Engine

Fuse.js is a recovery mechanism.

Exact matching remains the preferred search strategy.

Changes should preserve this behaviour.

---

# Warm-up Checklist

Before modifying the Guide Search System:

1. Read the architectural sections of this document.

2. Review the source files listed above.

3. Understand the build-time and runtime pipelines.

4. Identify which layer will be modified.

5. Review the Change Impact table.

6. Execute the QA checklist before completing the sprint.