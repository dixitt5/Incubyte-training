import { Stack } from '../GenericStack';

class Calculator {
    constructor(private num1: number, private num2: number) {}
    
    get add(): number {
        return (this.num1 + this.num2);
    }
    get sub(): number {
        return (this.num1 - this.num2);
    }
    get mul(): number {
        return (this.num1 * this.num2);
    }
    get div(): number {
        return this.num2 > 0 ? (this.num1 / this.num2) : 0;
    }
}

const result = document.getElementById('result') as HTMLSpanElement;
const history = document.getElementById('history') as HTMLDivElement;
function displayResult(resultStr: string): void {
    result.innerText = resultStr;
}

class History {
    private historyList: Stack<string> = new Stack<string>();
    constructor(private historyString: string ) {}

}

function maintainHistory() {

    
}

function manageCalc(): void {
    const num1 = document.getElementById('num1') as HTMLInputElement;
    const num2 = document.getElementById('num2') as HTMLInputElement;
    
    const operator = document.querySelector("input[type='radio'][name='operation']:checked") as HTMLInputElement;
    
    const myCalc = new Calculator(+num1.value, +num2.value);

    switch(operator.value){
        case '+': displayResult(`Addition: ${myCalc.add}`);
        break;
        
        case '-': displayResult(`Subtraction: ${myCalc.sub}`);
        break;
        
        case '*': displayResult(`Multiplication: ${myCalc.mul}`);
        break;
        
        case '/': displayResult(`Division: ${myCalc.div}`);
        break;

        default: alert("Invald Operation!");
        break;
    }

    maintainHistory();
}


