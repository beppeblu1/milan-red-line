# Search and Metadata

Module Owner: Development / Content & SEO

Status: Living Document

---

# Purpose

This document defines the permanent standards governing metadata, search discoverability and technical SEO for the Milan Red Line project.

Its purpose is to establish a consistent metadata architecture that supports content discovery, internal systems and long-term maintainability.

This document defines **what metadata exist and how they should be structured**.

It does not describe how the Guide Search system works.

Guide Search implementation is documented separately in the Guide Search System document.

---

# Scope

This document applies to every page and guide published by the project.

It defines standards for:

- metadata structure;

- metadata quality;

- URL conventions;

- canonical strategy;

- image metadata;

- technical SEO standards;

- metadata validation.

Search implementation, indexing algorithms and rendering behaviour belong to the Guide Search System.

---

# Metadata Philosophy

Metadata exist to describe content.

They are not marketing copy and should never be treated as keyword stuffing.

High-quality metadata improve:

- search discoverability;

- internal navigation;

- content classification;

- future multilingual support;

- long-term maintainability.

Metadata should remain structured, accurate and reusable.

Whenever metadata and page content diverge, the page content is considered the authoritative source.

Metadata should then be updated accordingly.

---

# Core Principles

The metadata system follows a small number of permanent principles.

---

## Accuracy Before Optimisation

Metadata should accurately describe the page.

Improving discoverability must never compromise accuracy.

---

## Consistency Before Creativity

Equivalent pages should use consistent metadata structures.

Consistency improves maintenance and future automation.

---

## Structured Before Freeform

Whenever practical, metadata should use structured fields rather than freeform text.

Structured metadata simplify validation, indexing and future platform evolution.

---

## Reuse Before Duplication

Metadata should support multiple systems simultaneously.

The same metadata may contribute to:

- search discovery;

- internal search;

- Knowledge Network;

- future multilingual support.

Metadata should therefore be defined once and reused wherever possible.

---

# Metadata Lifecycle

Metadata follow a predictable lifecycle.

```text

Creation

↓

Validation

↓

Publication

↓

Search Index

↓

Continuous Evolution

```

Metadata should evolve together with the content they describe.

Whenever permanent metadata fields change, this document should be updated during the same sprint.

---

# Metadata Categories

Project metadata can be grouped into four categories.

## Descriptive Metadata

Describe the content itself.

Typical examples include:

- title;

- description;

- hero image alternative text.

---

## Classification Metadata

Support organisation and discovery.

Typical examples include:

- keywords;

- destinations;

- search aliases;

- locale.

---

## Publishing Metadata

Describe publication characteristics.

Typical examples include:

- publication date;

- reading time;

- canonical URL.

---

## Technical Metadata

Support search engines and platform behaviour.

Typical examples include:

- canonical URLs;

- image optimisation;

- future structured data;

- future hreflang support.



# Metadata Standards

Every published page should expose complete, accurate and consistent metadata.

Metadata should describe the content rather than attempt to manipulate search rankings.

The metadata model should remain stable across the entire project.

---

## Required Metadata

Reading Experience guides normally include:

- title;

- description;

- keywords;

- destinations;

- search aliases;

- reading time;

- publication date;

- hero image;

- hero image alternative text.

Additional metadata may be introduced as the platform evolves.

Whenever permanent metadata fields change, this document should be updated accordingly.

---

## Metadata Quality

Metadata should always be:

- accurate;

- concise;

- descriptive;

- evergreen;

- consistent.

Metadata should never:

- duplicate unrelated keywords;

- exaggerate page content;

- become outdated;

- contradict the guide itself.

The page content remains the authoritative source.

---

# URL Standards

Published URLs should remain:

- short;

- descriptive;

- stable;

- lowercase;

- evergreen.

URLs form part of the long-term architecture of the project.

Published URLs should therefore change only when there is a compelling architectural reason.

Whenever URL changes become unavoidable, the corresponding redirection strategy should also be planned.

---

# Canonical Strategy

Every published page should expose a correct canonical URL.

Canonical URLs:

- prevent duplicate content;

- consolidate search equity;

- identify the preferred public version of a page.

Canonical strategy should remain consistent across the entire platform.

---

