let operand1 = '';
let operand2 = '';
let operator = '';
let result = '';
let screen = '';
let current = '';
let resultScreen = document.querySelector('#res');
let convertNumber = (number, radix, base) => parseInt(number, radix).toString(base);

let button0 = document.querySelector('#btn0');
button0.addEventListener('click', () =>{
    screen += '0';
    current += '0';
    resultScreen.innerHTML = screen;
});

let button1 = document.querySelector('#btn1');
button1.addEventListener('click', () => {
    screen += '1';
    current += '1';
    resultScreen.innerHTML = screen;
});

let buttonClear = document.querySelector('#btnClr');
buttonClear.addEventListener('click', () => {
    current = '';
    result = '';
    screen = '';
    resultScreen.innerHTML = screen;
});

let buttonSum = document.querySelector('#btnSum');
buttonSum.addEventListener('click', () => {
    operator = '+';
    screen += '+';
    operand1 = current;
    current = '';
    resultScreen.innerHTML = screen;
});

let buttonSub = document.querySelector('#btnSub');
buttonSub.addEventListener('click', () => {
    operator = '-';
    screen += '-';
    operand1 = current;
    current = '';
    resultScreen.innerHTML = screen;
});

let buttonMul = document.querySelector('#btnMul');
buttonMul.addEventListener('click', () => {
    operator = '*';
    screen += '*';
    operand1 = current;
    current = '';
    resultScreen.innerHTML = screen;
});

let buttonDiv = document.querySelector('#btnDiv');
buttonDiv.addEventListener('click', () => {
    operator = '/';
    screen += '/';
    operand1 = current;
    current = '';
    resultScreen.innerHTML = screen;
});

let buttonEqual = document.querySelector('#btnEql');
buttonEqual.addEventListener('click', () => {
    if(operand1.length === 0) return alert('Empty Value');
    operand2 = current;
    let decimal1 = parseInt(convertNumber(operand1, 2, 10));
    let decimal2 = parseInt(convertNumber(operand2, 2, 10));
    if (operator === '+') result = convertNumber((decimal1 + decimal2), 10, 2);
    if (operator === '-') result = convertNumber((decimal1 - decimal2), 10, 2);
    if (operator === '*') result = convertNumber((decimal1 * decimal2), 10, 2);
    if (operator === '/') result = convertNumber((decimal1 / decimal2), 10, 2);
    resultScreen.innerHTML = result;
    screen = result;
    current = result;
    operand1 = '';
    operand2 = '';
});
