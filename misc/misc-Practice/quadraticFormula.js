// Write a function using the quadratic formula

// Quadratic formula: https://en.wikipedia.org/wiki/Quadratic_formula

// x = (-b ± √(b^2 - 4ac)) / 2a

// a, b, and c are coefficients of the quadratic equation

// x is the solution

// ± means plus or minus

// √ means square root

// ^ means to the power of

// Examples

// quadraticFormula(1, 2, 3) ➞ [-1, -3]

// quadraticFormula(2, 7, 3) ➞ [-3.5, -0.5]

// quadraticFormula(1, -12, -28) ➞ [14, -2]

// Notes

// Return an array containing both solutions to the equation.

// If the equation has only one solution, return that solution as both elements of the array.

// If a solution is an irrational number, round it to two decimal places.

// Bonus: Return "no real solutions" if the equation has no real solutions.

// Bonus: Return "infinite solutions" if the equation has infinite solutions.

// Bonus: Return "not a quadratic equation" if a is 0.

function quadraticFormula(a, b, c) {
  let x = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  let y = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
  let result = [x, y];
  console.log("Result: ", result);
  return result;
}
quadraticFormula(1, 2, 3); // expects [-1, -3]
quadraticFormula(2, 7, 3); // expects [-3.5, -0.5]
quadraticFormula(1, -12, -28); // expects [14, -2]
quadraticFormula(1, 0, 0); // expects [0, 0]
quadraticFormula(1, 0, 1); // expects ["no real solutions"]
quadraticFormula(0, 1, 1); // expects ["not a quadratic equation"]
quadraticFormula(0, 0, 0); // expects ["infinite solutions"]

console.log(100 * 365);

// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

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
