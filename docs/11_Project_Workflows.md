# 11_Project_Workflows

> **Module Owner:** Project Management / Development\
> **Status:** Stable (Living document)

------------------------------------------------------------------------

# 1. Purpose

This document defines the standard operational workflows used throughout
the Milan Red Line project.

The objective is to make every sprint predictable, repeatable and easy
to hand over.

------------------------------------------------------------------------

# 2. Standard Sprint Workflow

Every sprint follows the same lifecycle:

    Planning
       ↓
    Content & SEO
       ↓
    Development
       ↓
    Quality Assurance
       ↓
    Review
       ↓
    Build
       ↓
    Deploy
       ↓
    Documentation
       ↓
    Handover
       ↓
    valutachat
       ↓
    Successor Chat (if required)

Skipping a phase is discouraged unless explicitly justified.

------------------------------------------------------------------------

# 3. Planning

Planning should define:

-   sprint goal;
-   expected deliverables;
-   dependencies;
-   acceptance criteria;
-   documentation to update.

------------------------------------------------------------------------

# 4. Content Workflow

1.  Validate search intent.
2.  Define guide role (Hub / Connector / Specialist).
3.  Prepare editorial structure.
4.  Write content.
5.  Run Compression Pass.
6.  Editorial review.

------------------------------------------------------------------------

# 5. Development Workflow

Typical sequence:

1. create or select the appropriate working branch;
2. implement the feature;
3. reuse existing components whenever possible;
4. create reusable components if needed;
5. build locally;
6. perform technical QA;
7. merge into `master` only after approval.

------------------------------------------------------------------------

# 6. Documentation Workflow

Documentation is updated after implementation, not before.

Whenever a permanent rule changes:

-   update the relevant module;
-   update appendices if examples change;
-   record the change in the Change Log.

------------------------------------------------------------------------

# 7. Handover Workflow

Every completed sprint should end with a handover including:

-   completed work;
-   architectural decisions;
-   known limitations;
-   next recommended sprint;
-   updated documentation.

------------------------------------------------------------------------

# 8. Continuous Improvement

Whenever a workflow becomes repetitive:

1.  simplify it;
2.  document it;
3.  reuse it in future sprints.

Operational consistency is considered a project asset.


------------------------------------------------------------------------

# Git Branch Strategy

## Purpose

To keep Milan Red Line stable while allowing rapid experimentation, the project adopts a two-level Git workflow that clearly separates production-ready code from exploratory development.

## Stable Branch

The `master` branch always represents the current stable version of the project.

Rules:

- `master` must always remain deployable.
- Every commit on `master` should be considered production-ready.
- GitHub and Vercel deployments are performed exclusively from `master`.
- Experimental or incomplete work should never be committed directly to `master`.

## Experimental Branches

When working on features whose final implementation is still being evaluated (UX redesigns, UI experiments, major refactors, alternative solutions, etc.), create a dedicated experimental branch.

Examples:

```text
guides-ui-lab
homepage-redesign
search-refactor
map-improvements
analytics-experiments
```

Experimental branches are intended for:

- UX and UI exploration;
- design iterations;
- architectural refactoring;
- alternative implementations;
- features requiring multiple review cycles.

Frequent, small commits are encouraged to preserve intermediate states and simplify rollback when necessary.

## Merge Workflow

Once an experimental solution has been approved:

1. Complete the final review and testing.
2. Merge the experimental branch into `master`.
3. Push `master` to GitHub.
4. Verify the automatic deployment on Vercel.

Only after deployment has been verified should the work be considered complete.

## Naming Convention

Use descriptive branch names based on the area being developed.

Preferred:

```text
guides-ui-lab
homepage-redesign
search-refactor
map-improvements
analytics-experiments
```

Avoid generic names such as:

```text
test
temp
new
branch1
```

## Objective

This workflow aims to:

- keep a stable production branch at all times;
- allow safe experimentation without risking regressions;
- simplify rollback when an experiment is unsuccessful;
- improve code review and release quality;
- clearly separate production-ready work from exploratory development.

------------------------------------------------------------------------

# Maintenance

Update this document whenever sprint organisation or operational
workflows evolve.

