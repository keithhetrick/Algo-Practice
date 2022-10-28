// Arrays To Do 3

// Remove Negatives

// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.

function removeNegatives(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      for (let j = i; j < arr.length - 1; j++) {
        arr[j] = arr[j + 1];
      }
      arr.pop();
      i--;
    }
  }
  return arr;
}
removeNegatives([1, -3, 5]); // expects [1,5]

// Second-to-Last

// Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". If array is too short, return null.

function secondToLast(arr) {
  if (arr.length < 2) {
    return null;
  }
  return arr[arr.length - 2];
}
secondToLast([42, true, 4, "Kate", 7]); // expects "Kate"

// Second-Largest

// Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. If the array is too short, return null.

function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }
  let max = arr[0];
  let second = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
}
secondLargest([42, 1, 4, Math.PI, 7]); // expects 7

// Nth-to-Last

// Return the element that is N-from-array's-end. Given ([5,2,3,6,4,9,7],3), return 4. If the array is too short, return null.

function nthToLast(arr, n) {
  if (arr.length < n) {
    return null;
  }
  return arr[arr.length - n];
}
nthToLast([5, 2, 3, 6, 4, 9, 7], 3); // expects 4

// Nth-Largest

// Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth-largest element, where (N-1) elements are larger. Return null if needed.

function nthLargest(arr, n) {
  if (arr.length < n) {
    return null;
  }
  for (let i = 0; i < n; i++) {
    let max = arr[i];
    let maxIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
        maxIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = max;
    arr[maxIndex] = temp;
  }
  return arr[n - 1];
}
nthLargest([42, 1, 4, Math.PI, 7], 3); // expects 4

// Skyline Heights

// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1,7,3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high (hidden behind the 7-story). You are situated at street level. Return array containing heights of buildings you can see, in order. Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

function rotateArr(arr, shiftBy) {
  for (let i = 0; i < shiftBy; i++) {
    let temp = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = temp;
  }
  return arr;
}
rotateArr([1, 2, 3], 1); // expects [3,1,2]
