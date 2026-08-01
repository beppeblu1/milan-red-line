# # Permanent Decisions

Module Owner: Project Management

Status: Living Document

---

# Purpose

This document records the permanent decisions that define the Milan Red Line project.

A Permanent Decision is a project-level decision expected to remain valid across multiple development phases and documentation revisions.

Permanent Decisions provide long-term direction.

They do not describe implementation details.

Implementation belongs in Standards, System Documents and Technical References.

---

# Scope

Permanent Decisions apply to the entire project.

They may influence:

- architecture;

- editorial strategy;

- documentation;

- development workflow;

- user experience;

- project governance.

Whenever a permanent decision conflicts with a lower-level document, this document takes precedence.

---

# Decision Categories

Permanent Decisions are organised into four categories.

## Project Principles

Define the long-term philosophy of the project.

---

## Editorial Decisions

Define permanent editorial direction.

---

## Technical Decisions

Define long-term architectural choices.

---

## Documentation Decisions

Define how permanent project knowledge is organised and maintained.

---

# Project Principles

## PD-001 — Help First

The project always prioritises helping travellers before promoting accommodation.

Status: Active

---

## PD-002 — Evolution Over Revolution

The project evolves through incremental improvements.

Existing systems should be strengthened before introducing new ones.

Large architectural redesigns should remain exceptional.

Status: Active

---

## PD-003 — Reuse Before Creation

Before introducing new systems, documents, workflows or components, always verify whether an existing solution can be extended.

Reusable solutions are preferred over parallel implementations.

Status: Active

---

## PD-004 — Documentation is Part of the Product

Permanent documentation is considered part of every release.

Development is not complete until permanent documentation has been updated whenever necessary.

Status: Active



# Editorial Decisions

## PD-005 — Hub → Connector → Specialist

The editorial architecture follows the Hub → Connector → Specialist model.

Every guide belongs to one clearly defined search intent.

Hub guides provide broad orientation.

Connector guides connect related topics.

Specialist guides answer one specific user question.

Status: Active

---

## PD-006 — One Guide, One Search Intent

Each guide should answer one primary search intent.

Whenever a guide begins covering multiple independent intents, the preferred solution is to split the content into specialised guides connected through the Knowledge Network.

Status: Active

---

## PD-007 — Reading Experience Framework

Every new guide must follow the Reading Experience Framework.

The framework defines the permanent editorial structure of the guide platform.

Individual guides should adapt to the framework rather than modifying it for isolated editorial cases.

Status: Active

---

## PD-008 — Topical Authority Strategy

Long-term SEO growth is based on topical authority rather than isolated keyword targeting.

The project expands by strengthening coherent content clusters before creating entirely new topics.

Permanent editorial pillars currently include:

- Accommodation

- Transport

- Day Trips

- Local Knowledge

Additional pillars may be introduced only when they represent a genuine long-term expansion of the project.

Status: Active

---

## PD-009 — Knowledge Network

Every guide forms part of the Knowledge Network.

Internal linking should primarily improve the reader's journey by connecting related search intents.

Internal links should never exist solely for SEO purposes.

Status: Active

---

## PD-010 — Touch Once

Whenever a guide is opened for significant editorial or technical work, the objective is to leave it in its best known state before the sprint concludes whenever reasonably possible.

Typical improvements include:

- Reading Experience migration;

- metadata completion;

- internal linking;

- reusable component adoption;

- editorial simplification;

- QA validation.

The objective is to minimise repeated review cycles while continuously improving the overall quality of the guide ecosystem.

Status: Active



# Technical Decisions

## PD-011 — Reusable Components

Reusable behaviour should be implemented through shared components whenever reasonably practical.

Guide-specific implementations should remain exceptional.

The preferred approach is always to strengthen the existing framework before introducing new implementations.

Status: Active

---

## PD-012 — Framework Before Individual Cases

Shared frameworks should evolve only when an improvement benefits the entire platform.

The framework should never be modified solely to accommodate an isolated guide, page or use case.

Individual content should adapt to the framework whenever reasonably possible.

Status: Active

---

## PD-013 — Declarative Content

Editorial content should remain declarative.

Business logic, rendering behaviour and application decisions belong to the implementation layer rather than the content itself.

Status: Active

---

# Documentation Decisions

## PD-014 — Single Source of Truth

Every permanent topic should have one authoritative document.

Permanent knowledge should not be duplicated across multiple documents.

When overlap exists, one document becomes the authoritative source while the others reference it.

Status: Active

---

## PD-015 — Documentation Architecture

The project documentation follows a layered architecture.

Project knowledge is organised into:

- Blueprint;

- Governance;

- Standards;

- System Documents;

- Technical References;

- Sprint Handovers.

Each layer has one clearly defined responsibility.

Status: Active

---

## PD-016 — Architecture Before Implementation

Permanent documentation should distinguish between architectural knowledge and implementation details.

Architecture should remain stable.

Implementation should evolve primarily inside the Technical Reference sections.

Status: Active

---

## PD-017 — Documentation Touch Once

Whenever a permanent document is opened for review, the objective is to leave it in its best known state.

A documentation review should normally:

- eliminate obsolete information;

- remove duplication;

- integrate newly acquired permanent knowledge;

- improve consistency;

- leave the document in Current status.

Status: Active

---

## PD-018 — Sprint Handovers Are Transitional

Sprint Handovers exist to preserve implementation continuity during active development.

Permanent knowledge should be migrated into the appropriate project documentation as soon as reasonably possible.

Sprint Handovers should never become the long-term authoritative source of project knowledge.

Status: Active



# Governance Decisions

## PD-019 — Success Metrics Activation

Meaningful project KPIs will be introduced only after reliable analytics data becomes available.

Until then:

- avoid artificial KPI reporting;

- use Search Console and Analytics primarily for observation rather than performance scoring;

- do not introduce permanent Success Metrics sections into project governance or system documentation.

Once sufficient and statistically meaningful data exists, a dedicated Success Metrics framework may become part of the permanent project documentation.

Status: Active

---

# Decision Lifecycle

Permanent Decisions are expected to remain stable.

Changing an existing decision should be considered an exceptional event.

When a Permanent Decision evolves:

1. Preserve the historical identifier.

2. Mark the previous decision as **Superseded** rather than deleting it.

3. Introduce the new decision with a new identifier.

4. Document the reason for the change.

5. Update any affected Standards or System Documents.

Project history should remain understandable without relying on Sprint Handovers.

---

# Decision Ownership

Permanent Decisions are owned by Project Management.

However, new Permanent Decisions may emerge from any project area, including:

- Development;

- Content & SEO;

- UX & Design;

- Analytics & Growth;

- Infrastructure.

Project Management is responsible for validating whether a decision has become sufficiently stable to be recorded in this document.

---

# Review Policy

This document should be reviewed only when:

- a new long-term project decision has been adopted;

- an existing decision has become obsolete;

- project governance changes significantly.

Routine implementation changes should never require modifications to this document.

---

# Permanent Statement

This document represents the highest level of permanent project decisions.

Its purpose is to preserve the long-term identity of the Milan Red Line project independently of implementation details, development sprints or temporary organisational changes.

Whenever uncertainty exists, Permanent Decisions should be considered authoritative over lower-level documentation.

The objective is to ensure that the project evolves continuously while remaining faithful to its long-term vision, architectural principles and governance model.



