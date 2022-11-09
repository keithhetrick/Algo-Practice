// 29. Addition Without Carrying
// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/xzeZqCQjpfDJuN72S

function solution(param1, param2) {
  let result = 0;
  let num = 1;

  // Solution using while loop
  while (param1 > 0 || param2 > 0) {
    let sum = (param1 % 10) + (param2 % 10);
    result += (sum % 10) * num;
    param1 = Math.floor(param1 / 10);
    param2 = Math.floor(param2 / 10);
    num *= 10;
  }
  return result;

  // Solution using for loop
  for (let i = 0; i < 10; i++) {
    let sum = (param1 % 10) + (param2 % 10);
    result += (sum % 10) * num;
    param1 = Math.floor(param1 / 10);
    param2 = Math.floor(param2 / 10);
    num *= 10;
  }
  return result;
}
solution(456, 1734); // expects 1180
solution(99999, 0); // expects 99999
solution(999, 999); // expects 888
solution(0, 0); // expects 0
solution(54321, 54321); // expects 8642
solution(54321, 56789); // expects 0
