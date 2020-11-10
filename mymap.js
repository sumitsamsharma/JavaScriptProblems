let keyString = "Sumit"
let keyObject = {}
let keyFunc = function (){}

let myMap = new Map();
myMap.set(keyString, "value associated with Sumit")
myMap.set(keyObject, "value associated with keyObject")
myMap.set(keyFunc, "value associated with keyFunc")

console.log(myMap.size)
console.log(myMap.get(keyString))
console.log(myMap.has("Abhishek"))

for(let [key,value] of myMap){console.log("Loop1:  " + key + "   Value:  " + value)}
console.log("\n")

for(let [key,value] of myMap.entries()){console.log("Loop2:  " + key + "   Value:  " + value)}
console.log("\n")

for(let key of myMap.keys()){console.log("Loop3:  " + key)}
console.log("\n")

for(let value of myMap.values()){console.log("Loop4:  " + value)}
console.log("\n")

let first = new Map([[1,'one'], [2, 'two'], [3,'three']])
let second = new Map([[1,'un'], [2,'dois']])
let merged = new Map([...first, ...second])

console.log(first)
console.log(second)
console.log(merged)