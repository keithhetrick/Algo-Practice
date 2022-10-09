// Merge Sort

function mergeSort(arr) {
  // take in a single, unsorted array as a parameter
  // split the array into two halves

  if (arr.length < 2) return arr;

  let middleIndex = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, middleIndex);
  let secondHalf = arr.slice(middleIndex);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2) {
  // takes in two sorted arrays as parameters
  // merges those sorted arrays into one sorted array
  // returns one sorted array

  let result = [];
  while (arr1.length && arr2.length) {
    let minElement;
    if (arr1[0] < arr2[0]) minElement = arr1.shift();
    else minElement = arr2.shift();
    result.push(minElement);
  }

  if (arr1.length) result = result.concat(arr1);
  else result = result.concat(arr2);
  return result;
}

console.log(mergeSort([4, 3, 2, 1]));
console.log(mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]));
console.log(mergeSort([100, -20, 40, -30, 16, -100, -101]));
