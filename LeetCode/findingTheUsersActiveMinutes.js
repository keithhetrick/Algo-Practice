// 1817. Finding the Users Active Minutes
// https://leetcode.com/problems/finding-the-users-active-minutes/

var findingUsersActiveMinutes = function (logs, k) {
  let result = new Array(k).fill(0);

  // Solution 1
  let logsMap = {};

  for (let i = 0; i < logs.length; i++) {
    if (!logsMap[logs[i][0]]) {
      logsMap[logs[i][0]] = [logs[i][1]];
    } else {
      logsMap[logs[i][0]].push(logs[i][1]);
    }
  }

  for (let key in logsMap) {
    logsMap[key] = [...new Set(logsMap[key])];
    result[logsMap[key].length - 1]++;
  }

  console.log("\nRESULT: ", result);
  return result;

  // Solution 2
  let map = new Map();
  for (let log of logs) {
    let [id, time] = log;
    if (!map.has(id)) {
      map.set(id, new Set());
    }
    map.get(id).add(time);
  }
  for (let [id, times] of map) {
    result[times.size - 1]++;
  }

  console.log("\nRESULT: ", result);
  return result;
};
findingUsersActiveMinutes(
  [
    [0, 5],
    [1, 2],
    [0, 2],
    [0, 5],
    [1, 3],
  ],
  5
);
findingUsersActiveMinutes(
  [
    [1, 1],
    [2, 2],
    [2, 3],
  ],
  4
);
