// 68. All Longest Strings
// https://app.codesignal.com/arcade/code-arcade/well-of-integration/fzsCQGYbxaEcTr2bL

/*
Given an array of strings, return another array containing all of its longest strings.
Example
For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
solution(inputArray) = ["aba", "vcd", "aba"]
*/

function solution(inputArray) {
  let longest = 0;
  let longestStrings = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longest) {
      longest = inputArray[i].length;
    }
  }
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length === longest) {
      longestStrings.push(inputArray[i]);
    }
  }
  console.log("\nARRAY OF LONGEST STRING: ", longestStrings);
  return longestStrings;
}
solution(["aba", "aa", "ad", "vcd", "aba"]); // expects ["aba", "vcd", "aba"]
solution(["aa"]); // expects ["aa"] // expects ["aa"]
solution(["abc", "eeee", "abcd", "dcd"]); // expects ["eeee", "abcd"]
solution(["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]); // expects ["zzzzzz", "abcdef", "aaaaaa"]
solution(["enyky", "benyky", "yely", "varennyky"]); // expects ["varennyky"]
solution(["abacaba", "abacab", "abac", "xxxxxx"]); // expects ["abacaba"]
solution([
  "young",
  "yooooooung",
  "hot",
  "or",
  "not",
  "come",
  "on",
  "fire",
  "water",
  "watermelon",
]); // expects ["yooooooung", "watermelon"]
solution(["onsfnib", "aokbcwthc", "jrfcw"]); // expects ["aokbcwthc"]
solution(["lbgwyqkry"]); // expects ["lbgwyqkry"]
solution(["i"]); // expects ["i"]
