# MRL_Project_Blueprint

> **Milan Red Line -- Project Blueprint**\
> **Status:** Living document\
> **Owner:** Project Management

------------------------------------------------------------------------

# 1. Purpose

This document is the single authoritative reference for the Milan Red
Line project.

It replaces and consolidates:

-   00_MRL_Technical_Documentation_Index
-   01_Project_Foundation
-   02_Project_Architecture
-   03_Content_Architecture

The objective is to describe **why the project exists, how it is
structured and how it should evolve**.

------------------------------------------------------------------------

# 2. Vision

Milan Red Line aims to become a trusted digital destination helping
international visitors organise a better stay in Milan through practical
information and carefully managed accommodation.

The project combines hospitality, local expertise and evergreen
editorial content.

------------------------------------------------------------------------

# 3. Mission

Help travellers make better decisions before arriving in Milan.

The project follows one permanent principle:

> **Help first. Trust first. Booking second.**

Useful information always comes before commercial objectives.

------------------------------------------------------------------------

# 4. Business Goals

Primary objective:

-   increase direct bookings.

Supporting objectives:

-   reduce dependence on third-party platforms;
-   build organic visibility;
-   create a long-term digital asset;
-   establish trust before first contact.

------------------------------------------------------------------------

# 5. Positioning

Permanent positioning:

> **Milan is the destination.\
> Sesto San Giovanni is the strategic base.**

The project explains why transport connections often matter more than a
central postcode.

------------------------------------------------------------------------

# 6. Target Audience

Primary audiences include:

-   first-time visitors;
-   business travellers;
-   families;
-   event visitors;
-   university visitors;
-   hospital visitors;
-   travellers without a car.

------------------------------------------------------------------------

# 7. Brand Personality

The brand is:

-   honest;
-   calm;
-   practical;
-   welcoming;
-   local;
-   transparent.

Never exaggerate claims or use aggressive marketing language.

------------------------------------------------------------------------

# 8. Editorial Philosophy

Every guide should answer one primary question.

When a topic becomes too large it should be split into specialist guides
connected through the Knowledge Network.

Quality is preferred over quantity.

------------------------------------------------------------------------

# 9. Project Principles

-   Help before selling.
-   Transport before geography.
-   Evergreen content whenever possible.
-   Local knowledge over generic advice.
-   Reusable solutions over one-off implementations.
-   Documentation is part of the product.

------------------------------------------------------------------------

# 10. Architectural Principles

The project is organised into four layers:

1.  Business
2.  Editorial
3.  Technical
4.  User Experience

Each layer supports the others while remaining independently
maintainable.

------------------------------------------------------------------------

# 11. Editorial Architecture

Content follows a hierarchical model:

    Pillar
       ↓
    Hub
       ↓
    Connector
       ↓
    Specialist Guide

Every guide must have a defined role before it is written.

------------------------------------------------------------------------

# 12. Knowledge Network

Internal links exist to answer the reader's next logical question.

The Knowledge Network reduces duplication and helps visitors
progressively discover more specific information.

------------------------------------------------------------------------

# 13. Reading Experience

All new guides follow the Reading Experience Framework.

This document defines only the strategic objective.

Implementation details are documented in:

-   04_Reading_Experience_Framework.md

------------------------------------------------------------------------

# 14. Technical Direction

Current technologies include:

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   MDX
-   Git
-   GitHub

Future infrastructure may include analytics, multilingual content and
structured data services.

------------------------------------------------------------------------

# 15. Data Strategy

Structured data should become the single source of truth for apartment
information.

Future databases should minimise hard-coded content.

------------------------------------------------------------------------

# 16. Documentation Strategy

Permanent knowledge belongs in documentation, not chat history.

Stable principles belong here.

Operational standards belong in dedicated modules.

Sprint details belong in handover documents.

------------------------------------------------------------------------

# 17. Decision Filter

Before approving any feature ask:

-   Does it help visitors?
-   Does it build trust?
-   Does it simplify the project?
-   Is it reusable?
-   Can it scale?

If several answers are negative, reconsider the implementation.

------------------------------------------------------------------------

# 18. Long-term Direction

The project should grow by strengthening existing clusters before
creating new ones.

Growth priorities:

1.  quality;
2.  consistency;
3.  scalability;
4.  maintainability.

------------------------------------------------------------------------

# 19. Related Documentation

Operational documents remain separate:

-   04 Reading Experience Framework
-   05 Editorial Design System
-   06 Development Standards
-   07 Content Standards
-   08 Knowledge Network
-   09 Search and Metadata
-   10 QA and Release Process
-   11 Project Workflows
-   12 Permanent Decisions

------------------------------------------------------------------------

# 20. Maintenance

Update this document only when foundational aspects change:

-   mission;
-   positioning;
-   business strategy;
-   architecture;
-   long-term direction.

Routine operational changes belong in the specialised modules above.
