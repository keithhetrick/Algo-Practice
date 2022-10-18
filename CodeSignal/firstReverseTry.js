// First Reverse Try

function solution(arr) {
  // let newArr = [];
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   if (arr === null) return newArr;
  //   else newArr.push(arr[i]);
  // }
  // return newArr;

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) newArr.push(arr[arr.length - 1]);
    else if (i === arr.length - 1) newArr.push(arr[0]);
    else newArr.push(arr[i]);
  }
  return newArr;
}
solution([1, 2, 3, 4, 5]); // expects [5, 2, 3, 4, 1]
solution([]); // expects []
solution([239]); // expects [239]
solution([23, 54, 12, 3, 4, 56, 23, 12, 5, 324]); // expects [324, 54, 12, 3, 4, 56, 23, 12, 5, 23]
solution([-1, 1]); // expects [1, -1]
solution([
  88, -101, -310, 818, 747, -888, -183, -687, -723, 188, -611, 677, -597, 293,
  -295, -162, -265, 368, 346, 81, -831, 198, -94, 685, -434, -241, -566, -397,
  501, -183, 366, -669, 96, -592, 358, 598, 444, -929, 769, -361, -754, 218,
  -464, 332, 893, 422, -192, -287, -850, 543,
]); // expects [543, -101, -310, 818, 747, -888, -183, -687, -723, 188, -611, 677, -597, 293, -295, -162, -265, 368, 346, 81, -831, 198, -94, 685, -434, -241, -566, -397, 501, -183, 366, -669, 96, -592, 358, 598, 444, -929, 769, -361, -754, 218, -464, 332, 893, 422, -192, -287, -850, 88]
