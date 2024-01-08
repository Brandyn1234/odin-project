let firstOperand = '';
let secondOperand = '';
let onFirstOperand = true;
let operator = '';
let ans = '';
let onEquals = false;

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

function allClear(){
    onFirstOperand = true;
    firstOperand = '';
    secondOperand = '';
    operator = '';
    screenData.textContent = 0;
    prevScreenData.textContent = '';
    ans = '';
};

function clearScreen(){
    screenData.textContent = 0;
    prevScreenData.textContent = '';
    ans = '';
    onFirstOperand = true;
    onEquals = false;
    firstOperand = '';
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
    if (operator == '÷') {
        operator = '/';
    };

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
        
        if (screenData.textContent === 'Cannot divide by zero'){
            allClear();
        };

        if (ans && onEquals && !(operator)){
            clearScreen();
        };


        if (screenData.innerText === '0') {
            screenData.textContent = '';
        };

        appendNumber(button.textContent, onFirstOperand);
        screenData.textContent += button.textContent;
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (secondOperand === '0' && operator === '÷') {
            allClear();
            screenData.textContent = 'Cannot divide by zero';
            return;
        };

        if (operator.length >= 1 && secondOperand.length >= 1) {
            ans = calculate(operator, firstOperand, secondOperand);
            firstOperand = ans;
            secondOperand = '';
            operator = '';
            screenData.textContent = '';
            screenData.textContent += ans;
        };

        if (onFirstOperand) {
            onFirstOperand = false;
        };

        if (operator.length >= 1){
            operator = '';
            operator += button.textContent;
            ans = prevScreenData.textContent.split('');;
            ans.pop();
            ans = ans.join('');
            prevScreenData.textContent = '';
            prevScreenData.textContent += ans;
            prevScreenData.textContent += operator;
        }else{
            operator = '';
            operator += button.textContent;
            prevScreenData.textContent = '';
            prevScreenData.textContent += screenData.textContent;
            prevScreenData.textContent += operator;
            screenData.textContent = '';  
        }; 
    });
});

equalsButton.addEventListener('click', () => {
    if (!operator || !secondOperand){
        return;
    };

    if (secondOperand === '0' && operator === '÷') {
        allClear();
        screenData.textContent = 'Cannot divide by zero';
        return;
    };

    prevScreenData.textContent += secondOperand;
    prevScreenData.textContent += ' = ';
    ans = calculate(operator, firstOperand, secondOperand);
    screenData.textContent = '' + ans;
    firstOperand = ans;
    operator = '';
    secondOperand = '';
    onEquals = true;
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

    if (onFirstOperand == false && secondOperand >= 1) {
        let newFirstOperand = secondOperand.split('');
        newFirstOperand.pop();
        secondOperand = newFirstOperand.join('');
        let newScreenData = screenData.textContent.split('');
        newScreenData.pop();
        screenData.textContent = newScreenData.join('');
    };
});