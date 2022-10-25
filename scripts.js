const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operador]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const AllClearButton = document.querySelector("[data-all-clear]");
const previousOpTextElement = document.querySelector("[data-previous-operand]");
const currentOpTextElement = document.querySelector("[data-current-operand]");


class Calculator {
  constructor(previousOpTextElement, currentOpTextElement) {
    this.previousOpTextElement = previousOpTextElement;
    this.currentOpTextElement = currentOpTextElement;
    this.clear()
  }

  calculate() {
    let result;

    const _previousOperand= parseFloat(this.previousOperand);
    const _currentOperand = parseFloat(this.currentOperand);

    if (isNaN(_previousOperand) || isNaN(_currentOperand)) return;

    switch (this.operation) {
      case "+":
        result = _previousOperand + _currentOperand;
        break;
      case "-":
        result = _previousOperand - _currentOperand;
        break;
        case "÷":
        result = _previousOperand / _currentOperand;
        break;
      case "*":
        result = _previousOperand * _currentOperand;
        break;
    
      default:
        return;
    }
    this.currentOperand = result;
    this.operation = undefined
    this.previousOperand =''
  }

  chooseOperation(operation) {
    if( this.currentOperand ==="") return;
    if (this.previousOperand !== "") {
      this.calculate();
    }

    this.operation = operation;

    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }
  appendNumber(number) {
    if (this.currentOperand.includes(".") && number === ".") return;

    this.currentOperand = `${this.currentOperand} ${number.toString()}`;
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  updateDisplay() {
    this.previousOpTextElement.innerText = `${this.previousOperand} ${
      this.operation || ""
    }`;
    this.currentOpTextElement.innerText = this.currentOperand;
  }
}
const calculator = new Calculator(previousOpTextElement, currentOpTextElement);

for (const numberButton of numberButtons) {
  numberButton.addEventListener("click", () => {
    calculator.appendNumber(numberButton.innerText);
    calculator.updateDisplay();
  });
}

for (const operationButton of operationButtons) {
  operationButton.addEventListener("click", () => {
    calculator.chooseOperation(operationButton.innerText);
    calculator.updateDisplay();
  });
}
AllClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

equalsButton.addEventListener('click', ()=>{
  calculator.calculate()
  calculator.updateDisplay()
})
