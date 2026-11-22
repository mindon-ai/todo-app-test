# Decision Records — Todo App

## DR-001: No build tools or frameworks
- **Date**: 2026-11-22
- **Status**: Accepted
- **Context**: User explicitly requires a simple static app with no build step.
- **Decision**: Use plain HTML, CSS, and vanilla JavaScript (ES6+). No bundlers, transpilers, or frameworks.
- **Consequences**: Faster onboarding, zero dependencies, runs from `file://`. Limits code organisation to what vanilla JS supports (modules via `<script type="module">` are allowed if needed but not required).

## DR-002: localStorage for persistence
- **Date**: 2026-11-22
- **Status**: Accepted
- **Context**: App must persist tasks across page reloads without a backend.
- **Decision**: Store the task array as JSON in `localStorage` under a single key (e.g., `todos`).
- **Consequences**: ~5 MB limit per origin, synchronous API, no cross-device sync. Sufficient for a personal to-do list.

## DR-003: Single-branch workflow
- **Date**: 2026-11-22
- **Status**: Accepted
- **Context**: Small scope, single implementation phase, no CI.
- **Decision**: All work merges directly to `main`.
- **Consequences**: Simplicity; acceptable risk given the project size. Can revisit if scope grows.

## DR-004: Edit-task deferred to v2
- **Date**: 2026-11-22
- **Status**: Accepted
- **Context**: Editing task text in-place adds UI complexity (inline input, save/cancel, escape handling).
- **Decision**: Defer to v2. Users can delete and re-add for now.
- **Consequences**: Keeps v1 scope minimal. May surface as user feedback.
