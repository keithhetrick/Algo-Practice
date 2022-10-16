function solution(numbers, left, right) {
  let outcome = [];
  for (let i = 0; i < numbers.length; i++) {
    let x = numbers[i] / (i + 1);
    if (x % 2 != 0 && x % 2 != 1) {
      outcome.push(false);
    } else {
      if (left <= x && x <= right) {
        outcome.push(true);
      } else {
        outcome.push(false);
      }
    }
  }
  return outcome;
}

solution([8, 5, 6, 16, 5], 1, 3); // expects [false, false, true, false, true]
