// Truncate A String
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string

function truncateString(str, num) {
  let newStr = "";

  if (str.length > num) {
    for (let i = 0; i < num; i++) newStr += str[i];
    return newStr + "...";
  } else return str;

  // One-Liner Solution
  return str.length > num ? str.slice(0, num) + "..." : str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8); // expects A-tisket...
truncateString("Peter Piper picked a peck of pickled peppers", 11); // expects Peter Piper...
truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length
); // expects A-tisket a-tasket A green and yellow basket
truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length + 2
); // expects A-tisket a-tasket A green and yellow basket
truncateString("A-", 1); // expects A...
truncateString("Absolutely Longer", 2); // expects Ab...
