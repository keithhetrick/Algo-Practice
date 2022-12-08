// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/

var intersection = function (nums1, nums2) {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) && !result.includes(nums1[i])) {
      result.push(nums1[i]);
    }
  }
  return result;

  // nums1 = [...new Set(nums1)]
  //   nums2 = [...new Set(nums2)]
  //   let ans = []
  //   for(let i=0; i<nums1.length; i++){
  //       if(nums2.includes(nums1[i])){
  //           ans.push(nums1[i])
  //       }
  //   }
  //   return ans
};
intersection([1, 2, 2, 1], [2, 2]); // expects [2]
intersection([4, 9, 5], [9, 4, 9, 8, 4]); // expects [9, 4]
