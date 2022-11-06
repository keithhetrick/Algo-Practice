// Repeat a String Repeat a String
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string

function repeatStringNumTimes(str, num) {
  let newStr = "";

  for (let i = 0; i < num; i++) newStr += str;
  if (num <= 0) return newStr;
  return newStr;
}
repeatStringNumTimes("*", 3); // expects ***
repeatStringNumTimes("abc", 3); // expects abcabcabc
repeatStringNumTimes("abc", 4); // expects abcabcabcabc
repeatStringNumTimes("abc", 1); // expects abc
repeatStringNumTimes("*", 8); // expects ********
repeatStringNumTimes("abc", -2); // expects ""
repeatStringNumTimes("abc", 0); // expects ""
