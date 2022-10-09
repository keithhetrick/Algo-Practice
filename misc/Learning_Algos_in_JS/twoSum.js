// Two Sum

// Returns every pair of numbers from "numArray" that adds up to the 'sum'
// Result should be an array of arrays
// Any number in the "numArray" can be used in multiple pairs

function twoSum(arr, sum) {
  let pairs = [];
  let hashtable = [];

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let counterpart = sum - currentNum;
    if (hashtable.indexOf(counterpart) !== -1) {
      pairs.push([currentNum, counterpart]);
    }
    hashtable.push(currentNum);
  }
  return pairs;
}
console.log(twoSum([1, 6, 4, 5, 3, 3], 7));
console.log(twoSum([40, 11, 19, 17, -12], 28));
