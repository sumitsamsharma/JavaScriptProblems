const prompt=require('prompt-sync')();
let month =prompt('Enter month: ');
let day =prompt('Enter day: ');
if (month=='March' && day>20){
    console.log("True");
}
else if (month=='April' || month=='May'){
    console.log("True");
}
else if (month=='June' && day<20){
    console.log("True");
}
else{
    console.log("False"); 
}




