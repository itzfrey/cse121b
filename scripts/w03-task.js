/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    return document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {

    let subtractNumber1 = parseFloat(document.getElementById("subtract1").value);
    let subtractNumber2 = parseFloat(document.getElementById("subtract2").value);

    return document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);

}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  
    let factor1 = parseFloat(document.getElementById('factor1').value);
    let factor2 = parseFloat(document.getElementById('factor2').value);

    return document.querySelector('#product').value = multiply(factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
  
    let dividend = parseFloat(document.getElementById('dividend').value);
    let divisor = parseFloat(document.getElementById('divisor').value);

    return document.querySelector('#quotient').value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
var currentDate = new Date();

var currentYear;

currentYear = currentDate.getFullYear();

document.getElementById("year").value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.getElementById("array").textContent = numberArray.join(", ");

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numberArray.filter(number => number % 2 == 1);
  
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numberArray.filter(number => number % 2 == 0);


/* Output Sum of Org. Array */
var sum = numberArray.reduce(function(acc, current) {
    return acc + current;
}, 0);
document.getElementById("sumOfArray").textContent = sum;
  
/* Output Multiplied by 2 Array */
var multipliedArray = numberArray.map(function(number) {
    return number * 2;
});
  
document.getElementById("multiplied").textContent = multipliedArray;
  

/* Output Sum of Multiplied by 2 Array */
var sumOfMultiplied = multipliedArray.reduce(function(acc, current) {
    return acc + current;
}, 0);
  
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;
  


