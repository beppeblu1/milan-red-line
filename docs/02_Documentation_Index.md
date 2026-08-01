# # 02_Documentation_Index

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

Throughout this document, the real repository filenames are used to simplify navigation and maintenance.

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

Project-level documents define the identity, governance and strategic direction of Milan Red Line.

Current Project Documents are:

- `00_MRL_Project_Blueprint.md`

- `01_Content_Governance.md`

- `02_Documentation_Index.md`

- `11_Project_Workflows.md`

- `15_Project_Governance.md`

- `MRL_Roadmap.md`

These documents explain why the project exists, how it is organised and how it evolves.

---

## Standards

Standards define permanent technical, editorial and operational rules.

Current Standards are:

- `04_Reading_Experience_Framework.md`

- `05_Editorial_Design_System.md`

- `06_Development_Standards.md`

- `07_Content_Standards_updated.md`

- `08_Knowledge_Network.md`

- `09_Search_and_Metadata.md`

- `10_QA_and_Release_Process.md`

- `12_Permanent_Decisions.md`

- `13_Brand_Guidelines.md`

Standards define what should be done and why.

---

## System Documents

System Documents describe permanent platform systems.

Current System Documents are:

- `16_Availability_Request_System_Architecture.md`

- `17_Infrastructure.md`

- `18_Guide_Search_System.md`

- `19_Guide_System.md`

Each System Document explains:

- why the system exists;

- its architecture;

- maintenance principles;

- long-term evolution.

System Documents intentionally avoid sprint-specific implementation history.

---

## Continuity Documents

Continuity documents preserve operational experience that complements the permanent architecture.

Current Continuity Documents are:

- `14_mrl-development-continuity-notes.md`

These documents capture practical knowledge and established workflows without duplicating the permanent Standards or System Documents.

---

# Technical References

Most Standards and System Documents conclude with a Technical Reference.

Technical References contain operational information that may evolve more frequently than the architectural sections.

Typical contents include:

- implementation notes;

- validation checklists;

- common operations;

- maintenance guidance;

- future evolution.

---

# Documentation Status

Documentation is maintained using three stability levels.

## Stable

Defines long-term project architecture.

Structural changes should be exceptional.

---

## Living

Operational details evolve together with the project while preserving architectural principles.

Most Standards, System Documents and Continuity Documents belong to this category.

---

## Temporary

Sprint Handovers and temporary continuity documents exist only until their permanent knowledge has been transferred into the appropriate documentation.

Once that transfer has been completed, temporary documents should be archived or removed.

---

# Authoritative Documents

| Topic | Authoritative File |

|--------|--------------------|

| Project vision | `00_MRL_Project_Blueprint.md` |

| Content governance | `01_Content_Governance.md` |

| Project governance | `15_Project_Governance.md` |

| Project planning | `MRL_Roadmap.md` |

| Permanent principles | `12_Permanent_Decisions.md` |

| Reading Experience | `04_Reading_Experience_Framework.md` |

| Editorial components | `05_Editorial_Design_System.md` |

| Editorial writing | `07_Content_Standards_updated.md` |

| Knowledge Network | `08_Knowledge_Network.md` |

| Metadata | `09_Search_and_Metadata.md` |

| Development workflow | `06_Development_Standards.md` |

| QA process | `10_QA_and_Release_Process.md` |

| Infrastructure | `17_Infrastructure.md` |

| Guide implementation | `19_Guide_System.md` |

| Guide Search | `18_Guide_Search_System.md` |

| Availability Request System | `16_Availability_Request_System_Architecture.md` |

| Brand identity | `13_Brand_Guidelines.md` |

| Development continuity | `14_mrl-development-continuity-notes.md` |

Whenever documentation overlaps, the file listed above should be considered the authoritative source.

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

1. `00_MRL_Project_Blueprint.md`

2. `01_Content_Governance.md`

3. `02_Documentation_Index.md`

4. `15_Project_Governance.md`

5. `12_Permanent_Decisions.md`

6. `MRL_Roadmap.md`

7. Standards

8. System Documents

9. `14_mrl-development-continuity-notes.md`

This order progressively introduces the project's vision, governance, permanent rules, technical architecture and accumulated development experience.

---

# Naming Convention

Documentation numbering follows a logical structure.

| Range | Category |

|------:|----------|

| 00–03 | Project Documents |

| 04–13 | Standards |

| 14 | Continuity Documents |

| 15 | Governance |

| 16–19 | System Documents |

Future permanent documents should follow this organisation whenever reasonably practical.

---

# Maintenance

Review this document whenever:

- a permanent document is added;

- documentation responsibilities change;

- documentation architecture evolves;

- repository filenames change.

Routine implementation changes should not normally require modifications to this document.

---

# Permanent Statement

This document defines the architecture of the Milan Red Line documentation.

Its objective is to ensure that every topic has a single authoritative source and that the documentation remains easy to navigate, maintain and evolve.

Whenever uncertainty exists about where new documentation belongs, this document should be considered the primary reference.