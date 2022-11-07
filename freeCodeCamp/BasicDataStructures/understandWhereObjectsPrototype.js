// Understand Where an Object’s Prototype Comes From
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/understand-where-an-objects-prototype-comes-from

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this lines
Dog.prototype.isPrototypeOf(beagle);
