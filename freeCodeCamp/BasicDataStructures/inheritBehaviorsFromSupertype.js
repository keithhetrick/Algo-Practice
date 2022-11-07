// Inherit Behaviors from a Supertype
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/inherit-behaviors-from-a-supertype

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

// Only change code below this line

let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);
