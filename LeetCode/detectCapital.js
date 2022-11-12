// 520. Detect Capital
// https://leetcode.com/problems/detect-capital/

function detectCapitalUse(word) {
  return (
    word === word.toUpperCase() ||
    word === word.toLowerCase() ||
    word === word[0].toUpperCase() + word.slice(1).toLowerCase()
  );
}
detectCapitalUse("USA"); // expects true
detectCapitalUse("FlaG"); // expects false
detectCapitalUse("leetcode"); // expects true
detectCapitalUse("Google"); // expects true
