const input = document.getElementById("seconds");
const display = document.getElementById("display");

document.getElementById("start").addEventListener("click", () => {
  let time = Number(input.value);

  if (!time) return;

  display.textContent = time;

  const timer = setInterval(() => {
    time--;

    display.textContent = time;

    if (time <= 0) {
      clearInterval(timer);
      display.textContent = "Time's Up!";
    }
  }, 1000);
});
