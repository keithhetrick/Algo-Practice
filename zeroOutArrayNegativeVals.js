// Return the given array, after setting any negative values to zero.

function zeroOutArrayNegativeVals(arr) {
  let negatives = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log("negative value before zeroing : ", arr[i]);
      negatives.push((arr[i] = 0));
      console.log("negative value added to array after zeroing :", negatives);
      console.log("value for i : ", i);
    } else {
      console.log("values being summed :", sum);
      sum = arr;
    }
  }
  console.log("final zeroed negatives :", negatives);
  console.log("final array :", sum);
  return sum;
}
zeroOutArrayNegativeVals([1, 2, 3, 4, 5, -2, 23, -1, -13, 10, -52]);
