// 648. Replace Words
// https://leetcode.com/problems/replace-words/

var replaceWords = function (dictionary, sentence) {
  dictionary = dictionary.sort((a, b) => a.length - b.length);
  // console.log(dictionary)
  let sentenceArray = sentence.split(" ");
  // console.log(sentenceArray)
  for (let i = 0; i < sentenceArray.length; i++) {
    for (let j = 0; j < dictionary.length; j++) {
      // console.log(dictionary[j].length)
      let sentenceArrayWord = sentenceArray[i].slice(0, dictionary[j].length);
      // console.log(sentenceArrayWord)
      // if(sentenceArray[i].includes(dictionary[j])){
      if (sentenceArrayWord == dictionary[j]) {
        // console.log("true", sentenceArray[i], dictionary[j])
        sentenceArray[i] = dictionary[j];
      }
    }
  }
  // console.log(sentenceArray.join(' '))
  return sentenceArray.join(" ");
};
replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery"); // expects "the cat was rat by the bat"
replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"); // expects "a a b c"