# Image Metadata

Editorial images form part of the metadata architecture.

Guide hero images should provide:

- descriptive alternative text;

- meaningful filenames;

- optimised WebP assets.

Alternative text should describe the image itself rather than repeat page titles or keywords.

Image filenames should remain descriptive and evergreen.

---

# Metadata Validation

Metadata quality should be verified before publication.

Validation should confirm:

- metadata completeness;

- metadata accuracy;

- canonical URL;

- hero image metadata;

- heading structure;

- accessibility basics.

Metadata validation should be considered part of the publication workflow rather than an optional final review.

---

# Relationship with Guide Search

Guide Search relies on the metadata defined by this document.

Search implementation, indexing logic, ranking behaviour and search interfaces belong to the Guide Search System.

This document defines the metadata model consumed by those systems.

Whenever metadata fields evolve, any dependent systems should be reviewed for compatibility.

---

# Relationship with the Knowledge Network

Metadata contribute to the organisation of the Knowledge Network.

Keywords, destinations and search aliases improve guide discoverability and strengthen relationships between related content.

Metadata should therefore remain consistent with the Knowledge Network architecture rather than being optimised independently for individual guides.



# Technical Reference

The following information complements the permanent metadata architecture defined in this document.

Unlike the previous sections, the Technical Reference documents the current operational standards used by the project.

This section is expected to evolve together with the implementation.

---

# Current Metadata Reference

The current metadata model typically includes:

## Descriptive Fields

- title

- description

- heroImage

- heroImageAlt

---

## Classification Fields

- keywords

- destinations

- searchAliases

- locale

---

## Publishing Fields

- readingTime

- publishedAt

- layout

---

## Technical Fields

- canonical URL

- image optimisation

- future structured data

- future hreflang support

The exact metadata schema should always remain aligned with the current implementation.

---

# Metadata Validation Checklist

Before publishing a guide verify:

□ title

□ description

□ keywords

□ destinations

□ search aliases

□ reading time

□ publication date

□ hero image

□ hero image alternative text

□ canonical URL

□ heading hierarchy

□ accessibility basics

□ responsive behaviour

□ successful production build

---

# Common Operations

## Create a New Guide

Verify:

- complete metadata;

- URL structure;

- canonical URL;

- hero image metadata;

- internal linking.

---

## Update an Existing Guide

Verify:

- metadata consistency;

- canonical URL;

- updated publication information where appropriate;

- compatibility with the Knowledge Network.

---

## Introduce a New Metadata Field

Before adding a permanent metadata field:

- verify its long-term value;

- update the metadata model;

- review dependent systems;

- update documentation;

- validate compatibility with Guide Search.

Metadata should evolve in a controlled and predictable way.

---

# Search Console

Google Search Console should primarily be used to:

- identify indexing issues;

- monitor coverage;

- discover new search queries;

- identify opportunities for improving existing guides.

Search Console should support editorial improvement rather than encourage reactive keyword optimisation.

---

# Analytics

Analytics supports long-term editorial and product decisions.

Analytics should be used to:

- understand user behaviour;

- evaluate content usefulness;

- identify navigation improvements;

- observe long-term trends.

Short-term fluctuations should not drive editorial strategy.

Meaningful KPI reporting should begin only after statistically reliable data becomes available, in accordance with Permanent Decisions.

---

# Relationship with Other Documents

This document should be read together with:

- Content Standards

- Knowledge Network

- Guide Search System

- Guide System

- QA Process

- Permanent Decisions

Each document defines one distinct responsibility.

Whenever overlap exists, every topic should have a single authoritative source.

---

# Future Evolution

The metadata architecture is expected to evolve gradually.

Future improvements may include:

- structured data expansion;

- multilingual metadata;

- hreflang implementation;

- richer content classification;

- additional reusable metadata fields.

Future evolution should preserve backwards compatibility whenever reasonably practical.

Architectural changes should remain exceptional.

---

# Permanent Statement

This document defines the permanent metadata architecture of the Milan Red Line project.

Architectural principles should change only when the metadata model itself evolves.

Operational updates belong in this Technical Reference.

The objective is to preserve a stable metadata standard while allowing the implementation to evolve continuously together with the platform.

