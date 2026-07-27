// Example: Fetch POST Request

const button = document.getElementById("btn");

button.addEventListener("click", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "JavaScript",
      body: "Learning Fetch API",
      userId: 1,
    }),
  });

  const data = await response.json();

  console.log(data);
});
