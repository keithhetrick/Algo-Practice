// Given an array of integers and a positive integer k, determine the number of (i,j) pairs where i < j and ar[i] + ar[j] is divisible by k.

// Example
// ar = [1,2,3,4,5,6]
// k = 5

// Three pairs meet the criteria: [1,4],[2,3], and [4,6].
// Function Description
// Complete the divisibleSumPairs function in the editor below.
// divisibleSumPairs has the following parameter(s):
// int n: the length of array ar
// int ar[n]: an array of integers
// int k: the integer divisor

// Returns
// - int: the number of pairs

// Input Format
// The first line contains 2 space-separated integers, n and k.
// The second line contains n space-separated integers, each a value of arr[i].

function divisibleSumPairs(n, k, ar) {
  let pairs = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length; j++) {
      if (i < j && (ar[i] + ar[j]) % k == 0) {
        pairs += 1;
      }
    }
  }
  return pairs;
}
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
