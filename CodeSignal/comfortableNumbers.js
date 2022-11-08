// Comfortable Numbers
// https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/pNfGgNk46YZ4c4RW5

function solution(l, r) {
  // Solution using hash table
  let pairs = []; // array of pairs

  for (let i = l; i < r; i++) {
    let sum = i
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    for (let j = i + 1; j <= r && j <= i + sum; j++) {
      let bsum = j
        .toString()
        .split("")
        .reduce((a, b) => a + Number(b), 0);
      if (i !== j && i < j && i >= j - bsum) pairs.push({ i: i, j: j });
    }
  }

  return pairs.length;

  // Solution using for loops
  let count = 0;

  for (let i = l; i < r; i++) {
    for (let j = i + 1; j <= r; j++) {
      let sum = ("" + i).split("").reduce((a, b) => a + Number(b), 0);

      if (j >= i - sum && j <= i + sum) {
        sum = ("" + j).split("").reduce((a, b) => a + Number(b), 0);
        if (i >= j - sum && i <= j + sum) count++;
      }
    }
  }

  return count;
}
solution(10, 12); // expects 2
solution(1, 9); // expects 20
solution(13, 13); // expects 0
solution(12, 108); // expects 707
solution(239, 777); // expects 6166
solution(1, 1000); // expects 11435
