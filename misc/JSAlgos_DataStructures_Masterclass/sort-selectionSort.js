// Selection Sort

// Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

// Store the first element as the smallest value you've seen so far
// Compare this item to the next item in the array until you find a smaller number
// If the smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
// If the new "minimum" is not the value (index) you initiially began with, swap the two values
// Repeat this with the next element until the array is sorted

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
      if (i !== lowest) {
        console.log(i, lowest);
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
      }
    }
  }
  return arr;
}
console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
