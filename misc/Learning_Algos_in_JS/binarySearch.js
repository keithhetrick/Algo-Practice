// Binary Search

// Search for a given value (key) inside of a list (numArray)
// Runs in O (logn) run time - very performant
// Can be written as a recursive function
// Recursive function will continue to call itself until its base case is satisfied

function binarySearch(numArray, key) {
  let middleIndex = Math.floor(numArray.length / 2);
  let middleElement = numArray[middleIndex];

  if (middleElement === key) return true;
  else if (middleElement < key && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  } else if (middleElement > key && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIndex), key);
  } else return false;
}
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 5));
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 15));

// Example of Recursive Function using Factorials

// Factorial (!)
// 4! = 4 * 3 * 2 * 1 = 24
// 3! = 3 * 2 * 1 = 6

function factorial(num) {
  // setting base case
  if (num === 1) return num;
  // set recursive case
  else return num * factorial(num - 1);
}
factorial(4);

// if calling factorial(4)
// num = 4
// return 4 * factorial(3)
// num = 3
// return 3 * factorial(2)
// num = 2
// return 2 * factorial(1)
// num = 1
// return 1
// After the loop os run,
// factorial(1) returns 1 * 1 = 1
// factorial(2) returns 2 * 1 = 2
// factorial(3) returns 3 * 2 = 6
// factorial(4) returns 6 * num = 24
