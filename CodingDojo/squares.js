// Challenge 9: Squares

// Given an array with multiple values, write a function that replaces each value in the array with the product of the original value multiplied by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squareVal(arr) {
  for (let i = 0; i < arr.length; i++) arr[i] = Math.pow(arr[i], 2);

  return arr;
}
squareVal([1, 2, 3]); // expects [1,4,9]
squareVal([-1, 3, 6]); // expects [1,9,36]
squareVal([0]); // expects [0]
squareVal([1, 5, 10, -2]); // expects [1,25,100,4]
