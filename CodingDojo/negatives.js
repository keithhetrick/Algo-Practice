// Challenge 10: Negatives

// Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function noNeg(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) arr[i] = 0;
  }
  return arr;
}
noNeg([1, 2, -3, 3]); // expects [1,2,0,3]
noNeg([-1, 3, 6]); // expects [0,3,6]
noNeg([0]); // expects [0]
