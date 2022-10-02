// Remove Blanks
function removeBlanks1() {
  let text = "Pl ayTha tF u nkyM usi c";
  let result = text.replace(/\s/g, "");
  console.log(result);
}
removeBlanks1();
// Expected result: PlayThatFunkyMusic

function removeBlanks2() {
  let text = "I can not BELIEVE it's not BUTTER";
  let result = text.replace(/\s/g, "");
  console.log(result);
}
removeBlanks2();
// Expected result: IcannotBELIEVEit'snotBUTTER

// Get Digits
function getDigits1() {
  let string1 = "abc8c0d1ngd0j0!8";
  let reg = /\d+/g;
  let result1 = string1.match(reg);
  console.log(result1);
}
getDigits1();
// Expected result: [ '8', '0', '1', '0', '0', '8' ]

function getDigits2() {
  let string2 = "0s1a3y5w7h9a2t4?6!8?0";
  let reg = /\d+/g;
  let result2 = string2.match(reg);
  console.log(result2);
}
getDigits2();
// Expected result:  [ '0', '1', '3', '5', '7', '9', '2', '4', '6', '8', '0' ]

//  Acronyms
function getFirstLetters(str) {
  const firstLetters = str
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  return firstLetters;
}
console.log(getFirstLetters(" there's no free lunch - gotta pay yer way."));
// Expected result: TNFL-GPYW
console.log(getFirstLetters("Live from New York, it's Saturday Night!"));
// Expected result: LFNYISN

// Count Non-Spaces
function countNonSpaces1() {
  let str1 = "Honey pie, you are driving me crazy";
  console.log(str1.trim().length);
}
countNonSpaces1();

function countNonSpaces2() {
  let str2 = "Hello world!";
  console.log(str2.trim().length);
}
countNonSpaces2();

// Remove Shorter Strings
function removeShorterStrings1() {
  let arr1 = ["Good morning", "sunshine", "the", "Earth", "says", "hello"];
  let newArr1 = arr1.splice(2, 1, "");
  return arr1;
}
removeShorterStrings1();
console.log(removeShorterStrings1());
// Expected result: [ 'Good morning', 'sunshine', '', 'Earth', 'says', 'hello' ]

function removeShorterStrings2() {
  let arr2 = ["There", "is", "a", "bug", "in", "the", "system"];
  let newArr2 = arr2.splice(1, 2, "");
  return arr2;
}
removeShorterStrings2();
console.log(removeShorterStrings2());
// Expected result: [ 'There', '', 'bug', 'in', 'the', 'system' ]
