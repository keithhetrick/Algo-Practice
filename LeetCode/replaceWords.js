// 648. Replace Words
// https://leetcode.com/problems/replace-words/

var replaceWords = function (dictionary, sentence) {
  dictionary = dictionary.sort((a, b) => a.length - b.length);

  let sentenceArray = sentence.split(" ");

  for (let i = 0; i < sentenceArray.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      let sentenceArrayWord = sentenceArray[i].slice(0, dictionary[j].length);

      if (sentenceArrayWord == dictionary[j]) {
        sentenceArray[i] = dictionary[j];
      }
    }
  }
  console.log(sentenceArray.join(" "));
  return sentenceArray.join(" ");
};
replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery"); // expects "the cat was rat by the bat"
replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"); // expects "a a b c"
