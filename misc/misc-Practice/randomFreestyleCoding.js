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
  // let str = matrix.toString().split(" ").join(" ");

  // console.log(str);
  let newArr = [];

  for (let i = 0; i < matrix.length; i++) {
    // console.log("i: ", matrix[i]);
    // console.log("i: ", matrix[i][1]);
    newArr.push(matrix[i][0]);
    // console.log("i: ", matrix[i][1]);
  }
  return console.log(newArr);
}
pullLettersOut([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9],
  [10, 11, 12, 13, 14],
]);
// pullLettersOut([["Act appropriate"], ["Be wise"], ["Care deeply"]]);
