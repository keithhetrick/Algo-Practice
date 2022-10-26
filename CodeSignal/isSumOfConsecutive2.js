// 44. Is Sum of Consecutive 2
// https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/EQSjA5PRfyHueeNkj

function isSumOfConsecutive2(n) {
  // Solution 1
  let count = 0;
  for (let i = 1; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += j;
      if (sum === n) {
        count++;
        break;
      }
      if (sum > n) break;
    }
  }
  return count;

  // Solution 2
  count = 0;
  left = 1;
  right = 2;
  sum = 3;

  while (1) {
    if (left === right) return count;

    if (sum === n) count++;
    if (sum <= n) sum += ++right;
    if (sum > n) sum -= left++;
  }
}
isSumOfConsecutive2(9); // expects 2
isSumOfConsecutive2(8); // expects 0
isSumOfConsecutive2(15); // expects 3
isSumOfConsecutive2(24); // expects 1
isSumOfConsecutive2(13); // expects 1
isSumOfConsecutive2(25); // expects 2
isSumOfConsecutive2(99); // expects 5
