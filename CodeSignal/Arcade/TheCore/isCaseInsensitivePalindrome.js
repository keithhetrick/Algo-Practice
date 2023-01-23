//  54. Is Case-Insensitive Palindrome?
// https://app.codesignal.com/arcade/code-arcade/book-market/G9wj2j6zaWwFWsise

function solution(inputString) {
  let caseFixed = inputString.toLowerCase();
  let revStr = "";

  for (let i = caseFixed.length - 1; i >= 0; i--) {
    revStr += caseFixed[i];
  }
  console.log("\nIS CASE-INSENSITIVE PALINDROME? ", revStr === caseFixed);
  return revStr === caseFixed;
}
solution("AaBaa"); // expects true
solution("abac"); // expects false
solution("aBACaba"); // expects true
solution("opOP"); // expects false
solution("ZZzzazZzz"); // expects true
solution("zzzzazzzz"); // expects true
solution("ZZzzabzZzz"); // expects false
solution("abcdcbA"); // expects true
solution("abracabra"); // expects false
solution("abcd"); // expects false
