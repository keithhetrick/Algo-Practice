// Where do I Belong
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort((a, b) => a - b);

  return arr.indexOf(num);
}
getIndexToIns([10, 20, 30, 40, 50], 35); // expects 3
getIndexToIns([10, 20, 30, 40, 50], 30); // expects 2/ expects 2
getIndexToIns([40, 60], 50); // expects 1
getIndexToIns([3, 10, 5], 3); // expects 0
getIndexToIns([5, 3, 20, 3], 5); // expects 2
getIndexToIns([2, 20, 10], 19); // expects 2
getIndexToIns([2, 5, 10], 15); // expects 3
getIndexToIns([], 1); // expects 0
