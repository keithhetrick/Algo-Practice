// 1. Two Sum
// https://leetcode.com/problems/two-sum/

function twoSum(nums, target) {
  // Solution with nested for loop
  let newArr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) newArr.push(i, j);
    }
  }
  return newArr;

  // Solution using Hash Table
  let visited = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (visited[complement] !== undefined) return [visited[complement], i];

    visited[num] = i;
  }
}
twoSum([2, 7, 11, 15], 9); // expects [0,1]
twoSum([3, 2, 4], 6); // expects [1,2]
twoSum([3, 3], 6); // expects [0,1]
twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19); // expects [8,9]
twoSum([3, 5, 99, 13, 105, 7], 10); // expects [0,5]
