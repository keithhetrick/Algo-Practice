// Sequence Equation

function permutationEquation(p) {
  // let x = [] //
  // let newArr = [];
  let y = []; // final values
  for (let i = 0; i < p.length; i++) {
    if (p[i] === i) y.push(p[i]);
    console.log(`current index: ${i}`);

    // y.push(p[i]);
    console.log(`EQUAL to i: ${i} + y: ${y}`);
  }
}
permutationEquation([4, 3, 5, 1, 2]);
