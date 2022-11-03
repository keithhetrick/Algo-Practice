// 200. Number of Islands
// https://leetcode.com/problems/number-of-islands/

function numIslands(grid) {
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "1") {
        count++;
        let stack = [[r, c]];

        while (stack.length) {
          let [r, c] = stack.pop();
          if (grid[r][c] === "1") {
            grid[r][c] = "0";
            if (r > 0) stack.push([r - 1, c]);
            if (r < grid.length - 1) stack.push([r + 1, c]);
            if (c > 0) stack.push([r, c - 1]);
            if (c < grid[0].length - 1) stack.push([r, c + 1]);
          }
        }
      }
    }
  }
  return count;
}
numIslands([
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]); // expects 1
numIslands([
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]); // expects 3
