# To-Do App — Design Specification v1

## 1. Design Tokens

### Colors
| Token              | Value     | Usage                              |
|--------------------|-----------|-------------------------------------|
| `--color-bg`       | `#FAFAFA` | Page background                     |
| `--color-surface`  | `#FFFFFF` | Card / input background             |
| `--color-text`     | `#1A1A1A` | Primary text (contrast ≥ 12.6:1)    |
| `--color-text-sec` | `#5C5C5C` | Secondary / placeholder (≥ 4.6:1)   |
| `--color-primary`  | `#2563EB` | Buttons, active filter (≥ 4.6:1 on white) |
| `--color-primary-hover` | `#1D4ED8` | Button hover state              |
| `--color-border`   | `#D4D4D4` | Input borders, dividers             |
| `--color-danger`   | `#DC2626` | Delete action                       |
| `--color-danger-hover` | `#B91C1C` | Delete hover                    |
| `--color-done`     | `#5C5C5C` | Completed task text (muted)         |
| `--color-focus`    | `#2563EB` | Focus ring color                    |

All pairs meet **WCAG 2.1 AA** minimum contrast (4.5:1 normal text, 3:1 large text / UI components).

### Typography
| Token             | Value                                      |
|-------------------|--------------------------------------------|
| `--font-family`   | `system-ui, -apple-system, sans-serif`      |
| `--font-size-sm`  | `0.875rem` (14px) — filter labels, meta     |
| `--font-size-base`| `1rem` (16px) — body text, task items        |
| `--font-size-lg`  | `1.5rem` (24px) — page title                 |
| `--font-weight-normal` | `400`                                  |
| `--font-weight-medium` | `500` — buttons, active filter          |
| `--font-weight-bold`   | `700` — page title                      |
| `--line-height`   | `1.5`                                       |

### Spacing
| Token         | Value   |
|---------------|---------|
| `--space-xs`  | `0.25rem` (4px)  |
| `--space-sm`  | `0.5rem`  (8px)  |
| `--space-md`  | `1rem`    (16px) |
| `--space-lg`  | `1.5rem`  (24px) |
| `--space-xl`  | `2rem`    (32px) |

### Border & Elevation
| Token              | Value                          |
|--------------------|--------------------------------|
| `--radius`         | `0.5rem` (8px)                  |
| `--radius-sm`      | `0.25rem` (4px) — small chips   |
| `--border-width`   | `1px`                           |
| `--shadow-card`    | `0 1px 3px rgba(0,0,0,0.08)`   |
| `--shadow-card-hover` | `0 2px 6px rgba(0,0,0,0.12)` |

---

## 2. Layout

### Structure (single-column, centered)
```
┌──────────────────────────────────────────┐
│              Page Background             │
│  ┌────────────────────────────────────┐  │
│  │          "My To-Dos" (h1)          │  │
│  ├────────────────────────────────────┤  │
│  │  [ Text input        ] [ Add btn ] │  │
│  ├────────────────────────────────────┤  │
│  │  (All) (Active) (Completed)        │  │
│  ├────────────────────────────────────┤  │
│  │  ☐  Task item text         [×]    │  │
│  │  ─────────────────────────────────│  │
│  │  ☑  Completed task (muted)  [×]    │  │
│  │  ─────────────────────────────────│  │
│  │  ... more items ...                │  │
│  ├────────────────────────────────────┤  │
│  │  Empty state: "No tasks yet."      │  │
│  └────────────────────────────────────┘  │
└──────────────────────────────────────────┘
```

### Responsive Breakpoints
| Breakpoint     | Max-width of card | Horizontal padding |
|----------------|-------------------|--------------------|
| Mobile (<640px)  | 100%            | `var(--space-md)`  |
| Tablet (≥640px)  | 560px           | `var(--space-lg)`  |
| Desktop (≥1024px)| 560px           | `var(--space-lg)`  |

The card stays at max `560px` on larger screens, centered with `margin: 0 auto`. This keeps task text scannable without excessive line length.

---

## 3. Component States

### Text Input (add task)
| State     | Style                                            |
|-----------|--------------------------------------------------|
| Default   | `--color-border` border, `--color-surface` bg     |
| Focus     | `--color-focus` border (2px), 3px outer focus ring |
| Filled    | `--color-text` text                                |
| Placeholder | `--color-text-sec`, text: "Add a new task…"     |

### Add Button
| State     | Style                                            |
|-----------|--------------------------------------------------|
| Default   | `--color-primary` bg, white text, `--radius`      |
| Hover     | `--color-primary-hover` bg                         |
| Focus     | 3px focus ring `--color-focus`                     |
| Disabled  | `opacity: 0.5`, `cursor: not-allowed` (empty input) |

### Task Item Row
| State       | Style                                          |
|-------------|------------------------------------------------|
| Default     | `--color-text`, left-aligned, checkbox + label  |
| Completed   | `--color-done` text, `line-through`             |
| Hover       | `--shadow-card-hover` on row                    |

### Delete Button (per item)
| State     | Style                                            |
|-----------|--------------------------------------------------|
| Default   | `--color-danger` text, no bg, `×` icon            |
| Hover     | `--color-danger-hover`, slight bg tint             |
| Focus     | Focus ring `--color-focus`                         |

### Filter Tabs (All / Active / Completed)
| State     | Style                                            |
|-----------|--------------------------------------------------|
| Default   | `--color-text-sec`, no border                     |
| Active    | `--color-primary`, `--font-weight-medium`, underline 2px |
| Hover     | `--color-primary` text                             |
| Focus     | Focus ring `--color-focus`                         |

### Empty State
- Centered text: "No tasks yet. Add one above!"
- Color: `--color-text-sec`
- Font: `--font-size-base`

### Loading State
Not applicable — all data is in localStorage; no async loading.

### Error State
Not applicable for v1 — localStorage is synchronous and unlikely to fail in normal use.

---

## 4. Accessibility Requirements

| Requirement           | Specification                                        |
|-----------------------|------------------------------------------------------|
| Contrast              | All text/bg pairs meet WCAG 2.1 AA (4.5:1+)          |
| Focus indicators      | Visible 3px ring on all interactive elements          |
| Keyboard navigation   | Full tab order: input → add button → filters → task checkboxes → delete buttons |
| Semantic HTML         | `<main>`, `<h1>`, `<form>`, `<ul>/<li>`, `<button>`, `<input type="checkbox">`, `<label>` |
| ARIA                  | `aria-label` on delete buttons ("Delete [task name]"), `aria-pressed` on filter buttons, `aria-live="polite"` on task list for screen reader updates |
| Touch targets         | Minimum 44×44px for checkboxes, buttons on mobile     |
| Input font size       | ≥16px to prevent iOS zoom on focus                    |

---

## 5. Screen Inventory

| # | Screen         | Description                              |
|---|----------------|------------------------------------------|
| 1 | Default (empty)| Title, input bar, filters, empty message  |
| 2 | With tasks     | Task list populated, filters functional   |
| 3 | Filtered view  | Active or Completed filter selected       |

Single page — no routing required.

---

## 6. Out of Scope (v1)
- Dark mode / theme toggle
- Drag-and-drop reordering
- Due dates, priorities, or categories
- Animations / transitions beyond hover states
- Custom icons or illustrations
