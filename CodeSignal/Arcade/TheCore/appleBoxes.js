// 30. Apple Boxes
// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/scG8AFsPuqQGx8Qjf

function solution(k) {
  let total = 0;
  for (let i = 1; i <= k; i++) {
    if (i % 2 === 0) total += i * i;
    else total -= i * i;
  }
  return total;
}
solution(5); // expects -15
solution(15); // expects -120
solution(36); // expects 666
solution(1); // expects -1
solution(14); // expects 105
solution(12); // expects 78
solution(9); // expects -45
solution(40); // expects 820
solution(37); // expects -703
