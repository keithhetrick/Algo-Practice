// 724. Find Pivot Index
// https://leetcode.com/problems/find-pivot-index/

// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

const pivotIndex = (nums) => {
  let sum = 0;
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    if (leftSum === sum - leftSum - nums[j]) return j;

    leftSum += nums[j];
  }
  return -1;
};
pivotIndex([1, 7, 3, 6, 5, 6]); // expects 3
pivotIndex([1, 2, 3]); // expects -1
pivotIndex([2, 1, -1]); // expects 0
