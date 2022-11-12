// Pythagorean Theorem

// The Pythagorean Theorem is a mathematical equation that relates the lengths of the sides of a right triangle. It states that the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides. The theorem can be written as an equation relating the lengths of the sides a, b and c, often called the "Pythagorean equation":

// a2 + b2 = c2

// Write a function that accepts three side lengths of a triangle and returns the area of the triangle. The area of a triangle is the square root of s(s - a)(s - b)(s - c) where s = (a + b + c) / 2.

// Examples

// triangleArea(3, 4, 5) ➞ 6

// triangleArea(5, 12, 13) ➞ 30

// triangleArea(1, 1, 1) ➞ 0.4330127018922193

// Notes

// The area of a triangle with side lengths a, b, and c is 0 if any of the sides are non-positive or if they cannot form a triangle (for example, if a + b < c).

// All side lengths will be integers.

// All answers should be rounded to the nearest hundredth.

// Bonus: Round answers to the nearest thousandth.

// Bonus: Return "not a triangle" if the given side lengths cannot form a triangle.

// Bonus: Accept side lengths as an array of integers and return the area of the triangle. (Hint: The spread operator may be useful.)

function distance(x1, y1, x2, y2) {
  let result = Math.hypot(x1 - x2, y1 - y2);
  console.log("Result: ", result);
  return result;
}
distance(1, 1, 2, 3);
distance(1, 1, 3, 1);
distance(4, 1, 1, 1);
distance(2, 2, 2, 2);

function distance(p1, p2) {
  let sideA = p1.x - p2.x;
  let sideB = p1.y - p2.y;
  let sideC = Math.hypot(sideA, sideB);
  console.log("C is: ", sideC);
  return sideC;
}
distance({ x: 1, y: 1 }, { x: 2, y: 3 });
distance({ x: -2, y: 2 }, { x: 2, y: -2 });
distance({ x: 2, y: 2 }, { x: 3, y: 3 });
distance({ x: 4, y: 1 }, { x: 1, y: 1 });

function triangleArea(a, b, c) {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log("Area: ", area);
  return area;
}
triangleArea(3, 4, 5); // expects 6
triangleArea(5, 12, 13); // expects 30
triangleArea(1, 1, 1); // expects 0.4330127018922193
triangleArea(1, 1, 3); // expects 0

//QuadSolver, a b c as in classic ax^2 + bx + c format
function quadsolve(x, a, b, c) {
  let sol = a * (x * x) + b * x + c;
  console.log("Solution: ", sol);
  return sol;
}
quadsolve(1, 1, 1, 0); // expects 2
