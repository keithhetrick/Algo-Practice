// Given an array, find and print its largest element.

const arr = [11, 4, 3, 5, 6, 7, 10, 1];
// console.log(Math.max.apply(null, arr));
// console.log(Math.max(...arr));
function printMaxOfArray() {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  console.log(largest);
}
printMaxOfArray();
