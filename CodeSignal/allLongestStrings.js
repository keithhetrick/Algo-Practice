// 9. All Longest Strings
// https://app.codesignal.com/arcade/intro/level-3/fzsCQGYbxaEcTr2bL

function solution(inputArray) {
  let longest = 0;
  let longestStrings = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i].length > longest) longest = inputArray[i].length;
  }
  for (let j = 0; j < inputArray.length; j++) {
    if (inputArray[j].length === longest) longestStrings.push(inputArray[j]);
  }

  return longestStrings;
}
solution(["aba", "aa", "ad", "vcd", "aba"]); // expects ["aba", "vcd", "aba"]
solution(["aa"]); // expects ["aa"]
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
solution([
  "i",
  "g",
  "y",
  "d",
  "l",
  "q",
  "n",
  "h",
  "a",
  "w",
  "o",
  "t",
  "m",
  "j",
  "u",
  "v",
  "b",
  "e",
  "k",
  "x",
  "s",
  "r",
  "p",
  "c",
  "z",
  "f",
]); // expects ["a", "w", "o", "t", "m", "j", "u", "v", "b", "e", "k", "x", "s", "r", "p", "c", "z", "f"]
solution(["i"]); // expects ["i"]
