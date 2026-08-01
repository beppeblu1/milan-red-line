# Project Governance

## Purpose

This document defines the governance framework of the Milan Red Line project.

Its purpose is to establish the long-term principles, workflows and decision-making model that ensure the project remains consistent, maintainable and scalable over time.

Unlike technical documentation, this document does not describe implementation details.

Instead, it defines how the project is managed, how project knowledge evolves and how permanent decisions are preserved.

This document represents the highest level of operational governance for the project.

---

# Governance Principles

The Milan Red Line project is governed by a small set of permanent principles.

These principles guide technical, editorial and organisational decisions across the entire platform.

Whenever multiple valid solutions exist, decisions should favour the option that best improves the project's long-term quality, maintainability and consistency.

---

## Long-Term Thinking

Every significant decision should favour long-term maintainability over short-term convenience.

Temporary optimisations should never compromise the long-term quality of the project.

---

## Simplicity Before Complexity

Whenever multiple solutions are available, prefer the simplest solution capable of solving the problem correctly.

Additional complexity should only be introduced when it provides clear long-term value.

---

## Evolution Over Revolution

The project should evolve incrementally.

Large architectural redesigns should remain exceptional.

Whenever practical, existing systems should be improved rather than replaced.

---

## Reuse Before Creation

Before introducing new components, documents, systems or workflows, always verify whether the existing platform already provides a suitable solution.

Extending an existing solution is generally preferable to creating a new one.

---

## Single Source of Truth

Every permanent piece of project knowledge should have one authoritative location.

Duplicating permanent information across multiple documents should be avoided.

Whenever overlap is identified, one document becomes the authoritative source while the others reference it.

---

## Documentation is Part of the Product

Documentation is considered part of the project itself.

A development task is not complete until the corresponding permanent documentation has been updated whenever necessary.

Project quality includes both implementation quality and documentation quality.

---

# Project Knowledge Lifecycle

Project knowledge evolves through a structured lifecycle.

Ideas become permanent knowledge through implementation, validation and documentation.

The objective is to preserve architectural decisions while allowing implementation details to evolve naturally.

Knowledge should progressively move from temporary working material into stable project documentation, ensuring that long-term understanding is never dependent on Sprint Handovers alone.



# Documentation Governance

Documentation is treated as a permanent engineering asset rather than a collection of historical notes.

Its primary objective is to preserve project knowledge, reduce maintenance effort and minimise repeated decision-making.

Documentation should evolve together with the project while remaining organised, consistent and easy to navigate.

The documentation system should support both long-term project continuity and efficient onboarding for future development sessions.

---

# Documentation Categories

Project documentation is organised into distinct categories.

Each category has one clearly defined responsibility.

Whenever possible, categories should complement one another rather than overlap.

---

## Blueprint

The Blueprint defines the long-term vision of the project.

It explains:

- why the project exists;

- its strategic objectives;

- business positioning;

- long-term architectural direction.

The Blueprint represents the highest level of strategic documentation.

---

## Standards

Standards define permanent technical, editorial and operational rules.

Examples include:

- Reading Experience Framework;

- Editorial Design System;

- Development Standards;

- Content Standards;

- Knowledge Network;

- Search and Metadata;

- QA Process.

Standards define how work should be performed.

They intentionally avoid implementation-specific details.

---

## System Documents

System Documents document stable platform systems.

Each System Document explains:

- why the system exists;

- its architecture;

- design principles;

- maintenance principles;

- future evolution;

- permanent architectural decisions.

System Documents intentionally preserve the stable architecture of each platform system.

Implementation details belong in the Technical Reference.

Temporary implementation history belongs only in Sprint Handovers.

Together, these three documentation layers ensure that architecture, implementation and project history evolve independently while remaining consistent.

---

## Technical Reference

Every System Document concludes with a Technical Reference.

The Technical Reference contains implementation-oriented information intended to support development, maintenance and onboarding.

Typical contents include:

- source files;

- reusable components;

- hooks;

- dependencies;

- environment variables;

- operational procedures;

- deployment notes;

- common development tasks;

- change impact;

- QA checklist;

- common pitfalls.

Unlike the architectural sections of a System Document, the Technical Reference is expected to evolve together with the implementation.

---

## Sprint Handovers

Sprint Handovers are temporary working documents.

They capture implementation knowledge generated during a development sprint.

