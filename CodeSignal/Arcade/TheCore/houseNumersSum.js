// 67. House Numbers Sum
// https://app.codesignal.com/arcade/code-arcade/well-of-integration/3QMXNwGfvLMoQwed7

function solution(inputArray) {
  let sum = 0;

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === 0) {
      return sum;
    } else {
      sum += inputArray[i];
    }
  }
  console.log("\nSUM: ", sum, "\n");
  return sum;
}
solution([5, 1, 2, 3, 0, 1, 5, 0, 2]); // expects 11
solution([4, 2, 1, 6, 0]); // expects 13
solution([4, 1, 2, 3, 0, 10, 2]); // expects 10
solution([0, 1, 2, 3, 0]); // expects 0
solution([5, 1, 1, 3, 0, 1, 5, 0, 2]); // expects [5, 1, 1, 3, 0, 1, 5, 0, 2]
solution([10, 10, 10, 10, 10, 10, 10, 10, 10, 0]); // expects 90
solution([10, 10, 10, 10, 10, 10, 10, 10, 0, 10]); // expects 80
