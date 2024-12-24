const displayTest = document.getElementById("displayTest");
const p = document.querySelector("p");
const h3 = document.createElement("h3");
const btn = document.querySelectorAll(".btn");


//btn.forEach((button) => button.addEventListener("click", changedisplay(button)));

// btn.forEach((button) => button.addEventListener("click", (button) => {

//     h3.textContent = `${button.id}`;
//     p.textContent = "fuck you";


//     display.append(h3);

// }));

btn.forEach((button) => button.addEventListener("click", () => changedisplay(button)));

function changedisplay(button) {

    h3.textContent = `${button.id}`;
    p.textContent = "BABY STEPS";


    display.append(h3);
}




h3.textContent = "delete me";
display.append(h3);
p.style["color"] = "#cfbd19";

