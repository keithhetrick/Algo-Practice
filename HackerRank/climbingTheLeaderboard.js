// Climbing the Leaderboard
// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

function climbingLeaderboard(ranked, player) {
  let ranks = [...new Set(ranked)];
  let result = [];
  let i = ranks.length - 1;
  for (let j = 0; j < player.length; j++) {
    while (i >= 0 && player[j] >= ranks[i]) {
      i--;
    }
    result.push(i + 2);
  }
  return result;
}
climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]); // expects [6, 4, 2, 1]
