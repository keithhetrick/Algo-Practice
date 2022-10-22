// Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/

function isIsomorphic(s, t) {
  const hashs = {};
  const hasht = {};

  for (let i = 0; i < s.length; i++) {
    if (hashs[s[i]] === undefined) hashs[s[i]] = i;
    if (hasht[t[i]] === undefined) hasht[t[i]] = i;
    if (hashs[s[i]] !== hasht[t[i]]) return false;
  }
  return true;
}
isIsomorphic("egg", "add"); // expects true
isIsomorphic("foo", "bar"); // expects false
isIsomorphic("paper", "title"); // expects true
isIsomorphic("badc", "baba"); // expects false
