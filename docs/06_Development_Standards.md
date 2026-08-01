# Development Standards

Module Owner: Development

Status: Stable (Living Document)

---

# Purpose

This document defines the permanent development standards for the Milan Red Line project.

Its purpose is to establish consistent engineering practices that keep the platform maintainable, predictable and easy to evolve over time.

Development standards define **how the project should be implemented**.

System-specific implementation details belong to the corresponding System Documents.

---

# Scope

These standards apply to every technical contribution made to the project.

They provide permanent guidance for:

- application development;

- guide implementation;

- reusable components;

- repository organisation;

- development workflows;

- quality assurance;

- documentation updates.

Technology-specific implementation details remain documented within the appropriate System Documents and Technical References.

---

# Development Philosophy

Development exists to strengthen the platform rather than simply deliver new functionality.

Every implementation should improve the long-term quality of the project.

Short-term convenience should never compromise architectural consistency or future maintainability.

Whenever multiple valid solutions exist, prefer the one that:

- improves reuse;

- reduces maintenance effort;

- simplifies future evolution;

- preserves architectural consistency.

Development quality is measured not only by delivered functionality, but also by how well the solution integrates with the existing platform.

---

# Core Development Principles

The Milan Red Line project follows a small number of permanent engineering principles.

---

## Simplicity Before Complexity

Prefer the simplest solution capable of solving the problem correctly.

Complexity should only be introduced when it provides clear long-term value.

---

## Reuse Before Duplication

Before introducing new code, verify whether the existing framework can be extended.

Reusable solutions should always be preferred over page-specific implementations.

---

## Readability Before Brevity

Code should prioritise clarity over minimalism.

Future maintainers should understand implementation decisions without unnecessary effort.

---

## Maintainability Before Speed

Implementation speed should never justify reducing long-term maintainability.

Temporary shortcuts should remain exceptional and be documented appropriately.

---

## Verify Before Modify

Before changing any permanent behaviour, always verify:

- the current implementation;

- the relevant documentation;

- affected System Documents;

- related project standards.

Implementation decisions should always be based on the current project state rather than historical assumptions.

---

## Documentation is Part of Development

Permanent implementation knowledge should be documented during the same sprint in which it is introduced.

Development is not considered complete until both implementation and permanent documentation remain aligned.



# Development Workflow

The Milan Red Line project follows a structured development workflow.

The objective is to produce implementations that remain technically correct, reusable and easy to maintain throughout the lifetime of the project.

Every development task should follow the same sequence regardless of its size.

---

# Development Lifecycle

Development follows six consecutive stages.

```text

Understand

↓

Verify

↓

Implement

↓

Validate

↓

Document

↓

Release

```

Each stage assumes that the previous stage has been completed successfully.

Skipping stages increases the probability of introducing inconsistencies.

---

## Stage 1 — Understand

Before modifying any part of the project, understand the current implementation.

Review:

- the affected system;

- related documentation;

- existing reusable solutions;

- architectural boundaries.

The objective is to understand the current platform before introducing changes.

---

## Stage 2 — Verify

Confirm that the intended modification is compatible with the current architecture.

Typical verification includes:

- relevant System Documents;

- Technical References;

- Permanent Decisions;

- Project Governance;

- existing implementation.

Never rely on assumptions based on previous project states.

---

## Stage 3 — Implement

Implementation should respect the project's architectural principles.

Whenever possible:

- extend existing systems;

- reuse existing components;

- preserve backwards compatibility;

- minimise duplicated code.

Every implementation should strengthen the platform rather than introduce isolated solutions.

---

## Stage 4 — Validate

Every significant modification should be technically validated.

Validation should include:

- successful linting;

- successful production build;

- responsive behaviour;

- accessibility basics;

- compatibility with related systems.

Validation is part of development, not a separate activity.

---

## Stage 5 — Document

Whenever permanent implementation knowledge changes, update the corresponding documentation during the same sprint.

Documentation should evolve together with the implementation.

Implementation and documentation should never diverge.

---

## Stage 6 — Release

Deployment should occur only after successful validation.

The preferred release sequence is:

```text

Implementation

↓

Review

↓

Lint

↓

Build

↓

Documentation

↓

Commit

↓

Push

↓

Deploy

```

Every release should leave both the implementation and the documentation in a consistent state.

---

# Repository Standards

The repository architecture is defined by the Infrastructure document.

Development should respect that architecture rather than introduce alternative organisational patterns.

Repository responsibilities should remain clearly separated.

Examples include:

- application code;

- reusable components;

- editorial content;

- shared libraries;

