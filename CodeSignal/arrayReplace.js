//  Array Replace

function solution(inputArray, elemToReplace, substitutionElem) {
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) inputArray[i] = substitutionElem;
  }
  return inputArray;
}
solution([1, 2, 1], 1, 3); // expects [3, 2, 3]
solution([1, 2, 3, 4, 5], 3, 0); // expects [1, 2, 3, 4, 5]
