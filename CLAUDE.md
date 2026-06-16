# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Divine India Travel Guide is a static, client-only React SPA (Vite + TypeScript + shadcn/ui + Tailwind) for browsing Indian travel destinations and Hindu pilgrimage temples. There is **no backend** — all content is hardcoded as TypeScript data in `constants/` files and resolved entirely in the browser. The project was scaffolded with Lovable (`vite_react_shadcn_ts`).

## Commands

```sh
npm i                # install deps (Node + npm required)
npm run dev          # dev server at http://localhost:8080 (note: port 8080, not 5173)
npm run build        # production build
npm run build:dev    # build in development mode
npm run preview      # preview a production build
npm run lint         # eslint over the repo
npm run format       # prettier --write over src
npm run format:check # prettier --check over src
```

There is **no test runner configured** — no `test` script, no test files, no testing libraries in `package.json`.

## Architecture

### Feature-sliced layout
Code lives under `src/` in three top-level zones:

- `src/app/` — application composition: `providers/AppProviders.tsx` (React Query + Tooltip providers) and `router/` (route config + `BrowserRouter`).
- `src/features/<feature>/` — self-contained feature modules. Each feature follows the same internal structure, every folder exposing a barrel `index.ts`, and the feature root `index.ts` re-exporting all of them:
  - `pages/` — top-level route component
  - `components/` — feature-local UI
  - `constants/` — the static data (this is where most content lives)
  - `hooks/` — feature logic, including URL-param → data resolution
  - `types/` — TypeScript types (and in some features, the canonical data arrays)
  - `validation/` — zod schemas (contact form only)
- `src/shared/` — cross-feature code: `components/ui/` (shadcn primitives), `components/layout/` (Navigation, Footer, Hero), `components/common/` (ScrollToHash, TopLoader, PageLoader), `components/performance/` (RouteErrorBoundary), `hooks/`, `utils/`, and `assets/` (images).

Features: `home`, `destinations`, `divine-places`, `temple-details`, `contact`, `privacy`, `terms`, `not-found`.

### Routing
- All route paths are defined once in `src/constants/browserRoutes.ts` as a typed object, with `getXRoute()` slug-builder helpers (lowercase + spaces→hyphens + `encodeURIComponent`).
- `src/app/router/navigation.ts` maps those paths to **lazy-loaded** page components in the `appRoutes` array. It also implements `prefetchAllRoutes()` (called on mount via `requestIdleCallback`) and `getNavRoutes()` (filters by `showInNav`).
- `AppRouter.tsx` renders `appRoutes` through a `RouteWrapper` that wraps every page in `RouteErrorBoundary` + `Suspense`.
- Note: `destinations` and `divine-places` pages serve multiple nested routes (state → district → temple, and deity/category → temple). `TempleDetailsPage` is shared by both the `/destinations/...` and `/divine-places/...` temple routes.

### Data flow (no API)
Content is fully static. The key pattern is **slug-based reverse lookup**: pages read URL params with `useParams`, convert slugs back to names (`decodeURIComponent` + hyphens→spaces), and `.find()` the matching record by case-insensitive name in the constants arrays. See `src/features/temple-details/hooks/useTempleDetails.ts` for the canonical example — it resolves both the destinations hierarchy (`indianStates` → districts → places) and the divine-places hierarchy (deities/jyotirlingas/shakti-peethas/etc.), and synthesizes default `TempleDetails` when no curated record exists.

Large data sets are split across multiple files to keep each manageable (e.g. `destinations/constants/statesA-D.ts`, `statesG-K.ts`, … merged in `constants/index.ts` into `indianStates`). When adding destinations or temples, add to the appropriate alphabetical/category chunk and ensure it flows through the barrel exports.

React Query (`@tanstack/react-query`) is provided app-wide but currently unused for data fetching since there's no server.

## Conventions

- **Path alias:** `@/` → `src/` (configured in both `vite.config.ts` and `tsconfig`). Always import via `@/...`, not relative paths across features.
- **shadcn/ui:** `components.json` aliases (`@/components`, `@/lib/utils`) do **not** match the actual layout — UI primitives live in `src/shared/components/ui/` and the `cn` util in `src/shared/utils/utils.ts`. When adding shadcn components, place them under `src/shared/components/ui/` and fix imports accordingly.
- **Styling:** Tailwind with CSS variables; design tokens and theme in `tailwind.config.ts` and `src/index.css`. Icons from `lucide-react`.
- **TypeScript is intentionally loose:** `strictNullChecks`, `noUnusedLocals`, `noUnusedParameters`, `noImplicitAny` are all relaxed in `tsconfig.json`, and the eslint rule `@typescript-eslint/no-unused-vars` is off.
- **Formatting:** Prettier (2-space, double quotes, 80 cols, ES5 trailing commas, semicolons). Run `npm run format` before committing.
