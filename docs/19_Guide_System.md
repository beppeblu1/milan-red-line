# Guide System

# Purpose

This document defines the technical architecture of the Milan Red Line Guide System.

Its purpose is to provide the permanent technical reference for developing, maintaining and extending the entire guide platform.

Unlike the Reading Experience Framework, the Editorial Design System or the Content Standards, this document focuses exclusively on the technical implementation of the Guide System.

Editorial strategy belongs to the project standards.

Guide implementation belongs here.

This document should be considered the primary technical reference for every future development activity involving guides.

---

# Scope

The Guide System is responsible for every technical aspect involved in transforming MDX content into complete Reading Experience pages.

Its responsibilities include:

- guide rendering;

- layout orchestration;

- metadata generation;

- reusable editorial components;

- Markdown parsing;

- guide search integration;

- Knowledge Network integration;

- shared guide utilities.

The Guide System intentionally does not define:

- editorial strategy;

- writing style;

- SEO strategy;

- Reading Experience principles;

- content planning.

Those responsibilities belong to other permanent project documents.

---

# Guide System Boundaries

The Guide System is one part of a larger documentation ecosystem.

Its responsibilities begin when editorial content is ready to be rendered.

Its responsibilities end when the rendered guide becomes part of the published website.

The Guide System owns:

- MDX rendering;

- layouts;

- renderers;

- reusable components;

- guide metadata generation;

- parser behaviour;

- guide search integration;

- technical implementation.

The following areas remain outside the Guide System.

Reading Experience Framework

Defines the editorial structure of every guide.

Editorial Design System

Defines the visual language of editorial components.

Content Standards

Define how guides should be written.

Knowledge Network

Defines relationships between guides.

Development Standards

Define general development practices across the project.

Separating these responsibilities keeps the Guide System focused on implementation rather than editorial decision-making.

---

# Guide System Overview

The Guide System transforms structured MDX content into fully rendered Reading Experience pages.

It provides a strict separation between editorial content and application logic.

Guide authors describe what visitors should read.

The application determines how that information is rendered.

This separation allows both the editorial content and the technical platform to evolve independently while remaining fully compatible.

The Guide System is intentionally component-driven.

Every reusable behaviour should be implemented inside the framework rather than duplicated across individual guides.

---

# Architectural Principles

The Guide System follows a small number of permanent architectural principles.

These principles apply to every guide published by the project.

---

## Content Before Logic

MDX files contain editorial content only.

Business logic, rendering behaviour, responsive behaviour and application decisions remain inside the React application.

---

## Declarative Content

Guides describe content rather than behaviour.

React components may appear inside MDX only when they remain declarative.

Filtering, ranking, selection, ordering and business logic must always remain inside reusable React components.

---

## Separation of Responsibilities

Every layer of the Guide System has one clearly defined responsibility.

- MDX files define editorial content.

- Layouts organise the Reading Experience.

- Parsers extract structured information.

- Renderers transform Markdown into React.

- Components render reusable interface elements.

- Shared utilities support the entire system.

No layer should duplicate another layer's responsibilities.

---

## Framework Before Individual Guides

Individual guides should adapt to the Reading Experience Framework.

The framework should evolve only when an improvement benefits the entire guide ecosystem rather than solving an isolated editorial case.

---

## Reuse Before Duplication

Whenever new functionality is required, first evaluate whether the existing framework can be extended.

Guide-specific implementations should remain exceptional.

Reusable solutions reduce maintenance effort and improve long-term consistency.

---

## Source of Truth

Whenever documentation, published guides and implementation differ, the project source code is considered the authoritative reference.

Documentation should then be updated to reflect the implementation.

Existing guides should never be assumed to represent the latest technical standard.

---

## Documentation as Part of the System

The Guide System documentation forms part of the platform itself.

Whenever permanent implementation knowledge changes, the corresponding documentation should be updated during the same sprint.

Implementation and documentation should evolve together.



# System Architecture

The Guide System is organised into a small number of cooperating layers.

Each layer performs one specific responsibility.

Information flows through the system without introducing business logic into the editorial content.

The architecture intentionally separates:

- editorial content;

