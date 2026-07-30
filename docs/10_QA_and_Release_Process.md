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

-   `npm run qa:encoding` completes successfully;
-   `npm run lint` completes successfully;
-   `npx tsc --noEmit` completes successfully;
-   `npm run build` completes successfully;
-   no broken imports;
-   no missing MDX components;
-   no console errors.

A failed mandatory validation blocks publication.

## Encoding Validation

Run:

```bash
npm run qa:encoding
```

The command executes `scripts/check-encoding.mjs` and scans the supported
project source and content files for suspicious sequences commonly caused
by incorrect UTF-8, Windows-1252 or ISO-8859-1 conversion.

The validation must be run:

-   after batch replacements or scripted editorial changes;
-   after importing, copying or rewriting Markdown or MDX content;
-   during final technical QA before every production release.

A successful check reports the number of scanned files and confirms that
no suspicious sequences were found.

If the command reports an occurrence:

1.  open the indicated file and line;
2.  restore the intended character in UTF-8;
3.  rerun `npm run qa:encoding`;
4.  do not continue to the production build until the check passes.

Do not treat LF/CRLF Git warnings as encoding failures. They concern line
endings and are separate from mojibake or corrupted text.


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

## Release Source

Before every production release, verify that the approved changes have been merged into the `master` branch.

Only `master` is considered deployable and connected to the production deployment pipeline.

Experimental branches must never be deployed directly.

------------------------------------------------------------------------

# Maintenance

Update this module whenever the release workflow or QA standards change.



