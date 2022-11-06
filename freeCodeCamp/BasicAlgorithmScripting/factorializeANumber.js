// Factorialize a Number
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number

function factorialize(num) {
  if (num === 0) return 1;
  else return num * factorialize(num - 1);
}
factorialize(5); // expects 120
factorialize(10); // expects 3628800
factorialize(20); // expects 2432902008176640000
