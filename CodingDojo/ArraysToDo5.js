// Arrays To Do 5

// Average (Warmup)

// (Warm-up) Always run through some quick algorithm problems before any coding interview, to get yourself warmed up. How about this one: return the average value of an array of unsorted numbers.

function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // expects 5.5

// Balance Point

// Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s. Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false.

function balancePoint(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i];
    if (leftSum === sum - leftSum) {
      return true;
    }
  }
  return false;
}
balancePoint([1, 2, 3, 4, 10]); // expects true
balancePoint([1, 2, 4, 2, 1]); // expects false

// Balance Index

// Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2, but [9,9] → -1.

function balanceIndex(arr) {
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < arr.length; i++) {
    rightSum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += arr[i];
  }
  return -1;
}
balanceIndex([-2, 5, 7, 0, 3]); // expects 2
balanceIndex([9, 9]); // expects -1
balanceIndex([1, 2, 3, 4, 10]); // expects -1
