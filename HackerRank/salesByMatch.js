// Sales By Match
// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
  let pairs = 0;
  let socks = {};

  for (let i = 0; i < n; i++) {
    if (socks[ar[i]]) {
      socks[ar[i]]++;
    } else {
      socks[ar[i]] = 1;
    }
  }
  for (let key in socks) {
    pairs += Math.floor(socks[key] / 2);
  }
  return pairs;
}
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]); // expects 3
sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]); // expects 4
