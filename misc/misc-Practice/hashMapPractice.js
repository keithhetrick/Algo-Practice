// Hash Map Practice

let start = Date.now();

var smallerNumbersThanCurrent = function (nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    if (!hash[key]) hash[i] = nums[i];
  }
  console.log(hash);
  console.log("Perfomance: ", performance.now(), "ms");
  console.log("Time elapsed: ", Date.now() - start, "ms");
  return hash;
};
smallerNumbersThanCurrent([8, 1, 2, 2, 3]); // expects [4,0,1,1,3]
smallerNumbersThanCurrent([6, 5, 4, 8]); // expects [2,1,0,3]
smallerNumbersThanCurrent([7, 7, 7, 7]); // expects [0,0,0,0]
