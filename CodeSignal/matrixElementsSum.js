// 8. Matrix Element Sum
// https://app.codesignal.com/arcade/intro/level-2/xskq4ZxLyqQMCLshr

function solution(matrix) {
  let sum = 0;
  let haunted = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) haunted.push(j);
      if (haunted.indexOf(j) === -1) sum += matrix[i][j];
    }
  }
  return sum;
}
solution([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]); // expects 9
solution([
  [1, 1, 1, 0],
  [0, 5, 0, 1],
  [2, 1, 3, 10],
]); // expects 9
solution([
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
]); // expects 18
solution([[0]]); // expects 0
solution([
  [1, 0, 3],
  [0, 2, 1],
  [1, 2, 0],
]); // expects 5
solution([[1], [5], [0], [2]]); // expects 6
solution([[1, 2, 3, 4, 5]]); // expects 15
solution([[2], [5], [10]]); // expects 17
solution([
  [4, 0, 1],
  [10, 7, 0],
  [0, 0, 0],
  [9, 1, 2],
]); // expects 15
solution([[1]]); // expects 1
