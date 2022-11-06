// Boo Who
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who

function booWho(bool) {
  return typeof bool === "boolean";
}
booWho(true); // expects true
booWho(false); // expects true
booWho([1, 2, 3]); // expects false
booWho([].slice); // expects false
booWho(1); // expects false
booWho(NaN); // expects false
booWho("a"); // expects false
booWho("true"); // expects false
booWho("false"); // expects false
booWho(null);
