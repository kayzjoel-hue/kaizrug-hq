# RCA — P0 Canonical Repository Decision

Date: 2026-09-05
Status: EXECUTED

## Canonical public-web repository

**`kayzjoel-hue/rca-sites` is the canonical RCA public-web implementation.**

Evidence: its homepage explicitly declares `https://rca-site.pages.dev` as the public URL and contains the complete RCA web experience. The repository now carries a canonical-status README and that change has been merged to `main`.

## Supporting engineering repository

**`kayzjoel-hue/rca-main` is supporting/private engineering.**

Its existing structure contains API/server-oriented assets and a Vercel configuration. Its README has now been updated to prohibit silent website duplication and to point public-web work to `rca-sites`. That change has been merged to `main`.

## Duplicate/legacy policy

The remaining RCA repositories are not authorized to become a competing canonical public website without an explicit governance decision.

Empty duplicates remain unstarted/archival candidates. Legacy variants should be compared against the canonical implementation before any migration or archival action.

## Canonical flow

`Notion RCA record → rca-sites (web) / rca-main (supporting engineering) → deployment → runtime → partner/customer action → evidence`

## P0 outcome

RCA now has an explicit canonical web owner and a separated supporting engineering role. Further RCA repository creation is blocked unless a genuinely distinct function is defined.
