"use strict";

let sentence = "Hey there ho there hi there!";

function phrase() {
  let sentence = "LOL jk this is a diff phrase";
  console.log("\nInside loop:", sentence);
}
phrase();
console.log("\nOutside loop: ", sentence, "\n");

// matrix
function pullLettersOut(matrix) {
  let newArr = [];

  for (let i = 0; i < matrix.length; i++) {
    console.log("MATRIX[i][i]: ", matrix[i][i]);

    if (matrix[i] % 2 !== 0) {
      newArr.push(matrix[i][0]);
    }
  }
  return console.log("\npullLettersOut\tNEW ARRAY: ", newArr);
}
pullLettersOut([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9],
  [10, 11, 12, 13, 14],
]); // expects [1, 6, 10]

function reverseThrougMatrixInPlace(matrix) {
  // for (let i = 0; i < matrix.length; i++) {
  //   console.log("MATRIX[i][i]: ", matrix[i][i]);

  //   if (matrix[i] % 2 !== 0) {
  //     matrix[i].reverse();
  //   }
  // }

  let newMatrix = [];

  for (let i = matrix.length - 1; i >= 0; i--) {
    newMatrix.push(matrix[i].reverse());
  }

  return console.log("\nreverseThrougMatrixInPlace\tNEW MATRIX: ", matrix);
}
reverseThrougMatrixInPlace([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9],
  [10, 11, 12, 13, 14],
]); // expects [[5, 4, 3, 2, 1], [9, 8, 7, 6], [14, 13, 12, 11, 10]]