- rendering;

- parsing;

- reusable components;

- metadata generation;

- search integration.

This separation allows each layer to evolve independently while preserving compatibility across the platform.

---

# Rendering Pipeline

Every Reading Experience guide follows the same processing pipeline.

```text

Guide MDX

↓

Page Loader

↓

Reading Experience Layout

↓

Section Parser

↓

Content Renderer

↓

Editorial Components

↓

Metadata Generation

↓

Search Index

↓

Rendered Guide

```

Each stage enriches the guide without changing its editorial meaning.

The rendering pipeline should remain deterministic.

Given identical guide content, the pipeline should always produce identical output.

---

# Layer Responsibilities

Each architectural layer owns one primary responsibility.

---

## Guide Content

The MDX guide is the editorial source of truth.

It contains:

- front matter;

- Reading Experience markers;

- Markdown content;

- approved declarative components.

Guide files should never contain:

- business logic;

- responsive behaviour;

- rendering decisions;

- framework implementation;

- duplicated shared components.

Guides describe **what** should be presented.

The framework determines **how** it is presented.

---

## Page Layer

The dynamic page is responsible for preparing the guide for rendering.

Typical responsibilities include:

- resolving the guide slug;

- loading guide content;

- reading metadata;

- selecting the layout;

- preparing the rendering pipeline.

The page layer should remain independent from editorial implementation.

---

## Layout Layer

The Reading Experience Layout coordinates the complete guide.

Its responsibilities include:

- validating the Reading Experience contract;

- identifying structural sections;

- organising the page;

- generating navigation;

- inserting shared framework components;

- coordinating the rendering order.

Layouts orchestrate the page.

They should never duplicate parser or renderer responsibilities.

---

## Parser Layer

The parser converts editorial structure into structured application data.

Typical responsibilities include:

- locating section markers;

- extracting section titles;

- generating identifiers;

- validating required sections;

- parsing structured content.

The parser should remain entirely deterministic.

Parser behaviour should never depend on individual guides.

---

## Renderer Layer

The renderer converts Markdown into React.

Its responsibilities include:

- rendering Markdown;

- registering MDX components;

- applying typography;

- exposing reusable editorial components;

- inserting automatic framework behaviour.

The renderer forms the boundary



# Component Architecture

The Guide System is built around reusable editorial components.

Components provide the visual and structural building blocks used to render Reading Experience guides.

The objective is to centralise behaviour inside reusable React components while keeping MDX files simple, declarative and easy to maintain.

Whenever a behaviour is shared by multiple guides, it should normally be implemented as a reusable component rather than duplicated inside individual MDX files.

---

# Component Philosophy

Every editorial component follows the same architectural principles.

---

## Declarative Usage

Components describe editorial content.

They should never require guide authors to implement rendering logic.

Guide authors specify *what* should be displayed.

Components determine *how* that information is presented.

---

## Centralised Behaviour

Presentation, responsiveness, accessibility and interaction belong inside reusable components.

Guides should never duplicate behaviour already provided by the framework.

Changes made to a shared component should automatically benefit every guide using that component.

---

## Stable Public Contracts

Every component exposes a public contract.

The contract defines:

- supported properties;

- accepted values;

- expected children;

- rendering behaviour.

Only the public contract should be considered stable.

Internal implementation may evolve without affecting guides.

---

# Component Categories

Editorial components are organised into four functional categories.

---

## Editorial Components

Editorial components enrich the guide content.

Typical examples include:

- highlight cards;

- apartment recommendations;

- panoramic images;

- informational callouts;

- destination tables.

These components improve readability while keeping editorial content concise.

---

## Framework Components

Framework components are responsible for organising the Reading Experience itself.

Typical responsibilities include:

- page composition;

- layout orchestration;

- section rendering;

- Table of Contents generation;

- section ordering.

Framework components define the overall reading experience rather than individual editorial elements.

---

## Structured Components

Some editorial content follows predefined structures recognised by the parser.

Examples include:

- FAQs;

- Good to Know;

- destination tables;

- comparison tables.

Whenever structured content exists, dedicated components should be preferred over manually reproducing layouts in Markdown.

