// Naive String Search

// Loop over the longer string
// Loop over the short string
// If chars don't match, keep going
// If you complete the inner loop & find a match, increment the count of matches
// Return the final count

function naiveSearch(str1, str2) {
  let counter = 0;

  for (let i = 0; i < str1.length; i++) {
    // console.log(`Current str1 index is: ${str1[i]}, Current "i" is: ${i}`)
    for (let j = 0; j < str2.length; j++) {
      // console.log(`Current str2 index is: ${str2[j]}, Current "j" is: ${j}`)
      // console.log(`${str2[j]}, ${str1[i+j]}`)
      if (str2[j] !== str1[i + j]) break;
      if (j === str2.length - 1) counter++;
    }
  }
  console.log(`FINAL COUNT IS: ${counter}`);
  return counter;
}
console.log(naiveSearch("lorie loled", "lol")); // 1
console.log(naiveSearch("lorie loled", "lo")); // 2
