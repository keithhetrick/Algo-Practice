// 18. Array Packing

// You are given an array of up to four non-negative integers, each less than 256.

// Your task is to pack these integers into one number M in the following way:

// The first element of the array occupies the first 8 bits of M;
// The second element occupies next 8 bits, and so on.

// Return the obtained integer M.

// Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. For further clarification see the following example.

// Example
// For a = [24, 85, 0], the output should be
// solution(a) = 21784.

// An array [24, 85, 0] looks like [00011000, 01010101, 00000000] in binary.
// After packing these into one number we get 00000000 01010101 00011000 (spaces are placed for convenience), which equals to 21784.

function solution(a) {
  const binaryArr = [];

  for (const num of a) {
    binaryArr.unshift(convertDecimalToBinary(num));
  }
  const binary = binaryArr.join("");
  return parseInt(binary, 2);
}

function convertDecimalToBinary(num) {
  return num.toString(2).padStart(8, "0");
}
solution([24, 85, 0]); // expects 21784
solution([23, 45, 39]); // expects 2567447
solution([1, 2, 4, 8]); // expects 134480385
solution([5]); // expects 5
solution([187, 99, 42, 43]); // expects 724198331
