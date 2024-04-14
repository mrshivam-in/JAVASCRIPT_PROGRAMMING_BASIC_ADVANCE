//Write a JavaScript program to convert kilometers to miles.

var kiloMeters = 100;

conversionFactor = 0.621371;
miles = kiloMeters * conversionFactor;

console.log(Math.floor(miles));

//Funcion Based
function covertIntoMiles(kiloMeters) {
  conversionFactor = 0.621371;
  miles = kiloMeters * conversionFactor;
  return console.log(miles);
}

covertIntoMiles(10);
