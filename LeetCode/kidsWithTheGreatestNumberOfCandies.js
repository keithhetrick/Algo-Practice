// 1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies);
  const result = [];
  for (let i = 0; i < candies.length; i++) {
    result.push(candies[i] + extraCandies >= maxCandies);
  }
  console.log("\nRESULT: ", result);
  return result;
};
kidsWithCandies([2, 3, 5, 1, 3], 3); // expects [true,true,true,false,true]
kidsWithCandies([4, 2, 1, 1, 2], 1); // expects [true,false,false,false,false]
