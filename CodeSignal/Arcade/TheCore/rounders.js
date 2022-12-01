// 32. Rounders
// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/H5PP5MXvYvWXxTytH

function solution(n) {
  // Solution 1
  let arr = n.toString().split("").map(Number);
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] >= 5) {
      arr[i - 1]++;
    }
    arr[i] = 0;
  }
  return ~~arr.join("");

  // Solution 2
  let arr = n.toString().split("").map(Number);
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i - 1] += Math.floor(arr[i] / 5);
    arr[i] = 0;
  }
  return Number(arr.join(""));

  // Solution 3
  let arr = n.toString().split("").map(Number);
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i - 1] += Math.floor(arr[i] / 5);
    arr[i] = arr[i] % 5;
  }
  return parseInt(arr.join(""));
}
solution(15); // expects 20
solution(1234); // expects 1000
solution(1445); // expects 2000
solution(14); // expects 10
solution(10); // expects 10
solution(7001); // expects 7000
solution(99); // expects 100
