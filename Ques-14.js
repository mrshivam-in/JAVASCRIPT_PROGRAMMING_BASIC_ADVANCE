//Write a JavaScript Program to Check Prime Number.

//define a flag variable
let isPrime = true;

function primeNumber(number) {
  // check if number is equal to 1
  if (number === 1) {
    return console.log("This is not prime number : " + number);
    // check if number is greater than 1
  } else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
  }
  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is a not prime number`);
  }
}

primeNumber(1);
