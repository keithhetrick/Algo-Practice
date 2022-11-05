// Sliding Window - minSubArrayLen

// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

function minSubArrayLen(arr, num) {
  let start = 0;
  let end = 0;
  let minLen = Infinity;
  let temp = 0;

  while (start < arr.length) {
    if (temp < num && end < arr.length) {
      temp += arr[end];
      end++;
    } else if (temp >= num) {
      minLen = Math.min(minLen, end - start);
      temp -= arr[start];
      start++;
    } else break;
  }
  return minLen === Infinity ? 0 : minLen;
}
minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // expects 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2, 1, 6, 5, 4], 9); // expects 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // expects 1 -> because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // expects 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // expects 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // expects 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // expects 0
