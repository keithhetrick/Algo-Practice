"use strict";

let sentence = "Hey there ho there hi there!";

function phrase() {
  let sentence = "LOL jk this is a diff phrase";
  console.log("Inside loop:", sentence);
}
phrase();
console.log("Outside loop: ", sentence);

// matrix
function pullLettersOut(matrix) {
  let newArr = [];

  for (let i = 0; i < matrix.length; i++) {
    // newArr.push(matrix[i][0]);
    // console.log(matrix[i][0]);
    console.log(matrix[i][i]);

    if (matrix[i] % 2 !== 0) {
      newArr.push(matrix[i][0]);
    }
  }
  return console.log("\nNEW ARRAY: ", newArr, "\n");
}
pullLettersOut([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9],
  [10, 11, 12, 13, 14],
]);
// pullLettersOut([["Act appropriate"], ["Be wise"], ["Care deeply"]]);
