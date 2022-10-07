let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function () {
    console.log("ahhhhhh!");
  },
};

console.log(user.age); // O(1)
console.log((user.spell = "abra kadabra")); // O(1)
console.log(user); // O(1)
console.log(user.scream()); // O(1)

const a = new Map();
const b = new Sets();
