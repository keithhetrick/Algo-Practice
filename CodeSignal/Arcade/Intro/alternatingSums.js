// 14. Alternating Sums
// https://app.codesignal.com/arcade/intro/level-4/cC5QuL9fqvZjXJsW9

function solution(a) {
  let team1 = 0;
  let team2 = 0;

  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      team1 += a[i];
      console.log("\nTEAM 1: ", team1);
    } else {
      team2 += a[i];
      console.log("\nTEAM 2: ", team2);
    }
  }
  console.log("\nTEAM SUM ARRAY: ", [team1, team2]);
  return [team1, team2];
}
solution([50, 60, 60, 45, 70]); // expects [180, 105]
solution([100, 50]); // expects [100, 50]
solution([80]); // expects [80, 0]
solution([100, 50, 50, 100]); // expects [150, 150]
solution([100, 51, 50, 100]); // expects [150, 151]
