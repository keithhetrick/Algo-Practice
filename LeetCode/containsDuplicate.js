// 217. Contains Duplicate
// Path: LeetCode/containsDuplicate.js

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

function containsDuplicate(nums) {
  let set = new Set(nums);
  return set.size !== nums.length;
}
containsDuplicate([1, 2, 3, 1]); // expects true
containsDuplicate([1, 2, 3, 4]); // expects false
containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]); // expects true
