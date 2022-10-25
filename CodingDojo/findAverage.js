// Challenge 6: Find Average

// Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function findAvg(arr) {
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = sum / arr.length;
  }
  return avg;
}
findAvg([0, 0, 0]); // expects 0
findAvg([1, 3, 5, 7, 20]); // expects 7.2
findAvg([-3, 4, 8]); // expects 3
