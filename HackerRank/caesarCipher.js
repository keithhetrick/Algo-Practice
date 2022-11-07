// Caesar Cipher
// https://www.hackerrank.com/challenges/caesar-cipher-1/problem

function caesarCipher(s, k) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode = ((charCode - 65 + k) % 26) + 65;
    } else if (charCode >= 97 && charCode <= 122) {
      charCode = ((charCode - 97 + k) % 26) + 97;
    }
    result += String.fromCharCode(charCode);
  }
  return result;
}
caesarCipher("middle-Outz", 2); // expects "okffng-Qwvb"
caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5); // expects "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"
caesarCipher("There's-a-starman-waiting-in-the-sky", 3); // expects "Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vln"
caesarCipher("www.abc.xy", 87); // expects "fff.jkl.gh"
