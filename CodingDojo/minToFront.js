// Min to Front

// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order.

function minToFront(arr) {
  let min = arr[0];
  let index = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  for (let j = index; j > 0; j--) {
    arr[j] = arr[j - 1];
  }
  arr[0] = min;
  return arr;
}
minToFront([4, 2, 1, 3, 5]); // expects [1,4,2,3,5]
