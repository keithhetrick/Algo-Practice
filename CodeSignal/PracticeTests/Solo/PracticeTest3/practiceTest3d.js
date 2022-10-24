// practiceTest3d

// A sawtooth sequence is a sequence of numbers that alternate between increasing and decreasing. In other words, each element is either strictly greater than its neighbouring elements or strictly less than its neighbouring elements.

// examples

// Given an array of integers arr, your task is to count the number of contiguous subarrays that represent a sawtooth sequence of at least two elements.

// Example

// For arr = [9, 8, 7, 6, 5], the output should be solution(arr) = 4.

// Since all the elements are arranged in decreasing order, it won't be possible to form any sawtooth subarrays of length 3 or more. There are 4 possible subarrays containing two elements, so the answer is 4.

// For arr = [10, 10, 10], the output should be solution(arr) = 0.

// Since all of the elements are equal, none of subarrays can be sawtooth, so the answer is 0.

// For arr = [1, 2, 1, 2, 1], the output should be solution(arr) = 10.

// All contiguous subarrays containing at least two elements satisfy the condition of problem. There are 10 possible contiguous subarrays containing at least two elements, so the answer is 10.

function solution(arr) {
  let max = 0;
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let left = arr[start];
    let right = arr[end];
    if (left < right) {
      start++;
    } else if (left > right) {
      end--;
    } else {
      start++;
      end--;
    }
    max++;
  }
  return max;
}
solution([9, 8, 7, 6, 5]); // expects 4
solution([10, 10, 10]); // expects 0
solution([1, 2, 1, 2, 1]); // expects 10
solution([-1000000000, 1000000000]); // expects 1
solution([944846388, 993352669, 473719581, 896064794, 646066085, 727243804]); // expects 15
solution([
  -442024811, 447425003, 365210904, 823944047, 943356091, -781994958, 872885721,
  -296856571, 230380705, 944396167, -636263320, -942060800, -116260950,
  -126531946, -838921202,
]); // expects 31
// solution([
//   -778277028, -509675834, -828663475, 190114564, -34919218, -34919218,
//   106447210, -887980502, -399561546, -319453881, -319453881, 564702467,
//   -512179848, 634452898, -279371457, -279371457, -72310717, -770556513,
//   -629539596, 112073567,
// ]); // expects 34
// solution([
//   729980761, 807416009, 56805876, -130413010, -825053133, -556881141, 230958990,
//   -478929446, -924629440, -566603124, -797009167, -820145103, -591253244,
//   -455778484, 489147236, 641601459, -391247603, -344881231, 482300183,
//   -448563001, -649209742, 339937564, -747247861, 944949638, -949867581,
//   -425433565, 515658985, -497575483, 844930337, 806389763, -528271683,
//   232507651, -489823657, -879714112, -972125473, 715987091, 384822968,
//   326442019, -354152717, -399997164, -706068970, 492028864, 389150386,
//   -278750783, 287917995, 548965483, -39240411, 946703941, -671406475, 980903841,
// ]); // expects 101
