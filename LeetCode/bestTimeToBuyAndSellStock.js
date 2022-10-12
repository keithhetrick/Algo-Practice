// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

function maxProfit(prices) {
  // let maxDifference = 0;
  // for (let i = 0; i < prices.length; i++) {
  //   for (let j = i + 1; j < prices.length; j++) {
  //     let difference = prices[j] - prices[i];

  //     if (difference > maxDifference) {
  //       maxDifference = difference;
  //     }
  //   }
  // }
  // return maxDifference;

  // let left = 0; // Buy
  // let right = 1; // sell
  // let max_profit = 0;
  // while (right < prices.length) {
  //   if (prices[left] < prices[right]) {
  //     let profit = prices[right] - prices[left]; // our current profit

  //     max_profit = Math.max(max_profit, profit);
  //   } else {
  //     left = right;
  //   }
  //   right++;
  // }
  // return max_profit;

  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let currentProfit = prices[j] - prices[i];

      if (currentProfit > profit) {
        profit = currentProfit;
      }
    }
  }

  return profit;

  // let largest = "";
  // let smallest = "";
  // for (let i = 0; i < prices.length; i++) {
  //   if (prices[i] > largest) {
  //     largest = prices[i];
  //   }
  //   if (prices[i] < smallest) {
  //     smallest = prices[i];
  //   }
  //   console.log(largest);
  // }
}
maxProfit([7, 1, 5, 3, 6, 4]); // expects 5
maxProfit([7, 6, 4, 3, 1]); // expects 0
