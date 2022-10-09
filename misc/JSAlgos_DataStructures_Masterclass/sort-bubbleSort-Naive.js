// Bubble Sort

// A sorting algorithm where the lasrgest values bubble up to the top
// Many sorting algorithms involve some type of swapping functionality (e.g. swapping two numbers to put them in order)

// // ES5
// function swap(arr, idx1, idx2) {
//     let temp = arr[idx1]
//     arr[idx1] = arr[idx2]
//     arr[idx2] = temp
// }

// // ES2015
// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
// }

// Start looping with a variable called "i" at the end of the array towards the beginning
// Start an inner loop with a variable called "j" from the beginning until i -1
// If arr[j] is greater than arr[j+1], swap those two values
// Return the sorted array

// Brute Force Method - suboptimal
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort([37, 45, 29, 8]));

// Brute Force, but less iterations thhru loop
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log("ONE PASS COMPLETE");
  }
  return arr;
}
console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]));
console.log(bubbleSort([372, 6, 33, 18, 1]));
console.log(bubbleSort([-27, 2, 39, 308, 1012, -88, -33, 3, 1, 4, -5]));
