# KAIZRUG HQ — GitHub Project Registry

Version: 1.0
Date: 2026-09-05
Authority: Notion `KAIZRUG HQ — MASTER INDEX`
Purpose: turn the GitHub repository list into a project execution map.

## Operating rule

GitHub does not provide personal-profile repository folders. This registry is the workspace index. The numbered groups are project namespaces, not physical GitHub folders.

**Canonical flow**

`Notion Project Record → Canonical GitHub Repo → Commit → Deploy → Runtime → User/Transaction → Evidence/Revenue`

Notion owns project intent, status, next action and governance. GitHub owns implementation history. Vercel/Cloudflare owns deployment truth. Supabase owns database/runtime truth.

## 00 — CORE / OS

| Repository | Classification | Execution state | Next action |
|---|---|---|---|
| `Kaizrug-os` | CANONICAL | Active / public proof | Reconcile README boundary language with current Notion truth; keep public OS showroom current |
| `kaizrug-hq` | CANONICAL SUPPORT / HQ WEB | Active | Maintain HQ portal + this registry; link canonical projects |
| `legacy-manifest` | ARCHIVE | Reference | Retain; no feature work |

## 01 — KAIZRUG PUBLIC / PERSONAL BRAND

| Repository | Classification | Execution state | Next action |
|---|---|---|---|
| `kaizrug-site` | CANONICAL CANDIDATE | Active | Verify current public deployment and make this the canonical brand site if confirmed |
| `kaizrug-cv` | CANONICAL CV | Active / public | Keep CV source synchronized with live CV proof |
| `joel-kaizire-cv` | DUPLICATE / EMPTY | No implementation | Do not build separately; archive/redirect after canonical CV confirmation |
| `portflio-edition` | SUPPORTING / VARIANT | Existing code | Compare against `kaizrug-site`; merge useful work or retain as variant |
| `kaizrug-app` | EXPERIMENT / APP SHELL | Existing code | Define exact product purpose before further commits |

## 02 — CLARITY COMMAND / PRODUCTS

| Repository | Classification | Execution state | Next action |
|---|---|---|---|
| `pipeline-pro` | PRODUCT / ENGINEERING | Technically active | Verify current deployment, define canonical product identity and next customer-facing milestone |
| `booking-system` | CANONICAL PRODUCT CANDIDATE | Production deployment exists; commercial proof insufficient | Run end-to-end runtime verification, then customer/payment test and evidence capture |
| `template-page` | SUPPORTING / PRODUCTIZATION | Small implementation | Decide whether it is the Clarity Command storefront/showroom; commit useful product surface or archive |

### Missing from GitHub: Clarity Command

Notion contains the actual Clarity Command Starter, Quick Start Dashboard, template studio and launch-loop work. The GitHub inventory does **not** contain an unambiguous canonical `clarity-command` repository.

**Status: DESIGN/PRODUCT TRUTH EXISTS → CANONICAL ENGINEERING REPO MISSING.**

Required execution: create/choose one canonical repo, commit the deployable product, deploy it, then bind that repo to the Notion project record.

## 03 — ROYAL CONNECT AFRICA

RCA has the highest repository duplication and must operate under a **one canonical implementation per function** rule.

| Repository | Classification | Execution state | Next action |
|---|---|---|---|
| `rca-sites` | CANONICAL WEB CANDIDATE | Existing code / public | Verify against the current `rca-site.pages.dev` runtime; if it is the source, declare canonical |
| `rca-main` | SUPPORTING / PRIVATE ENGINEERING | Existing code / private | Identify exact function; do not duplicate website work |
| `Royal-Connect-Africa` | LEGACY / PUBLIC VARIANT | Existing code | Compare to live RCA source; archive if superseded |
| `royale-connect-african` | LEGACY / PRIVATE VARIANT | Existing code | Compare before retaining |
| `rca-upgrade` | EXPERIMENT / VARIANT | Existing code; historical Vercel deployment later canceled | Do not call current production; reconcile with Cloudflare/live source |
| `rca-site` | SMALL PRIVATE VARIANT | Small implementation | Inspect before assigning role |
| `r-c-a` | EMPTY DUPLICATE | No implementation | Archive; no commit |
| `royal-connect-african` | EMPTY DUPLICATE | No implementation | Archive; no commit |
| `rca-live-2026` | EMPTY / UNSTARTED | No implementation | Do not build unless a distinct runtime is explicitly required |
| `royal-connect-africa-2026` | EMPTY / UNSTARTED | No implementation | Do not build unless a distinct runtime is explicitly required |
| `rca-upgrade-edition` | EMPTY / UNSTARTED | No implementation | Do not build; retain only as historical placeholder if needed |
| `royalconnect` | EMPTY DUPLICATE | No implementation | Archive; no commit |

### RCA projects/assets not represented as a dedicated GitHub implementation

- RCA Business Hub
- RCA Launchpad
- RCA Transaction Packet
- Uganda ↔ Dubai Export Catalog
- RCA eBook Hub / eBook production pipeline
- UAE–Africa Market Intelligence

