const prompt = require("prompt-sync")();

var number = prompt("Enter a number greater than 1: ");

for(var i = 2 ; i <= Math.floor(Math.sqrt(number)); i++) {
    if( number % i == 0) {
        console.log("Number is not a prime number");
        process.exit(0);
    }
}

console.log("Number is a prime number");