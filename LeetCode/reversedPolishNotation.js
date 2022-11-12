// ReveresedPolishNotation
// https://leetcode.com/problems/evaluate-reverse-polish-notation/

function rpn(tokens) {
  let stack = [];
  let operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => parseInt(a / b),
  };

  for (let token of tokens) {
    if (token in operators) {
      let b = stack.pop();
      let a = stack.pop();
      stack.push(operators[token](a, b));
    } else stack.push(parseInt(token));
  }
  return stack.pop();
}
rpn(["2", "1", "+", "3", "*"]); // expects 9
rpn(["4", "13", "5", "/", "+"]); // expects 6
rpn(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]); // expects 22
