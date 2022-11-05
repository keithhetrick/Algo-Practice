// Multiple Pointers - averagePair

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

function averagePair(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === target) return true;
    if (avg < target) start++;
    else end--;
  }
  return false;
}
averagePair([1, 2, 3], 2.5); // expects true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // expects true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // expects false
averagePair([], 4); // expects false
