// Example: Fetch API

const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  console.log(users);
});
