// Given an array of integers
// calculate the ratios of its elements that are positive, negative, and zero.

// Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Input Format
// The first line contains an integer, , the size of the array.
// The second line contains  space-separated integers that describe .

// proportion of positive values
// proportion of negative values
// proportion of zeros

let positive = 0;
let negative = 0;
let zeros = 0;

function plusMinus(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive += 1;
    } else if (arr[i] < 0) {
      negative += 1;
    } else {
      zeros += 1;
    }
  }
  console.log("positive value is :", (positive / arr.length).toFixed(6));
  console.log("negative value is :", (negative / arr.length).toFixed(6));
  console.log("zero value is :", (zeros / arr.length).toFixed(6));
  console.log(
    `${(positive / arr.length).toFixed(6)}\n${(negative / arr.length).toFixed(
      6
    )}\n${(zeros / arr.length).toFixed(6)}`
  );
}
plusMinus([-4, 3, -9, 0, 4, 1]);
