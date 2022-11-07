// Reset an Inherited Constructor Property
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/reset-an-inherited-constructor-property

function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
