// 1395. Count Number of Teams
// https://leetcode.com/problems/count-number-of-teams/

var numTeams = function (rating) {
  let validTeams = 0;

  for (let i = 0; i < rating.length; i++) {
    for (let j = i + 1; j < rating.length; j++) {
      for (let k = j + 1; k < rating.length; k++) {
        if (
          (rating[i] < rating[j] && rating[j] < rating[k]) ||
          (rating[i] > rating[j] && rating[j] > rating[k])
        ) {
          validTeams++;
        }
      }
    }
  }
  return validTeams;
};
numTeams([2, 5, 3, 4, 1]); // expects 3
numTeams([2, 1, 3]); // expects 0
numTeams([1, 2, 3, 4]); // expects 4
