// Sub Array Division

// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Example

// s = [2,2,1,3,2]
// d = 4
// m = 2

// Lily wants to find segments summing to Ron's birth day, d=4 with a length equalling his birth month, m=2. In this case, there are two segments meeting her criteria: [2,2] and [1,3].

// Function Description

// Complete the birthday function in the editor below.

// birthday has the following parameter(s):

// int s[n]: the numbers on each of the squares of chocolate
// int d: Ron's birth day
// int m: Ron's birth month
// Returns

// int: the number of ways the bar can be divided
// Input Format

// The first line contains an integer n, the number of squares in the chocolate bar.
// The second line contains n space-separated integers s[i], the numbers on the chocolate squares where 0 ≤ i < n.
// The third line contains two space-separated integers, d and m, Ron's birth day and his birth month.

function birthday(s, d, m) {
  let count = 0;

  const reducer = (a, b) => a + b;
  for (let i = 0; i < s.length - m + 1; i++) {
    if (s.slice(i, i + m).reduce(reducer) === d) count++;
  }
  return count;
}
birthday([2, 2, 1, 3, 2], 4, 2); // expects 2
birthday([1, 2, 1, 3, 2], 3, 2); // expects 2
birthday([1, 1, 1, 1, 1, 1], 3, 2); // expects 0
birthday([4], 4, 1); // expects 1
birthday([1, 2, 1, 3, 2], 3, 2); // expects 2
birthday([1, 1, 1, 1, 1, 1], 3, 2); // expects 0
birthday([12, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7); // expects 3
birthday([4, 5, 4, 2, 4, 5, 2, 3, 2, 1, 1, 5, 4], 15, 4); // expects 3
birthday([5, 2, 2, 1, 5, 3, 2], 9, 3); // expects 2
birthday(
  [
    2, 3, 4, 4, 2, 1, 2, 5, 3, 4, 4, 3, 4, 1, 3, 5, 4, 5, 3, 1, 1, 5, 4, 3, 5,
    3, 5, 3, 4, 4, 2, 4, 5, 2, 3, 2, 5, 3, 4, 2, 4, 3, 3, 4, 3, 5, 2, 5, 1, 3,
    1, 4, 2, 2, 4, 3, 3, 3, 3, 4, 1, 1, 4, 3, 1, 5, 2, 5, 1, 3, 5, 4, 3, 3, 1,
    5, 3, 3, 3, 4, 5, 2,
  ],
  26,
  8
); // expects 16
