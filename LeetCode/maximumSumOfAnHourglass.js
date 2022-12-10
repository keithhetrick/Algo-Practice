// 2428. Maximum Sum of an Hourglass
// https://leetcode.com/problems/maximum-sum-of-an-hourglass/

var maxSum = function (grid) {
  let max = -Infinity;

  for (let i = 0; i < grid.length - 2; i++) {
    for (let j = 0; j < grid[i].length - 2; j++) {
      let row1 = grid[i][j] + grid[i][j + 1] + grid[i][j + 2];
      let row2 = grid[i + 1][j + 1];
      let row3 = grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2];
      let sum = row1 + row2 + row3;
      if (sum > max) max = sum;
    }
  }
  console.log(max);
  return max;
};
maxSum([
  [6, 2, 1, 3],
  [4, 2, 1, 5],
  [9, 2, 8, 7],
  [4, 1, 2, 9],
]); // expects 30
maxSum([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); // expects 35
