// Taco Truck

// Joe drives a taco truck in the booming town of Squaresburg. He uses an array of [x,y] coordinates corresponding to locations of his customers. They walk to his truck, but he is fair-minded so he wants to minimize total distance from truck to customers. City blocks are perfect squares, and every street is two-way, at perfect right angles. He only parks by street corners (coordinates like [37,-16]). Customers only travel on streets: coordinate [2,-2] is distance 4 from [0,0]. Joe checks the array before deciding where to park. Given a customer coordinate array, return an optimal taco truck location. Example: given [ [10,0], [-1,-10], [2,4] ], return [2,0], as total distance is 25 (8+13+4).

function tacoTruck(arr) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < arr.length; i++) {
    x += arr[i][0];
    y += arr[i][1];
  }
  return [x / arr.length, y / arr.length];
}
tacoTruck([
  [10, 0],
  [-1, -10],
  [2, 4],
]); // expects [2, 0]
