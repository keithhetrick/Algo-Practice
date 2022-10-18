// 38. Concatenate Arrays

// Given two arrays of integers a and b, obtain the array formed by the elements of a followed by the elements of b.

// Example

// For a = [2, 2, 1] and b = [10, 11], the output should be
// solution(a, b) = [2, 2, 1, 10, 11].

function solution(a, b) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    newArr.push(a[i]);
  }
  for (let j = 0; j < b.length; j++) {
    newArr.push(b[j]);
  }
  return newArr;

  // return [...a, ...b];
  // return a.concat(b);
}
solution([2, 2, 1], [10, 11]); // expects [2, 2, 1, 10, 11]
solution([1, 2], [3, 1, 2]); // expects [1, 2, 3, 1, 2]
solution([1], []); // expects [1]
solution([2, 10, 3, 9, 5, 11, 11], [4, 8, 1, 13, 3, 1, 14]); // expects [2, 10, 3, 9, 5, 11, 11, 4, 8, 1, 13, 3, 1, 14]
solution([9, 6, 6, 9, 8, 14], [3, 2, 2, 5, 3, 11, 12, 9, 7, 7]); // expects [[9, 6, 6, 9, 8, 14, 3, 2, 2, 5, 3, 11, 12, 9, 7, 7]
