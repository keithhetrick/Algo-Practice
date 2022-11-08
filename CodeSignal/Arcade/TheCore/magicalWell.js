// 27. Magical Well
// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/LbuWRHnMoJH9SAo4o

function solution(a, b, n) {
  let dollars = 0;

  for (let i = 0; i < n; i++) {
    if (n > 0) dollars += a * b;
    a++;
    b++;
  }
  return dollars;
}
solution(1, 2, 2); // expects 8
solution(1, 1, 1); // expects 1
solution(6, 5, 3); // expects 128
solution(1601, 337, 0); // expects 0
solution(1891, 352, 0); // expects 0
solution(1936, 1835, 5); // expects 17800540
solution(957, 57, 2); // expects 110113
solution(687, 1337, 0); // expects 0
solution(491, 1552, 4); // expects 3060400
solution(1275, 362, 2); // expects 924738
