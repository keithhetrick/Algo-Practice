// 748. Shortest Completing Word
// https://leetcode.com/problems/shortest-completing-word/

var shortestCompletingWord = function (licensePlate, words) {
  words.sort((a, b) => a.length - b.length);

  let str = licensePlate.split(" ").join("").toLowerCase();
  let letterStr = str.replace(/[0-9]/g, "");
  let maxLength = 0;
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let matchArr = [];
    let testStr = letterStr;

    for (let j = 0; j < words[i].length; j++) {
      if (letterStr.includes(words[i][j])) {
        matchArr.push(words[i][j]);
        index = testStr.indexOf(words[i][j]);
        testStr = testStr.slice(0, index) + testStr.slice(index + 1);
        console.log("TEST STRING: " + testStr);
      }
    }
    if (matchArr.length > maxLength) {
      maxLength = matchArr.length;
      console.log("MAX LENGTH: " + maxLength);
      result = words[i];
    }
    //   if (count > maxCount) {
    //     maxCount = count;
    //     word = words[j];
    // }
  }
  console.log("RESULT: " + result);
  return result;
};
// shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"]); // expects "steps"
// shortestCompletingWord("1s3 456", ["looks", "pest", "stew", "show"]); // expects "pest"
// shortestCompletingWord("Ah71752", [
//   "suggest",
//   "letter",
//   "of",
//   "husband",
//   "easy",
//   "education",
//   "drug",
//   "prevent",
//   "writer",
//   "old",
// ]); // expects "husband"
shortestCompletingWord("TE73696", [
  "ten",
  "two",
  "better",
  "talk",
  "suddenly",
  "stand",
  "protect",
  "collection",
  "about",
  "southern",
]); // expects "southern"
