// 509. Fibonacci Number
// https://leetcode.com/problems/fibonacci-number/

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
fib(2); // expects 1
fib(3); // expects 2
fib(4); // expects 3
