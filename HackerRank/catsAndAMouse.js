// Cats and a Mouse
// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
  let catA = Math.abs(x - z);
  let catB = Math.abs(y - z);

  if (catA < catB) return "Cat A";
  if (catB < catA) return "Cat B";
  else return "Mouse C";
}
catAndMouse(1, 2, 3); // expects "Cat B"
catAndMouse(1, 3, 2); // expects "Mouse C"
