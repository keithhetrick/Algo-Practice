// Square each value in a given array, returning that same array with changed values.

let myArr = [];
function squareArraysVals(arr) {
  let i = 1;
  while (i <= 10) {
    console.log("current array :", arr);
    i *= 2;
    myArr.push(i);
    console.log("adding to array :", i);
  }
  console.log("outside loop :", i);
  console.log(myArr);
}
squareArraysVals(myArr);

let myArr = [];
function squareArraysVals(arr) {
  for (let i = 1; i < 10; i *= 2) {
    console.log("current array :", arr);
    myArr.push(i);
    console.log("adding to array :", arr);
  }
  console.log(myArr);
}
squareArraysVals(myArr);

function squareArraysVals() {
  for (let i = 1; i <= 255; i++) {
    console.log("before square", i);
    i = i ** 2;
    console.log("after square", i);
  }
}
squareArraysVals();

function squareArraysVals(i) {
  return i ** 2;
}
let squared = squareArraysVals(5);
console.log(" 5 ** 2 = ", squared);
