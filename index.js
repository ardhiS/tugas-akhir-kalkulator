const numbers = document.querySelectorAll(".number");
console.log(numbers);
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const updateScreen = (n) => {
  calculatorScreen.value = n;
};
const inputNumber = (n) => {
  if (currentNumber === "0") {
    currentNumber = n;
  } else {
    currentNumber += n;
  }
};
const inputOperator = (o) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = o;
  currentNumber = "0";
};
const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};
const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});
clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});
decimal.addEventListener("click", (e) => {
  inputDecimal(e.target.value);
  updateScreen(currentNumber);
});

operators.forEach((i) => {
  i.addEventListener("click", (e) => {
    inputOperator(e.target.value);
  });
});

numbers.forEach((n) => {
  n.addEventListener("click", (e) => {
    inputNumber(e.target.value);
    updateScreen(currentNumber);
  });
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
};
