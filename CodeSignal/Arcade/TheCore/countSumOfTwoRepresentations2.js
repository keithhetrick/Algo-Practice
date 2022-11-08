// 26. Count Sum of Two Representations 2
// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/hBw5BJiZ4LmXcy92u

function solution(n, l, r) {
  let ways = 0;

  for (let i = l; i <= r; i++) {
    if (i <= n - i && n - i <= r) ways++;
  }
  return ways;
}
solution(6, 2, 4); // expects 2
solution(6, 3, 3); // expects 1
solution(10, 9, 11); // expects 0
solution(24, 8, 16); // expects 5
solution(24, 12, 12); // expects 1
solution(93, 24, 58); // expects 12
