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
findLongestWordLength("The quick brown fox jumped over the lazy dog"); // expects 6
findLongestWordLength("May the force be with you"); // expects 5
findLongestWordLength("Google do a barrel roll"); // expects 6
findLongestWordLength(
  "What is the average airspeed velocity of an unladen swallow"
); // expects 8
findLongestWordLength(
  "What if we try a super-long word such as otorhinolaryngology"
); // expects 19
