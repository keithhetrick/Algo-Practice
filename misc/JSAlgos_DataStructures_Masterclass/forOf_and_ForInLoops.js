// For Of Loop - used for arrays
const names = ["Youtube", "Facebook", "Instagram", "Netflix", "Amazon"];

for (const n of names) {
  console.log(n);
}

// For In Loop - used for objects
const symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "Facebook",
  nflx: "Netflix",
  amz: "Amazon",
  lco: "LearnCodeOnline.in",
};

for (const n in symbols) {
  console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}
