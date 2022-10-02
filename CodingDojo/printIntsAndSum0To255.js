// Print integers from 0 to 255, and with each integer print the sum so far.

// For Loop
function printIntsAndSum0to255() {
  let sum = 0;
  for (let i = 0; i <= 255; i++) {
    sum += i;
    console.log("Num is: ", i, "Sum is: ", sum);
  }
}
printIntsAndSum0to255();

// While Loop
function printIntsAndSum0to255() {
  let i = 0;
  let sum = 0;
  while (i <= 255) {
    console.log("Num is: ", i, "Sum is: ", sum);
    i++;
    sum += i;
  }
}
printIntsAndSum0to255();
