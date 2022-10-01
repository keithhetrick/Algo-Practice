// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// algo 1
var rdashAlpha = /-([a-z])/g;

function fcamelCase(_all, letter) {
  return letter.toUpperCase();
}
function camelCase(string) {
  return string.replace(rdashAlpha, fcamelCase);
}

console.log(camelCase(""));
console.log(camelCase("the_stealth_warrior"));
console.log(camelCase("The-Stealth-Warrior"));
console.log(camelCase("A-B-C"));
console.log(camelCase("i-am-a-programmer"));
console.log(camelCase("I-Am-A-Programmer"));

// algo 2
function toCamelCase(str) {
  let strArray;

  if (str === "") {
    return "";
  }

  if (str.indexOf("-") !== -1) {
    strArray = str.split("-");
  } else {
    strArray = str.split("_");
  }

  let ccString = strArray[0];

  for (let i = 1; i < strArray.length; i++) {
    ccString += capitalize(strArray[i]);
  }

  return ccString;
}
let capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};
console.log(toCamelCase(""));
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
console.log(toCamelCase("A-B-C"));
console.log(toCamelCase("i-am-a-programmer"));
console.log(toCamelCase("I-Am-A-Programmer"));

// algo 3
function camelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

console.log(camelCase(""));
console.log(camelCase("the_stealth_warrior"));
console.log(camelCase("The-Stealth-Warrior"));
console.log(camelCase("A-B-C"));
console.log(camelCase("i-am-a-programmer"));
console.log(camelCase("I-Am-A-Programmer"));
