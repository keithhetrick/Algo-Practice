// Number Line Jump
// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
  if (v1 === v2) {
    return "NO";
  }
  if (v1 > v2) {
    if ((x2 - x1) % (v1 - v2) === 0) {
      return "YES";
    }
  }
  return "NO";
}
kangaroo(0, 3, 4, 2); // expects 'YES'
kangaroo(0, 2, 5, 3); // expects 'NO'
