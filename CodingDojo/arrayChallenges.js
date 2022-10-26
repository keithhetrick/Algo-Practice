// Array Challenges

// 1. Always Hungry - Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

function alwaysHungry(arr) {
  let isHungry = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "food") {
      console.log("yummy");
      isHungry = false;
    }
  }
  if (isHungry) {
    console.log("I'm hungry");
  }
  return isHungry;
}
alwaysHungry([3.14, "food", "pie", true, "food"]); // expects "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]); // expects "I'm hungry"

// 2. High Pass Filter - Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

function highPass(arr, cutoff) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
highPass([6, 8, 3, 10, -2, 5, 9], 5); // expects [6, 8, 10, 9]

// 3. Better Than Average - Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > average) {
      count++;
    }
  }
  return count;
}
betterThanAverage([6, 8, 3, 10, -2, 5, 9]); // expects 4

// 4. Array Reverse - Write a function that will reverse the values an array and return them.

function reverse(arr) {
  let temp;
  for (let i = 0; i < arr.length / 2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
reverse([3, 1, 6, 4, 2]); // expects [2, 4, 6, 1, 3]

// 5. Fibonacci Array - Write a function that will return an array of Fibonacci numbers up to a given length n. Fibonacci numbers have the formula Fn = Fn-1 + Fn-2. For example if n = 4 the function should return [0, 1, 1, 2].

function fibonacciArray(n) {
  let fibonacci = [0, 1];
  for (let i = 2; i < n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  return fibonacci;
}
fibonacciArray(10); // expects [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
