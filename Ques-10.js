//Write a JavaScript program to swap two variables without temp variable.

a = 1;
b = 2;

// Swapping without a temporary variable
b = [a, (a = b)][0];

console.log("After Swapping");
console.log("a=", a);
console.log("a=", b);
