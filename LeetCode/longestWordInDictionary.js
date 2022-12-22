// 720. Longest Word in Dictionary
// https://leetcode.com/problems/longest-word-in-dictionary/

var longestWord = function (words) {
  words.sort((a, b) => b.length - a.length);
  let newArr = [];

  for (let i = 0; i < words.length; i++) {
    newArr.push(words[i]);
    let letters = [];

    for (let j = 0; j < words[i].length - 1; j++) {
      letters.push(words[i][j]);
      console.log(letters);
    }
  }

  // console.log(newArr);
};
longestWord(["w", "wo", "wor", "worl", "world"]); // expects "world"
// longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]); // expects "apple"