---

## Automatic Components

Some framework components are inserted automatically during rendering.

Typical examples include:

- Editorial Lead Connector;

- Related Guides;

- final Call to Action;

- other shared Reading Experience elements.

Before manually inserting any reusable component, always verify whether it is already managed automatically by the framework.

---

# Component Lifecycle

Reusable components follow a predictable lifecycle.

Requirement

↓

Component Design

↓

Implementation

↓

Registration

↓

Documentation

↓

Guide Adoption

↓

Framework Evolution

This lifecycle ensures that new functionality becomes part of the shared platform rather than remaining isolated inside individual guides.

---

# Component Registration

Components become available inside MDX only after being registered by the Guide System.

Registration is considered part of the framework architecture rather than individual guide development.

Before introducing a component into production:

- implement it;

- export it;

- register it;

- validate it;

- document it.

Unregistered components should never be referenced by guides.

---

# Structured Content

Some sections require additional parsing before rendering.

The parser transforms structured editorial content into reusable React components.

Examples include:

- Frequently Asked Questions;

- Good to Know;

- destination tables;

- other structured editorial blocks.

The parser expects a predictable editorial structure.

Changing that structure without updating the parser may prevent correct rendering.

---

# Context-Aware Components

Some editorial components determine their behaviour using contextual information.

For example, apartment recommendations should primarily express visitor intent rather than explicitly selecting apartments.

Whenever practical, contextual recommendations should be preferred over hardcoded selections.

Decision-making remains inside the component implementation.

Guides remain purely declarative.

---

# Icon Architecture

Icons represent shared visual semantics across the Guide System.

Guides should reference approved semantic aliases rather than implementation-specific icon libraries.

Centralising icon mapping provides:

- visual consistency;

- simplified maintenance;

- implementation independence;

- easier future refactoring.

Guides should never depend directly on icon library naming conventions.

---

# Component Validation

Before using any component inside a guide, verify:

- that the component is currently supported;

- that its documented public contract matches the implementation;

- that all required properties are available;

- that the component is not already inserted automatically by the framework.

Whenever uncertainty exists, the project source code remains the authoritative reference.

---

# Component Evolution

The component library is expected to evolve continuously.

Future improvements should:

- strengthen existing components;

- reduce duplicated behaviour;

- simplify guide authoring;

- preserve backwards compatibility whenever practical.

The preferred approach is always to extend reusable components rather than introduce guide-specific implementations.



# Guide Development Lifecycle

Every modification to the Guide System follows the same lifecycle.

The objective is to produce guides that remain technically correct, editorially consistent and fully compatible with the Reading Experience Framework.

The workflow applies equally to:

- creating new guides;

- migrating legacy guides;

- updating existing guides;

- extending the Guide System.

The process intentionally favours predictable development over ad-hoc modifications.

---

# Preflight

Before modifying any guide, always verify the current implementation.

Documentation provides architectural guidance.

The project source code defines the actual implementation.

Never assume that an existing guide represents the latest standard.

The minimum preflight should verify:

- Reading Experience Layout;

- Guide Content Renderer;

- reusable components;

- parser behaviour;

- supported component contracts.

Whenever documentation and implementation differ, the implementation is considered authoritative.

---

# Development Workflow

Guide development follows six consecutive stages.

```text

Understand

↓

Verify

↓

Modify

↓

Validate

↓

Document

↓

Publish

```

Every stage should be completed before moving to the next one.

---

## Stage 1 — Understand

Before making changes, understand the current guide.

Review:

- front matter;

- metadata;

- Reading Experience structure;

- editorial components;

- internal links;

- hero image;

- related guides.

The objective is to understand the current implementation before introducing modifications.

---

## Stage 2 — Verify

Confirm that the guide satisfies the current technical contract.

Typical verification includes:

- Reading Experience markers;

- parser expectations;

- supported components;

- component contracts;

- layout behaviour.

Assumptions based on previous guides should never replace verification.

---

## Stage 3 — Modify

Only after understanding and verification should implementation begin.

Typical activities include:

- simplifying editorial content;

- improving metadata;

- extending internal linking;

- introducing reusable components;

