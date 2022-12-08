// 1748. Sum of Unique Elements
// https://leetcode.com/problems/sum-of-unique-elements/

var sumOfUnique = function (nums) {
  const map = {};
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else map[nums[i]]++;
  }

  for (let key in map) {
    if (map[key] === 1) sum += +key;
  }
  console.log(sum);
  return sum;
};
sumOfUnique([1, 2, 3, 2]); // expects 4
sumOfUnique([1, 1, 1, 1, 1]); // expects 0
sumOfUnique([1, 2, 3, 4, 5]); // expects 15
