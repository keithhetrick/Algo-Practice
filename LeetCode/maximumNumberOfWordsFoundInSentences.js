// 2114. Maximum Number of Words Found in Sentences
// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/description/

/*
 * A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
 * You are given an array of strings sentences, where each sentences[i] represents a single sentence.
 * Return the maximum number of words that appear in a single sentence.
 */

var mostWordsFound = function (sentences) {
  let wordCounter = 0;

  for (let sentence of sentences) {
    let words = sentence.split(" ");
    wordCounter = Math.max(wordCounter, words.length);
  }
  return console.log(wordCounter);
};
mostWordsFound([
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
]); // expects 6
mostWordsFound(["please wait", "continue to fight", "continue to win"]); // expects 3
