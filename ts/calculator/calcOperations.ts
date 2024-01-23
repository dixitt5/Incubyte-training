interface INumericals {
  add(first: number, second: number): number;
  sub(first: number, second: number): number;
  div(first: number, second: number): number;
  mul(first: number, second: number): number;
}

class Calculator implements INumericals {
  add(first: number, second: number): number {
    return first + second;
  }
  sub(first: number, second: number): number {
    return first - second;
  }
  div(first: number, second: number): number {
    if (second == 0) throw new Error("Divisor should not be zero!");
    return first / second;
  }
  mul(first: number, second: number): number {
    return first * second;
  }
}

const allButtons = document.querySelectorAll("#btn");
const display = document.querySelector("#display");
let displayString: string = "";
const calculator = new Calculator();

let output = 0;
function setOutputValue() {
  if (display != undefined) {
    display.innerHTML = displayString;
  }
}

console.log(typeof allButtons);
let isFirstValueDone: boolean = false;
for (const [_, value] of Object.entries(allButtons)) {
  value.addEventListener("click", (event) => {
    console.log(value.innerHTML.trim());
    const btnValue = value.innerHTML.trim();
    switch (btnValue) {
      case "+":
        if (displayString == "") break;
        output = calculator.add(output, parseInt(displayString));
        displayString = output.toString();
        setOutputValue();
        displayString = "";
        break;
      case "-":
        if (displayString == "") break;
        output = calculator.sub(output, parseInt(displayString));
        displayString = output.toString();
        setOutputValue();
        displayString = "";
        break;
      case "x":
        if (displayString == "") break;
        output = calculator.mul(
          output == 0 ? 1 : output,
          parseInt(displayString)
        );

        displayString = output.toString();
        setOutputValue();
        displayString = "";
        break;
      case "/":
        if (displayString == "") break;
        output = calculator.div(output == 0 ? 1 : output, parseInt(displayString));
        displayString = output.toString();
        setOutputValue();
        displayString = "";
        break;
      default:
        displayString += btnValue.toString();
        setOutputValue();
        break;
    }
  });
}
