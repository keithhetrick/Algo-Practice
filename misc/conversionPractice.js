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
    arr.push(Number(reverse[i]));
    arr.push(parseInt(reverse[i]));
    arr.push(+reverse[i]);
    arr.push(~~reverse[i]);
    arr.push(parseFloat(reverse[i]));
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