These are real Notion/business assets, but they are not automatically GitHub projects. Create repositories only when a software/public artifact needs implementation.

## 04 — CLIENT / EXPERIMENTAL

| Repository | Classification | Execution state | Next action |
|---|---|---|---|
| `house-of-maria` | CLIENT / PRODUCT SITE | Existing code | Verify owner/client scope, deployment and next commercial action |
| `azizfitness` | CLIENT / EXPERIMENT | Existing code | Confirm whether still active; otherwise archive |
| `sandra-sis` | CLIENT / FAMILY PROJECT | Existing code | Confirm purpose and deployment; keep isolated from core Kaizrug product stack |

## 05 — HOSPITALITY / LEARNING LAB

| Repository | Classification | Execution state | Next action |
|---|---|---|---|
| `hotel-task-cli` | LEARNING LAB / HOSPITALITY ENGINEERING | Empty current GitHub repo | Commit the known local CLI implementation or explicitly mark archived; do not leave as a phantom active project |

## 06 — PROJECTS PRESENT IN NOTION BUT NOT YET MAPPED TO A DEDICATED GITHUB REPO

These are the important omissions discovered during the Notion cross-check.

| Project / system | Notion evidence | GitHub state | Required decision |
|---|---|---|---|
| Clarity Command | Starter dashboard, template, launch loop registry, Template Studio | No unambiguous canonical repo | **CREATE/ASSIGN canonical repo → commit → deploy** |
| Hospitality Pro Hub | Active Dubai hub + leadership portfolio | No dedicated canonical repo identified | Decide whether it remains Notion-first or becomes a deployable product |
| FUMING VALUABLES OS | Product structure: Vault Install / Data Cleanup / Vault Backup | No dedicated repo identified | Create repo only when implementation begins |
| Dubai Supply Signal Monitor / Scarcity Index | UAE–Africa intelligence concept and signal model | No dedicated repo identified | **LAB → define MVP → commit → deploy prototype** |
| Revenue App Architect / App Agent | App/product architecture work | No unambiguous dedicated repo | Bind to `kaizrug-app` only after role is defined |
| Invisible Hand Protocol | Draft protocol in Notion | No dedicated implementation repo | Keep as doctrine/content until software implementation is justified |
| RCA eBook system | eBook Hub + inventory + production pipeline | No dedicated software repo identified | Treat as content/product pipeline, not software by default |
| Career Engine / Career Positioning templates | Template Studio / bundle work | No unambiguous canonical repo | Productize in the template layer first; software only if required |
| Semantic Insight Engine | Knowledge Library / system research | No dedicated repo identified | Research/lab until an executable specification exists |

## 99 — ARCHIVE / UNCLASSIFIED

| Repository | Classification | Execution state | Next action |
|---|---|---|---|
| `turbo-broccoli` | UNCLASSIFIED / LIKELY EXPERIMENT | Small implementation | Inspect once; classify or archive |
| `Formspree` | EMPTY / INTEGRATION PLACEHOLDER | No implementation | Archive unless a concrete integration requires it |
| `kaizrug-capsule` | LEGACY / INFRASTRUCTURE | Private, small | Retain as historical infrastructure; do not treat as primary HQ |

## Execution status vocabulary

- **CANONICAL** — one authoritative implementation for that function.
- **SUPPORTING** — contributes to a canonical project but is not the primary source.
- **EXPERIMENT / LAB** — active exploration; not production authority.
- **UNSTARTED** — concept exists but implementation has not begun.
- **NEED COMMIT** — implementation exists outside the current GitHub repository or the repository is empty.
- **NEED DEPLOY** — committed implementation exists but no verified current runtime is established.
- **RUNTIME VERIFY** — deployment exists but current operational truth must be checked.
- **ARCHIVE** — retain history; no new execution.
- **DUPLICATE** — overlaps another repository and should not receive independent feature work.

## First execution queue

1. **P0 — Establish the canonical project registry in Notion and bind every repo to one project.**
2. **P0 — Resolve RCA repository duplication before any new RCA repository is created.**
3. **P0 — Resolve Clarity Command canonical repo; this is the clearest missing software/product bridge.**
4. **P1 — Verify `booking-system` end-to-end runtime and payment flow; capture proof.**
5. **P1 — Verify `rca-sites` against the live RCA runtime and declare the canonical source.**
6. **P1 — Verify `kaizrug-site` and `kaizrug-cv` against current public deployments.**
7. **P1 — Commit or explicitly archive `hotel-task-cli`; remove the phantom-project state.**
8. **P2 — Classify `turbo-broccoli`, `kaizrug-app`, `portflio-edition`, `house-of-maria`, `azizfitness`, and `sandra-sis` by actual runtime/use.**
9. **P2 — Create GitHub repos for Notion projects only when they cross the implementation threshold.**

## Non-negotiable rule

**No new repository for an existing function until the canonical repository is known.**

The GitHub workspace should become smaller in ambiguity even if the repository count remains unchanged.
