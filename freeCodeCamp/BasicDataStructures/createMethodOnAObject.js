// Create a Method on an Object
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/create-a-method-on-an-object

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has 4 legs.";
  },
};

dog.sayLegs();
