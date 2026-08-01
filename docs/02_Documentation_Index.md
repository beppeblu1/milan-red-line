# Documentation Index

Module Owner: Project Management

Status: Stable (Living Document)

---

# Purpose

This document provides an overview of the Milan Red Line documentation.

Its purpose is to explain:

- how the documentation is organised;

- the responsibility of each document;

- where the authoritative source for every major topic can be found.

Rather than duplicating information, this document serves as the navigation guide for the entire documentation system.

Every permanent topic should have exactly one authoritative document.

---

# Documentation Philosophy

The Milan Red Line documentation follows four fundamental principles.

## Single Source of Truth

Every permanent topic belongs to one authoritative document.

Other documents may reference that information but should not duplicate it.

---

## Layered Documentation

Documentation is organised into layers.

Higher-level documents explain strategy and governance.

Lower-level documents explain implementation.

---

## Architecture Before Implementation

Permanent documents describe architecture, principles and responsibilities.

Implementation details belong in Technical References.

---

## Touch Once

Whenever a document is opened for significant review, the objective is to leave it in its best known state.

Documentation should evolve incrementally rather than through repeated large-scale rewrites.

---

# Documentation Architecture

The documentation is organised into the following layers.

```text

Project Blueprint

        │

Content Governance

        │

Documentation Index

        │

 ┌──────────────┬──────────────┐

 │              │              │

Standards   System Documents  Roadmap

 │              │              │

 └──────────────┴──────────────┘

        │

Permanent Decisions

```

Each layer has a clearly defined responsibility.

---

# Documentation Categories

## Project Documents

Project-level documents define the identity and direction of Milan Red Line.

Current documents include:

- MRL Project Blueprint

- Content Governance

- Documentation Index

- Project Governance

- Project Workflows

- Roadmap

These documents explain why the project exists and how it is managed.

---

## Standards

Standards define permanent rules.

Current Standards include:

- Reading Experience Framework

- Editorial Design System

- Development Standards

- Content Standards

- Knowledge Network

- Search and Metadata

- QA and Release Process

- Brand Guidelines

Standards explain what should be done.

---

## System Documents

System Documents describe permanent platform systems.

Current System Documents include:

- Availability Request System

- Infrastructure

- Guide Search System

- Guide System

Each System Document explains:

- why the system exists;

- its architecture;

- maintenance principles;

- long-term evolution.

System Documents intentionally avoid sprint-specific implementation history.

---

## Permanent Decisions

Permanent Decisions record long-term architectural, editorial and governance decisions.

They explain why important project decisions were made and should remain stable over time.

---

## Technical References

Most Standards and System Documents conclude with a Technical Reference.

Technical References contain operational information that may evolve more frequently than the architectural sections.

Typical contents include:

- implementation notes;

- validation checklists;

- common operations;

- future evolution;

- maintenance guidance.

---

# Documentation Status

Documentation is maintained using three stability levels.

## Stable

Defines long-term project architecture.

Structural changes should be exceptional.

---

## Living

Operational details evolve together with the project while preserving architectural principles.

Most Standards and System Documents belong to this category.

---

## Temporary

Sprint Handovers and temporary continuity documents exist only until their permanent knowledge has been transferred into the appropriate documentation.

Once that transfer has been completed, temporary documents should be archived or removed.

---

# Authoritative Documents

| Topic | Authoritative Document |

|--------|------------------------|

| Project vision | MRL Project Blueprint |

| Project governance | Project Governance |

| Project planning | Roadmap |

| Permanent principles | Permanent Decisions |

| Reading Experience | Reading Experience Framework |

| Editorial components | Editorial Design System |

| Editorial writing | Content Standards |

| Knowledge Network | Knowledge Network |

| Metadata | Search and Metadata |

| Development workflow | Development Standards |

| QA process | QA and Release Process |

| Infrastructure | Infrastructure |

| Guide implementation | Guide System |

| Guide Search | Guide Search System |

| Availability requests | Availability Request System |

| Brand identity | Brand Guidelines |

Whenever documentation overlaps, the document listed above should be considered the authoritative source.

---

# Documentation Lifecycle

Permanent documentation evolves together with the project.

Whenever a permanent change is introduced:

1. Update the implementation.

2. Update the corresponding permanent document.

3. Update Technical References where necessary.

4. Verify related documentation.

5. Avoid creating duplicate sources of information.

Temporary Sprint Handovers should transfer permanent knowledge into the appropriate documentation before being removed.

---

# Recommended Reading Order

For someone joining the project, the recommended reading sequence is:

1. MRL Project Blueprint

2. Content Governance

3. Documentation Index

4. Project Governance

5. Permanent Decisions

6. Roadmap

7. Standards

8. System Documents

This order progressively introduces the project's vision, governance, permanent rules and technical implementation.

---

# Naming Convention

Documentation numbering follows a logical structure.

| Range | Category |

|------:|----------|

| 00–03 | Project Documents |

| 04–13 | Standards |

| 14–19 | System Documents |

Future permanent documents should follow this organisation whenever reasonably practical.

---

# Maintenance

Review this document whenever:

- a permanent document is added;

- documentation responsibilities change;

- documentation architecture evolves.

Routine implementation changes should not normally require modifications to this document.

---

# Permanent Statement

This document defines the architecture of the Milan Red Line documentation.

Its objective is to ensure that every topic has a single authoritative source and that the documentation remains easy to navigate, maintain and evolve.

Whenever uncertainty exists about where new documentation belongs, this document should be considered the primary reference.