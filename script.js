const buttons = document.querySelectorAll("button");
const input = document.querySelector("#input")
const button = document.querySelector(".seven");


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "clear") {
            input.value = "";
        } else if (button.id === "backspace") {
            input.value = input.value.slice(0, -1);
            if (input.value === "undefined" || input.value === "Infinity" || input.value === "NaN") {
                input.value = "";
            }
        } else if (button.id === "decimal") {
            if (!input.value.includes(".")) {
                input.value += ".";
            }
        } else if (button.id === "equal") {
            input.value = evaluate();
        } else if (button.id === "add") {
            operator = "+";
            input.value += "+";
        } else if (button.id === "subtract") {
            operator = "-";
            input.value += "-";
        } else if (button.id === "multiply") {
            operator = "*";
            input.value += "*";
        } else if (button.id === "divide") {
            operator = "/";
            input.value += "/";
        } else if (button.id === "switch") {
            if (input.value[0] === "-") {
                input.value = input.value.slice(1);
            } else {
                input.value = "-" + input.value;
            }
        }
        else {
            input.value += button.textContent;
        }
    })
})

document.addEventListener("keypress", (event) => {
    if (event.key === "c") {
        input.value = "";
    } else if (event.key === "Backspace") {
        input.value = input.value.slice(0, -1);
        if (input.value === "undefined" || input.value === "Infinity" || input.value === "NaN") {
            input.value = "";
        }
    } else if (event.key === ".") {
        if (!input.value.includes(".")) {
            input.value += ".";
        }
    } else if (event.key === "=" || event.key === "Enter") {
        input.value = evaluate();
    } else if (event.key === "+") {
        operator = "+";
        input.value += "+";
    } else if (event.key === "-") {
        operator = "-";
        input.value += "-";
    } else if (event.key === "*") {
        operator = "*";
        input.value += "*";
    } else if (event.key === "/") {
        operator = "/";
        input.value += "/";
    } else if (event.key === "switch") {
        if (input.value[0] === "-") {
            input.value = input.value.slice(1);
        } else {
            input.value = "-" + input.value;
        }
    }
    else if (event.key === "1" || event.key === "2" || event.key === "3" || event.key === "4" || event.key === "5" || event.key === "6" || event.key === "7" || event.key === "8" || event.key === "9" || event.key === "0") {
        input.value += event.key;
    }

})
function evaluate() {
    let string = input.value;
    let number = '';
    let operator = '';
    let result = 0;
    for (let character of string) {
        if (!isOperator(character) || character === ".") {
            number += character;
        }
        if (isOperator(character)) {
            if (operator === "") {
                result = parseFloat(number);
            }
            if (operator !== "") {
                result = operation(result, operator, number);
            }
            operator = character;
            number = '';
        }
    }
    result = operation(result, operator, number);
    return result;
}

function operation(result, operator, number) {
    if (operator === "+") { return result + number };
    if (operator === "-") { return result - number };
    if (operator === "*") { return result * number };
    if (operator === "/") { return result / number };
}

function isOperator(variable) {
    if (variable === "+" || variable === "-" || variable === "*" || variable === "/") {
        return true;
    } else { return false }
}
