export class Todo {
  constructor(title, isCompleted = false) {
    this.title = title;
    this.isCompleted = isCompleted;
  }

  render() {
    const node = document.createElement("div");
    node.className = "todo";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = this.isCompleted;

    checkbox.addEventListener("change", () => {
      this.isCompleted = checkbox.checked;
      node.style.textDecoration = this.isCompleted ? "line-through" : "none";
    });

    const label = document.createElement("label");
    label.textContent = this.title;

    node.appendChild(checkbox);
    node.appendChild(label);

    return node;
  }
}