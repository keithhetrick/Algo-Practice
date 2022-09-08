// Create an array with all the odd integers between 1 and 255 (inclusive).

let arr = [];
function returnOddsArray1to255() {
  for (let i = 1; i <= 255; i += 2) {
    arr.push(i);
  }
  console.log(arr);
}
returnOddsArray1to255(arr);

let arr = [];
function returnOddsArray1to255() {
  let i = 1;
  while (i <= 255) {
    i += 2;
    arr.push(i);
  }
  console.log(arr);
}
returnOddsArray1to255(arr);
