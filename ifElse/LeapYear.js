var prompt = require('prompt-sync')();

var year = prompt('Enter Year: ');
if (year % 400 == 0 ) {
    console.log(year+" is a leap year");
}
else if (year % 4 == 0) {
    if(year % 100 == 0) {
        console.log(year+"Not a leap year");
    }
    else {
        console.log(year+"Not a leap year");
    }
}
else {
    console.log(year+"Not a leap year");
}
