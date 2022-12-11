// Hash Map Practice 2

const start = Date.now();

// function makeHashMap(nums) {
//   let hash = {};

//   for (let i = 0; i < nums.length; i++) {
//     let key = nums[i];
//     if (!hash[key]) hash[i] = nums[i];
//   }
//   console.log("Hash: ", hash);
//   console.log("Perfomance: ", performance.now(), "ms");
//   console.log("Time elapsed: ", Date.now() - start, "ms");
//   return hash;
// }
// makeHashMap([8, 1, 2, 2, 3]); // expects [4,0,1,1,3]
// makeHashMap([6, 5, 4, 8]); // expects [2,1,0,3]
// makeHashMap([7, 7, 7, 7]); // expects [0,0,0,0]

function sumKey(nums) {
  let hashmap = {};
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (hashmap[nums[i]] === undefined || null) {
      hashmap[nums[i]] = 1;
    } else hashmap[nums[i]]++;
  }
  console.log("Hash: ", hashmap);

  for (let key in hashmap) {
    if (hashmap[key] === 1) {
      // console.log("key: ", key);
      console.log(Object.entries(hashmap));
      sum += Number(key);
    }
  }
  // console.log("Perfomance: ", performance.now(), "ms");
  // console.log("Time elapsed: ", Date.now() - start, "ms");
  console.log("sumKey: " + sum);
  return sum;
}
sumKey([1, 2, 3, 2]); // expects 4
// sumKey([1, 1, 1, 1, 1]); // expects 0
// sumKey([1, 2, 3, 4, 5]); // expects 15
