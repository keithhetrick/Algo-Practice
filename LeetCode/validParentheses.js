// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(s) {
  let stack = [];
  let map = { "(": ")", "{": "}", "[": "]" };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (map[char]) {
      stack.push(char);
    } else if (map[stack.pop()] !== char) {
      return false;
    }
  }

  return stack.length === 0;
}
isValid("()");
isValid("()[]{}");
isValid("(]");
