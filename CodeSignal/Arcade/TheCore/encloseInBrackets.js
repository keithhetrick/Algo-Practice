// 51. Enclose In Brackets
// https://app.codesignal.com/arcade/code-arcade/book-market/K2ieDm98sPDzzMepz

/*
 * Given a string, enclose it in round brackets.
 * Example:
 * For inputString = "abacaba", the output should be
 * solution(inputString) = "(abacaba)".
 *
 */

function solution(inputString) {
  console.log(`\nENCLOSED IN BRACKETS: (${inputString})`);
  return `(${inputString})`;
}
solution("abacaba"); // expects (abacaba)
solution("abcdef"); // expects (abcdef)
solution("aaad"); // expects (aaad)
solution("if"); // expects (if)
solution("it"); // expects (it)
solution("doesnt"); // expects (doesnt)
solution("challenge"); // expects (challenge)
solution("you"); // expects (you)
solution("itt"); // expects (itt)
solution("wont"); // expects (wont)
