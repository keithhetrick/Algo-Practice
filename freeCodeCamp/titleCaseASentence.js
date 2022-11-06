// Title Case a Sentence
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence

function titleCase(str) {
  // Solution without .map()
  let sentenceCap = [];
  let words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    sentenceCap.push(words[i].replace(words[i][0], words[i][0].toUpperCase()));
  }
  return sentenceCap.join(" ");

  // Solution without .map() or .replace()
  str = str.split(" ");

  for (i = 0; i < str.length; i++) {
    str[i] = str[i].toLowerCase().split("");
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join("");
  }
  return str.join(" ");

  // One-Liner Solution 1 - uses .map() method
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  // One-Liner Solution 2 - uses regex & .replace() method
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
titleCase("I'm a little tea pot"); // expects I'm A Little Tea Pot
titleCase("sHoRt AnD sToUt"); // expects Short And Stout
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // expects Here Is My Handle Here Is My Spout
