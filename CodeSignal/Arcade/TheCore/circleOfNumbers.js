// 6. Circle of Numbers

// Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

// Example
// For n = 10 and firstNumber = 2, the output should be
// solution(n, firstNumber) = 7.

// Input/Output
// [execution time limit] 4 seconds (js)
// [input] integer n
// A positive even integer.

// Guaranteed constraints:
// 4 ≤ n ≤ 20.
// [input] integer firstNumber

// Guaranteed constraints:
// 0 ≤ firstNumber ≤ n - 1.
// [output] integer

function solution(n, firstNumber) {
  let mid = n / 2;
  let distance = (mid + firstNumber) % n;
  return distance;
}
solution(10, 2); // expects 7
solution(10, 7); // expects 2
solution(4, 1); // expects 3
solution(6, 3); // expects 0
solution(18, 6); // expects 15
solution(12, 10); // expects 4
solution(12, 10); // expects 4
solution(18, 5); // expects 14
solution(18, 5); // expects 14
