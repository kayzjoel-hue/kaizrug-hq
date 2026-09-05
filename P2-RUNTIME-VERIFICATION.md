# P2 — Runtime Verification

**Date:** 2026-09-05
**Target:** `kayzjoel-hue/pipeline-pro`
**Role:** Product / Engineering — canonical execution candidate
**Verification authority:** GitHub implementation + deployment/runtime evidence

## P2.1 result

**FRONTEND RUNTIME: VERIFIED**
**BACKEND RUNTIME: NOT VERIFIED**
**FRONTEND → API → DATA FLOW: NOT YET PROVEN**
**AUTONOMOUS RUNTIME ELIGIBILITY: HOLD**

## Three-layer zoom

### Layer 1 — Scribe/archive evidence

`SCRIBE CHAT COLLECTION` contains a July 2026 read-only Pipeline Pro deployment report. It records that Railway MySQL was provisioned and that the intended architecture was:

`Vercel frontend → Railway Express/tRPC backend → Railway MySQL`

The same report explicitly states that backend deployment finalization, `process.env.PORT`, frontend API configuration, and final runtime verification were still open. This is historical execution context, **not current runtime truth**.

### Layer 2 — Current Notion control/mapping

The current P2 mapping correctly treats `pipeline-pro` as the canonical execution candidate but keeps backend/runtime evidence open. The current gate remains evidence-based: declared ≠ implemented ≠ deployed ≠ runtime-observed ≠ data-proven.

### Layer 3 — Current GitHub implementation

The repository contains a real backend implementation, not merely a frontend shell:

- Express server entrypoint: `server/_core/index.ts`
- `/api/health` endpoint
- tRPC gateway at `/api/trpc`
- routers for pipelines, followups, activity, settings and auth
- Drizzle/MySQL dependency and database layer
- production build/start scripts
- frontend tRPC client using `EXPO_PUBLIC_API_BASE_URL`

## Current evidence

### Frontend

- Vercel project: `pipeline-pro`.
- Latest observed deployment: `dpl_8PoqRrSvD1oTAtU4mrvB1PLKXkEP`.
- Deployment state: `READY`.
- Linked GitHub commit: `1aa3c7ea8f30ba56a4e1dd44b71d9698ed19c80b`.
- Production URL returned HTTP 200.
- No Vercel runtime error clusters were found in the inspected 7-day period.

### Backend code

The backend is present and has the required route contract, but **no current live backend URL was established from the connected evidence**.

The repository's `.env.example` still uses a placeholder Railway URL and the deployment checklist/todo still mark Railway deployment and API verification as open.

### Deployment configuration gap

A targeted repository search did **not** find a Railway-specific deployment manifest/configuration such as `railway.json`, `railway.toml`, or a committed Dockerfile/Procfile. This does not prove the desktop project lacks such files; it proves only that they are not present in the current GitHub `main` evidence inspected here.

### Frontend/API contract warning

The repository's `.env.example` documents `EXPO_PUBLIC_API_BASE_URL` with `/api/trpc` included, while `lib/trpc.ts` constructs the request as `${getApiBaseUrl()}/api/trpc`. If the environment is populated exactly as documented, this can produce a duplicated `/api/trpc/api/trpc` path. The production value must therefore be inspected before claiming frontend → API connectivity.

## Data-flow architecture

Intended path:

`Expo Web → Vercel frontend → Railway Express backend → /api/trpc → Drizzle/MySQL`

The code supports this path, but the live chain is not proven end-to-end.

## P2.1 acceptance gates

1. Recover/identify the actual Railway backend service or confirm an alternative live backend authority.
2. Recover the actual backend public URL.
3. Verify the backend starts with the repository production build/start contract.
4. Verify `GET /api/health` against the live backend.
5. Verify the exact Vercel `EXPO_PUBLIC_API_BASE_URL` value and resolve the `/api/trpc` path contract.
6. Verify a non-destructive frontend → tRPC request.
7. Verify one controlled server-backed data read/write/read cycle against the intended MySQL data layer.
8. Capture timestamped evidence for each boundary.

## Desktop recovery instruction

Because the operator confirms the project has been executed from the desktop, **do not rebuild Pipeline Pro from scratch**.

Before changing code, recover the desktop project's deployment layer and compare it against GitHub `main`.

### Next move if the desktop project contains them

Provide/copy the following **non-secret** files or their relevant contents for inspection:

- `railway.json` / `railway.toml`
- `Dockerfile`
- `Procfile`
- `docker-compose.yml` if used for deployment
- `.env.example` or a redacted environment map
- Vercel project configuration if present
- any desktop deployment notes containing the Railway service URL

**Never send database passwords, API secrets, OAuth client secrets, or private tokens.**

If those files exist on the desktop, the current diagnosis is likely a **recovery/configuration mismatch**, not a missing application codebase.

## Boundary decision

Historical Scribe evidence helps recover intent and previous execution, but it cannot close runtime truth. GitHub proves the backend code exists. Vercel proves the frontend is serving. Neither proves the live Railway service, API request path, or database persistence.

**P2.1 remains OPEN / EVIDENCE-GATED.**

No autonomous agent/runtime linkage is authorized from this verification alone.
