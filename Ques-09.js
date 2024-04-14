//Write a JavaScript program to solve quadratic equation.

// The standard form of a quadratic equation is:
// where
// a, b and c are real numbers and
// The solutions of this quadratic equation is given by:
// 𝑎𝑥 + 𝑏𝑥 + 𝑐 = 0
// 2
// 𝑎 ≠ 0
// (−𝑏 ± (𝑏 − 4𝑎𝑐 )/(2𝑎)

// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = 1;
let b = -6;
let c = 9;

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
  root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  // result
  console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
  root1 = root2 = -b / (2 * a);

  // result
  console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
  let realPart = (-b / (2 * a)).toFixed(2);
  let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

  // result
  console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
