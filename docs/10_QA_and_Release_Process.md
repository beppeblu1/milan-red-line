# 10_QA_and_Release_Process

> **Module Owner:** Development / Content & SEO\
> **Status:** Stable (Living document)

------------------------------------------------------------------------

# 1. Purpose

This document defines the mandatory Quality Assurance (QA) process
before any guide, component or technical improvement is released.

Quality Assurance is considered part of development, not an optional
final step.

------------------------------------------------------------------------

# 2. Release Philosophy

Every sprint should finish with software that is:

-   technically stable;
-   editorially reviewed;
-   internally consistent;
-   ready for production.

A feature is **not complete** until it has passed QA.

------------------------------------------------------------------------

# 3. Technical Validation

Before release verify:

-   `npm run build` completes successfully;
-   no TypeScript errors;
-   no broken imports;
-   no missing MDX components;
-   no console errors.

A failed build blocks publication.

------------------------------------------------------------------------

# 4. Editorial Validation

Every guide must be reviewed for:

-   factual accuracy;
-   reading flow;
-   Compression Pass completed;
-   spelling and grammar;
-   consistency with the Reading Experience Framework.

------------------------------------------------------------------------

# 5. Metadata Validation

Confirm that:

-   title and description are complete;
-   keywords are relevant;
-   destinations are accurate;
-   search aliases are meaningful;
-   hero image metadata is present when required.

------------------------------------------------------------------------

# 6. UX Validation

Check:

-   desktop layout;
-   tablet layout;
-   mobile layout;
-   tables remain readable;
-   reusable components render correctly.

------------------------------------------------------------------------

# 7. Knowledge Network Validation

Review:

-   contextual links;
-   Related Guides;
-   guide classification;
-   Hub / Connector / Specialist consistency.

------------------------------------------------------------------------

# 8. Publication Checklist

Before deployment:

-   Build passed
-   QA completed
-   Search verified
-   Images optimised
-   Internal links verified
-   Related Guides updated
-   Documentation updated
-   Git commit created
-   Push completed

------------------------------------------------------------------------

# 9. Post-release

After deployment:

-   verify production page;
-   verify search behaviour;
-   confirm no rendering issues;
-   monitor for unexpected regressions.

------------------------------------------------------------------------

# 10. Permanent Rule

Documentation updates are part of the release.

A sprint is not considered complete until the relevant technical
documentation has been updated.

------------------------------------------------------------------------

# Maintenance

Update this module whenever the release workflow or QA standards change.
