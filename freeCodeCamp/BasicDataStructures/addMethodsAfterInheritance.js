// Add Methods After Inheritance
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/add-methods-after-inheritance

function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log("Woof!");
};

// Only change code above this line

let beagle = new Dog();
