// 2418. Sort the People
// https://leetcode.com/problems/sort-the-people/

var sortPeople = function (names, heights) {
  // Solution 1
  let array = [];
  for (let i = 0; i < names.length; i++) {
    array.push([names[i], heights[i]]);
  }

  let sorted = array.sort((a, b) => b[1] - a[1]);
  let nameArr = [];

  for (let i = 0; i < sorted.length; i++) {
    nameArr.push(sorted[i][0]);
  }
  console.log(nameArr);
  return nameArr;

  // // Solution 2
  // let map = {};
  // for (let i = 0; i < names.length; i++) {
  //   map[names[i]] = heights[i];
  //   console.log("Map: ", map);
  // }

  // let sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);
  // let newArr = [];

  // for (const [key] of sorted) {
  //   newArr.push(key);
  // }
  // console.log(newArr);
  // return newArr;
};
sortPeople(["Mary", "John", "Emma"], [180, 165, 170]); // expects ["Mary","Emma","John"]
sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]); // expects ["Bob","Alice","Bob"]
