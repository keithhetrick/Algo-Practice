// Iterate through a given array, printing each value.

function printArrayVals(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log("array[", i, "] is equal to", arr[i]);
  }
}
printArrayVals([1, 5, 76, 9, 356]);

function printArrayVals(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      console.log("variable value :", arr[i]);
      console.log("current summed values :", sum);
      sum += arr[i];
      console.log("index value :", i);
    }
  }
  console.log("final array :", sum);
  return sum;
}
printArrayVals([1, 4, 0, 9, -3]);

function printArrayVals() {
  const ourArray = [1, 4, 0, 9, -3];
  let sum = 0;
  for (let i = 0; i < ourArray.length; i += 1) {
    sum += ourArray[i];
  }
  return sum;
}
console.log(printArrayVals([1, 4, 0, 9, -3]));

function printArrayVals(array) {
  let sum = 0;
  array.forEach((i) => {
    sum += i;
  });
  console.log(sum);
  return sum;
}
printArrayVals([1, 4, 0, 9, -3]);

function printArrayVals(array) {
  let sum = 0;
  for (const i of array) {
    sum += i;
  }
  console.log(sum);
  return sum;
}
printArrayVals([1, 4, 0, 9, -3]);
