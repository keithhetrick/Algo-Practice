// Simple Text Editor
// https://www.hackerrank.com/challenges/simple-text-editor/problem

function processData(input) {
  // create an array for all of the operations
  let operation = input.split("\n");
  let s = "";
  let state = [""];
  let statePointer = -1;

  for (let i = 1; i < operation.length; i++) {
    switch (operation[i].charAt(0)) {
      case "1":
        // append
        s += operation[i].slice(2);
        state.push(s);
        break;
      case "2":
        // delete
        let delNum = parseInt(operation[i].slice(2));
        s = s.slice(0, s.length - delNum);
        state.push(s);
        break;
      case "3":
        // print the kth character
        k = parseInt(operation[i].slice(2));
        console.log(s.charAt(k - 1));
        break;
      case "4":
        // reverse the previous operation
        state.pop();
        s = state[state.length - 1];
        break;
    }
  }
}
processData(`8
1 abc
3 3
2 3
1 xy
3 2
4 1
4 1
3 1`);
