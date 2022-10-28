// Arrays To Do 4

// Shuffle

// In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function?

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    let change = Math.floor(Math.random() * arr.length);

    let temp = arr[i];
    arr[i] = arr[change];
    arr[change] = temp;
  }
  return arr;
}
shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // expects random array order

// Remove Range

// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.

function removeRange(arr, start, end) {
  for (let i = start; i <= end; i++) {
    for (let j = i; j < arr.length - 1; j++) {
      arr[j] = arr[j + 1];
    }
    arr.pop();
  }
  return arr;
}
removeRange([20, 30, 40, 50, 60, 70], 2, 4); // expects [20,30,70]

// Intermediate Sums

// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6]

function intermediateSums(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if ((i + 1) % 10 === 0) {
      arr.splice(i + 1, 0, sum);
      sum = 0;
    }
  }
  if (arr.length % 10 !== 0) {
    arr.push(sum);
  }
  return arr;
  //  [ 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 15, 1, 2, 1, 2, 6]
}
intermediateSums([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]); // expects [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6]

// Double Trouble

// Create a function that changes a given array to list each original element twice, retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].

function doubleTrouble(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    arr.splice(i, 0, arr[i]);
  }
  return arr;
}
doubleTrouble([4, "Ulysses", 42, false]); // expects [4,4,"Ulysses","Ulysses",42,42,false,false]

// Zip It

// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40].

// Second: combine the two arrays’ values into the first array, instead of into a new array. Much more fun!

function zipIt(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }
  for (let j = arr1.length; j < arr2.length; j++) {
    newArr.push(arr2[j]);
  }
  return newArr;
}
zipIt([1, 2], [10, 20, 30, 40]); // expects [1,10,2,20,30,40]
