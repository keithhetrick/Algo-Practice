// Reverse A String
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello"); // expects olleh
reverseString("Howdy"); // expects ydwoH
reverseString("Greetings from Earth"); // expects htraE morf sgniteerG
