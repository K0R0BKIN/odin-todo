import { Todo } from "./todo";
import { lists } from "./list";

const titleField = document.getElementById("title-field");
const listField = document.getElementById("list-field");
const addButton = document.getElementById("add-button");

const listsContainer = document.getElementById("lists");

renderListPicker();
renderLists();

addButton.addEventListener("click", () => {
  const title = titleField.value;
  if (title) {
    const todo = new Todo(title);
    const list = lists.find((l) => l.title === listField.value);
    list.addTodo(todo);
    
    renderLists();
    titleField.value = "";
  }
});

function renderListPicker() {
  lists.forEach((list) => {
    const listOption = document.createElement("option");
    listOption.value = list.title;
    listOption.textContent = list.title;
    listField.appendChild(listOption);
  });
}

function renderLists() {
  const listItems = [];
  lists.forEach((list) => {
    const listItem = list.render();
    listItems.push(listItem);
  });

  listsContainer.replaceChildren(...listItems);
}