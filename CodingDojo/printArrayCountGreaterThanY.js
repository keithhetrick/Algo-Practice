// Given an array and a value Y, count and print the number of array values greater than Y.

let newArr = [];
function printArrayCountGreaterThanY(arr, y) {
  for (let i = 0; i < arr.length; i++) {
    console.log("current array :", newArr);
    if (arr[i] > y) {
      console.log("adding to array :", newArr);
      newArr.push(arr[i]);
    }
  }
  console.log("final array :", newArr);
  return newArr;
}
printArrayCountGreaterThanY([5, 15, 76, 4644, 77, 32, 4], 29);
console.log(newArr);

let myArr = [];
function printArrayCountGreaterThanY(arr, y) {
  let i = 1;
  while (i <= arr.length) {
    console.log("current array :", arr);
    i++;
    {
      if (arr[i] > y) {
        console.log("adding to array :", i);
        newArr.push(i);
      }
    }
  }
  console.log("final array :", i);
  console.log(newArr);
}
printArrayCountGreaterThanY([5, 15, 76, 4644, 77, 32, 4], 29);
console.log(newArr);
