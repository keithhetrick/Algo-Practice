// Hash Map Practice

let start = Date.now();

function makeHashMap(nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    if (!hash[key]) hash[i] = nums[i];
  }
  console.log("Hash: ", hash);
  console.log("Perfomance: ", performance.now(), "ms");
  console.log("Time elapsed: ", Date.now() - start, "ms");
  return hash;
}
makeHashMap([8, 1, 2, 2, 3]); // expects [4,0,1,1,3]
makeHashMap([6, 5, 4, 8]); // expects [2,1,0,3]
makeHashMap([7, 7, 7, 7]); // expects [0,0,0,0]

function smallerNumbersThanCurrent(nums) {
  let hash = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    if (hash[key]) hash[key]++;
    else hash[key] = 1;
  }
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    let count = 0;
    for (let j = 0; j < key; j++) {
      if (hash[j]) count += hash[j];
    }
    result.push(count);
  }
  console.log("Smaller: ", result);
  return console.log("Time elapsed: ", Date.now() - start, "ms");
}
smallerNumbersThanCurrent([8, 1, 2, 2, 3]); // expects [4,0,1,1,3]
smallerNumbersThanCurrent([6, 5, 4, 8]); // expects [2,1,0,3]
smallerNumbersThanCurrent([7, 7, 7, 7]); // expects [0,0,0,0]

function largerNumbersThanCurrent(nums) {
  let hash = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    if (hash[key]) hash[key]++;
    else hash[key] = 1;
  }
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    let count = 0;
    for (let j = key + 1; j < nums.length; j++) {
      if (hash[j]) count += hash[j];
    }
    result.push(count);
  }
  console.log("Larger: ", result);
  return console.log("Time elapsed: ", Date.now() - start, "ms");
}
largerNumbersThanCurrent([8, 1, 2, 2, 3]); // expects [1,3,2,2,0]
largerNumbersThanCurrent([6, 5, 4, 8]); // expects [1,1,2,0]
largerNumbersThanCurrent([7, 7, 7, 7]); // expects [0,0,0,0]

function compareHash(hash1, hash2) {
  for (let key in hash1) {
    if (hash1[key] !== hash2[key]) return false;
  }
  return true;
}
compareHash({ a: 1, b: 2 }, { a: 1, b: 2 }); // expects true
compareHash({ a: 1, b: 2 }, { a: 1, b: 3 }); // expects false

function makeAndCompareHash(nums1, nums2) {
  let hash1 = {};
  let hash2 = {};
  for (let i = 0; i < nums1.length; i++) {
    let key = nums1[i];
    if (hash1[key]) hash1[key]++;
    else hash1[key] = 1;
  }
  for (let i = 0; i < nums2.length; i++) {
    let key = nums2[i];
    if (hash2[key]) hash2[key]++;
    else hash2[key] = 1;
  }
  console.log("Hash 1: ", hash1);
  console.log("Hash 2: ", hash2);
  return compareHash(hash1, hash2);
}
makeAndCompareHash([1, 2, 3], [3, 2, 1]); // expects true
makeAndCompareHash([1, 2, 3], [3, 2, 2]); // expects false

function reassignKeys(hash) {
  let newHash = {};
  let keys = Object.keys(hash);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    newHash[i] = hash[key];
  }
  console.log("Reassigned: ", newHash);
  return newHash;
}
reassignKeys({ a: 1, b: 2 }); // {0: 1, 1: 2} // expects {a: 1, b: 2} => {0: 1, 1: 2}
reassignKeys({ a: 1, b: 2, c: 3 }); // expects {0: 1, 1: 2, 2: 3} // {a: 1, b: 2, c: 3} => {0: 1, 1: 2, 2: 3}

function createHashAndReassignKeysToDifferentHash(hash1, hash2) {
  let newHash = {};
  let keys = Object.keys(hash1);
  console.log(hash1);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    newHash[hash2[key]] = hash1[key];
  }
  console.log("Reassigned: ", newHash);
  return newHash;
}
createHashAndReassignKeysToDifferentHash({ a: 1, b: 2 }, { a: 1, b: 2 }); // expects {a: 1, b: 2} => {1: 1, 2: 2}

function createHashAndUseTheValueForTheKeyInSecondMapAndTheKeyForTheValueInFirstMap(
  hash1,
  hash2
) {
  let newHash = {};
  let keys = Object.keys(hash1);
  console.log(hash1);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    newHash[hash2[key]] = key;
  }
  console.log("Reassigned Key/Value pair: ", newHash);
  return newHash;
}
createHashAndUseTheValueForTheKeyInSecondMapAndTheKeyForTheValueInFirstMap(
  { a: 1, b: 2 },
  { a: 1, b: 2 }
); // expects {a: 1, b: 2} => {1: a, 2: b}

function createHashAndUseTheValueForTheKeyInSecondMapAndTheKeyForTheValueInFirstMap(
  hash1,
  hash2
) {
  let newHash = {};
  let keys = Object.keys(hash1);
  console.log(hash1);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    newHash[hash2[key]] = key;
  }
  console.log("Reassigned Key/Value pair: ", newHash);
  return newHash;
}
createHashAndUseTheValueForTheKeyInSecondMapAndTheKeyForTheValueInFirstMap(
  { a: 1, b: 2 },
  { a: 1, b: 2 }
); // expects {a: 1, b: 2} => {1: a, 2: b}

function makeHashMap(nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    if (!hash[key]) hash[i] = nums[i];
  }
  console.log("Hash: ", hash);
  console.log("Perfomance: ", performance.now(), "ms");
  console.log("Time elapsed: ", Date.now() - start, "ms");
  return hash;
}
makeHashMap([8, 1, 2, 2, 3]); // expects [4,0,1,1,3]
makeHashMap([6, 5, 4, 8]); // expects [2,1,0,3]
makeHashMap([7, 7, 7, 7]); // expects [0,0,0,0]

function simpleMap(nums) {
  let hashmap = {};
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (hashmap[nums[i]] === undefined || null) {
      hashmap[nums[i]] = 1;
    } else hashmap[nums[i]]++;
  }

  for (let key in map) {
    if (map[key] === 1) sum += +key;
  }
  console.log(sum);
  return sum;
}
simpleMap([1, 2, 3, 2]); // expects 4
simpleMap([1, 1, 1, 1, 1]); // expects 0
simpleMap([1, 2, 3, 4, 5]); // expects 15
