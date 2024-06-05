let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation !== null) {
        calculateResult();
    }
    firstOperand = parseFloat(displayValue);
    currentOperation = operation;
    displayValue = '';
}

function calculateResult() {
    if (currentOperation === null || displayValue === '') return;
    secondOperand = parseFloat(displayValue);
    switch (currentOperation) {
        case '+':
            displayValue = firstOperand + secondOperand;
            break;
        case '-':
            displayValue = firstOperand - secondOperand;
            break;
        case '*':
            displayValue = firstOperand * secondOperand;
            break;
        case '/':
            if (secondOperand === 0) {
                displayValue = 'Error';
            } else {
                displayValue = firstOperand / secondOperand;
            }
            break;
    }
    currentOperation = null;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
