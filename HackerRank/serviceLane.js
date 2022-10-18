// Service Lane

// A driver is driving on the freeway. The check engine light of his vehicle is on, and the driver wants to get service immediately. Luckily, a service lane runs parallel to the highway. It varies in width along its length.

// function serviceLane(n, cases) {
// Write your code here

// }

function serviceLane(n, cases, width) {
  let answers = "";

  for (let i = 0; i < cases.length; i++) {
    let arr = width.slice(cases[i][0], cases[i][0] + 1);
    let num = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (num > arr[i]) {
        num = arr[i];
      }
    }
    answers = answers + num + "\n";
  }
  return answers;
}
serviceLane(
  8,
  [
    [0, 3],
    [4, 6],
    [6, 7],
    [3, 5],
    [0, 7],
  ],
  [2, 3, 1, 2, 3, 2, 3, 3]
);
