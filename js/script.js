/* Calculater Script */

// 4 basic calculater functions

//Add
function add(a,b){
    return a + b;
}

//Subtract
function subtract(a,b){
    return a-b;
}

//Multiply
function multiply(a,b){
    return a * b;
}

//Divide
function divide(a,b){
    return a / b;
}

//Number and Operater variables

let num1 = null;
let sign = null;
let num2 = null;

//operater function

function operater(str){

    if(str.indexOf("+")){
        let strArray = str.split("+");
        
    }
    if(op == "+")      return sum(a,b);
    else if(op == '-') return subtract(a,b);
    else if(op == '*') return multiply(a,b);
    else if(op == '/') return divide(a,b);
}


// populate the display with the button that was pressed
const keypad = document.querySelector("#buttons-container");
let display = document.querySelector("#nums")

 keypad.addEventListener("click", function(e) {

    if(e.target.tagName !== "BUTTON") return;
    else{
        let btn = e.target;
        let num = btn.id;

        if(num == "clear") {
            display.textContent = "";
            return;
        }
        else if(num == "="){
            operater(1,1,1);
            return;
        }
        else display.textContent += ` ${num}`;
    }
})



