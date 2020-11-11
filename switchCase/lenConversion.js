const prompt = require('prompt-sync')();

console.log("1. Feet to inch \n" +"2. Feet to meter \n" + "3. Inch to feet \n" +"4. Meter to feet");
var choice = parseInt(prompt("Enter your choice: "));
var len;
switch(choice) {
    case 1:
        var len = prompt("Enter length in feet: ");
        console.log("Length in inches: " + len * 12);
        break;
    case 2:
        var len = prompt("Enter length in feet: ");
        console.log("Length in meter: " + len * 12 * 2.54 / 100);
        break;
    case 3:
        var len = prompt("Enter length in inch: ");
        console.log("Length in feet: " + len / 12);
        break;
    case 4:
        var len = prompt("Enter length in meter: ");
        console.log("Length in feet: " + (len * 100) / (2.54 * 12));
        break;
    default:
        console.log("Incorrect choice");
}