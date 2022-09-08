// Given an array of numbers, replace any negative values with the string 'Dojo'.

function swapStringForArrayNegativeVals(arr) {
  let negatives = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      console.log("negative value before turned to string : ", arr[i]);
      negatives.push((arr[i] = "Dojo"));
      console.log(
        "negative 'stringed' value added to array after zeroing :",
        negatives
      );
      console.log("value for i : ", i);
    } else {
      console.log("values being summed :", sum);
      sum = arr;
    }
  }
  console.log("final 'stringed' negatives :", negatives);
  console.log("final array :", sum);
  return sum;
}
swapStringForArrayNegativeVals([1, 2, 3, 4, 5, -2, 23, -1, -13, 10, -52]);
