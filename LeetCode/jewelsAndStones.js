// 771. Jewels and Stones
// https://leetcode.com/problems/jewels-and-stones/

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

var numJewelsInStones = function (jewels, stones) {
  // Solution using Hash Table
  let hash = {};
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    let key = jewels[i];
    hash[key] = true;
  }
  for (let i = 0; i < stones.length; i++) {
    let key = stones[i];
    if (hash[key]) count++;
  }
  console.log(count);
  return count;

  // Solution using Set
  let set = new Set();
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    let key = jewels[i];
    set.add(key);
  }
  for (let i = 0; i < stones.length; i++) {
    let key = stones[i];
    if (set.has(key)) count++;
  }
  console.log(count);
  return count;

  // Solution using nested for loops
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    let key = stones[i];
    for (let j = 0; j < jewels.length; j++) {
      if (key === jewels[j]) count++;
    }
  }
  console.log(count);
  return count;

  // Solution using for loop and includes
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) count++;
  }
  console.log(count);
  return count;

  // Solution using pointers
  let count = 0;
  let i = 0;
  let j = 0;
  while (i < stones.length) {
    if (stones[i] === jewels[j]) {
      count++;
      j++;
    } else {
      i++;
      j = 0;
    }
  }
  console.log(count);
  return count;
};
numJewelsInStones("aA", "aAAbbbb"); // expects 3
numJewelsInStones("z", "ZZ"); // expects 0
numJewelsInStones("z", "ZZZ"); // expects 0
numJewelsInStones("z", "ZZZZ"); // expects 0
numJewelsInStones("y", "ZyyZ"); // expects 2
