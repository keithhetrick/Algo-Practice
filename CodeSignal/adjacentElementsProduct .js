// Adjacent Elements Product
// https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m

// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.

function solution(inputArray) {
  let largest = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length - 1; i++) {
    if (inputArray[i] * inputArray[i + 1] > largest) {
      largest = inputArray[i] * inputArray[i + 1];
    }
  }
  return largest;
}
solution([3, 6, -2, -5, 7, 3]); // expects 21
solution([-1, -2]); // expects 2
solution([5, 1, 2, 3, 1, 4]); // expects 6
solution([1, 2, 3, 0]); // expects 6
solution([9, 5, 10, 2, 24, -1, -48]); // expects 50
solution([5, 6, -4, 2, 3, 2, -23]); // expects 30
solution([4, 1, 2, 3, 1, 5]); // expects 6
solution([-23, 4, -3, 8, -12]); // expects -12
solution([1, 0, 1, 0, 1000]); // expects 0
