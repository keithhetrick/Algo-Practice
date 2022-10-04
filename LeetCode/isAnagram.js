// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sCharCounts = {};

  // Fill sCharCounts
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    sCharCounts[sChar] = sCharCounts[sChar] + 1 || 1;
  }

  for (let i = 0; i < t.length; i++) {
    const tChar = t[i];

    if (!sCharCounts[tChar]) {
      return false;
    } else {
      sCharCounts[tChar]--;
    }
  }

  return true;
}
isAnagram();
