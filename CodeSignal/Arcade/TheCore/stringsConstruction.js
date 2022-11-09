// 59. Strings Construction
// https://app.codesignal.com/arcade/code-arcade/mirror-lake/chW9F8bCgxYJBcgj3

function solution(a, b) {
  let hashmapA = {};
  let hashmapB = {};

  for (let i = 0; i < a.length; i++) {
    let letter = a[i];
    hashmapA[letter] ? hashmapA[letter]++ : (hashmapA[letter] = 1);
  }
  for (let i = 0; i < b.length; i++) {
    let letter = b[i];
    hashmapB[letter] ? hashmapB[letter]++ : (hashmapB[letter] = 1);
  }
  let total = Infinity;

  for (let key in hashmapA) {
    if (!hashmapB[key]) {
      total = 0;
      return total;
    }
    let amount = Math.floor(hashmapB[key] / hashmapA[key]);
    if (amount < total) total = amount;
  }
  if (total === Infinity) total = 0;

  return total;
}
solution("abc", "abccba"); // expects 2
solution("ab", "abcbcb"); // expects 1
solution("ab", "abccba"); // expects 2
solution("b", "abccba"); // expects 2
solution("c", "abccbac"); // expects 3
