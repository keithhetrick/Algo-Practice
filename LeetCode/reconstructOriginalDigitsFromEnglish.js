// 423. Reconstruct Original Digits from English
// https://leetcode.com/problems/reconstruct-original-digits-from-english/

var originalDigits = function (s) {
  // Solution 1
  // const map = {};

  // for (let i = 0; i < s.length; i++) {
  //   if (map[s[i]] === undefined) {
  //     map[s[i]] = 1;
  //   } else map[s[i]]++;
  // }

  // const result = [];
  // const zero = map["z"];
  // if (zero > 0) {
  //   result.push("0".repeat(zero));
  //   map["z"] -= zero;
  //   map["e"] -= zero;
  //   map["r"] -= zero;
  //   map["o"] -= zero;
  // }

  // const two = map["w"];
  // if (two > 0) {
  //   result.push("2".repeat(two));
  //   map["t"] -= two;
  //   map["w"] -= two;
  //   map["o"] -= two;
  // }

  // const four = map["u"];
  // if (four > 0) {
  //   result.push("4".repeat(four));
  //   map["f"] -= four;
  //   map["o"] -= four;
  //   map["u"] -= four;
  //   map["r"] -= four;
  // }

  // const six = map["x"];
  // if (six > 0) {
  //   result.push("6".repeat(six));
  //   map["s"] -= six;
  //   map["i"] -= six;
  //   map["x"] -= six;
  // }

  // const eight = map["g"];
  // if (eight > 0) {
  //   result.push("8".repeat(eight));
  //   map["e"] -= eight;
  //   map["i"] -= eight;
  //   map["g"] -= eight;
  //   map["h"] -= eight;
  //   map["t"] -= eight;
  // }

  // const one = map["o"];
  // if (one > 0) {
  //   result.push("1".repeat(one));
  //   map["o"] -= one;
  //   map["n"] -= one;
  //   map["e"] -= one;
  // }

  // const three = map["h"];
  // if (three > 0) {
  //   result.push("3".repeat(three));
  //   map["t"] -= three;
  //   map["h"] -= three;
  //   map["r"] -= three;
  //   map["e"] -= three;
  //   map["e"] -= three;
  // }

  // const five = map["f"];
  // if (five > 0) {
  //   result.push("5".repeat(five));
  //   map["f"] -= five;
  //   map["i"] -= five;
  //   map["v"] -= five;
  //   map["e"] -= five;
  // }

  // const seven = map["s"];
  // if (seven > 0) {
  //   result.push("7".repeat(seven));
  //   map["s"] -= seven;
  //   map["e"] -= seven;
  //   map["v"] -= seven;
  //   map["e"] -= seven;
  //   map["n"] -= seven;
  // }

  // const nine = map["i"];
  // if (nine > 0) {
  //   result.push("9".repeat(nine));
  //   map["n"] -= nine;
  //   map["i"] -= nine;
  //   map["n"] -= nine;
  //   map["e"] -= nine;
  // }
  // console.log(result.join(""));
  // return result.join("");

  // Solution 2
  let numsCount = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "z") numsCount[0]++;
    if (s[i] === "w") numsCount[2]++;
    if (s[i] === "u") numsCount[4]++;
    if (s[i] === "x") numsCount[6]++;
    if (s[i] === "g") numsCount[8]++;
    if (s[i] === "o") numsCount[1]++;
    if (s[i] === "h") numsCount[3]++;
    if (s[i] === "f") numsCount[5]++;
    if (s[i] === "s") numsCount[7]++;
    if (s[i] === "i") numsCount[9]++;
  }
  // console.log("NUMS COUNT:", numsCount);

  numsCount[1] -= numsCount[0] + numsCount[2] + numsCount[4];
  numsCount[3] -= numsCount[8];
  numsCount[5] -= numsCount[4];
  numsCount[7] -= numsCount[6];
  numsCount[9] -= numsCount[6] + numsCount[8] + numsCount[5];

  // console.log("NEW NUMS COUNT:", numsCount);

  let result = "";

  for (let j = 0; j < 10; j++) {
    while (numsCount[j] !== 0) {
      result += j;
      numsCount[j]--;
    }
  }

  console.log("RESULT:", result);
  return result;
};
originalDigits("owoztneoer"); // expects "012"
originalDigits("fviefuro"); // expects "45"
