// Matrix Practice

// A series of functions that take in a matrix and return the sum of the values in the matrix, using 4 separate nested arrays.

function topLeftToBottomRightDiagonalMatrix(matrix) {
  console.log(
    "Top Left To Bottom Right Diagonal Matrix:",
    matrix[0][0],
    matrix[1][1],
    matrix[2][2],
    matrix[3][3]
  );

  return matrix[0][0] + matrix[1][1] + matrix[2][2] + matrix[3][3];
}
topLeftToBottomRightDiagonalMatrix([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
  [7, 2, 4, 1],
]);

function bottomRightToTopLeftDiagonalMatrix(matrix) {
  console.log(
    "Bottom Right To Top Left Diagonal Matrix:",
    matrix[3][3],
    matrix[2][2],
    matrix[1][1],
    matrix[0][0]
  );

  return matrix[3][3] + matrix[2][2] + matrix[1][1] + matrix[0][0];
}
bottomRightToTopLeftDiagonalMatrix([
  [4, 0, 1, 2],
  [10, 7, 0, 3],
  [0, 0, 0, 0],
  [9, 1, 2, 6],
]);

function topRightToBottomLeftDiagonalMatrix(matrix) {
  console.log(
    "Top Right To Bottom Left Diagonal Matrix:",
    matrix[0][3],
    matrix[1][2],
    matrix[2][1],
    matrix[3][0]
  );

  return matrix[0][3] + matrix[1][2] + matrix[2][1] + matrix[3][0];
}
topRightToBottomLeftDiagonalMatrix([
  [1, 1, 1, 0],
  [0, 5, 0, 1],
  [2, 1, 3, 10],
  [4, 5, 6, 7],
]);

function bottomLeftToTopRightDiagonalMatrix(matrix) {
  console.log(
    "Bottom Left To Top Right Diagonal Matrix:",
    matrix[3][0],
    matrix[2][1],
    matrix[1][2],
    matrix[0][3]
  );

  return matrix[3][0] + matrix[2][1] + matrix[1][2] + matrix[0][3];
}
bottomLeftToTopRightDiagonalMatrix([
  [1, 0, 3, 2],
  [0, 2, 1, 1],
  [1, 2, 0, 4],
  [3, 3, 7, 3],
]);

function topRowMatrix(matrix) {
  console.log(
    "Top Row Matrix:",
    matrix[0][0],
    matrix[0][1],
    matrix[0][2],
    matrix[0][3]
  );
  console.log("Top Row Matrix - simple array call:", matrix[0]);

  return matrix[0][0] + matrix[0][1] + matrix[0][2] + matrix[0][3] || matrix[0];
}
topRowMatrix([
  [0, 1, 0, 2],
  [0, 5, 6, 0],
  [1, 0, 2, 3],
  [8, 3, 4, 4],
]);

function bottomRowMatrix(matrix) {
  console.log(
    "Bottom Row Matrix:",
    matrix[3][0],
    matrix[3][1],
    matrix[3][2],
    matrix[3][3]
  );
  console.log("Bottom Row Matrix - simple array call:", matrix[3]);

  return matrix[3][0] + matrix[3][1] + matrix[3][2] + matrix[3][3] || matrix[3];
}
bottomRowMatrix([
  [0, 0, 1, 2],
  [0, 4, 2, 0],
  [3, 0, 2, 4],
  [5, 3, 0, 3],
]);

function leftColumnMatrix(matrix) {
  console.log(
    "Left Column Matrix:",
    matrix[0][0],
    matrix[1][0],
    matrix[2][0],
    matrix[3][0]
  );

  return matrix[0][0] + matrix[1][0] + matrix[2][0] + matrix[3][0];
}
leftColumnMatrix([
  [4, 0, 1, 2],
  [10, 7, 0, 3],
  [0, 0, 0, 0],
  [9, 1, 2, 6],
]);

function rightColumnMatrix(matrix) {
  console.log(
    "Right Column Matrix:",
    matrix[0][3],
    matrix[1][3],
    matrix[2][3],
    matrix[3][3]
  );

  return matrix[0][3] + matrix[1][3] + matrix[2][3] + matrix[3][3];
}
rightColumnMatrix([
  [2, 0, 5, 3],
  [0, 1, 1, 7],
  [3, 2, 4, 1],
  [0, 5, 0, 4],
]);

