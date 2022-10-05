let usernames = [
  "tommy",
  "monkeygurl",
  "dinesh123",
  "dinesh1234",
  "patrick33",
  "cats4lyfe",
  "timothy",
  "tom",
  "tommy1",
  "tomm_y",
  "tom_my",
  "i_hate_cats",
  "pickle_luvr",
  "pickle_hater",
  "dog_guy",
  "q",
  "juan987",
];
console.log(usernames.indexOf("i_hate_cats"));
console.log(usernames.indexOf("i_hate_cats111"));
console.log(usernames.includes("i_hate_cats"));
console.log(usernames.includes("i_hate_cats111"));

let states = [
  "Alabama",
  "Alaska",
  "American Samoa",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Federated States of Micronesia",
  "Florida",
  "Georgia",
  "Guam",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Marshall Islands",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Northern Mariana Islands",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Palau",
  "Pennsylvania",
  "Puerto Rico",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virgin Island",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];
console.log("State index is: " + linearSearch(states, "Texas"));

let arr = [5, 8, 1, 100, 12, 3, 12];
console.log(arr.indexOf(12));

// Linear Search Pseudocode
// function that accepts an array & a value
// loop through the array and check if the current array element is equal to the value
// If it is, return the index at which the element is found
// If the value is never found, return -1

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
// linearSearch();
console.log(linearSearch([34, 56, 1, 2], 1)); // 2
console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
console.log(linearSearch([100], 100)); // 0
console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
console.log(linearSearch([100], 200)); // -1
