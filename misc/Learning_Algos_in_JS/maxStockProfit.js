// Max Stock Profit

// takes in an array of prices as parameter
// returns the max possible profit of the day
// If no profit is possible, return -1
// A max profit of 0 is treated as any other max profit value

function maxStockProfit(pricesArr) {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;

  let changeBuyPrice = true;

  for (let i = 0; i < pricesArr.length; i++) {
    if (changeBuyPrice) buyPrice = pricesArr[i];
    sellPrice = pricesArr[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }

  return maxProfit;
}
console.log(maxStockProfit([32, 46, 26, 38, 40, 48, 42]));
console.log(maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]));
