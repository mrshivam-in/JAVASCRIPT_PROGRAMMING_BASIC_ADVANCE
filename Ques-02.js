//Write a Javascript program to do Arithmetic operations addition and division.

//Addition
function sum(a, b) {
  return console.log(a + b);
}

sum(10, 2);

//Divison

function division(c, d) {
  if (d == 0) {
    return console.log("Division by Zero is not Allowed");
  } else {
    return console.log(c / d);
  }
}

division(15, 3);
