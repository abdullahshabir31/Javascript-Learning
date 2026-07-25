// Example: Event Object

const button = document.getElementById("btn");

button.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.type);
  console.log(event.target);
});
