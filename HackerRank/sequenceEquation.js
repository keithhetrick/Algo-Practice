// Sequence Equation
// https://www.hackerrank.com/challenges/permutation-equation/problem

function permutationEquation(p) {
  let result = [];
  for (let i = 1; i <= p.length; i++) {
    result.push(p.indexOf(p.indexOf(i) + 1) + 1);
  }
  return result;
}
permutationEquation([2, 3, 1]); // expects 2,3,1
permutationEquation([4, 3, 5, 1, 2]); // expects 1,3,5,4,2
