function celsiusToFahr(celsius) 
{
  var Fahr = celsius * 9 / 5 + 32;
  console.log("Celsius "+celsius+" is equal to: "+ Fahr +" Fahrenheit.");
}

function fahrToCelsius(fahrenheit) 
{
  var f= fahrenheit;
  var Cel = (f - 32) * 5 / 9;
  console.log("Fahrenhiet "+f+"is equal to: "+ Cel +" Celsius.");
} 
celsiusToFahr(60);
fahrToCelsius(45);
