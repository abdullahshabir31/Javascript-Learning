const search = document.getElementById("search");

search.addEventListener("click", () => {
  const city = document.getElementById("city").value;

  document.getElementById("cityName").textContent = city || "Lahore";

  document.getElementById("temperature").textContent = "Temperature: 32°C";

  document.getElementById("condition").textContent = "Condition: Sunny";
});
