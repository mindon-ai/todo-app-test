# My To-Dos

A small, responsive to-do list built with plain HTML, CSS, and JavaScript. Tasks are saved in your browser with `localStorage`; no account, server, dependencies, or build step is required.

## Run locally

Open `index.html` directly in a modern browser, or serve this directory with any static file server. For example, with Python installed:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Use

Enter a task and press **Enter** or select **Add**. Use each checkbox to toggle completion, and **Delete** to remove an individual task. The filters show all, active, or completed tasks. **Clear completed** removes all finished tasks. The footer shows the number of active tasks. Task changes are persisted locally in this browser.

## Files

- `index.html` — accessible page structure
- `styles.css` — responsive presentation and focus styling
- `app.js` — task behavior, filtering, and local storage
- `docs/` — product brief, design notes, task tracker, and decisions
