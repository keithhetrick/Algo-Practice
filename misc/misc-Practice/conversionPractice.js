function addAlternatingIndexes1(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}
addAlternatingIndexes1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function addAlternatingIndexes2(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 3) {
    newArr.push(arr[i]);
  }
  return newArr;
}
addAlternatingIndexes2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function addAlternatingIndexes3(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 3) {
    let result = Math.floor(arr[i] / 2);
    newArr.push(arr[result]);
  }
  return newArr;
}
addAlternatingIndexes3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log("Current sum is: " + 100 / 1000);

function printFactorial(n) {
  let newArr = [];
  for (let i = 0; i < n; i++) newArr.push(i * i);
  return newArr;
}
printFactorial(17);

function convertToString(n) {
  return n.toString();
}
convertToString(111);

function convertToStringAndReverse(n) {
  // return n.toString().split("").reverse().join("")
}
convertToStringAndReverse([12, 23, 34, 45, 56, 67, 78, 89, 90]);

function convertToStringAndRemoveSpace(n) {
  return n.toString().replace(/,/g, "").split("").reverse().join("");
}
convertToStringAndRemoveSpace([12, 23, 34, 45, 56, 67, 78, 89, 90]);

function convertToStringAndReplace(n) {
  return n.toString().replace(45, 100);
}
convertToStringAndReplace([12, 23, 34, 45, 56, 67, 78, 89, 90]);

function convertToStringReverseArrayAndConvertToNumber(n) {
  arr = [];
  let reverse = n.toString().replace(/,/g, "").split("").reverse().join("");
  for (let i = 0; i < reverse.length; i++) {
    // Few ways to convert string to number
    // arr.push(Number(reverse[i]));
    // arr.push(parseInt(reverse[i]));
    // arr.push(+reverse[i]);
    // arr.push(~~reverse[i]);
    // arr.push(parseFloat(reverse[i]));
  }
  return arr;
}
convertToStringReverseArrayAndConvertToNumber([
  12, 23, 34, 45, 56, 67, 78, 89, 90,
]);

function generateRandomNumbersArray(n) {
  let newArr = [];

  for (let i = 0; i <= n; i++) {
    let result = Math.floor(Math.random() * n);

    if (i <= n) newArr.push(result);
  }
  return newArr;
}
generateRandomNumbersArray(15);

function generateRandomNumbersAndSum(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    let result = Math.floor(Math.random() * n);
    let currentSum = result;

    if (i <= n) result = currentSum + result;
    console.log(sum);
    sum += result;
  }
  return sum;
}
generateRandomNumbersAndSum(15);

function convertArrayToStringAndBackToArray(arr) {
  let newArr = [];
  let result = arr.toString().split(",");

  for (let i = 0; i < result.length; i++) newArr.push(+result[i]);
  return newArr;
}
convertArrayToStringAndBackToArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function convertArrayToStringReverseAndBackToArray(arr) {
  let newArr = [];
  let result = arr.toString().split(",").reverse();

  for (let i = 0; i < result.length; i++) newArr.push(+result[i]);
  return newArr;
}
convertArrayToStringReverseAndBackToArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function reverseArray(arr) {
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) newArr.push(arr[i]);
  return newArr;
}
reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function reverseArrayAndConcat(arr) {
  let reverseArr = [];

  for (let i = arr.length - 1; i >= 0; i--) reverseArr.push(arr[i]);
  return arr.concat(reverseArr);
}
reverseArrayAndConcat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function reverseArrayAndMultiplySumIndexes(arr) {
  let reverseArr = arr.reverse();
  let sum = 0;

  for (let i = 0; i < reverseArr.length; i++)
    sum += reverseArr[i] * reverseArr[i];
  return sum;
}
reverseArrayAndMultiplySumIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function reverseArrayAndSubstitute(arr) {
  let reverseArr = arr.reverse();
  let str = reverseArr.toString().replace(/,/g, "");
  const replaced = str.replace(/[0-9]/g, "_");
  let newArr = [];

  for (let i = 0; i < replaced.length; i++) {
    newArr.push(replaced[i] + arr[i]);
  }
  return newArr;
}
reverseArrayAndSubstitute([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function array_element_replace(arr, old_value, new_value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === old_value) {
      arr[i] = new_value;
    }
  }
  return arr;
}
num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log(`Original Array: ${num}`);
console.log(array_element_replace(num, 2, 5));

function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("aeiou");

function confirmEnding(str, target) {
  // One Liner Solution 1
  return str.includes(target);

  // One Liner Solution 2
  return str.slice(str.length - target.length) === target;
}
confirmEnding("Bastian", "n"); // expects true
confirmEnding("Congratulation", "on"); // expects true
confirmEnding("Connor", "n"); // expects false
confirmEnding(
  "Walking on water and developing software from a specification are easy if both are frozen",
  "specification"
); // expects false
confirmEnding("He has to give me a new name", "name"); // expects true
confirmEnding("Open sesame", "same"); // expects true
confirmEnding("Open sesame", "sage"); // expects false
confirmEnding("Open sesame", "game"); // expects false
confirmEnding(
  "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing",
  "mountain"
); // expects false
confirmEnding("Abstraction", "action"); // expects
