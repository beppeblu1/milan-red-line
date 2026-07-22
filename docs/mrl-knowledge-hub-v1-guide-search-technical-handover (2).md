# MRL Knowledge Hub v1 — Guide Search
## Technical Handover

**Sprint:** Knowledge Hub v1 – Guide Search  
**Status:** Completed  
**Date:** July 2026

---

# 1. Objective

This sprint introduced the first version of the Knowledge Hub search system.

The goal was not to build a generic search engine, but to allow visitors to quickly discover the most relevant guide without knowing its exact title.

The search experience has been designed around typical user intentions such as:

- "Where can I stay near Rho Fiera?"
- "How do I reach San Raffaele?"
- "Monza"
- "Without a car"
- "M1"

The search is intended to become the primary entry point to the Knowledge Network.

---

# 2. Architecture Overview

The search system follows a layered architecture.

```
MDX Guides
      │
      ▼
lib/guides.ts
      │
      ▼
createGuideSearchIndex()
      │
      ▼
GuideSearchEntry[]
      │
      ▼
searchGuides()
      │
      ▼
useGuideSearch()
      │
      ▼
GuideSearch
```

A second lightweight flow is used inside guide pages:

```
GuideSearchShortcut
        │
        ▼
router.push("/guides?q=...")
```

The two components intentionally have different responsibilities.

---

# 3. Architectural Principles

The implementation follows the project's architectural philosophy:

- separation of concerns
- reusable components
- pure search logic
- client-side search
- static page generation where possible
- future multilingual compatibility

The search engine itself contains no UI logic.

UI components contain no ranking logic.

---

# 4. Search Pipeline

Current pipeline:

Guide metadata

↓

Search Index

↓

Free-text query

↓

Scoring

↓

Ordered results

Every search is performed entirely client-side.

No network request is executed.

---

# 5. Search Sources

Current search uses:

- title
- description
- keywords
- destinations
- searchAliases
- locale

The structure has been designed so new searchable fields can be added without changing the search algorithm.

---

# 6. Guide Metadata

GuideMetadata now includes:

```ts
locale
keywords
destinations
searchAliases
```

These fields are part of the content model rather than the UI.

Future editors can enrich search quality by improving metadata instead of changing code.

---

# 7. Components Introduced

## GuideSearch

Main search experience.

Responsibilities:

- renders search input
- filters guides
- displays results
- updates browser URL
- displays empty state

---

## GuideSearchCard

Responsible only for rendering a search result.

Contains no search logic.

---

## GuideSearchShortcut

Small search component used inside guide pages.

Responsibilities:

- lightweight entry point
- immediate navigation to Guide Search page
- preserves user query

---

## useGuideSearch

Reusable hook.

Responsibilities:

- stores query state
- executes search
- exposes filtered results
- exposes helper values

The hook intentionally contains no routing logic.

---

## searchGuides()

Pure search function.

Responsibilities:

- receives index
- receives query
- returns ordered results

The function is deterministic and completely independent from React.

---

# 8. URL Strategy

Guide Search supports URLs like:

```
/guides?q=monza
```

Advantages:

- shareable URLs
- browser refresh
- bookmark support
- deep linking
- entry from GuideSearchShortcut

---

# 9. Browser History Strategy

The implementation deliberately uses:

```
window.history.replaceState()
```

instead of:

```
router.replace()
```

Reason:

`router.replace()` causes a client navigation for every keystroke, degrading typing responsiveness.

`replaceState()` updates only the browser URL while keeping the experience instantaneous.

Navigation between pages still uses the Next.js router where appropriate.

---

# 10. Static Rendering Strategy

The `/guides` page remains statically generated.

The query parameter is read client-side using:

```
useSearchParams()
```

inside the search component.

This preserves:

- static generation
- excellent performance
- SEO
- fast initial rendering

while still supporting URL-driven search.

---

# 11. Performance

Current implementation characteristics:

- client-side filtering
- no API requests
- no server search
- in-memory index
- instant filtering
- negligible CPU usage with current content size

Current dataset:

~15 guides

Expected scalability:

100–200 guides without architectural changes.

---

# 12. Multilingual Readiness

The architecture has been prepared for multilingual support.

Guide metadata already includes:

```
locale
```

The search engine filters and scores guides using the current locale.

No architectural refactoring should be required when additional languages are introduced.

---

# 13. Accessibility

Implemented:

- semantic search landmark
- labels
- keyboard support
- visible focus
- aria-live for result count
- responsive layout

---

# 14. Files Created

```
components/guides/GuideSearch.tsx

components/guides/GuideSearchCard.tsx

components/guides/GuideSearchShortcut.tsx

hooks/use-guide-search.ts

lib/guide-search.ts
```

---

# 15. Files Updated

```
app/guides/page.tsx

app/guides/[slug]/page.tsx

lib/guides.ts

content/guides/*
```

Every guide now exposes searchable metadata.

---

# 16. Important Design Decisions

### Search remains client-side

Chosen because:

- current dataset is small
- instant response
- simpler architecture
- no server dependency

---

### Metadata-driven search

Search quality depends primarily on metadata rather than full-text parsing.

Benefits:

- predictable ranking
- editor-controlled relevance
- multilingual friendly

---

### Routing separated from search logic

Search logic never imports Next.js routing.

Routing is handled exclusively by UI components.

This keeps the search engine reusable.

---

### Shared hook

GuideSearch and future search components reuse the same hook.

Only navigation behaviour differs.

---

# 17. Future Evolution

The current architecture intentionally leaves room for:

- weighted ranking
- fuzzy matching
- typo tolerance
- autocomplete
- search suggestions
- highlighted matches
- destination filters
- category filters
- apartment search
- global site search
- analytics on search queries

None of these require rewriting the current architecture.

---

# 18. Technical Debt

Current version intentionally does not include:

- debounce
- fuzzy search
- synonym dictionaries
- analytics
- highlighted query terms

These are enhancements rather than missing features.

---

# 19. Definition of Done

Completed:

✓ reusable architecture

✓ modular search engine

✓ client-side filtering

✓ URL-based search

✓ static guides page

✓ multilingual-ready metadata

✓ responsive design

✓ accessible interaction

✓ reusable components

✓ build clean

✓ lint clean

✓ TypeScript clean

---

# 20. Overall Assessment

Knowledge Hub v1 establishes the technical foundation for content discovery across Milan Red Line.

The architecture prioritises:

- maintainability
- scalability
- performance
- editor-driven relevance
- future multilingual expansion

Future versions can extend search capabilities without requiring structural redesign.