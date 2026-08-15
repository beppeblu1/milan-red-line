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

Throughout this document, the real repository filenames are used to simplify navigation, maintenance and implementation.

---

# Documentation Philosophy

The Milan Red Line documentation follows four fundamental principles.

## Single Source of Truth

Every permanent topic belongs to one authoritative document.

Other documents may reference that information but should not duplicate it.

---

## Layered Documentation

Documentation is organised into layers.

Higher-level documents explain strategy, governance and long-term direction.

Lower-level documents explain implementation, architecture and operational systems.

---

## Architecture Before Implementation

Permanent documents describe architecture, principles and responsibilities.

Implementation details belong in Technical References or Continuity Documents.

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

 ┌──────────────┬──────────────┬──────────────┐

 │              │              │

Standards   System Documents  Project Registries

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

# Project Registries

As the project grows, certain information is maintained as permanent registries rather than standalone documentation.

Registries provide a single authoritative reference for structured project assets that are frequently consulted but do not require their own architectural document.

Current registries include:

- Published Guides Registry (maintained within this document)

Future registries may include:

- Brand Glossary

- Apartment Registry

- Destination Registry

- Accommodation Registry

Registries should always remain:

- concise;

- structured;

- authoritative;

- easy to maintain;

- updated whenever the underlying asset changes.

Whenever a registry conflicts with another document, the registry should be considered the authoritative reference for that specific structured information.

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



# Published Guides Registry

This registry acts as the authoritative reference for every published guide.

Its purpose is to ensure that all project roles (Project Management, Content, UX and Development) always use the official guide title, repository filename and URL slug when creating documentation, internal links, implementation tasks or future developments.

Whenever a guide is created, renamed, reclassified or removed, this registry must be updated as part of the same sprint.

The registry should always reflect the current published state of the project.

| Guide | MDX File | URL Slug | Cluster | Status |

|--------|----------|----------|---------|--------|

| Arriving in Milan: How to Get Around and Where to Stay | arriving-in-milan-how-to-get-around.mdx | arriving-in-milan-how-to-get-around | Transport | Current |

| How to Use Milan Public Transport | how-to-use-milan-public-transport.mdx | how-to-use-milan-public-transport | Transport | Current |

| Milan Public Transport Tickets | milan-public-transport-tickets.mdx | milan-public-transport-tickets | Transport | Current |

| How to Use the Milan Metro | how-to-use-the-milan-metro.mdx | how-to-use-the-milan-metro | Transport | Current |

| Milano Centrale Station Guide | milano-centrale-station-guide.mdx | milano-centrale-station-guide | Transport | Current |

| How to Get from Malpensa Airport to Milan | malpensa-airport-to-milan.mdx | malpensa-airport-to-milan | Transport | Current |

| How to Get from Linate Airport to Milan | linate-airport-to-milan.mdx | linate-airport-to-milan | Transport | Current |

| How to Get from Orio al Serio Airport to Milan | orio-al-serio-airport-to-milan.mdx | orio-al-serio-airport-to-milan | Transport | Current |

| Practical Things to Know Before Travelling to Milan | what-to-know-before-travelling-to-milan.mdx | what-to-know-before-travelling-to-milan | Practical | Current |

| Best Day Trips from Milan by Train | best-day-trips-from-milan-by-train.mdx | best-day-trips-from-milan-by-train | Day Trips | Current |

| How to Visit Lake Como from Milan | how-to-visit-lake-como-from-milan.mdx | how-to-visit-lake-como-from-milan | Day Trips | Current |

| Practical Guide to Sesto San Giovanni | practical-guide-to-sesto-san-giovanni.mdx | practical-guide-to-sesto-san-giovanni | Local Knowledge | Current |

| Places to Visit Near Sesto San Giovanni | places-to-visit-near-sesto-san-giovanni.mdx | places-to-visit-near-sesto-san-giovanni | Local Knowledge | Current |

| Is Sesto San Giovanni a Good Place to Stay? | is-sesto-san-giovanni-a-good-place-to-stay.mdx | is-sesto-san-giovanni-a-good-place-to-stay | Accommodation | Current |

| Where to Stay in Milan Without a Car | where-to-stay-in-milan-without-a-car.mdx | where-to-stay-in-milan-without-a-car | Accommodation | Current |

| Where to Stay Near the M1 Red Line | where-to-stay-near-the-m1-red-line.mdx | where-to-stay-near-the-m1-red-line | Accommodation | Current |

| Best Area to Stay in Milan for Families | best-area-to-stay-in-milan-for-families.mdx | best-area-to-stay-in-milan-for-families | Accommodation | Current |

| Best Area to Stay in Milan for First-Time Visitors | best-area-to-stay-in-milan-for-first-time-visitors.mdx | best-area-to-stay-in-milan-for-first-time-visitors | Accommodation | Current |

| Best Area to Stay in Milan for Business Travellers | best-area-to-stay-in-milan-for-business-travellers.mdx | best-area-to-stay-in-milan-for-business-travellers | Accommodation | Current |

| Where to Stay Near Bicocca University | where-to-stay-near-bicocca-university.mdx | where-to-stay-near-bicocca-university | Accommodation | Current |

| Where to Stay Near San Raffaele Hospital | where-to-stay-near-san-raffaele-hospital.mdx | where-to-stay-near-san-raffaele-hospital | Accommodation | Current |

| Where to Stay Near Monza Circuit | where-to-stay-near-monza-circuit.mdx | where-to-stay-near-monza-circuit | Accommodation | Current |

| Where to Stay Near Carroponte | where-to-stay-near-carroponte.mdx | where-to-stay-near-carroponte | Accommodation | Current |

| Where to Stay Near Rho Fiera Milano | where-to-stay-near-rho-fiera-milano.mdx | where-to-stay-near-rho-fiera-milano | Accommodation | Current |

---

# Documentation Lifecycle

Permanent documentation evolves together with the project.

Whenever a permanent change is introduced:

- update the implementation;

- update the corresponding permanent document;

- update Technical References where necessary;

- verify related documentation;

- update any affected Project Registry;

- avoid creating duplicate sources of information.

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

Project Registries should normally be integrated into existing documentation whenever possible rather than creating additional permanent documents.

---

# Maintenance

Review this document whenever:

- a permanent document is added;

- documentation responsibilities change;

- documentation architecture evolves;

- repository filenames change;

- the Published Guides Registry changes;

- a guide filename changes;

- a guide URL slug changes.

Routine implementation changes should not normally require modifications to this document.

---

# Permanent Statement

This document defines the architecture of the Milan Red Line documentation.

Its objective is to ensure that every permanent topic has a single authoritative source and that the documentation remains easy to navigate, maintain and evolve.

It also defines the permanent registries that provide authoritative references for structured project assets such as published guides.

Whenever uncertainty exists about where new documentation belongs, this document should be considered the primary reference.