// dom attributes - this gets the value of the html
let button = document.querySelector('#c-incr');
let display = document.querySelector('#c-display');

// this is the counter variable
var counter = 0;

button.addEventListener('click', () => {
    counter++;
    display.innerHTML = counter;
});