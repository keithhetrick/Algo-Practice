function solution(numbers) {
  let array = [];

  for (let i = 0; i < numbers.length - 2; i++) {
    let a = numbers[i];
    let b = numbers[i + 1];
    let c = numbers[i + 2];
    if (a < b && b > c) array.push(1);
    else if (a > b && b < c) array.push(1);
    else array.push(0);
  }
  return array;
}

solution([1, 2, 1, 3, 4]); // expects [1,1,0]
