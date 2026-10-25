# Operator Runbook — Notion / GitHub / Deployment Reconciliation

**State:** Proposed; report-only until separately authorized.
**Governance:** [KX-PROT-01](https://app.notion.com/p/c32faf8e7f80428d9b1dd4c0c734cdf3) · [Semantic Loop Closure Map](https://app.notion.com/p/3d2e52a1d2ea818a924ad74723826a42) · [Command Center v2026.2](https://app.notion.com/p/322e52a1d2ea813f9595fa26567503fa)

## Operator workflow

1. Open the reconciliation PR/branch and confirm the target is the two named repositories and the intended commit SHAs.
2. Start a manual read-only check only after the workflow and credentials have been reviewed. Never paste credentials into chat, issues, logs, or Notion.
3. Read the report from top to bottom. Do not treat missing evidence as a pass.
4. For every finding, preserve its label and evidence link:
   - **VERIFIED** — directly observed in this run.
   - **NOT REPRODUCED** — not confirmed within the stated search/access scope.
   - **INFERRED** — reasoned, not directly observed.
   - **BLOCKED** — required access, mapping, or identifier is missing.
5. If the report says **BLOCKED**, stop. Record the missing prerequisite; do not guess project IDs, repository mappings, or canonical Notion targets.
6. If a mismatch appears, attach the manifest/run URL and ask the designated reviewer. Do not merge, deploy, edit canonical Notion pages, change secrets, or activate automations.
7. A reviewer must approve the exact proposed change and evidence-manifest hash. Approval is not permission to perform unrelated changes.
8. After any future authorized write, retrieve the destination again and verify its actual state before marking complete.

## Known baseline at 2026-10-25

- Both repositories are accessible through the GitHub connector; default branch is `main`.
- The `00_System_Core` documentation hierarchy is already present on `main` in both repositories. Do not recreate or overwrite it.
- The Vercel connector returned no projects when filtered to either target repository in the authenticated scope. This does **not** prove there are no projects in another team/account or that the repos are undeployed.
- Public routes in the OS README mention GitHub Pages and Cloudflare Workers. Confirm the actual owner/provider and deployment SHA for each route before claiming Vercel reconciliation is possible.
- Notion is the runtime authority. KX-PROT-01 is procedural authority; the Semantic Loop Closure Map provides the completion/evidence model. GitHub documentation does not supersede these.

## Stop conditions

Stop and mark **BLOCKED** if any of the following occurs:
- A required connector fails or its scope is unclear.
- Canonical Notion data-source/page IDs cannot be established.
- The deployment provider or repository mapping is not verified.
- The evidence snapshot changes after review.
- Reviewer identity or permission cannot be confirmed.
- The proposed action would merge, deploy, mutate canonical Notion state, reveal a secret, or alter production configuration without separate authorization.

## Recovery / return path

- Keep all work on the feature branch until review.
- Preserve source URLs, commit SHAs, run IDs, timestamps, and any partial errors.
- Re-run after correcting the prerequisite; do not silently overwrite the prior report.
- If a change is wrong, stop and open a corrective PR. Do not force-push or alter the default branch as an ad hoc rollback.

## Completion definition

The check is complete only when the evidence report is available, every source has a clear success/failure state, gaps are explicit, and no unauthorized side effects occurred. A report-only pass does not mean the full OS is wired, deployed, operational, or revenue-proven.
