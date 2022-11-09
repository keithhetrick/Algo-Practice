// Specify Upper and Lower Number of Matches
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-upper-and-lower-number-of-matches

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/;
let result = ohRegex.test(ohStr);
