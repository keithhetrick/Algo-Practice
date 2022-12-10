// 2079. Watering Plants
// https://leetcode.com/problems/watering-plants/

var wateringPlants = function (plants, capacity) {
  let steps = 0;
  let maxCan = capacity;
  for (let i = 0; i < plants.length; i++) {
    if (plants[i] <= capacity) {
      capacity -= plants[i];
      steps++;
    } else {
      steps += i * 2;
      capacity = maxCan;
      i--;
    }
  }
  console.log(steps);
  return steps;
};
wateringPlants([2, 2, 3, 3], 5); // expects 14
wateringPlants([1, 1, 1, 4, 2, 3], 4); // expects 30
wateringPlants([7, 7, 7, 7, 7, 7, 7], 8); // expects 49
