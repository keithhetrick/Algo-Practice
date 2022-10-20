// 39. Remove Array Part

// Remove a part of a given array between given 0-based indexes l and r (inclusive).

// Example

// For inputArray = [2, 3, 2, 3, 4, 5], l = 2, and r = 4, the output should be
// solution(inputArray, l, r) = [2, 3, 5].

function solution(inputArray, l, r) {
  return inputArray.slice(0, l).concat(inputArray.slice(r + 1));
}
solution([2, 3, 2, 3, 4, 5], 2, 4); // expects [2, 3, 5]
solution([2, 4, 10, 1], 0, 2); // expects [1]
solution([5, 3, 2, 3, 4], 1, 1); // expects [5, 2, 3, 4]
solution([1, 1], 0, 1); // expects []
solution([0, -2, 5, 6], 3, 3); // expects [0, -2, 5]
solution([4, 3, 2, 1, 3, 4, 5], 1, 3); // expects [4, 3, 4, 5]
