// 5. Longest Palindromic Substring

//Given a string s, find the longest palindromic substring in s

// A string is called a palindrome string if the reverse of that string is the same as the original string.

// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

// Constraints:
// 1 <= s.length <= 1000
// s consist of only digits and English letters.

function longestPalindrome(s) {
  let startIndex = 0;
  let maxLength = 1;

  function expandAroundMiddle(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const currentPalLength = right - left + 1;
      if (currentPalLength > maxLength) {
        maxLength = currentPalLength;
        startIndex = left;
      }
      left -= 1;
      right += 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandAroundMiddle(i - 1, i + 1);
    expandAroundMiddle(i, i + 1);
  }
  let result = s.slice(startIndex, startIndex + maxLength);

  console.log(result);
  return result;
}
longestPalindrome("cbbd"); // expects "bb"
longestPalindrome("abba"); // expects "abba"
longestPalindrome("a"); // expects "a"
