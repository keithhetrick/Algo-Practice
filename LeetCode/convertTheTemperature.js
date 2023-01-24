// 2469. Convert the Temperature
// https://leetcode.com/problems/convert-the-temperature/

/*
 *
 * You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.
 * You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].
 * Return the array ans. Answers within 10-5 of the actual answer will be accepted.
 */

var convertTemperature = function (celsius) {
  let kelvin = celsius + 273.15;
  let fahrenheit = celsius * 1.8 + 32.0;

  console.log("\nCONVERT TEMPERTURE: ", [
    celsius + 273.15,
    celsius * 1.8 + 32.0,
  ]);

  return [kelvin, fahrenheit];
};
convertTemperature(36.5); // expects [309.65000,97.70000]
convertTemperature(122.11); // expects [395.26000,251.79800]
