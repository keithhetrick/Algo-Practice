let arr = [
  {
    firstName: "John",
    lastName: "Smith",
  },
];

const firstName = "soham";
const lastName = "s";

arr.push({
  firstName: firstName,
  lastName: lastName,
});

console.log(arr);

// //Defining object
// let person = {
//   first_name: "Mukul",
//   last_name: "Latiyan",

//   //method
//   getFunction: function () {
//     return `The name of the person is
//         ${person.first_name} ${person.last_name}`;
//   },
//   //object within object
//   phone_number: {
//     mobile: "12345",
//     landline: "6789",
//   },
// };
// console.log(person.getFunction());
// console.log(person.phone_number.landline);

function person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}
//creating new instances of person object
let person1 = new person("Mukul", "Latiyan");
let person2 = new person("Rahul", "Avasthi");
let person3 = new person("Matis", "Yahu");

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);
console.log(`${person3.first_name} ${person3.last_name}`);
