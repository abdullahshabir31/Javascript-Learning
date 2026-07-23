// Example: Change Event

const course = document.getElementById("course");
const selected = document.getElementById("selected");

course.addEventListener("change", () => {
  selected.textContent = `Selected: ${course.value}`;
});
