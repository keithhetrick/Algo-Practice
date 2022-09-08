// print the sum of the elements in an array & return the sum of all array elements.

// aVeryBigSum has the following parameter(s):
// int arr[n]: an array of integers

// Return
// long: the sum of all array elements

// Input Format
// The first line of the input consists of an integer
// The next line contains space-separated integers contained in the array.

// Output Format
// Return the integer sum of the elements in the array.

function aVeryBigSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log("sum is : ", sum);
  return sum;
}
aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
