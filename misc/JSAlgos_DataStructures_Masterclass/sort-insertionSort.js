// Insertion Sort

// Build up the sort by gradually creating a larger left half which is always sorted

// Start by picking the second element in the array
// Now compare the second element with the one before it & swap if necessary
// Continue to the next element and if it is in the incorrect order, iterate thru the sorted portion(i.e. the left side) to place the element in the correct place
// Repeat until the array is sorted

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
      arr[j + 1] = arr[j];
      arr[j] = current;
    }
  }
  return arr;
}
insertionSort([2, 1, 9, 76, 4]);
insertionSort([1, 2, 3, 4, -1]);
