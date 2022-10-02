// Analyze an array’s values and print the average.

const arr = [80, 5, 77, 22, 88, 95, 68, 3, 12];

function printAverageOfArray() {
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    average += currentNum;
  }
  average = average / arr.length;
  console.log(average);
  return average;
}
printAverageOfArray();
