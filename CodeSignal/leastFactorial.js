// Least Factorial
// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/7BFPq6TpsNjzgcpXy

function solution(n) {
  let factorial = 1;
  let i = 1;
  while (factorial < n) {
    factorial *= i;
    i++;
  }
  return factorial;
}
solution(17); // expects 24
solution(1); // expects 1
solution(5); // expects 6
solution(25); // expects 120
solution(18); // expects 24
solution(109); // expects 120
solution(106); // expects 120
solution(11); // expects 24
solution(55); // expects 120
solution(24); // expects 24
