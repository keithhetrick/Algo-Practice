// 10. Common Character Count
// https://app.codesignal.com/arcade/intro/level-3/JKKuHJknZNj4YGL32

function commonCharacterCount(s1, s2) {
  let map = {};
  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    if (map[s1[i]]) map[s1[i]]++;
    else map[s1[i]] = 1;
  }
  for (let j = 0; j < s2.length; j++) {
    if (map[s2[j]]) {
      map[s2[j]]--;
      count++;
    }
  }
  return count;
}
commonCharacterCount("aabcc", "adcaa"); // expects 3
commonCharacterCount("zzzz", "zzzzzzz"); // expects 4
commonCharacterCount("abca", "xyzbac"); // expects 3
commonCharacterCount("a", "b"); // expects 0
commonCharacterCount("a", "aaa"); // expects 1
