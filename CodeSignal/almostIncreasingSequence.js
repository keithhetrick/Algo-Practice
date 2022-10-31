// Almost Increasing Sequence
// https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG

function solution(sequence) {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1]
      ) {
        return false;
      }
    }
  }
  return count <= 1;
}
solution([1, 3, 2, 1]); // expects false
solution([1, 3, 2]); // expects true
solution([1, 2, 1, 2]); // expects false
solution([3, 6, 5, 8, 10, 20, 15]); // expects false
solution([1, 1, 2, 3, 4, 4]); // expects false
solution([1, 4, 10, 4, 2]); // expects false
solution([1, 1, 1, 2, 3]); // expects false
solution([0, -2, 5, 6]); // expects true
solution([1, 2, 3, 4, 5, 3, 5, 6]); // expects false
solution([40, 50, 60, 10, 20, 30]); // expects false
solution([1, 1]); // expects true
solution([1, 2, 5, 3, 5]); // expects true
solution([1, 2, 5, 5, 5]); // expects false
solution([10, 1, 2, 3, 4, 5, 6, 1]); // expects false
solution([1, 2, 3, 4, 3, 6]); // expects true
solution([1, 2, 3, 4, 99, 5, 6]); // expects true
solution([123, -17, -5, 1, 2, 3, 12, 43, 45]); // expects true
solution([3, 5, 67, 98, 3]); // expects true
