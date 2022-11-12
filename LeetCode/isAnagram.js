// 242. Valid Anagram

function isAnagram(s, t) {
  // Solution 1 using hash table
  if (s.length !== t.length) return false;

  const sCharCounts = {};

  // // Fill sCharCounts
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    sCharCounts[sChar] = sCharCounts[sChar] + 1 || 1;
  }
  for (let j = 0; j < t.length; j++) {
    const tChar = t[j];
    if (!sCharCounts[tChar]) return false;
    else sCharCounts[tChar]--;
  }
  return true;

  // Solution 2 using hash table
  // If lengths of s & t are not equal, return false
  if (s.length !== t.length) return false;

  // Create a hash table to store the frequency of each char in s
  let hash = {};

  // Iterate through s
  for (let i = 0; i < s.length; i++) {
    // If char is not in hash, add it with a value of 1
    if (!hash[s[i]]) hash[s[i]] = 1;
    // If char is in hash, increment its value by 1
    else hash[s[i]]++;
  }

  // Iterate through t
  for (let i = 0; i < t.length; i++) {
    // If char is not in hash, return false
    if (!hash[t[i]]) return false;
    // If char is in hash, decrement its value by 1
    else hash[t[i]]--;
  }

  // Iterate through hash
  for (let key in hash) {
    // If value of any key is not 0, return false
    if (hash[key] !== 0) return false;
  }

  return true;

  // Solution using sort method
  let str1 = s.split("").sort().join("");
  let str2 = t.split("").sort().join("");
  console.log(str1 === str2);
  return str1 === str2;
}
isAnagram("anagram", "nagaram"); // expects true
isAnagram("rat", "car"); // expects false
isAnagram("a", "ab"); // expects false
isAnagram("ab", "a"); // expects false
isAnagram("aacc", "ccac"); // expects false
isAnagram("anagram", "nagaram"); // expects true
