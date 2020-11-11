const prompt = require('prompt-sync')();
var n = parseInt(prompt("Enter value of n in Harmonic Series: "));
let sum=1/2;
sum+=1;
for(var i = 3; i <= n; i++){
    sum+=1/n;
}
console.log("Harmonic Sum of number "+n+" is: "+sum);