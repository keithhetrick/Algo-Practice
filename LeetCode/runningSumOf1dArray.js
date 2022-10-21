// 1480. Running Sum of 1d Array
// https://leetcode.com/problems/running-sum-of-1d-array/

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

const runningSum = (nums) => {
  let result = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }
  return result;
};
runningSum([1, 2, 3, 4]); // expects [1,3,6,10]
runningSum([1, 1, 1, 1, 1]); // expects [1,2,3,4,5]
runningSum([3, 1, 2, 10, 1]); // expects [3,4,6,16,17]
