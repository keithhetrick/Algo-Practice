// Challenge 11: Max/Min/Avg

function maxMinAvg(arr) {
  let arrnew = [];
  let max = 0;
  let min = 0;
  let sum = 0;
  let average = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
    sum += arr[i];
    average = sum / arr.length;
  }
  arrnew.push(max, min, average);
  return arrnew;
}
maxMinAvg([0, 2, 4]); // expects [4,0,2]
maxMinAvg([1, 5, 10, -2]); // expects [10,-2, 3.5]
maxMinAvg([0]); // expects [0,0,0]
maxMinAvg([1, 5, 10, -2]);
