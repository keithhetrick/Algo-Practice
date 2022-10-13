// Simple Array Sum

// Given an array of integers, find the sum of its elements.

// For example, if the array ar=[1,2,3],1+2+3=6, so return 6.

// Function Description
// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

// simpleArraySum has the following parameter(s):
// ar: an array of integers

// Constraints
// 0 < navigator, ar[i] ≤ 1000

// Input Format
// The first line contains an integer, n, denoting the size of the array.
// The second line contains n space-separated integers representing the array's elements.

// Output Format
// Print the sum of the array's elements as a single integer.

function simpleArraySum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("array sum is : ", sum);
  return sum;
}
simpleArraySum([1, 2, 3, 4, 10, 11]);
