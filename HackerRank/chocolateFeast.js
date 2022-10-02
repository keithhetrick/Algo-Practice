function chocolateFeast(n, c, m) {
  let count = 0;
  //subtract c from n
  let purchasedBars = Math.floor(n / c); //has 5 bars
  let totalBars = purchasedBars;

  //find out how many he can return
  let remainder = purchasedBars % m; //has 1 he cant return
  let returned = purchasedBars - remainder; //has 4 can be returned

  count += purchasedBars;

  while (purchasedBars > 0) {
    purchasedBars = returned / m; //amount of new bars to buy,2
    totalBars = purchasedBars + remainder;
    remainder = totalBars % m; //has x amount he cant return, 1
    returned = totalBars - remainder;
    count += purchasedBars;
  }
  console.log(count);
  return count;
}
chocolateFeast(10, 2, 5);
chocolateFeast(12, 4, 4);
chocolateFeast(6, 2, 2);
