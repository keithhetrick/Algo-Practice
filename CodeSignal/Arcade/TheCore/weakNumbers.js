// 48. Weak Numbers
// https://app.codesignal.com/arcade/code-arcade/labyrinth-of-nested-loops/oL7YuygJKtMSNLeJn

function solution(n) {
  let divisors = [];
  let weaknesses = [];
  let maxWeakness = 0;
  let maxWeaknessCount = 0;

  for (let i = 1; i <= n; i++) {
    divisors[i] = countDivisors(i);
    weaknesses[i] = 0;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j < i; j++) if (divisors[j] > divisors[i]) weaknesses[i]++;

    if (weaknesses[i] > maxWeakness) {
      maxWeakness = weaknesses[i];
      maxWeaknessCount = 1;
    } else if (weaknesses[i] === maxWeakness) maxWeaknessCount++;
  }

  return [maxWeakness, maxWeaknessCount];
}

function countDivisors(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) if (n % i === 0) count++;

  return count;
}

solution(9); // expects [2, 2]
solution(1); // expects [0, 1]
solution(2); // expects [0, 2]
solution(7); // expects [2, 1]
solution(500); // expects [403, 1]
solution(4); // expects [0, 4]
