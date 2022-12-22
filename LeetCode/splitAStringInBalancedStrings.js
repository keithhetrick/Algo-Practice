// 1221. Split a String in Balanced Strings
// https://leetcode.com/problems/split-a-string-in-balanced-strings/

var balancedStringSplit = function (s) {
  let count = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      result++;
    }
  }
  return result;
};
balancedStringSplit("RLRRLLRLRL"); // expects 4
balancedStringSplit("RLRRRLLRLL"); // expects 2
balancedStringSplit("LLLLRRRR"); // expects 1