Their purpose is to preserve continuity until permanent knowledge has been migrated into the appropriate project documentation.

Sprint Handovers should never become the long-term authoritative source of project knowledge.

Once their permanent knowledge has been consolidated, Sprint Handovers may be archived or removed.

---

# Documentation Architecture

The Milan Red Line project follows a modular documentation architecture.

Every permanent document has one primary responsibility.

Whenever possible, documents should reference one another instead of duplicating information.

The objective is to create a coherent documentation ecosystem rather than a collection of isolated documents.

---

## Single Responsibility

Each permanent document should focus on one primary domain.

Typical examples include:

- project vision;

- governance;

- editorial standards;

- development standards;

- system architecture;

- operational procedures.

If a topic grows beyond the intended scope of a document, it should be moved into a dedicated document rather than expanding the original indefinitely.

---

## Cross References

Related documents should reference one another whenever this improves navigation and understanding.

Cross references should replace duplicated explanations whenever practical.

---

## Single Source of Truth

Every permanent topic should have one authoritative document.

Other documents may summarise the topic when necessary, but should always direct readers to the authoritative source for complete information.

Maintaining multiple independent versions of the same permanent knowledge should be avoided.

---

# Documentation Lifecycle

Permanent knowledge follows a structured lifecycle.

Knowledge generated during development should progressively migrate from temporary working material into permanent documentation.

The expected lifecycle is:

Idea

↓

Implementation

↓

Sprint Handover

↓

Documentation Review

↓

Migration into Permanent Documentation

↓

Removal or Archiving of Temporary Documentation

This lifecycle ensures that permanent knowledge remains consolidated while temporary documentation naturally disappears once its purpose has been fulfilled.



# Decision Governance

Project decisions should follow a consistent governance model.

Strategic direction, permanent standards and implementation details belong to different documentation layers.

Maintaining this separation allows the project to evolve without creating contradictions or unnecessary documentation updates.

---

# Decision Hierarchy

Project decisions follow a clearly defined hierarchy.

Higher-level documents establish direction.

Lower-level documents define implementation.

The hierarchy is organised as follows:

Project Blueprint

↓

Project Roadmap

↓

Permanent Decisions

↓

Standards

↓

System Documents

↓

Technical References

↓

Sprint Handovers

Each level should remain consistent with the levels above it.

Lower-level documentation should never contradict higher-level project decisions.

---

# Documentation Touch Once

Documentation follows the same philosophy adopted for the editorial workflow.

Whenever a permanent document is opened for review, it should leave the review in its best known state.

The objective is to avoid repeated revisions for the same class of improvements.

Each documentation review should:

- analyse the complete document;

- identify outdated information;

- eliminate unnecessary duplication;

- integrate newly acquired permanent knowledge;

- improve internal consistency;

- leave the document in a Current state.

Temporary work-in-progress documents are excluded from this principle.

---

# Audit Before Refactoring

Before restructuring documentation, the project follows a mandatory audit process.

No structural modification should be made before understanding the complete role of the document inside the documentation ecosystem.

The recommended workflow is:

Read

↓

Compare

↓

Understand

↓

Decide

↓

Modify

This process reduces unnecessary restructuring, preserves project knowledge and avoids introducing duplicate documentation.

---

# Decision-Making Principles

Whenever multiple valid solutions exist, project decisions should follow a consistent evaluation process.

Long-term maintainability should always take precedence over short-term convenience.

---

## Prefer Evolution Over Revolution

Improve existing systems before introducing replacements.

Incremental evolution generally produces more maintainable results than complete redesigns.

---

## Prefer Specialisation Over Expansion

When new requirements emerge, first evaluate whether they strengthen an existing system.

Create new systems only when the problem represents a genuinely new responsibility.

This principle applies equally to:

- documentation;

- editorial content;

- software architecture;

- reusable components.

---

## Prefer Reuse Over Duplication

Before creating new material, verify whether an existing solution can be extended.

Duplicated structures increase maintenance effort and reduce long-term consistency.

---

## Separate Strategy from Implementation

Strategic decisions should remain independent from implementation details.

Implementation may evolve over time while preserving the underlying strategy.

This separation improves maintainability and reduces unnecessary documentation updates.

---

## Preserve Project Memory

Historical information should not be preserved simply because it is old.

Instead, evaluate every temporal reference according to its long-term value.

Documentation reviews classify temporal information into three categories.

