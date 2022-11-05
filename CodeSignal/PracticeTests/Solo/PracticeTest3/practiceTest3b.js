// practiceTest3b

// You are given a string s. Your task is to count the number of ways of splitting s into three non-empty parts a, b and c (s = a + b + c) in such a way that a + b, b + c and c + a are all different strings.

// NOTE: + refers to string concatenation.

// Example

// For s = "xzxzx", the output should be solution(s) = 5.

// Consider all the ways to split s into three non-empty parts:

// If a = "x", b = "z" and c = "xzx", then all a + b = "xz", b + c = "zxzx" and c + a = xzxx are different.
// If a = "x", b = "zx" and c = "zx", then all a + b = "xzx", b + c = "zxzx" and c + a = zxx are different.
// If a = "x", b = "zxz" and c = "x", then all a + b = "xzxz", b + c = "zxzx" and c + a = xx are different.
// If a = "xz", b = "x" and c = "zx", then a + b = b + c = "xzx". Hence, this split is not counted.
// If a = "xz", b = "xz" and c = "x", then all a + b = "xzxz", b + c = "xzx" and c + a = xxz are different.
// If a = "xzx", b = "z" and c = "x", then all a + b = "xzxz", b + c = "zx" and c + a = xxzx are different.
// Since there are five valid ways to split s, the answer is 5.

function solution(s) {
  let count = 0;

  for (let i = 1; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let a = s.slice(0, i);
      let b = s.slice(i, j);
      let c = s.slice(j);
      if (a + b !== b + c && b + c !== c + a && c + a !== a + b) count++;
    }
  }
  return count;
}
solution("xzxzx"); // expects 5
solution("xzy"); // expects 1
solution("xxx"); // expects 0
solution("xzxzxzxzxz"); // expects 30
solution("xxxxxxxxxx"); // expects 24
solution("xyzxyzxyzx"); // expects 35
solution("xzxzxxzzxx"); // expects 36
solution("gggggggggggggggggggggggggggggg"); // expects 366
solution("gfgfgfgfgfgfgfgfgfgfgfgfgfgfgf"); // expects 387
