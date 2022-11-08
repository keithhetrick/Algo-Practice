// 28. Lineup
// https://app.codesignal.com/arcade/code-arcade/loop-tunnel/8rqs3BLpdKePhouQM

function solution(commands) {
  let turns = 0;
  let sameDirection = 0;

  for (let i = 0; i < commands.length; i++) {
    if (commands[i] === "L" || commands[i] === "R") turns++;
    if (commands[i] === "A") turns += 2;
    if (turns % 2 === 0) sameDirection++;
  }
  return sameDirection;
}
solution("LLARL"); // expects 3
solution("RLR"); // expects 1
solution(""); // expects 0
solution("L"); // expects 0
solution("A"); // expects 1
solution("AAAAAAAAAAAAAAA"); // expects 15
solution("RRRRRRRRRRLLLLLLLLLRRRRLLLLLLLLLL"); // expects 16
solution("AALAAALARAR"); // expects 5
