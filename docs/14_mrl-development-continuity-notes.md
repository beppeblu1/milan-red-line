# Development Continuity Notes

Module Owner: Development

Status: Living Document

---

# Purpose

This document complements the permanent Milan Red Line documentation.

Its purpose is to preserve practical development knowledge, established workflows and recurring implementation patterns that help future Development chats understand how the project is built and how development is expected to proceed.

Unlike the project's permanent Standards and System Documents, this document focuses on practical experience accumulated during development.

It intentionally avoids duplicating architectural documentation and should instead provide operational guidance that would otherwise be lost between development sessions.

---

# Scope

This document applies to everyday development activities.

Its responsibilities include:

- recommended development workflows;

- PowerShell best practices;

- Git workflow recommendations;

- recurring debugging lessons;

- practical implementation advice;

- onboarding guidance for future Development chats.

It intentionally does not define:

- system architecture;

- permanent coding standards;

- Reading Experience rules;

- Knowledge Network architecture;

- implementation details of individual systems.

Those responsibilities belong to the appropriate permanent documentation.

---

# Development Philosophy

Development follows a small number of long-term principles.

---

## Touch Once

Whenever a guide, component or feature is opened for substantial work, the objective is to leave it in its best known state.

Whenever reasonably practical:

- complete the implementation;

- update related documentation;

- complete internal linking;

- perform QA;

- avoid creating unnecessary follow-up work.

Incremental improvement is preferred over repeated partial revisions.

---

## Reuse Before Creating

Before introducing a new implementation, always verify whether an existing solution already exists.

Prefer:

- reusable components;

- shared utilities;

- generic APIs;

- centralised configuration.

Avoid page-specific implementations whenever a reusable solution is possible.

---

## Simplicity First

Prefer solutions that remain easy to understand six months later.

Simple, explicit implementations are generally preferred over highly abstract solutions.

Optimisation should be driven by measurable need rather than anticipation.

---

## Documentation Is Part of Development

Implementation is not considered complete until the relevant permanent documentation has been updated.

Sprint handovers are temporary.

Permanent knowledge should always be transferred into the appropriate Standards or System Documents.

---

# Development Workflow

The preferred workflow for significant implementation work is:

```text

Understand

↓

Plan

↓

Implement

↓

Validate

↓

Document

↓

Commit

↓

Push

```

Skipping steps usually creates technical debt.

Development should progress through small, well-understood changes rather than large unverified modifications.



# Preferred Development Practices

The following practices have consistently proven reliable throughout the development of Milan Red Line.

They should be considered the preferred way of working unless a specific situation requires a different approach.

---

## Internal Linking

Knowledge Network maintenance should normally be completed within the same sprint as the guide itself.

Whenever a new guide is published:

- update `related-guides.ts`;

- verify outbound contextual links;

- add appropriate inbound contextual links;

- ensure the guide clearly belongs to an editorial cluster.

A guide should never remain isolated inside the Knowledge Network.

---

## PowerShell Workflow

PowerShell is the preferred tool for repetitive, well-defined editorial maintenance.

Typical examples include:

- metadata updates;

- internal linking;

- repetitive MDX modifications;

- controlled batch replacements.

Large scripted changes should always remain defensive, repeatable and easy to verify.

---

## Defensive Scripting

Scripts should always:

- verify that target files exist;

- resolve file paths explicitly;

- avoid duplicate insertions;

- validate insertion anchors;

- report modified, skipped and failed files separately;

- stop when assumptions are violated.

A script should never silently modify unexpected content.

---

## Anchor Strategy

When automating editorial changes, prefer stable insertion points such as:

- Reading Experience markers `rx:*`);

- component boundaries;

- stable headings;

- unique identifiers;

- narrowly scoped regular expressions.

Avoid using long editorial paragraphs as anchors.

Editorial copy evolves more frequently than structural markers.

---

## Git Verification

Before running QA, inspect the pending changes.

Recommended sequence:

```text

git diff --stat

↓

git diff

↓

QA

↓

Build

```

Review should confirm:

- only intended files changed;

- no unexpected whole-file rewrites;

- understandable modifications.

Small, predictable diffs are considered part of code quality.

---

# Debugging Principles

Several recurring lessons have emerged during development.

---

## Inspect Before Changing

When an imported symbol appears to be missing, inspect the source module before modifying dependent code.

Many issues originate from incomplete edits rather than incorrect imports.

---

## Resolve Paths Explicitly

PowerShell and .NET path resolution behave differently.

When using .NET file operations:

- resolve paths explicitly;

- avoid assuming relative paths behave identically.

This prevents unnecessary filesystem errors.

---

## Validate the Result

A successful script execution does not necessarily indicate a successful change.

Always verify:

- the resulting diff;

- production build;

- runtime behaviour.

Verification is considered part of implementation rather than a separate activity.

---

# Practical Development Rules

Experience has shown that the following habits consistently reduce future maintenance effort.

Prefer:

- reusable implementations;

- incremental improvements;

- centralised configuration;

- minimal diffs;

- documented architectural decisions.

Avoid:

- duplicated logic;

- page-specific implementations;

- unnecessary abstractions;

- undocumented behaviour;

- temporary fixes without follow-up.



# Relationship with Other Documents

Development Continuity Notes should always be read together with the project's permanent documentation.

In particular:

- Development Standards define permanent coding standards.

- QA and Release Process defines the Quality Assurance workflow.

- Guide System documents guide architecture and implementation.

- Guide Search System documents the search architecture.

- Infrastructure documents the technical platform.

- Knowledge Network documents editorial relationships.

- Reading Experience Framework defines guide structure.

- Editorial Design System documents reusable editorial components.

This document complements those sources with practical development experience.

Whenever overlap exists, the permanent document should always be considered the authoritative source.

---

# Onboarding for Future Development Chats

A new Development chat should become productive as quickly as possible.

Recommended reading order:

1. Project Blueprint

2. Documentation Index

3. Development Standards

4. QA and Release Process

5. Guide System

6. Guide Search System

7. Infrastructure

8. Development Continuity Notes

This sequence provides sufficient architectural understanding before implementation begins.

---

# Continuous Improvement

Development practices should evolve together with the project.

When a recurring implementation pattern repeatedly proves successful:

- first determine whether it represents a permanent architectural decision;

- if so, move it into the appropriate Standard or System Document;

- otherwise, preserve it here as practical operational guidance.

This document should remain concise and focused on development experience rather than becoming a second technical reference.

---

# Maintenance

Review this document whenever:

- recurring development practices evolve;

- new debugging lessons emerge;

- preferred workflows change;

- onboarding guidance needs improvement.

Routine implementation changes should normally not require updates unless they introduce new long-term development knowledge.

---

# Permanent Statement

This document preserves practical development knowledge accumulated throughout the Milan Red Line project.

Its purpose is to help future Development chats adopt established workflows, avoid previously solved problems and remain consistent with the project's long-term development philosophy.

Permanent architectural knowledge belongs in the project's Standards and System Documents.

This document exists to preserve the practical experience that makes day-to-day development faster, safer and more consistent.

