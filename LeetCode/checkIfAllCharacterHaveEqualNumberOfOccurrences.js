// 1941. Check if All Characters Have Equal Number of Occurrences
// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

var areOccurrencesEqual = function (s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }

  let values = Object.values(map);
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== values[0]) {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
};
areOccurrencesEqual("abacbc"); // expects true
areOccurrencesEqual("aaabb"); // expects false
