var array = [];
var i;
for(i = 0; i<5; i++) 
{
    array.push(Math.floor(Math.random()*(1000)));
}
let min = Math.min(...array);
let max = Math.max(...array);
console.log(...array);
console.log("Maximum of Array: "+max+" | Minimum of Array: "+min);