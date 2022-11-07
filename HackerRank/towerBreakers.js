// Tower Breakers
// https://www.hackerrank.com/challenges/tower-breakers-1/problem

function towerBreakers(n, m) {
  return m === 1 || n % 2 === 0 ? 2 : 1;
}
towerBreakers(2, 2); // expects 2
towerBreakers(1, 4); // expects 1
towerBreakers(2, 6); // expects 2
towerBreakers(2, 1); // expects 2
towerBreakers(1, 1); // expects 2
towerBreakers(1, 2); // expects 1
towerBreakers(2, 3); // expects 2
towerBreakers(3, 3); // expects 1
