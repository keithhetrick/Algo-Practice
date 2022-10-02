/*

Write a function that accepts a string, and returns a count of the characters in the string.

IGNORE spaces " "
If any of the character counts go ABOVE 7 characters counted, 
return an error that stops the app and displays an appropriate error message
If an "_" (underscore) is inside the arg string at any point, throw a different error or error message.


INPUT --> "hello there!" : OUTPUT --> {"h": 2, "e": 3, "l": 2, "o": 1, "t": 1, "r": 1, "!": 1 }
INPUT --> "what it xxxxxxxx do ?" : OUTPUT --> <yourErrorMessage> (in a string)
INPUT --> "y_o" : OUTPUT --> <yourErrorMessage> (in a string)

*/

function countChars(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") {
      return "ERROR! No underscores allowed";
    }
    if (str[i] === " ") {
      console.log("space found at index", i);
      continue;
    }
    if (obj[str[i]]) {
      obj[str[i]]++;
      if (obj[str[i]] > 7) {
        return "ERROR! Character count cannot go above 7";
      }
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}
console.log(countChars("hello there!"));
console.log(countChars("what it xxxxxxxx do ?"));
console.log(countChars("y_o"));
countChars("hello there!");
countChars("what it xxxxxxxx do ?");
countChars("y_o");
