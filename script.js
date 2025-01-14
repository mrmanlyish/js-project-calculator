const firstInputField = document.querySelector("#firstInputBox");
const functionField = document.querySelector("#functionBox");
const secondInputField = document.querySelector("#secondInputBox")
const answerField = document.querySelector("#answerBox")
const ac = document.querySelector("#ac");
const decimal = document.querySelector("#decimal");
const backspace = document.querySelector("#backspace");
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");
const equal = document.querySelector("#equal");
const exponent = document.querySelector("#exponent");
const root = document.querySelector("#root");
const remainder = document.querySelector("#remainder");
// const numbers = document.querySelectorAll(".numbers")
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");

let firstInputArray = [];
let mathSign = "";
let secondInputArray = [];

// input numbers
one.addEventListener("click", () => {
    // pushes a number into firstInputField if mathSign is empty
    if (mathSign === "") {
        firstInputArray.push(1);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
        secondInputField.innerHTML = "";
        functionBox.innerHTML ="";
    }
    // pushes number into secondInputField if mathSign isn't empty
    else if (mathSign !== "") {
        secondInputArray.push(1);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
two.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(2);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
        secondInputField.innerHTML = "";
        functionBox.innerHTML ="";
    }
    else if (mathSign !== "") {
        secondInputArray.push(2);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
three.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(3);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
        secondInputField.innerHTML = "";
        functionBox.innerHTML ="";
    }
    else if (mathSign !== "") {
        secondInputArray.push(3);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
four.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(4);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
        secondInputField.innerHTML = "";
        functionBox.innerHTML ="";
    }
    else if (mathSign !== "") {
        secondInputArray.push(4);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
five.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(5);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
        secondInputField.innerHTML = "";
        functionBox.innerHTML ="";
    }
    else if (mathSign !== "") {
        secondInputArray.push(5);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
six.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(6);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
        secondInputField.innerHTML = "";
        functionBox.innerHTML ="";
    }
    else if (mathSign !== "") {
        secondInputArray.push(6);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
seven.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(7);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
        secondInputField.innerHTML = "";
        functionBox.innerHTML ="";
    }
    else if (mathSign !== "") {
        secondInputArray.push(7);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
eight.addEventListener("click", () => {
    if (mathSign === "") { 
        firstInputArray.push(8);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
        secondInputField.innerHTML = "";
        functionBox.innerHTML ="";
    }
    else if (mathSign !== "") {
        secondInputArray.push(8);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
nine.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(9);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
        secondInputField.innerHTML = "";
        functionBox.innerHTML ="";
    }
    else if (mathSign !== "") {
        secondInputArray.push(9);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});
zero.addEventListener("click", () => {
    if (mathSign === "") {
        firstInputArray.push(0);
        firstInputField.innerHTML = Number(firstInputArray.join(""));
        secondInputField.innerHTML = "";
        functionBox.innerHTML ="";
    }
    else if (mathSign !== "") {
        secondInputArray.push(0);
        secondInputField.innerHTML = Number(secondInputArray.join(""));
    }
});

decimal.addEventListener("click", () => {
    // switch (mathSign, firstInputField.innerHTML, secondInputField.innerHTML, answerField) {
    //     case mathSign === "" && firstInputField.innerHTML == "":
    //         firstInputArray.push(".");
    //         firstInputField.innerHTML = ".";
    //         secondInputField.innerHTML = "";
    //         functionBox.innerHTML = "";
    //     break;
    //     case firstInputField.innerHTML !== "" && mathSign === "" && answerField == "":
    //         firstInputArray.push(".");
    //         firstInputField.innerHTML = Number(firstInputArray.join("")) + ".";
    //         secondInputField.innerHTML = "";
    //         functionBox.innerHTML = "";
    //     break;
    //     case mathSign === "" && firstInputField.innerHTML !== "" && answerField !== "":
    //         firstInputArray.push(".");
    //         firstInputField.innerHTML = ".";
    //         secondInputField.innerHTML = "";
    //         functionBox.innerHTML = "";
    //     break;
    //     case mathSign !== "" && secondInputField.innerHTML == "":
    //         secondInputArray.push(".");
    //         secondInputField.innerHTML = ".";
    //     break;
    //     case mathSign !== "" && secondInputField.innerHTML !== "":
    //         secondInputArray.push(".");
    //         secondInputField.innerHTML = Number(secondInputArray.join("")) + ".";
    //     default:
    // }});

    // when starting new calculation, pushes a decimal point to first input box
    if (mathSign === "" && firstInputField.innerHTML == "" && secondInputField.innerHTML) {
        firstInputArray.push(".");
        firstInputField.innerHTML = ".";
        secondInputField.innerHTML = "";
        functionBox.innerHTML = "";
    }
    // if theres already numbers in the first input box, pushes a decimal point to first input box
    else if (firstInputField.innerHTML !== "" && mathSign === "" && secondInputField.innerHTML == "") {
        firstInputArray.push(".");
        firstInputField.innerHTML = Number(firstInputArray.join("")) + ".";
        secondInputField.innerHTML = "";
        functionBox.innerHTML = "";
    }
    // after finishing a calculation, if theres a number in the answer field, pushes a decimal point to first input box
    else if (mathSign === "" && firstInputField.innerHTML !== "" && answerField.innerHTML !== "") {
        firstInputArray.push(".");
        firstInputField.innerHTML = ".";
        secondInputField.innerHTML = "";
        functionBox.innerHTML = "";
    }
    // pushes decimal point to second input box if no numbers already inside it
    else if (mathSign !== "" && secondInputField.innerHTML == "") {
        secondInputArray.push(".");
        secondInputField.innerHTML = ".";
    }
    // pushes decimal point to second input box if numbers are already inside
    else if (mathSign !== "" && secondInputField.innerHTML !== "") {
        secondInputArray.push(".");
        secondInputField.innerHTML = Number(secondInputArray.join("")) + ".";
    }
});

// math functions
addition.addEventListener("click",() => {
    // adds a + sign if only the firstInputField is occupied
    if (firstInputField.innerHTML !== "" && mathSign == "" && secondInputField.innerHTML == "") {
        mathSign = "+", functionBox.innerHTML = "+";
    }
    // turns the finalResult into the firstInputField
    else if (firstInputField.innerHTML !== "" && mathSign == "" && secondInputField.innerHTML !== "" && answerField.innerHTML !== "") {
        firstInputField.innerHTML = finalResult;
        firstInputArray.push(finalResult);
        mathSign = "+", functionBox.innerHTML = "+";
        secondInputField.innerHTML ="";
        answerField.innerHTML = "";
    }
    else;
});

subtraction.addEventListener("click",() => {
    // pushes a minus sign if theres only a number in the firstInputField
    if (firstInputField.innerHTML !== "" && mathSign =="" && secondInputField.innerHTML == "") {
        mathSign = "-", functionBox.innerHTML = "-";
    }
    //pushes a negative sign into the firstInputField if all fields are empty
    else if (firstInputField.innerHTML == "" && mathSign =="") {
        firstInputArray.push("-");
        firstInputField.innerHTML = "-";
    }
    // allows a negative sign to be pushed into the firstInputField after a calculation has already been done
    // else if (firstInputField.innerHTML !== "" && mathSign =="" && secondInputField.innerHTML !== "" && answerField.innerHTML !== "") {
    //     firstInputArray.push("-");
    //     firstInputField.innerHTML = "-";
    //     secondInputField.innerHTML = "";
    //     functionBox.innerHTML = "";

    // turns the finalResult into the firstInputField and pushes minus sign into mathSign
    else if (firstInputField.innerHTML !== "" && mathSign == "" && secondInputField.innerHTML !== "" && answerField.innerHTML !== "") {
        firstInputField.innerHTML = finalResult;
        firstInputArray.push(finalResult);
        mathSign = "-", functionBox.innerHTML = "-";
        secondInputField.innerHTML ="";
        answerField.innerHTML = "";
    }
    //pushes negative sign into secondInputField if firstInputField and mathSign are occupied
    else if (mathSign !== "") {
        secondInputArray.push("-");
        secondInputField.innerHTML = "-";
    }
    else;
});

multiplication.addEventListener("click",() => {
    // pushes x sign into mathSign if only firstInputField is not empty
    if (firstInputField.innerHTML !== "" && mathSign =="" && secondInputField.innerHTML == "") {
        mathSign = "x", functionBox.innerHTML = "x";
    }
    // turns the finalResult into the firstInputField and pushes x sign into mathSign
    else if (firstInputField.innerHTML !== "" && mathSign == "" && secondInputField.innerHTML !== "" && answerField.innerHTML !== "") {
        firstInputField.innerHTML = finalResult;
        firstInputArray.push(finalResult);
        mathSign = "x", functionBox.innerHTML = "x";
        secondInputField.innerHTML ="";
        answerField.innerHTML = "";
    }
    else;
});

division.addEventListener("click",() => {
    // pushes / sign into mathSign if only firstInputField is not empty
    if (firstInputField.innerHTML !== "" && mathSign =="" && secondInputField.innerHTML == "") {
        mathSign = "/", functionBox.innerHTML = "/";
    }
    // turns the finalResult into the firstInputField and pushes / sign into mathSign
    else if (firstInputField.innerHTML !== "" && mathSign == "" && secondInputField.innerHTML !== "" && answerField.innerHTML !== "") {
        firstInputField.innerHTML = finalResult;
        firstInputArray.push(finalResult);
        mathSign = "/", functionBox.innerHTML = "/";
        secondInputField.innerHTML ="";
        answerField.innerHTML = "";
    }
    else;
});

exponent.addEventListener("click",() => {
    // pushes ^ into mathSign if only firstInputField is not empty
    if (firstInputField.innerHTML !== "" && mathSign =="" && secondInputField.innerHTML == "") {
        mathSign = "^", functionBox.innerHTML = "^";
    }
    // turns the finalResult into the firstInputField and pushes ^ into mathSign
    else if (firstInputField.innerHTML !== "" && mathSign == "" && secondInputField.innerHTML !== "" && answerField.innerHTML !== "") {
        firstInputField.innerHTML = finalResult;
        firstInputArray.push(finalResult);
        mathSign = "^", functionBox.innerHTML = "^";
        secondInputField.innerHTML ="";
        answerField.innerHTML = "";
    }
    else;
});

root.addEventListener("click", () => {
    // pushes √ into mathSign if only the firstInputField is not empty
    if (firstInputField.innerHTML !== "" && mathSign =="" && secondInputField.innerHTML == "") {
        mathSign ="√", functionBox.innerHTML = "√";
    }
    // turns the finalResult into the firstInputField and pushes √ into mathSign
    else if (firstInputField.innerHTML !== "" && mathSign == "" && secondInputField.innerHTML !== "" && answerField.innerHTML !== "") {
        firstInputField.innerHTML = finalResult;
        firstInputArray.push(finalResult);
        mathSign = "√", functionBox.innerHTML = "√";
        secondInputField.innerHTML ="";
        answerField.innerHTML = "";
    }
    else;
});

// remainder.addEventListener("click", () => {
//     if (firstInputField.innerHTML !== "" && mathSign =="") {
//         mathSign ="%", functionBox.innerHTML = "%";
//     }
//     else;
// });

// second input number, how to get the presses after a function button is clicked?

// what happens when you press =
let finalResult = 0;
equal.addEventListener("click",() =>{
    // converts the first and second input arrays into numbers
    let firstInputNumber = Number(firstInputArray.join(""));
    let secondInputNumber = Number(secondInputArray.join(""));
        switch (mathSign) {
            case mathSign = "+":
                finalResult = firstInputNumber + secondInputNumber;
            break;
            case mathSign = "-":
                finalResult = firstInputNumber - secondInputNumber;
            break;
            case mathSign = "x":
                finalResult = firstInputNumber * secondInputNumber;
            break;
            case mathSign = "/":
                finalResult = firstInputNumber/secondInputNumber;
            break;
            case mathSign = "^":
                finalResult = Math.pow(firstInputNumber, secondInputNumber);
            break;
            case mathSign = "√":
                finalResult = Math.pow(firstInputNumber, (1/secondInputNumber));
            break;
            // case mathSign = "%":
            //     finalResult = firstInputNumber%secondInputNumber;
            // break;
            case mathSign = "" && firstInputField.innerHTML !== "":
                finalResult = firstInputNumber;
            break;
            default:
                finalResult = "error";
        }
    answerField.innerHTML = ` = ${finalResult}`;
    // clears the first and second inpux boxes and mathSign
    firstInputArray = [];
    mathSign = "";
    secondInputArray = [];
    return finalResult;
});

// ac button, clears answerField, first and secondInputArray, mathSign, functionBox, and first and secondInputFields
ac.addEventListener("click", () => {
    firstInputArray = [], firstInputField.innerHTML = "";
    mathSign = "", functionBox.innerHTML ="";
    secondInputArray = [], secondInputField.innerHTML = "";
    answerField.innerHTML = "";
});

// backspace button, clears each input field rather than one number at a time
backspace.addEventListener("click", () => {
    if (secondInputField.innerHTML != "") {
        secondInputField.innerHTML = "", secondInputArray = [];
    }
    else if (functionBox.innerHTML != "") {
        functionBox.innerHTML = ""; 
        mathSign = "";
    }
    else if (firstInputField.innerHTML != "") {
        firstInputField.innerHTML = "", firstInputArray = [];
    }
});
// have button clicks go into first input as a array
// turn array into a number
// when a function button is clicked, mathSign = that function symbol
// have button clicks go into second input
// when = is pressed, firstInput symbol secondInput, result is shown
