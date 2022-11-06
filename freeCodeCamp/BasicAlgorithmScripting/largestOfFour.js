// Return Largest Numbers in Arrays
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays

function largestOfFour(arr) {
  let largest = [];
  for (let i = 0; i < arr.length; i++) {
    largest.push(Math.max(...arr[i]));
  }
  return largest;
}
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
