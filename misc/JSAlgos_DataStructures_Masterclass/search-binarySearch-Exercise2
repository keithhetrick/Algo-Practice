function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  console.log(
    `Before loop, start is: ${start}, middle is: ${middle}, end is: ${end}`
  );

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  console.log(
    `After loop, start is: ${start}, middle is: ${middle}, end is: ${end}`
  );
  console.log(`Final Middle is: ${middle}`);

  if (arr[middle] === val) {
    return middle;
  }
  return -1;
}
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 45));
