const prompt = require('prompt-sync')();
var number1 = prompt("Enter number1: ");
var number2 = prompt("Enter number2: ");
var number3 = prompt("Enter number3: ");

var op1 = number1 + number2 * number3;
var op2 = number1 % number2 + number3;
var op3 = number3 + number1 / number2;
var op4 = number1 * number2 + number3;
let arr=[];
arr.push(op1);
arr.push(op2);
arr.push(op3);
arr.push(op4);
arr.sort();
console.log("Maximum is: "+arr[3]);
console.log("Minimum is: "+arr[0]);


