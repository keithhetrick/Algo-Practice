// 36. Array Replace

// Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

// Example

// For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
// solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].

function solution(inputArray, elemToReplace, substitutionElem) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) inputArray[i] = substitutionElem;
  }
  return inputArray;
}
solution([1, 2, 1], 1, 3); // expects [3, 2, 3]
solution([1, 2, 3, 4, 5], 3, 0); // expects [1, 2, 3, 4, 5]
solution([1, 1, 1], 1, 10); // expects [10, 10, 10]
solution([1, 2, 1, 2, 1], 2, 1); // expects [1, 1, 1, 1, 1]
solution([1, 2, 1, 2, 1], 2, 2); // expects [1, 2, 1, 2, 1]
solution([3, 1], 3, 9); // expects [9, 1]
solution([10, 10], 0, 9); // expects [10, 10]
solution([2, 1], 3, 9); // expects [2, 1]
