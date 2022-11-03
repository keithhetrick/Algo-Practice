// 733. Flood Fill
// https://leetcode.com/problems/flood-fill/

function floodFill(image, sr, sc, color) {
  let oldColor = image[sr][sc];
  if (oldColor === color) return image;
  let stack = [[sr, sc]];

  while (stack.length) {
    let [r, c] = stack.pop();
    if (image[r][c] === oldColor) {
      image[r][c] = color;
      if (r > 0) stack.push([r - 1, c]);
      if (r < image.length - 1) stack.push([r + 1, c]);
      if (c > 0) stack.push([r, c - 1]);
      if (c < image[0].length - 1) stack.push([r, c + 1]);
    }
  }
  return image;
}
floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
); // expects [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
floodFill(
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  0,
  0,
  0
); // expects [[0, 0, 0], [0, 0, 0]]
