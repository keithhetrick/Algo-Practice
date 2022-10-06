function isPalindrome(str) {
  str = str.toLowerCase();
  var charactersArr = str.split("");
  var validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  var lettersArr = [];
  charactersArr.forEach((char) => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  return lettersArr.join("") === lettersArr.reverse().join("");
}
console.log(isPalindrome("Madam I'm Adam"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("Coding JavaScript"));
