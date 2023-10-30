// Get references to the button and number elements using querySelector
const button1 = document.querySelector('#button1');
const numberElement = document.querySelector('#number');
let counter = 0;

function incr() {
    counter++;
    numberElement.textContent = counter;
}

incrementButton.addEventListener('click', incrementNumber);
