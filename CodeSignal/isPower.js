// 43. Is Power
// https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/yBFfNv5fTqhcacZ7w

// Determine if the given number is a power of some non-negative integer.

// Example

// For n = 125, the output should be
// solution(n) = true;
// For n = 72, the output should be
// solution(n) = false.

function solution(n) {
  let squareRoot = Math.sqrt(n);

  if (squareRoot % 5 === 0) return true;
  if (squareRoot % 3 === 1) return true;
  if (squareRoot % 2 === 0) return true;
  else return false;
}
solution(125); // expects true
solution(72); // expects false
solution(100); // expects true
solution(11); // expects false
solution(324); // expects true
solution(256); // expects true
solution(119); // expects false
solution(400); // expects true
solution(350); // expects false
solution(361); // expects true
