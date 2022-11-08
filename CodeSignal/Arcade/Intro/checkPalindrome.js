// 3. Check Palindrome

// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// solution(inputString) = true;

// For inputString = "abac", the output should be
// solution(inputString) = false;

// For inputString = "a", the output should be
// solution(inputString) = true.

function solution(inputString) {
  if ([...inputString].reverse().join("") === inputString) return true;
  else return false;
}
solution("aabaa"); // expects true
solution("abac"); // expects false
solution("a"); // expects true
solution("az"); // expects false
solution("abacaba"); // expects true
solution("z"); // expects true
solution("aaabaaaa"); // expects false
solution("zzzazzazz"); // expects false
solution("hlbeeykoqqqqokyeeblh"); // expects true
solution("hlbeeykoqqqokyeeblh"); // expects true
