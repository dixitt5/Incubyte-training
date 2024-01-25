"use strict";
class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement;
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = '';
    }
    clear() {
        this.currentNumber = '';
        this.previousNumber = '';
        this.operation = '';
    }
    appendNumber(number) {
        this.currentNumber = this.currentNumber.toString() + number.toString();
    }
    chooseOperation(operation) {
        this.operation = operation;
        if (operation === "=") {
            if (['/', '*', '-', '+'].includes(displayElement.innerText.charAt(displayElement.innerText.length - 1))) {
                return;
            }
        }
        if ((['/', '*', '-', '+'].includes(displayElement.innerText.charAt(displayElement.innerText.length - 1)))) {
            let newText = displayElement.innerText.split('');
            newText[newText.length - 1] = operation;
            displayElement.innerText = newText.join('');
        }
        else {
            displayElement.innerText += operation;
        }
        if (this.currentNumber === '')
            return;
        if (this.previousNumber !== '') {
            this.compute();
        }
        this.previousNumber = this.currentNumber;
        this.currentNumber = '';
    }
    compute() {
        let computation;
        const prev = parseFloat(this.previousNumber);
        const current = parseFloat(this.currentNumber);
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentNumber = computation.toString();
        this.operation = '';
        this.previousNumber = '';
    }
    updateDisplay() {
        this.displayElement.innerText = this.currentNumber;
    }
}
const displayElement = document.getElementById('result');
const calculator = new Calculator(displayElement);
document.querySelectorAll('.calculator button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            calculator.clear();
            calculator.updateDisplay();
        }
        else if (button.id === 'eval') {
            calculator.compute();
            calculator.updateDisplay();
        }
        else if (['/', '*', '-', '+'].includes(button.textContent)) {
            calculator.chooseOperation(button.textContent);
        }
        else {
            calculator.appendNumber(button.textContent);
            calculator.updateDisplay();
        }
    });
});
