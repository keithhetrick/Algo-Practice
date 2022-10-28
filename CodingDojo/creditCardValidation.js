// Credit Card Validation

// The Luhn formula is sometimes used to validate credit card numbers. Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13-19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:

// 1. Set aside the last digit; do not include it in these calculations (until step 5);
// 2. Starting from the back, multiply the digits in odd positions (last, third-to-last, etc.) by 2;
// 3. If any results are larger than 9, subtract 9 from them;
// 4. Add all numbers (not just our odds) together;
// 5. Now add the last digit back in – the sum should be a multiple of 10.

// For example, when given digit array [5,2,2,8,2], after step 1) it becomes [5,2,2,8], then after step 2) it is [5,4,2,16]. Post-3) we have [5,4,2,7], then following 4) it becomes 18. After step 5) our value is 20, so ultimately we return true. If the final digit were any non-multiple-of-10, we would instead return false.

// Given an array of digits as shown above, return whether the card number is valid.

function isCreditCardValid(digitArr) {
  // Solution 1
  let lastDigit = digitArr.pop();
  let sum = 0;
  for (let i = digitArr.length - 1; i >= 0; i--) {
    if (i % 2 === 1) {
      digitArr[i] *= 2;
      if (digitArr[i] > 9) {
        digitArr[i] -= 9;
      }
    }
    sum += digitArr[i];
  }
  sum += lastDigit;
  return sum % 10 === 0;
}
isCreditCardValid([5, 2, 2, 8, 2]); // expects true
isCreditCardValid([5, 2, 2, 8, 1]); // expects false
isCreditCardValid([5, 2, 2, 8, 2, 1]); // expects false
isCreditCardValid([5, 2, 2, 8, 2, 1, 1]); // expects false
