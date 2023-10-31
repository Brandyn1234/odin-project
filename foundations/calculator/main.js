let firstOperand = '';
let prevFirstOperand = '';
let secondOperand = '';
let prevSecondOperand = '';
let onFirstOperand = true;
let operator = '';

const screenData = document.getElementById('screen-data');
const prevScreenData = document.getElementById('prev-screen-data');
const numberButtons = document.querySelectorAll('.numbers');
const operationButtons = document.querySelectorAll('.operations'); 
const equalsButton = document.querySelector('.equals');

function appendNumber(number, onFirstOperand) {
    if (onFirstOperand) {
        firstOperand += number;
    } else {
        secondOperand += number
    }
};

function clear() {
    // code here //
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
        console.log(firstOperand);
        console.log(secondOperand);
        //console.log(prevFirstOperand);//
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (onFirstOperand) {
            onFirstOperand = false;
            prevFirstOperand = firstOperand;
        };
        operator = button.textContent;
        screenData.textContent += button.textContent;
    });
});

equalsButton.addEventListener('click', () => {
    let total = calculate(operator, firstOperand, secondOperand);
    console.log(total);
    prevScreenData.textContent = screenData.textContent;
    screenData.textContent = '';
    screenData.textContent += total;
});


