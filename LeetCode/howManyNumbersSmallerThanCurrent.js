// 1365. How Many Numbers Are Smaller Than the Current Number
// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

let start = Date.now();

var smallerNumbersThanCurrent = function (nums) {
  // Solution using nested for loops
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] > nums[j]) count++;
    }
    result.push(count);
  }
  console.log(result);
  console.log("Perfomance: ", performance.now(), "ms");
  console.log("Time elapsed: ", Date.now() - start, "ms");
  return result;

  // // Solution using hash table
  let hash = {};
  let sorted = [...nums].sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    let key = sorted[i];
    if (!hash[key]) hash[key] = i;
  }
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    result.push(hash[key]);
  }
  console.log(result);
  console.log("Perfomance: ", performance.now(), "ms");
  console.log("Time elapsed: ", Date.now() - start, "ms");
  return result;

  // // Solution using sort and indexOf
  let sorted = [...nums].sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    result.push(sorted.indexOf(key));
  }
  console.log(result);
  console.log("Perfomance: ", performance.now(), "ms");
  console.log("Time elapsed: ", Date.now() - start, "ms");
  return result;

  // // Solution using sort and findIndex
  let sorted = [...nums].sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    result.push(sorted.findIndex((num) => num === key));
  }
  console.log(result);
  console.log("Perfomance: ", performance.now(), "ms");
  console.log("Time elapsed: ", Date.now() - start, "ms");
  return result;
};
smallerNumbersThanCurrent([8, 1, 2, 2, 3]); // expects [4,0,1,1,3]
smallerNumbersThanCurrent([6, 5, 4, 8]); // expects [2,1,0,3]
smallerNumbersThanCurrent([7, 7, 7, 7]); // expects [0,0,0,0]
