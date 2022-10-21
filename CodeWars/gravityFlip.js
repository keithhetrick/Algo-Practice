// Gravity Flip - 7 kyu
// https://www.codewars.com/kata/5f70c883e10f9e0001c89673

function flip(d, a) {
  if (d === "R") return a.sort((a, b) => a - b);
  if (d === "L") return a.sort((a, b) => b - a);
}
flip("R", [3, 2, 1, 2]); // expects [1, 2, 2, 3]
flip("L", [1, 4, 5, 3, 5]); // expects [5, 5, 4, 3, 1]
