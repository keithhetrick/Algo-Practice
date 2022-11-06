// Mutations
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

function mutation(arr) {
  let arr1 = arr[0].toLowerCase();
  let arr2 = arr[1].toLowerCase();

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) return false;
  }
  return true;
}
mutation(["hello", "hey"]); // expects false
mutation(["hello", "Hello"]); // expects true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // expects true
mutation(["Mary", "Army"]); // expects true
mutation(["Mary", "Aarmy"]); // expects true
mutation(["Alien", "line"]); // expects true
mutation(["floor", "for"]); // expects true
mutation(["hello", "neo"]); // expects false
mutation(["voodoo", "no"]); // expects false
mutation(["ate", "date"]); // expects false
mutation(["Tiger", "Zebra"]); // expects false
mutation(["Noel", "Ole"]); // expects true
