// Mini Max Sum

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example
// arr = [1, 3, 5, 7, 9]

// The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 =24. The function prints
// 16 24

// Function Description
// Complete the miniMaxSum function in the editor below.
// miniMaxSum has the following parameter(s):
// arr: an array of  integers

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format
// A single line of five space-separated integers.

// Constraints
// 1 ≤ arr[i] ≤ 10^9

// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Solution 1
function miniMaxSum(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
    if (min > arr[i]) min = arr[i];

    sum += arr[i];
  }
  let maxSum = sum - min;
  let minSum = sum - max;
  console.log(minSum, maxSum);
}
miniMaxSum([1, 2, 3, 4, 5]); // expects 10, 14
miniMaxSum([7, 69, 2, 221, 8974]); // expects 299, 9271

// Solution 2
function miniMaxSum(arr) {
  // let newArr = [...arr].sort();
  let newArr = arr.sort();
  let sum = 0;

  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i];
  }
  let max = sum - newArr[0];
  let min = sum - newArr[newArr.length - 1];
  console.log(min, max);
}
miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([7, 69, 2, 221, 8974]); // expects 299, 9271
