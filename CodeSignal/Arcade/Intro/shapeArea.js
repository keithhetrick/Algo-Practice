// 5. Shape Area
// https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ

function solution(n) {
  let area = 1;
  for (let i = 1; i < n; i++) {
    area += 4 * i;
  }
  return area;
}
solution(2); // expects 5
solution(3); // expects 13
solution(1); // expects 1
solution(5); // expects 41
solution(7000); // expects 97986001
solution(8000); // expects 127984001
solution(9999); // expects 199940005
solution(9998); // expects 199900013
solution(8999); // expects 161946005
solution(100); // expects 19801
