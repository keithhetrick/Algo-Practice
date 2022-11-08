// 5. Max Multiple

// Given a divisor and a bound, find the largest integer N such that:

// N is divisible by divisor.
// N is less than or equal to bound.
// N is greater than 0.
// It is guaranteed that such a number exists.

// Example
// For divisor = 3 and bound = 10, the output should be
// solution(divisor, bound) = 9.
// The largest integer divisible by 3 and not larger than 10 is 9.

// Input/Output
// [execution time limit] 4 seconds (js)
// [input] integer divisor

// Guaranteed constraints:
// 2 ≤ divisor ≤ 10.
// [input] integer bound

// Guaranteed constraints:
// 5 ≤ bound ≤ 100.
// [output] integer
// The largest integer not greater than bound that is divisible by divisor.

function solution(divisor, bound) {
  let remainder = Math.floor(bound / divisor);
  let sum = remainder * divisor;
  return sum;
}
solution(3, 10); // expects 9
solution(2, 7); // expects 6
solution(10, 50); // expects 50
solution(7, 100); // expects 98
solution(7, 20); // expects 14
solution(5, 13); // expects 10
solution(8, 88); // expects 88
solution(10, 100); // expects 100
solution(2, 5); // expects 4
solution(3, 5); // expects 3
solution(9, 11); // expects 9
solution(8, 15); // expects 8
solution(9, 60); // expects 54
