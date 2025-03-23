const display = document.getElementById("display");
const p = document.querySelector("p");
const h3 = document.createElement("h3");
const btn = document.querySelectorAll(".btn");

let currentInput = "";
let previousInput = "";
let operator

//btn.forEach((button) => button.addEventListener("click", changedisplay(button)));

// btn.forEach((button) => button.addEventListener("click", (button) => {

//     h3.textContent = `${button.id}`;
//     p.textContent = "fuck you";


//     display.append(h3);

// }));

function updateDisplay(value) {

    //h3.textContent = button.innerText;
    p.textContent = "BABY STEPS";
    display.innerText = value;

    // display.append(h3);
}




btn.forEach((button) => button.addEventListener("click", () => {

    const value = button.innerText;
    // updateDisplay(value);
    if (!isNaN(value)) {
        currentInput += value;
        updateDisplay(currentInput);
    } else if (value === 'C') {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay('0');
    } else if (value === '=') {
        const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
        updateDisplay(result);
        currentInput = result.toString();
        previousInput = '';
        operator = '';
    } else if (value === 'Undo') {
        currentInput = '';
        updateDisplay('');
    } else if (value === '.') {
        currentInput += value;
        updateDisplay(currentInput);
    }

    else {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
    }

}));


function calculate(num1, num2, operator) {

    switch (operator) {
        case "*":
            return num1 * num2;

        case "/":
            return num1 / num2;

        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;
    }

}


//btn.forEach((button) => button.addEventListener("click", () => updateDisplay(button)));

// function updateDisplay(button) {

//     //h3.textContent = button.innerText;
//     p.textContent = "BABY STEPS";
//     display.innerText = button.innerText;

//     // display.append(h3);
// }


//display.innerText = "delete me";


//h3.textContent = "delete me";
display.append(h3);
p.style["color"] = "#cfbd19";
//display.style["background-color"] = "#000";

document.addEventListener('keypress', (event) => {


    if (!isNaN(event.key)) {
        currentInput += event.key;
        updateDisplay(currentInput);
    } else if (event.key === 'c') {
        currentInput = '';
        previousInput = '';
        operator = '';
        updateDisplay('0');
    } else if (event.key === '=') {
        const result = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
        updateDisplay(result);
        currentInput = result.toString();
        previousInput = '';
        operator = '';
    } else if (event.key === 'Backspace') {
        currentInput = '';
        updateDisplay('');
    } else if (event.key === '.') {
        currentInput += event.key;
        updateDisplay(currentInput);
    }

    else {
        operator = event.key;
        previousInput = currentInput;
        currentInput = '';
    }



});

document.addEventListener('keypress', (event) => { console.log(event) });