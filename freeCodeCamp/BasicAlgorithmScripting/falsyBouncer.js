// Falsy Bouncer
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer

function bouncer(arr) {
  return arr.filter(Boolean);
}
bouncer([7, "ate", "", false, 9]); // expects [7, "ate", 9]
bouncer(["a", "b", "c"]); // expects ["a", "b", "c"]
bouncer([false, null, 0, NaN, undefined, ""]); // expects []
bouncer([null, NaN, 1, 2, undefined]); // expects [1,2]