### Historical References

Describe completed activities, obsolete plans or temporary implementation history.

These references should normally be removed.

---

### Contextual References

Describe the current state of the project.

These references should be reviewed and updated whenever the project evolves.

---

### Evolutionary References

Explain why important architectural, technical or editorial decisions were made.

These references should normally be preserved because they document permanent project knowledge rather than temporary history.

---

# Long-Term Maintenance

Long-term maintainability is considered a primary project objective.

Every significant change should reduce future maintenance effort whenever reasonably possible.

Project quality should improve incrementally over time rather than relying on occasional large-scale restructuring.

Maintenance activities should prioritise:

- consistency;

- clarity;

- reuse;

- documentation quality;

- architectural stability.

Implementation complexity should remain hidden behind stable interfaces, reusable systems and well-maintained documentation whenever practical.



# Decision Governance

Project decisions should follow a consistent governance model.

Strategic direction, permanent standards and implementation details belong to different documentation layers.

Maintaining this separation allows the project to evolve without creating contradictions or unnecessary documentation updates.

---

# Decision Hierarchy

Project decisions follow a clearly defined hierarchy.

Higher-level documents establish direction.

Lower-level documents define implementation.

The hierarchy is organised as follows:

Project Blueprint

↓

Project Roadmap

↓

Permanent Decisions

↓

Standards

↓

System Documents

↓

Technical References

↓

Sprint Handovers

Each level should remain consistent with the levels above it.

Lower-level documentation should never contradict higher-level project decisions.

---

# Documentation Touch Once

Documentation follows the same philosophy adopted for the editorial workflow.

Whenever a permanent document is opened for review, it should leave the review in its best known state.

The objective is to avoid repeated revisions for the same class of improvements.

Each documentation review should:

- analyse the complete document;

- identify outdated information;

- eliminate unnecessary duplication;

- integrate newly acquired permanent knowledge;

- improve internal consistency;

- leave the document in a Current state.

Temporary work-in-progress documents are excluded from this principle.

---

# Audit Before Refactoring

Before restructuring documentation, the project follows a mandatory audit process.

No structural modification should be made before understanding the complete role of the document inside the documentation ecosystem.

The recommended workflow is:

Read

↓

Compare

↓

Understand

↓

Decide

↓

Modify

This process reduces unnecessary restructuring, preserves project knowledge and avoids introducing duplicate documentation.

---

# Decision-Making Principles

Whenever multiple valid solutions exist, project decisions should follow a consistent evaluation process.

Long-term maintainability should always take precedence over short-term convenience.

---

## Prefer Evolution Over Revolution

Improve existing systems before introducing replacements.

Incremental evolution generally produces more maintainable results than complete redesigns.

---

## Prefer Specialisation Over Expansion

When new requirements emerge, first evaluate whether they strengthen an existing system.

Create new systems only when the problem represents a genuinely new responsibility.

This principle applies equally to:

- documentation;

- editorial content;

- software architecture;

- reusable components.

---

## Prefer Reuse Over Duplication

Before creating new material, verify whether an existing solution can be extended.

Duplicated structures increase maintenance effort and reduce long-term consistency.

---

## Separate Strategy from Implementation

Strategic decisions should remain independent from implementation details.

Implementation may evolve over time while preserving the underlying strategy.

This separation improves maintainability and reduces unnecessary documentation updates.

---

## Preserve Project Memory

Historical information should not be preserved simply because it is old.

Instead, evaluate every temporal reference according to its long-term value.

Documentation reviews classify temporal information into three categories.

### Historical References

Describe completed activities, obsolete plans or temporary implementation history.

These references should normally be removed.

---

### Contextual References

Describe the current state of the project.

These references should be reviewed and updated whenever the project evolves.

---

### Evolutionary References

Explain why important architectural, technical or editorial decisions were made.

These references should normally be preserved because they document permanent project knowledge rather than temporary history.

---

# Long-Term Maintenance

Long-term maintainability is considered a primary project objective.

Every significant change should reduce future maintenance effort whenever reasonably possible.

Project quality should improve incrementally over time rather than relying on occasional large-scale restructuring.

Maintenance activities should prioritise:

- consistency;

- clarity;

- reuse;

- documentation quality;

- architectural stability.

Implementation complexity should remain hidden behind stable interfaces, reusable systems and well-maintained documentation whenever practical.