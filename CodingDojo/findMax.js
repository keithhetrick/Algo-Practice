// Challenge 5: Find Max

// Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

function findMax(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

findMax([0, -2, 8]); // expects 8
findMax([-3, 3, 5, 7]); // expects 7
findMax([1]); // expects 1
