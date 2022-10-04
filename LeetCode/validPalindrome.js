// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

function isPalindrome(s) {
  // Sanitize input string
  s = s.toLowerCase().replace(/[\W_]/g, "");

  // Create a left & right pointer, initially at start & end of input string
  let left = 0;
  let right = s.length - 1;

  // While Left less than Right
  while (left < right) {
    // If chars at Left & Right Pointer are not equal, return false
    if (s[left] !== s[right]) {
      return false;
    }

    // move left & right indices by one, in each direction
    left++;
    right--;
  }

  // Return true
  return true;
}
isPalindrome();
