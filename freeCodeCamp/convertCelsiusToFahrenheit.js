// Convert Celsius to Fahrenheit
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit

function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}
convertCtoF(0); // expects 32
convertCtoF(-30); // expects -22
convertCtoF(-10); // expects 14
convertCtoF(20); // expects 68
convertCtoF(30); // expects 86
