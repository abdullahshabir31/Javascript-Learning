const button = document.getElementById("calculate");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const dob = new Date(document.getElementById("dob").value);

  if (!document.getElementById("dob").value) {
    result.textContent = "Please select your date of birth.";
    return;
  }

  const today = new Date();

  let age = today.getFullYear() - dob.getFullYear();

  const month = today.getMonth() - dob.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  result.textContent = `Your Age is ${age} years`;
});