function middleLeftColumnMatrix(matrix) {
  console.log(
    "Middle Left Column Matrix:",
    matrix[0][1],
    matrix[1][1],
    matrix[2][1],
    matrix[3][1]
  );

  return matrix[0][1] + matrix[1][1] + matrix[2][1] + matrix[3][1];
}
middleLeftColumnMatrix([
  [3, 2, 1, 2],
  [10, 4, 0, 3],
  [0, 1, 0, 0],
  [3, 1, 4, 6],
]);

function middleRightColumnMatrix(matrix) {
  console.log(
    "Middle Right Column Matrix:",
    matrix[0][2],
    matrix[1][2],
    matrix[2][2],
    matrix[3][2]
  );

  return matrix[0][2] + matrix[1][2] + matrix[2][2] + matrix[3][2];
}
middleRightColumnMatrix([
  [3, 2, 3, 1],
  [0, 4, 3, 2],
  [0, 0, 1, 0],
  [1, 2, 6, 3],
]);

function middleRowMatrix(matrix) {
  console.log(
    "Middle Row Matrix:",
    matrix[1][0],
    matrix[1][1],
    matrix[1][2],
    matrix[1][3]
  );
  console.log("Middle Row Matrix - simple array call:", matrix[1]);

  return matrix[1][0] + matrix[1][1] + matrix[1][2] + matrix[1][3];
}
middleRowMatrix([
  [3, 2, 1, 2],
  [6, 3, 0, 3],
  [0, 4, 0, 0],
  [3, 1, 5, 6],
]);

function middleMatrix(matrix) {
  console.log(
    "Middle Matrix:",
    matrix[1][1],
    matrix[1][2],
    matrix[2][1],
    matrix[2][2]
  );

  return matrix[1][1] + matrix[1][2] + matrix[2][1] + matrix[2][2];
}
middleMatrix([
  [3, 2, 1, 2],
  [10, 4, 0, 3],
  [0, 1, 0, 0],
  [3, 1, 4, 6],
]);

function topRightCornerMatrix(matrix) {
  console.log(
    "Top Right Corner Matrix:",
    matrix[0][2],
    matrix[0][3],
    matrix[1][2],
    matrix[1][3]
  );

  return matrix[0][2] + matrix[0][3] + matrix[1][2] + matrix[1][3];
}
topRightCornerMatrix([
  [3, 2, 1, 2],
  [10, 4, 0, 3],
  [0, 1, 0, 0],
  [3, 1, 4, 6],
]);

function topLeftCornerMatrix(matrix) {
  console.log(
    "Top Left Corner Matrix:",
    matrix[0][0],
    matrix[0][1],
    matrix[1][0],
    matrix[1][1]
  );

  return matrix[0][0] + matrix[0][1] + matrix[1][0] + matrix[1][1];
}
topLeftCornerMatrix([
  [3, 2, 1, 2],
  [10, 4, 0, 3],
  [0, 1, 0, 0],
  [3, 1, 4, 6],
]);

function bottomRightCornerMatrix(matrix) {
  console.log(
    "Bottom Right Corner Matrix:",
    matrix[2][2],
    matrix[2][3],
    matrix[3][2],
    matrix[3][3]
  );

  return matrix[2][2] + matrix[2][3] + matrix[3][2] + matrix[3][3];
}
bottomRightCornerMatrix([
  [3, 2, 1, 2],
  [10, 4, 0, 3],
  [0, 1, 0, 0],
  [3, 1, 4, 6],
]);

function bottomLeftCornerMatrix(matrix) {
  console.log(
    "Bottom Left Corner Matrix:",
    matrix[2][0],
    matrix[2][1],
    matrix[3][0],
    matrix[3][1]
  );

  return matrix[2][0] + matrix[2][1] + matrix[3][0] + matrix[3][1];
}
bottomLeftCornerMatrix([
  [3, 2, 1, 2],
  [10, 4, 0, 3],
  [0, 1, 0, 0],
  [3, 1, 4, 6],
]);
