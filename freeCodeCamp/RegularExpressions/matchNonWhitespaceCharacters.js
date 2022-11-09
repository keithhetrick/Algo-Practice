// Match Non-Whitespace Characters
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-non-whitespace-characters

let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g;
let result = sample.match(countNonWhiteSpace);
