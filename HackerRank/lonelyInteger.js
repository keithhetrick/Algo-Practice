// Lonely Integer
// https://www.hackerrank.com/challenges/lonely-integer/problem

function lonelyinteger(a) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result ^= a[i];
  }
  return result;
}
lonelyinteger([1, 1, 2]); // expects 2
lonelyinteger([0, 0, 1, 2, 1]); // expects 2
lonelyinteger([1, 2, 3, 4, 3, 2, 1]); // expects 4
