let firstOperand = '';
let secondOperand = '';
let onFirstOperand = true;
let operator = '';

const screenData = document.getElementById('screen-data');
const prevScreenData = document.getElementById('prev-screen-data');
const numberButtons = document.querySelectorAll('.numbers');
const operationButtons = document.querySelectorAll('.operations'); 
const equalsButton = document.querySelector('.equals');
const decimalButton = document.querySelector('.decimal')

function appendNumber(number, onFirstOperand) {
    if (onFirstOperand) {
        firstOperand += number;
    } else {
        secondOperand += number
    }
};

function add(a, b){
    return a + b;
};

function subtract(a, b){
    return a - b;
};

function multiply(a, b){
    return a * b;
};

function divide(a, b){
    return a / b;
};

function calculate(operator, a, b){
    a = Number(a);
    b = Number(b);
    switch (operator){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    };
};

numberButtons.forEach(button => {
    button.addEventListener('click', () => {

        if (screenData.innerText === '0') {
            screenData.textContent = '';
        };

        appendNumber(button.textContent, onFirstOperand);
        screenData.textContent += button.textContent;
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {

        if (operator.length >= 1) {
            let total = calculate(operator, firstOperand, secondOperand);
            firstOperand = total;
            secondOperand = '';
            operator = '';
            prevScreenData.textContent = screenData.textContent;
            screenData.textContent = '';
            screenData.textContent += total;
        };

        if (onFirstOperand) {
            onFirstOperand = false;
        };

        operator = button.textContent;
        if (button.textContent == '÷') {
            operator = '/';
        };
        screenData.textContent += button.textContent;
    });
});

equalsButton.addEventListener('click', () => {
    let total = calculate(operator, firstOperand, secondOperand);
    firstOperand = total;
    secondOperand = '';
    operator = '';
    prevScreenData.textContent = screenData.textContent;
    screenData.textContent = '';
    screenData.textContent += total;
});

// Why does multiplication and divison not work? //
// multiplication is setting total to 0 somehow //

