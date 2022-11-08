// 46. Pages Numbering With Ink
// https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/m9wjpkCjgofg7gs8N

function solution(current, numberOfDigits) {
  let digits = numberOfDigits;
  let page = current;

  while (digits >= page.toString().length) {
    digits -= page.toString().length;
    page++;
  }
  return page - 1;
}
solution(1, 5); // expects 5
solution(21, 5); // expects 22
solution(8, 4); // expects 10
solution(21, 6); // expects 23
solution(10, 3); // expects 10
solution(76, 250); // expects 166
solution(80, 1000); // expects 419
