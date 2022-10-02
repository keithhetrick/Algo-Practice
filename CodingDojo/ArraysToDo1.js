// Push Front
function pushToFrontOne() {
  let arr = [5, 7, 2, 3];
  let val = 8;
  arr.push(0);
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  console.log("pushToFrontOne :", arr);
}
pushToFrontOne();
// Expected result: [ 8, 5, 7, 2, 3 ]

function pushToFrontTwo() {
  let arr = [99];
  let val = 7;
  arr.push(0);
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  console.log("pushToFrontTwo : ", arr);
}
pushToFrontTwo();
// Expected result:  [ 7, 99 ]

function pushToFrontOneAlt() {
  let arr = [5, 7, 2, 3];
  arr.unshift(8);
  console.log("pushToFrontOneAlt : ", arr);
}
pushToFrontOneAlt();
// Expected result: [ 8, 5, 7, 2, 3 ]

function pushToFrontTwoAlt() {
  let arr = [99];
  arr.unshift(7);
  console.log("pushToFrontTwoAlt : ", arr);
}
pushToFrontTwoAlt();
// Expected result: [ 7, 99 ]

// Pop Front
function popFrontOne() {
  let arr = [0, 5, 10, 15];
  arr.shift();
  console.log("popFrontOne : ", arr);
}
popFrontOne();
// Expected result: 5, 10, 15

function popFrontTwo() {
  let arr = [4, 5, 7, 9];
  arr.shift();
  console.log("popFrontTwo : ", arr);
}
popFrontTwo();
// Expected result: [5, 7, 9]

// Insert At - Variations at insertAt3 & insertAt4
function insertAtOne() {
  arr = [100, 200, 5];
  index = 2;
  value = 311;
  for (let i = arr.length; i >= index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = value;
  return arr;
}
insertAtOne();
console.log("insertAtOne : ", insertAtOne());
// Expected result: [ 100, 200, 311, 5 ]

function insertAtTwo() {
  arr = [9, 33, 7];
  index = 1;
  value = 42;
  for (let i = arr.length; i >= index; i--) {
    arr[i] = arr[i - 1];
  }
  arr[index] = value;
  return arr;
}
insertAtTwo();
console.log("insertAtTwo : ", insertAtTwo());
// Expected result: [ 9, 42, 33, 7 ]

function insertAtOneAlt() {
  let arr = [100, 200, 5];
  let newArr1 = arr.splice(2, 0, 311);
  return arr;
}
insertAtOneAlt();
console.log("insertAtOneAlt : ", insertAtOneAlt());
// Expected result: [ 100, 200, 311, 5 ]

function insertAtTwoAlt() {
  let arr = [9, 33, 7];
  let newArr2 = arr.splice(1, 0, 42);
  return arr;
}
insertAtTwoAlt();
console.log("insertAtTwoAlt : ", insertAtTwoAlt());
// Expected result: [ 9, 42, 33, 7  ]

// Remove At
