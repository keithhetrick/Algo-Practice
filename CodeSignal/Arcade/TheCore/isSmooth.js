// 40. Is Smooth

// We define the middle of the array arr as follows:

// if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
// if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
// An array is called smooth if its first and its last elements are equal to one another and to the middle. Given an array arr, determine if it is smooth or not.

// Example

// For arr = [7, 2, 2, 5, 10, 7], the output should be
// solution(arr) = true.

// The first and the last elements of arr are equal to 7, and its middle also equals 2 + 5 = 7. Thus, the array is smooth and the output is true.

// For arr = [-5, -5, 10], the output should be
// solution(arr) = false.

// The first and middle elements are equal to -5, but the last element equals 10. Thus, arr is not smooth and the output is false.

function solution(arr) {
  let start = arr[0];
  let end = arr[arr.length - 1];
  let mid1 = Math.floor(arr.length / 2);
  let mid2 = Math.floor(arr[mid1 - 1]);
  let middle = arr[mid1] + (arr.length % 2 ? 0 : mid2);

  return start === middle && middle === end;
}
solution([7, 2, 2, 5, 10, 7]); // expects true
solution([-5, -5, 10]); // expects false
solution([4, 2]); // expects false
solution([45, 23, 12, 33, 12, 453, -234, -45]); // expects false
solution([-12, 34, 40, -5, -12, 4, 0, 0, -12]); // expects true
solution([9, 0, 15, 9]); // expects false
solution([-6, 6, -6]); // expects false
solution([26, 26, -17]); // expects false
solution([-7, 5, 5, 10]); // expects false
solution([3, 4, 5]); // expects false
solution([-5, 3, -1, 9]); // expects false
