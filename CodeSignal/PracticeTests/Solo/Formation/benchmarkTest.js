function upAndRunning() {
  console.log("\n We're up and running!\n\nHere we goooooo 🚀\n");
}
upAndRunning();

// Write a function that returns true if either arg1 or arg2 is odd, and false otherwise.

/*
function solution(arg1, arg2) {
  // Your code here
  if (arg1 % 2 === 1 || arg2 % 2 === 1) {
    return true;
  } else {
    return false;
  }
}
solution(1, 1);
*/

/*
// Write the function solution which takes an array of integers as input and returns true if all of the values in the array have the same value, and false otherwise.
// Examples:
// [1, 1] returns true
// [1, 2, 3] returns false
// Clarifications:
// An empty array is considered a unival array
// An array with only one value is considered a unival array

function solution(input) {
  // Your code here
  let firstItem = input[0];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== firstItem) {
      return false;
    }
  }
  return true;
}
solution[(1, 2, 3)];
*/

/*
// Reverse a string using reverse() method

function revStr(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}
*/

// Write the function solution which takes an integer as input and returns the sum of all the digits using split() method
function solution(input) {
  // Your code here
  let sum = 0;
  let str = input.toString();
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return sum;
}

function solution(input) {
  // Your code here
  let sum = 0;
  let str = input.toString();
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  return sum;
}

// Examples:

// 2 -> 2
// 123 -> 6 (1 + 2 + 3)
// 1357 -> 16 (1 + 3 + 5 + 7)

input = 15;
output = (Math.ceil(input / 2) % 5) * 2;
console.log(output);

/*
// Return true if and only if num is a prime number.

// A prime number is a positive integer greater than 1 that is only evenly divisible by 1 and itself:
// Prime numbers: 2, 3, 5, 7, 11, ...
// Not prime numbers: 1, 4, 6, 8, 9, 10, ...
function isPrime(num) {
  // Your code here
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
*/

/*
// Check if the given string is a correct time representation of the 24-hour clock.
function solution(time) {
  // Your code here
  let splitTime = time.split(":");
  let hour = parseInt(splitTime[0]);
  let minute = parseInt(splitTime[1]);
  if (hour > 23 || hour < 0 || minute > 59 || minute < 0) {
    return false;
  }
  return true;
}
*/

// Example

// For time = "13:58", the output should be
// solution(time) = true;
// For time = "25:51", the output should be
// solution(time) = false;
// For time = "02:76", the output should be
// solution(time) = false.

// Write the function solution which takes a matrix of integers and creates an array out of it in a zigzag fashion. This means traversing the first row forwards, the second row backwards, and alternating until the last row.
function solution(arg1) {
  // Your code here
  let arr = [];
  for (let i = 0; i < arg1.length; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < arg1[i].length; j++) {
        arr.push(arg1[i][j]);
      }
    } else {
      for (let j = arg1[i].length - 1; j >= 0; j--) {
        arr.push(arg1[i][j]);
      }
    }
  }
  console.log("\nMATRIX: ", arr, "\n");
  return arr;
}
solution([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

// Example:
