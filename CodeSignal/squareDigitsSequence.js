// 45. Square Digits Sequence
// https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/5vXzdE9yzjsoMZ9sk

function solution(a0) {
  let a = a0;
  let count = 1;
  let seen = new Set();

  while (!seen.has(a)) {
    seen.add(a);
    a = a
      .toString()
      .split("")
      .reduce((a, b) => a + b * b, 0);
    count++;
  }
  return count;
}
solution(16); // expects 9
solution(103); // expects 4
solution(1); // expects 2
solution(13); // expects 4
solution(89); // expects 9
solution(612); // expects 16
