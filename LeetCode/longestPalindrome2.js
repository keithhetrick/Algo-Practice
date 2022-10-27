// 409. Longest Palindrome
// https://leetcode.com/problems/longest-palindrome/

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

function longestPalindrome(s) {
  let count = 0;
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      count += 2;
      set.delete(s[i]);
    } else {
      set.add(s[i]);
    }
  }
  return count + (set.size > 0 ? 1 : 0);
}
longestPalindrome("abccccdd"); // expects 7
longestPalindrome("a"); // expects 1
