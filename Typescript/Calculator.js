"use strict";
class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    get add() {
        return (this.num1 + this.num2);
    }
    get sub() {
        return (this.num1 - this.num2);
    }
    get mul() {
        return (this.num1 * this.num2);
    }
    get div() {
        return this.num2 > 0 ? (this.num1 / this.num2) : 0;
    }
}
const result = document.getElementById('result');
function displayResult(resultStr) {
    result.innerText = resultStr;
}
function manageCalc() {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const operator = document.querySelector("input[type='radio'][name='operation']:checked");
    // const numbers = [Number(num1?.value), Number(num2?.value)];
    // const operation = operator.value;
    // It Manages the Calculator page.
    // let [n1, n2] = numbers;
    const myCalc = new Calculator(+num1.value, +num2.value);
    switch (operator.value) {
        case '+':
            displayResult(`Addition: ${myCalc.add}`);
            break;
        case '-':
            displayResult(`Subtraction: ${myCalc.sub}`);
            break;
        case '*':
            displayResult(`Multiplication: ${myCalc.mul}`);
            break;
        case '/':
            displayResult(`Division: ${myCalc.div}`);
            break;
        default:
            alert("Invald Operation!");
            break;
    }
}
