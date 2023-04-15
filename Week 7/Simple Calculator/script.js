const calcBtn = document.getElementById("calcBtn")
const result = document.getElementById("result")

calcBtn.addEventListener("click", calculate);

function calculate() {
  // Get input values
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operator = document.getElementById("operator").value;

  // Perform calculation based on selected operator using switch case
  let answer;
  switch (operator) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    case "/":
      answer = num1 / num2;
      break;
    default:
      answer = "Invalid operator";
      break;
  }

  // Display the result
  result.innerHTML = "Result: " + answer;
}
