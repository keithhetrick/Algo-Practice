// Bill Division
// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
  let total = bill.reduce((a, b) => a + b);
  let anna = (total - bill[k]) / 2;
  if (anna === b) console.log("Bon Appetit");
  else console.log(b - anna);
}
bonAppetit([3, 10, 2, 9], 1, 12); // expects 5
bonAppetit([3, 10, 2, 9], 1, 7); // expects Bon Appetit
