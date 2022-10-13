//  Century From Year

// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example
// For year = 1905, the output should be
// solution(year) = 20;
// For year = 1700, the output should be
// solution(year) = 17.

function solution(year) {
  let nearestCentury = Math.ceil(year / 100);
  return nearestCentury;
}
solution(1905); // expects 20
solution(1700); // expects 17
solution(1988); // expects 20
solution(2000); // expects 20
solution(2001); // expects 21
solution(200); // expects 2
solution(374); // expects 4
solution(45); // expects 1
solution(8); // expects 1
