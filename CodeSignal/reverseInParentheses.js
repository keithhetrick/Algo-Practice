// 13. Reverse In Parentheses
// https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6

function solution(inputString) {
  while (inputString.includes("(")) {
    inputString = inputString.replace(/\(([^()]*)\)/g, (m, match) =>
      match.split("").reverse().join("")
    );
  }
  return inputString;
}
solution("(bar)"); // expects "rab"
solution("foo(bar)baz"); // expects "foorabbaz"
solution("foo(bar)baz(blim)"); // expects "foorabbazmilb"
solution("foo(bar(baz))blim"); // expects "foobazrabblim"
solution(""); // expects ""
solution("()"); // expects ""
solution("(abc)d(efg)"); // expects "cbadgfe"
