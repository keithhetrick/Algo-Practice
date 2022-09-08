// Given an array, print the max, min and average values for that array.

function printMaxMinAverageArrayVals(arr) {
  let max = arr[0];
  let min = arr[0];
  let average = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      console.log("setting min to " + min);
    }
    if (arr[i] >= max) {
      max = arr[i];
      console.log("setting max to " + max);
    }
    if (arr[i] >= 0) {
      console.log("variable value:", arr[i]);
      console.log("current summed values:", sum);
      sum += arr[i];
      console.log("index value:", i);
    }
    if ((average = sum / arr.length)) {
      average;
      console.log("current average:", average);
    }
  }
  console.log("Max is " + max);
  console.log("Min is " + min);
  console.log("Average is " + average);
  return sum;
}
printMaxMinAverageArrayVals([0, 1, 7, 2, 3, 8, 4, 5]);
