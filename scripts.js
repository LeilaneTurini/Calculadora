const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operador]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const AllClearButton = document.querySelector("[data-all-clear]");
const previousOpTextElement = document.querySelector("[data-previous]");
const currentOpTextElement = document.querySelector("[data-current]");

class Calculator {
  constructor(previousOpTextElement, currentOpTextElement) {
    this.previousOpTextElement = previousOpTextElement;
    this.currentOpTextElement = currentOpTextElement;
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }
  updateDisplay() {
    this.previousOpTextElement.innerText = this.previousOperand;
    this.currentOpTextElement.innerText = this.currentOperand;
  }
}
const calculator = new Calculator(previousOpTextElement, currentOpTextElement);

AllClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
