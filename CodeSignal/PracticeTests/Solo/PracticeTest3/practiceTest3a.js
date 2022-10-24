// practiceTest3a

// You are given an array of integers numbers and two integers left and right. You task is to calculate a boolean array result, where result[i] = true if there exists an integer x, such that numbers[i] = (i + 1) * x and left ≤ x ≤ right. Otherwise, result[i] should be set to false.

// Example

// For numbers = [8, 5, 6, 16, 5], left = 1, and right = 3, the output should be solution(numbers, left, right) = [false, false, true, false, true].

// For numbers[0] = 8, we need to find a value of x such that 1 * x = 8, but the only value that would work is x = 8 which doesn't satisfy the boundaries 1 ≤ x ≤ 3, so result[0] = false.
// For numbers[1] = 5, we need to find a value of x such that 2 * x = 5, but there is no integer value that would satisfy this equation, so result[1] = false.
// For numbers[2] = 6, we can choose x = 2 because 3 * 2 = 6 and 1 ≤ 2 ≤ 3, so result[2] = true.
// For numbers[3] = 16, there is no an integer 1 ≤ x ≤ 3, such that 4 * x = 16, so result[3] = false.
// For numbers[4] = 5, we can choose x = 1 because 5 * 1 = 5 and 1 ≤ 1 ≤ 3, so result[4] = true.

function solution(numbers, left, right) {
  let map = {};

  for (let i = left; i <= right; i++) {
    map[i] = true;
  }
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let x = num / (i + 1);
    if (map[x]) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}
solution([8, 5, 6, 16, 5], 1, 3); // expected output: [false, false, true, false, true]
solution([100], 1, 100); // expected output: [true]
solution([1, 2, 3, 4, 5], 1, 5); // expected output: [true, true, true, true, true]
solution([1, 2, 3, 4, 5], 2, 10000); // expected output: [false, false, false, false, false]
solution([1000000, 20000], 10000, 10000); // expected output: [false, true]
solution([65, 46, 60, 164, 243, 228, 231, 298, 231, 211], 20, 50); // expected output: [false, true, true, true, false, true, true, false, false, false]
solution([643, 531, 504, 224, 415, 360, 364, 84, 212, 587], 70, 80); // expected output: [false, false, false, false, false, false, false, false, false, false]
// solution(
// //   [
// //     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
// //     22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
// //     41, 42, 43, 44, 45, 46, 47, 48, 49,
// //   ],
// //   1,
// //   10000
// // ); // expects [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
