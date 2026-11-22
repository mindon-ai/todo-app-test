(() => {
  'use strict';
  const STORAGE_KEY = 'todos';
  const form = document.querySelector('#todo-form');
  const input = document.querySelector('#todo-input');
  const addButton = document.querySelector('#add-btn');
  const list = document.querySelector('#todo-list');
  const emptyState = document.querySelector('#empty-state');
  const count = document.querySelector('#todo-count');
  const clearButton = document.querySelector('#clear-completed-btn');
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  let filter = 'all';
  let todos = readTodos();

  function readTodos() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(stored) ? stored.filter(todo => todo && typeof todo.id === 'string' && typeof todo.text === 'string' && typeof todo.completed === 'boolean') : [];
    } catch {
      return [];
    }
  }
  function save() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(todos)); } catch { /* Storage may be unavailable (e.g. private mode). */ } }
  function render() {
    list.replaceChildren();
    const visible = todos.filter(todo => filter === 'all' || (filter === 'active' && !todo.completed) || (filter === 'completed' && todo.completed));
    for (const todo of visible) {
      const item = document.createElement('li');
      item.className = `todo-item${todo.completed ? ' completed' : ''}`;
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox'; checkbox.className = 'todo-check'; checkbox.checked = todo.completed;
      checkbox.setAttribute('aria-label', `${todo.completed ? 'Mark active' : 'Mark completed'}: ${todo.text}`);
      checkbox.addEventListener('change', () => { todo.completed = checkbox.checked; save(); render(); });
      const text = document.createElement('span'); text.className = 'todo-text'; text.textContent = todo.text;
      const remove = document.createElement('button'); remove.type = 'button'; remove.className = 'delete-btn'; remove.textContent = 'Delete';
      remove.setAttribute('aria-label', `Delete: ${todo.text}`);
      remove.addEventListener('click', () => { todos = todos.filter(entry => entry.id !== todo.id); save(); render(); });
      item.append(checkbox, text, remove); list.append(item);
    }
    const remaining = todos.filter(todo => !todo.completed).length;
    count.textContent = `${remaining} ${remaining === 1 ? 'item' : 'items'} left`;
    emptyState.hidden = visible.length !== 0;
    clearButton.disabled = !todos.some(todo => todo.completed);
    filterButtons.forEach(button => {
      const selected = button.dataset.filter === filter;
      button.classList.toggle('active', selected); button.setAttribute('aria-pressed', String(selected));
    });
  }
  input.addEventListener('input', () => { addButton.disabled = input.value.trim().length === 0; addButton.setAttribute('aria-disabled', String(addButton.disabled)); });
  form.addEventListener('submit', event => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    todos.push({ id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`, text, completed: false });
    save(); input.value = ''; addButton.disabled = true; addButton.setAttribute('aria-disabled', 'true'); render(); input.focus();
  });
  filterButtons.forEach(button => button.addEventListener('click', () => { filter = button.dataset.filter; render(); }));
  clearButton.addEventListener('click', () => { todos = todos.filter(todo => !todo.completed); save(); render(); });
  render();
})();
