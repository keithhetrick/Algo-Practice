// Slice and Splice
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice

function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice();
  newArr.splice(n, 0, ...arr1);
  return newArr;

  // One-Liner Solution
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}
frankenSplice([1, 2, 3], [4, 5, 6], 1); // expects [4, 1, 2, 3, 5, 6]
frankenSplice([1, 2, 3], [4, 5], 1); // expects [4, 1, 2, 3, 5]
frankenSplice([1, 2], ["a", "b"], 1); // expects ["a", 1, 2, "b"]
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2); // expects ["head", "shoulders", "claw", "tentacle", "knees", "toes"] // expects ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
