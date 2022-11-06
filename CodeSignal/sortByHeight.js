// Sort By Height
// https://app.codesignal.com/arcade/intro/level-3/D6qmdBL2NYz49XHwM

function solution(a) {
  let newArr = [];
  let sortedArr = a.filter((e) => e !== -1).sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) newArr.push(a[i]);
    if (a[i] !== -1) newArr.push(sortedArr.shift());
  }
  return newArr;
}
solution([-1, 150, 190, 170, -1, -1, 160, 180]); // expects [-1, 150, 160, 170, -1, -1, 180, 190]
solution([-1, -1, -1, -1, -1]); // expects [-1, -1, -1, -1, -1]
solution([-1]); // expects [-1]
solution([4, 2, 9, 11, 2, 16]); // expects [2, 2, 4, 9, 11, 16]
solution([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]); // expects [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]
solution([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]); // expects [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]
