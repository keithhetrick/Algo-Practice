// Frequency Counter / Multiple Pointers - areThereDuplicates

// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Hash Map
function areThereDuplicates(...args) {
  let hash = {};

  for (let i = 0; i < args.length; i++) {
    if (!hash[args[i]]) hash[args[i]] = 1;
    else hash[args[i]]++;
  }
  for (let key in hash) {
    if (hash[key] > 1) return true;
  }
  return false;
}
areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true

// Two Pointers
function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) return true;
    start++;
    next++;
  }
  return false;
}
areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true

// One Liner
function areThereDuplicates(...args) {
  return new Set(args).size !== args.length;
}
areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true
