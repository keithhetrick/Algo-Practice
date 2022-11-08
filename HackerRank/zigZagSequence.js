// Zig Zag Sequence
// https://www.hackerrank.com/challenges/zig-zag-sequence/problem

function processData(input) {
  //Enter your code here
  input = input.split("");

  let n = input[0];
  let arr = input[1].split(" ").map(Number);
  let max = 0;
  let count = 1;
  let flag = 0;
  for (let i = 1; i < n; i++) {
    if (flag === 0) {
      if (arr[i] > arr[i - 1]) count++;
      else {
        flag = 1;
        count++;
      }
    } else {
      if (arr[i] < arr[i - 1]) count++;
      else {
        flag = 0;
        count++;
      }
    }
    if (count > max) max = count;
  }
  console.log(max);
}
processData(`3
1 2 3
1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20`);
