// 890. Find and Replace Pattern
// https://leetcode.com/problems/find-and-replace-pattern/

var findAndReplacePattern = function (words, pattern) {
  // Solution 1: Using Map
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const map = new Map();
    const set = new Set();
    let isMatch = true;
    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      const patternChar = pattern[j];
      if (map.has(patternChar)) {
        if (map.get(patternChar) !== char) {
          isMatch = false;
          break;
        }
      } else {
        if (set.has(char)) {
          isMatch = false;
          break;
        }
        map.set(patternChar, char);
        set.add(char);
      }
    }
    if (isMatch) result.push(word);
  }
  return result;

  // Solution 2 : Using Array & Hash Table
  let output = [];
  for (let i = 0; i < words.length; i++) {
    let h = {};
    let string = words[i];
    let matchIsTrue = true;
    let isUsedLetter = [];
    for (let j = 0; j < pattern.length; j++) {
      if (h[pattern[j]]) {
        if (h[pattern[j]] != string[j]) matchIsTrue = false;
      } else {
        if (isUsedLetter.includes(string[j])) {
          matchIsTrue = false;
        } else {
          h[pattern[j]] = string[j];
          isUsedLetter.push(string[j]);
        }
      }
    }
    if (matchIsTrue == true) output.push(string);
  }
  return output;
};

findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"); // expects ["mee","aqq"]
findAndReplacePattern(["a", "b", "c"], "a"); // expects ["a","b","c"]
