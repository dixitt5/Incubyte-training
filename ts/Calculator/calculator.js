"use strict";
class Calculator {
  constructor(displayElement) {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = "";
    this.displayElement = displayElement;
  }
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand + number;
  }
  chooseOperation(operation) {
    console.log(operation);
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = "";
  }
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "/":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation.toString();
    this.operation = "";
    this.previousOperand = "";
  }
  updateDisplay() {
    this.displayElement.textContent = this.currentOperand;
  }
}
const display = document.getElementById("result");
const numberButtons = document.querySelectorAll(
  ".calculator button:not(#clear):not(#eval)"
);
const operationButtons = document.querySelectorAll(
  ".calculator button:not(#clear):not(#eval)"
);
const equalsButton = document.getElementById("eval");
const clearButton = document.getElementById("clear");
const calculator = new Calculator(display);
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.textContent);
    calculator.updateDisplay();
  });
});
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.textContent);
    calculator.updateDisplay();
  });
});
equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});
clearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
