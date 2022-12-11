// 2185. Counting Words With a Given Prefix
// https://leetcode.com/problems/counting-words-with-a-given-prefix/

var prefixCount = function (words, pref) {
  // Solution using hashmap
  let hashmap = {};
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if (hashmap[words[i]] === undefined || null) {
      hashmap[words[i]] = 1;
    } else hashmap[words[i]]++;
  }

  for (let key in hashmap) {
    if (key.startsWith(pref)) {
      count += hashmap[key];
    }
  }
  return count;

  // Solution using for loop
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(pref)) {
      count++;
    }
  }
  console.log("count: ", count);
  return count;
};
prefixCount(["pay", "attention", "practice", "attend"], "at"); // expects 2
prefixCount(["leetcode", "win", "loops", "success"], "code"); // expects 0
