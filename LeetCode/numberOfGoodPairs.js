// 1512. Number of Good Pairs
// https://leetcode.com/problems/number-of-good-pairs/

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

function numIdenticalPairs(nums) {
  // Solution using nested for loops
  let pairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) pairs++;
    }
  }
  return pairs;

  // Solution 1 using Hash Table
  let pairs = 0;
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    if (hash[key] !== undefined) {
      pairs += hash[key];
      hash[key]++;
    } else hash[key] = 1;
  }
  return pairs;

  // Solution 2 using Hash Table
  let map = {};
  let pairs = 0;

  for (let number of nums) {
    if (map[number]) {
      pairs += map[number];
      map[number] += 1;
    } else map[number] = 1;
  }
  return pairs;
}
numIdenticalPairs([1, 2, 3, 1, 1, 3]); // expects 4
numIdenticalPairs([1, 1, 1, 1]); // expects 6
numIdenticalPairs([1, 2, 3]); // expects 0
