const form = document.querySelector("form");
const input = document.querySelector("form input");
const todos = document.querySelector(".todos");

//SUBMIT BUTTON
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.textContent = text;
    button.textContent = "Delete";
    li.appendChild(span);
    li.appendChild(button);
    todos.appendChild(li);
    input.value = "";
  }
});

//DELETE BUTTON
todos.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentNode.remove();
  }
});
