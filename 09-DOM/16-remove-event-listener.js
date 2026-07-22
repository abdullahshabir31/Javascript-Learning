// Example: removeEventListener()

const button = document.getElementById("btn");

function showMessage() {
  alert("Clicked!");
}

button.addEventListener("click", showMessage);

button.removeEventListener("click", showMessage);
