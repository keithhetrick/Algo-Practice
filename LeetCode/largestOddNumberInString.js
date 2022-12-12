// 1903. Largest Odd Number in String
// https://leetcode.com/problems/largest-odd-number-in-string/

var largestOddNumber = function (num) {
  // let separated = Array.from(num, Number);
  // console.log(separated);

  // let result = "";
  // for (let i = 0; i < num.length; i++) {
  //   if (num[i] % 2 !== 0) {
  //     result = num.slice(0, i + 1);
  //   }
  // }
  // console.log(result);
  // return result;

  // let separated = Array.from(num, Number).reverse();
  // for (let i = 0; i < separated.length; i++) {
  //   if (separated[i] % 2 == 1) {
  //     let test = separated[i] % 2 == 1;
  //     console.log(test);
  //   }
  // }

  for (let i = num.length - 1; i >= 0; i--) {
    if (parseInt(num[i]) % 2 != 0) {
      console.log(num.slice(0, i + 1));
      return num.slice(0, i + 1);
    }
  }
  console.log("");
  return "";
};
largestOddNumber("52"); // expects "5"
largestOddNumber("4206"); // expects ""
largestOddNumber("35427"); // expects "35427"
