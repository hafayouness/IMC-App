const BMIData = [
  { name: "Maigreur", color: "#0000ff", range: [0, 18.5] },
  { name: "bonne santé", color: "#00ff00", range: [18.5, 25] },
  { name: "surpoids", color: "#f08080", range: [25, 30] },
  { name: "obésité modérée", color: "#ffa500", range: [30, 35] },
  { name: "obésité sévère", color: "#dc143c", range: [35, 40] },
  { name: "obésité  morbide", color: "#800080", range: 40 },
];

const form = document.querySelector("form");
//console.dir(form);
form.addEventListener("submit", handlForm);
function handlForm(e) {
  e.preventDefault();
  calculateBMI();
}
const inputs = document.querySelectorAll("input");
// inputs = [...document.querySelectorAll("input")]pour voir tous les methodes de tableaux

function calculateBMI() {
  const height = inputs[0].value;
  const weight = inputs[1].value;
  if (!height || !weight || height <= 0 || weight <= 0) {
    handlError();
    return;
  }
  const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
  console.log(BMI);
  showResult(BMI);
}
const displayBMI = document.querySelector(".bmi-valeur");
const result = document.querySelector(".result");
function handlError() {
  displayBMI.textContent = "Woops";
  result.textContent = " remplissez correctement les inputs";
}
function showResult(BMI) {
  const rank = BMIData.find((data) => {
    if (BMI >= data.range[0] && BMI < data.range[1]) return data;
    else if (typeof data.range === "number" && BMI >= data.range) return data;
  });
  console.log(rank);
  displayBMI.textContent = BMI;
  displayBMI.style.color = `${rank.color}`;
  result.textContent = `Resultat : ${rank.name}`;
}
