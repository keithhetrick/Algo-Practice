// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:
// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [2, 7, 11, 15];
let target = 9;

// Solution 1
function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (map.has(num2)) {
      return [i, map.get(num2)];
    }
    map.set(num1, i);
    console.log(map.set(num1, i));
  }
}

// Solution 2
const twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    const j = target - nums[i];
    if (typeof hash[j] !== "undefined") {
      return [hash[j], i];
    }
    hash[nums[i]] = i;
  }
  return [];
};

// Solution 3 - NOT WORKING - only works for above values, not scalable
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    sum = nums[0] + nums[1];
  }
  console.log([nums.indexOf(nums[0]), nums.indexOf(nums[1])]);
  return [nums.indexOf(nums[0]), nums.indexOf(nums[1])];
}
twoSum(nums, target);

// Solution 4 NOT WORKING - print values & not indices
function twoSum(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > target) {
      continue;
    }
    if (nums.includes(target - nums[i])) {
      result.push(nums[i]);
      result.push(target - nums[i]);
      break;
    }
  }
  console.log(result);
  return result;
}
twoSum(nums, target);
