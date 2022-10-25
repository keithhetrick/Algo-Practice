// Challenge 4: Iterate an array

// Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)

function iterArr(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
iterArr([0]); // expects 0
iterArr([1, 2, 5]); // expects 8
iterArr([-5, 2, 5, 12]); // expects 14
