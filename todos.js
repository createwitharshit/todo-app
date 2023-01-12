const emojis = ['😃', '😎', '😍', '😜', '😂', '🔥'];

export const todos = [
  { id: 1, text: 'Write code for todo list app', completed: true },
  { id: 2, text: 'Test the app', completed: false },
  { id: 3, text: 'Deploy the app', completed: false }
];

export function addTodo(text) {
  const newTodo = {
    id: todos.length + 1,
    text: `${text} ${emojis[Math.floor(Math.random() * emojis.length)]}`,
    completed: false
  };
  todos.push(newTodo);
}

