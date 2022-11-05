// Multiple Pointers - isSubsequence

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
isSubsequence("hello", "hello world"); // expects true
isSubsequence("sing", "sting"); // expects true
isSubsequence("abc", "abracadabra"); // expects true
isSubsequence("abc", "acb"); // expects false
