// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

const isSubsequence = (s, t) => {
  let hashmap = {};

  for (let i = 0; i < t.length; i++) {
    if (t[i] in hashmap) {
      hashmap[t[i]].push(i);
    } else {
      hashmap[t[i]] = [i];
    }
  }
  let prev = -1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] in hashmap) {
      let index = hashmap[s[i]].find((idx) => idx > prev);
      if (index === undefined) {
        return false;
      }
      prev = index;
    } else {
      return false;
    }
  }
  return true;
};
isSubsequence("abc", "ahbgdc"); // expects true
isSubsequence("axc", "ahbgdc"); // expects false
