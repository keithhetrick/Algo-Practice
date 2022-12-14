// 10. Knapsack Light

// You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

// Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

// Example
// For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, the output should be
// solution(value1, weight1, value2, weight2, maxW) = 10.

// You can only carry the first item.

// For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 9, the output should be
// solution(value1, weight1, value2, weight2, maxW) = 16.

// You're strong enough to take both of the items with you.

// For value1 = 5, weight1 = 3, value2 = 7, weight2 = 4, and maxW = 6, the output should be
// solution(value1, weight1, value2, weight2, maxW) = 7.

// You can't take both items, but you can take any of them.

function solution(value1, weight1, value2, weight2, maxW) {
  if (weight1 > maxW && weight2 > maxW) return 0;
  else if (weight1 + weight2 <= maxW) return value1 + value2;
  else if (weight1 <= maxW && weight2 > maxW) return value1;
  else if (weight1 <= maxW && weight2 > maxW) return value2;
  else {
    return value2 > value1 ? value2 : value1;
  }
}
solution(10, 5, 6, 4, 8); // expects 10
solution(10, 5, 6, 4, 9); // expects 16
solution(5, 3, 7, 4, 6); // expects 7
solution(10, 2, 11, 3, 1); // expects 0
solution(15, 2, 20, 3, 2); // expects 15
solution(2, 5, 3, 4, 5); // expects 3
solution(4, 3, 3, 4, 4); // expects 4
solution(3, 5, 3, 8, 10); // expects 3
