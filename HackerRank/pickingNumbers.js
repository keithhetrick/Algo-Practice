// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

function pickingNumbers(a) {
  let maxCount = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; i++) {
      if (a.length - 1 - a[j] <= 1) {
        maxCount++;
      }
    }
  }
  return maxCount;
}
console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));
