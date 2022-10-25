// Migratory Birds
// https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(arr) {
  let birds = {};
  let max = 0;
  let id = 0;
  for (let i = 0; i < arr.length; i++) {
    if (birds[arr[i]]) {
      birds[arr[i]]++;
    } else {
      birds[arr[i]] = 1;
    }
  }
  for (let key in birds) {
    if (birds[key] > max) {
      max = birds[key];
      id = key;
    }
  }
  return id;
}
migratoryBirds([1, 4, 4, 4, 5, 3]); // expects 4
migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]); // expects 3
