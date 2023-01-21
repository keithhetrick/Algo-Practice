// 33. Candles - Velas
// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/LAKReA3CR9EwkZGSz

function solution(candlesNumber, makeNew) {
  let totalCandles = candlesNumber;
  let leftOver = 0;
  let newCandles = 0;

  while (candlesNumber >= makeNew) {
    newCandles = Math.floor(candlesNumber / makeNew);
    leftOver = candlesNumber % makeNew;
    candlesNumber = newCandles + leftOver;
    totalCandles += newCandles;
  }

  console.log(`\nTOTAL CANDLES: ${totalCandles}\n`);
  return totalCandles;
}
solution(5, 2); // expects 9
solution(1, 2); // expects 1
solution(3, 3); // expects 4
solution(11, 3); // expects 16
solution(15, 5); // expects 18
solution(14, 3); // expects 20
solution(12, 2); // expects 23
solution(6, 4); // expects 7
solution(13, 5); // expects 16
solution(2, 3); // expects 2
