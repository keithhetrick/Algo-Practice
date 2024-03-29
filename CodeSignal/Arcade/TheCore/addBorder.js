// 72. Add Border
// https://app.codesignal.com/arcade/code-arcade/well-of-integration/ZCD7NQnED724bJtjN

// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

function solution(picture) {
  // Solution 1
  const width = picture[0].length + 2;
  return [
    "*".repeat(width),
    ...picture.map((line) => `*${line}*`),
    "*".repeat(width),
  ];

  // Solution using for loop
  let pictureFrame = [];
  let length = "*".repeat(picture[0].length + 2);

  pictureFrame.push(length);
  for (let i = 0; i < picture.length; i++) {
    picture[i] = "*" + picture[i] + "*";
    pictureFrame.push(picture[i]);
  }
  pictureFrame.push(length);
  return pictureFrame;

  // Solution using hash
  let hash = {};
  let length = "*".repeat(picture[0].length + 2);
  let pictureFrame = picture.map((x) => "*" + x + "*");
  pictureFrame.unshift(length);
  pictureFrame.push(length);
  for (let i = 0; i < pictureFrame.length; i++) {
    hash[i] = pictureFrame[i];
  }
  console.log(hash);
  return hash;

  // Solution 4
  let a = picture.length;
  let b = picture[0].length;
  let c = "*".repeat(b + 2);
  let d = picture.map((x) => "*" + x + "*");
  d.unshift(c);
  d.push(c);
  console.log(d);
  return d;

  // Solution 5
  let length = "*".repeat(picture[0].length + 2);
  let pictureFrame = picture.map((x) => "*" + x + "*");
  pictureFrame.unshift(length);
  pictureFrame.push(length);
  console.log(pictureFrame);
  return pictureFrame;
}
solution(["abc", "ded"]); // expects ["*****", "*abc*", "*ded*", "*****"]
solution(["a"]); // expects ["***", "*a*", "***"]
solution(["aa", "**", "zz"]); // expects ["****", "*aa*", "****", "*zz*", "****"]
solution(["abcde", "fghij", "klmno", "pqrst", "uvwxy"]); // expects ["*******", "*abcde*", "*fghij*", "*klmno*", "*pqrst*", "*uvwxy*", "*******"]
solution(["wzy**"]); // expects ["*******", "*wzy***", "*******"]
