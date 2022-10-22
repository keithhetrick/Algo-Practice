// function processLogs(logs, threshold) {
//   let map = new Map();
//   let result = [];
//   for (let i = 0; i < logs.length; i++) {
//     let log = logs[i].split(" ");
//     let key = log[0];
//     let value = log[1];
//     if (map.has(key)) {
//       let count = map.get(key);
//       map.set(key, count + 1);
//     } else {
//       map.set(key, 1);
//     }
//   }
//   for (let [key, value] of map) {
//     if (value >= threshold) {
//       result.push(key);
//     }
//   }
//   return result.sort();
// }
// processLogs(["1 2 50", "1 7 70", "1 3 20", "2 2 17"], 2);
// processLogs(["88 99 200", "88 99 300", "99 32 100", "12 15 15"], 2);

function processLogs(logs, threshold) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < logs.length; i++) {
    let log = logs[i].split(" ");
    let key = log[0];
    let value = log[1];
    if (map.has(key)) {
      let count = map.get(key);
      map.set(key, count + 1);
    } else {
      map.set(key, 1);
    }
  }
  for (let [key, value] of map) {
    if (value >= threshold) {
      result.push(key);
    }
  }
  return result.sort();
}
processLogs(["1 2 50", "1 7 70", "1 3 20", "2 2 17"], 2);
processLogs(["88 99 200", "88 99 300", "99 32 100", "12 15 15"], 2);
