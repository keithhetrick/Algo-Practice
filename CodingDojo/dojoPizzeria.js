// Dojo Pizzeria

// Create a pizzaOven function that accepts seven parameters: crustType, sauceType, cheeses, toppings.
// Create a pizza variable and assign it to an object literal.
// Add the crustType, sauceType, cheeses, and toppings properties to the pizza object.
// Return the pizza object.

function pizzaOven(crustType, sauceType, cheeses, toppings) {
  const pizza = {};

  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;

  return pizza;
}

let pizza1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
console.log("Pizza 1: ", pizza1);

let pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
console.log("Pizza 2: ", pizza2);

let pizza3 = pizzaOven(
  "thin crust",
  "pesto",
  ["parmesan"],
  ["ham", "pineapple"]
);
console.log("Pizza 3: ", pizza3);

let pizza4 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
console.log("Pizza 4: ", pizza4);

// Random Pizza Generator
const crustTypes = [
  "deep dish",
  "hand tossed",
  "thin and crispy",
  "cauliflower",
  "gluten free",
  "hawaiian bread",
  "stuffed crust",
  "flatbread",
  "pretzel",
  "waffle",
  "pan",
];

const sauceTypes = [
  "traditional",
  "marinara",
  "bbq",
  "white sauce",
  "nacho cheese",
  "tikka masala",
  "pesto",
  "alfredo",
  "buffalo",
  "ranch",
  "garlic",
];

const cheeses = [
  "mozzarella",
  "cheddar",
  "feta",
  "swiss cheese",
  "blue cheese",
  "goat cheese",
  "provolone",
  "parmesan",
  "vegan cheese",
  "ricotta",
  "asiago",
];

const toppings = [
  "pepperoni",
  "sausage",
  "chicken",
  "corn",
  "olives",
  "bell peppers",
  "onions",
  "mushrooms",
  "anchovies",
  "pineapple",
  "brisket",
  "short ribs",
  "ham",
  "bacon",
  "spinach",
  "tomatoes",
  "jalapenos",
  "artichokes",
  "broccoli",
  "garlic",
  "basil",
  "oregano",
  "peppers",
  "carrots",
  "potatoes",
  "spinach",
  "eggplant",
  "zucchini",
  "asparagus",
  "avocado",
  "cucumber",
];

const extraSauceTypes = [
  "honey mustard",
  "ketchup",
  "mayo",
  "sriracha",
  "hot sauce",
  "bbq",
  "ranch",
];

function randomRange(max, min) {
  return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
  let i = Math.floor(arr.length * Math.random());
  return arr[i];
}

function randomPizza() {
  const pizza = {};

  pizza.crustType = randomPick(crustTypes);
  pizza.sauceType = randomPick(sauceTypes);
  pizza.extraSauceTypes = randomPick(extraSauceTypes);
  pizza.cheeses = [];
  pizza.toppings = [];

  for (let i = 0; i < randomRange(5, 1); i++) {
    pizza.cheeses.push(randomPick(cheeses));
  }
  for (let i = 0; i < randomRange(4, 0); i++) {
    pizza.toppings.push(randomPick(toppings));
  }
  return pizza;
}

console.log("Random Pizza: ", randomPizza());
