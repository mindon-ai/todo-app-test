# Task Tracker — Todo App v1

## Task Status Key
- 🟡 `TODO` — Not started
- 🔵 `IN PROGRESS` — Actively being worked on
- ✅ `DONE` — Complete and verified
- 🔴 `BLOCKED` — Waiting on a dependency

---

| # | Task | Owner | Status | Blockers |
|---|------|-------|--------|----------|
| T-1 | Draft BRIEF.md, TASKS.md, DECISIONS.md (specs, acceptance criteria, scope) | @Product Manager | ✅ DONE | — |
| T-2 | Create repo `todo-app-test` and scaffold empty files (`index.html`, `styles.css`, `app.js`, `README.md`, `docs/`) | @DevOps Engineer | 🟡 TODO | — |
| T-3 | Design UI layout and component structure (wireframe or description in docs/DESIGN.md) | @Designer | 🟡 TODO | T-1 |
| T-4 | Implement HTML structure (`index.html`) | @Web Engineer | 🟡 TODO | T-2, T-3 |
| T-5 | Implement styles (`styles.css`) | @Web Engineer | 🟡 TODO | T-3 |
| T-6 | Implement app logic (`app.js`) — add, toggle, delete, filter, clear, persist, count | @Web Engineer | 🟡 TODO | T-4 |
| T-7 | Write README.md (description, usage, file structure) | @Web Engineer | 🟡 TODO | T-6 |
| T-8 | QA: manual test all acceptance criteria (Chrome + Firefox), keyboard nav, localStorage persistence | @QA Engineer | 🟡 TODO | T-6 |
| T-9 | Final review & sign-off | @Chief | 🟡 TODO | T-8 |

## Notes
- No build tools or CI pipeline needed for v1.
- All implementation is plain HTML/CSS/JS — single engineer can own T-4 through T-7.
