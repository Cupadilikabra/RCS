let firstNumber;
let secondNumber;
let step = 0;
let operation;
let result = 0;

let numArray = [];
let secondNumArray = [];

let display = document.getElementById("display");

function getNumber(num) {
  if (step === 0 || step === 1) {
    numArray.push(num);
    step = 1;
    firstNumber = Number(numArray.join(""));
    display.value = firstNumber;
  } else if (step === 2) {
    secondNumArray.push(num);
    secondNumber = Number(secondNumArray.join(""));
    display.value = secondNumber;
  }
}

function getOperator(operator) {
  step = 2;
  operation = operator;
}

function calculateResult() {
  if (operation === "+") {
    result = firstNumber + secondNumber;
    display.value = result;
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
    display.value = result;
  } else if (operation === "*") {
    result = firstNumber * secondNumber;
    display.value = result;
  } else if (operation === "/") {
    result = firstNumber / secondNumber;
    display.value = result;
  }
  console.log(
    "first number",
    firstNumber,
    "second number",
    secondNumber,
    "Equals",
    result
  );

  firstNumber = result;
  secondNumber = null;
  numArray = [];
  secondNumArray = [];
  step = 2;
}

function clearDisplay() {
  display.value = 0;
  firstNumber = null;
  secondNumber = null;
  step = 0;
  operation = null;
  result = 0;
  numArray = [];
  secondNumArray = [];

  console.log("clear display");
}
