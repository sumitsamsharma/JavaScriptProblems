function die() {
    return Math.floor(Math.random() * 100) % 6 + 1; 
}
let countMap = new Map();
let min;
let max;
let maxValue = -1;
let minValue = 11;

while(true) {
    var number = die(); 
    if(!countMap.has(number))
        countMap.set(number, 1);
    else {
        let count = countMap.get(number);
        countMap.set(number, ++count);
    }
    if(countMap.get(number) == 10) 
        break;
}

console.log(countMap);

for( let [key, value] of countMap) {
    if(value < minValue) {
        min = key;
        minValue = value;
    }
    if(value > maxValue) {
        max = key;
        maxValue = value;
    }
}

console.log(min+" was thrown Minimum times " + " count: " + minValue);
console.log(max+ " was thrown Maximum times" + " count: " + maxValue);