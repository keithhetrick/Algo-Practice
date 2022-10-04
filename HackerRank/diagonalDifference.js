function diagonalDifference(arr) {
  let leftToRight = 0;
  let rightToLeft = 0;
  let x = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    leftToRight += arr[i][i];
  }

  for (let i = 0; i < arr.length; i++) {
    rightToLeft += arr[i][x];
    x = x - 1;
  }

  let difference = Math.abs(leftToRight - rightToLeft);
  console.log(difference);
  return difference;
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
