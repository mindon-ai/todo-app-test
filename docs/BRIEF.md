# Project Brief — Todo App

## Problem Statement
Users need a simple, lightweight to-do list that runs entirely in the browser with no backend, no build step, and no dependencies. It must persist tasks across sessions using `localStorage`.

## Target Users
- **Primary Persona — Casual Task Tracker**: A person who wants a quick, distraction-free way to add, complete, and filter personal tasks without signing up for a service.

## V1 Scope (Must-Have)
1. **Add a task** — text input + submit; new task appears at the end of the list.
2. **Mark a task complete / incomplete** — toggle via checkbox or click.
3. **Delete a task** — remove a single task permanently.
4. **Filter tasks** — view All, Active (incomplete), or Completed.
5. **Persist tasks** — read/write `localStorage`; tasks survive page reload.
6. **Clear completed** — bulk-delete all completed tasks.
7. **Task count** — display number of remaining (active) tasks.

## Functional Requirements
| # | Requirement | Acceptance Criteria |
|---|-------------|---------------------|
| FR-1 | Add task | Given the input is non-empty, when the user submits, then a new uncompleted task is appended and the input clears. Empty/whitespace-only input is ignored. |
| FR-2 | Toggle complete | When the user clicks a task's checkbox, its `completed` state inverts and the UI updates immediately. |
| FR-3 | Delete task | When the user clicks the delete control, the task is removed from the list and from `localStorage`. |
| FR-4 | Filter (All / Active / Completed) | Clicking a filter shows only the matching subset. The active filter is visually highlighted. Default filter on load is "All". |
| FR-5 | Persist via localStorage | On every mutation (add, toggle, delete, clear) the full task list is saved. On page load, tasks are restored from storage. |
| FR-6 | Clear completed | Button removes all completed tasks in one action. Button is hidden or disabled when there are no completed tasks. |
| FR-7 | Task count | Footer displays "{n} item(s) left" reflecting active (incomplete) tasks. |

## Tech Stack & Constraints
- **Files**: `index.html`, `styles.css`, `app.js`, `README.md`
- **Languages**: Plain HTML, CSS, JavaScript (ES6+). No frameworks, no build tools, no transpilers.
- **Storage**: `localStorage` only. No server, no database.
- **Browser support**: Latest stable Chrome, Firefox, Safari, Edge.
- **Accessibility**: Semantic HTML, keyboard-navigable controls, visible focus states.

## Out of Scope (v1)
- Drag-and-drop reordering
- Due dates, priorities, or tags
- Multiple lists or projects
- User accounts or cloud sync
- Dark mode / theme switching
- Animations or transitions beyond basic CSS
- Mobile-native app wrappers
- Analytics or telemetry
- Edit task text after creation

## Success Criteria
1. All seven functional requirements pass manual testing in Chrome and Firefox.
2. Tasks persist across page reload with no data loss.
3. Page loads from a local file (`file://`) or any static server with zero build steps.
4. HTML validates (no errors) via the W3C validator.
5. App is keyboard-navigable: add, toggle, delete, filter, and clear completed can all be performed without a mouse.

## Repository
- **Repo name**: `todo-app-test`
- **Branch strategy**: `main` only for v1.
