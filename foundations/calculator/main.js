let firstOperand = '';
let secondOperand = '';
let onFirstOperand = true;
let operator = '';

const screenData = document.getElementById('screen-data');
const prevScreenData = document.getElementById('prev-screen-data');
const numberButtons = document.querySelectorAll('.numbers');
const operationButtons = document.querySelectorAll('.operations'); 
const equalsButton = document.querySelector('.equals');
const decimalButton = document.querySelector('.decimal');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');

function appendNumber(number, onFirstOperand) {
    if (onFirstOperand) {
        firstOperand += number;
    } else {
        secondOperand += number;
    };
};

function allClear() {
    onFirstOperand = true;
    firstOperand = '';
    secondOperand = '';
    operator = '';
    screenData.textContent = 0;
    prevScreenData.textContent = '';
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
    if (secondOperand === '0') {
        screenData.textContent = 'Cannot divide by zero';
        return;
    };
    return a / b;
};

function evaluate() {
    let total = calculate(operator, firstOperand, secondOperand);
    firstOperand = total;
    secondOperand = '';
    operator = '';
    screenData.textContent = '';
    screenData.textContent += total;
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

        if (operator === '1') {
            return;
        }

        if (operator.length >= 1) {
            return;
        };

        if (onFirstOperand) {
            onFirstOperand = false;
        };

        operator = button.textContent;
        if (button.textContent == '÷') {
            operator = '/';
        };

        screenData.textContent += button.textContent;
        prevScreenData.textContent = screenData.textContent;
        screenData.textContent = '';
    });
});

equalsButton.addEventListener('click', () => {
    if (operator.length >= 1 && secondOperand.length >= 1) {
        evaluate();
    };
});

decimalButton.addEventListener('click', () => {
    if (onFirstOperand && firstOperand.includes('.')) {
        return;
    };
    if (onFirstOperand == false && secondOperand.includes('.')) {
        return;
    };
    appendNumber(decimalButton.textContent, onFirstOperand);
    screenData.textContent += decimalButton.textContent;
});


clearButton.addEventListener('click', () => {
    allClear();
});

deleteButton.addEventListener('click', () => {
    if (onFirstOperand) {
        let newFirstOperand = firstOperand.split('');
        newFirstOperand.pop();
        firstOperand = newFirstOperand.join('');
        screenData.textContent = firstOperand;
    };

    if (onFirstOperand == false && secondOperand > 0) {
        let newFirstOperand = secondOperand.split('');
        newFirstOperand.pop();
        secondOperand = newFirstOperand.join('');
        let newScreenData = screenData.textContent.split('');
        newScreenData.pop();
        screenData.textContent = newScreenData.join('');
    };
});
