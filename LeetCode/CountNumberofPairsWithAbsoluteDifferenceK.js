// 2006. Count Number of Pairs With Absolute Difference K
// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/
var countKDifference = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        count++;
      }
    }
  }
  console.log(count);
  return count;
};
countKDifference([1, 2, 2, 1], 1); // expects 4
countKDifference([1, 3], 3); // expects 0
countKDifference([3, 2, 1, 5, 4], 2); // expects 3
