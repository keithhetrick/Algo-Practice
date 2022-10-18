// 13. Arithmetic Expression

// Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.

// Example
// For a = 2, b = 3, and c = 5, the output should be
// solution(a, b, c) = true.

// We can replace # with a + to obtain 2 + 3 = 5, so the answer is true.

// For a = 8, b = 2, and c = 4, the output should be
// solution(a, b, c) = true.

// We can replace # with a / to obtain 8 / 2 = 4, so the answer is true.

// For a = 8, b = 3, and c = 2, the output should be
// solution(a, b, c) = false.

// 8 + 3 = 11 ≠ 2;
// 8 - 3 = 5 ≠ 2;
// 8 * 3 = 24 ≠ 2;
// 8 / 3 = 2.(6) ≠ 2.
// So the answer is false.

function solution(a, b, c) {
  if (a - b === c || a + b === c || a * b === c || a / b === c) return true;
  else return false;
}
solution(2, 3, 5); // expects true
solution(8, 2, 4); // expects true
solution(8, 3, 2); // expects false
solution(6, 3, 3); // expects true
solution(18, 2, 9); // expects true
solution(2, 3, 6); // expects true
solution(5, 2, 0); // expects false
solution(10, 2, 2); // expects false
solution(5, 2, 2); // expects false
solution(1, 2, 1); // expects false
solution(1, 2, 2); // expects true
