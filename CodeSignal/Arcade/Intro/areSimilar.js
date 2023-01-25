// Are Similar?
// https://app.codesignal.com/arcade/intro/level-4/xYXfzQmnhBvEKJwXP

function solution(a, b) {
  let count = 0;
  let c = [];
  let d = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count++;
      c.push(a[i]);
      d.push(b[i]);
    }
  }
  if (count === 0) {
    console.log("true");
    return true;
  } else if (count === 2) {
    if (c[0] === d[1] && c[1] === d[0]) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  } else {
    console.log("false");
    return false;
  }
}
solution([1, 2, 3], [1, 2, 3]); // expects true
solution([1, 2, 3], [2, 1, 3]); // expects true
solution([1, 2, 2], [2, 1, 1]); // expects false
solution([1, 2, 1, 2], [2, 2, 1, 1]); // expects true
solution([1, 2, 1, 2, 2, 1], [2, 2, 1, 1, 2, 1]); // expects true
solution([1, 1, 4], [1, 2, 3]); // expects false
solution([1, 2, 3], [1, 10, 2]); // expects false
solution([2, 3, 1], [1, 3, 2]); // expects true
solution([2, 3, 9], [10, 3, 2]); // expects false
solution(
  [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
  [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]
); // expects false
