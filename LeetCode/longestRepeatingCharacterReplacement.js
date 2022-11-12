// Longest Repeating Character Replacement

function characterReplacement(s, k) {
  // Solution 1
  let max = 0;
  let left = 0;
  let right = 0;
  let count = new Array(26).fill(0);

  while (right < s.length) {
    count[s[right].charCodeAt() - 65]++;
    max = Math.max(max, count[s[right].charCodeAt() - 65]);
    if (right - left + 1 - max > k) {
      count[s[left].charCodeAt() - 65]--;
      left++;
    }
    right++;
  }
  console.log(right - left);
  return right - left;

  // Solution using Sliding Window
  let left = 0;
  let right = 0;
  let maxCharCount = 0;
  const visited = {};

  while (right < s.length) {
    const char = s[right];
    visited[char] = visited[char] ? visited[char] + 1 : 1;

    if (visited[char] > maxCharCount) maxCharCount = visited[char];

    if (right - left + 1 - maxCharCount > k) {
      visited[s[left]]--;
      left++;
    }
    right++;
  }

  return right - left;
}
characterReplacement("AABABBA", 1); // expects 4
characterReplacement("ABAB", 2); // expects 4
characterReplacement("AABABBA", 2); // expects 5
characterReplacement("ABBB", 2); // expects 4
