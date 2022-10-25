// Challenge 12: Swap Values

// Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr) {
  // If creating new array, use this:
  let arrnew = [];

  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      arrnew.push(arr[arr.length - 1]);
    } else if (i == arr.length - 1) {
      arrnew.push(arr[0]);
    } else {
      arrnew.push(arr[i]);
    }
  }
  return arrnew;

  // or if not creating new array, use this:
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
}
swap([0, 2, 4]); // expects [4,2,0]
swap([1, 5, 10, -2]); // expects [-2,5,10,1]
swap([10, 20]); // expects [20,10]
