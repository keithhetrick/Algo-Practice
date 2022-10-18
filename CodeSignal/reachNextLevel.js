// 9. Reach Next Level

// You are playing an RPG game. Currently your experience points (XP) total is equal to experience. To reach the next level your XP should be at least at threshold. If you kill the monster in front of you, you will gain more experience points in the amount of the reward.

// Given values experience, threshold and reward, check if you reach the next level after killing the monster.

// Example
// For experience = 10, threshold = 15, and reward = 5, the output should be
// solution(experience, threshold, reward) = true;
// For experience = 10, threshold = 15, and reward = 4, the output should be
// solution(experience, threshold, reward) = false.

function solution(experience, threshold, reward) {
  if (experience + reward < threshold) return false;
  else return true;
}
solution(10, 15, 5); // expects true
solution(10, 15, 4); // expects false
solution(3, 6, 4); // expects true
solution(84, 135, 36); // expects false
solution(74, 170, 58); // expects false
solution(80, 199, 15); // expects false
solution(97, 57, 7); // expects true
solution(235, 293, 4); // expects false
solution(222, 137, 458); // expects true
solution(16, 23, 16); // expects true
