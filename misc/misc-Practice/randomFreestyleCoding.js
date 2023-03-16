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

// reversing a string

function strReversal(str) {
  let reversed = "";

  // sanitzing the string
  str = str.toLowerCase().replace(/[^a-z]/g, "");

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed === str;
}
console.log(strReversal("racecar")); // expects true
console.log(strReversal("hello")); // expects false
console.log(strReversal("madam")); // expects true
console.log(strReversal("tacocat")); // expects true
console.log(strReversal("radada")); // expects false
console.log(strReversal("eee.ra,d ar EEE!!!")); // expects true
console.log(strReversal("321motteg______gottem123")); // expects false
