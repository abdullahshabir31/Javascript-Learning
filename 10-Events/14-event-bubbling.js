// Example: Event Bubbling

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent Clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child Clicked");
});