- documentation;

- static assets.

Structural changes should always preserve the overall repository architecture.

---

# MDX Development

Editorial content belongs inside the guide content directory.

Development should:

- keep front matter complete;

- use reusable editorial components;

- prefer semantic Markdown;

- avoid presentation-specific HTML;

- keep MDX declarative.

Business logic should always remain inside the application rather than the guide content.

---

# Reusable Components

Before introducing a new component, always verify:

- whether an existing component can be extended;

- whether future guides will reuse the functionality;

- whether the public API can remain generic.

Reusable components should strengthen the framework rather than solve isolated cases.

---

# PowerShell Policy

PowerShell should be used for repetitive and well-defined local modifications.

Typical examples include:

- metadata updates;

- internal linking;

- repetitive MDX edits;

- controlled batch replacements.

PowerShell should normally not be used for:

- React component development;

- TypeScript refactoring;

- architectural modifications;

- complex JSX updates.

Structural modifications should normally be delivered as complete source files.



# Technical Reference

The following information complements the permanent development standards defined in this document.

Unlike the previous sections, the Technical Reference contains operational guidance that may evolve together with the implementation.

This section supports day-to-day development without requiring changes to the architectural chapters.

---

# Common Operations

## Create a New Feature

Before implementation verify:

- architectural impact;

- existing reusable solutions;

- affected System Documents;

- related Technical References.

New functionality should integrate naturally with the existing platform.

---

## Modify an Existing System

Before making structural changes:

- understand the current implementation;

- identify affected architectural layers;

- review related documentation;

- evaluate backwards compatibility.

Large architectural changes should remain exceptional.

---

## Create a New Reusable Component

Before introducing a new component verify:

- whether the functionality already exists;

- whether the API can remain generic;

- whether the component belongs to the framework;

- whether documentation should be updated.

Reusable components should strengthen the platform rather than solve isolated cases.

---

## Perform Editorial Maintenance

For repetitive editorial maintenance, PowerShell should normally be preferred.

Typical examples include:

- metadata updates;

- internal linking;

- repetitive MDX modifications;

- controlled search-and-replace operations.

PowerShell should only be used for predictable, well-defined changes.

---

# Change Impact

| If you modify... | Review... |

|------------------|-----------|

| Shared components | All dependent guides |

| Guide renderer | MDX compatibility and framework behaviour |

| Repository structure | Infrastructure documentation |

| Metadata handling | Search and Metadata, Guide Search System |

| Knowledge Network | Internal linking and Related Guides |

| Documentation | Permanent Decisions and Project Governance where applicable |

---

# Quality Checklist

Before completing a development task verify:

□ Relevant documentation reviewed

□ Existing implementation understood

□ Reusable solutions preferred

□ Architectural consistency preserved

□ Successful lint

□ Successful production build

□ Responsive behaviour verified

□ Accessibility basics verified

□ Documentation updated where required

□ No unnecessary technical debt introduced

---

# Common Pitfalls

## Solving Local Problems with Global Changes

Framework modifications should benefit the entire platform.

Avoid introducing architectural complexity for isolated cases.

---

## Duplicating Existing Functionality

Before creating new code, always verify whether the framework already provides an appropriate solution.

---

## Skipping Documentation

Permanent implementation knowledge should never remain exclusively inside the source code.

Documentation should evolve during the same sprint.

---

## Ignoring System Boundaries

Every System Document owns a specific responsibility.

Avoid moving implementation details between documents without a clear architectural reason.

---

## Introducing Technical Debt

Technical debt should remain exceptional.

Whenever unavoidable:

- document it;

- justify it;

- define a plan for its resolution.

---

# Relationship with Other Documents

Development Standards should always be read together with:

- Infrastructure

- Guide System

- Guide Search System

- Search and Metadata

- QA Process

- Project Governance

- Permanent Decisions

Each document defines one distinct responsibility.

Whenever overlap exists, every topic should have a single authoritative source.

---

# Future Evolution

Development standards should evolve gradually together with the platform.

Future improvements should focus on:

- increasing reuse;

- reducing maintenance effort;

- strengthening architectural consistency;

- simplifying future development workflows.

Architectural stability should always take precedence over frequent process changes.

---

# Permanent Statement

This document defines the permanent engineering standards of the Milan Red Line project.

Its purpose is to ensure that every technical contribution strengthens the long-term quality, maintainability and consistency of the platform.

Architectural principles should evolve only when the development model itself changes.

Operational updates belong in this Technical Reference.

The objective is to maintain a development process that remains predictable, scalable and easy to understand for every future contributor.