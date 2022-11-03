// Plus Minus
// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positive++;
    if (arr[i] < 0) negative++;
    if (arr[i] === 0) zero++;
  }
  console.log((positive / arr.length).toFixed(6));
  console.log((negative / arr.length).toFixed(6));
  console.log((zero / arr.length).toFixed(6));
}
plusMinus([-4, 3, -9, 0, 4, 1]); // expects positive: 0.500000, negative: 0.333333, zero: 0.166667
plusMinus([1, 2, 3, -1, -2, -3, 0, 0]); // expects positive: 0.375000, negative: 0.375000, zero: 0.250000
