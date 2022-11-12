// 1512. Number of Good Pairs
// https://leetcode.com/problems/number-of-good-pairs/

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
