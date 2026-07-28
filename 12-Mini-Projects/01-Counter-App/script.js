const count = document.getElementById("count");

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

let value = 0;

increase.addEventListener("click", () => {
  value++;
  count.textContent = value;
});

decrease.addEventListener("click", () => {
  value--;
  count.textContent = value;
});

reset.addEventListener("click", () => {
  value = 0;
  count.textContent = value;
});
