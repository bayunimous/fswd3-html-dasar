const form = document.querySelector("form");
const input = document.querySelector("form input");
const todos = document.querySelector(".todos");
let todoList = [];

// Check if there's existing data in localStorage
if (localStorage.getItem("todoList")) {
  todoList = JSON.parse(localStorage.getItem("todoList"));
  populateTodoList(todoList);
}

// Listen for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    const todo = {
      text,
      done: false,
    };
    todoList.push(todo);
    saveTodoList(todoList);
    addTodoToDom(todo);
    input.value = "";
  }
});

// Listen for click on delete button
todos.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const todoText = event.target.parentNode.querySelector("span").textContent;
    const index = todoList.findIndex((todo) => todo.text === todoText);
    todoList.splice(index, 1);
    saveTodoList(todoList);
    event.target.parentNode.remove();
  }
});

// Listen for click on todo item
todos.addEventListener("click", function (event) {
  if (event.target.tagName === "SPAN") {
    const todoText = event.target.textContent;
    const index = todoList.findIndex((todo) => todo.text === todoText);
    todoList[index].done = !todoList[index].done;
    saveTodoList(todoList);
    event.target.classList.toggle("done", todoList[index].done);
  }
});

// Add todo to DOM
function addTodoToDom(todo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.textContent = todo.text;
  button.textContent = "Delete";
  li.appendChild(span);
  li.appendChild(button);
  todos.appendChild(li);
  span.classList.toggle("done", todo.done);
}

function populateTodoList(todoList) {
  todoList.forEach((todo) => {
    addTodoToDom(todo);
    if (todo.done) {
      const span = todos.lastElementChild.querySelector("span");
      span.classList.add("done");
    }
  });
}

// Save todo list to localStorage
function saveTodoList(todoList) {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
