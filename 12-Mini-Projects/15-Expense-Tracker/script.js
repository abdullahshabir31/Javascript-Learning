const add = document.getElementById("add");
const expenses = document.getElementById("expenses");
const total = document.getElementById("total");

let totalAmount = 0;

add.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const amount = Number(document.getElementById("amount").value);

  if (title === "" || amount <= 0) return;

  const li = document.createElement("li");

  li.textContent = `${title} - Rs. ${amount}`;

  expenses.appendChild(li);

  totalAmount += amount;

  total.textContent = `Total: Rs. ${totalAmount}`;

  document.getElementById("title").value = "";
  document.getElementById("amount").value = "";
});
