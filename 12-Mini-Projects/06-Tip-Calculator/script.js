const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

calculate.addEventListener("click", () => {
  const bill = Number(document.getElementById("bill").value);
  const tip = Number(document.getElementById("tip").value);

  if (!bill || !tip) {
    result.textContent = "Please enter valid values.";
    return;
  }

  const tipAmount = (bill * tip) / 100;
  const total = bill + tipAmount;

  result.textContent = `Tip: ${tipAmount.toFixed(2)} | Total: ${total.toFixed(2)}`;
});
