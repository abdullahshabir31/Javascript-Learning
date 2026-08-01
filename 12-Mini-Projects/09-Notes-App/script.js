const note = document.getElementById("note");
const save = document.getElementById("save");
const notesList = document.getElementById("notesList");

save.addEventListener("click", () => {
  if (note.value.trim() === "") return;

  const li = document.createElement("li");

  li.textContent = note.value;

  notesList.appendChild(li);

  note.value = "";
});
