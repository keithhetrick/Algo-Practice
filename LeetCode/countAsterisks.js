// 2315. Count Asterisks
// https://leetcode.com/problems/count-asterisks/

var countAsterisks = function (s) {
  let counting = false;
  let totalStars = 0;
  let starsInsidePairs = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
      totalStars++;
      if (counting === true) starsInsidePairs++;
    }
    if (s[i] === "|") {
      counting === true ? (counting = false) : (counting = true);
    }
  }
  console.log(totalStars - starsInsidePairs);
  return totalStars - starsInsidePairs;
};
countAsterisks("l|*e*et|c**o|*de|"); // expects 2
countAsterisks("iamprogrammer"); // expects 0
countAsterisks("yo|uar|e**|b|e***au|tifu|l"); // expects 5
countAsterisks("a*b*c*d*e*f*g*h*i*j*k*l*m*n*o*p*q*r*s*t*u*v*w*x*y*z*"); // expects 26
countAsterisks("*||||**||*||**|**||*|||**"); // expects 8