- improving accessibility;

- reducing duplication.

Guide files should remain declarative throughout the process.

---

## Stage 4 — Validate

Every modification should be validated before publication.

Validation should include:

- framework compatibility;

- successful parsing;

- responsive behaviour;

- accessibility;

- rendering correctness;

- production build.

Validation is considered part of development rather than an optional final check.

---

## Stage 5 — Document

Whenever permanent implementation knowledge changes, the corresponding documentation should be updated during the same sprint.

Documentation is part of the Guide System.

Implementation should never evolve independently from documentation.

---

## Stage 6 — Publish

Publication should occur only after successful validation.

Published guides should comply with:

- Development Standards;

- Reading Experience Framework;

- Guide System architecture;

- QA requirements.

---

# Touch Once

Guide development follows the project-wide Touch Once philosophy.

Whenever a guide is opened, it should leave the review in its best known state.

Typical review activities include:

- framework migration;

- metadata completion;

- hero verification;

- reading time review;

- internal linking;

- reusable components;

- editorial simplification;

- Knowledge Network updates;

- QA verification.

Avoid multiple independent review cycles whenever a complete review can reasonably be performed at once.

---

# Internal Linking

Internal linking forms part of the Guide System architecture.

Its purpose is to connect related user journeys rather than maximise the number of links.

Every guide should contribute to the Knowledge Network.

Internal links should:

- support genuine navigation;

- connect complementary search intents;

- avoid unnecessary repetition;

- use natural anchor text.

Editorial quality should always take precedence over SEO density.

---

# Editorial Quality

Technical implementation exists to support editorial quality.

Every guide should remain:

- concise;

- accurate;

- easy to scan;

- mobile-friendly;

- easy to maintain;

- genuinely useful.

Whenever possible, simplify rather than expand.

---

# Validation Workflow

Every structural modification should complete the following validation sequence.

```text

Technical Verification

↓

Visual Verification

↓

Responsive Verification

↓

Accessibility Verification

↓

Production Build

↓

Publication

```

Structural changes should always include both linting and a complete production build.

---

# Development Principles

Every guide modification should respect the following permanent principles.

- Verify before modifying.

- Understand before extending.

- Prefer reusable solutions.

- Keep MDX declarative.

- Separate content from logic.

- Preserve framework consistency.

- Leave guides in a Current state.

- Update documentation whenever permanent knowledge changes.

These principles apply regardless of the size of the modification.



# Technical Reference

The following information complements the architectural documentation presented in this manual.

Unlike the previous sections, the Technical Reference documents the current implementation of the Guide System.

It is intended to support:

- day-to-day development;

- maintenance;

- onboarding;

- troubleshooting.

This section is expected to evolve together with the codebase.

---

# Current Implementation

## Core Files

The Guide System is primarily implemented through the following files.

### Dynamic Guide Page

app/guides/[slug]/page.tsx

Responsibilities:

- resolve guide slugs;

- load guide content;

- generate metadata;

- initialise the rendering pipeline.

---

### Reading Experience Layout

components/guides/PilotGuideLayout.tsx

Responsibilities:

- validate the Reading Experience contract;

- identify section markers;

- orchestrate guide rendering;

- generate the Table of Contents;

- insert shared framework components.

---

### Content Renderer

components/guides/GuideContentRenderer.tsx

Responsibilities:

- register MDX components;

- render Markdown;

- expose editorial components;

- apply shared typography;

- inject automatic framework behaviour.

---

### Shared Utilities

lib/

Responsibilities include:

- guide loading;

- metadata generation;

- search indexing;

- related guide configuration;

- parsing utilities.

---

### Guide Content

content/guides/

Contains one MDX file for every published guide.

MDX remains the editorial source of truth.

---

# Repository Reference

The Guide System is primarily organised into:

| Directory | Responsibility |

|-----------|----------------|

| `app/` | Dynamic pages |

| `components/guides/` | Framework and reusable components |

| `content/guides/` | Editorial content |

| `lib/` | Shared guide services |

| `public/images/guides/` | Hero images and static assets |

---

# Front Matter Reference

Reading Experience guides normally include:

- title

