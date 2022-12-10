// 1710. Maximum Units on a Truck
// https://leetcode.com/problems/maximum-units-on-a-truck/

var maximumUnits = function (boxTypes, truckSize) {
  // Solution 1
  let sorted = boxTypes.sort((a, b) => b[1] - a[1]);
  let total = 0;
  let count = 0;
  for (let i = 0; i < sorted.length; i++) {
    let boxCount = sorted[i][0];
    let boxUnits = sorted[i][1];
    while (boxCount > 0 && count < truckSize) {
      boxCount--;
      count++;
      total += boxUnits;
    }
  }
  console.log(total);
  return total;

  // Solution 2
  // Sort box types values by unit size (boxTypes[1])
  // Loop through the types and add items until box number is full

  boxTypes.sort((a, b) => b[1] - a[1]);
  console.log("BOXTYPES:", boxTypes);
  let count = 0;
  let items = 0;

  // Early escape
  if (boxTypes.length === 0) {
    return 0;
  }

  // Loop to find the items
  for (let i = 0; i < boxTypes.length; i++) {
    if (boxTypes[i][0] < truckSize - count) {
      items += boxTypes[i][0] * boxTypes[i][1];
      count += boxTypes[i][0];
      console.log(
        "BOXES:",
        boxTypes[i][0],
        "ITEMS PER BOX:",
        boxTypes[i][1],
        "TOTAL ITEMS:",
        items
      );
    } else {
      let addBoxes = truckSize - count;
      items += addBoxes * boxTypes[i][1];
      count += addBoxes;
      console.log(
        "BOXES (Partial):",
        addBoxes,
        "ITEMS PER BOX:",
        boxTypes[i][1],
        "TOTAL ITEMS:",
        items
      );
      break;
    }
  }
  console.log(items);
  return items;

  // Solution 3
  let boxTypesSorted = boxTypes.sort((a, b) => b[1] - a[1]);
  let numOfBoxes = 0;
  let numOfUnits = 0;
  for (let i = 0; i < boxTypesSorted.length; i++) {
    let boxCount = boxTypesSorted[i][0];
    let boxUnits = boxTypesSorted[i][1];
    let boxesRemain = boxCount;
    while (boxesRemain > 0 && numOfBoxes < truckSize) {
      boxesRemain--;
      numOfBoxes++;
      numOfUnits += boxUnits;
    }
  }
  console.log(numOfUnits);
  return numOfUnits;
};
maximumUnits(
  [
    [1, 3],
    [2, 2],
    [3, 1],
  ],
  4
); // expects 8
maximumUnits(
  [
    [5, 10],
    [2, 5],
    [4, 7],
    [3, 9],
  ],
  10
); // expects 91
