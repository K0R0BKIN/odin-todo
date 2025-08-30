export class List {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  render() {
    const node = document.createElement("div");
    node.classList.add("list");

    const title = document.createElement("h3");
    title.textContent = this.title;

    const todosContainer = document.createElement("div");
    todosContainer.id = "todos";
    this.todos.forEach((todo) => {
      const todoItem = todo.render();
      todosContainer.appendChild(todoItem);
    });

    node.appendChild(title);
    node.appendChild(todosContainer);

    return node;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todo) {
    this.todos = this.todos.filter((t) => t !== todo);
  }
}

export const lists = [
  new List("Inbox"),
  new List("Next Actions"),
  new List("Someday/Maybe"),
];
