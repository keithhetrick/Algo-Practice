// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

function climbStairs(n) {
  let a = 1;
  let b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];

  return b;
}
climbStairs(2); // expects 2
climbStairs(3); // expects 3
