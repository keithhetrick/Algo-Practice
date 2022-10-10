// Merge Sort

// Combination of two things - merging & sorting
// Exploits the fact that arrays of 0 or 1 elemnt are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array

// In order to implement merge sort, its useful to first implement a function responsible for merging two sorted arrays
// Given two arrays which are sorted, this helper function should create a new array which is always sorted, and consists of all the elements in the two input arrays

// Create an empty array, take a look at the smallest values in each input array
// While there are still values we haven't looked at...
// if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
// Once we exhaust one array, push in all remaining values from the other array

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([10, 24, 76, 73]);
mergeSort([10, 24, 76, 73, 72, 1, 9]);
// console.log(merge([1, 10, 50], [2, 14, 99, 100]));
