// 11. Is Lucky
// https://app.codesignal.com/arcade/intro/level-3/3AdBC97QNuhF6RwsQ

function solution(n) {
  let str = n.toString().split("");
  let middle = str.length / 2;
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < str.length; i++) {
    if (i < middle) sum1 += Number(str[i]);
    else sum2 += Number(str[i]);
  }
  if (sum1 === sum2) return true;
  else return false;
}
solution(1230); // expects true
solution(239017); // expects false
solution(134008); // expects true
solution(10); // expects false
solution(11); // expects true
solution(1010); // expects true
solution(261534); // expects false
solution(100000); // expects false
solution(999999); // expects true
solution(123321); // expects true
