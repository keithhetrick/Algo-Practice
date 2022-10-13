// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function groupAnagrams(strs) {
  let grouped = {};

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const key = word.split("").sort().join("");

    if (!grouped[key]) {
      grouped[key] = [];
    }

    grouped[key].push(word);
  }

  return Object.values(grouped);
}
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]); // expects [["bat"],["nat","tan"],["ate","eat","tea"]]
groupAnagrams([""]); // expects [[""]]
groupAnagrams(["a"]); // expects [["a"]]
