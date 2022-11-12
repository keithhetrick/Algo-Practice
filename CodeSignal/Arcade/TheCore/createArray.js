// 35. Create Array

// Given an integer size, return array of length size filled with 1s.

// Example

// For size = 4, the output should be
// solution(size) = [1, 1, 1, 1].

function solution(size) {
  let newArr = [];
  for (i = 0; i < size; i++) newArr.push(1);

  return newArr;
}
solution(4); // expects [1, 1, 1, 1]
solution(2); // expects [1, 1]
solution(1); // expects [1]
solution(5); // expects [1, 1, 1, 1, 1]
solution(49); // expects [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
