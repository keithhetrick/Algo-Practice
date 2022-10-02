// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.

let arr = [5, 4, 7, 8, 9, 12];
function shiftArrayValsLeft(arr) {
  arr.shift();
  arr.push(0);
}
shiftArrayValsLeft(arr);
console.log(arr);
