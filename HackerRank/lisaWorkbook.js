// Lisa's Workbook
// https://www.hackerrank.com/challenges/lisa-workbook/problem

function workbook(n, k, arr) {
  let book = [];
  for (let i = 0; i < n; i++) {
    let pages = Math.ceil(arr[i] / k);
    let arrayProblem = [...Array(arr[i]).keys()].map((x) => ++x);

    for (let j = 0; j < pages; j++) {
      book.push(arrayProblem.slice(0, k));
      arrayProblem = arrayProblem.slice(k);
    }
  }
  let count = 0;
  for (let i = 0; i < book.length; i++) {
    if (book[i].includes(i + 1)) count++;
  }
  return count;
}
workbook(5, 3, [4, 2, 6, 1, 10]); // expects 4
