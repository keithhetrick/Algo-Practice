// 893. Groups of Special-Equivalent Strings
// https://leetcode.com/problems/groups-of-special-equivalent-strings/

var numSpecialEquivGroups = function (words) {
  let groups = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let even = word
      .split("")
      .filter((_, i) => i % 2 === 0)
      .sort()
      .join("");
    let odd = word
      .split("")
      .filter((_, i) => i % 2 !== 0)
      .sort()
      .join("");

    let group = [even, odd].join("");

    if (!groups.includes(group)) {
      groups.push(group);
    }
  }
  return groups.length;
};
numSpecialEquivGroups(["a", "b", "c", "a", "c", "c"]); // expects 3
numSpecialEquivGroups(["aa", "bb", "ab", "ba"]); // expects 4
numSpecialEquivGroups(["abc", "acb", "bac", "bca", "cab", "cba"]); // expects 3
