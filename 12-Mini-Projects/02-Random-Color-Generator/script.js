const button = document.getElementById("btn");
const colorCode = document.getElementById("colorCode");

button.addEventListener("click", () => {
  const randomColor =
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

  document.body.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
});
