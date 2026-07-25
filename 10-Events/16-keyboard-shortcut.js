// Example: Keyboard Shortcut

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();
    alert("Ctrl + S Pressed");
  }
});
