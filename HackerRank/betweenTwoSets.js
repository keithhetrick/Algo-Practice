// Between Two Sets

// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// 1. The elements of the first array are all factors of the integer being considered
// 2. The integer being considered is a factor of all elements of the second array

// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

// Example

// a = [2,6]
// b = [24,36]

// There are two numbers between the arrays: 6 and 12.
// 6%2=0, 6%6=0, 24%6=0 and 36%6=0 for the first value.
// 12%2=0, 12%6=0 and 12%12=0, 36%12=0 for the second value. Return 2.

// Function Description

// Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

// getTotalX has the following parameter(s):

// int a[n]: an array of integers
// int b[m]: an array of integers

// Returns
// int: the number of integers that are between the sets

// Input Format

// The first line contains two space-separated integers, n and m, the number of elements in arrays a and b.
// The second line contains n distinct space-separated integers a[i] where 0 ≤ i < n.
// The third line contains m distinct space-separated integers b[j] where 0 ≤ j < m.

// Sample Input
// 2 3
// 2 4
// 16 32 96

// Sample Output
// 3

// Explanation
// 2 and 4 divide evenly into 4, 8, 12 and 16.
// 4, 8 and 16 divide evenly into 16, 32, 96.

// 4, 8 and 16 are the only three numbers for which each element of a is a factor and each is a factor of all elements of b.

function getTotalX(a, b) {
  let count = 0;
  let minA = 0;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] < a[i + 1]) {
        minA = a[i + 1] % a[i];
        count++;
      }
      if (j[i] < j[i + 1]) {
        minB = j[i + 1] % minA;
        console.log(minB, minA);
      }
    }
  }
  return count;

  // let sumA = 0;
  // let sumB = 0;
  // result = 0;

  // for (const num of a) sumA = sumA + num * num;
  // for (const num of b) sumB = sumB + num * num;
  // if (sumA > sumB) result = sumA % sumB;
  // if (sumA < sumB) result = sumB % sumA;
  // return result;
}
getTotalX([2, 4], [16, 32, 96]); // expects 3
getTotalX([2], [20, 30, 12]); // expects 1
getTotalX([2], [100]); // expects 9
getTotalX([2, 3, 6], [42, 84]); // expects 2
getTotalX([1], [72, 48]); // expects 8
