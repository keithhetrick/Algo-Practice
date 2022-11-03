// 278. First Bad Version
// https://leetcode.com/problems/first-bad-version/

function solution(isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) right = mid;
      else left = mid + 1;
    }
    return left;
  };
}
solution(5);
