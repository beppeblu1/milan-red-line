# # QA and Release Process

Module Owner: Development / Content & SEO

Status: Stable (Living Document)

---

# Purpose

This document defines the permanent Quality Assurance and Release process for the Milan Red Line project.

Its purpose is to ensure that every release follows a consistent validation workflow before reaching production.

Quality Assurance is considered an integral part of development rather than an optional final step.

This document defines **how Quality Assurance is performed**.

Individual validation checklists remain documented within their respective Standards and System Documents.

---



# Scope

This document applies to every production release, including:

- editorial updates;
- guide publications;
- reusable components;
- infrastructure changes;
- architectural improvements;
- maintenance releases.

It defines:

- QA philosophy;
- validation workflow;
- release sequence;
- production verification.

It intentionally does not duplicate validation rules owned by other permanent documents.

---



# QA Philosophy

Quality Assurance exists to protect the long-term quality of the project.

Every release should improve the platform while preserving:

- technical stability;
- editorial quality;
- architectural consistency;
- documentation accuracy.

A feature is not considered complete until it has successfully passed the entire QA process.

---



# Core Principles

Quality Assurance follows five permanent principles.

---



## Validate Before Release

Every significant change should be validated before deployment.

No production release should bypass the QA workflow.

---



## Verify the Whole System

Quality Assurance evaluates the complete user experience rather than isolated technical changes.

Every release should be reviewed from technical, editorial and architectural perspectives.

---



## Documentation is Part of QA

Permanent documentation should always reflect the current implementation.

Documentation updates are therefore considered part of the QA process.

---



## Single Source of Truth

Each permanent document owns its own validation rules.

This document coordinates the validation process but does not duplicate detailed checklists.

---



## Continuous Quality

Quality Assurance is performed throughout development.

Final QA confirms quality rather than creating it.

---



# QA Workflow

Every release follows the same validation sequence.

```text

Implementation

↓

Technical QA

↓

Editorial QA

↓

System QA

↓

Release QA

↓

Production Verification

```

Each stage assumes that the previous stage has been successfully completed.

# QA Levels

Quality Assurance is organised into complementary validation levels.

Each level verifies one specific aspect of the project.

Together they ensure that every release is technically correct, editorially consistent and architecturally coherent.

---



# Technical QA

Technical QA validates the integrity of the application.

Mandatory validation includes:

- `npm run qa:encoding`
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

Technical QA also verifies:

- successful compilation;
- dependency integrity;
- absence of broken imports;
- absence of rendering errors;
- successful production build.

A failed mandatory validation blocks the release.

---



## Encoding Validation

Encoding validation is a permanent part of the Technical QA process.

Run:

```bash

npm run qa:encoding

```

The command executes:

```text

scripts/check-encoding.mjs

```

and scans supported source and content files for suspicious character sequences commonly caused by incorrect UTF-8, Windows-1252 or ISO-8859-1 conversions.

Encoding validation should always be executed:

- after scripted editorial changes;
- after batch replacements;
- after imported Markdown or MDX content;
- before every production release.

If suspicious sequences are detected:

1. open the reported file;
2. restore the intended UTF-8 characters;
3. rerun the validation;
4. continue only after a successful result.

Line-ending warnings (LF / CRLF) are unrelated to encoding validation and should be treated separately.

---



# Editorial QA

Editorial QA verifies that published content satisfies the project's editorial standards.

Editorial validation follows the rules defined in:

- Reading Experience Framework;
- Content Standards;
- Editorial Design System.

Typical verification includes:

- factual accuracy;
- reading flow;
- Compression Pass;
- grammar and spelling;
- consistency with the Reading Experience.

Detailed editorial checklists remain documented in their respective Standards.

---



# System QA

System QA verifies that the release remains consistent with the project's permanent architecture.

Depending on the affected system, review may include:

- Guide System;
- Guide Search System;
- Infrastructure;
- Knowledge Network;
- Search and Metadata;
- Availability Request System.

Each System Document defines its own validation rules and Technical Reference.

System QA confirms that all affected systems remain compatible after implementation.

---



# Documentation QA

Documentation QA verifies that permanent project knowledge remains aligned with the implementation.

Review should confirm that:

- relevant documentation has been updated;
- Technical References remain accurate;
- Permanent Decisions remain valid;
- documentation responsibilities remain clearly separated.

Documentation is considered part of the implementation rather than post-release administration.

# Release Process

A production release may proceed only after all QA levels have been successfully completed.

The preferred release sequence is:

```text

Implementation

↓

Technical QA

↓

Editorial QA

↓

System QA

↓

Documentation QA

↓

Production Release

↓

Production Verification

```

No stage should be skipped.

---



# Release Verification

Immediately after deployment, verify that the production environment behaves as expected.

Typical verification includes:

- successful page rendering;
- correct navigation;
- Guide Search functionality;
- absence of console errors;
- responsive behaviour;
- production build integrity.

The objective is to confirm that deployment has not introduced unexpected regressions.

---



# Release Source

Before every production release verify that:

- all approved changes have been merged into the `master` branch;
- the production deployment pipeline targets the current `master` branch;
- experimental branches remain isolated from production.

Only the `master` branch is considered deployable.

---



# Relationship with Other Documents

QA and Release Process should always be read together with:

- Development Standards
- Reading Experience Framework
- Editorial Design System
- Search and Metadata
- Knowledge Network
- Guide System
- Guide Search System
- Infrastructure
- Permanent Decisions

This document defines the Quality Assurance workflow.

Each related document defines its own validation rules and Technical Reference.

Whenever overlap exists, every topic should have a single authoritative source.

---



# Maintenance

Review this document whenever:

- the release workflow changes;
- QA responsibilities evolve;
- mandatory validation steps are introduced or removed;
- production deployment procedures change.

Routine implementation changes should not normally require modifications to this document.

---



# Future Evolution

The QA process should continue evolving while preserving its architectural principles.

Future improvements may include:

- increased automation;
- additional validation scripts;
- expanded production verification;
- improved release reporting;
- stronger documentation validation.

Future enhancements should simplify the release process without reducing validation quality.

---



# Permanent Statement

This document defines the permanent Quality Assurance and Release process of the Milan Red Line project.

Its purpose is to ensure that every production release follows a consistent, repeatable and verifiable validation workflow.

Detailed validation rules belong to the appropriate Standards and System Documents.

The objective is to preserve long-term quality by treating Quality Assurance as an integral part of development rather than as a final checkpoint.