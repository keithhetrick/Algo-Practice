// 11. Extra Number

// You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

// Example
// For a = 2, b = 7, and c = 2, the output should be
// solution(a, b, c) = 7.

// The two equal numbers are a and c. The third number (b) equals 7, which is the answer.

function solution(a, b, c) {
  if (a === b) return c;
  if (b === c) return a;
  if (c === a) return b;
}
solution(2, 7, 2); // expects 7
solution(3, 2, 2); // expects 3
solution(5, 5, 1); // expects 1
solution(500000000, 3, 500000000); // expects 3
solution(1, 5, 1); // expects 5
solution(5, 5, 3); // expects 3
solution(5, 1, 1); // expects 5
solution(4000000, 3000000, 4000000); // expects 3000000
solution(548442737, 82231042, 548442737); // expects 82231042
solution(469992838, 66019520, 66019520); // expects 469992838
