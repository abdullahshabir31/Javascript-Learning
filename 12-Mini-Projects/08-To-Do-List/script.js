const input = document.getElementById("task");
const button = document.getElementById("addTask");
const list = document.getElementById("list");

button.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");

  li.textContent = input.value;

  list.appendChild(li);

  input.value = "";
});
