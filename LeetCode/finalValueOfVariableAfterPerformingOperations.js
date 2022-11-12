// 2011. Final Value of Variable After Performing Operations
// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/

function finalValueAfterOperations(operations) {
  let value = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "++X" || operations[i] === "X++") value++;
    if (operations[i] === "--X" || operations[i] === "X--") value--;
  }
  return value;
}
finalValueAfterOperations(["--X", "X++", "X++"]); // expects 1
finalValueAfterOperations(["++X", "++X", "X++"]); // expects 3
