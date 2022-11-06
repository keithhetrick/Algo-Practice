// Confirm The Ending
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
confirmEnding("Bastian", "n"); // expects true
confirmEnding("Congratulation", "on"); // expects true
confirmEnding("Connor", "n"); // expects false
confirmEnding(
  "Walking on water and developing software from a specification are easy if both are frozen",
  "specification"
); // expects false
confirmEnding("He has to give me a new name", "name"); // expects true
confirmEnding("Open sesame", "same"); // expects true
confirmEnding("Open sesame", "sage"); // expects false
confirmEnding("Open sesame", "game"); // expects false
confirmEnding(
  "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing",
  "mountain"
); // expects false
confirmEnding("Abstraction", "action"); // expects true
