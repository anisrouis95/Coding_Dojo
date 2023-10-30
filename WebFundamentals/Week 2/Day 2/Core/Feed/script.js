const button1 = document.querySelector('#button1');
const numberElement = document.querySelector('#number');
let counter = 0;

function incr() {
    counter++;
    numberElement.textContent = counter;
}

button1.addEventListener('click', button1);

const button2 = document.querySelector('#button2');
const numberElement1 = document.querySelector('#number1');
let counter1 = 0;

function incr1() {
    counter1++;
    numberElement1.textContent = counter1;
}

button2.addEventListener('click', button2);

const button3 = document.querySelector('#button3');
const numberElement2 = document.querySelector('#number2');
let counter2 = 0;

function incr2() {
    counter2++;
    numberElement2.textContent = counter2;
}

button3.addEventListener('click', button3);