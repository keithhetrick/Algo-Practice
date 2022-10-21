// 41. Replace Middle

// We define the middle of the array arr as follows:

// if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;

// if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.

// Given array arr, your task is to find its middle, and, if it consists of two elements, replace those elements with the value of middle. Return the resulting array as the answer.

function solution(arr) {
  let middle = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    arr.splice(middle - 1, 2, arr[middle - 1] + arr[middle]);
  }
  return arr;
}
solution([7, 2, 2, 5, 10, 7]); // expects [7, 2, 7, 10, 7]
solution([-5, -5, 10]); // expects [-5, -5, 10]
solution([45, 23, 12, 33, 12, 453, -234, -45]); // expects [45, 23, 12, 33, 12, 453, -234, -45]
solution([2, 8]); // expects [10]
solution([-12, 34, 40, -5, -12, 4, 0, 0, -12]); // expects [-12, 34, 40, -5, -12, 4, 0, 0, -12]
solution([9, 0, 15, 9]); // expects [9, 15, 9]
solution([-6, 6, -6]); // expects [-6, 6, -6]
solution([26, 26, -17]); // expects [26, 26, -17]
solution([-7, 5, 5, 10]); // expects [-7, 10, 10]
