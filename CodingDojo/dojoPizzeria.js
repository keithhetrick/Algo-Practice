// Dojo Pizzeria

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
console.log(pizza1);

let pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
console.log(pizza2);

let pizza3 = pizzaOven(
  "thin crust",
  "pesto",
  ["parmesan"],
  ["ham", "pineapple"]
);
console.log(pizza3);

let pizza4 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
console.log(pizza4);
