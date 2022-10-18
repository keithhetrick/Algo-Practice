// Bubble Sort

// Brute Force, but less iterations thru loop
function bubbleSort(arr) {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    console.log("ONE PASS COMPLETE");
    if (noSwaps) break;
  }
  return arr;
}
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
