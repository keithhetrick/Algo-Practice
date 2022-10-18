// Sequence Equation

function permutationEquation(p) {
  let j = [];
  let y = [];
  for (let x = 1; x < 6; x++) {
    for (let i = 0; i < p.length; i++) {
      if (p[i] === x) j.push(i + 1);
    }
  }

  for (let x = 1; x < 6; x++) {
    for (let i = 0; i < j.length; i++) {
      if (p[i] === j[x - 1]) y.push(p[i]);
    }
  }

  // y.sort((a,b) => a-b)
  return y;
}
permutationEquation([2, 3, 1]); // expects 2,3,1
permutationEquation([4, 3, 5, 1, 2]); // expects 1,3,5,4,2
