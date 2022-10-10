// 1. Add Two Digits

// Codewriting  300

// You are given a two-digit integer n. Return the sum of its digits.

// Example
// For n = 29, the output should be
// solution(n) = 11.

// Input/Output
// [execution time limit] 4 seconds (js)

// [input] integer n

// A positive two-digit integer.

// Guaranteed constraints:
// 10 ≤ n ≤ 99.

// [output] integer

// The sum of the first and second digits of the input number.

function solution(n) {
  let sum = 0;

  let newArr = String(n)
    .split("")
    .map((n) => Number(n));
  for (i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  console.log(sum);
  return sum;
}
solution(29);
