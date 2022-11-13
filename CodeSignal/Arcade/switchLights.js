// 71. Switch Lights
// https://app.codesignal.com/arcade/code-arcade/well-of-integration/x3ix7CY93z2bwKDtG

let start = Date.now();

function solution(a) {
  // Solution using single for loop
  for (let i = 0; i < a.length; i++) {
    if (a[i] == 1) {
      a[i] = 0;
      let b = a.slice(0, i);
      let c = a.slice(i, a.length);
      let b2 = b.join("");
      let b3 = b2
        .replaceAll("0", "2")
        .replaceAll("1", "0")
        .replaceAll("2", "1");
      a = Array.from(b3, Number).concat(c);
    }
  }

  // Solution using nested for loop
  for (let i = 0; i < a.length; i++) {
    if (a[i] == 1) {
      a[i] = 0;
      for (let j = 0; j < i; j++) {
        if (a[j] == 1) a[j] = 0;
        else a[j] = 1;
      }
    }
  }

  console.log("Perfomance: ", performance.now());
  console.log("a: ", a);
  return console.log("Time (in milliseconds): ", Date.now() - start);
}

solution([1, 1, 1, 1, 1]); // expects [0,1,0,1,0]
solution([0, 0]); // expects [0,0]
solution([1, 0, 0, 1, 0, 1, 0, 1]); // expects [1, 1, 1, 0, 0, 1, 1, 0]
solution([1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1]); // expects [1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0]
solution([1, 1, 0, 0, 1]); // expects [0, 1, 1, 1, 0]
solution([1, 1, 1, 0, 1, 1, 1]); // expects [1, 0, 1, 1, 0, 1, 0]
solution([
  1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0,
  1, 0, 1, 1, 1, 1, 1,
]); // expects [1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0]
solution([0, 0, 0, 0, 0, 0]); // expects [0, 0, 0, 0, 0, 0]
solution([1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1]); // expects [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
