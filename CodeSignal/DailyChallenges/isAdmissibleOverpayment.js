// Is Admissible Overpayment
// https://app.codesignal.com/challenge/pRuhLib5DdetsY4E7

function solution(prices, notes, x) {
  let res = 0;

  for (let i = 0; i < prices.length; i++) {
    let percentage = 100;

    if (notes[i].includes("high")) percentage += parseFloat(notes[i]);
    else if (notes[i].includes("low")) percentage -= parseFloat(notes[i]);
    else continue;

    res += prices[i] - (100 * prices[i]) / percentage;
  }
  return res <= x;
}
solution(
  [110, 95, 70],
  ["10% higher than in-store", "5% lower than in-store", "Same as in-store"],
  5
); // expects true
solution([48, 165], ["20% lower than in-store", "10% higher than in-store"], 2); // expects false
solution(
  [24.42, 24.42, 24.2424, 85.23],
  [
    "13.157% higher than in-store",
    "13.157% lower than in-store",
    "Same as in-store",
    "19.24% higher than in-store",
  ],
  24.24
); // expects true
solution([220], ["120.0000% higher than in-store"], 120); // expects false
solution(
  [40, 40, 40, 40],
  [
    "10.0% higher than in-store",
    "10.0% lower than in-store",
    "10.0% higher than in-store",
    "10.0% lower than in-store",
  ],
  0
); // expects true
