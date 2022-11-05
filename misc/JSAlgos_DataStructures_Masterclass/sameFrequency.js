// Frequency Counter - sameFrequency

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

function sameFrequency(n1, n2) {
  let num1 = n1.toString();
  let num2 = n2.toString();

  if (num1.length !== num2.length) return false;

  let num1Freq = {};

  for (let i = 0; i < num1.length; i++) {
    if (!num1Freq[num1[i]]) num1Freq[num1[i]] = 1;
    else num1Freq[num1[i]]++;
  }
  for (let j = 0; j < num2.length; j++) {
    if (!num1Freq[num2[j]]) return false;
    else num1Freq[num2[j]]--;
  }
  return true;
}
sameFrequency(182, 281); // expects true
sameFrequency(34, 14); // expects false
sameFrequency(3589578, 5879385); // expects true
sameFrequency(22, 222); // expects false
