let numbers = 01234;
let word = "word";

console.log(word.split(""));

const string = "hi there";

const usingSplit = string.split("");
const usingSpread = [...string];
const usingArrayFrom = Array.from(string);
const usingObjectAssign = Object.assign([], string);

console.log(usingSplit);
console.log(usingSpread);
console.log(usingArrayFrom);
console.log(usingObjectAssign);

const sentence = "The quick brown fox jumps over the lazy dog.";
const index = 4;
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// expected output: "The character at index 4 is q"

let num = 12345;
[...(num + "")]; //["1", "2", "3", "4", "5"]
[...(num + "")].map(Number);
return (num + "").split("").map((i) => {
  return Number(i);
});

const elements = ["Fire", "Air", "Water"];
const nums = [1, 2, 3, 4, 5, 6];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(""));
// expected output: "FireAirWater"

console.log(elements.join("-"));
// expected output: "Fire-Air-Water"

console.log(nums.join());
// expected output: 1,2,3,4,5,6

console.log(nums.join(""));
// expected output: 123456
