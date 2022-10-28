// Arrays To Do 2

// Reverse

// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second  array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverse(arr) {
  // Without using built-in function
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;

  // Using built-in function
  return arr.reverse();
}
reverse([1, 3, 5]); // expects [5,3,1]

// Rotate

// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.

function rotateArr(arr, shiftBy) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[(i + shiftBy) % arr.length] = arr[i];
  }
  return newArr;
}
rotateArr([1, 2, 3], 1); // expects [3,1,2]

// Filter Range

// Alan is good at breaking secret codes. One tool is to eliminate values that lie within a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr, min, max) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= min && arr[i] <= max) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
filterRange([1, 2, 3, 4, 5, 6], 2, 4); // expects [2,3,4]

// Concat

// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function arrConcat(arr1, arr2) {
  // Without using built-in function
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }
  return newArr;

  // Using built-in function
  return arr1.concat(arr2);
}
arrConcat(["a", "b"], [1, 2]); // expects ['a','b',1,2]
arrConcat([1, 2], [3, 4]); // expects [1,2,3,4]
