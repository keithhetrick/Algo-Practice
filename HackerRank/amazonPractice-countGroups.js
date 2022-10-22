// Count Groups

function countGroups(related) {
  let count = 0;
  const visited = new Set();
  for (let i = 0; i < related.length; i++) {
    if (visited.has(i)) continue;
    count++;
    const queue = [i];
    while (queue.length) {
      const node = queue.shift();
      visited.add(node);
      for (let j = 0; j < related[node].length; j++) {
        if (related[node][j] === "1" && !visited.has(j)) {
          queue.push(j);
        }
      }
    }
  }
  return count;
}
countGroups(["1100", "1110", "0110", "0001"]); // expects 2
