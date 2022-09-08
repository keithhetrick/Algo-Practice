// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Example
// candles = [4, 4, 1, 3]
// The maximum height candles are 4 units high. There are 2 of them, so return 2.

// Function Description
// Complete the function birthdayCakeCandles in the editor below.
// birthdayCakeCandles has the following parameter(s):
// int candles[n]: the candle heights

// Returns
// int: the number of candles that are tallest

// Input Format
// The first line contains a single integer, n, the size of candles[].
// The second line contains n space-separated integers, where each integer i describes the height of candles[i].

// Constraints
// 1 ≤ n ≤ 10^5
// 1 ≤ candles[i] ≤ 10^7

// Solution 1
let candles = [3, 2, 1, 3];
let tallestCandles = 0;
let candleSum = 0;

function birthdayCakeCandles(candles) {
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > tallestCandles) {
      tallestCandles = candles[i];
    }
    if (candles[i] === tallestCandles) {
      candleSum += 1;
    }
  }
  console.log(candleSum);
  return candleSum;
}
birthdayCakeCandles(candles);

// Solution 2
let candles = [3, 2, 1, 3];

function birthdayCakeCandles(candles) {
  let max = 0;
  let candleSum = 0;
  for (let i = 0; i < candles.length; i++) {
    if (max < candles[i]) {
      max = candles[i];
    }
  }
  for (let i = 0; i < candles.length; i++) {
    if (max === candles[i]) {
      candleSum++;
    }
  }
  console.log(candleSum);
  return candleSum;
}
birthdayCakeCandles(candles);
