// Use Closure to Protect Properties Within an Object from Being Modified Externally
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-closure-to-protect-properties-within-an-object-from-being-modified-externally

function Bird() {
  this.weight = 15;

  let weight = 15;
  this.getWeight = function () {
    return weight;
  };
}
