// 12. Is Infinite Possible

// Given integers a and b, determine whether the following pseudocode results in an infinite loop

// while a is not equal to b do
//   increase a by 1
//   decrease b by 1

// Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

// Example
// For a = 2 and b = 6, the output should be
// solution(a, b) = false;
// For a = 2 and b = 3, the output should be
// solution(a, b) = true.

function solution(a, b) {
  return a % 2 !== b % 2 || a > b;
}
solution(2, 6); // expects false
solution(2, 3); // expects true
solution(2, 10); // expects false
solution(0, 1); // expects true
solution(3, 1); // expects true
solution(10, 10); // expects false
solution(5, 10); // expects true
solution(6, 10); // expects false
solution(10, 0); // expects true
solution(5, 5); // expects false
