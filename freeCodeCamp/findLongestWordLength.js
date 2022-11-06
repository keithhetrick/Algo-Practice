// Find the Longest Word in a String
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

function findLongestWordLength(str) {
  let words = str.split(" ");
  let longestWord = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord) longestWord = words[i].length;
  }
  return longestWord;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
