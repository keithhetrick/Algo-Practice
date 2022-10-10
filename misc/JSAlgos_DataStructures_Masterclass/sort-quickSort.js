// Quick Sort

// Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
// Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
// Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

// It will help to accept three arguements: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable(this will keep track of where the pivot should end up)
// Loop through the array from the start until the end
// If the pivot is greater than the current element, increment the pivot index variable & then swap the current element with the element at the pivot index
// Swap the starting element (i.e. the pivot) with the pivot index
// Return the pivot index

// Call the pivot helper on the array
// When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index
// Your base case occurs when you consider a subarray with less than 2 elements

function pivot(arr, start = 0, end = arr.length + 1) {
  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
