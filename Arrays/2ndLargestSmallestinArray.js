var arr = [];
var i;
var max;
var min;
for(i = 0; i<10; i++) 
{
    arr.push(Math.floor(Math.random()*(1000)));
}
console.log("Array is: "+arr);

function findmaxMin(){ 
    max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    min = Math.min.apply(null, arr);
    arr.splice(arr.indexOf(min), 1); 
    console.log("2nd Maximum of Array: "+Math.max.apply(null, arr)+", 2nd Minimum of Array: "+Math.min.apply(null, arr));
};
findmaxMin();
arr.push(max);
arr.push(min);
