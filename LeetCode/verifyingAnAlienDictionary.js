// 953. Verifying an Alien Dictionary
// https://leetcode.com/problems/verifying-an-alien-dictionary/

var isAlienSorted = function (words, order) {
  let isTrue = true;
  for (let i = 0; i < words.length - 1; i++) {
    let word1 = words[i];
    let word2 = words[i + 1];
    let multipleWordsLength = Math.min(word1.length, word2.length);
    for (let j = 0; j < multipleWordsLength; j++) {
      if (word1[j] !== word2[j]) {
        if (order.indexOf(word1[j]) > order.indexOf(word2[j])) {
          isTrue = false;
          return isTrue;
        }
        break;
      }
      if (j === multipleWordsLength - 1 && word1.length > word2.length) {
        isTrue = false;
        return isTrue;
      }
    }
  }
  return isTrue;
};

// console.log("FINALE TRUE: " + isTrue);
// return isTrue;
// solution using nested for loop
// let isTrue = false;
// let compareArr = [];
// for (let i = 0; i < words.length; i++) {
//   console.log("ORDER[i]: " + order[i]);
//   for (let j = i; j < words.length; j++) {
//     console.log("WORDS[i][j]: " + words[i][j]);
//     if (order[i] === words[i][j]) {
//       isTrue = true;
//       compareArr.push(words[i][j]);
//       console.log("COMPARE ARRAY: " + compareArr);
//     }
//     if (order[i] !== words[i][j]) isTrue = false;
//     console.log("isTrue: " + isTrue);
//     if (isTrue === false) {
//       return isTrue;
//     }
//   }
// }
// console.log("FINALE: " + isTrue);
// return isTrue;
isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"); // expects true
isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"); // expects false
isAlienSorted(["apple", "app"], "abcdefghijklmnopqrstuvwxyz"); // expects false
