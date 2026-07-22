# 06_Development_Standards

> **Module Owner:** Development\
> **Status:** Stable (Living document)

------------------------------------------------------------------------

# 1. Purpose

This document defines the permanent development standards for Milan Red
Line.

The objective is to keep the codebase consistent, maintainable and easy
to evolve over time.

------------------------------------------------------------------------

# 2. General Principles

Development should always favour:

-   simplicity over cleverness;
-   reusable solutions over page-specific code;
-   readability over brevity;
-   maintainability over speed.

A solution that can be reused in future guides is preferred over a quick
one-off implementation.

------------------------------------------------------------------------

# 3. Repository Structure

The project follows a clear separation of concerns.

Typical areas include:

-   `app/`
-   `components/`
-   `content/guides/`
-   `lib/`
-   `public/images/`
-   `docs/`

Documentation should evolve together with the codebase.

------------------------------------------------------------------------

# 4. MDX Workflow

Guide content belongs in `content/guides`.

Rules:

-   keep front matter complete;
-   use reusable MDX components;
-   avoid inline HTML layouts;
-   prefer semantic Markdown whenever possible.

------------------------------------------------------------------------

# 5. Reusable Components

Before creating a new component ask:

1.  Can an existing component solve this?
2.  Will future guides reuse it?
3.  Can the API be made generic?

If the answer is yes, create a reusable component and document it.

------------------------------------------------------------------------

# 6. PowerShell Policy

## Preferred

Use PowerShell for repetitive editorial maintenance:

-   inserting backlinks;
-   updating metadata;
-   batch replacements;
-   repetitive MDX edits.

## Avoid

Do not use PowerShell for:

-   React component development;
-   TypeScript refactoring;
-   architecture changes;
-   complex JSX updates.

Those changes should be delivered as complete files.

------------------------------------------------------------------------

# 7. Build Policy

Every significant change should be validated with:

``` bash
npm run build
```

No guide should be published with build errors.

------------------------------------------------------------------------

# 8. Git Workflow

Typical workflow:

1.  implement;
2.  review;
3.  build;
4.  commit;
5.  push;
6.  deploy;
7.  update documentation.

Documentation is considered part of the implementation.

------------------------------------------------------------------------

# 9. Quality Standards

Before publication verify:

-   successful build;
-   working search;
-   related guides;
-   responsive layout;
-   hero image;
-   metadata;
-   accessibility basics;
-   internal links.

------------------------------------------------------------------------

# 10. Technical Debt

Avoid introducing technical debt to accelerate a sprint.

When debt is unavoidable:

-   document it;
-   justify it;
-   schedule its resolution.

------------------------------------------------------------------------

# Maintenance

Update this module whenever development workflows or permanent coding
standards change.
