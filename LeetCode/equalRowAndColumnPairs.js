// 2352. Equal Row and Column Pairs
// https://leetcode.com/problems/equal-row-and-column-pairs/

var equalPairs = function (grid) {
  let count = 0;
  let colArr = [];

  for (let i = 0; i < grid.length; i++) {
    let row = grid[i];
    console.log("ROW: ", row);
    console.log("===================");
    let temp = [];
    for (let j = 0; j < row.length; j++) {
      let col = grid[j][i];
      temp.push(col);
    }
    grid[i] = grid[i];
    colArr.push(temp);
  }
  console.log("COLUMN: ", colArr);
};
equalPairs([
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7],
]); // expects 1
// equalPairs([
//   [3, 1, 2, 2],
//   [1, 4, 4, 5],
//   [2, 4, 2, 2],
//   [2, 4, 2, 2],
// ]); // expects 2
