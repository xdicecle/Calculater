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
    if(b != 0) return a / b;
    else return "Can't do that boss"
}

//Number and Operater variables
let num1 = null;
let sign = null;
let num2 = null;
let ans = 0;
let op = false;
let check = false;
let numberKeyPressed = false;
let firstKeyPressed = true;
let equalKeyPressed =false;

//operater function

function operater(sign){
    num1 = +num1;
    num2 = +num2;
    if(sign == "+") ans = add(num1,num2);
    else if(sign == "-") ans = subtract(num1, num2);
    else if(sign == '*') ans = multiply(num1, num2);
    else if(sign == '/') ans = divide(num1, num2);

    console.table(ans,sign,num1,num2)
    if(typeof ans == "number") ans = Math.round(ans);
    return ans;    
}


// populate the display with the button that was pressed
const keypad = document.querySelector("#buttons-container");
let display = document.querySelector("#nums")

 keypad.addEventListener("click", function(e) {


    if(e.target.tagName !== "BUTTON") return;
    else{
        let btn = e.target.id;
        if(firstKeyPressed && display.textContent == "0"){
            firstKeyPressed = false;
            display.textContent = "";
        } 
        if(equalKeyPressed){
            display.textContent = "";
            num1 = 0;
            ans = 0;
            string = 0;
            sign = 0;
            op = 0
            equalKeyPressed = false;
        }

        if(btn == "clear") {
            display.textContent = "";
            num1 = 0;
            ans = 0;
            string = 0;
            sign = 0;
            op = 0
            display.textContent = "0";
            firstKeyPressed = true;
        }
        else if(check){
            check = false;
            numberKeyPressed = true;
            display.textContent = "";
             if(display.textContent !=" +" && display.textContent !=" -" && display.textContent !=" *" 
            && display.textContent !=" /" ) display.textContent += `${btn}`;
        }
        else if(op && (btn == "+" || btn == "*" || btn == "-" || btn == "/")){

            if(display.textContent !=" +" && display.textContent !=" -" && display.textContent !=" *" 
            && display.textContent !=" /" ) num2 = display.textContent;

            display.textContent = operater(sign);
            num1 = display.textContent;
            sign = btn;
            check = true;
            numberKeyPressed = false;
            num2 = 0;
            console.log('got there', op);
        }
        else if(btn == "+" || btn == "*" || btn == "-" || btn == "/"){
            sign = btn;
            if(display.textContent !=" +" && display.textContent !=" -" && display.textContent !=" *" 
            && display.textContent !=" /" ) num1 = display.textContent;
            display.textContent = "";
            numberKeyPressed = false;
            op = true;
            console.log('not there', op);
        }
        else if(btn == '=' && op && numberKeyPressed){
            numberKeyPressed = false;
            equalKeyPressed = true;
            num2 = display.textContent;
            display.textContent =  operater(sign);
        }
        else if(btn != '='){
            numberKeyPressed = true;
             if(display.textContent !=" +" && display.textContent !=" -" && display.textContent !=" *" 
            && display.textContent !=" /" )display.textContent += `${btn}`;
        }

        
    }
})



