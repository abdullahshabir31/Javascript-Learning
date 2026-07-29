const button = document.getElementById("calculate");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const height = Number(document.getElementById("height").value) / 100;
  const weight = Number(document.getElementById("weight").value);

  if (!height || !weight) {
    result.textContent = "Please enter valid values.";
    return;
  }

  const bmi = weight / (height * height);

  result.textContent = `Your BMI: ${bmi.toFixed(2)}`;
});
