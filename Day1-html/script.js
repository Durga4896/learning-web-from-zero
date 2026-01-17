console.log("JS loaded");

const checkBtn = document.getElementById("checkBtn");
const ageInput = document.getElementById("ageInput");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
  const age = Number(ageInput.value);

  if (age >= 18) {
    result.textContent = "You are eligible.";
  } else {
    result.textContent = "You are NOT eligible.";
  }
});
