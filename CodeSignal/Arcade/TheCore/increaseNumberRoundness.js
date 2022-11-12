// 31. Increase Number Roundness
// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/KLbRMcWhaZi3dvYH5

function solution(n) {
  let str = n.toString();
  let count = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "0") count++;
  }
  console.log(str.slice(0, str.length - count).includes("0"));
  return str.slice(0, str.length - count).includes("0");
}
solution(902200100); // expects true
solution(11000); // expects false
solution(99080); // expects true
solution(1022220); // expects true
solution(106611); // expects true
solution(234230); // expects false
solution(888); // expects false
solution(100); // expects false
solution(1000000000); // expects false
solution(103456789); // expects true
