// 42. Make Array Consecutive 2

// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example
// For statues = [6, 2, 3, 8], the output should be makeArrayConsecutive2(statues) = 3. Ratiorg needs statues of sizes 4, 5 and 7.

function solution(statues) {
  let min = Math.min(...statues);
  let max = Math.max(...statues);

  let count = 0;
  for (let i = min; i < max; i++) {
    if (!statues.includes(i)) {
      count++;
    }
  }
  return count;
}
solution([6, 2, 3, 8]); // expects 3
solution([0, 3]); // expects 2
solution([5, 4, 6]); // expects 0
solution([6, 3]); // expects 2
solution([1]); // expects 0
