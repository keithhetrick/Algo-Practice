// 1929. Concatenation of Array
// https://leetcode.com/problems/concatenation-of-array/description/

/*
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
 * Specifically, ans is the concatenation of two nums arrays.
 * Return the array ans.
 */

var getConcatenation = function (nums) {
  // Solution using .concat()
  let conCatArr = [];
  console.log("\nCONCATENATION OF ARRAY: ", conCatArr.concat(nums, nums));
  // return conCatArr.concat(nums, nums);

  // Solution using spread operator
  console.log("\nCONCATENATION OF ARRAY USING SPREAD OPERATOR: ", [
    ...nums,
    ...nums,
  ]);
  return [...nums, ...nums];
};
getConcatenation([1, 2, 1]); // expects [1,2,1,1,2,1]
getConcatenation([1, 3, 2, 1]); // expects [1,3,2,1,1,3,2,1]
