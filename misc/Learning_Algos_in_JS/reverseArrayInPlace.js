// Reverse Array In Place

// Be sure to manipulate the array passed in
// Do NOT push elements into a new array and return that array
// Do not use array.reverse() method

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  return arr;
}
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6])); // [ 6, 5, 4, 3, 2, 1 ]
