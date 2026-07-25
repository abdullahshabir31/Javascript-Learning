// Example: preventDefault()

const link = document.getElementById("link");

link.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Navigation prevented!");
});
