const form = document.getElementById("reportForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.style.display = "none";
  confirmation.classList.remove("hidden");
});