- description

- readingTime

- publishedAt

- author

- layout

- heroImage

- heroImageAlt

- locale

- keywords

- destinations

- searchAliases

Whenever metadata changes permanently, this section should be updated.

---

# Reading Experience Contract

Before modifying any guide always verify:

- required markers;

- marker uniqueness;

- parser expectations;

- supported metadata;

- component contracts.

The implementation remains the authoritative reference.

---

# Supported Components

Typical reusable components include:

- ApartmentContextCard

- GuideHighlightCard

- GuideDestinationTable

- GuideFaq

- GoodToKnow

- GuidePanoramicImage

- GuideSectionHeading

- RelatedGuidesBox

The available component set may evolve over time.

---

# Component Registration

Every new component follows the same sequence.

Implementation

↓

Export

↓

Registration

↓

Validation

↓

Documentation

↓

Production

Components should never be used inside MDX before completing this lifecycle.

---

# Current Component Contracts

Before using any component verify:

- supported props;

- accepted values;

- supported aliases;

- current implementation;

- automatic framework behaviour.

Never infer a component API by inspecting an older guide.

Always verify the implementation.

---

# Operational Reference

## Common Operations

Typical Guide System operations include:

### Create a New Guide

Verify:

- front matter;

- Reading Experience contract;

- metadata;

- hero image;

- internal linking;

- Related Guides.

---

### Migrate a Legacy Guide

Verify:

- framework compatibility;

- current metadata standard;

- reusable components;

- parser compatibility;

- Knowledge Network integration.

---

### Introduce a New Component

Verify:

- component responsibility;

- registration;

- documentation;

- backwards compatibility.

---

### Extend the Framework

Before modifying the Reading Experience Framework:

- evaluate system-wide impact;

- review existing guides;

- update documentation;

- complete full QA.

Framework changes should always benefit the entire Guide System.

---

# Change Impact

| If you modify... | Verify... |

|------------------|-----------|

| Reading Experience Layout | Rendering, parsing, TOC, shared components |

| GuideContentRenderer | MDX rendering, component registration |

| Parser | Section extraction, FAQ, Good to Know |

| MDX Components | Contracts, backwards compatibility |

| Metadata | Search integration, page metadata |

| Search integration | Guide Search compatibility |

---

# QA Checklist

Every structural modification should verify:

□ Front matter

□ Reading Experience markers

□ Metadata generation

□ Hero image

□ Hero image alt

□ TOC generation

□ Parser behaviour

□ FAQ rendering

□ Good to Know rendering

□ Editorial components

□ Internal linking

□ Related Guides

□ Reading time

□ Responsive behaviour

□ Accessibility

□ npm run lint

□ npm run build

---

# Common Pitfalls

## Existing Guides Are Not Specifications

Never assume an existing guide reflects the latest implementation.

Always verify the framework.

---

## Logic Inside MDX

Business logic belongs inside reusable React components.

MDX files should remain declarative.

---

## Unregistered Components

Components must be registered before use.

---

## Marker Changes

Never rename or duplicate Reading Experience markers without updating the implementation.

---

## Framework Duplication

Avoid manually inserting components already managed automatically by the framework.

---

## Documentation Drift

Whenever permanent implementation changes, update this document during the same sprint.

---

# Future Evolution

The Guide System should continue evolving through reusable improvements.

Long-term objectives include:

- centralised icon management;

- configurable Related Guides;

- continued framework simplification;

- richer planning metadata;

- progressive reduction of duplicated implementation.

New functionality should strengthen the existing framework rather than introduce parallel systems.

---

# Warm-up Checklist

Before working on the Guide System:

1. Read this document.

2. Review the current implementation.

3. Verify the Reading Experience contract.

4. Identify the affected architectural layer.

5. Review the Change Impact table.

6. Complete the QA checklist before publishing.

---

# Permanent Statement

This document defines the technical architecture of the Milan Red Line Guide System.

Architectural sections should change only when the Guide System itself evolves.

Implementation-specific updates belong in this Technical Reference.

The objective is to preserve a stable architectural document while allowing the implementation to evolve continuously without requiring repeated structural rewrites.

