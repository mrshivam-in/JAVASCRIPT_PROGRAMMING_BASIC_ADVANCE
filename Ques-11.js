//Write a JavaScript Program to Check if a Number is Positive, Negative or Zero.

function checkValue(num) {
  if (num > 0) {
    return console.log(" Positive Number");
  } else if (num == 0) {
    return console.log("Zero");
  } else {
    return console.log("Negative Number");
  }
}

checkValue(0);
